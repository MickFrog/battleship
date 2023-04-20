/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/Wave.svg */ \"./assets/Wave.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lustria&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --headingSize: 5rem;\\n    --defaultPad: 3rem;\\n    --textSize: 1.4rem;\\n    --textFont: 'Lustria', serif;\\n    --shipHoverColor: #44344F;\\n    --shipColor: #2176FF;\\n    --pink: #F0D3F7;\\n    --boardBg: #826C7F;\\n}\\n\\nbody {\\n    margin: 0px;\\n\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\n\\na {\\n    color: black;\\n}\\n\\nheader {\\n    padding: var(--textSize) 0px;\\n    font-family: 'Libre Barcode 39 Text', cursive;\\n    font-size: var(--headingSize);\\n    letter-spacing: 5px;\\n    color: var(--pink);\\n\\n    display: flex;\\n    justify-content: center;\\n}\\n\\nmain {\\n    flex: 1 0 auto;\\n    font-family: var(--textFont);\\n    font-size: var(--textSize);\\n    color: var(--pink);\\n}\\n\\nfooter {\\n    padding: 0.5rem;\\n    font-family: var(--textFont);\\n    font-size: var(--textSize);\\n    margin-top: auto;\\n\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.overlay {\\n    position: absolute;\\n    display: flex; /* flex */\\n    justify-content: center;\\n\\n    height: 100vh;\\n    width: 100%;\\n\\n    background-color: rgba(120, 120, 120, 0.4);\\n}\\n\\n.startDiv {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n\\n    margin-top: 5%;\\n    width: 700px;\\n    height: max-content;\\n    font-size: var(--textSize);\\n\\n    background-color: black;\\n    color: var(--pink);\\n    border-radius: 5px;\\n}\\n\\n.instr {\\n    margin: 2rem 0px;\\n    font-size: 2rem;\\n}\\n\\n#axisBtn {\\n    width: 200px;\\n    padding: 5px;\\n    font-family: inherit;\\n    font-size: var(--textSize);\\n\\n    background-color: var(--pink);\\n    color: black;\\n    margin-bottom: 2rem;\\n    border: none;\\n}\\n\\n#axisBtn:hover {\\n    background-color: var(--boardBg);\\n}\\n\\n.container{\\n    min-height: 100vh;\\n    display: flex;\\n    flex-flow: column wrap;\\n}\\n\\n.boardsContainer {\\n    margin-top: var(--textFont);\\n    display: flex;\\n    flex-flow: row wrap;\\n\\n    justify-content: center;\\n}\\n\\n.playerHead {\\n    display: flex;\\n    flex-flow: column wrap;\\n    align-items: center;\\n}\\n\\n.gameBoard {\\n    margin: 0 var(--defaultPad);\\n    margin-bottom: var(--defaultPad);\\n    width: 500px;\\n\\n    border-radius: 5px;\\n\\n    display: grid;\\n    grid-template: repeat(10, 50px) / repeat(10, 50px);\\n}\\n\\n.box {\\n    margin: 0;\\n    border: 2px solid black;\\n    background-color: var(--boardBg);\\n    width: 50px;\\n    height: 50px;\\n}\\n\\n.hoverBox:hover {\\n    background-color: var(--pink);\\n}\\n\\n.shipHover {\\n    background-color: var(--shipHoverColor);\\n}\\n\\n.shipBox {\\n    background-color: var(--shipColor);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domBusiness/dom.js":
/*!********************************!*\
  !*** ./src/domBusiness/dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeBoards)\n/* harmony export */ });\n/* harmony import */ var _gamePlaying__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePlaying */ \"./src/domBusiness/gamePlaying.js\");\n/* harmony import */ var _placeShip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeShip */ \"./src/domBusiness/placeShip.js\");\n\n\n\nfunction initializeBoards() {\n    (0,_gamePlaying__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_placeShip__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n}\n\n//# sourceURL=webpack://battleship/./src/domBusiness/dom.js?");

