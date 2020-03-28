<template>
  <div class="cutout" v-show="visible">
    <!--预览Canvas-->
    <canvas class="previewer" ref="pCanvas"></canvas>

    <!--遮罩层-->
    <div class="mask" v-if="showMask"></div>

    <!-- 裁剪Canvas -->
    <canvas class="cropper" ref="cCanvas" :style="{
      width: cropWidth + 'px',
      height: cropHeight + 'px'
    }"></canvas>
    
    <!-- 手势接收层 -->
    <div class="gesture-layer" ref="gesture" @touchmove.prevent="void 0"></div>
    
    <!-- 插槽，可自定义按钮等内容 -->
    <slot :cancel="cancel" :crop="cropImage">
      <div class="menu">
        <button class="menu_button cancel" @click="cancel">{{ cancelText }}</button>
        <button class="menu_button confirm" @click="cropImage">{{ confirmText }}</button>
      </div>
    </slot>
  </div>
</template>

<script>
import AlloyFinger from 'alloyfinger';
const getPixelRatio = function (context) {
  const backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};
export default {
  name: 'vue-mocropper',
  props: {
    // 显示隐藏控制
    visible: {
      type: Boolean,
      default: false
    },
    // 裁剪区宽度, px
    cropWidth: {
      type: Number,
      default: 200
    },
    // 裁剪区高度, px
    cropHeight: {
      type: Number,
      default: 200
    },
    // 图片地址
    src: {
      type: String,
      required: true
    },
    // 裁剪后的图片输出的mimeType
    outputMime: {
      type: String,
      default: 'image/jpeg'
    },
    // 裁剪图片质量
    outputQuality: {
      type: Number,
      default: 0.8
    },
    // 输入的类型
    // base64 或者 Blob
    outputType: {
      type: String,
      default: 'base64'
    },
    // 是否显示遮罩
    showMask: {
      type: Boolean,
      default: true
    },
    // 默认插槽取消按钮文本
    cancelText: {
      type: String,
      default: '取消'
    },
    // 默认插槽确认按钮文本
    confirmText: {
      type: String,
      default: '裁剪'
    }
  },
  data() {
    return {
      pCtx: null,
      cCtx: null,
      image: null,
      // 图像原始尺寸
      initWidth: 0,
      initHeight: 0,
      // 图像当前尺寸
      currentWidth: 0,
      currentHeight: 0,
      // 图像缩放尺寸
      resizedWidth: 0,
      resizedHeight: 0,
      // 图像当前缩放大小
      zoom: 1,
      // 绘制起点
      sX: null,
      sY: null,
      // 缩放比率
      ratio: 1,
    };
  },
  watch: {
    visible(isShow) {
      if (isShow) {
        this._reset();
        this._loadImage();
      }
    },
    src(val) {
      this._reset();
      if (val) {
        this._loadImage();
      }
    }
  },
  methods: {
    _reset() {
      this.image = null;
      this.initWidth = 0;
      this.initHeight = 0;
      this.currentWidth = 0;
      this.currentHeight = 0;
      this.resizedWidth = 0;
      this.resizedHeight = 0;
      this.zoom = 1;
      this.sX = null;
      this.sY = null;
      this.cCtx = this.$refs.cCanvas.getContext('2d');
      this.pCtx = this.$refs.pCanvas.getContext('2d');
      this.ratio = getPixelRatio(this.cCtx);
      this.$refs.pCanvas.width = window.innerWidth * this.ratio;
      this.$refs.pCanvas.height = window.innerHeight * this.ratio;
      this.$refs.cCanvas.width = this.cropWidth * this.ratio;
      this.$refs.cCanvas.height = this.cropHeight * this.ratio;
    },
    // 检测手势是否在合法区域
    isInLegalArea(x, y) {
      if (x >= this.sX 
        && x < this.sX + this.currentWidth 
        && y >= this.sY 
        && y < this.sY + this.currentHeight
      ) {
        return true;
      }
      return false;
    },
    // 调整图像大小
    _adjustImageSize() {
      // 如果图像宽度大于屏幕宽度，缩小图像宽度至最大为屏幕宽度
      let zoom = 1;
      if (this.initWidth > window.innerWidth) {
        zoom = window.innerWidth / this.initWidth;
      }
      // 如果图像高度大于页面高度，缩小图像高度至最高为页面高度
      if (this.initHeight > window.innerHeight) {
        zoom = Math.min(zoom, window.innerHeight / this.initHeight);
      }
      this.zoom = zoom;
      this.currentWidth = this.zoom * this.initWidth;
      this.currentHeight = this.zoom * this.initHeight;
      this.resizedWidth = this.currentWidth;
      this.resizedHeight = this.currentHeight;
    },
    // 加载图像
    _loadImage() {
      const image = new Image();
      const onLoad = () => {
        this.image = image;
        this.initWidth = image.width;
        this.initHeight = image.height;
        this._adjustImageSize();
        this._drawCanvas();
      };
      const onError = () => {
        if (process.env.NODE_ENV === 'development') {
          console.error('Unable to load image, Please check whether the image URL is correct.');
        }
        this.$emit('load-failed');
      }
      image.setAttribute("crossOrigin",'Anonymous');
      image.src = this.src;
      image.onload = onLoad;
      image.onerror = onError;
    },
    // 计算起点（主要用于初始化）
    _getStartPoint() {
      const sX = (window.innerWidth - this.currentWidth) / 2;
      const sY = (window.innerHeight - this.currentHeight) / 2;
      this.sX = sX;
      this.sY = sY;
    },
    // 画图
    _drawCanvas(resizedWidth, resizedHeight) {
      const cCtx = this.cCtx;
      const pCtx = this.pCtx;
      const ratio = this.ratio;
      const pCanvas = this.$refs.pCanvas;

      const isNull = o => typeof o === 'object' && o === null;

      if (isNull(this.sX) || isNull(this.sY)) {
        this._getStartPoint();
      }

      resizedWidth = resizedWidth || this.currentWidth;
      resizedHeight = resizedHeight || this.currentHeight;

      pCtx.fillStyle = '#000';
      pCtx.fillRect(0, 0, pCanvas.width, pCanvas.height);
      pCtx.drawImage(this.image, 0, 0, this.initWidth, this.initHeight, this.sX * ratio, this.sY * ratio, resizedWidth * ratio, resizedHeight * ratio);
      
      const { top: cSy, left: cSx } = this.$refs.cCanvas.getBoundingClientRect();
      cCtx.drawImage(this.$refs.pCanvas, cSx * ratio, cSy * ratio, this.cropWidth * ratio, this.cropHeight * ratio, 0, 0, this.cropWidth * ratio, this.cropHeight * ratio);
    },
    // 裁剪
    cropImage() {
      function dataURLtoBlob(dataurl) {
        let arr = dataurl.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      }

      const cloneCanvas = (cloned) => {
        const clone = document.createElement('canvas');
        clone.width = cloned.width / this.ratio;
        clone.height = cloned.height / this.ratio;
        const cloneCtx = clone.getContext('2d');
        cloneCtx.drawImage(cloned, 0, 0, cloned.width, cloned.height, 0, 0, clone.width, clone.height);
        return clone;
      }

      try {
        const clone = cloneCanvas(this.$refs.cCanvas);
        let data = clone.toDataURL(this.outputMime, this.outputQuality);
        if (this.outputType === 'blob') {
          data = dataURLtoBlob(data);
        }
        this.$emit('crop-done', data);
      } catch (e) {
        this.$emit('crop-failed', e);
      }
    },
    // 取消
    cancel() {
      this.$emit('update:visible', false);
    }
  },
  mounted() {
    let af = new AlloyFinger(this.$refs.gesture, {
      pressMove: evt => {
        const { clientX, clientY } = evt.touches[0];
        if (!this.isInLegalArea(clientX, clientY)) {
          return;
        }
        this.sX += evt.deltaX;
        this.sY += evt.deltaY;
        this._drawCanvas();
      },
      pinch: evt => {
        const resizedWidth = evt.zoom * this.currentWidth;
        const resizedHeight = evt.zoom * this.currentHeight;
        if (resizedWidth > this.initWidth * 2 || resizedHeight > this.initHeight * 2) {
          return;
        }
        this.sX += (this.resizedWidth - resizedWidth) / 2;
        this.sY += (this.resizedHeight - resizedHeight) / 2;
        this.resizedWidth = resizedWidth;
        this.resizedHeight = resizedHeight;
        this._drawCanvas(this.resizedWidth, this.resizedHeight);
      },
      touchEnd: evt => {
        this.currentWidth = this.resizedWidth;
        this.currentHeight = this.resizedHeight;
      }
    });
    this.$on('hook:beforeDestory', () => {
      af = af.destory();
    });
    this._reset();
  }
};
</script>

<style lang="scss" scoped>
.cutout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: #000;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: 0.4);
  }

  .previewer {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .cropper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgb(231, 231, 231);
  }

  .gesture-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .menu {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;
    background-color: rgba($color: #fff, $alpha: 0.2);

    &_button {
      font-size: 20px;
      padding: 5px 15px;
      appearance: none;
      outline: none;
      border: none;
      background: transparent;
      color: #fff;

      &.confirm {
        color: rgb(247, 127, 127);
      }

      &:active {
        opacity: 0.5;
      }
    }
  }
}
</style>