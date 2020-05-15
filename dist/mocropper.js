(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("AlloyFinger"));
	else if(typeof define === 'function' && define.amd)
		define("VueMoCropper", ["AlloyFinger"], factory);
	else if(typeof exports === 'object')
		exports["VueMoCropper"] = factory(require("AlloyFinger"));
	else
		root["VueMoCropper"] = factory(root["AlloyFinger"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mocropper_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var VueMoCropper = {
  install: function install(Vue) {
    Vue.component(_mocropper_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _mocropper_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueMoCropper);
}

/* harmony default export */ __webpack_exports__["default"] = (VueMoCropper);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mocropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* empty/unused harmony star reexport *//* harmony import */ var _mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mocropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a7c0ba2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/mocropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_template_id_1a7c0ba2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "cutout"
    },
    [
      _c("canvas", { ref: "pCanvas", staticClass: "previewer" }),
      _vm._v(" "),
      _vm.showMask ? _c("div", { staticClass: "mask" }) : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "cropper-wrapper",
          style: {
            top: _vm.topY + "px",
            left: _vm.topX + "px",
            width: _vm.cropperWidth + "px",
            height: _vm.cropperHeight + "px"
          }
        },
        [
          _c("canvas", { ref: "cCanvas", staticClass: "cropper" }),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.resizable,
                expression: "resizable"
              }
            ],
            staticClass: "cropper-angle top-left"
          }),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.resizable,
                expression: "resizable"
              }
            ],
            staticClass: "cropper-angle top-right"
          }),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.resizable,
                expression: "resizable"
              }
            ],
            staticClass: "cropper-angle bottom-left"
          }),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.resizable,
                expression: "resizable"
              }
            ],
            staticClass: "cropper-angle bottom-right"
          })
        ]
      ),
      _vm._v(" "),
      _c("div", {
        ref: "gesture",
        staticClass: "gesture-layer",
        on: {
          touchmove: function($event) {
            $event.preventDefault()
            void 0
          }
        }
      }),
      _vm._v(" "),
      _vm._t(
        "default",
        [
          _c("div", { staticClass: "menu" }, [
            _c(
              "button",
              { staticClass: "menu_button cancel", on: { click: _vm.cancel } },
              [_vm._v(_vm._s(_vm.cancelText))]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "menu_button confirm",
                on: { click: _vm.cropImage }
              },
              [_vm._v(_vm._s(_vm.confirmText))]
            )
          ])
        ],
        { cancel: _vm.cancel, crop: _vm.cropImage }
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alloyfinger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var alloyfinger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alloyfinger__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var getPixelRatio = function getPixelRatio(context) {
  var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
  return (window.devicePixelRatio || 1) / backingStore;
};