/***/ }),

/***/ "./src/domBusiness/domUtil.js":
/*!************************************!*\
  !*** ./src/domBusiness/domUtil.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOM_Elements\": () => (/* binding */ DOM_Elements),\n/* harmony export */   \"drawPositions\": () => (/* binding */ drawPositions)\n/* harmony export */ });\nconst DOM_Elements = {\n    humanBoard: document.getElementById('humanBoard'),\n    compBoard: document.getElementById('compBoard'),\n    placingBoard: document.getElementById('placingBoard'),\n    axisBtn: document.getElementById('axisBtn'),\n    shipToPlace: document.getElementById('shipToPlace'),\n    overlay: document.querySelector('.overlay'),\n    startDiv: document.querySelector('.startDiv'),\n}\n\nfunction drawPositions(boardElem, bhover=false) {\n    for (let i = 65; i < 75; i++) {\n\n        for (let j = 0; j < 10; j++) {\n            let newBox = createBox(bhover);\n            newBox.id = `${String.fromCharCode(i)}${j}`;\n            boardElem.appendChild(newBox);\n        }\n    }\n}\n\nfunction createBox(bhover=false) {\n    let newBox = document.createElement('div');\n\n    newBox.className = 'box';\n\n    //to cater for hover on only compBoard boxes\n    if (bhover) newBox.classList.add('hoverBox'); \n\n    return newBox;\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/domBusiness/domUtil.js?");

/***/ }),

/***/ "./src/domBusiness/gamePlaying.js":
/*!****************************************!*\
  !*** ./src/domBusiness/gamePlaying.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializePlayingBoards)\n/* harmony export */ });\n/* harmony import */ var _domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtil */ \"./src/domBusiness/domUtil.js\");\n\n\nfunction initializePlayingBoards() {\n    (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.drawPositions)(_domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.humanBoard);\n    (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.drawPositions)(_domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.compBoard, true);\n}\n\n//# sourceURL=webpack://battleship/./src/domBusiness/gamePlaying.js?");

/***/ }),

