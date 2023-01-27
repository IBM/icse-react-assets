<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> faf8c38 (fixed imports)
'use strict';
=======
"use strict";
>>>>>>> 94a1f9f (added tests and changed naming and examples)
=======
'use strict';
>>>>>>> b5b1ac6 (fixed build)

Object.defineProperty(exports, '__esModule', { value: true });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var React = require('react');
var iconsReact = require('@carbon/icons-react');
var PropTypes = require('prop-types');
var react = require('@carbon/react');
=======
var React = require('react');
var iconsReact = require('@carbon/icons-react');
var react = require('@carbon/react');
var PropTypes = require('prop-types');
var lazyZ = require('lazy-z');
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/**
 * create a composed class name
 * @param {string} className name of classes to add
 * @param {*} props arbitrary props
 * @param {string=} props.className additional classnames
 */
function addClassName(className, props) {
  let composedClassName = className;
  if (props?.className) {
    composedClassName += " " + props.className;
    if (props.noMarginRight === true) {
      composedClassName = composedClassName.replace(/\s?marginRight\b/g, "");
    }
  }
  return composedClassName;
}

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}
=======
var react = require('@carbon/react');
var React = require('react');
var PropTypes = require('prop-types');
var lazyZ = require('lazy-z');
var iconsReact = require('@carbon/icons-react');
=======
var react = require("@carbon/react");
var React = require("react");
var PropTypes = require("prop-types");
var lazyZ = require("lazy-z");
var iconsReact = require("@carbon/icons-react");
>>>>>>> 94a1f9f (added tests and changed naming and examples)

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

<<<<<<< HEAD
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> faf8c38 (fixed imports)
=======
var regexButWithWords__default = /*#__PURE__*/_interopDefaultLegacy(regexButWithWords);
>>>>>>> 6979d94 (icse name input, needs docs)
=======
>>>>>>> fecad7c (remove nameinput validation)
=======
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/ _interopDefaultLegacy(PropTypes);
>>>>>>> 94a1f9f (added tests and changed naming and examples)
=======
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

var _require = require("lazy-z"),
  isFunction = _require.isFunction;

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  var disableSubmit = isFunction(component.props.shouldDisableSubmit);
  var disableSave = isFunction(component.props.shouldDisableSave);
  if (component.props.shouldDisableSave) component.shouldDisableSave = component.props.shouldDisableSave.bind(component);
  if (disableSubmit) component.shouldDisableSubmit = component.props.shouldDisableSubmit.bind(component);

  // set update
  component.componentDidMount = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);
  component.componentDidUpdate = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);

  // set on save function
  component.onSave = function () {
    component.props.onSave(this.state, this.props);
  }.bind(component);
  // save on delete
  component.onDelete = function () {
    component.props.onDelete(this.state, this.props);
  }.bind(component);
}

/**
 * add default methods to component
 * @param {*} component React Component
 */
function buildFormDefaultInputMethods(component) {
  component.eventTargetToNameAndValue = eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$8 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$8);

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

var EmptyResourceTile = function EmptyResourceTile(props) {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React__default["default"].createElement(react.Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Click", /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  showIfEmpty: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].bool]).isRequired
};
>>>>>>> b5b1ac6 (fixed build)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/**
 * create a composed class name
 * @param {string} className name of classes to add
 * @param {*} props arbitrary props
 * @param {string=} props.className additional classnames
 */
function addClassName(className, props) {
  var composedClassName = className;
  if (props !== null && props !== void 0 && props.className) {
    composedClassName += " " + props.className;
    if (props.noMarginRight === true) {
      composedClassName = composedClassName.replace(/\s?marginRight\b/g, "");
    }
  }
  return composedClassName;
}

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
<<<<<<< HEAD
var UnderConstruction = function UnderConstruction() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};
=======
var _require = require("lazy-z"),
  isFunction = _require.isFunction;

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  var disableSubmit = isFunction(component.props.shouldDisableSubmit);
  var disableSave = isFunction(component.props.shouldDisableSave);
  if (component.props.shouldDisableSave) component.shouldDisableSave = component.props.shouldDisableSave.bind(component);
  if (disableSubmit) component.shouldDisableSubmit = component.props.shouldDisableSubmit.bind(component);

  // set update
  component.componentDidMount = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);
  component.componentDidUpdate = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);

  // set on save function
  component.onSave = function () {
    component.props.onSave(this.state, this.props);
  }.bind(component);
  // save on delete
  component.onDelete = function () {
    component.props.onDelete(this.state, this.props);
  }.bind(component);
}

/**
 * add default methods to component
 * @param {*} component React Component
 */
function buildFormDefaultInputMethods(component) {
  component.eventTargetToNameAndValue = eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

<<<<<<< HEAD
var css_248z$2 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$2);
=======
var css_248z$7 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$7);

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))

var EmptyResourceTile = function EmptyResourceTile(props) {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React__default["default"].createElement(react.Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Click", /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  showIfEmpty: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].bool]).isRequired
};

<<<<<<< HEAD
=======
function toggleMarginBottom(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}

>>>>>>> faf8c38 (fixed imports)
=======
>>>>>>> 23b5837 (add id as required)
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b238572 (Dropdowns Documentation)
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
=======
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
>>>>>>> b5b1ac6 (fixed build)
=======
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
>>>>>>> b238572 (Dropdowns Documentation)
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
=======
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
>>>>>>> b5b1ac6 (fixed build)
  }
  return target;
}
<<<<<<< HEAD
=======
>>>>>>> e90fadd (updates)
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
>>>>>>> 23b5837 (add id as required)
=======
>>>>>>> 8db187e (form and documentation)
=======
=======
>>>>>>> b238572 (Dropdowns Documentation)
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
<<<<<<< HEAD
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> b3a36f0 (changes pt. 1)
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b238572 (Dropdowns Documentation)
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      writable: true,
=======
      writable: true
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
      writable: true
>>>>>>> b5b1ac6 (fixed build)
=======
      writable: true
>>>>>>> b238572 (Dropdowns Documentation)
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 23b5837 (add id as required)
=======
>>>>>>> 8db187e (form and documentation)
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> 67351ff (Dropdowns components)
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> 69bcf66 (changes pt. 2)
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
<<<<<<< HEAD
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
>>>>>>> 67351ff (Dropdowns components)
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

/**
 * create a composed class name
 * @param {string} className name of classes to add
 * @param {*} props arbitrary props
 * @param {string=} props.className additional classnames
 */
function addClassName$1(className, props) {
  let composedClassName = className;
  if (props?.className) {
    composedClassName += " " + props.className;
    if (props.noMarginRight === true) {
      composedClassName = composedClassName.replace(/\s?marginRight\b/g, "");
    }
  }
  return composedClassName;
}

/** check if input is null or empty string
 * @param {string} input
 * @returns {boolean} true if str null or ""
 */
function checkNullorEmptyString$1(input) {
  if (input === null || input === "") return true;else return false;
}

/**
 * preprend [""] to an existing array if check is true
 * @param {*} value check value if it is null or empty string
 * @param {Array<string>} arr
 */
function prependEmptyStringWhenNull$1(value, arr) {
  let arrayCheck = checkNullorEmptyString$1(value);
  let prependArray = arrayCheck ? [""] : [];
  return prependArray.concat(arr);
}

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom$1(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
var formUtils = /*#__PURE__*/Object.freeze({
=======
var formUtils = /*#__PURE__*/ Object.freeze({
>>>>>>> 94a1f9f (added tests and changed naming and examples)
  __proto__: null,
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
});
=======
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1
};
<<<<<<< HEAD
=======

const {
  kebabCase
} = lazyZ__default["default"];
>>>>>>> b5b1ac6 (fixed build)

const {
  kebabCase
} = lazyZ__default["default"];
>>>>>>> 8655315 (changes (exports, readme, example))

<<<<<<< HEAD
const {
  RegexButWithWords
} = regexButWithWords__default["default"];
var constants = {
  nameValidationExp: new RegexButWithWords().stringBegin().set("A-z").group(exp => {
    exp.set("a-z0-9-").anyNumber().set("a-z0-9");
  }).lazy().stringEnd().done("i")
};
var constants_1 = constants.nameValidationExp;

>>>>>>> 6979d94 (icse name input, needs docs)
=======
>>>>>>> fecad7c (remove nameinput validation)
/**
 * format input placeholder
 * @param {string} componentName
 * @param {string} fieldName
 * @returns {string} placeholder name
 */
function formatInputPlaceholder$1(componentName, fieldName) {
  return `my-${kebabCase(componentName)}-${kebabCase(fieldName)}`;
}
<<<<<<< HEAD

var textUtils = /*#__PURE__*/ Object.freeze({
  __proto__: null,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  formatInputPlaceholder: formatInputPlaceholder$1
=======
var formUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
=======
var formUtils = {
>>>>>>> 69bcf66 (changes pt. 2)
  addClassName: addClassName$1,
<<<<<<< HEAD
  toggleMarginBottom: toggleMarginBottom$1
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
  formatInputPlaceholder: formatInputPlaceholder$1,
  hasInvalidName: hasInvalidName$1,
  validName: validName$1
>>>>>>> 6979d94 (icse name input, needs docs)
=======
  formatInputPlaceholder: formatInputPlaceholder$1
>>>>>>> fecad7c (remove nameinput validation)
=======
  formatInputPlaceholder: formatInputPlaceholder$1,
>>>>>>> 94a1f9f (added tests and changed naming and examples)
=======
var textUtils = {
  formatInputPlaceholder: formatInputPlaceholder$1
};
<<<<<<< HEAD
var textUtils_1 = textUtils.formatInputPlaceholder;
=======
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
<<<<<<< HEAD
});
>>>>>>> 67351ff (Dropdowns components)
=======
};
>>>>>>> 69bcf66 (changes pt. 2)

var textUtils$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': textUtils,
  __moduleExports: textUtils,
  formatInputPlaceholder: textUtils_1
>>>>>>> 8655315 (changes (exports, readme, example))
});
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))

/**
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b5b1ac6 (fixed build)
 * create classname for sub form chevron save button
 * @param {*} componentProps
 * @returns {string} classNames for button
 */
function saveChangeButtonClass$1(componentProps) {
  let className = "forceTertiaryButtonStyles";
  if (componentProps.noDeleteButton !== true) className += " marginRightSmall";
  if (componentProps.disabled !== true) className += " tertiaryButtonColors";
  return className;
}
var buttonUtils = {
<<<<<<< HEAD
  saveChangeButtonClass: saveChangeButtonClass$1,
};

<<<<<<< HEAD
=======
=======
  saveChangeButtonClass: saveChangeButtonClass$1
};

