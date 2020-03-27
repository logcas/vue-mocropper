# MoCropper
Vue Image Cropper Plugin for mobile.

## Dependency
Alloyfinger, a super tiny gesture library

## Install
```
npm install vue-mocropper
```

## Usage
1. install as global component
```js
import VueMoCropper from 'vue-mocropper';
Vue.use(VueMoCropper);
```

2. Use as component
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
|Prop|Description|Default|
|--|--|--|
|src|source of image||
|visible|control display|`false`|
|cropWidth|cropper width, `px`|200|
|cropHeight|cropper height, `px`|200|
|outputMime|output's mimetype|images/jpeg|
|outputQuality|output's quality|0.8|
|outputType|output's type, support `base64`、`blob`|base64|

## Events
|Name|Description|Param|
|--|--|--|
|crop-done|emit when crops image successfully|base64 string or blob|
|crop-failed|emit when error occur|error instance|

## License
MIT