(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('alloyfinger'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['alloyfinger', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VueMoCropper = factory(global.AlloyFinger, global.Vue));
}(this, (function (AlloyFinger, vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var AlloyFinger__default = /*#__PURE__*/_interopDefaultLegacy(AlloyFinger);

  const getPixelRatio = function (context) {
    const backingStore = context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
  };
  const ANGLE_POS = {
    TL: 'top-left',
    TR: 'top-right',
    BL: 'bottom-left',
    BR: 'bottom-right'
  };
  var script = {
    name: 'vue-mocropper',
    props: {
      // 显示隐藏控制
      modelValue: {
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
        default: 1
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
      },
      // 是否可自动控制裁剪区尺寸
      resizable: {
        type: Boolean,
        default: true
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

        // cropper 坐标
        topX: 0,
        topY: 0,
        cropperWidth: this.cropWidth,
        cropperHeight: this.cropHeight,
        resizingCropper: false,
        movingCropper: false,
      };
    },
    watch: {
      modelValue(isShow) {
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
        this._setcCanvasRect();
        this._getCropperInitialPosition();
      },
      // 动态设置裁剪Canvas的尺寸
      _setcCanvasRect() {
        this.$refs.cCanvas.width = this.cropperWidth * this.ratio;
        this.$refs.cCanvas.height = this.cropperHeight * this.ratio;
      },
      // 获取裁剪区初始坐标（垂直水平居中）
      _getCropperInitialPosition() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.topX = width / 2 - this.cropperWidth / 2;
        this.topY = height / 2 - this.cropperHeight / 2;
      },
      // 判断手指是否在裁剪区
      _isInCropperArea(x, y) {
        return x >= this.topX 
            && x <= this.topX + this.cropperWidth
            && y >= this.topY
            && y <= this.topY + this.cropperHeight;
      },
      // 判断手指是否在裁剪区四角
      _isInCropperAngle(x, y) {
        const CROPPER_ANGLE_WIDTH = 15;
        const CROPPER_ANGLE_HEIGHT = 15;
        // 允许的偏差
        const REDUNDANCY = 10; 
        // 左上角
        if (x >= this.topX - REDUNDANCY
          && x <= this.topX + CROPPER_ANGLE_WIDTH + REDUNDANCY
          && y >= this.topY - REDUNDANCY
          && y <= this.topY + CROPPER_ANGLE_HEIGHT + REDUNDANCY) {
          return ANGLE_POS.TL;
        }
        // 右上角
        if (x >= this.topX + this.cropperWidth - (CROPPER_ANGLE_WIDTH / 2) - REDUNDANCY
          && x <= this.topX + this.cropperWidth + (CROPPER_ANGLE_WIDTH / 2) + REDUNDANCY
          && y >= this.topY - REDUNDANCY
          && y <= this.topY + CROPPER_ANGLE_HEIGHT + REDUNDANCY) {
          return ANGLE_POS.TR;
        }
        // 左下角
        if (x >= this.topX - REDUNDANCY
          && x <= this.topX + CROPPER_ANGLE_WIDTH + REDUNDANCY
          && y >= this.topY + this.cropperHeight - (CROPPER_ANGLE_HEIGHT / 2) - REDUNDANCY
          && y <= this.topY + this.cropperHeight - (CROPPER_ANGLE_HEIGHT / 2) + REDUNDANCY) {
          return ANGLE_POS.BL;
        }
        // 右下角
        if (x >= this.topX + this.cropperWidth - (CROPPER_ANGLE_WIDTH / 2) - REDUNDANCY
          && x <= this.topX + this.cropperWidth + (CROPPER_ANGLE_WIDTH / 2) + REDUNDANCY
          && y >= this.topY + this.cropperHeight - (CROPPER_ANGLE_HEIGHT / 2) - REDUNDANCY
          && y <= this.topY + this.cropperHeight - (CROPPER_ANGLE_HEIGHT / 2) + REDUNDANCY) {
          return ANGLE_POS.BR;
        }
        return false;
      },
      // 改变裁剪区大小
      _resizeCropper(deltaX, deltaY) {
        const POS = this.resizingCropper;
        switch(POS) {
          case ANGLE_POS.TL:
            this.topX += deltaX;
            this.topY += deltaY;
            this.cropperWidth -= deltaX;
            this.cropperHeight -= deltaY;
            break;
          case ANGLE_POS.TR:
            this.topY += deltaY;
            this.cropperWidth += deltaX;
            this.cropperHeight -= deltaY;
            break;
          case ANGLE_POS.BL:
            this.topX += deltaX;
            this.cropperWidth -= deltaX;
            this.cropperHeight += deltaY;
            break;
          case ANGLE_POS.BR:
            this.cropperWidth += deltaX;
            this.cropperHeight += deltaY;
            break;
        }
        this._setcCanvasRect();
        this._drawCanvas();
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
      // 移动裁剪区
      _moveCropper(deltaX, deltaY) {
        let change = false;
        // 先校验，不允许超出屏幕范围
        if (this.topX + deltaX >= 0 && this.topX + deltaX + this.cropperWidth <= window.innerWidth) {
          this.topX += deltaX;
          change = true;
        }
        if (this.topY + deltaY >= 0 && this.topY + deltaY + this.cropperHeight <= window.innerHeight) {
          this.topY += deltaY;
          change = true;
        }
        change && this._drawCanvas();
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
        };
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

        const cSy = this.topY;
        const cSx = this.topX;

        resizedWidth = resizedWidth || this.currentWidth;
        resizedHeight = resizedHeight || this.currentHeight;

        pCtx.fillStyle = '#000';
        pCtx.fillRect(0, 0, pCanvas.width, pCanvas.height);
        pCtx.drawImage(this.image, 0, 0, this.initWidth, this.initHeight, this.sX * ratio, this.sY * ratio, resizedWidth * ratio, resizedHeight * ratio);
        
        cCtx.drawImage(this.$refs.pCanvas, cSx * ratio, cSy * ratio, this.cropperWidth * ratio, this.cropperHeight * ratio, 0, 0, this.cropperWidth * ratio, this.cropperHeight * ratio);
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
        };

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
        this.$emit('update:modelValue', false);
      }
    },
    mounted() {
      let af = new AlloyFinger__default['default'](this.$refs.gesture, {
        pressMove: evt => {
          const { clientX, clientY } = evt.touches[0];
          // 调整裁剪区尺寸
          if (this.resizingCropper) {
            return this._resizeCropper(evt.deltaX, evt.deltaY);
          }
          // 移动裁剪区
          if (this.movingCropper) {
            return this._moveCropper(evt.deltaX, evt.deltaY);
          }
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
        touchStart: evt => {
          const x = evt.touches[0].clientX;
          const y = evt.touches[0].clientY;
          this.resizingCropper = this.resizable && this._isInCropperAngle(x, y);
          this.movingCropper = this._isInCropperArea(x, y);
        },
        touchEnd: evt => {
          this.currentWidth = this.resizedWidth;
          this.currentHeight = this.resizedHeight;
          this.resizingCropper = false;
          this.movingCropper = false;
        }
      });
      // this.$on('hook:beforeDestory', () => {
      //   af = af.destory();
      // });
      this._reset();
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-1a7c0ba2");

  vue.pushScopeId("data-v-1a7c0ba2");
  const _hoisted_1 = { class: "cutout" };
  const _hoisted_2 = {
    class: "previewer",
    ref: "pCanvas"
  };
  const _hoisted_3 = {
    key: 0,
    class: "mask"
  };
  const _hoisted_4 = {
    class: "cropper",
    ref: "cCanvas"
  };
  const _hoisted_5 = { class: "cropper-angle top-left" };
  const _hoisted_6 = { class: "cropper-angle top-right" };
  const _hoisted_7 = { class: "cropper-angle bottom-left" };
  const _hoisted_8 = { class: "cropper-angle bottom-right" };
  const _hoisted_9 = { class: "menu" };
  vue.popScopeId();

  const render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createBlock("div", _hoisted_1, [
      vue.createCommentVNode("预览Canvas"),
      vue.createVNode("canvas", _hoisted_2, null, 512 /* NEED_PATCH */),
      vue.createCommentVNode("遮罩层"),
      ($props.showMask)
        ? (vue.openBlock(), vue.createBlock("div", _hoisted_3))
        : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 裁剪Canvas "),
      vue.createVNode("div", {
        class: "cropper-wrapper",
        style: {
          top: $data.topY + 'px',
          left: $data.topX + 'px',
          width: $data.cropperWidth + 'px',
          height: $data.cropperHeight + 'px'
        }
      }, [
        vue.createVNode("canvas", _hoisted_4, null, 512 /* NEED_PATCH */),
        vue.withDirectives(vue.createVNode("div", _hoisted_5, null, 512 /* NEED_PATCH */), [
          [vue.vShow, $props.resizable]
        ]),
        vue.withDirectives(vue.createVNode("div", _hoisted_6, null, 512 /* NEED_PATCH */), [
          [vue.vShow, $props.resizable]
        ]),
        vue.withDirectives(vue.createVNode("div", _hoisted_7, null, 512 /* NEED_PATCH */), [
          [vue.vShow, $props.resizable]
        ]),
        vue.withDirectives(vue.createVNode("div", _hoisted_8, null, 512 /* NEED_PATCH */), [
          [vue.vShow, $props.resizable]
        ])
      ], 4 /* STYLE */),
      vue.createCommentVNode(" 手势接收层 "),
      vue.createVNode("div", {
        class: "gesture-layer",
        ref: "gesture",
        onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers($event => (void 0), ["prevent"]))
      }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */),
      vue.createCommentVNode(" 插槽，可自定义按钮等内容 "),
      vue.renderSlot(_ctx.$slots, "default", {
        cancel: $options.cancel,
        crop: $options.cropImage
      }, () => [
        vue.createVNode("div", _hoisted_9, [
          vue.createVNode("button", {
            class: "menu_button cancel",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.cancel(...args)))
          }, vue.toDisplayString($props.cancelText), 1 /* TEXT */),
          vue.createVNode("button", {
            class: "menu_button confirm",
            onClick: _cache[3] || (_cache[3] = (...args) => ($options.cropImage(...args)))
          }, vue.toDisplayString($props.confirmText), 1 /* TEXT */)
        ])
      ])
    ], 512 /* NEED_PATCH */)), [
      [vue.vShow, $props.modelValue]
    ])
  });

  script.render = render;
  script.__scopeId = "data-v-1a7c0ba2";
  script.__file = "src/mocropper.vue";

  const VueMoCropper = {
    install(app) {
      app.component(script.name, script);
    }
  };

  return VueMoCropper;

})));