/**
>>>>>>> b5b1ac6 (fixed build)
 * default handle event change function
 * @param {event} event
 * @param {Object} event.target
 * @param {string} event.target.name name to set
 * @param {*} event.target.value value to set
 * @returns {Object} object with key of name set to value
 */
function eventTargetToNameAndValue$2(event) {
  let {
    name,
    value
  } = event.target;
  return setNameToValue$2(name, value);
}

/**
 * default handle toggle function
 * @param {string} fieldName name to set
 * @param {Object} stateData component state data
 * @returns {Object} object with key of field name set to boolean opposite in state
 */
function toggleStateBoolean$2(fieldName, stateData) {
  return {
    [fieldName]: !stateData[fieldName]
  };
}
function setNameToValue$2(name, value) {
  return {
    [name]: value
  };
}
var methodFunctions = {
  eventTargetToNameAndValue: eventTargetToNameAndValue$2,
  toggleStateBoolean: toggleStateBoolean$2,
  setNameToValue: setNameToValue$2
};

>>>>>>> 8db187e (form and documentation)
const {
  toggleMarginBottom,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  addClassName,
  formatInputPlaceholder
=======
  addClassName
>>>>>>> 6979d94 (icse name input, needs docs)
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
<<<<<<< HEAD
<<<<<<< HEAD
  saveChangeButtonClass
} = buttonUtils;
=======
const { toggleMarginBottom, addClassName } = formUtils;
const { formatInputPlaceholder } = textUtils;
const { saveChangeButtonClass } = buttonUtils;
>>>>>>> 94a1f9f (added tests and changed naming and examples)
var lib = {
  toggleMarginBottom,
  addClassName,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  formatInputPlaceholder
=======
  addClassName
} = formUtils;
var lib = {
  toggleMarginBottom,
  addClassName
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
  formatInputPlaceholder,
  hasInvalidName,
  validName
>>>>>>> 6979d94 (icse name input, needs docs)
=======
  formatInputPlaceholder
>>>>>>> fecad7c (remove nameinput validation)
=======
  formatInputPlaceholder,
<<<<<<< HEAD
  saveChangeButtonClass
>>>>>>> 04bfb65 (added button examples)
=======
  saveChangeButtonClass,
>>>>>>> 94a1f9f (added tests and changed naming and examples)
=======
=======
  saveChangeButtonClass
} = buttonUtils;
const {
>>>>>>> b5b1ac6 (fixed build)
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
} = methodFunctions;
var lib = {
  toggleMarginBottom,
  addClassName,
  formatInputPlaceholder,
  saveChangeButtonClass,
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
<<<<<<< HEAD
  setNameToValue: setNameToValue$1,
  buildFormFunctions,
  buildFormDefaultInputMethods
>>>>>>> 8db187e (form and documentation)
=======
  setNameToValue: setNameToValue$1
>>>>>>> 8655315 (changes (exports, readme, example))
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.formatInputPlaceholder;
<<<<<<< HEAD
<<<<<<< HEAD
var lib_4 = lib.saveChangeButtonClass;
=======
var lib_7 = lib.buildFormFunctions;
>>>>>>> 8db187e (form and documentation)
=======
>>>>>>> 8655315 (changes (exports, readme, example))
=======
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString
} = formUtils;
var lib = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
<<<<<<< HEAD
var lib_3 = lib.prependEmptyStringToArrayOnNullOrEmptyString;
>>>>>>> 67351ff (Dropdowns components)
=======
var lib_3 = lib.prependEmptyStringWhenNull;
>>>>>>> b3a36f0 (changes pt. 1)

<<<<<<< HEAD
<<<<<<< HEAD
function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$6 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$6);
=======
var css_248z$5 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$5);
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
=======
var css_248z$7 =
  ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
>>>>>>> 94a1f9f (added tests and changed naming and examples)
styleInject(css_248z$7);
>>>>>>> 04bfb65 (added button examples)
=======
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$7);
>>>>>>> 8db187e (form and documentation)
=======
var css_248z$6 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$6);
=======
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$7);
>>>>>>> b5b1ac6 (fixed build)

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
  return /*#__PURE__*/React__default["default"].createElement(form, _objectSpread2({}, formProps));
}

/**
 * Dynamically render inner contents
 * @param {*} props
 * @param {boolean=} props.hide hide element
 * @param {boolean=} props.show component to show when hide is false
 * @returns empty string when hidden, component when visible
 */
function DynamicRender(props) {
  return props.hide === true ? "" : props.show;
}

/**
 * wrapper for title groups
 */
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2("displayFlex alignItemsCenter widthOneHundredPercent ".concat(lib_1(props.hide)), props)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes__default["default"].node.isRequired
};
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2(formGroupClassName, props)
  }, props.children);
};
IcseFormGroup.defaultProps = {
  noMarginBottom: false
};
IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node.isRequired,
  className: PropTypes__default["default"].string
};
var IcseSubForm = function IcseSubForm(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props),
    id: props.id
  }, props.children);
};
IcseSubForm.defaultProps = {
  formInSubForm: false
};
IcseSubForm.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  formInSubForm: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired
};

var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React__default["default"].createElement(react.Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
  }, "this link");
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(react.Toggletip, {
    align: props.align
  }, /*#__PURE__*/React__default["default"].createElement(react.ToggletipButton, null, /*#__PURE__*/React__default["default"].createElement(iconsReact.Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React__default["default"].createElement(react.ToggletipContent, null, /*#__PURE__*/React__default["default"].createElement("p", null, props.content, props.link && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, " Visit ", link, " for more information. ")))));
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top"
};
IcseToolTip.propTypes = {
  content: PropTypes__default["default"].string.isRequired,
  link: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string.isRequired
};
var BuildToolTip = function BuildToolTip(props) {
  var _props$tooltip;
  return /*#__PURE__*/React__default["default"].createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: (_props$tooltip = props.tooltip) === null || _props$tooltip === void 0 ? void 0 : _props$tooltip.link,
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align
  });
};
BuildToolTip.defaultProps = {
  tooltip: {
    content: ""
  },
  isModal: false,
  align: "top",
  alignModal: "bottom"
};
BuildToolTip.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  align: PropTypes__default["default"].string.isRequired,
  alignModal: PropTypes__default["default"].string.isRequired
};
var ToolTipWrapper = function ToolTipWrapper(props) {
  var allProps = _objectSpread2({}, props);
  var tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined) {
    throw new Error("ToolTipWrapper expects `props.labelText` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
  allProps.className = lib_2("tooltip", _objectSpread2({}, props));
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cds--form-item"
  }, props.noLabelText ?
  /*#__PURE__*/
  // No label- this is usually a title
  React__default["default"].createElement("div", {
    className: "labelRow"
  }, RenderForm(props.innerForm, allProps), tooltip) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React__default["default"].cloneElement(props.children, {
    // adjust props
    labelText: " ",
    // set labelText to empty
    className: props.children.props.className + " tooltip" // add tooltip class back
  }) : RenderForm(props.innerForm, allProps)));
};
ToolTipWrapper.defaultProps = {
  tooltip: {
    content: ""
  },
  noLabelText: false
};
ToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string
  }).isRequired,
  isModal: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].string.isRequired,
  labelText: PropTypes__default["default"].string,
  noLabelText: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func])
};
var DynamicToolTipWrapper = function DynamicToolTipWrapper(props) {
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error("DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither.");
  }
  return props.tooltip ? /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string,
    link: PropTypes__default["default"].string
  }),
  isModal: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func])
};

var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, _extends({
    innerForm: function innerForm() {
      return /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
        className: lib_2("leftTextAlign fieldWidth", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
        ,

        onToggle: function onToggle(event) {
          props.onToggle(toggleName, event);
        },
        defaultToggled: props.defaultToggled,
        disabled: props.disabled
      });
    }
  }, props));
};
IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false
};
IcseToggle.propTypes = {
  useOnOff: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  labelText: PropTypes__default["default"].string.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  toggleFieldName: PropTypes__default["default"].string,
  // if field is name other than label text snake case
  defaultToggled: PropTypes__default["default"].bool.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  onToggle: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

/**
 * Icse Text Input
 * @param {*} props props
 * @param {string} props.componentName name of the component being edited
 * @param {string} props.placeholder placeholder text for field
 * @param {string} props.field field (ex. name)
 * @param {string=} props.value actual value
 * @param {Function} props.onChange onchange function
 * @param {string} props.helperText helper text
 * @param {string} props.className classnames to add
 * @param {boolean=} props.readOnly read only
 * @param {string=} props.labelText override label text
 * @returns <IcseTextInput/> component
 */
var IcseTextInput = function IcseTextInput(props) {
  var fieldName = lazyZ.titleCase(props.field);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign", props),
    labelText: props.labelText ? props.labelText : lazyZ.titleCase(props.field),
    placeholder: props.placeholder || lib_3(props.componentName, fieldName),
    name: props.field,
    value: props.value || "",
    invalid: lazyZ.isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
    onChange: props.onChange,
    helperText: props.helperText,
    invalidText: props.invalidText ? props.invalidText : "Invalid ".concat(props.field, " value."),
    maxLength: props.maxLength,
    disabled: props.disabled,
    readOnly: props.readOnly
  }));
};
IcseTextInput.defaultProps = {
  maxLength: null,
  disabled: false,
  readOnly: false,
  hideHelperText: false
};
IcseTextInput.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  componentName: PropTypes__default["default"].string,
  placeholder: PropTypes__default["default"].string,
  field: PropTypes__default["default"].string.isRequired,
  value: PropTypes__default["default"].string,
  onChange: PropTypes__default["default"].func.isRequired,
  helperText: PropTypes__default["default"].string,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  className: PropTypes__default["default"].string,
  readOnly: PropTypes__default["default"].bool.isRequired,
  labelText: PropTypes__default["default"].string.isRequired,
  maxLength: PropTypes__default["default"].number,
  invalidCallback: PropTypes__default["default"].func,
  id: PropTypes__default["default"].string.isRequired,
  invalidText: PropTypes__default["default"].string
};

/**
 * Icse Name Field
 * @param {*} props
 * @param {string} props.id
 * @param {string=} props.className
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} props.component
 * @param {boolean=} props.hideHelperText
 * @param {func} props.helperTextCallback
 * @param {string} props.invalidText
 * @param {func} props.invalidCallback
 * @returns <IcseNameInput />
 */
