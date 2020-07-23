(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lazyLoaded.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lazyLoaded.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".not-applied {\r\n  background-color: red;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/lazyLoaded.css":
/*!****************************!*\
  !*** ./src/lazyLoaded.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./lazyLoaded.css */ "./node_modules/css-loader/dist/cjs.js!./src/lazyLoaded.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/lazyLoadedUtil.js":
/*!*******************************!*\
  !*** ./src/lazyLoadedUtil.js ***!
  \*******************************/
/*! exports provided: util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "util", function() { return util; });
/* harmony import */ var _lazyLoaded_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazyLoaded.css */ "./src/lazyLoaded.css");
/* harmony import */ var _lazyLoaded_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lazyLoaded_css__WEBPACK_IMPORTED_MODULE_0__);


function util() {
  return "some util";
}


/***/ })

}]);