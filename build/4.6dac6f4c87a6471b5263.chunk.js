webpackJsonp([4],{

/***/ "./app/components/H1/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-size: 2em;\n  margin-bottom: 0.25em;\n'], ['\n  font-size: 2em;\n  margin-bottom: 0.25em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var H1 = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].h1(_templateObject);

/* harmony default export */ exports["a"] = H1;

/***/ },

/***/ "./app/containers/NotFoundPage/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_H1__ = __webpack_require__("./app/components/H1/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages__ = __webpack_require__("./app/containers/NotFoundPage/messages.js");
/* harmony export (immutable) */ exports["default"] = NotFound;
/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */







function NotFound() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_components_H1__["a" /* default */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_3__messages__["a" /* default */].header)
    )
  );
}

/***/ },

/***/ "./app/containers/NotFoundPage/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage component.
 */


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["d" /* defineMessages */])({
  header: {
    id: 'boilerplate.containers.NotFoundPage.header',
    defaultMessage: 'Page not found.'
  }
});

/***/ }

});