var IcseNameInput = function IcseNameInput(props) {
  var helperText = "";
  // if helper text is not hidden
  if (!props.hideHelperText && !props.useData) {
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/React__default["default"].createElement(IcseTextInput, _extends({}, props, {
    className: lib_2("fieldWidth leftTextAlign ", props),
    field: "name",
    labelText: "Name",
    helperText: helperText
  }));
};
IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: ""
};
IcseNameInput.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func,
  componentName: PropTypes__default["default"].string.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  hideHelperText: PropTypes__default["default"].bool.isRequired,
  useData: PropTypes__default["default"].bool.isRequired,
  helperTextCallback: PropTypes__default["default"].func,
  invalidText: PropTypes__default["default"].string.isRequired,
  invalidCallback: PropTypes__default["default"].func
};

var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);

var AppIdKeyForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AppIdKeyForm, _React$Component);
  var _super = _createSuper(AppIdKeyForm);
  function AppIdKeyForm(props) {
    var _this;
    _classCallCheck(this, AppIdKeyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(AppIdKeyForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState({
        key_name: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "app-id-key-name",
        value: this.state.key_name,
        onChange: this.handleInputChange,
        field: "appid_key",
        labelText: "App ID Key",
        componentName: "appid",
        className: "fieldWidthSmaller",
        invalid: this.props.invalidCallback(this.props, this.state),
        invalidText: this.props.invalidTextCallback(this.props, this.state)
      }));
    }
  }]);
  return AppIdKeyForm;
}(React__default["default"].Component);
AppIdKeyForm.defaultProps = {
  data: {
    key_name: ""
  }
};
AppIdKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    key_name: PropTypes__default["default"].string.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

/**
 * Form Modal
 * @param {Object} props
 * @param {string} props.name the name of the modal
 * @param {Function} props.onRequestClose close modal function
 * @param {Function} props.onRequestSubmit submit function
 * @param {boolean} props.show show modal if true
 */
var FormModal = /*#__PURE__*/function (_Component) {
  _inherits(FormModal, _Component);
  var _super = _createSuper(FormModal);
  function FormModal(props) {
    var _this;
    _classCallCheck(this, FormModal);
    _this = _super.call(this, props);
    _this.state = {
      isDisabled: false
    };
    _this.modalForm = /*#__PURE__*/React__default["default"].createRef();
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.disableModal = _this.disableModal.bind(_assertThisInitialized(_this));
    _this.enableModal = _this.enableModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * submit child data
   */
  _createClass(FormModal, [{
    key: "handleSubmit",
    value: function handleSubmit() {
      var childData = this.modalForm.current.state;
      this.props.onRequestSubmit(childData);
    }

    /**
     * disable modal
     */
  }, {
    key: "disableModal",
    value: function disableModal() {
      if (!this.state.isDisabled) this.setState({
        isDisabled: true
      });
    }

    /**
     * enable modal
     */
  }, {
    key: "enableModal",
    value: function enableModal() {
      if (this.state.isDisabled) this.setState({
        isDisabled: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
        hide: this.props.show === false,
        show: /*#__PURE__*/React__default["default"].createElement(react.Modal, {
          modalHeading: this.props.name,
          open: this.props.show,
          onRequestSubmit: this.handleSubmit,
          onRequestClose: this.props.onRequestClose,
          primaryButtonText: "Submit",
          secondaryButtonText: "Cancel",
          primaryButtonDisabled: this.state.isDisabled
        }, this.props.show && React__default["default"].Children.map(this.props.children, function (child) {
          return (
            /*#__PURE__*/
            // clone react child
            React__default["default"].cloneElement(child, {
              // add modal specific methods
              disableModal: _this2.disableModal,
              enableModal: _this2.enableModal,
              isModal: true,
              ref: _this2.modalForm
            })
          );
        }))
      });
    }
  }]);
  return FormModal;
}(React.Component);
FormModal.defaultProps = {
  show: false
};
FormModal.propTypes = {
  show: PropTypes__default["default"].bool.isRequired,
  onRequestSubmit: PropTypes__default["default"].func.isRequired,
  onRequestClose: PropTypes__default["default"].func.isRequired,
  name: PropTypes__default["default"].string,
  // undefined for loaded modal not rendered
  children: PropTypes__default["default"].node.isRequired
};

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);

/**
 * Icse Modal Wrapper
 * @param {*} props
 * @param {string} props.name resource name
 * @param {string} props.heading modal heading
 * @param {boolean} props.open show modal
 * @param {boolean=} props.danger danger, defaults to true
 * @param {boolean=} props.alert alert, defaults to true
 * @param {string=} props.primaryButtonText defaults to `Dismiss Changes`
 * @param {string=} props.secondaryButtonText defaults to `Cancel`
 * @param {Function} props.onRequestSubmit
 * @param {Function} props.onRequestClose
 * @param {boolean=} props.useAddButton use + button instead of edit
 */
var IcseModal = function IcseModal(props) {
  /*#__PURE__*/React__default["default"].createElement("strong", null, props.name);
  return /*#__PURE__*/React__default["default"].createElement(react.Modal, {
    id: props.id,
    className: "leftTextAlign",
    modalHeading: props.heading,
    open: props.open,
    alert: props.alert,
    danger: props.danger,
    shouldSubmitOnEnter: true,
    primaryButtonText: props.primaryButtonText,
    secondaryButtonText: props.secondaryButtonText,
    onRequestSubmit: props.onRequestSubmit,
    onRequestClose: props.onRequestClose
  }, props.children);
};
IcseModal.defaultProps = {
  primaryButtonText: "Primary Button",
  secondaryButtonText: "Cancel",
  primaryButtonDisabled: false,
  danger: false,
  alert: true,
  open: false,
  heading: "Default Heading",
  id: "default-icse-modal"
};
IcseModal.propTypes = {
  primaryButtonText: PropTypes__default["default"].string.isRequired,
  secondaryButtonText: PropTypes__default["default"].string.isRequired,
  primaryButtonDisabled: PropTypes__default["default"].bool,
  danger: PropTypes__default["default"].bool,
  alert: PropTypes__default["default"].bool,
  heading: PropTypes__default["default"].string.isRequired,
  onRequestSubmit: PropTypes__default["default"].func.isRequired,
  onRequestClose: PropTypes__default["default"].func.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  open: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node.isRequired
};

/**
 * Delete modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React__default["default"].createElement("strong", null, props.name);
  return /*#__PURE__*/React__default["default"].createElement(IcseModal, {
    id: props.name + "-delete",
    name: props.name,
    heading: props.name,
    open: props.modalOpen,
    onRequestClose: props.onModalClose,
    onRequestSubmit: props.onModalSubmit,
    primaryButtonText: "Delete Resource",
    danger: true
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "You are about to delete ", name, ". This cannot be undone."));
};
DeleteModal.defaultProps = {
  modalOpen: false
};
DeleteModal.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  modalOpen: PropTypes__default["default"].bool.isRequired,
  onModalClose: PropTypes__default["default"].func.isRequired,
  onModalSubmit: PropTypes__default["default"].func.isRequired
};

/**
 * unsaved changes modal modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */

var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "unsaved-changes-modal-area"
  }, /*#__PURE__*/React__default["default"].createElement(IcseModal, {
    id: props.name + "-unsaved-changes",
    open: props.modalOpen,
    name: props.name,
    onRequestClose: props.onModalClose,
    onRequestSubmit: props.onModalSubmit,
    heading: props.useDefaultUnsavedMessage ? "Missing Required Values" : "Unsaved Changes",
    danger: true,
    primaryButtonText: "Dismiss Changes"
  }, props.useDefaultUnsavedMessage ? /*#__PURE__*/React__default["default"].createElement("span", null, "Resource ", name, " is missing required values.", " ", /*#__PURE__*/React__default["default"].createElement("strong", null, "Without these values, your configuration is invalid."), " ", "Are you sure you want to dismiss these changes?") : /*#__PURE__*/React__default["default"].createElement("span", null, "Resource ", name, " has unsaved changes. Are you sure you want to dismiss these changes?")));
};
UnsavedChangesModal.defaultProps = {
  modalOpen: false,
  useDefaultUnsavedMessage: true
};
UnsavedChangesModal.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  modalOpen: PropTypes__default["default"].bool.isRequired,
  onModalClose: PropTypes__default["default"].func.isRequired,
  onModalSubmit: PropTypes__default["default"].func.isRequired,
  useDefaultUnsavedMessage: PropTypes__default["default"].bool
};

var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
    itemToString: item => item ? item : "",
    invalid: props.invalid,
    invalidText: props.invalidText,
    initialSelectedItems: props.initialSelectedItems,
    onChange: props.onChange,
    items: props.items,
    useTitleInItem: props.useTitleInItem,
    label: props.label,
    disabled: props.disabled
  });
};
IcseMultiSelect.defaultProps = {
  disabled: false,
  useTitleInItem: false,
  invalid: false,
  invalidText: "Invalid value"
};
IcseMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  titleText: PropTypes__default["default"].string.isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
  invalidText: PropTypes__default["default"].string.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  items: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  useTitleInItem: PropTypes__default["default"].bool.isRequired,
  label: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool.isRequired
};

/**
 * ssh key multiselect
 */
const SshKeyMultiSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-ssh-key-multiselect",
    useTitleInItem: true,
    label: "SSH Keys",
    titleText: "SSH Keys",
    invalidText: "At least one SSH Key is required",
    invalid: props.initialSelectedItems.length === 0,
    items: props.sshKeys,
    initialSelectedItems: props.initialSelectedItems || [],
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    className: "fieldWidthSmaller cds--form-item"
  });
};
SshKeyMultiSelect.defaultProps = {
  initialSelectedItems: []
};
SshKeyMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  sshKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  initialSelectedItems: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

/**
 * sg multiselect
 */
const SecurityGroupMultiSelect = props => {
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error("SecurityGroupMultiselect requires a securityGroups object. Got " + lazyZ.prettyJSON(props.securityGroups));
  }
  return /*#__PURE__*/React__default["default"].createElement(react.MultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: props.label,
    titleText: "Security Groups",
    className: "fieldWidthSmaller cds--form-item",
    initialSelectedItems: props.initialSelectedItems,
    vpc_name: props.vpc_name,
    invalid: props.invalid,
    invalidText: "Invalid Selection",
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
    itemToString: item => item ? item : ""
  });
};
SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
  label: "Select Security Groups",
  invalid: false
};
SecurityGroupMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  vpc_name: PropTypes__default["default"].string,
  // not required, null value should be valid
  onChange: PropTypes__default["default"].func.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  securityGroups: PropTypes__default["default"].object.isRequired,
  invalid: PropTypes__default["default"].bool.isRequired
};

/**
 * vpc subnet multiselect
 */
const SubnetMultiSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
    initialSelectedItems: props.initialSelectedItems,
    invalidText: lazyZ.isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
    invalid: props.initialSelectedItems.length === 0,
    disabled: props.disabled,
    onChange: event => props.onChange(event.selectedItems)
  });
};
SubnetMultiSelect.defaultProps = {
  name: "subnet_names",
  label: "Subnets",
  disabled: false,
  vpc_name: "",
  initialSelectedItems: []
};
SubnetMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  vpc_name: PropTypes__default["default"].string,
  // not required, `null` needs to be passed here
  subnets: PropTypes__default["default"].object.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  onChange: PropTypes__default["default"].func.isRequired
};

/**
 * VPC List MultiSelect
 */
const VpcListMultiSelect = props => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error("VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " + lazyZ.prettyJSON(props.vpcList));
  }
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    invalidText: "At least one VPC must be selected.",
    invalid: props.invalid,
    id: props.id + "-vpc-select",
    titleText: props.titleText,
    onChange: event => props.onChange(event.selectedItems),
    initialSelectedItems: props.initialSelectedItems,
    className: props.className,
    items: props.vpcList
  });
};
VpcListMultiSelect.defaultProps = {
  invalid: false,
  titleText: "VPCs",
  initialSelectedItems: []
};
VpcListMultiSelect.propTypes = {
  invalid: PropTypes__default["default"].bool.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  vpcList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z);
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
var css_248z$1 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$1);
>>>>>>> b5b1ac6 (fixed build)

/**
 * Wrapper for carbon popover component to handle individual component mouseover
 */
var PopoverWrapper = /*#__PURE__*/ (function (_React$Component) {
  _inherits(PopoverWrapper, _React$Component);
  var _super = _createSuper(PopoverWrapper);
  function PopoverWrapper(props) {
    var _this;
    _classCallCheck(this, PopoverWrapper);
    _this = _super.call(this, props);
    _this.state = {
      isHovering: false,
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(
      _assertThisInitialized(_this)
    );
    _this.handleMouseOut = _this.handleMouseOut.bind(
      _assertThisInitialized(_this)
    );
    return _this;
  }

  /**
   * handle mouse over
   */
  _createClass(PopoverWrapper, [
    {
      key: "handleMouseOver",
      value: function handleMouseOver() {
        this.setState({
          isHovering: true,
        });
      },

      /**
       * handle mouse out
       */
    },
    {
      key: "handleMouseOut",
      value: function handleMouseOut() {
        this.setState({
          isHovering: false,
        });
      },
    },
    {
      key: "render",
      value: function render() {
        return this.props.noPopover === true || this.props.hoverText === ""
          ? this.props.children
          : /*#__PURE__*/ React__default["default"].createElement(
              "div",
              {
                className: lib_2("popover-obj", this.props),
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
              },
              /*#__PURE__*/ React__default["default"].createElement(
                react.Popover,
                {
                  open: this.state.isHovering,
                  autoAlign: this.props.align ? false : true,
                  dropShadow: false,
                  highContrast: true,
                  caret: false,
                  align: this.props.align,
                },
                this.props.children,
                /*#__PURE__*/ React__default["default"].createElement(
                  react.PopoverContent,
                  {
                    className:
                      "popover-box" +
                      (this.props.contentClassName
                        ? " ".concat(this.props.contentClassName)
                        : ""),
                  },
                  this.props.hoverText
                )
              )
            );
      },
    },
  ]);
  return PopoverWrapper;
})(React__default["default"].Component);
PopoverWrapper.defaultProps = {
  noPopover: false,
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes__default["default"].bool,
  hoverText: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired,
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
=======
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
=======
=======
const {
  isFunction
} = require("lazy-z");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let disableSave = isFunction(component.props.shouldDisableSave);
  if (component.props.shouldDisableSave) component.shouldDisableSave = component.props.shouldDisableSave.bind(component);
  if (disableSubmit) component.shouldDisableSubmit = component.props.shouldDisableSubmit.bind(component);

  // set update
  component.componentDidMount = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);
  component.componentDidUpdate = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);

  // set on save function
  component.onSave = function () {
    component.props.onSave(this.state, this.props);
  }.bind(component);
  // save on delete
  component.onDelete = function () {
    component.props.onDelete(this.state, this.props);
  }.bind(component);
}

/**
 * add default methods to component
 * @param {*} component React Component
 */
function buildFormDefaultInputMethods(component) {
  component.eventTargetToNameAndValue = eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}

>>>>>>> 8655315 (changes (exports, readme, example))
var css_248z$6 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$6);
=======
var css_248z$2 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$2);
>>>>>>> 67351ff (Dropdowns components)

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
  return /*#__PURE__*/React__default["default"].createElement(form, {
    ...formProps
  });
}

/**
 * Dynamically render inner contents
 * @param {*} props
 * @param {boolean=} props.hide hide element
 * @param {boolean=} props.show component to show when hide is false
 * @returns empty string when hidden, component when visible
 */
function DynamicRender(props) {
  return props.hide === true ? "" : props.show;
}

/**
 * wrapper for title groups
 */
const TitleGroup = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2(`displayFlex alignItemsCenter widthOneHundredPercent ${lib_1(props.hide)}`, props)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes__default["default"].node.isRequired
};
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2(formGroupClassName, props)
  }, props.children);
};
IcseFormGroup.defaultProps = {
  noMarginBottom: false
};
IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node.isRequired,
  className: PropTypes__default["default"].string
};
const IcseSubForm = props => {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props),
    id: props.id
  }, props.children);
};
IcseSubForm.defaultProps = {
  formInSubForm: false
};
IcseSubForm.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  formInSubForm: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired
};

<<<<<<< HEAD
var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> 8db187e (form and documentation)
styleInject(css_248z$5);
>>>>>>> e90fadd (updates)
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$1);
>>>>>>> 67351ff (Dropdowns components)

<<<<<<< HEAD
var css_248z$4 = ".leftTextAlign {\n  text-align: left;\n}\n";
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
const IcseToolTip = props => {
  let link = /*#__PURE__*/React__default["default"].createElement(react.Link, {
    onClick: () => window.open(props.link, "_blank")
  }, "this link");
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(react.Toggletip, {
    align: props.align
  }, /*#__PURE__*/React__default["default"].createElement(react.ToggletipButton, null, /*#__PURE__*/React__default["default"].createElement(iconsReact.Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React__default["default"].createElement(react.ToggletipContent, null, /*#__PURE__*/React__default["default"].createElement("p", null, props.content, props.link && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, " Visit ", link, " for more information. ")))));
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top"
};
IcseToolTip.propTypes = {
  content: PropTypes__default["default"].string.isRequired,
  link: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string.isRequired
};
const BuildToolTip = props => {
  return /*#__PURE__*/React__default["default"].createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: props.tooltip?.link,
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align
  });
};
BuildToolTip.defaultProps = {
  tooltip: {
    content: ""
  },
  isModal: false,
  align: "top",
  alignModal: "bottom"
};
BuildToolTip.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  align: PropTypes__default["default"].string.isRequired,
  alignModal: PropTypes__default["default"].string.isRequired
};
const ToolTipWrapper = props => {
  let allProps = {
    ...props
  };
  let tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined) {
    throw new Error("ToolTipWrapper expects `props.labelText` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
  allProps.className = lib_2("tooltip", {
    ...props
  });
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cds--form-item"
  }, props.noLabelText ?
  /*#__PURE__*/
  // No label- this is usually a title
  React__default["default"].createElement("div", {
    className: "labelRow"
  }, RenderForm(props.innerForm, allProps), tooltip) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React__default["default"].cloneElement(props.children, {
    // adjust props
    labelText: " ",
    // set labelText to empty
    className: props.children.props.className + " tooltip" // add tooltip class back
  }) : RenderForm(props.innerForm, allProps)));
};
ToolTipWrapper.defaultProps = {
  tooltip: {
    content: ""
  },
  noLabelText: false
};
ToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string
  }).isRequired,
  isModal: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].string.isRequired,
  labelText: PropTypes__default["default"].string,
  noLabelText: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func])
};
const DynamicToolTipWrapper = props => {
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error("DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither.");
  }
  return props.tooltip ? /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string,
    link: PropTypes__default["default"].string
  }),
  isModal: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].func])
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
>>>>>>> 8db187e (form and documentation)
styleInject(css_248z$4);
=======
var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
=======
var css_248z$6 =
  ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
>>>>>>> 94a1f9f (added tests and changed naming and examples)
styleInject(css_248z$6);

var css_248z$5 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$5);
>>>>>>> 04bfb65 (added button examples)

const IcseToggle = props => {
  let toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, _extends({
    innerForm: () => {
      return /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
        className: lib_2("leftTextAlign fieldWidth", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
        ,

        onToggle: event => {
          props.onToggle(toggleName, event);
        },
        defaultToggled: props.defaultToggled,
        disabled: props.disabled
      });
    }
  }, props));
};
IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false
};
IcseToggle.propTypes = {
  useOnOff: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  labelText: PropTypes__default["default"].string.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  toggleFieldName: PropTypes__default["default"].string,
  // if field is name other than label text snake case
  defaultToggled: PropTypes__default["default"].bool.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
=======
const IcseSelect = props => {
  let invalid =
=======
var IcseSelect = function IcseSelect(props) {
  var invalid =
>>>>>>> b3a36f0 (changes pt. 1)
=======
const IcseSelect = props => {
  let invalid =
>>>>>>> 69bcf66 (changes pt. 2)
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && lazyZ.isNullOrEmptyString(props.value) ? true : props.invalid;
  let groups = props.groups.length === 0 ? [] // if no groups, empty array
  : lib_3(
  // otherwise try and prepend empty string if null
  props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, _extends({
    innerForm: () => {
      return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
        hoverText: props.value || ""
        // inherit classnames from tooltip
        ,
        className: props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
      }, /*#__PURE__*/React__default["default"].createElement(react.Select, {
        id: lazyZ.kebabCase(props.formName + " " + props.name),
        name: props.name,
        labelText: props.tooltip ? null : props.labelText,
        value: props.value || undefined,
        className: lib_2("fieldWidth leftTextAlign", props),
        disabled: props.disabled,
        invalid: invalid,
        invalidText: props.invalidText,
        readOnly: props.readOnly,
        onChange: props.handleInputChange
      }, groups.map(value => /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
        key: `${props.id}-${value}`,
        text: value,
        value: value
      }))));
    }
  }, props));
};
IcseSelect.defaultProps = {
  value: "",
  disabled: false,
  disableInvalid: false,
  invalid: false,
  invalidText: "Invalid Selection",
  readOnly: false,
  groups: [],
  debug: false
};
IcseSelect.propTypes = {
  value: PropTypes__default["default"].any,
  // must accept null
  formName: PropTypes__default["default"].string.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool.isRequired,
  disableInvalid: PropTypes__default["default"].bool.isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
  invalidText: PropTypes__default["default"].string.isRequired,
  readOnly: PropTypes__default["default"].bool.isRequired,
  groups: PropTypes__default["default"].array.isRequired,
  debug: PropTypes__default["default"].bool.isRequired,
  handleInputChange: PropTypes__default["default"].func.isRequired,
  labelText: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
  name: PropTypes__default["default"].string.isRequired,
>>>>>>> 67351ff (Dropdowns components)
=======
>>>>>>> b238572 (Dropdowns Documentation)
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
<<<<<<< HEAD
  }),
  onToggle: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};
