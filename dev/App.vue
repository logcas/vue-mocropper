<template>
  <div id="app">
    <h1>Vue-MoCropper</h1>
    <h2>Choose an image:</h2>
    <div class="gallery block">
      <img :class="{ picked: src === img }" v-for="img in images" :key="img" :src="img" @click="pick(img)">
    </div>
    <h2>Set Options:</h2>
    <div class="block">
      <div class="block-item">
        <span>CropWidth:<input type="text" v-model="cropWidth">px</span>
      </div>
      <div>
        <span>CropHeight:<input type="text" v-model="cropHeight">px</span>
      </div>
    </div>
    <button @click="showCrop">Crop Image</button>
    <vue-mocropper 
      v-model="visible" 
      :src="src" 
      @crop-done="handleCropDone"
      :crop-width="+cropWidth"
      :crop-height="+cropHeight"
      cancel-text="Cancel"
      confirm-text="Crop"
      :resizable="true"
    ></vue-mocropper>
    <h2 v-show="croppedImage">Output:</h2>
    <div v-show="croppedImage" class="block" style="text-align: center;">
      <img :src="croppedImage"/>
    </div>
    <div style="height: 100px;"></div>
    <div class="bottom">
      <button class="outline" @click="jump">View On Github</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
        return {
          images: [
            'http://img.mp.itc.cn/upload/20170419/e30e36a0fff842b687f0d842df20374b_th.jpg',
            'http://5b0988e595225.cdn.sohucs.com/images/20190719/1f3ce15613b34bd1854052a29fef6ee3.jpeg'
          ],
          visible: false,
          src: '',
          croppedImage: '',
          cropWidth: 200,
          cropHeight: 200
        }
      },
      methods: {
        jump() {
          window.location = 'https://github.com/logcas/vue-mocropper';
        },
        pick(src) {
          this.src = src;
        },
        showCrop() {
          const w = Number(this.cropWidth);
          const h = Number(this.cropHeight);
          if (isNaN(w) || isNaN(h)) {
            alert('CropWidth and CropHeight should be a Number');
            return;
          }
          this.visible = true;
        },
        handleCropDone(dataurl) {
          this.visible = false;
          this.croppedImage = dataurl;
        }
      }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

#app {
  padding: 10px;
}

h1 {
  height: 50px;
  color: #50bfff;
}

.gallery {
  display: flex;
  height: 140px;
  justify-content: space-around;
  align-items: center;
}

.block {
  padding: 20px 0;
}

.block-item {
  padding: 5px 0;
}

.gallery img {
  height: 100px;
  max-width: 100px;
}

.gallery img.picked {
  box-shadow: 0 0 10px #50bfff;
}

button {
  display: block;
  padding: 10px 0;
  width: 100%;
  appearance: none;
  border: none;
  background: #50bfff;
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
  outline: none;
}

button.outline {
  background: #fff;
  color: #50bfff;
  border: 2px solid #50bfff;
}

button:active {
  opacity: 0.6;
}

.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #fff;
  box-shadow: 0 -3px 4px 0 rgba(0,0,0,.04);
}
</style>