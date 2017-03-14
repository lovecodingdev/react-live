webpackJsonp([0],{

/***/ "./app/components/H2/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  font-size: 1.5em;\n'], ['\n  font-size: 1.5em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var H2 = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].h2(_templateObject);

/* harmony default export */ exports["a"] = H2;

/***/ },

/***/ "./app/components/IssueIcon/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


function IssueIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      height: "1em",
      width: "0.875em",
      className: props.className
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z" })
  );
}

IssueIcon.propTypes = {
  className: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ exports["a"] = IssueIcon;

/***/ },

/***/ "./app/components/List/Ul.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n'], ['\n  list-style: none;\n  margin: 0;\n  width: 100%;\n  max-height: 30em;\n  overflow-y: auto;\n  padding: 0 1em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Ul = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].ul(_templateObject);

/* harmony default export */ exports["a"] = Ul;

/***/ },

/***/ "./app/components/List/Wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n'], ['\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  background-color: white;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  overflow: hidden;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div(_templateObject);

/* harmony default export */ exports["a"] = Wrapper;

/***/ },

/***/ "./app/components/List/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ul__ = __webpack_require__("./app/components/List/Ul.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Wrapper__ = __webpack_require__("./app/components/List/Wrapper.js");





function List(props) {
  var ComponentToRender = props.component;
  var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', null);

  // If we have items, render them
  if (props.items) {
    content = props.items.map(function (item, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToRender, { key: 'item-' + index, item: item });
    });
  } else {
    // Otherwise render a single component
    content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ComponentToRender, null);
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Wrapper__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__Ul__["a" /* default */],
      null,
      content
    )
  );
}

List.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func.isRequired,
  items: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array
};

/* harmony default export */ exports["a"] = List;

/***/ },

/***/ "./app/components/ListItem/Item.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n'], ['\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Item = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div(_templateObject);

/* harmony default export */ exports["a"] = Item;

/***/ },

/***/ "./app/components/ListItem/Wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n'], ['\n  width: 100%;\n  height: 3em;\n  display: flex;\n  align-items: center;\n  position: relative;\n  border-top: 1px solid #eee;\n\n  &:first-child {\n    border-top: none;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].li(_templateObject);

/* harmony default export */ exports["a"] = Wrapper;

/***/ },

/***/ "./app/components/ListItem/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Item__ = __webpack_require__("./app/components/ListItem/Item.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Wrapper__ = __webpack_require__("./app/components/ListItem/Wrapper.js");





function ListItem(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Wrapper__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__Item__["a" /* default */],
      null,
      props.item
    )
  );
}

ListItem.propTypes = {
  item: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.any
};

/* harmony default export */ exports["a"] = ListItem;

/***/ },

/***/ "./app/components/LoadingIndicator/Circle.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n'], ['\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ', '\n\n    &:before {\n      content: \'\';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: ', ' 1.2s infinite ease-in-out both;\n      ', '\n    }\n  '], ['\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ', '\n\n    &:before {\n      content: \'\';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: ', ' 1.2s infinite ease-in-out both;\n      ', '\n    }\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var circleFadeDelay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* keyframes */])(_templateObject);

var Circle = function Circle(props) {
  var CirclePrimitive = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2, props.rotate && '\n      -webkit-transform: rotate(' + props.rotate + 'deg);\n      -ms-transform: rotate(' + props.rotate + 'deg);\n      transform: rotate(' + props.rotate + 'deg);\n    ', circleFadeDelay, props.delay && '\n        -webkit-animation-delay: ' + props.delay + 's;\n        animation-delay: ' + props.delay + 's;\n      ');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CirclePrimitive, null);
};

Circle.propTypes = {
  delay: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  rotate: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
};

/* harmony default export */ exports["a"] = Circle;

/***/ },

/***/ "./app/components/LoadingIndicator/Wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n'], ['\n  margin: 2em auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div(_templateObject);

/* harmony default export */ exports["a"] = Wrapper;

/***/ },

/***/ "./app/components/LoadingIndicator/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Circle__ = __webpack_require__("./app/components/LoadingIndicator/Circle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Wrapper__ = __webpack_require__("./app/components/LoadingIndicator/Wrapper.js");