=======
  })
};
class FetchSelect extends React__default["default"].Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.dataToGroups = this.dataToGroups.bind(this);
  }
  componentDidMount() {
    this._isMounted = true;
    if (lazyZ.isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(res => res.json()).then(data => {
      if (this.props.onReturnFunction) {
        this.props.onReturnFunction(data);
      }
      if (this._isMounted) this.setState({
        data: data
      });
    }).catch(err => {
      console.error(err);
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  dataToGroups() {
    if (this.props.filter) {
      return this.state.data.filter(this.props.filter);
    } else {
      return this.state.data;
    }
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      labelText: this.props.labelText,
      handleInputChange: this.props.handleInputChange,
      name: this.props.name,
      className: this.props.className,
      formName: this.props.formName,
      groups: this.dataToGroups(),
      value: this.props.value || "null"
    });
  }
}
FetchSelect.propTypes = {
  labelText: PropTypes__default["default"].string.isRequired,
  handleInputChange: PropTypes__default["default"].func.isRequired,
  filterArr: PropTypes__default["default"].array,
  className: PropTypes__default["default"].string,
  // can be null or undefined
  value: PropTypes__default["default"].string,
  // can be null or undefined
  groups: PropTypes__default["default"].array,
  apiEndpoint: PropTypes__default["default"].string.isRequired,
  onReturnFunction: PropTypes__default["default"].func,
  filter: PropTypes__default["default"].func,
  name: PropTypes__default["default"].string.isRequired,
  formName: PropTypes__default["default"].string.isRequired
};
const IcseNumberSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    formName: props.formName,
    groups: lazyZ.buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
    handleInputChange: event => {
      // set name target value and parse int
      let sendEvent = {
        target: {
          name: event.target.name,
          value: parseInt(event.target.value)
        }
      };
      props.handleInputChange(sendEvent);
    },
    invalid: props.invalid,
    invalidText: props.invalidText,
    tooltip: props.tooltip,
    labelText: props.labelText,
    isModal: props.isModal
  });
};
IcseNumberSelect.defaultProps = {
  min: 1,
  max: 10,
  invalid: false,
  isModal: false
};
IcseNumberSelect.propTypes = {
  formName: PropTypes__default["default"].string.isRequired,
  min: PropTypes__default["default"].number.isRequired,
  max: PropTypes__default["default"].number.isRequired,
  value: PropTypes__default["default"].number,
  // can be null
  name: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  invalidText: PropTypes__default["default"].string,
  invalid: PropTypes__default["default"].bool.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string
  }),
  labelText: PropTypes__default["default"].string.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};
const EntitlementSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    name: props.name,
    labelText: "Entitlement",
    groups: ["null", "cloud_pak"],
    value: props.value || "null",
    handleInputChange: props.handleInputChange,
    className: "fieldWidthSmaller",
    formName: props.formName
  });
};
EntitlementSelect.propTypes = {
  value: PropTypes__default["default"].string,
  // can be null
  handleInputChange: PropTypes__default["default"].func.isRequired,
  formName: PropTypes__default["default"].string.isRequired,
  name: PropTypes__default["default"].string.isRequired
};

/**
 * Under Construction Page
 */
const UnderConstruction = () => {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};

var css_248z = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z);

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

const EmptyResourceTile = props => {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React__default["default"].createElement(react.Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Click", /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  showIfEmpty: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].bool]).isRequired
};
>>>>>>> 67351ff (Dropdowns components)

/**
 * Icse Text Input
 * @param {*} props props
 * @param {string} props.componentName name of the component being edited
 * @param {string} props.placeholder placeholder text for field
 * @param {string} props.field field (ex. name)
 * @param {string=} props.value actual value
 * @param {Function} props.onChange onchange function
 * @param {string} props.helperText helper text
 * @param {string} props.className classnames to add
 * @param {boolean=} props.readOnly read only
 * @param {string=} props.labelText override label text
 * @returns <IcseTextInput/> component
 */
const IcseTextInput = props => {
  let fieldName = lazyZ.titleCase(props.field);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign", props),
    labelText: props.labelText ? props.labelText : lazyZ.titleCase(props.field),
    placeholder: props.placeholder || lib_3(props.componentName, fieldName),
    name: props.field,
    value: props.value || "",
    invalid: lazyZ.isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
    onChange: props.onChange,
    helperText: props.helperText,
    invalidText: props.invalidText ? props.invalidText : `Invalid ${props.field} value.`,
    maxLength: props.maxLength,
    disabled: props.disabled,
    readOnly: props.readOnly
  }));
};
IcseTextInput.defaultProps = {
  maxLength: null,
  disabled: false,
  readOnly: false,
  hideHelperText: false
};
IcseTextInput.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  componentName: PropTypes__default["default"].string,
  placeholder: PropTypes__default["default"].string,
  field: PropTypes__default["default"].string.isRequired,
  value: PropTypes__default["default"].string,
  onChange: PropTypes__default["default"].func.isRequired,
  helperText: PropTypes__default["default"].string,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  className: PropTypes__default["default"].string,
  readOnly: PropTypes__default["default"].bool.isRequired,
  labelText: PropTypes__default["default"].string.isRequired,
  maxLength: PropTypes__default["default"].number,
  invalidCallback: PropTypes__default["default"].func,
  id: PropTypes__default["default"].string.isRequired,
  invalidText: PropTypes__default["default"].string
};

/**
 * Icse Name Field
 * @param {*} props
 * @param {string} props.id
 * @param {string=} props.className
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} props.component
 * @param {boolean=} props.hideHelperText
 * @param {func} props.helperTextCallback
 * @param {string} props.invalidText
 * @param {func} props.invalidCallback
 * @returns <IcseNameInput />
 */
const IcseNameInput = props => {
  let helperText = "";
  // if helper text is not hidden
  if (!props.hideHelperText && !props.useData) {
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/React__default["default"].createElement(IcseTextInput, _extends({}, props, {
    className: lib_2("fieldWidth leftTextAlign ", props),
    field: "name",
    labelText: "Name",
    helperText: helperText
  }));
};
IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: ""
};
IcseNameInput.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func,
  componentName: PropTypes__default["default"].string.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  hideHelperText: PropTypes__default["default"].bool.isRequired,
  useData: PropTypes__default["default"].bool.isRequired,
  helperTextCallback: PropTypes__default["default"].func,
  invalidText: PropTypes__default["default"].string.isRequired,
  invalidCallback: PropTypes__default["default"].func
};

var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);

class AppIdKeyForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState({
      key_name: event.target.value
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "app-id-key-name",
      value: this.state.key_name,
      onChange: this.handleInputChange,
      field: "appid_key",
      labelText: "App ID Key",
      componentName: "appid",
      className: "fieldWidthSmaller",
      invalid: this.props.invalidCallback(this.props, this.state),
      invalidText: this.props.invalidTextCallback(this.props, this.state)
    }));
  }
}
AppIdKeyForm.defaultProps = {
  data: {
    key_name: ""
  }
};
AppIdKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    key_name: PropTypes__default["default"].string.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);

/**
 * Icse multiselect template
 */
const IcseMultiSelect = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    react.FilterableMultiSelect,
    {
      id: props.id,
      className: lib_2("fieldWidth leftTextAlign cds--select", props),
      titleText: props.titleText,
      itemToString: (item) => (item ? item : ""),
      invalid: props.invalid,
      invalidText: props.invalidText,
      initialSelectedItems: props.initialSelectedItems,
      onChange: props.onChange,
      items: props.items,
      useTitleInItem: props.useTitleInItem,
      label: props.label,
      disabled: props.disabled,
    }
  );
};
IcseMultiSelect.defaultProps = {
  disabled: false,
  useTitleInItem: false,
  invalid: false,
  invalidText: "Invalid value",
};
IcseMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  titleText: PropTypes__default["default"].string.isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
  invalidText: PropTypes__default["default"].string.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  items: PropTypes__default["default"].arrayOf(
    PropTypes__default["default"].string
  ).isRequired,
  useTitleInItem: PropTypes__default["default"].bool.isRequired,
  label: PropTypes__default["default"].string,
  disabled: PropTypes__default["default"].bool.isRequired,
};

/**
 * ssh key multiselect
 */
const SshKeyMultiSelect = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    IcseMultiSelect,
    {
      id: props.id + "-ssh-key-multiselect",
      useTitleInItem: true,
      label: "SSH Keys",
      titleText: "SSH Keys",
      invalidText: "At least one SSH Key is required",
      invalid: props.initialSelectedItems.length === 0,
      items: props.sshKeys,
      initialSelectedItems: props.initialSelectedItems || [],
      onChange: (event) => {
        props.onChange(event.selectedItems);
      },
      className: "fieldWidthSmaller cds--form-item",
    }
  );
};
SshKeyMultiSelect.defaultProps = {
  initialSelectedItems: [],
};
SshKeyMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  sshKeys: PropTypes__default["default"].arrayOf(
    PropTypes__default["default"].string
  ).isRequired,
  initialSelectedItems: PropTypes__default["default"].arrayOf(
    PropTypes__default["default"].string
  ).isRequired,
};

/**
 * sg multiselect
 */
const SecurityGroupMultiSelect = (props) => {
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error(
      "SecurityGroupMultiselect requires a securityGroups object. Got " +
        lazyZ.prettyJSON(props.securityGroups)
    );
  }
  return /*#__PURE__*/ React__default["default"].createElement(
    react.MultiSelect,
    {
      id: props.id + "-security-group-multiselect",
      label: props.label,
      titleText: "Security Groups",
      className: "fieldWidthSmaller cds--form-item",
      initialSelectedItems: props.initialSelectedItems,
      vpc_name: props.vpc_name,
      invalid: props.invalid,
      invalidText: "Invalid Selection",
      onChange: (event) => {
        props.onChange(event.selectedItems);
      },
      disabled: props.disabled,
      items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
      itemToString: (item) => (item ? item : ""),
    }
  );
};
SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
  label: "Select Security Groups",
  invalid: false,
};
SecurityGroupMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  vpc_name: PropTypes__default["default"].string,
  // not required, null value should be valid
  onChange: PropTypes__default["default"].func.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  securityGroups: PropTypes__default["default"].object.isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
};