/***/ "./src/domBusiness/placeShip.js":
/*!**************************************!*\
  !*** ./src/domBusiness/placeShip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializePlacingBoards)\n/* harmony export */ });\n/* harmony import */ var _domUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domUtil */ \"./src/domBusiness/domUtil.js\");\n/* harmony import */ var _gameHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameHandler */ \"./src/gameHandler.js\");\n\n\n\nconst placingUtil = {\n    shipsToPlace: \n        [{name: 'Carrier', len: 5}, \n        {name: 'BattleShip', len: 4}, \n        {name: 'Cruiser', len: 3}, \n        {name: 'Submarine', len: 3},\n        {name: 'Destroyer', len: 2}],\n    currShip: 0,\n    currAxis: 'x',\n}\n\n//Event handlers\n_domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.axisBtn.addEventListener('click', () => {\n    placingUtil.currAxis == 'x' \n    ? placingUtil.currAxis = 'y' \n    : placingUtil.currAxis = 'x';\n\n});\n\n//Functions\nfunction addPlacingEvents() { //add hover events to all placingBoard boxes\n    let placingBoxes = [..._domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.placingBoard.childNodes]; \n\n    for (let i = 0; i < placingBoxes.length; i++) {\n        placingBoardEvents(placingBoxes[i]);\n    }\n}\n\nfunction placingBoardEvents(boxElem) {\n    let locations = [];\n    //Hover effects \n    boxElem.addEventListener('mouseenter', () => {\n        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships\n\n        locations = generateLocations(boxElem.id, placingUtil.currAxis); //generate locations from currBox to last box of ship\n        \n        if (isValidPlacing(locations)) {\n            setHovered(locations, true);\n        }\n    });\n\n    boxElem.addEventListener('mouseleave', () => {\n        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships\n\n        setHovered(locations);\n    });\n\n    boxElem.addEventListener('click', () => {\n        if (placingUtil.currShip > 4) return; //prevent choosing non-existent ships\n\n        if (isValidPlacing(locations)) {\n            addShipToBoard(locations);\n        }\n\n        if (placingUtil.currShip > 4) { //when the last ship is placed\n            _domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.humanBoard.replaceChildren(..._domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.placingBoard.children);\n\n            _domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.overlay.style.display = 'none';\n            _domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.startDiv.style.display = 'none';\n        }\n    })\n}\n\nfunction addShipToBoard(locations) {\n    //logically place ships\n    _gameHandler__WEBPACK_IMPORTED_MODULE_1__.players.activePlayer.playerBoard.placeShip(placingUtil.shipsToPlace[placingUtil.currShip].name, \n    placingUtil.shipsToPlace[placingUtil.currShip].len, \n    locations);\n\n    //increment currShip\n    placingUtil.currShip++;\n    if (placingUtil.shipsToPlace[placingUtil.currShip]) { //Prevent breaking when last ship is reached\n        _domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.shipToPlace.textContent = placingUtil.shipsToPlace[placingUtil.currShip].name;\n    }\n\n    setClicked(locations); //visually place ships\n}\n\nfunction generateLocations(elemID, axis) {\n    let locations = [];\n    let shipLength = placingUtil.shipsToPlace[placingUtil.currShip].len;\n\n    if (axis == 'x') {\n        if (9 - parseInt(elemID[1]) + 1 >= shipLength) { //if ship can fit horizontally\n            //generate locations\n            for (let i = 0; i < shipLength; i++) {\n                locations.push(`${elemID[0]}${parseInt(elemID[1]) + i}`);\n            }\n        }\n    }    \n    \n    if (axis == 'y') {\n        if((74 - elemID.charCodeAt(0)) + 1 >= shipLength) {\n            let tempCharCode = elemID.charCodeAt(0);\n            //generate locations\n            for (let i = 0; i < shipLength; i++) {\n                locations.push(`${String.fromCharCode(tempCharCode + i)}${parseInt(elemID[1])}`);\n            }\n        }\n    }\n    return locations;\n}\n\nfunction setHovered(posArray, bSwitch=false) { //bSwitch controls on and off of hover\n    if (posArray.length < 1) return;\n\n    const placingBoardChildren = [..._domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.placingBoard.children];\n    if (bSwitch) {\n        for (let i = 0; i < posArray.length; i++) {\n            const currBox = placingBoardChildren.find(element => element.id == posArray[i]);\n            currBox.classList.add('shipHover');\n        }\n        return;\n    }\n\n    for (let i = 0; i < posArray.length; i++) {\n        const currBox = placingBoardChildren.find(element => element.id == posArray[i]);\n        currBox.classList.remove('shipHover');\n    }\n}\n\nfunction setClicked(posArray) {\n    if (posArray.length < 1) return;\n\n    const placingBoardChildren = [..._domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.placingBoard.children];\n    for (let i = 0; i < posArray.length; i++) {\n        const currBox = placingBoardChildren.find(element => element.id == posArray[i]);\n        currBox.classList.add('shipBox');\n    }\n}\n\nfunction isValidPlacing(posArray) {\n    return _gameHandler__WEBPACK_IMPORTED_MODULE_1__.players.activePlayer.checkValidity(posArray);\n}\n\nfunction initializePlacingBoards() {\n    (0,_domUtil__WEBPACK_IMPORTED_MODULE_0__.drawPositions)(_domUtil__WEBPACK_IMPORTED_MODULE_0__.DOM_Elements.placingBoard);\n    addPlacingEvents();\n}\n\n//# sourceURL=webpack://battleship/./src/domBusiness/placeShip.js?");

/***/ }),