var LoadingIndicator = function LoadingIndicator() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__Wrapper__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 30, delay: -1.1 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 60, delay: -1 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 90, delay: -0.9 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 120, delay: -0.8 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 150, delay: -0.7 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 180, delay: -0.6 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 210, delay: -0.5 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 240, delay: -0.4 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 270, delay: -0.3 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 300, delay: -0.2 }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Circle__["a" /* default */], { rotate: 330, delay: -0.1 })
  );
};

/* harmony default export */ exports["a"] = LoadingIndicator;

/***/ },

/***/ "./app/components/ReposList/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_List__ = __webpack_require__("./app/components/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_ListItem__ = __webpack_require__("./app/components/ListItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_LoadingIndicator__ = __webpack_require__("./app/components/LoadingIndicator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_RepoListItem__ = __webpack_require__("./app/containers/RepoListItem/index.js");







function ReposList(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      repos = _ref.repos;

  if (loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_List__["a" /* default */], { component: __WEBPACK_IMPORTED_MODULE_3_components_LoadingIndicator__["a" /* default */] });
  }

  if (error !== false) {
    var ErrorComponent = function ErrorComponent() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components_ListItem__["a" /* default */], { item: 'Something went wrong, please try again!' });
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_List__["a" /* default */], { component: ErrorComponent });
  }

  if (repos !== false) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_List__["a" /* default */], { items: repos, component: __WEBPACK_IMPORTED_MODULE_4_containers_RepoListItem__["a" /* default */] });
  }

  return null;
}

ReposList.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any,
  repos: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any
};

/* harmony default export */ exports["a"] = ReposList;

/***/ },

/***/ "./app/containers/App/actions.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./app/containers/App/constants.js");
/* harmony export (immutable) */ exports["a"] = loadRepos;
/* harmony export (immutable) */ exports["b"] = reposLoaded;
/* harmony export (immutable) */ exports["c"] = repoLoadingError;
/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */



/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
function loadRepos() {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* LOAD_REPOS */]
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
function reposLoaded(repos, username) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOAD_REPOS_SUCCESS */],
    repos: repos,
    username: username
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
function repoLoadingError(error) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOAD_REPOS_ERROR */],
    error: error
  };
}

/***/ },

/***/ "./app/containers/HomePage/AtPrefix.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  color: black;\n  margin-left: 0.4em;\n'], ['\n  color: black;\n  margin-left: 0.4em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var AtPrefix = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].span(_templateObject);

/* harmony default export */ exports["a"] = AtPrefix;

/***/ },

/***/ "./app/containers/HomePage/CenteredSection.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Section__ = __webpack_require__("./app/containers/HomePage/Section.js");
var _templateObject = _taggedTemplateLiteral(['\n  text-align: center;\n'], ['\n  text-align: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var CenteredSection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__Section__["a" /* default */])(_templateObject);

/* harmony default export */ exports["a"] = CenteredSection;

/***/ },

/***/ "./app/containers/HomePage/Form.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 1em;\n'], ['\n  margin-bottom: 1em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Form = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].form(_templateObject);

/* harmony default export */ exports["a"] = Form;

/***/ },

/***/ "./app/containers/HomePage/Input.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  outline: none;\n  border-bottom: 1px dotted #999;\n'], ['\n  outline: none;\n  border-bottom: 1px dotted #999;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Input = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].input(_templateObject);

/* harmony default export */ exports["a"] = Input;

/***/ },

/***/ "./app/containers/HomePage/Section.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n'], ['\n  margin: 3em auto;\n\n  &:first-child {\n    margin-top: 0;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Section = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].section(_templateObject);

/* harmony default export */ exports["a"] = Section;

/***/ },

/***/ "./app/containers/HomePage/actions.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./app/containers/HomePage/constants.js");
/* harmony export (immutable) */ exports["a"] = changeUsername;
/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */



/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
function changeUsername(name) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* CHANGE_USERNAME */],
    name: name
  };
}

/***/ },

/***/ "./app/containers/HomePage/constants.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CHANGE_USERNAME; });
/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

var CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';

/***/ },

