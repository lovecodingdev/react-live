webpackJsonp([2],{

/***/ "./app/components/H1/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-size: 2em;\n  margin-bottom: 0.25em;\n'], ['\n  font-size: 2em;\n  margin-bottom: 0.25em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var H1 = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].h1(_templateObject);

/* harmony default export */ exports["a"] = H1;

/***/ },

/***/ "./app/containers/FeaturePage/List.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-family: Georgia, Times, \'Times New Roman\', serif;\n  padding-left: 1.75em;\n'], ['\n  font-family: Georgia, Times, \'Times New Roman\', serif;\n  padding-left: 1.75em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var List = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].ul(_templateObject);

/* harmony default export */ exports["a"] = List;

/***/ },

/***/ "./app/containers/FeaturePage/ListItem.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin: 1em 0;\n'], ['\n  margin: 1em 0;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ListItem = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].li(_templateObject);

/* harmony default export */ exports["a"] = ListItem;

/***/ },

/***/ "./app/containers/FeaturePage/ListItemTitle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-weight: bold;\n'], ['\n  font-weight: bold;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ListItemTitle = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].p(_templateObject);

/* harmony default export */ exports["a"] = ListItemTitle;

/***/ },

/***/ "./app/containers/FeaturePage/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_H1__ = __webpack_require__("./app/components/H1/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages__ = __webpack_require__("./app/containers/FeaturePage/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__List__ = __webpack_require__("./app/containers/FeaturePage/List.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ListItem__ = __webpack_require__("./app/containers/FeaturePage/ListItem.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__ = __webpack_require__("./app/containers/FeaturePage/ListItemTitle.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * FeaturePage
 *
 * List all the features
 */










var FeaturePage = function (_React$Component) {
  _inherits(FeaturePage, _React$Component);

  function FeaturePage() {
    _classCallCheck(this, FeaturePage);

    return _possibleConstructorReturn(this, (FeaturePage.__proto__ || Object.getPrototypeOf(FeaturePage)).apply(this, arguments));
  }

  _createClass(FeaturePage, [{
    key: 'shouldComponentUpdate',
    // eslint-disable-line react/prefer-stateless-function

    // Since state and props are static,
    // there's no need to re-render this component
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          title: 'Feature Page',
          meta: [{ name: 'description', content: 'Feature page of React.js Boilerplate application' }]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_components_H1__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].header)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__List__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].scaffoldingHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].scaffoldingMessage)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].feedbackHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].feedbackMessage)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].routingHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].routingMessage)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].networkHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].networkMessage)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6__ListItem__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__ListItemTitle__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].intlHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_4__messages__["a" /* default */].intlMessage)
            )
          )
        )
      );
    }
  }]);

  return FeaturePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ exports["default"] = FeaturePage;

/***/ },

/***/ "./app/containers/FeaturePage/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/*
 * FeaturePage Messages
 *
 * This contains all the text for the FeaturePage component.
 */


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["d" /* defineMessages */])({
  header: {
    id: 'boilerplate.containers.FeaturePage.header',
    defaultMessage: 'Features'
  },
  scaffoldingHeader: {
    id: 'boilerplate.containers.FeaturePage.scaffolding.header',
    defaultMessage: 'Quick scaffolding'
  },
  scaffoldingMessage: {
    id: 'boilerplate.containers.FeaturePage.scaffolding.message',
    defaultMessage: 'Automate the creation of components, containers, routes, selectors\n  and sagas - and their tests - right from the CLI!'
  },
  feedbackHeader: {
    id: 'boilerplate.containers.FeaturePage.feedback.header',
    defaultMessage: 'Instant feedback'
  },
  feedbackMessage: {
    id: 'boilerplate.containers.FeaturePage.feedback.message',
    defaultMessage: '\n      Enjoy the best DX and code your app at the speed of thought! Your\n    saved changes to the CSS and JS are reflected instantaneously\n    without refreshing the page. Preserve application state even when\n    you update something in the underlying code!\n    '
  },
  stateManagementHeader: {
    id: 'boilerplate.containers.FeaturePage.state_management.header',
    defaultMessage: 'Predictable state management'
  },
  stateManagementMessages: {
    id: 'boilerplate.containers.FeaturePage.state_management.message',
    defaultMessage: '\n      Unidirectional data flow allows for change logging and time travel\n    debugging.\n    '
  },
  javascriptHeader: {
    id: 'boilerplate.containers.FeaturePage.javascript.header',
    defaultMessage: 'Next generation JavaScript'
  },
  javascriptMessage: {
    id: 'boilerplate.containers.FeaturePage.javascript.message',
    defaultMessage: 'Use template strings, object destructuring, arrow functions, JSX\n    syntax and more, today.'
  },
  cssHeader: {
    id: 'boilerplate.containers.FeaturePage.css.header',
    defaultMessage: 'Features'
  },
  cssMessage: {
    id: 'boilerplate.containers.FeaturePage.css.message',
    defaultMessage: 'Next generation CSS'
  },
  routingHeader: {
    id: 'boilerplate.containers.FeaturePage.routing.header',
    defaultMessage: 'Industry-standard routing'
  },
  routingMessage: {
    id: 'boilerplate.containers.FeaturePage.routing.message',
    defaultMessage: '\n      Write composable CSS that\'s co-located with your components for\n    complete modularity. Unique generated class names keep the\n    specificity low while eliminating style clashes. Ship only the\n    styles that are on the page for the best performance.\n    '
  },
  networkHeader: {
    id: 'boilerplate.containers.FeaturePage.network.header',
    defaultMessage: 'Offline-first'
  },
  networkMessage: {
    id: 'boilerplate.containers.FeaturePage.network.message',
    defaultMessage: '\n      The next frontier in performant web apps: availability without a\n      network connection from the instant your users load the app.\n    '
  },
  intlHeader: {
    id: 'boilerplate.containers.FeaturePage.internationalization.header',
    defaultMessage: 'Complete i18n Standard Internationalization & Pluralization'
  },
  intlMessage: {
    id: 'boilerplate.containers.FeaturePage.internationalization.message',
    defaultMessage: 'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.'
  }
});

/***/ }

});