# MoCropper
轻量级 Vue 移动端图片裁剪插件

## 依赖
本插件依赖 Alloyfinger 作为移动端手势操作库

📢 **!!2020/05/15：Alloyfinger 库已从插件中分离，请自行安装**

## Demo
(请使用移动设备或Chrome移动设备模拟预览)

[Live Demo--->](https://logcas.github.io/vue-mocropper)

![二维码](https://cdn.jsdelivr.net/gh/logcas/ImageBed/vue-mocropper/qrcode.png)

## 安装
```
npm install vue-mocropper alloyfinger --save
```

## 使用
1. 引入注册
```js
import VueMoCropper from 'vue-mocropper';
import 'vue-mocropper/dist/mocropper.min.css'; // ！！务必引入CSS
Vue.use(VueMoCropper);
```

2. 当组件使用
```vue
<vue-mocropper 
  :visible.sync="visible" 
  :src="src" 
  @crop-done="handleCropDone"
  :crop-width="200"
  :crop-height="200"
></vue-mocropper>
```

## Props
|Prop|描述|默认值|
|--|--|--|
|src|图片的源地址||
|visible|控制组件显隐|`false`|
|cropWidth|裁剪区宽度, 单位为`px`|`200`|
|cropHeight|裁剪区高度, 单位为`px`|`200`|
|outputMime|输出的图像的Mime类型|`images/jpeg`|
|outputQuality|输出图片的质量，(0, 1]|`0.8`|
|outputType|输出类型, 支持 `base64`、`blob`|`base64`|
|resizable|是否可调整裁剪区大小|`true`|

## 事件
|事件名|触发时机|参数|
|--|--|--|
|crop-done|裁剪成功时触发的回调事件|`base64`/`blob`|
|crop-failed|裁剪出错时触发的回调时间|错误的实例|

## License
MIT