/***/ "./app/containers/HomePage/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reselect__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_containers_App_selectors__ = __webpack_require__("./app/containers/App/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components_H2__ = __webpack_require__("./app/components/H2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_components_ReposList__ = __webpack_require__("./app/components/ReposList/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AtPrefix__ = __webpack_require__("./app/containers/HomePage/AtPrefix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CenteredSection__ = __webpack_require__("./app/containers/HomePage/CenteredSection.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Form__ = __webpack_require__("./app/containers/HomePage/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Input__ = __webpack_require__("./app/containers/HomePage/Input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Section__ = __webpack_require__("./app/containers/HomePage/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__messages__ = __webpack_require__("./app/containers/HomePage/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__App_actions__ = __webpack_require__("./app/containers/App/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__actions__ = __webpack_require__("./app/containers/HomePage/actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selectors__ = __webpack_require__("./app/containers/HomePage/selectors.js");
/* harmony export (binding) */ __webpack_require__.d(exports, "HomePage", function() { return HomePage; });
/* harmony export (immutable) */ exports["mapDispatchToProps"] = mapDispatchToProps;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */




















var HomePage = function (_React$PureComponent) {
  _inherits(HomePage, _React$PureComponent);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'componentDidMount',
    // eslint-disable-line react/prefer-stateless-function
    /**
     * when initial state username is not null, submit the form to load repos
     */
    value: function componentDidMount() {
      if (this.props.username && this.props.username.trim().length > 0) {
        this.props.onSubmitForm();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          error = _props.error,
          repos = _props.repos;

      var reposListProps = {
        loading: loading,
        error: error,
        repos: repos
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'article',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          title: 'Home Page',
          meta: [{ name: 'description', content: 'A React.js application homepage' }]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__CenteredSection__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_components_H2__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].startProjectHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].startProjectMessage)
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__Section__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_components_H2__["a" /* default */],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].trymeHeader)
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_10__Form__["a" /* default */],
              { onSubmit: this.props.onSubmitForm },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'label',
                { htmlFor: 'username' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].trymeMessage),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_8__AtPrefix__["a" /* default */],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["c" /* FormattedMessage */], __WEBPACK_IMPORTED_MODULE_13__messages__["a" /* default */].trymeAtPrefix)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Input__["a" /* default */], {
                  id: 'username',
                  type: 'text',
                  value: this.props.username,
                  onChange: this.props.onChangeUsername
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_components_ReposList__["a" /* default */], reposListProps)
          )
        )
      );
    }
  }]);

  return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

HomePage.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool,
  error: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object, __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool]),
  repos: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.oneOfType([__WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.array, __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.bool]),
  onSubmitForm: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func,
  username: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string,
  onChangeUsername: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: function onChangeUsername(evt) {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__actions__["a" /* changeUsername */])(evt.target.value));
    },
    onSubmitForm: function onSubmitForm(evt) {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__App_actions__["a" /* loadRepos */])());
    }
  };
}

var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_reselect__["b" /* createStructuredSelector */])({
  repos: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_containers_App_selectors__["b" /* makeSelectRepos */])(),
  username: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__selectors__["a" /* makeSelectUsername */])(),
  loading: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_containers_App_selectors__["c" /* makeSelectLoading */])(),
  error: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_containers_App_selectors__["d" /* makeSelectError */])()
});

// Wrap the component to inject dispatch and state into it
/* harmony default export */ exports["default"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(HomePage);

/***/ },

/***/ "./app/containers/HomePage/messages.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */


/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["d" /* defineMessages */])({
  startProjectHeader: {
    id: 'boilerplate.containers.HomePage.start_project.header',
    defaultMessage: 'Start your next react project in seconds'
  },
  startProjectMessage: {
    id: 'boilerplate.containers.HomePage.start_project.message',
    defaultMessage: 'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices'
  },
  trymeHeader: {
    id: 'boilerplate.containers.HomePage.tryme.header',
    defaultMessage: 'Try me!'
  },
  trymeMessage: {
    id: 'boilerplate.containers.HomePage.tryme.message',
    defaultMessage: 'Show Github repositories by'
  },
  trymeAtPrefix: {
    id: 'boilerplate.containers.HomePage.tryme.atPrefix',
    defaultMessage: '@'
  }
});