/**
 * vpc subnet multiselect
 */
const SubnetMultiSelect = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    IcseMultiSelect,
    {
      id: props.id + "-subnet-multiselect",
      className: props.className,
      titleText: "Subnets",
      name: props.name,
      label: props.label,
      items: lazyZ.isNullOrEmptyString(props.vpc_name)
        ? []
        : props.subnets[props.vpc_name],
      initialSelectedItems: props.initialSelectedItems,
      invalidText: lazyZ.isNullOrEmptyString(props.vpc_name)
        ? "Select a VPC."
        : "Select at least one subnet.",
      invalid: props.initialSelectedItems.length === 0,
      disabled: props.disabled,
      onChange: (event) => props.onChange(event.selectedItems),
    }
  );
};
SubnetMultiSelect.defaultProps = {
  name: "subnet_names",
  label: "Subnets",
  disabled: false,
  vpc_name: "",
  initialSelectedItems: [],
};
SubnetMultiSelect.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  vpc_name: PropTypes__default["default"].string,
  // not required, `null` needs to be passed here
  subnets: PropTypes__default["default"].object.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  label: PropTypes__default["default"].string.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
};

/**
 * VPC List MultiSelect
 */
const VpcListMultiSelect = (props) => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error(
      "VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " +
        lazyZ.prettyJSON(props.vpcList)
    );
  }
  return /*#__PURE__*/ React__default["default"].createElement(
    IcseMultiSelect,
    {
      invalidText: "At least one VPC must be selected.",
      invalid: props.invalid,
      id: props.id + "-vpc-select",
      titleText: props.titleText,
      onChange: (event) => props.onChange(event.selectedItems),
      initialSelectedItems: props.initialSelectedItems,
      className: props.className,
      items: props.vpcList,
    }
  );
};
VpcListMultiSelect.defaultProps = {
  invalid: false,
  titleText: "VPCs",
  initialSelectedItems: [],
};
VpcListMultiSelect.propTypes = {
  invalid: PropTypes__default["default"].bool.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  initialSelectedItems: PropTypes__default["default"].array.isRequired,
  vpcList: PropTypes__default["default"].arrayOf(
    PropTypes__default["default"].string
  ).isRequired,
};

/**
 * Under Construction Page
 */
<<<<<<< HEAD
var UnderConstruction = function UnderConstruction() {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    null,
    /*#__PURE__*/ React__default["default"].createElement(
      iconsReact.WarningAlt,
      {
        size: "128",
      }
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      "h4",
      null,
      "Page Under Construction"
    )
  );
};

var css_248z$4 =
  ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$4);
=======
const UnderConstruction = () => {
=======
/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z);
>>>>>>> 8db187e (form and documentation)

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {boolean} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns
 */

const EmptyResourceTile = (props) => {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0
    ? /*#__PURE__*/ React__default["default"].createElement(
        react.Tile,
        {
          className: "marginBottomXs tileBackground",
        },
        /*#__PURE__*/ React__default["default"].createElement(
          iconsReact.CloudAlerting,
          {
            size: "24",
            className: "iconMargin",
          }
        ),
        "No ",
        props.name,
        ".",
        " ",
        props.instructions ||
          /*#__PURE__*/ React__default["default"].createElement(
            React__default["default"].Fragment,
            null,
            "Click",
            /*#__PURE__*/ React__default["default"].createElement(
              iconsReact.Add,
              {
                size: "24",
                className: "inlineIconMargin",
              }
            ),
            "button to add one."
          )
      )
    : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list",
};
EmptyResourceTile.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  showIfEmpty: PropTypes__default["default"].oneOfType([
    PropTypes__default["default"].array,
    PropTypes__default["default"].bool,
  ]).isRequired,
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> faf8c38 (fixed imports)
var css_248z$1 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$1);
=======
var css_248z$2 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$2);
>>>>>>> e90fadd (updates)
=======
var css_248z$3 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
=======
var css_248z$3 =
  ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
>>>>>>> 94a1f9f (added tests and changed naming and examples)
styleInject(css_248z$3);
>>>>>>> 04bfb65 (added button examples)

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
  return /*#__PURE__*/ React__default["default"].createElement(
    form,
    _objectSpread2({}, formProps)
  );
}

/**
 * Dynamically render inner contents
 * @param {*} props
 * @param {boolean=} props.hide hide element
 * @param {boolean=} props.show component to show when hide is false
 * @returns empty string when hidden, component when visible
 */
function DynamicRender(props) {
  return props.hide === true ? "" : props.show;
}

/**
 * wrapper for title groups
 */
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: lib_2(
        "displayFlex alignItemsCenter widthOneHundredPercent ".concat(
          lib_1(props.hide)
        ),
        props
      ),
    },
    props.children
  );
};
TitleGroup.defaultProps = {
  hide: true,
};
TitleGroup.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
};
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: lib_2(formGroupClassName, props),
    },
    props.children
  );
};
IcseFormGroup.defaultProps = {
  noMarginBottom: false,
};
IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node.isRequired,
  className: PropTypes__default["default"].string,
};
var IcseSubForm = function IcseSubForm(props) {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: lib_2(
        props.formInSubForm
          ? "formInSubForm positionRelative"
          : "subForm marginBottomSmall",
        props
      ),
      id: props.id,
    },
    props.children
  );
};
IcseSubForm.defaultProps = {
  formInSubForm: false,
};
IcseSubForm.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  formInSubForm: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired,
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".leftTextAlign {\n    text-align: left;\n}";
styleInject(css_248z);

/**
=======
var css_248z = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z);
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$1);
>>>>>>> e90fadd (updates)
=======
var css_248z$2 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
=======
var css_248z$2 =
  ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> 94a1f9f (added tests and changed naming and examples)
styleInject(css_248z$2);
>>>>>>> 04bfb65 (added button examples)

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
const IcseToolTip = (props) => {
  let link = /*#__PURE__*/ React__default["default"].createElement(
    react.Link,
    {
      onClick: () => window.open(props.link, "_blank"),
    },
    "this link"
  );
  return /*#__PURE__*/ React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    /*#__PURE__*/ React__default["default"].createElement(
      react.Toggletip,
      {
        align: props.align,
      },
      /*#__PURE__*/ React__default["default"].createElement(
        react.ToggletipButton,
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          iconsReact.Information,
          {
            className: "tooltipMarginLeft",
          }
        )
      ),
      /*#__PURE__*/ React__default["default"].createElement(
        react.ToggletipContent,
        null,
        /*#__PURE__*/ React__default["default"].createElement(
          "p",
          null,
          props.content,
          props.link &&
            /*#__PURE__*/ React__default["default"].createElement(
              React__default["default"].Fragment,
              null,
              " Visit ",
              link,
              " for more information. "
            )
        )
      )
    )
  );
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top",
};
IcseToolTip.propTypes = {
  content: PropTypes__default["default"].string.isRequired,
  link: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string.isRequired,
};
const BuildToolTip = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: props.tooltip?.link,
<<<<<<< HEAD
<<<<<<< HEAD
    align: props.isModal ? props.alignModal : props.align
=======
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align,
>>>>>>> 94a1f9f (added tests and changed naming and examples)
  });
};
BuildToolTip.defaultProps = {
  tooltip: {
    content: "",
  },
  isModal: false,
  align: "top",
  alignModal: "bottom",
};
BuildToolTip.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  align: PropTypes__default["default"].string.isRequired,
  alignModal: PropTypes__default["default"].string.isRequired,
};
const ToolTipWrapper = (props) => {
  let allProps = {
    ...props,
  };
  let tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined) {
    throw new Error(
      "ToolTipWrapper expects `props.labelText` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop."
    );
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;
  else allProps.labelText = " ";
  allProps.className = lib_2("tooltip", {
    ...props,
  });
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "cds--form-item",
    },
    props.noLabelText
      ? /*#__PURE__*/
        // No label- this is usually a title
        React__default["default"].createElement(
          "div",
          {
            className: "labelRow",
          },
          RenderForm(props.innerForm, allProps),
          tooltip
        )
      : /*#__PURE__*/ React__default["default"].createElement(
          React__default["default"].Fragment,
          null,
          /*#__PURE__*/ React__default["default"].createElement(
            "div",
            {
              className: "cds--label labelRow",
            },
            /*#__PURE__*/ React__default["default"].createElement(
              "label",
              {
                htmlFor: props.id,
              },
              props.labelText
            ),
            tooltip
          ),
          props.children
            ? /*#__PURE__*/ React__default["default"].cloneElement(
                props.children,
                {
                  // adjust props
                  labelText: " ",
                  // set labelText to empty
                  className: props.children.props.className + " tooltip", // add tooltip class back
                }
              )
            : RenderForm(props.innerForm, allProps)
        )
  );
};
ToolTipWrapper.defaultProps = {
  tooltip: {
    content: "",
  },
  noLabelText: false,
};
ToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
  }).isRequired,
  isModal: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].string.isRequired,
  labelText: PropTypes__default["default"].string,
  noLabelText: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([
    PropTypes__default["default"].object,
    PropTypes__default["default"].func,
  ]),
};
const DynamicToolTipWrapper = (props) => {
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error(
      "DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither."
    );
  }
  return props.tooltip
    ? /*#__PURE__*/ React__default["default"].createElement(
        ToolTipWrapper,
        props
      )
    : props.children
    ? props.children
    : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string,
    link: PropTypes__default["default"].string,
  }),
  isModal: PropTypes__default["default"].bool,
  children: PropTypes__default["default"].node,
  innerForm: PropTypes__default["default"].oneOfType([
    PropTypes__default["default"].object,
    PropTypes__default["default"].func,
  ]),
};

=======
>>>>>>> 8db187e (form and documentation)
/**
>>>>>>> faf8c38 (fixed imports)
 * Icse Modal Wrapper
 * @param {*} props
 * @param {string} props.name resource name
 * @param {string} props.heading modal heading
 * @param {boolean} props.open show modal
 * @param {boolean=} props.danger danger, defaults to true
 * @param {boolean=} props.alert alert, defaults to true
 * @param {string=} props.primaryButtonText defaults to `Dismiss Changes`
 * @param {string=} props.secondaryButtonText defaults to `Cancel`
 * @param {Function} props.onRequestSubmit
 * @param {Function} props.onRequestClose
 * @param {boolean=} props.useAddButton use + button instead of edit
 */