/***/ "./src/gameHandler.js":
/*!****************************!*\
  !*** ./src/gameHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initializeGame\": () => (/* binding */ initializeGame),\n/* harmony export */   \"players\": () => (/* binding */ players)\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _domBusiness_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domBusiness/dom */ \"./src/domBusiness/dom.js\");\n\n// import gameUtility from \"./gameUtil\";\n\n\nconst players = {\n    humanPlayer: new _player__WEBPACK_IMPORTED_MODULE_0__.Player(),\n    compPlayer: new _player__WEBPACK_IMPORTED_MODULE_0__.AI_Player(),\n    activePlayer: null,\n}\n\nfunction initializeGame() {\n    ;(0,_domBusiness_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    //Initialize players\n    players.activePlayer = players.humanPlayer;\n}\n\n//# sourceURL=webpack://battleship/./src/gameHandler.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n    gameBoard = new Map(); //maps board positions to whether [ship, isClicked?]\n\n    boardShips = [];\n\n    constructor() {\n        this.#drawBoard();\n    }\n\n    #drawBoard() {\n        for(let i = 65; i < 75; i++){ // A to J\n            let letter = String.fromCharCode(i);\n\n            for(let j = 0; j < 10; j++) {\n                this.gameBoard.set(`${letter}${j}`, [null, false]);\n            }\n        }\n    }\n\n    placeShip(shipName, shipLength, shipCoords) {\n        let newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](shipName, shipLength);\n\n        for (let pos of shipCoords) {\n            this.gameBoard.set(pos, [newShip, false]);\n        }\n\n        this.boardShips.push(newShip);\n    } \n\n    receiveAttack(pos) {\n        let [currShip, isHit] = this.gameBoard.get(pos);\n        \n        if(isHit === true) return 'Invalid'; //prevent hitting twice\n\n        let msg = 'Miss';\n        if(currShip !== null) { //record hit on ship\n            currShip.hit();\n            msg = currShip.name + ' has been hit';\n\n            if (currShip.isSunk()) { //remove sunk ships from board ships\n                this.boardShips = this.boardShips.filter(bShip => bShip !== currShip);\n                msg = currShip.name + ' has been sunk';\n            }\n        }\n\n        isHit = true;\n        this.gameBoard.set(pos, [currShip, isHit]); //update position  \n        return msg;      \n    } \n\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _gameHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameHandler */ \"./src/gameHandler.js\");\n\n\n\n(0,_gameHandler__WEBPACK_IMPORTED_MODULE_1__.initializeGame)();\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AI_Player\": () => (/* binding */ AI_Player),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Player {\n    playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    castShot(oppBoard, playerShot) { \n\n        return oppBoard.receiveAttack(playerShot);\n    }\n\n    checkValidity(posArray) { //check if all positions provided are valid\n        for(let pos of posArray) {\n            if (this.playerBoard.gameBoard.get(pos)[0] != null) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n\nclass AI_Player extends Player {\n    possibleMoves = []; //all the possible moves left\n\n    constructor() {\n        super();\n        this.#generateMoves(); //generate possible moves\n        this.#placeRandomShips();\n    }\n\n    castShot(oppBoard) {\n        const playerShot = this.#chooseShot();\n\n        return super.castShot(oppBoard, playerShot);\n    }\n\n    #placeRandomShips() {\n        //get placements and place the 5 ships\n        const carrierPos = this.#randomizeShip(5);\n        this.playerBoard.placeShip('Carrier', 5, carrierPos);\n\n        const battleshipPos = this.#randomizeShip(4);\n        this.playerBoard.placeShip('Battleship', 4, battleshipPos);\n\n        const cruiserPos = this.#randomizeShip(3);\n        this.playerBoard.placeShip('Cruiser', 3, cruiserPos);\n\n        const submarinePos = this.#randomizeShip(3);\n        this.playerBoard.placeShip('Submarine', 3, submarinePos);\n\n        const gunnerPos = this.#randomizeShip(2);\n        this.playerBoard.placeShip('Gunner', 2, gunnerPos);\n    }\n\n    #randomizeShip(shipLength) { // This is for placing ships on the AI board.\n        const axes = ['x', 'y']; \n        const currAxis = axes[Math.floor(Math.random() * axes.length)];\n\n        let newPlace = [];\n        if (currAxis == 'x') { //get a valid ship placement on x axis\n            let isValid = false;\n            while (!isValid) {\n                newPlace = this.#randomHorizontal(shipLength);\n\n                if (this.checkValidity(newPlace)) {\n                    isValid = true;\n                }  \n            }\n        }\n\n        if (currAxis == 'y') { // get a random ship placement on y axis\n            let isValid = false;\n            while (!isValid) {\n                newPlace = this.#randomVertical(shipLength);\n\n                if (this.checkValidity(newPlace)) {\n                    isValid = true;\n                }\n            }\n        }\n\n        return newPlace;\n    }\n\n    #randomHorizontal(shipLength) {\n        let positions = [];\n        \n        //generate random letter from A(65) to J(74) \n        const currLetterCode = Math.floor(Math.random() * (74 - 65 + 1)) + 65; \n        const currLetter = String.fromCharCode(currLetterCode);\n\n        //generate random number between 0 and (10-shipLength)\n        let currNumber = Math.floor(Math.random() * (10 - shipLength));\n\n        //generate positions for the horizontal line.\n        for (let i = 0; i < shipLength; i++) {\n            positions.push(`${currLetter}${currNumber}`);\n            currNumber++;\n        }\n\n        return positions;\n    }\n\n    #randomVertical(shipLength) {\n        let positions = [];\n\n        //generate random number between 0 and 10\n        const currNumber = Math.floor(Math.random() * 10);\n\n        //generate random letter from A(65) to J-shipLength(74-shipLength)\n        let currLetterCode = Math.floor(Math.random() * ((74 - shipLength) - 65 + 1)) + 65;\n        \n        //generate positions for vertical ship placement\n        for (let i = 0; i < shipLength; i++) {\n            positions.push(`${String.fromCharCode(currLetterCode)}${currNumber}`);\n            currLetterCode++;\n        }\n        return positions;\n    }\n\n    #generateMoves() {\n        for(let i = 65; i < 75; i++){ // A to J\n            let letter = String.fromCharCode(i);\n\n            for(let j = 0; j < 10; j++) {\n                this.possibleMoves.push(`${letter}${j}`);\n            }\n        }\n    }\n\n    #shuffleArray(myArr) {\n        let currIndex = myArr.length, randomIndex;\n\n        while (currIndex != 0) { //while elements still left to shuffle\n            //pick a random element\n            randomIndex = Math.floor(Math.random() * currIndex);\n            currIndex--;\n\n            //swap random element with current element\n            [myArr[currIndex], myArr[randomIndex]] = [myArr[randomIndex], myArr[currIndex]];\n        }\n        return myArr;\n    }\n\n    #chooseShot() {\n        //shuffle possibleMoves\n        this.#shuffleArray(this.possibleMoves);\n\n        //pop move\n        return this.possibleMoves.pop();\n    }\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    name = '';\n    length;\n    #hits = 0;\n    shipSunk = false;\n\n    constructor(shipName, shipLength) {\n        this.name = shipName;\n        this.length = shipLength;\n    }\n\n    hit() {\n        if (this.shipSunk == true) return 0;\n\n        this.#hits++;\n\n        if (this.isSunk()) {\n            this.shipSunk = true;\n        }\n        return 1;\n    }\n\n    isSunk() {\n        if(this.#hits >= this.length) return true;\n\n        return false;\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./assets/Wave.svg":
/*!*************************!*\
  !*** ./assets/Wave.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7dd923c5be1ae1752831.svg\";\n\n//# sourceURL=webpack://battleship/./assets/Wave.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;