/***/ },

/***/ "./app/containers/HomePage/selectors.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* unused harmony export selectHome */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return makeSelectUsername; });
/**
 * Homepage selectors
 */



var selectHome = function selectHome(state) {
  return state.get('home');
};

var makeSelectUsername = function makeSelectUsername() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(selectHome, function (homeState) {
    return homeState.get('username');
  });
};



/***/ },

/***/ "./app/containers/RepoListItem/IssueIcon.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_IssueIcon__ = __webpack_require__("./app/components/IssueIcon/index.js");
var _templateObject = _taggedTemplateLiteral(['\n  fill: #ccc;\n  margin-right: 0.25em;\n'], ['\n  fill: #ccc;\n  margin-right: 0.25em;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var IssueIcon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_components_IssueIcon__["a" /* default */])(_templateObject);

/* harmony default export */ exports["a"] = IssueIcon;

/***/ },

/***/ "./app/containers/RepoListItem/IssueLink.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_A__ = __webpack_require__("./app/components/A/index.js");
var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n'], ['\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var IssueLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_components_A__["a" /* default */])(_templateObject);

/* harmony default export */ exports["a"] = IssueLink;

/***/ },

/***/ "./app/containers/RepoListItem/RepoLink.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_A__ = __webpack_require__("./app/components/A/index.js");
var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n'], ['\n  height: 100%;\n  color: black;\n  display: flex;\n  align-items: center;\n  width: 100%;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var RepoLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_components_A__["a" /* default */])(_templateObject);

/* harmony default export */ exports["a"] = RepoLink;

/***/ },

/***/ "./app/containers/RepoListItem/Wrapper.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.es.js");
var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n'], ['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: space-between;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = __WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].div(_templateObject);

/* harmony default export */ exports["a"] = Wrapper;

/***/ },

/***/ "./app/containers/RepoListItem/index.js":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__("./node_modules/reselect/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_intl__ = __webpack_require__("./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers_App_selectors__ = __webpack_require__("./app/containers/App/selectors.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_ListItem__ = __webpack_require__("./app/components/ListItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IssueIcon__ = __webpack_require__("./app/containers/RepoListItem/IssueIcon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__IssueLink__ = __webpack_require__("./app/containers/RepoListItem/IssueLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RepoLink__ = __webpack_require__("./app/containers/RepoListItem/RepoLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Wrapper__ = __webpack_require__("./app/containers/RepoListItem/Wrapper.js");
/* unused harmony export RepoListItem */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */













var RepoListItem = function (_React$PureComponent) {
  _inherits(RepoListItem, _React$PureComponent);

  function RepoListItem() {
    _classCallCheck(this, RepoListItem);

    return _possibleConstructorReturn(this, (RepoListItem.__proto__ || Object.getPrototypeOf(RepoListItem)).apply(this, arguments));
  }

  _createClass(RepoListItem, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      var item = this.props.item;
      var nameprefix = '';

      // If the repository is owned by a different person than we got the data for
      // it's a fork and we should show the name of the owner
      if (item.owner.login !== this.props.currentUser) {
        nameprefix = item.owner.login + '/';
      }

      // Put together the content of the repository
      var content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9__Wrapper__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__RepoLink__["a" /* default */],
          { href: item.html_url, target: '_blank' },
          nameprefix + item.name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7__IssueLink__["a" /* default */],
          { href: item.html_url + '/issues', target: '_blank' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__IssueIcon__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_intl__["e" /* FormattedNumber */], { value: item.open_issues_count })
        )
      );

      // Render the content into a list item
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components_ListItem__["a" /* default */], { key: 'repo-list-item-' + item.full_name, item: content });
    }
  }]);

  return RepoListItem;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

RepoListItem.propTypes = {
  item: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object,
  currentUser: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.string
};

/* harmony default export */ exports["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["b" /* createStructuredSelector */])({
  currentUser: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_containers_App_selectors__["e" /* makeSelectCurrentUser */])()
}))(RepoListItem);

/***/ }

});