const IcseModal = (props) => {
  /*#__PURE__*/ React__default["default"].createElement(
    "strong",
    null,
    props.name
  );
  return /*#__PURE__*/ React__default["default"].createElement(
    react.Modal,
    {
      id: props.id,
      className: "leftTextAlign",
      modalHeading: props.heading,
      open: props.open,
      alert: props.alert,
      danger: props.danger,
      shouldSubmitOnEnter: true,
      primaryButtonText: props.primaryButtonText,
      secondaryButtonText: props.secondaryButtonText,
      onRequestSubmit: props.onRequestSubmit,
      onRequestClose: props.onRequestClose,
    },
    props.children
  );
};
IcseModal.defaultProps = {
  primaryButtonText: "Primary Button",
  secondaryButtonText: "Cancel",
  primaryButtonDisabled: false,
  danger: false,
  alert: true,
  open: false,
  heading: "Default Heading",
  id: "default-icse-modal",
};
IcseModal.propTypes = {
  primaryButtonText: PropTypes__default["default"].string.isRequired,
  secondaryButtonText: PropTypes__default["default"].string.isRequired,
  primaryButtonDisabled: PropTypes__default["default"].bool,
  danger: PropTypes__default["default"].bool,
  alert: PropTypes__default["default"].bool,
  heading: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string,
  onRequestSubmit: PropTypes__default["default"].func.isRequired,
  onRequestClose: PropTypes__default["default"].func.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  open: PropTypes__default["default"].bool.isRequired,
  children: PropTypes__default["default"].node.isRequired,
};

/**
 * Delete modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */
const DeleteModal = (props) => {
  let name = /*#__PURE__*/ React__default["default"].createElement(
    "strong",
    null,
    props.name
  );
  return /*#__PURE__*/ React__default["default"].createElement(
    IcseModal,
    {
      id: props.name + "-delete",
      name: props.name,
      heading: props.name,
      open: props.modalOpen,
      onRequestClose: props.onModalClose,
      onRequestSubmit: props.onModalSubmit,
      primaryButtonText: "Delete Resource",
      danger: true,
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "span",
      null,
      "You are about to delete ",
      name,
      ". This cannot be undone."
    )
  );
};
DeleteModal.defaultProps = {
  modalOpen: false,
};
DeleteModal.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  modalOpen: PropTypes__default["default"].bool.isRequired,
  onModalClose: PropTypes__default["default"].func.isRequired,
  onModalSubmit: PropTypes__default["default"].func.isRequired,
};

/**
 * unsaved changes modal modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */

const UnsavedChangesModal = (props) => {
  let name = props.name;
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "unsaved-changes-modal-area",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      IcseModal,
      {
        id: props.name + "-unsaved-changes",
        open: props.modalOpen,
        name: props.name,
        onRequestClose: props.onModalClose,
        onRequestSubmit: props.onModalSubmit,
        heading: props.useDefaultUnsavedMessage
          ? "Missing Required Values"
          : "Unsaved Changes",
        danger: true,
        primaryButtonText: "Dismiss Changes",
      },
      props.useDefaultUnsavedMessage
        ? /*#__PURE__*/ React__default["default"].createElement(
            "span",
            null,
            "Resource ",
            name,
            " is missing required values.",
            " ",
            /*#__PURE__*/ React__default["default"].createElement(
              "strong",
              null,
              "Without these values, your configuration is invalid."
            ),
            " ",
            "Are you sure you want to dismiss these changes?"
          )
        : /*#__PURE__*/ React__default["default"].createElement(
            "span",
            null,
            "Resource ",
            name,
            " has unsaved changes. Are you sure you want to dismiss these changes?"
          )
    )
  );
};
UnsavedChangesModal.defaultProps = {
  modalOpen: false,
  useDefaultUnsavedMessage: true,
};
UnsavedChangesModal.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  modalOpen: PropTypes__default["default"].bool.isRequired,
  onModalClose: PropTypes__default["default"].func.isRequired,
  onModalSubmit: PropTypes__default["default"].func.isRequired,
  useDefaultUnsavedMessage: PropTypes__default["default"].bool,
};

<<<<<<< HEAD
var css_248z$1 =
  ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$1);

const IcseToggle = (props) => {
  let toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
  return /*#__PURE__*/ React__default["default"].createElement(
    DynamicToolTipWrapper,
    _extends(
      {
        innerForm: () => {
          return /*#__PURE__*/ React__default["default"].createElement(
            react.Toggle,
            {
              labelA: props.useOnOff ? "Off" : "False",
              labelB: props.useOnOff ? "On" : "True",
              labelText: props.tooltip ? "" : props.labelText,
              id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
              className:
                lib_2("leftTextAlign fieldWidth", props) +
                (props.tooltip ? " cds--form-item tooltip" : " cds--form-item"), // inherit tooltip spacing
              onToggle: (event) => {
                props.onToggle(toggleName, event);
              },
              defaultToggled: props.defaultToggled,
              disabled: props.disabled,
            }
          );
        },
      },
      props
    )
  );
};
IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false,
};
IcseToggle.propTypes = {
  useOnOff: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  labelText: PropTypes__default["default"].string.isRequired,
  id: PropTypes__default["default"].string.isRequired,
  toggleFieldName: PropTypes__default["default"].string,
  // if field is name other than label text snake case
  defaultToggled: PropTypes__default["default"].bool.isRequired,
  disabled: PropTypes__default["default"].bool.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
  }),
  onToggle: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
};

/**
 * Icse Text Input
 * @param {*} props props
 * @param {string} props.componentName name of the component being edited
 * @param {string} props.placeholder placeholder text for field
 * @param {string} props.field field (ex. name)
 * @param {string=} props.value actual value
 * @param {Function} props.onChange onchange function
 * @param {string} props.helperText helper text
 * @param {string} props.className classnames to add
 * @param {boolean=} props.readOnly read only
 * @param {string=} props.labelText override label text
 * @returns <IcseTextInput/> component
 */
const IcseTextInput = (props) => {
  let fieldName = lazyZ.titleCase(props.field);
  return /*#__PURE__*/ React__default["default"].createElement(
    DynamicToolTipWrapper,
    props,
    /*#__PURE__*/ React__default["default"].createElement(react.TextInput, {
      id: props.id,
      className: lib_2("fieldWidth leftTextAlign", props),
      labelText: props.labelText
        ? props.labelText
        : lazyZ.titleCase(props.field),
      placeholder: props.placeholder || lib_3(props.componentName, fieldName),
      name: props.field,
      value: props.value || "",
      invalid: lazyZ.isBoolean(props.invalid)
        ? props.invalid
        : props.invalidCallback(),
      onChange: props.onChange,
      helperText: props.helperText,
      invalidText: props.invalidText
        ? props.invalidText
        : `Invalid ${props.field} value.`,
      maxLength: props.maxLength,
      disabled: props.disabled,
      readOnly: props.readOnly,
    })
  );
};
IcseTextInput.defaultProps = {
  maxLength: null,
  disabled: false,
  readOnly: false,
  hideHelperText: false,
};
IcseTextInput.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  componentName: PropTypes__default["default"].string,
  placeholder: PropTypes__default["default"].string,
  field: PropTypes__default["default"].string.isRequired,
  value: PropTypes__default["default"].string,
  onChange: PropTypes__default["default"].func.isRequired,
  helperText: PropTypes__default["default"].string,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
  }),
  className: PropTypes__default["default"].string,
  readOnly: PropTypes__default["default"].bool.isRequired,
  labelText: PropTypes__default["default"].string.isRequired,
  maxLength: PropTypes__default["default"].number,
  invalidCallback: PropTypes__default["default"].func,
  id: PropTypes__default["default"].string.isRequired,
  invalidText: PropTypes__default["default"].string,
};

/**
 * Icse Name Field
 * @param {*} props
 * @param {string} props.id
 * @param {string=} props.className
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} props.component
 * @param {boolean=} props.hideHelperText
 * @param {func} props.helperTextCallback
 * @param {string} props.invalidText
 * @param {func} props.invalidCallback
 * @returns <IcseNameInput />
 */
const IcseNameInput = (props) => {
  let helperText = "";
  // if helper text is not hidden
  if (!props.hideHelperText && !props.useData) {
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/ React__default["default"].createElement(
    IcseTextInput,
    _extends({}, props, {
      className: lib_2("fieldWidth leftTextAlign ", props),
      field: "name",
      labelText: "Name",
      helperText: helperText,
    })
  );
};
IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: "",
};
IcseNameInput.propTypes = {
  id: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  value: PropTypes__default["default"].string.isRequired,
  onChange: PropTypes__default["default"].func,
  componentName: PropTypes__default["default"].string.isRequired,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
  }),
  hideHelperText: PropTypes__default["default"].bool.isRequired,
  useData: PropTypes__default["default"].bool.isRequired,
  helperTextCallback: PropTypes__default["default"].func,
  invalidText: PropTypes__default["default"].string.isRequired,
  invalidCallback: PropTypes__default["default"].func,
};

var css_248z =
  ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  top: 20px;\n  z-index: 9001; /* navbar is 9000 */\n  font-size: 80%;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n";
=======
var css_248z = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  top: 20px;\n  z-index: 9001; /* navbar is 9000 */\n  font-size: 80%;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> b5b1ac6 (fixed build)
styleInject(css_248z);

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
<<<<<<< HEAD
const SaveIcon = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    iconsReact.Save,
    {
      className: props.disabled ? "" : "tertiaryButtonColors",
    }
  );
=======
var SaveIcon = function SaveIcon(props) {
  return /*#__PURE__*/React__default["default"].createElement(iconsReact.Save, {
    className: props.disabled ? "" : "tertiaryButtonColors"
  });
>>>>>>> b5b1ac6 (fixed build)
};

/**
 * save add button
 * @param {*} props
 * @param {string} props.hoverText
 * @param {string} props.type can be `add` defaults to `save`
 * @param {Function} props.onClick onclick function
 * @param {string=} props.className
 * @param {boolean} props.disabled
 * @returns Save add button
 */
<<<<<<< HEAD
const SaveAddButton = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    PopoverWrapper,
    {
      hoverText:
        props.type === "add" && props.hoverText === "Save Changes"
          ? "Add Resource"
          : props.hoverText,
      className:
        (props.disabled ? "inlineBlock cursorNotAllowed" : "") +
        (props.inline
          ? " alignItemsCenter marginTopLarge inLineFormButton"
          : ""),
    },
    /*#__PURE__*/ React__default["default"].createElement(
      react.Button,
      {
        kind: props.type === "add" ? "tertiary" : "primary",
        onClick: props.onClick,
        className:
          lib_4(props) +
          (props.disabled === true
            ? " pointerEventsNone "
            : " " + props.className),
        disabled: props.disabled || false,
        size: "sm",
      },
      props.type === "add"
        ? /*#__PURE__*/ React__default["default"].createElement(
            iconsReact.Add,
            null
          )
        : /*#__PURE__*/ React__default["default"].createElement(SaveIcon, {
            saveIsDisabled: props.disabled,
          })
    )
  );