var ANGLE_POS = {
  TL: 'top-left',
  TR: 'top-right',
  BL: 'bottom-left',
  BR: 'bottom-right'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-mocropper',
  props: {
    // 显示隐藏控制
    visible: {
      type: Boolean,
      "default": false
    },
    // 裁剪区宽度, px
    cropWidth: {
      type: Number,
      "default": 200
    },
    // 裁剪区高度, px
    cropHeight: {
      type: Number,
      "default": 200
    },
    // 图片地址
    src: {
      type: String,
      required: true
    },
    // 裁剪后的图片输出的mimeType
    outputMime: {
      type: String,
      "default": 'image/jpeg'
    },
    // 裁剪图片质量
    outputQuality: {
      type: Number,
      "default": 1
    },
    // 输入的类型
    // base64 或者 Blob
    outputType: {
      type: String,
      "default": 'base64'
    },
    // 是否显示遮罩
    showMask: {
      type: Boolean,
      "default": true
    },
    // 默认插槽取消按钮文本
    cancelText: {
      type: String,
      "default": '取消'
    },
    // 默认插槽确认按钮文本
    confirmText: {
      type: String,
      "default": '裁剪'
    },
    // 是否可自动控制裁剪区尺寸
    resizable: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
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
      movingCropper: false
    };
  },
  watch: {
    visible: function visible(isShow) {
      if (isShow) {
        this._reset();

        this._loadImage();
      }
    },
    src: function src(val) {
      this._reset();

      if (val) {
        this._loadImage();
      }
    }
  },
  methods: {
    _reset: function _reset() {
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
    _setcCanvasRect: function _setcCanvasRect() {
      this.$refs.cCanvas.width = this.cropperWidth * this.ratio;
      this.$refs.cCanvas.height = this.cropperHeight * this.ratio;
    },
    // 获取裁剪区初始坐标（垂直水平居中）
    _getCropperInitialPosition: function _getCropperInitialPosition() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      this.topX = width / 2 - this.cropperWidth / 2;
      this.topY = height / 2 - this.cropperHeight / 2;
    },
    // 判断手指是否在裁剪区
    _isInCropperArea: function _isInCropperArea(x, y) {
      return x >= this.topX && x <= this.topX + this.cropperWidth && y >= this.topY && y <= this.topY + this.cropperHeight;
    },
    // 判断手指是否在裁剪区四角
    _isInCropperAngle: function _isInCropperAngle(x, y) {
      var CROPPER_ANGLE_WIDTH = 15;
      var CROPPER_ANGLE_HEIGHT = 15; // 允许的偏差

      var REDUNDANCY = 10; // 左上角

      if (x >= this.topX - REDUNDANCY && x <= this.topX + CROPPER_ANGLE_WIDTH + REDUNDANCY && y >= this.topY - REDUNDANCY && y <= this.topY + CROPPER_ANGLE_HEIGHT + REDUNDANCY) {
        return ANGLE_POS.TL;
      } // 右上角


      if (x >= this.topX + this.cropperWidth - CROPPER_ANGLE_WIDTH / 2 - REDUNDANCY && x <= this.topX + this.cropperWidth + CROPPER_ANGLE_WIDTH / 2 + REDUNDANCY && y >= this.topY - REDUNDANCY && y <= this.topY + CROPPER_ANGLE_HEIGHT + REDUNDANCY) {
        return ANGLE_POS.TR;
      } // 左下角


      if (x >= this.topX - REDUNDANCY && x <= this.topX + CROPPER_ANGLE_WIDTH + REDUNDANCY && y >= this.topY + this.cropperHeight - CROPPER_ANGLE_HEIGHT / 2 - REDUNDANCY && y <= this.topY + this.cropperHeight - CROPPER_ANGLE_HEIGHT / 2 + REDUNDANCY) {
        return ANGLE_POS.BL;
      } // 右下角


      if (x >= this.topX + this.cropperWidth - CROPPER_ANGLE_WIDTH / 2 - REDUNDANCY && x <= this.topX + this.cropperWidth + CROPPER_ANGLE_WIDTH / 2 + REDUNDANCY && y >= this.topY + this.cropperHeight - CROPPER_ANGLE_HEIGHT / 2 - REDUNDANCY && y <= this.topY + this.cropperHeight - CROPPER_ANGLE_HEIGHT / 2 + REDUNDANCY) {
        return ANGLE_POS.BR;
      }

      return false;
    },
    // 改变裁剪区大小
    _resizeCropper: function _resizeCropper(deltaX, deltaY) {
      var POS = this.resizingCropper;

      switch (POS) {
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
    isInLegalArea: function isInLegalArea(x, y) {
      if (x >= this.sX && x < this.sX + this.currentWidth && y >= this.sY && y < this.sY + this.currentHeight) {
        return true;
      }

      return false;
    },
    // 移动裁剪区
    _moveCropper: function _moveCropper(deltaX, deltaY) {
      var change = false; // 先校验，不允许超出屏幕范围

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
    _adjustImageSize: function _adjustImageSize() {
      // 如果图像宽度大于屏幕宽度，缩小图像宽度至最大为屏幕宽度
      var zoom = 1;

      if (this.initWidth > window.innerWidth) {
        zoom = window.innerWidth / this.initWidth;
      } // 如果图像高度大于页面高度，缩小图像高度至最高为页面高度


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
    _loadImage: function _loadImage() {
      var _this = this;

      var image = new Image();

      var onLoad = function onLoad() {
        _this.image = image;
        _this.initWidth = image.width;
        _this.initHeight = image.height;

        _this._adjustImageSize();

        _this._drawCanvas();
      };

      var onError = function onError() {
        if (false) {}

        _this.$emit('load-failed');
      };

      image.setAttribute("crossOrigin", 'Anonymous');
      image.src = this.src;
      image.onload = onLoad;
      image.onerror = onError;
    },
    // 计算起点（主要用于初始化）
    _getStartPoint: function _getStartPoint() {
      var sX = (window.innerWidth - this.currentWidth) / 2;
      var sY = (window.innerHeight - this.currentHeight) / 2;
      this.sX = sX;
      this.sY = sY;
    },
    // 画图
    _drawCanvas: function _drawCanvas(resizedWidth, resizedHeight) {
      var cCtx = this.cCtx;
      var pCtx = this.pCtx;
      var ratio = this.ratio;
      var pCanvas = this.$refs.pCanvas;

      var isNull = function isNull(o) {
        return _typeof(o) === 'object' && o === null;
      };

      if (isNull(this.sX) || isNull(this.sY)) {
        this._getStartPoint();
      }

      var cSy = this.topY;
      var cSx = this.topX;
      resizedWidth = resizedWidth || this.currentWidth;
      resizedHeight = resizedHeight || this.currentHeight;
      pCtx.fillStyle = '#000';
      pCtx.fillRect(0, 0, pCanvas.width, pCanvas.height);
      pCtx.drawImage(this.image, 0, 0, this.initWidth, this.initHeight, this.sX * ratio, this.sY * ratio, resizedWidth * ratio, resizedHeight * ratio);
      cCtx.drawImage(this.$refs.pCanvas, cSx * ratio, cSy * ratio, this.cropperWidth * ratio, this.cropperHeight * ratio, 0, 0, this.cropperWidth * ratio, this.cropperHeight * ratio);
    },
    // 裁剪
    cropImage: function cropImage() {
      var _this2 = this;

      function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);

        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return new Blob([u8arr], {
          type: mime
        });
      }

      var cloneCanvas = function cloneCanvas(cloned) {
        var clone = document.createElement('canvas');
        clone.width = cloned.width / _this2.ratio;
        clone.height = cloned.height / _this2.ratio;
        var cloneCtx = clone.getContext('2d');
        cloneCtx.drawImage(cloned, 0, 0, cloned.width, cloned.height, 0, 0, clone.width, clone.height);
        return clone;
      };

      try {
        var clone = cloneCanvas(this.$refs.cCanvas);
        var data = clone.toDataURL(this.outputMime, this.outputQuality);

        if (this.outputType === 'blob') {
          data = dataURLtoBlob(data);
        }

        this.$emit('crop-done', data);
      } catch (e) {
        this.$emit('crop-failed', e);
      }
    },
    // 取消
    cancel: function cancel() {
      this.$emit('update:visible', false);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var af = new alloyfinger__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.gesture, {
      pressMove: function pressMove(evt) {
        var _evt$touches$ = evt.touches[0],
            clientX = _evt$touches$.clientX,
            clientY = _evt$touches$.clientY; // 调整裁剪区尺寸

        if (_this3.resizingCropper) {
          return _this3._resizeCropper(evt.deltaX, evt.deltaY);
        } // 移动裁剪区


        if (_this3.movingCropper) {
          return _this3._moveCropper(evt.deltaX, evt.deltaY);
        }

        if (!_this3.isInLegalArea(clientX, clientY)) {
          return;
        }

        _this3.sX += evt.deltaX;
        _this3.sY += evt.deltaY;

        _this3._drawCanvas();
      },
      pinch: function pinch(evt) {
        var resizedWidth = evt.zoom * _this3.currentWidth;
        var resizedHeight = evt.zoom * _this3.currentHeight;

        if (resizedWidth > _this3.initWidth * 2 || resizedHeight > _this3.initHeight * 2) {
          return;
        }

        _this3.sX += (_this3.resizedWidth - resizedWidth) / 2;
        _this3.sY += (_this3.resizedHeight - resizedHeight) / 2;
        _this3.resizedWidth = resizedWidth;
        _this3.resizedHeight = resizedHeight;

        _this3._drawCanvas(_this3.resizedWidth, _this3.resizedHeight);
      },
      touchStart: function touchStart(evt) {
        var x = evt.touches[0].clientX;
        var y = evt.touches[0].clientY;
        _this3.resizingCropper = _this3.resizable && _this3._isInCropperAngle(x, y);
        _this3.movingCropper = _this3._isInCropperArea(x, y);
      },
      touchEnd: function touchEnd(evt) {
        _this3.currentWidth = _this3.resizedWidth;
        _this3.currentHeight = _this3.resizedHeight;
        _this3.resizingCropper = false;
        _this3.movingCropper = false;
      }
    });
    this.$on('hook:beforeDestory', function () {
      af = af.destory();
    });

    this._reset();
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_2_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_mocropper_vue_vue_type_style_index_0_id_1a7c0ba2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ])["default"];
});