=======
var SaveAddButton = function SaveAddButton(props) {
  return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : "")
  }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "add" ? /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, null) : /*#__PURE__*/React__default["default"].createElement(SaveIcon, {
    saveIsDisabled: props.disabled
  })));
>>>>>>> b5b1ac6 (fixed build)
};
SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
<<<<<<< HEAD
  disabled: false,
=======
  disabled: false
>>>>>>> b5b1ac6 (fixed build)
};
SaveAddButton.propTypes = {
  hoverText: PropTypes__default["default"].string.isRequired,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool.isRequired,
  type: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
  inline: PropTypes__default["default"].bool.isRequired,
=======
  inline: PropTypes__default["default"].bool.isRequired
>>>>>>> b5b1ac6 (fixed build)
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @param {string=} props.hoverText text for popover hover
 * @param {string} props.type can be `edit` or `add`, defaults to add
 * @param {boolean} props.disabled
<<<<<<< HEAD
 * @param {boolean} props.open toggle is open, defaults to false
 * @returns edit close icon
 */
const EditCloseIcon = (props) => {
  let hoverText = props.hoverText
    ? props.hoverText
    : props.open
    ? "Close"
    : props.type === "add"
    ? "Configure Resource"
    : "Edit Resource";
  let icon = props.open
    ? /*#__PURE__*/ React__default["default"].createElement(
        iconsReact.CloseFilled,
        null
      )
    : props.type === "add"
    ? /*#__PURE__*/ React__default["default"].createElement(
        iconsReact.Add,
        null
      )
    : /*#__PURE__*/ React__default["default"].createElement(
        iconsReact.Edit,
        null
      );
  return /*#__PURE__*/ React__default["default"].createElement(
    PopoverWrapper,
    {
      hoverText: hoverText,
    },
    /*#__PURE__*/ React__default["default"].createElement(
      "i",
      {
        onClick: props.onClick,
        className: "chevron",
      },
      icon
    )
  );
=======
 * @param {Function} props.onClick onclick function
 * @param {boolean} props.open toggle is open, defaults to false
 * @returns edit close icon
 */
var EditCloseIcon = function EditCloseIcon(props) {
  var hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Edit Resource";
  var icon = props.open ? /*#__PURE__*/React__default["default"].createElement(iconsReact.CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, null) : /*#__PURE__*/React__default["default"].createElement(iconsReact.Edit, null);
  return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: hoverText
  }, /*#__PURE__*/React__default["default"].createElement("i", {
    onClick: props.onClick,
    className: "chevron"
  }, icon));
>>>>>>> b5b1ac6 (fixed build)
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string,
<<<<<<< HEAD
  open: PropTypes__default["default"].bool,
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false,
=======
  open: PropTypes__default["default"].bool
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false
>>>>>>> b5b1ac6 (fixed build)
};

/**
 * Delete button
 * @param {*} props
 * @param {boolean} props.disabled
<<<<<<< HEAD
 * @param {boolean} props.modalOpen toggle is modal open, defaults to false
=======
>>>>>>> b5b1ac6 (fixed build)
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
<<<<<<< HEAD
const DeleteButton = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    "div",
    {
      className: "delete-area",
    },
    /*#__PURE__*/ React__default["default"].createElement(
      PopoverWrapper,
      {
        hoverText: props.disabled
          ? props.disableDeleteMessage
          : "Delete Resource",
        className: props.disabled ? "inlineBlock cursorNotAllowed" : "",
      },
      /*#__PURE__*/ React__default["default"].createElement(
        react.Button,
        {
          className:
            "cds--btn--danger--tertiary forceTertiaryButtonStyles" +
            (props.disabled ? " pointerEventsNone" : ""),
          kind: "ghost",
          size: "sm",
          onClick: props.onClick,
          disabled: props.disabled === true,
        },
        /*#__PURE__*/ React__default["default"].createElement(
          iconsReact.TrashCan,
          {
            className: props.disabled ? "" : "redFill",
          }
        )
      )
    )
  );
};
DeleteButton.defaultProps = {
  disabled: false,
  modalOpen: false,
=======
var DeleteButton = function DeleteButton(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.disabled ? props.disableDeleteMessage : "Delete Resource",
    className: props.disabled ? "inlineBlock cursorNotAllowed" : ""
  }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    className: "cds--btn--danger--tertiary forceTertiaryButtonStyles" + (props.disabled ? " pointerEventsNone" : ""),
    kind: "ghost",
    size: "sm",
    onClick: props.onClick,
    disabled: props.disabled === true
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.TrashCan, {
    className: props.disabled ? "" : "redFill"
  }))));
};
DeleteButton.defaultProps = {
  disabled: false
>>>>>>> b5b1ac6 (fixed build)
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
<<<<<<< HEAD
  name: PropTypes__default["default"].string.isRequired,
=======
  name: PropTypes__default["default"].string.isRequired
>>>>>>> b5b1ac6 (fixed build)
};

/**
 * Up/Down button
 * @param {*} props
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
<<<<<<< HEAD
 * @param {Function} props.handleCardUp
 * @param {Function} props.handleCardDown
 *
 */
const UpDownButtons = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    /*#__PURE__*/ React__default["default"].createElement(
      react.Button,
      {
        key: "rule-up-" + props.name,
        disabled: props.disableUp,
        kind: "ghost",
        size: "sm",
        id: props.name + "-up",
        onClick: props.handleCardUp,
        className: "focus forceTertiaryButtonStyles marginRightSmall",
      },
      /*#__PURE__*/ React__default["default"].createElement(
        iconsReact.ArrowUp,
        {
          key: "up-" + props.name,
        }
      )
    ),
    /*#__PURE__*/ React__default["default"].createElement(
      react.Button,
      {
        kind: "ghost",
        disabled: props.disableDown,
        key: "rule-down-" + props.name,
        size: "sm",
        id: props.name + "-down",
        onClick: props.handleCardDown,
        className: "focus forceTertiaryButtonStyles",
      },
      /*#__PURE__*/ React__default["default"].createElement(
        iconsReact.ArrowDown,
        {
          key: "down-" + props.name,
        }
      )
    )
  );
};
UpDownButtons.defaultProps = {
  disableUp: false,
  disableDown: false,
=======
 * @param {Function} props.handleUp
 * @param {Function} props.handleDown
 *
 */
var UpDownButtons = function UpDownButtons(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    key: "rule-up-" + props.name,
    disabled: props.disableUp,
    kind: "ghost",
    size: "sm",
    id: props.name + "-up",
    onClick: props.handleUp,
    className: "focus forceTertiaryButtonStyles marginRightSmall"
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.ArrowUp, {
    key: "up-" + props.name
  })), /*#__PURE__*/React__default["default"].createElement(react.Button, {
    kind: "ghost",
    disabled: props.disableDown,
    key: "rule-down-" + props.name,
    size: "sm",
    id: props.name + "-down",
    onClick: props.handleDown,
    className: "focus forceTertiaryButtonStyles"
  }, /*#__PURE__*/React__default["default"].createElement(iconsReact.ArrowDown, {
    key: "down-" + props.name
  })));
};
UpDownButtons.defaultProps = {
  disableUp: false,
  disableDown: false
>>>>>>> b5b1ac6 (fixed build)
};
UpDownButtons.propTypes = {
  disableUp: PropTypes__default["default"].bool.isRequired,
  disableDown: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
  handleCardUp: PropTypes__default["default"].func.isRequired,
  handleCardDown: PropTypes__default["default"].func.isRequired,
};

exports.DeleteButton = DeleteButton;
=======
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
exports.AppIdKeyForm = AppIdKeyForm;
>>>>>>> 8db187e (form and documentation)
=======
  handleUp: PropTypes__default["default"].func.isRequired,
  handleDown: PropTypes__default["default"].func.isRequired
};

exports.AppIdKeyForm = AppIdKeyForm;
exports.DeleteButton = DeleteButton;
>>>>>>> b5b1ac6 (fixed build)
exports.DeleteModal = DeleteModal;
exports.DynamicRender = DynamicRender;
<<<<<<< HEAD
=======
exports.DynamicToolTipWrapper = DynamicToolTipWrapper;
exports.EditCloseIcon = EditCloseIcon;
>>>>>>> 04bfb65 (added button examples)
exports.EmptyResourceTile = EmptyResourceTile;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
exports.FormModal = FormModal;
=======
=======
exports.EntitlementDropdown = EntitlementDropdown;
>>>>>>> e6437cd (dropdown examples)
=======
exports.EntitlementSelect = EntitlementSelect;
>>>>>>> b238572 (Dropdowns Documentation)
exports.FetchSelect = FetchSelect;
>>>>>>> 67351ff (Dropdowns components)
exports.IcseFormGroup = IcseFormGroup;
exports.IcseModal = IcseModal;
<<<<<<< HEAD
=======
exports.IcseMultiSelect = IcseMultiSelect;
<<<<<<< HEAD
exports.IcseNameInput = IcseNameInput;
>>>>>>> 6979d94 (icse name input, needs docs)
=======
exports.IcseNumberSelect = IcseNumberSelect;
exports.IcseSelect = IcseSelect;
>>>>>>> 67351ff (Dropdowns components)
exports.IcseSubForm = IcseSubForm;
exports.IcseTextInput = IcseTextInput;
exports.IcseToggle = IcseToggle;
exports.IcseToolTip = IcseToolTip;
exports.PopoverWrapper = PopoverWrapper;
exports.RenderForm = RenderForm;
<<<<<<< HEAD
=======
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
exports.SecurityGroupMultiSelect = SecurityGroupMultiSelect;
exports.SshKeyMultiSelect = SshKeyMultiSelect;
exports.SubnetMultiSelect = SubnetMultiSelect;
>>>>>>> 04bfb65 (added button examples)
exports.TitleGroup = TitleGroup;
exports.UnderConstruction = UnderConstruction;
exports.UnsavedChangesModal = UnsavedChangesModal;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
exports.addClassName = addClassName;
exports.toggleMarginBottom = toggleMarginBottom;
>>>>>>> 7ab206c (working on editing imports)
=======
=======
exports.UpDownButtons = UpDownButtons;
>>>>>>> 04bfb65 (added button examples)
exports.VpcListMultiSelect = VpcListMultiSelect;
<<<<<<< HEAD
>>>>>>> e90fadd (updates)
=======
exports.VpcListMultiSelect = VpcListMultiSelect;
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
exports.buildFormDefaultInputMethods = buildFormDefaultInputMethods;
exports.buildFormFunctions = buildFormFunctions;
>>>>>>> 8655315 (changes (exports, readme, example))
