<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
var lazyZ = require('lazy-z');
>>>>>>> 28f2e52 (code now)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var iconsReact = require('@carbon/icons-react');
>>>>>>> ad3a1f9 (Migrated VpnGatewayForm + Documentation (Issue702) (#31))
var React = require('react');
var PropTypes = require('prop-types');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var lazyZ = require('lazy-z');
<<<<<<< HEAD
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 28f2e52 (code now)
=======
var lazyZ = require('lazy-z');
>>>>>>> b6eab56 (example and readme)

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var iconsReact = require('@carbon/icons-react');
var React = require('react');
var PropTypes = require('prop-types');
>>>>>>> 7d02243 (fix merge)
var lazyZ = require('lazy-z');
var react = require('@carbon/react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

<<<<<<< HEAD
var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue$2 = _require2.eventTargetToNameAndValue,
  toggleStateBoolean$2 = _require2.toggleStateBoolean,
  setNameToValue$2 = _require2.setNameToValue;

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
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
}

<<<<<<< HEAD
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
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 353b3a7 ($@)

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

=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 611854f (AccesGroupPolicyForm done)
=======
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

>>>>>>> 7d02243 (fix merge)
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
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
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)

var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue$2 = _require2.eventTargetToNameAndValue,
  toggleStateBoolean$2 = _require2.toggleStateBoolean,
  setNameToValue$2 = _require2.setNameToValue;

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
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
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
=======
>>>>>>> 7d02243 (fix merge)

/**
 * Function that determines invalid state and invalid text for scc fields: scope_name, scope_description, and collector_description
 * @param {string} name field name
 * @param {string} value field value
 * @param {RegExp} regex regular expression to verify value
 * @returns {object} object containing invalid boolean and invalidText string
 */
function invalidRegex$1(name, value, regex) {
  return {
    invalid: value.match(regex) === null,
    invalidText: `Invalid ${name}. Must match regular expression: ${regex}`
  };
}
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
<<<<<<< HEAD
<<<<<<< HEAD
  checkNullorEmptyString: checkNullorEmptyString$1,
<<<<<<< HEAD
  invalidScc: invalidScc$1
=======
  checkNullorEmptyString: checkNullorEmptyString$1
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
  invalidRegex: invalidRegex$1
>>>>>>> 55b6519 (rename function and fix imports)
=======
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1
>>>>>>> 7d02243 (fix merge)
};

const {
  kebabCase
} = lazyZ__default["default"];

/**
 * format input placeholder
 * @param {string} componentName
 * @param {string} fieldName
 * @returns {string} placeholder name
 */
function formatInputPlaceholder$1(componentName, fieldName) {
  return `my-${kebabCase(componentName)}-${kebabCase(fieldName)}`;
}
var textUtils = {
  formatInputPlaceholder: formatInputPlaceholder$1
};

/**
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
  saveChangeButtonClass: saveChangeButtonClass$1
};

/**
 * default handle event change function
 * @param {event} event
 * @param {Object} event.target
 * @param {string} event.target.name name to set
 * @param {*} event.target.value value to set
 * @returns {Object} object with key of name set to value
 */
function eventTargetToNameAndValue$1(event) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
  let {
    name,
    value
  } = event.target;
  return setNameToValue$1(name, value);
}

/**
 * default handle toggle function
 * @param {string} fieldName name to set
 * @param {Object} stateData component state data
 * @returns {Object} object with key of field name set to boolean opposite in state
 */
function toggleStateBoolean$1(fieldName, stateData) {
  return {
    [fieldName]: !stateData[fieldName]
  };
}
function setNameToValue$1(name, value) {
  return {
    [name]: value
  };
}
var methodFunctions = {
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
};

const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
<<<<<<< HEAD
<<<<<<< HEAD
  checkNullorEmptyString,
<<<<<<< HEAD
  invalidScc
=======
  checkNullorEmptyString
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
  invalidRegex
>>>>>>> 55b6519 (rename function and fix imports)
=======
  checkNullorEmptyString,
  invalidRegex
>>>>>>> 7d02243 (fix merge)
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
  saveChangeButtonClass
} = buttonUtils;
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
} = methodFunctions;
var lib = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  formatInputPlaceholder,
  saveChangeButtonClass,
  eventTargetToNameAndValue,
  toggleStateBoolean,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7d02243 (fix merge)
  setNameToValue,
  invalidRegex
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.prependEmptyStringWhenNull;
var lib_4 = lib.checkNullorEmptyString;
var lib_5 = lib.formatInputPlaceholder;
var lib_6 = lib.saveChangeButtonClass;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var lib_7 = lib.eventTargetToNameAndValue;
var lib_8 = lib.toggleStateBoolean;
var lib_9 = lib.setNameToValue;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> 72d0b85 (merge)
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
  component.eventTargetToNameAndValue = lib_7.bind(component);
  component.toggleStateBoolean = lib_8.bind(component);
  component.setNameToValue = lib_9.bind(component);
}

=======
>>>>>>> b9aa481 (feat: object storage key form)
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
<<<<<<< HEAD
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
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 7d02243 (fix merge)

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
<<<<<<< HEAD
var css_248z$2 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$2);
=======
var css_248z$7 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
=======
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);

var css_248z$8 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$8);

=======
var css_248z$a = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$9);

>>>>>>> 7d02243 (fix merge)
/**
 * Render a form (duplicate from utils to prevent circular dependencies)
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm$1(form, formProps) {
  return /*#__PURE__*/React__default["default"].createElement(form, _objectSpread2({}, formProps));
}

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
  }, RenderForm$1(props.innerForm, allProps), tooltip) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React__default["default"].cloneElement(props.children, {
    // adjust props
    labelText: " ",
    // set labelText to empty
    className: props.children.props.className + " tooltip" // add tooltip class back
  }) : RenderForm$1(props.innerForm, allProps)));
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
  return props.tooltip ? /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm$1(props.innerForm, {});
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
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);

var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> 353b3a7 ($@)
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
=======

>>>>>>> 72d0b85 (merge)
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
<<<<<<< HEAD
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
=======
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
>>>>>>> 72d0b85 (merge)
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> b3a36f0 (changes pt. 1)
=======
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
=======
=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> 72d0b85 (merge)
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
=======
      writable: true
>>>>>>> 72d0b85 (merge)
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
>>>>>>> 67351ff (Dropdowns components)
=======
>>>>>>> 72d0b85 (merge)
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

<<<<<<< HEAD
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
=======
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
};
>>>>>>> 72d0b85 (merge)

const {
  kebabCase
} = lazyZ__default["default"];
<<<<<<< HEAD
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
=======

>>>>>>> 72d0b85 (merge)
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
=======
var textUtils = {
  formatInputPlaceholder: formatInputPlaceholder$1
};

/**
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
  saveChangeButtonClass: saveChangeButtonClass$1,
};

<<<<<<< HEAD
=======
=======
=======
>>>>>>> 72d0b85 (merge)
  saveChangeButtonClass: saveChangeButtonClass$1
};

/**
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
 * default handle event change function
 * @param {event} event
 * @param {Object} event.target
 * @param {string} event.target.name name to set
 * @param {*} event.target.value value to set
 * @returns {Object} object with key of name set to value
 */
function eventTargetToNameAndValue$2(event) {
=======
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
  let {
    name,
    value
  } = event.target;
  return setNameToValue$1(name, value);
}

/**
 * default handle toggle function
 * @param {string} fieldName name to set
 * @param {Object} stateData component state data
 * @returns {Object} object with key of field name set to boolean opposite in state
 */
function toggleStateBoolean$1(fieldName, stateData) {
  return {
    [fieldName]: !stateData[fieldName]
  };
}
function setNameToValue$1(name, value) {
  return {
    [name]: value
  };
}
var methodFunctions = {
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
};

<<<<<<< HEAD
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
=======
const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString
>>>>>>> 72d0b85 (merge)
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
  saveChangeButtonClass
} = buttonUtils;
const {
>>>>>>> 72d0b85 (merge)
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
=======
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
} = methodFunctions;
var lib = {
  toggleMarginBottom,
  addClassName,
<<<<<<< HEAD
=======
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
>>>>>>> 72d0b85 (merge)
  formatInputPlaceholder,
  saveChangeButtonClass,
<<<<<<< HEAD
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
<<<<<<< HEAD
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
=======
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
styleInject(css_248z$7);
>>>>>>> b5b1ac6 (fixed build)
=======
  setNameToValue: setNameToValue$1
=======
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
  setNameToValue
>>>>>>> 4c7a274 (fixed formatting for docs)
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.prependEmptyStringWhenNull;
var lib_5 = lib.formatInputPlaceholder;
var lib_6 = lib.saveChangeButtonClass;

<<<<<<< HEAD
=======
>>>>>>> 28f2e52 (code now)
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
=======
var lib_7 = lib.eventTargetToNameAndValue;
var lib_8 = lib.toggleStateBoolean;
var lib_10 = lib.invalidScc;
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 55b6519 (rename function and fix imports)

var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 10px;\n}";
>>>>>>> b6eab56 (example and readme)
=======
var css_248z$7 = ".popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  font-size: 80%;\r\n  z-index: 9001;\r\n  top: 10px;\r\n}";
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
styleInject(css_248z$7);
>>>>>>> 72d0b85 (merge)

var css_248z$6 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 10px;\n}";
styleInject(css_248z$6);
=======
=======

>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);

var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$7);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b982705 (feat: StatefulTabPanel)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var css_248z$8 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$8);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$8 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$8);
>>>>>>> 7d02243 (fix merge)

/**
 * Wrapper for carbon popover component to handle individual component mouseover
 */
var PopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PopoverWrapper, _React$Component);
  var _super = _createSuper(PopoverWrapper);
  function PopoverWrapper(props) {
    var _this;
    _classCallCheck(this, PopoverWrapper);
    _this = _super.call(this, props);
    _this.state = {
      isHovering: false
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle mouse over
   */
  _createClass(PopoverWrapper, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      this.setState({
        isHovering: true
      });
    }

    /**
     * handle mouse out
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      this.setState({
        isHovering: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.noPopover === true || this.props.hoverText === "" ? this.props.children : /*#__PURE__*/React__default["default"].createElement("div", {
        className: lib_2("popover-obj", this.props),
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut
      }, /*#__PURE__*/React__default["default"].createElement(react.Popover, {
        open: this.state.isHovering,
        autoAlign: this.props.align ? false : true,
        dropShadow: false,
        highContrast: true,
        caret: false,
        align: this.props.align
      }, this.props.children, /*#__PURE__*/React__default["default"].createElement(react.PopoverContent, {
        className: "popover-box" + (this.props.contentClassName ? " ".concat(this.props.contentClassName) : "")
      }, this.props.hoverText)));
    }
  }]);
  return PopoverWrapper;
}(React__default["default"].Component);
PopoverWrapper.defaultProps = {
  noPopover: false
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes__default["default"].bool,
  hoverText: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7d02243 (fix merge)
var css_248z$7 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
styleInject(css_248z$7);

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
var SaveIcon = function SaveIcon(props) {
  return /*#__PURE__*/React__default["default"].createElement(iconsReact.Save, {
    className: props.disabled ? "" : "tertiaryButtonColors"
  });
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
var SaveAddButton = function SaveAddButton(props) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : ""),
    align: props.hoverTextAlign
  }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
<<<<<<< HEAD
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
=======
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
>>>>>>> dc1cdcb (arrayOf)
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "add" ? /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, null) : /*#__PURE__*/React__default["default"].createElement(SaveIcon, {
    saveIsDisabled: props.disabled
  })));
};
SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
  disabled: false,
  hoverTextAlign: "bottom"
};
SaveAddButton.propTypes = {
  hoverText: PropTypes__default["default"].string.isRequired,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  inline: PropTypes__default["default"].bool.isRequired,
  hoverTextAlign: PropTypes__default["default"].string.isRequired
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @param {string=} props.hoverText text for popover hover
 * @param {string} props.type can be `edit` or `add`, defaults to add
 * @param {boolean} props.disabled
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
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string,
  open: PropTypes__default["default"].bool
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false
};

/**
 * Delete button
 * @param {*} props
 * @param {boolean} props.disabled
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
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
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  name: PropTypes__default["default"].string.isRequired
};

/**
 * Up/Down button
 * @param {*} props
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
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
};
UpDownButtons.propTypes = {
  disableUp: PropTypes__default["default"].bool.isRequired,
  disableDown: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  handleUp: PropTypes__default["default"].func.isRequired,
  handleDown: PropTypes__default["default"].func.isRequired
};

/**
 * Wrapper for carbon popover component to handle individual component mouseover
 */
var PopoverWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(PopoverWrapper, _React$Component);
  var _super = _createSuper(PopoverWrapper);
  function PopoverWrapper(props) {
    var _this;
    _classCallCheck(this, PopoverWrapper);
    _this = _super.call(this, props);
    _this.state = {
      isHovering: false
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle mouse over
   */
  _createClass(PopoverWrapper, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      this.setState({
        isHovering: true
      });
    }

    /**
     * handle mouse out
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      this.setState({
        isHovering: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.noPopover === true || this.props.hoverText === "" ? this.props.children : /*#__PURE__*/React__default["default"].createElement("div", {
        className: lib_2("popover-obj", this.props),
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut
      }, /*#__PURE__*/React__default["default"].createElement(react.Popover, {
        open: this.state.isHovering,
        autoAlign: this.props.align ? false : true,
        dropShadow: false,
        highContrast: true,
        caret: false,
        align: this.props.align
      }, this.props.children, /*#__PURE__*/React__default["default"].createElement(react.PopoverContent, {
        className: "popover-box" + (this.props.contentClassName ? " ".concat(this.props.contentClassName) : "")
      }, this.props.hoverText)));
    }
  }]);
  return PopoverWrapper;
}(React__default["default"].Component);
PopoverWrapper.defaultProps = {
  noPopover: false
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes__default["default"].bool,
  hoverText: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node.isRequired
};

=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 353b3a7 ($@)
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
styleInject(css_248z$6);

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
var SaveIcon = function SaveIcon(props) {
  return /*#__PURE__*/React__default["default"].createElement(iconsReact.Save, {
    className: props.disabled ? "" : "tertiaryButtonColors"
  });
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
var SaveAddButton = function SaveAddButton(props) {
=======
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
  return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : ""),
    align: props.hoverTextAlign
  }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "add" ? /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, null) : /*#__PURE__*/React__default["default"].createElement(SaveIcon, {
    saveIsDisabled: props.disabled
  })));
};
SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
  disabled: false,
  hoverTextAlign: "bottom"
};
SaveAddButton.propTypes = {
  hoverText: PropTypes__default["default"].string.isRequired,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  inline: PropTypes__default["default"].bool.isRequired,
  hoverTextAlign: PropTypes__default["default"].string.isRequired
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @param {string=} props.hoverText text for popover hover
 * @param {string} props.type can be `edit` or `add`, defaults to add
 * @param {boolean} props.disabled
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
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string,
  open: PropTypes__default["default"].bool
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false
};

/**
 * Delete button
 * @param {*} props
 * @param {boolean} props.disabled
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
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
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  name: PropTypes__default["default"].string.isRequired
};

/**
 * Up/Down button
 * @param {*} props
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
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
};
UpDownButtons.propTypes = {
  disableUp: PropTypes__default["default"].bool.isRequired,
  disableDown: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  handleUp: PropTypes__default["default"].func.isRequired,
  handleDown: PropTypes__default["default"].func.isRequired
};

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
var IcseHeading = function IcseHeading(props) {
  var titleFormDivClass = props.toggleFormTitle ? "" : props.name === "" ? "" : " icseFormTitleMinHeight";
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: lib_2("displayFlex spaceBetween widthOneHundredPercent alignItemsCenter", props) + titleFormDivClass
  }, /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, {
    tooltip: props.tooltip,
    innerForm: function innerForm() {
      return props.type === "subHeading" ? /*#__PURE__*/React__default["default"].createElement("h5", null, props.name) : props.type === "p" ? /*#__PURE__*/React__default["default"].createElement("p", null, props.name) : /*#__PURE__*/React__default["default"].createElement("h4", null, props.name);
    }
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "displayFlex"
  }, props.buttons));
};
IcseHeading.defaultProps = {
  type: "heading"
};
IcseHeading.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  type: PropTypes__default["default"].string,
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  buttons: PropTypes__default["default"].node,
  className: PropTypes__default["default"].string
};

/**
 * All of the toggle form functionality without injecting anything on render
 */
var StatelessToggleForm = function StatelessToggleForm(props) {
  return props.hideTitle ? props.children : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(TitleGroup, {
    hide: props.hide,
    props: props,
    className: props.className
  }, props.hideIcon !== true && /*#__PURE__*/React__default["default"].createElement(EditCloseIcon, {
    onClick: props.onIconClick,
    type: props.iconType,
    open: props.hide === false
  }), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
    type: props.toggleFormTitle ? "p" : props.subHeading ? "subHeading" : "heading",
    name: props.name,
    buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
      hide: props.hide === true && props.alwaysShowButtons !== true,
      show: props.buttons || ""
    })
  })), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
    hide: props.hide,
    show: props.children
  }));
};
StatelessToggleForm.defaultProps = {
  hide: true,
  iconType: "edit",
  name: "Stateless Toggle Form"
};
StatelessToggleForm.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  iconType: PropTypes__default["default"].string.isRequired,
  onIconClick: PropTypes__default["default"].func,
  subHeading: PropTypes__default["default"].bool,
  name: PropTypes__default["default"].string.isRequired,
  buttons: PropTypes__default["default"].node,
  toggleFormTitle: PropTypes__default["default"].bool,
  alwaysShowButtons: PropTypes__default["default"].bool
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);
=======
var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$5);
>>>>>>> 353b3a7 ($@)

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

<<<<<<< HEAD
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$4);
>>>>>>> 353b3a7 ($@)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
=======
=======
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);

>>>>>>> b9aa481 (feat: object storage key form)
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> b6eab56 (example and readme)
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 1e428a4 (SecretsManager form)
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$6);

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 7d02243 (fix merge)
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
    labelA: props.useOnOff ? "Off" : "False",
    labelB: props.useOnOff ? "On" : "True",
    labelText: props.tooltip ? " " : props.labelText,
    id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
    className: lib_2("leftTextAlign fieldWidth", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
    ,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    onToggle: event => {
=======
    onToggle: function onToggle(event) {
>>>>>>> b6eab56 (example and readme)
=======
    onToggle: function onToggle(event) {
>>>>>>> 1e428a4 (SecretsManager form)
=======
    onToggle: function onToggle(event) {
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
    onToggle: function onToggle(event) {
>>>>>>> 7d02243 (fix merge)
      props.onToggle(toggleName, event);
    },
    defaultToggled: props.defaultToggled,
    disabled: props.disabled
  }));
<<<<<<< HEAD
<<<<<<< HEAD
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, _extends({
    innerForm: function innerForm() {
      return /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        "aria-labelledby": props.labelText,
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
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    placeholder: props.placeholder || lib_3(props.componentName, fieldName),
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 72d0b85 (merge)
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> dc1cdcb (arrayOf)
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 7d02243 (fix merge)
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
  labelText: PropTypes__default["default"].string,
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var sccRegions = [{
=======
const sccRegions = [{
>>>>>>> 55b6519 (rename function and fix imports)
=======
var sccRegions = [{
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
var sccRegions = [{
>>>>>>> f19dfef (merge)
  id: "us",
  label: "us"
}, {
  id: "eu",
  label: "eu"
}, {
  id: "uk",
  label: "uk"
}];

/**
 * SccForm
 * @param {Object} props
 */
var SccForm = /*#__PURE__*/function (_Component) {
  _inherits(SccForm, _Component);
  var _super = _createSuper(SccForm);
  function SccForm(props) {
    var _this;
    _classCallCheck(this, SccForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleLocationChange = _this.handleLocationChange.bind(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    _this.state.enable_scc = true;
    return _this;
  }

  /**
   * Handle input change for scope_name field
   * @param {event} event
   */
  _createClass(SccForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle input change
     * @param {event} event event
     */
  }, {
    key: "handleLocationChange",
    value: function handleLocationChange(selectedItem) {
      this.setState({
        location_id: selectedItem.selectedItem.label
      });
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
>>>>>>> f19dfef (merge)
    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     * @param {bool} setDefaults set default values, default is false
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.setState(lib_8(name, this.state));
<<<<<<< HEAD
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> f19dfef (merge)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
        },
        className: "leftTextAlign fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Determines whether the collector endpoint is accessible on a public network."
        },
        labelText: "Is Public",
        defaultToggled: this.state.is_public,
        className: "leftTextAlign",
        onToggle: this.handleToggle,
        id: "scc-is-public"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_name",
        tooltip: {
          content: "A unique name for your scope. A scope narrows the focus of the scan.",
          align: "top-left"
        },
        componentName: "SCC",
        field: "scope_name",
        labelText: "Scope Name",
        value: this.state.scope_name,
        onChange: this.handleInputChange,
        maxLength: 50,
        invalid: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalid,
        invalidText: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalidText
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_description",
        tooltip: {
          content: "A detailed description of the scope."
        },
        componentName: "SCC",
        field: "scope_description",
        labelText: "Scope Description",
        value: this.state.scope_description,
        onChange: this.handleInputChange,
        maxLength: 255,
        invalid: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalid,
        invalidText: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalidText
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_collector",
        tooltip: {
          content: "A detailed description of the collector.",
          align: "top-left"
        },
        labelText: "Collector Description",
        field: "collector_description",
        value: this.state.collector_description,
        onChange: this.handleInputChange,
        componentName: "SCC",
        maxLength: 1000,
        invalid: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalid,
        invalidText: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalidText
      })));
    }
  }]);
  return SccForm;
}(React.Component);
<<<<<<< HEAD
<<<<<<< HEAD
=======
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   * @param {bool} setDefaults set default values, default is false
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.Dropdown, {
      ariaLabel: "Dropdown",
      id: "location_id",
      items: sccRegions,
      label: "SCC Region Options",
      titleText: "Region",
      onChange: selectedItem => {
        this.handleLocationChange(selectedItem);
      },
      className: "leftTextAlign fieldWidth"
    }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      tooltip: {
        content: "Determines whether the collector endpoint is accessible on a public network."
      },
      labelText: "Is Public",
      defaultToggled: this.state.is_public,
      className: "leftTextAlign",
      onToggle: this.handleToggle,
      id: "scc-is-public"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "scc_scope_name",
      tooltip: {
        content: "A unique name for your scope. A scope narrows the focus of the scan.",
        align: "top-left"
      },
      componentName: "SCC",
      field: "scope_name",
      labelText: "Scope Name",
      value: this.state.scope_name,
      onChange: this.handleInputChange,
      maxLength: 50,
      invalid: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalid,
      invalidText: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalidText
    }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "scc_scope_description",
      tooltip: {
        content: "A detailed description of the scope."
      },
      componentName: "SCC",
      field: "scope_description",
      labelText: "Scope Description",
      value: this.state.scope_description,
      onChange: this.handleInputChange,
      maxLength: 255,
      invalid: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalid,
      invalidText: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalidText
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "scc_collector",
      tooltip: {
        content: "A detailed description of the collector.",
        align: "top-left"
      },
      labelText: "Collector Description",
      field: "collector_description",
      value: this.state.collector_description,
      onChange: this.handleInputChange,
      componentName: "SCC",
      maxLength: 1000,
      invalid: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalid,
      invalidText: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalidText
    })));
  }
}
>>>>>>> 55b6519 (rename function and fix imports)
=======
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
>>>>>>> f19dfef (merge)
SccForm.defaultProps = {
  data: {
    enable_scc: false
  },
  scopeNameRegex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes__default["default"].shape({
    enable_scc: PropTypes__default["default"].bool.isRequired,
    collector_description: PropTypes__default["default"].string,
    is_public: PropTypes__default["default"].bool,
    location_id: PropTypes__default["default"].string,
    scope_description: PropTypes__default["default"].string,
    scope_name: PropTypes__default["default"].string,
    collector_passphrase: PropTypes__default["default"].string
  }),
  scopeNameRegex: PropTypes__default["default"].instanceOf(RegExp).isRequired,
  descriptionRegex: PropTypes__default["default"].instanceOf(RegExp).isRequired
};

>>>>>>> 4fb645f (moved to lib with tests)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> b9aa481 (feat: object storage key form)
var IcseSelect = function IcseSelect(props) {
  var invalid =
=======
const IcseSelect = props => {
  let invalid =
>>>>>>> 061a17e (removed resourceGroups from state, added proptypes, removed ResourceGroupSelect)
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
    id: lazyZ.kebabCase(props.name) + "-dropdown-tooltip",
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
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
        },
        className: "leftTextAlign fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Determines whether the collector endpoint is accessible on a public network."
        },
        labelText: "Is Public",
        defaultToggled: this.state.is_public,
        className: "leftTextAlign",
        onToggle: this.handleToggle,
        id: "scc-is-public"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_name",
        tooltip: {
          content: "A unique name for your scope. A scope narrows the focus of the scan.",
          align: "top-left"
        },
        componentName: "SCC",
        field: "scope_name",
        labelText: "Scope Name",
        value: this.state.scope_name,
        onChange: this.handleInputChange,
        maxLength: 50,
        invalid: this.props.invalidSccScopeName(this.state).invalid,
        invalidText: this.props.invalidSccScopeName(this.state).invalidText || "Invalid scope name. Must match regular expression: /[A-z][a-z0-9-]*[a-z0-9]/"
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_description",
        tooltip: {
          content: "A detailed description of the scope."
        },
        componentName: "SCC",
        field: "scope_description",
        labelText: "Scope Description",
        value: this.state.scope_description,
        onChange: this.handleInputChange,
        maxLength: 255,
        invalid: this.props.invalidSccScopeDescription(this.state).invalid,
        invalidText: this.props.invalidSccScopeDescription(this.state).invalidText || 'Invalid scope description. Must match regular expression: /[A-z][a-z0-9._,"-\\s]*/'
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_collector",
        tooltip: {
          content: "A detailed description of the collector.",
          align: "top-left"
        },
        labelText: "Collector Description",
        field: "collector_description",
        value: this.state.collector_description,
        onChange: this.handleInputChange,
        componentName: "SCC",
        maxLength: 1000,
        invalid: this.props.invalidSccCollectorDescription(this.state).invalid,
        invalidText: this.props.invalidSccCollectorDescription(this.state).invalidText || 'Invalid collector description. Must match regular expression: /[A-z][a-z0-9._,"-\\s]*/'
      })));
    }
  }]);
  return SccForm;
}(React.Component);
SccForm.propTypes = {
  data: PropTypes__default["default"].shape({
    enable_scc: PropTypes__default["default"].bool.isRequired,
    collector_description: PropTypes__default["default"].string,
    is_public: PropTypes__default["default"].bool.isRequired,
    location_id: PropTypes__default["default"].string,
    scope_description: PropTypes__default["default"].string,
    scope_name: PropTypes__default["default"].string,
    collector_passphrase: PropTypes__default["default"].string
  }),
  invalidSccScopeName: PropTypes__default["default"].func.isRequired,
  invalidSccScopeDescription: PropTypes__default["default"].func.isRequired,
  invalidSccCollectorDescription: PropTypes__default["default"].func.isRequired
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
      return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: this.props.labelText,
        handleInputChange: this.props.handleInputChange,
        name: this.props.name,
        className: this.props.className,
        formName: this.props.formName,
        groups: this.dataToGroups(),
        value: this.props.value || "null"
=======
      if (this._isMounted) this.setState({
        data: data
>>>>>>> 061a17e (removed resourceGroups from state, added proptypes, removed ResourceGroupSelect)
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
<<<<<<< HEAD
 * SecretsManagerForm
 * @param {Object} props
 */
var SecretsManagerForm = /*#__PURE__*/function (_Component) {
  _inherits(SecretsManagerForm, _Component);
  var _super = _createSuper(SecretsManagerForm);
  function SecretsManagerForm(props) {
    var _this;
    _classCallCheck(this, SecretsManagerForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    _this.state.use_secrets_manager = true;
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(SecretsManagerForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: "Secrets Manager",
        component: "secrets_manager",
        value: this.state.name,
        onChange: this.handleInputChange,
        componentProps: this.props,
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Secrets Manager",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        value: this.state.kms_key_name,
        groups: this.props.encryptionKeys,
        formName: "Secrets Manager",
        name: "kms_key_name",
        className: "fieldWidth",
        labelText: "Encryption Key",
        handleInputChange: this.handleInputChange
      })));
    }
  }]);
  return SecretsManagerForm;
}(React.Component);
SecretsManagerForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    kms_key_name: PropTypes__default["default"].string
  }).isRequired,
  encryptionKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

/**
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
 * kms keys
 */
var EncryptionKeyForm = /*#__PURE__*/function (_Component) {
  _inherits(EncryptionKeyForm, _Component);
  var _super = _createSuper(EncryptionKeyForm);
  function EncryptionKeyForm(props) {
    var _this;
    _classCallCheck(this, EncryptionKeyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(EncryptionKeyForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }

    /**
     * Handle input change for a text field
     * @param {event} event
     */
  }, {
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState({
        name: event.target.value
      });
    }

    // Handle toggle for showing/hiding details of keys
  }, {
    key: "toggleShow",
    value: function toggleShow() {
      this.setState({
        show: !this.state.show
      });
    }
  }, {
    key: "render",
    value: function render() {
      var composedId = "encryption-key-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        component: "kms_key",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: this.handleTextInput,
        componentProps: this.props,
        placeholder: "my-encryption-key-name",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
        tooltip: {
          content: "Setting a rotation policy shortens the lifetime of the key at regular intervals. When it's time to rotate the key based on the rotation interval that you specify, the root key will be automatically replaced with new key material.",
          align: "bottom-left"
        },
        component: this.props.data.name,
        max: 12,
        value: this.state.interval_month,
        formName: "interval_month",
        name: "interval_month",
        labelText: "Rotation Interval (Months)",
        handleInputChange: this.handleInputChange,
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Root keys are symmetric key-wrapping keys used as roots of trust for encrypting/decrypting other keys. Can be either imported or generated by IBM Key Protect.",
          link: "https://cloud.ibm.com/docs/key-protect?topic=key-protect-envelope-encryption",
          align: "bottom-left"
        },
        id: composedId + "kms-key-root",
        labelText: "Set as a Root Key",
        toggleFieldName: "root_key",
        onToggle: this.handleToggle,
        defaultToggled: this.state.root_key,
        isModal: this.props.isModal
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Force deletion of a key refers to the deletion of any key that's actively protecting any registered cloud resources. KMS keys can be force-deleted by managers of the instance. However, the force-delete won't succeed if the key's associated resource is non-erasable due to a retention policy.",
          align: "bottom-left"
        },
        id: composedId + "kms-key-force-delete",
        labelText: "Force Deletion of KMS Key",
        toggleFieldName: "force_delete",
        defaultToggled: this.state.force_delete,
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })));
    }
  }]);
  return EncryptionKeyForm;
}(React.Component);
EncryptionKeyForm.defaultProps = {
  data: {
    name: "",
    interval_month: 12,
    root_key: false,
    force_delete: false
  },
  isModal: false
};
EncryptionKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    interval_month: PropTypes__default["default"].number.isRequired,
    root_key: PropTypes__default["default"].bool.isRequired,
    force_delete: PropTypes__default["default"].bool
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
>>>>>>> dc1cdcb (arrayOf)
};

/**
<<<<<<< HEAD
 * Atracker
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} props.data.resource_group
 * @param {string} props.data.cos_bucket
 * @param {string} props.data.cos_key
 * @param {boolean} props.data.add_route
 * @param {Array} props.resourceGroups list of resource groups
 * @param {Array} props.cosBuckets list of cos buckets
 * @param {Array} props.cosKeys list of cos Keys
 * @param {string} props.prefix
 */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8fb616a (added docs)
var AtrackerForm = /*#__PURE__*/function (_Component) {
  _inherits(AtrackerForm, _Component);
  var _super = _createSuper(AtrackerForm);
  function AtrackerForm(props) {
    var _this;
    _classCallCheck(this, AtrackerForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
<<<<<<< HEAD
=======
=======
};

/**
>>>>>>> 4c7a274 (fixed formatting for docs)
 * Key Management
 */
var KeyManagementForm = /*#__PURE__*/function (_Component) {
  _inherits(KeyManagementForm, _Component);
  var _super = _createSuper(KeyManagementForm);
  function KeyManagementForm(props) {
    var _this;
    _classCallCheck(this, KeyManagementForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSystemDropdown = _this.handleSystemDropdown.bind(_assertThisInitialized(_this));
<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 8fb616a (added docs)
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
<<<<<<< HEAD
=======
class AtrackerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
>>>>>>> f680a35 (almost done)
=======
>>>>>>> 8fb616a (added docs)
  }

  /**
   * handle input change
   * @param {event} event event
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  _createClass(AtrackerForm, [{
=======
  _createClass(KeyManagementForm, [{
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
  _createClass(KeyManagementForm, [{
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
  _createClass(AtrackerForm, [{
>>>>>>> 8fb616a (added docs)
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

>>>>>>> f680a35 (almost done)
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      id: "atracker-form"
    }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      componentName: "Activity Tracker",
      field: "Name",
      labelText: "Name",
      className: "fieldWidth",
      value: this.props.prefix + "-atracker",
      onChange: this.handleInputChange,
      readOnly: true,
      id: "atracker-name",
      invalid: false
    }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "Activity Tracker",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      name: "resource_group",
      labelText: "Resource Group"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      tooltip: {
        content: "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored"
      },
      groups: this.props.cosBuckets,
      formName: "Activity Tracker",
      field: "collector_bucket_name",
      name: "collector_bucket_name",
<<<<<<< HEAD
<<<<<<< HEAD
      value: this.state.collector_bucket_name || "",
=======
      value: this.state.collector_bucket_name,
>>>>>>> dc1cdcb (arrayOf)
=======
      value: this.state.collector_bucket_name,
>>>>>>> f680a35 (almost done)
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      labelText: "Object Storage Log Bucket",
      invalidText: "Select an Object Storage bucket."
    }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      tooltip: {
        content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
      },
      labelText: "Create Activity Tracker Route",
      defaultToggled: this.state.add_route,
      toggleFieldName: "add_route",
      onToggle: this.handleToggle,
      id: "app-id-add-route"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      tooltip: {
        content: "The IAM API key that has writer access to the Cloud Object Storage instance"
      },
      formName: "Activity Tracker",
      name: "atracker_key",
      groups: this.props.cosKeys,
<<<<<<< HEAD
<<<<<<< HEAD
      value: this.state.atracker_key || "",
=======
      value: this.state.atracker_key,
>>>>>>> dc1cdcb (arrayOf)
=======
      value: this.state.atracker_key,
>>>>>>> f680a35 (almost done)
      labelText: "Privileged IAM Object Storage Key",
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      invalidText: "Select an Object Storage key."
    })));
  }
}
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
    /**
     * handle dropdown for key management system
     * @param {event} event event
     */
  }, {
    key: "handleSystemDropdown",
    value: function handleSystemDropdown(event) {
      var selection = event.target.value; // selected value in dropdown
      selection === "HPCS" ? this.setState({
        use_hs_crypto: true,
        use_data: true
      }) : this.setState({
        use_hs_crypto: false,
        use_data: false
      });
    }

<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======

>>>>>>> 8fb616a (added docs)
    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.setState(this.toggleStateBoolean(name, this.state));
=======
      this.setState(_defineProperty({}, name, !this.state[name]));
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 8fb616a (added docs)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8fb616a (added docs)
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: "atracker-form"
      }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Activity Tracker",
        field: "Name",
        labelText: "Name",
        className: "fieldWidth",
        value: this.props.prefix + "-atracker",
        onChange: this.handleInputChange,
        readOnly: true,
        id: "atracker-name",
        invalid: false
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Activity Tracker",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored"
        },
        groups: this.props.cosBuckets,
        formName: "Activity Tracker",
        field: "collector_bucket_name",
        name: "collector_bucket_name",
        value: this.state.collector_bucket_name,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        labelText: "Object Storage Log Bucket",
        invalidText: "Select an Object Storage bucket."
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
        },
        labelText: "Create Activity Tracker Route",
        defaultToggled: this.state.add_route,
        toggleFieldName: "add_route",
        onToggle: this.handleToggle,
        id: "app-id-add-route"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "The IAM API key that has writer access to the Cloud Object Storage instance"
        },
        formName: "Activity Tracker",
        name: "atracker_key",
        groups: this.props.cosKeys,
        value: this.state.atracker_key,
        labelText: "Privileged IAM Object Storage Key",
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        invalidText: "Select an Object Storage key."
      })));
    }
  }]);
  return AtrackerForm;
}(React.Component);
<<<<<<< HEAD
>>>>>>> 1e428a4 (SecretsManager form)
=======
>>>>>>> f680a35 (almost done)
=======
>>>>>>> 8fb616a (added docs)
AtrackerForm.defaultProps = {
  isModal: false,
  data: {
    collector_bucket_name: "",
    atracker_key: "",
    resource_group: "",
    add_route: false
  }
};
AtrackerForm.propTypes = {
  data: PropTypes__default["default"].shape({
    collector_bucket_name: PropTypes__default["default"].string.isRequired,
    atracker_key: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    add_route: PropTypes__default["default"].bool.isRequired
  }).isRequired,
  prefix: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
  cosKeys: PropTypes__default["default"].array.isRequired,
  cosBuckets: PropTypes__default["default"].array.isRequired,
=======
  cosKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
>>>>>>> dc1cdcb (arrayOf)
  isModal: PropTypes__default["default"].bool.isRequired
};

<<<<<<< HEAD
=======
      var _this2 = this;
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: "km-system-dropdown",
        name: "system",
        formName: "system",
        groups: ["Key Protect", "HPCS"],
        value: this.state.use_hs_crypto ? "HPCS" : "Key Protect",
        labelText: "Key Management System",
        handleInputChange: this.handleSystemDropdown,
        className: "fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Get Key Management from Data Source",
          align: "bottom-left"
        },
        labelText: "Use Existing Instance",
        key: this.state.use_data,
        defaultToggled: this.state.use_data,
<<<<<<< HEAD
        onToggle: function onToggle() {
          return _this2.handleToggle("use_data");
        },
=======
        onToggle: this.handleToggle,
>>>>>>> 4c7a274 (fixed formatting for docs)
        disabled: this.state.use_hs_crypto === true,
        className: "fieldWidth",
        id: "kms-existing"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        value: this.state.name,
        componentProps: this.props,
        component: "key_management",
        componentName: this.props.data.name,
        onChange: this.handleInputChange,
        className: "fieldWidth",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ResourceGroupSelect, {
        component: "Key Management",
        formName: "resource_group",
        name: "resource_group",
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth"
      })));
    }
  }]);
  return KeyManagementForm;
}(React.Component);
<<<<<<< HEAD
=======
KeyManagementForm.defaultProps = {
  data: {
    use_hs_crypto: false,
    use_data: false,
    name: "test-key-protect",
    resource_group: "service-rg"
  }
};
>>>>>>> 4c7a274 (fixed formatting for docs)
KeyManagementForm.propTypes = {
  data: PropTypes__default["default"].shape({
    use_hs_crypto: PropTypes__default["default"].bool.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired
  }).isRequired
};

<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
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

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);

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

var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$1);

/**
 * Icse multiselect template
 */
<<<<<<< HEAD
<<<<<<< HEAD
const IcseMultiSelect = props => {
=======
var IcseMultiSelect = function IcseMultiSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var IcseMultiSelect = function IcseMultiSelect(props) {
>>>>>>> dc1cdcb (arrayOf)
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
<<<<<<< HEAD
<<<<<<< HEAD
    itemToString: item => item ? item : "",
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
>>>>>>> 72d0b85 (merge)
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SshKeyMultiSelect = props => {
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> dc1cdcb (arrayOf)
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-ssh-key-multiselect",
    useTitleInItem: true,
    label: "SSH Keys",
    titleText: "SSH Keys",
    invalidText: "At least one SSH Key is required",
    invalid: props.initialSelectedItems.length === 0,
    items: props.sshKeys,
    initialSelectedItems: props.initialSelectedItems || [],
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => {
=======
    onChange: function onChange(event) {
>>>>>>> 72d0b85 (merge)
=======
    onChange: function onChange(event) {
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SecurityGroupMultiSelect = props => {
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => {
=======
    onChange: function onChange(event) {
>>>>>>> 72d0b85 (merge)
=======
    onChange: function onChange(event) {
>>>>>>> dc1cdcb (arrayOf)
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
<<<<<<< HEAD
<<<<<<< HEAD
    itemToString: item => item ? item : ""
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> 72d0b85 (merge)
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SubnetMultiSelect = props => {
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> 72d0b85 (merge)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
const VpcListMultiSelect = props => {
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems),
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> 72d0b85 (merge)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> dc1cdcb (arrayOf)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z);
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
var css_248z$1 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$1);
>>>>>>> b5b1ac6 (fixed build)
=======
var css_248z$1 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$1);
>>>>>>> 72d0b85 (merge)

/**
 * Wrapper for carbon popover component to handle individual component mouseover
 */
<<<<<<< HEAD
var PopoverWrapper = /*#__PURE__*/ (function (_React$Component) {
=======
var PopoverWrapper = /*#__PURE__*/function (_React$Component) {
>>>>>>> 72d0b85 (merge)
  _inherits(PopoverWrapper, _React$Component);
  var _super = _createSuper(PopoverWrapper);
  function PopoverWrapper(props) {
    var _this;
    _classCallCheck(this, PopoverWrapper);
    _this = _super.call(this, props);
    _this.state = {
<<<<<<< HEAD
      isHovering: false,
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(
      _assertThisInitialized(_this)
    );
    _this.handleMouseOut = _this.handleMouseOut.bind(
      _assertThisInitialized(_this)
    );
=======
      isHovering: false
    };
    _this.handleMouseOver = _this.handleMouseOver.bind(_assertThisInitialized(_this));
    _this.handleMouseOut = _this.handleMouseOut.bind(_assertThisInitialized(_this));
>>>>>>> 72d0b85 (merge)
    return _this;
  }

  /**
   * handle mouse over
   */
<<<<<<< HEAD
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
=======
  _createClass(PopoverWrapper, [{
    key: "handleMouseOver",
    value: function handleMouseOver() {
      this.setState({
        isHovering: true
      });
    }

    /**
     * handle mouse out
     */
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      this.setState({
        isHovering: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.noPopover === true || this.props.hoverText === "" ? this.props.children : /*#__PURE__*/React__default["default"].createElement("div", {
        className: lib_2("popover-obj", this.props),
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut
      }, /*#__PURE__*/React__default["default"].createElement(react.Popover, {
        open: this.state.isHovering,
        autoAlign: this.props.align ? false : true,
        dropShadow: false,
        highContrast: true,
        caret: false,
        align: this.props.align
      }, this.props.children, /*#__PURE__*/React__default["default"].createElement(react.PopoverContent, {
        className: "popover-box" + (this.props.contentClassName ? " ".concat(this.props.contentClassName) : "")
      }, this.props.hoverText)));
    }
  }]);
  return PopoverWrapper;
}(React__default["default"].Component);
PopoverWrapper.defaultProps = {
  noPopover: false
>>>>>>> 72d0b85 (merge)
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes__default["default"].bool,
  hoverText: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string,
  contentClassName: PropTypes__default["default"].string,
  align: PropTypes__default["default"].string,
<<<<<<< HEAD
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
=======
  children: PropTypes__default["default"].node.isRequired
};

=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 7d02243 (fix merge)
var IcseSelect = function IcseSelect(props) {
  var invalid =
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && lazyZ.isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
  : lib_3(
  // otherwise try and prepend empty string if null
  props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, _extends({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    innerForm: () => {
=======
=======
    id: lazyZ.kebabCase(props.name) + "-dropdown-tooltip",
>>>>>>> e63c208 (fix value prop type warning)
    innerForm: function innerForm() {
>>>>>>> 72d0b85 (merge)
=======
    id: lazyZ.kebabCase(props.name) + "-dropdown-tooltip",
    innerForm: function innerForm() {
>>>>>>> 7d02243 (fix merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
      }, groups.map(value => /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
        key: `${props.id}-${value}`,
        text: value,
        value: value
      }))));
=======
=======
>>>>>>> 7d02243 (fix merge)
      }, groups.map(function (value) {
        return /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
          key: "".concat(props.id, "-").concat(value),
          text: value,
          value: value
        });
      })));
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
  name: PropTypes__default["default"].string.isRequired,
>>>>>>> 67351ff (Dropdowns components)
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> 72d0b85 (merge)
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
<<<<<<< HEAD
    alignModal: PropTypes__default["default"].string
<<<<<<< HEAD
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
=======
=======
    alignModal: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string
>>>>>>> f15fc78 (tooltip align prop)
=======
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string
>>>>>>> 7d02243 (fix merge)
  })
};
var FetchSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(FetchSelect, _React$Component);
  var _super = _createSuper(FetchSelect);
  function FetchSelect(props) {
    var _this;
    _classCallCheck(this, FetchSelect);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);
    _this.state = {
      data: []
    };
    _this.dataToGroups = _this.dataToGroups.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(FetchSelect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this._isMounted = true;
      if (lazyZ.isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (_this2.props.onReturnFunction) {
          _this2.props.onReturnFunction(data);
        }
        if (_this2._isMounted) _this2.setState({
          data: data
        });
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "dataToGroups",
    value: function dataToGroups() {
      if (this.props.filter) {
        return this.state.data.filter(this.props.filter);
      } else {
        return this.state.data;
      }
    }
  }, {
    key: "render",
    value: function render() {
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
  }]);
  return FetchSelect;
}(React__default["default"].Component);
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
const IcseNumberSelect = props => {
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 7d02243 (fix merge)
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    formName: props.formName,
    groups: lazyZ.buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
<<<<<<< HEAD
<<<<<<< HEAD
    handleInputChange: event => {
      // set name target value and parse int
      let sendEvent = {
=======
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
>>>>>>> 72d0b85 (merge)
=======
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
>>>>>>> 7d02243 (fix merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
const EntitlementSelect = props => {
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 7d02243 (fix merge)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
=======
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
/**
 * Under Construction Page
 */
<<<<<<< HEAD
const UnderConstruction = () => {
=======
var UnderConstruction = function UnderConstruction() {
>>>>>>> 72d0b85 (merge)
=======
=======
=======
>>>>>>> 2f16728 (removed resource_group default)
=======
=======
>>>>>>> 7d02243 (fix merge)
/**
 * vpn gateway form
 */
var VpnGatewayForm = /*#__PURE__*/function (_Component) {
  _inherits(VpnGatewayForm, _Component);
  var _super = _createSuper(VpnGatewayForm);
  function VpnGatewayForm(props) {
    var _this;
    _classCallCheck(this, VpnGatewayForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event
   */
  _createClass(VpnGatewayForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      if (event.target.name === "vpc_name") {
        this.setState({
          vpc_name: event.target.value,
          subnet_name: ""
        });
      } else if (event.target.name === "subnet_name" && lib_4(this.state.vpc_name)) {
        this.setState({
          subnet_name: ""
        });
      } else {
        this.setState(this.eventTargetToNameAndValue(event));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var composedId = "vpn-gateway-form-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        component: "vpn_gateways",
        componentName: this.props.data.name,
        componentProps: this.props,
        value: this.state.name,
        onChange: this.handleInputChange,
        placeholder: "my-vpn-gateway-name",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.resource_group),
        invalidText: "Select a Resource Group.",
        className: "fieldWidth"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        id: composedId,
        formName: "vpc_name",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name),
        invalidText: "Select a VPC.",
        className: "fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        id: composedId,
        formName: "subnet_name",
        name: "subnet_name",
        labelText: "Subnet",
        groups: this.props.subnetList,
        value: this.state.subnet_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name) || lib_4(this.state.subnet_name),
        invalidText: lib_4(this.state.vpc_name) ? "No VPC Selected." : "Select a Subnet.",
        className: "fieldWidth"
      })));
    }
  }]);
  return VpnGatewayForm;
}(React.Component);
VpnGatewayForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc_name: "",
    subnet_name: null
  },
  isModal: false
};
VpnGatewayForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string,
    // can be null
    vpc_name: PropTypes__default["default"].string,
    // can be null
    subnet_name: PropTypes__default["default"].string // can be null
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  vpcList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  subnetList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

<<<<<<< HEAD
>>>>>>> ad3a1f9 (Migrated VpnGatewayForm + Documentation (Issue702) (#31))
=======
>>>>>>> 7d02243 (fix merge)
var ObjectStorageKeyForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageKeyForm, _Component);
  var _super = _createSuper(ObjectStorageKeyForm);
  function ObjectStorageKeyForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageKeyForm);
    _this = _super.call(this, props);
    _this.state = {
      name: _this.props.data.name,
      role: _this.props.data.role || "Writer",
      enable_hmac: _this.props.data.enable_hmac
    };
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handler for toggle
   * @param {String} name specifies the name of the state value you wish to change
   */
  _createClass(ObjectStorageKeyForm, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(this.toggleStateBoolean("enable_hmac", this.state));
    }

    /**
     * handle input change
     * @param {event} event event
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      // composed id
      var composedId = "key-form-".concat(this.props.data.name ? this.props.data.name : "new-key");
      var inputSize = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: this.handleInputChange,
        componentProps: this.props,
        placeholder: "my-cos-key-name",
        className: inputSize,
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "role",
        groups: ["Object Writer", "Object Reader", "Content Reader", "Reader", "Writer", "Manager"],
        value: this.state.role,
        labelText: "Role",
        handleInputChange: this.handleInputChange,
        className: inputSize,
        formName: this.state.data + "-cos-key"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          link: "https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-uhc-hmac-credentials-main",
          content: "HMAC (hash-based message authentication code) is required for Teleport VSI instances."
        },
        id: composedId + "cos-instance-key-hmac",
        labelText: "Enable HMAC",
        defaultToggled: this.props.forceEnableHmac,
        onToggle: this.handleToggle,
        isModal: this.props.isModal,
        disabled: this.props.forceEnableHmac
      })));
    }
  }]);
  return ObjectStorageKeyForm;
}(React.Component);
ObjectStorageKeyForm.defaultProps = {
  data: {
    name: "",
    enable_hmac: false
  },
  forceEnableHmac: false
};
ObjectStorageKeyForm.propTypes = {
  isModal: PropTypes__default["default"].bool,
  data: PropTypes__default["default"].shape({
    enable_hmac: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    role: PropTypes__default["default"].string
  }),
  shouldDisableSave: PropTypes__default["default"].func,
  shouldDisableSubmit: PropTypes__default["default"].func,
  forceEnableHmac: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired
};

<<<<<<< HEAD
var css_248z$4 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$4);
=======
var css_248z$5 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$5);
>>>>>>> 7d02243 (fix merge)

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

<<<<<<< HEAD
=======
>>>>>>> 353b3a7 ($@)
var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);
>>>>>>> 7d02243 (fix merge)

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
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
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

var sccRegions = [{
  id: "us",
  label: "us"
}, {
  id: "eu",
  label: "eu"
}, {
  id: "uk",
  label: "uk"
}];

/**
 * SccForm
 * @param {Object} props
 */
var SccForm = /*#__PURE__*/function (_Component) {
  _inherits(SccForm, _Component);
  var _super = _createSuper(SccForm);
  function SccForm(props) {
    var _this;
    _classCallCheck(this, SccForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleLocationChange = _this.handleLocationChange.bind(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    _this.state.enable_scc = true;
    return _this;
  }

  /**
   * Handle input change for scope_name field
   * @param {event} event
   */
  _createClass(SccForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle input change
     * @param {event} event event
     */
  }, {
    key: "handleLocationChange",
    value: function handleLocationChange(selectedItem) {
      this.setState({
        location_id: selectedItem.selectedItem.label
      });
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     * @param {bool} setDefaults set default values, default is false
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
        },
        className: "leftTextAlign fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Determines whether the collector endpoint is accessible on a public network."
        },
        labelText: "Is Public",
        defaultToggled: this.state.is_public,
        className: "leftTextAlign",
        onToggle: this.handleToggle,
        id: "scc-is-public"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_name",
        tooltip: {
          content: "A unique name for your scope. A scope narrows the focus of the scan.",
          align: "top-left"
        },
        componentName: "SCC",
        field: "scope_name",
        labelText: "Scope Name",
        value: this.state.scope_name,
        onChange: this.handleInputChange,
        maxLength: 50,
        invalid: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalid,
        invalidText: lib_10("scope_name", this.state.scope_name, this.props.scopeNameRegex).invalidText
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_scope_description",
        tooltip: {
          content: "A detailed description of the scope."
        },
        componentName: "SCC",
        field: "scope_description",
        labelText: "Scope Description",
        value: this.state.scope_description,
        onChange: this.handleInputChange,
        maxLength: 255,
        invalid: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalid,
        invalidText: lib_10("scope_description", this.state.scope_description, this.props.descriptionRegex).invalidText
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "scc_collector",
        tooltip: {
          content: "A detailed description of the collector.",
          align: "top-left"
        },
        labelText: "Collector Description",
        field: "collector_description",
        value: this.state.collector_description,
        onChange: this.handleInputChange,
        componentName: "SCC",
        maxLength: 1000,
        invalid: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalid,
        invalidText: lib_10("collector_description", this.state.collector_description, this.props.descriptionRegex).invalidText
      })));
    }
  }]);
  return SccForm;
}(React.Component);
SccForm.defaultProps = {
  data: {
    enable_scc: false
  },
  scopeNameRegex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes__default["default"].shape({
    enable_scc: PropTypes__default["default"].bool.isRequired,
    collector_description: PropTypes__default["default"].string,
    is_public: PropTypes__default["default"].bool,
    location_id: PropTypes__default["default"].string,
    scope_description: PropTypes__default["default"].string,
    scope_name: PropTypes__default["default"].string,
    collector_passphrase: PropTypes__default["default"].string
  }),
  scopeNameRegex: PropTypes__default["default"].instanceOf(RegExp).isRequired,
  descriptionRegex: PropTypes__default["default"].instanceOf(RegExp).isRequired
};

<<<<<<< HEAD
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 7d02243 (fix merge)
/**
 * SecretsManagerForm
 * @param {Object} props
 */
var SecretsManagerForm = /*#__PURE__*/function (_Component) {
  _inherits(SecretsManagerForm, _Component);
  var _super = _createSuper(SecretsManagerForm);
  function SecretsManagerForm(props) {
    var _this;
    _classCallCheck(this, SecretsManagerForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    _this.state.use_secrets_manager = true;
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(SecretsManagerForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: "Secrets Manager",
        component: "secrets_manager",
        value: this.state.name,
        onChange: this.handleInputChange,
        componentProps: this.props,
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Secrets Manager",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        value: this.state.kms_key_name,
        groups: this.props.encryptionKeys,
        formName: "Secrets Manager",
        name: "kms_key_name",
        className: "fieldWidth",
        labelText: "Encryption Key",
        handleInputChange: this.handleInputChange
      })));
    }
  }]);
  return SecretsManagerForm;
}(React.Component);
SecretsManagerForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    kms_key_name: PropTypes__default["default"].string
  }).isRequired,
  encryptionKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

<<<<<<< HEAD
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> 7d02243 (fix merge)

/**
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
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
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-ssh-key-multiselect",
    useTitleInItem: true,
    label: "SSH Keys",
    titleText: "SSH Keys",
    invalidText: "At least one SSH Key is required",
    invalid: props.initialSelectedItems.length === 0,
    items: props.sshKeys,
    initialSelectedItems: props.initialSelectedItems || [],
    onChange: function onChange(event) {
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
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
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
    onChange: function onChange(event) {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
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
var SubnetMultiSelect = function SubnetMultiSelect(props) {
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
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
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
var VpcListMultiSelect = function VpcListMultiSelect(props) {
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
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
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

var WorkerPoolForm = /*#__PURE__*/function (_Component) {
  _inherits(WorkerPoolForm, _Component);
  var _super = _createSuper(WorkerPoolForm);
  function WorkerPoolForm(props) {
    var _this;
    _classCallCheck(this, WorkerPoolForm);
    _this = _super.call(this, props);
    _this.state = {
      pool: _this.props.isModal ? {
        name: "",
        flavor: _this.props.cluster.machine_type,
<<<<<<< HEAD
=======
        subnetList: _this.props.cluster.subnetList,
>>>>>>> 7d02243 (fix merge)
        subnets: _this.props.cluster.subnets,
        vpc_name: _this.props.cluster.vpc_name,
        workers_per_subnet: _this.props.cluster.workers_per_subnet,
        entitlement: _this.props.cluster.entitlement
      } : _this.props.data
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubnetChange = _this.handleSubnetChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    return _this;
  }

  // Handle pool input change
  _createClass(WorkerPoolForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var pool = _objectSpread2({}, this.state.pool);
      if (name === "workers_per_subnet") {
        pool[name] = Number(value);
      } else {
        pool[name] = value === "null" ? null : value;
      }
      this.setState({
        pool: pool
      });
    }

    // Handle subnet multiselect change
  }, {
    key: "handleSubnetChange",
    value: function handleSubnetChange(event) {
      var pool = _objectSpread2({}, this.state.pool);
      pool.subnets = event.selectedItems;
      this.setState({
        pool: pool
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: "Worker Pools",
        component: "worker-pools",
        onChange: this.handleInputChange,
        componentProps: this.props,
        value: this.state.pool.name,
        className: "fieldWidthSmaller",
        placeholder: "my-worker-pool-name",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(EntitlementSelect, {
        name: "entitlement",
        value: this.state.pool.entitlement,
        handleInputChange: this.handleInputChange,
        component: this.props.data.name,
        formName: "Worker Pools"
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Worker Pools",
        name: "flavor",
        labelText: "Flavor Select",
        value: this.state.pool.flavor,
        groups: ["bx2.16x64", "bx2.2x8"],
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: this.props.data.name,
        slz: this.props.slz,
        disabled: this.state.pool.vpc_name === null,
        vpc_name: this.state.pool.vpc_name,
<<<<<<< HEAD
        subnets: this.props.data.subnets,
=======
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.data.subnetList,
>>>>>>> 7d02243 (fix merge)
        onChange: this.handleSubnetChange,
        component: this.props.data.name,
        className: "fieldWidthSmaller cds--form-item"
      }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
        name: "workers_per_subnet",
        formName: "Worker Pools",
        labelText: "Workers Per Subnet",
        value: this.state.pool.workers_per_subnet,
        max: 10,
        min: 0,
        handleInputChange: this.handleInputChange,
        component: this.props.data.name,
        className: "fieldWidthSmaller"
      })));
    }
  }]);
  return WorkerPoolForm;
}(React.Component);
WorkerPoolForm.defaultProps = {
  data: {
    entitlement: "",
    flavor: "bx2.16x64",
    name: "",
    subnets: [],
    vpc_name: "",
    workers_per_subnet: 2
  },
  isModal: false
};
WorkerPoolForm.propTypes = {
  isModal: PropTypes__default["default"].bool.isRequired,
  cluster: PropTypes__default["default"].shape({
<<<<<<< HEAD
    cos_name: PropTypes__default["default"].string.isRequired,
    entitlement: PropTypes__default["default"].string,
    // can be null
    kube_type: PropTypes__default["default"].string.isRequired,
    kube_version: PropTypes__default["default"].string.isRequired,
    machine_type: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string,
    kms_config: PropTypes__default["default"].shape({
      crk_name: PropTypes__default["default"].string.isRequired
    }).isRequired,
    update_all_workers: PropTypes__default["default"].bool.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    worker_pools: PropTypes__default["default"].array.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
=======
    entitlement: PropTypes__default["default"].string,
    // can be null
    machine_type: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired,
    subnetList: PropTypes__default["default"].array.isRequired
>>>>>>> 7d02243 (fix merge)
  }),
  // can be null
  data: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string.isRequired,
    flavor: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
<<<<<<< HEAD
    subnets: PropTypes__default["default"].array.isRequired
=======
    subnets: PropTypes__default["default"].array.isRequired,
    subnetList: PropTypes__default["default"].array.isRequired
>>>>>>> 7d02243 (fix merge)
  }).isRequired
};

/**
 * kms keys
 */
var EncryptionKeyForm = /*#__PURE__*/function (_Component) {
  _inherits(EncryptionKeyForm, _Component);
  var _super = _createSuper(EncryptionKeyForm);
  function EncryptionKeyForm(props) {
    var _this;
    _classCallCheck(this, EncryptionKeyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(EncryptionKeyForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }

    /**
     * Handle input change for a text field
     * @param {event} event
     */
  }, {
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState({
        name: event.target.value
      });
    }

    // Handle toggle for showing/hiding details of keys
  }, {
    key: "toggleShow",
    value: function toggleShow() {
      this.setState({
        show: !this.state.show
      });
    }
  }, {
    key: "render",
    value: function render() {
      var composedId = "encryption-key-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        component: "kms_key",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: this.handleTextInput,
        componentProps: this.props,
        placeholder: "my-encryption-key-name",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
        tooltip: {
          content: "Setting a rotation policy shortens the lifetime of the key at regular intervals. When it's time to rotate the key based on the rotation interval that you specify, the root key will be automatically replaced with new key material.",
          align: "bottom-left"
        },
        component: this.props.data.name,
        max: 12,
        value: this.state.interval_month,
        formName: "interval_month",
        name: "interval_month",
        labelText: "Rotation Interval (Months)",
        handleInputChange: this.handleInputChange,
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Root keys are symmetric key-wrapping keys used as roots of trust for encrypting/decrypting other keys. Can be either imported or generated by IBM Key Protect.",
          link: "https://cloud.ibm.com/docs/key-protect?topic=key-protect-envelope-encryption",
          align: "bottom-left"
        },
        id: composedId + "kms-key-root",
        labelText: "Set as a Root Key",
        toggleFieldName: "root_key",
        onToggle: this.handleToggle,
        defaultToggled: this.state.root_key,
        isModal: this.props.isModal
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Force deletion of a key refers to the deletion of any key that's actively protecting any registered cloud resources. KMS keys can be force-deleted by managers of the instance. However, the force-delete won't succeed if the key's associated resource is non-erasable due to a retention policy.",
          align: "bottom-left"
        },
        id: composedId + "kms-key-force-delete",
        labelText: "Force Deletion of KMS Key",
        toggleFieldName: "force_delete",
        defaultToggled: this.state.force_delete,
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })));
    }
  }]);
  return EncryptionKeyForm;
}(React.Component);
EncryptionKeyForm.defaultProps = {
  data: {
    name: "",
    interval_month: 12,
    root_key: false,
    force_delete: false
  },
  isModal: false
};
EncryptionKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    interval_month: PropTypes__default["default"].number.isRequired,
    root_key: PropTypes__default["default"].bool.isRequired,
    force_delete: PropTypes__default["default"].bool
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
/**
 * Key Management
 */
class KeyManagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSystemDropdown = this.handleSystemDropdown.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle dropdown for key management system
   * @param {event} event event
   */
  handleSystemDropdown(event) {
    let selection = event.target.value; // selected value in dropdown
    selection === "HPCS" ? this.setState({
      use_hs_crypto: true,
      use_data: true
    }) : this.setState({
      use_hs_crypto: false,
      use_data: false
    });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      component: "km-system-dropdown",
      name: "system",
      formName: "system",
      groups: ["Key Protect", "HPCS"],
      value: this.state.use_hs_crypto ? "HPCS" : "Key Protect",
      labelText: "Key Management System",
      handleInputChange: this.handleSystemDropdown,
      className: "fieldWidth"
    }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      tooltip: {
        content: "Get Key Management from Data Source",
        align: "bottom-left"
      },
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      onToggle: this.handleToggle,
      disabled: this.state.use_hs_crypto === true,
      className: "fieldWidth",
      id: "kms-existing"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: this.state.name + "-name",
      value: this.state.name,
      componentProps: this.props,
      component: "key_management",
      componentName: this.props.data.name,
      onChange: this.handleInputChange,
      className: "fieldWidth",
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "resource_group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth"
    })));
  }
}
KeyManagementForm.defaultProps = {
  data: {
    use_hs_crypto: false,
    use_data: false,
    name: "test-key-protect",
    resource_group: "service-rg"
  },
  resourceGroups: ["service-rg", "management-rg", "workload-rg"]
};
KeyManagementForm.propTypes = {
  data: PropTypes__default["default"].shape({
    use_hs_crypto: PropTypes__default["default"].bool.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

>>>>>>> 92f0c0d (removed resourcegroupselect component)
=======
>>>>>>> 7d02243 (fix merge)
/**
 * Key Management
 */
var KeyManagementForm = /*#__PURE__*/function (_Component) {
  _inherits(KeyManagementForm, _Component);
  var _super = _createSuper(KeyManagementForm);
  function KeyManagementForm(props) {
    var _this;
    _classCallCheck(this, KeyManagementForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSystemDropdown = _this.handleSystemDropdown.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(KeyManagementForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle dropdown for key management system
     * @param {event} event event
     */
  }, {
    key: "handleSystemDropdown",
    value: function handleSystemDropdown(event) {
      var selection = event.target.value; // selected value in dropdown
      selection === "HPCS" ? this.setState({
        use_hs_crypto: true,
        use_data: true
      }) : this.setState({
        use_hs_crypto: false,
        use_data: false
      });
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: "km-system-dropdown",
        name: "system",
        formName: "system",
        groups: ["Key Protect", "HPCS"],
        value: this.state.use_hs_crypto ? "HPCS" : "Key Protect",
        labelText: "Key Management System",
        handleInputChange: this.handleSystemDropdown,
        className: "fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Get Key Management from Data Source",
          align: "bottom-left"
        },
        labelText: "Use Existing Instance",
        key: this.state.use_data,
        defaultToggled: this.state.use_data,
        onToggle: this.handleToggle,
        disabled: this.state.use_hs_crypto === true,
        className: "fieldWidth",
        id: "kms-existing"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        value: this.state.name,
        componentProps: this.props,
        component: "key_management",
        componentName: this.props.data.name,
        onChange: this.handleInputChange,
        className: "fieldWidth",
        hideHelperText: true,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth"
      })));
    }
  }]);
  return KeyManagementForm;
}(React.Component);
KeyManagementForm.defaultProps = {
  data: {
    use_hs_crypto: false,
    use_data: false,
    name: "test-key-protect",
    resource_group: "service-rg"
  },
  resourceGroups: ["service-rg", "management-rg", "workload-rg"]
};
KeyManagementForm.propTypes = {
  data: PropTypes__default["default"].shape({
    use_hs_crypto: PropTypes__default["default"].bool.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

var emailRegex = /^[\w-_\.]+@([\w-_]+\.)+[\w]{1,4}$/g;
var TeleportClaimToRoleForm = /*#__PURE__*/function (_Component) {
  _inherits(TeleportClaimToRoleForm, _Component);
  var _super = _createSuper(TeleportClaimToRoleForm);
  function TeleportClaimToRoleForm(props) {
    var _this;
    _classCallCheck(this, TeleportClaimToRoleForm);
    _this = _super.call(this, props);
    _this.state = {
      email: _this.props.data.email,
      roles: _this.props.data.roles
    };
    _this.onChangeTextInput = _this.onChangeTextInput.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    return _this;
  }

  /**
   *
   * @param {String} name specifies name of state value to change
   * @param {String} value value to set it to
   */
  _createClass(TeleportClaimToRoleForm, [{
    key: "onChangeTextInput",
    value: function onChangeTextInput(name, value) {
      if (name === "roles") {
        this.setState(_defineProperty({}, name, [value]));
      } else this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "teleport-claim-form-".concat(this.props.data.email);
      return /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: composedId + "-email",
        componentName: "teleport-claim",
        field: "email",
        invalid: !this.state.email.match(emailRegex),
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.onChangeTextInput("email", event.target.value);
        },
        className: "fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: composedId + "roles",
        componentName: "teleport-claim",
        field: "roles",
        value: this.state.roles[0] || "",
        onChange: function onChange(event) {
          return _this2.onChangeTextInput("roles", event.target.value);
        },
        invalid: this.props.invalidRolesCallback(this.state),
        className: "fieldWidth"
      }));
    }
  }]);
  return TeleportClaimToRoleForm;
}(React.Component);
TeleportClaimToRoleForm.defaultProps = {
  data: {
    email: "",
    roles: []
  }
};
TeleportClaimToRoleForm.propTypes = {
  data: PropTypes__default["default"].shape({
    email: PropTypes__default["default"].string.isRequired,
    roles: PropTypes__default["default"].array.isRequired
  }).isRequired
};

/**
 * Atracker
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} props.data.resource_group
 * @param {string} props.data.cos_bucket
 * @param {string} props.data.cos_key
 * @param {boolean} props.data.add_route
 * @param {Array} props.resourceGroups list of resource groups
 * @param {Array} props.cosBuckets list of cos buckets
 * @param {Array} props.cosKeys list of cos Keys
 * @param {string} props.prefix
 */
var AtrackerForm = /*#__PURE__*/function (_Component) {
  _inherits(AtrackerForm, _Component);
  var _super = _createSuper(AtrackerForm);
  function AtrackerForm(props) {
    var _this;
    _classCallCheck(this, AtrackerForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(AtrackerForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
<<<<<<< HEAD
<<<<<<< HEAD
      this.setState(_defineProperty({}, name, !this.state[name]));
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 7d02243 (fix merge)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: "atracker-form"
      }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Activity Tracker",
        field: "Name",
        labelText: "Name",
        className: "fieldWidth",
        value: this.props.prefix + "-atracker",
        onChange: this.handleInputChange,
        readOnly: true,
        id: "atracker-name",
        invalid: false
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Activity Tracker",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored"
        },
        groups: this.props.cosBuckets,
        formName: "Activity Tracker",
        field: "collector_bucket_name",
        name: "collector_bucket_name",
        value: this.state.collector_bucket_name,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        labelText: "Object Storage Log Bucket",
        invalidText: "Select an Object Storage bucket."
<<<<<<< HEAD
<<<<<<< HEAD
=======
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: "km-system-dropdown",
        name: "system",
        formName: "system",
        groups: ["Key Protect", "HPCS"],
        value: this.state.use_hs_crypto ? "HPCS" : "Key Protect",
        labelText: "Key Management System",
        handleInputChange: this.handleSystemDropdown,
        className: "fieldWidth"
>>>>>>> 55aac62 (trying to fix toggle)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
        },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
        labelText: "Create Activity Tracker Route",
        defaultToggled: this.state.add_route,
        toggleFieldName: "add_route",
        onToggle: this.handleToggle,
        id: "app-id-add-route"
<<<<<<< HEAD
<<<<<<< HEAD
=======
        labelText: "Use Existing Instance",
        key: this.state.use_data,
        defaultToggled: this.state.use_data,
        onToggle: this.handleToggle,
        disabled: this.state.use_hs_crypto === true,
        className: "fieldWidth",
        id: "kms-existing"
>>>>>>> 55aac62 (trying to fix toggle)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "The IAM API key that has writer access to the Cloud Object Storage instance"
        },
        formName: "Activity Tracker",
        name: "atracker_key",
        groups: this.props.cosKeys,
        value: this.state.atracker_key,
        labelText: "Privileged IAM Object Storage Key",
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        invalidText: "Select an Object Storage key."
      })));
    }
  }]);
  return AtrackerForm;
}(React.Component);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
AtrackerForm.defaultProps = {
  isModal: false,
=======
KeyManagementForm.defaultProps = {
  data: {
    use_hs_crypto: false,
    use_data: false,
    name: "test-key-protect",
    resource_group: "service-rg"
  }
};
KeyManagementForm.propTypes = {
>>>>>>> 55aac62 (trying to fix toggle)
=======
AtrackerForm.defaultProps = {
  isModal: false,
>>>>>>> 4c7a274 (fixed formatting for docs)
  data: PropTypes__default["default"].shape({
    cos_bucket: "",
    cos_key: "",
    resource_group: "",
    add_route: false
  }).isRequired
};
AtrackerForm.propTypes = {
  data: PropTypes__default["default"].shape({
    cos_bucket: PropTypes__default["default"].string.isRequired,
    cos_key: PropTypes__default["default"].string.isRequired,
=======
AtrackerForm.defaultProps = {
  isModal: false,
  data: {
    collector_bucket_name: "",
    atracker_key: "",
    resource_group: "",
    add_route: false
  }
};
AtrackerForm.propTypes = {
  data: PropTypes__default["default"].shape({
    collector_bucket_name: PropTypes__default["default"].string.isRequired,
    atracker_key: PropTypes__default["default"].string.isRequired,
>>>>>>> 7d02243 (fix merge)
    resource_group: PropTypes__default["default"].string.isRequired,
    add_route: PropTypes__default["default"].bool.isRequired
  }).isRequired,
  prefix: PropTypes__default["default"].string.isRequired,
  cosKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
=======
var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> b9aa481 (feat: object storage key form)

=======
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);
=======
var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$1);
>>>>>>> b9aa481 (feat: object storage key form)

/**
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
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
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-ssh-key-multiselect",
    useTitleInItem: true,
    label: "SSH Keys",
    titleText: "SSH Keys",
    invalidText: "At least one SSH Key is required",
    invalid: props.initialSelectedItems.length === 0,
    items: props.sshKeys,
    initialSelectedItems: props.initialSelectedItems || [],
    onChange: function onChange(event) {
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
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
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
    onChange: function onChange(event) {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
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
var SubnetMultiSelect = function SubnetMultiSelect(props) {
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
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
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
var VpcListMultiSelect = function VpcListMultiSelect(props) {
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
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
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

=======
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
=======
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
>>>>>>> 353b3a7 ($@)
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
=======
var css_248z = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  top: 20px;\n  z-index: 9001; /* navbar is 9000 */\n  font-size: 80%;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> 72d0b85 (merge)
=======
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
>>>>>>> b6eab56 (example and readme)
styleInject(css_248z);

/**
 * StatefulTabPanel wrapper for non array forms
 * @param {*} props props
 * @param {*} props.form form to put in the create tab
 * @param {*} props.about docs to put in the about tab
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const SaveIcon = (props) => {
  return /*#__PURE__*/ React__default["default"].createElement(
    iconsReact.Save,
    {
      className: props.disabled ? "" : "tertiaryButtonColors",
    }
  );
=======
=======
>>>>>>> 72d0b85 (merge)
var SaveIcon = function SaveIcon(props) {
  return /*#__PURE__*/React__default["default"].createElement(iconsReact.Save, {
    className: props.disabled ? "" : "tertiaryButtonColors"
  });
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
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
=======
>>>>>>> 72d0b85 (merge)
var SaveAddButton = function SaveAddButton(props) {
  return /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : "")
  }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
<<<<<<< HEAD
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
=======
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
>>>>>>> 72d0b85 (merge)
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "add" ? /*#__PURE__*/React__default["default"].createElement(iconsReact.Add, null) : /*#__PURE__*/React__default["default"].createElement(SaveIcon, {
    saveIsDisabled: props.disabled
  })));
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
};
SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
<<<<<<< HEAD
<<<<<<< HEAD
  disabled: false,
=======
  disabled: false
>>>>>>> b5b1ac6 (fixed build)
=======
  disabled: false
>>>>>>> 72d0b85 (merge)
};
SaveAddButton.propTypes = {
  hoverText: PropTypes__default["default"].string.isRequired,
  onClick: PropTypes__default["default"].func,
  disabled: PropTypes__default["default"].bool.isRequired,
  type: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  inline: PropTypes__default["default"].bool.isRequired,
=======
  inline: PropTypes__default["default"].bool.isRequired
>>>>>>> b5b1ac6 (fixed build)
=======
  inline: PropTypes__default["default"].bool.isRequired
>>>>>>> 72d0b85 (merge)
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @param {string=} props.hoverText text for popover hover
 * @param {string} props.type can be `edit` or `add`, defaults to add
 * @param {boolean} props.disabled
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes__default["default"].string,
  onClick: PropTypes__default["default"].func.isRequired,
  disabled: PropTypes__default["default"].bool,
  type: PropTypes__default["default"].string,
<<<<<<< HEAD
<<<<<<< HEAD
  open: PropTypes__default["default"].bool,
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false,
=======
=======
>>>>>>> 72d0b85 (merge)
  open: PropTypes__default["default"].bool
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
};

/**
 * Delete button
 * @param {*} props
 * @param {boolean} props.disabled
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {boolean} props.modalOpen toggle is modal open, defaults to false
=======
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  name: PropTypes__default["default"].string.isRequired,
=======
  name: PropTypes__default["default"].string.isRequired
>>>>>>> b5b1ac6 (fixed build)
=======
  name: PropTypes__default["default"].string.isRequired
>>>>>>> 72d0b85 (merge)
};

/**
 * Up/Down button
 * @param {*} props
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
};
UpDownButtons.propTypes = {
  disableUp: PropTypes__default["default"].bool.isRequired,
  disableDown: PropTypes__default["default"].bool.isRequired,
  name: PropTypes__default["default"].string.isRequired,
<<<<<<< HEAD
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
=======
>>>>>>> 72d0b85 (merge)
  handleUp: PropTypes__default["default"].func.isRequired,
  handleDown: PropTypes__default["default"].func.isRequired
=======
var StatefulTabPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulTabPanel, _React$Component);
  var _super = _createSuper(StatefulTabPanel);
  function StatefulTabPanel(props) {
    var _this;
    _classCallCheck(this, StatefulTabPanel);
    _this = _super.call(this, props);
    _this.state = {
      tabIndex: 0
    };
    _this.setSelectedIndex = _this.setSelectedIndex.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(StatefulTabPanel, [{
    key: "setSelectedIndex",
    value: function setSelectedIndex(event) {
      // if the index is being set to a new tab
      if (this.props.toggleShowChildren && event.selectedIndex !== this.state.tabIndex) this.props.toggleShowChildren();
      this.setState({
        tabIndex: event.selectedIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.props.name && !this.props.hasBuiltInHeading && /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.props.name,
        type: this.props.subHeading ? "subHeading" : "heading",
        className: this.props.className,
        tooltip: this.props.tooltip,
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.hideFormTitleButton || this.state.tabIndex !== 0 || !lazyZ.isFunction(this.props.onClick) || this.props.hasBuiltInHeading,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            type: "add",
            noDeleteButton: true,
            onClick: this.props.onClick,
            disabled: this.props.shouldDisableSave ? this.props.shouldDisableSave() : false
          })
        })
      }), this.props.hideAbout && !this.props.about ? this.props.form : /*#__PURE__*/React__default["default"].createElement(react.Tabs, {
        onChange: this.setSelectedIndex
      }, /*#__PURE__*/React__default["default"].createElement(react.TabList, {
        "aria-label": "formTabs"
      }, /*#__PURE__*/React__default["default"].createElement(react.Tab, null, "Create"), /*#__PURE__*/React__default["default"].createElement(react.Tab, null, "About")), /*#__PURE__*/React__default["default"].createElement(react.TabPanels, null, /*#__PURE__*/React__default["default"].createElement(react.TabPanel, {
        className: "doc"
      }, this.props.form), /*#__PURE__*/React__default["default"].createElement(react.TabPanel, {
        className: "doc"
      }, this.props.about ? this.props.about : /*#__PURE__*/React__default["default"].createElement(UnderConstruction, null)))));
    }
  }]);
  return StatefulTabPanel;
}(React__default["default"].Component);
StatefulTabPanel.defaultProps = {
  subHeading: false,
  hideFormTitleButton: false,
  hideAbout: false,
  hasBuiltInHeading: false
};
StatefulTabPanel.propTypes = {
  name: PropTypes__default["default"].string,
  // can be null
  subHeading: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  // can be null
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  hideFormTitleButton: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func,
  // can be null
  shouldDisableSave: PropTypes__default["default"].func,
  // can be null
  about: PropTypes__default["default"].node,
  // can be null
  form: PropTypes__default["default"].node.isRequired,
  hideAbout: PropTypes__default["default"].bool.isRequired,
  hasBuiltInHeading: PropTypes__default["default"].bool.isRequired
>>>>>>> b6eab56 (example and readme)
};

=======
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
=======
var css_248z = ".cds--tab-content.doc {\r\n    padding: 0.5rem 0;\r\n  }";
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
styleInject(css_248z);
=======
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
styleInject(css_248z$1);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
styleInject(css_248z$1);
>>>>>>> 7d02243 (fix merge)

/**
 * StatefulTabPanel wrapper for non array forms
 * @param {*} props props
 * @param {*} props.form form to put in the create tab
 * @param {*} props.about docs to put in the about tab
 */
var StatefulTabPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(StatefulTabPanel, _React$Component);
  var _super = _createSuper(StatefulTabPanel);
  function StatefulTabPanel(props) {
    var _this;
    _classCallCheck(this, StatefulTabPanel);
    _this = _super.call(this, props);
    _this.state = {
      tabIndex: 0
    };
    _this.setSelectedIndex = _this.setSelectedIndex.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(StatefulTabPanel, [{
    key: "setSelectedIndex",
    value: function setSelectedIndex(event) {
      // if the index is being set to a new tab
      if (this.props.toggleShowChildren && event.selectedIndex !== this.state.tabIndex) this.props.toggleShowChildren();
      this.setState({
        tabIndex: event.selectedIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.props.name && !this.props.hasBuiltInHeading && /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.props.name,
        type: this.props.subHeading ? "subHeading" : "heading",
        className: this.props.className,
        tooltip: this.props.tooltip,
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.hideFormTitleButton || this.state.tabIndex !== 0 || !lazyZ.isFunction(this.props.onClick) || this.props.hasBuiltInHeading,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            type: "add",
            noDeleteButton: true,
            onClick: this.props.onClick,
            disabled: this.props.shouldDisableSave ? this.props.shouldDisableSave() : false
          })
        })
      }), this.props.hideAbout && !this.props.about ? this.props.form : /*#__PURE__*/React__default["default"].createElement(react.Tabs, {
        onChange: this.setSelectedIndex
      }, /*#__PURE__*/React__default["default"].createElement(react.TabList, {
        "aria-label": "formTabs"
      }, /*#__PURE__*/React__default["default"].createElement(react.Tab, null, "Create"), /*#__PURE__*/React__default["default"].createElement(react.Tab, null, "About")), /*#__PURE__*/React__default["default"].createElement(react.TabPanels, null, /*#__PURE__*/React__default["default"].createElement(react.TabPanel, {
        className: "doc"
      }, this.props.form), /*#__PURE__*/React__default["default"].createElement(react.TabPanel, {
        className: "doc"
      }, this.props.about ? this.props.about : /*#__PURE__*/React__default["default"].createElement(UnderConstruction, null)))));
    }
  }]);
  return StatefulTabPanel;
}(React__default["default"].Component);
StatefulTabPanel.defaultProps = {
  subHeading: false,
  hideFormTitleButton: false,
  hideAbout: false,
  hasBuiltInHeading: false
};
StatefulTabPanel.propTypes = {
  name: PropTypes__default["default"].string,
  // can be null
  subHeading: PropTypes__default["default"].bool.isRequired,
  className: PropTypes__default["default"].string,
  // can be null
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string
  }),
  hideFormTitleButton: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func,
  // can be null
  shouldDisableSave: PropTypes__default["default"].func,
  // can be null
  about: PropTypes__default["default"].node,
  // can be null
  form: PropTypes__default["default"].node.isRequired,
  hideAbout: PropTypes__default["default"].bool.isRequired,
  hasBuiltInHeading: PropTypes__default["default"].bool.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b982705 (feat: StatefulTabPanel)
=======
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
class ToggleForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.hide,
<<<<<<< HEAD
=======
=======
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
var ToggleForm = /*#__PURE__*/function (_React$Component) {
  _inherits(ToggleForm, _React$Component);
  var _super = _createSuper(ToggleForm);
  function ToggleForm(props) {
    var _this;
    _classCallCheck(this, ToggleForm);
    _this = _super.call(this, props);
    _this.state = {
      hide: _this.props.hide,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
=======
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
      showDeleteModal: false,
      showUnsavedChangeModal: false,
      disableSave: true,
      disableDelete: false,
      showChildren: true,
      showSubModal: false,
      propsMatchState: true,
      useDefaultUnsavedMessage: true,
      ruleOrderChange: false
    };
    _this.toggleChildren = _this.toggleChildren.bind(_assertThisInitialized(_this));
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_assertThisInitialized(_this));
    _this.toggleUnsavedChangeModal = _this.toggleUnsavedChangeModal.bind(_assertThisInitialized(_this));
    _this.dismissChangesAndClose = _this.dismissChangesAndClose.bind(_assertThisInitialized(_this));
    _this.onSave = _this.onSave.bind(_assertThisInitialized(_this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    _this.shouldDisableSave = _this.shouldDisableSave.bind(_assertThisInitialized(_this));
    _this.shouldShow = _this.shouldShow.bind(_assertThisInitialized(_this));
    _this.networkRuleOrderDidChange = _this.networkRuleOrderDidChange.bind(_assertThisInitialized(_this));
    _this.toggleShowChildren = _this.toggleShowChildren.bind(_assertThisInitialized(_this));
    _this.onToggleSubModal = _this.onToggleSubModal.bind(_assertThisInitialized(_this));
    _this.childRef = /*#__PURE__*/React__default["default"].createRef();
    return _this;
  }

  /**
   * toggle sub modal
   */
  _createClass(ToggleForm, [{
    key: "onToggleSubModal",
    value: function onToggleSubModal() {
      this.setState({
        showSubModal: !this.state.showSubModal
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.hide === true && this.shouldShow() === true) {
        this.setState({
          hide: false
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.hide !== this.state.hide && this.props.onShowToggle) {
        this.props.onShowToggle(this.props.index);
      }
    }

    /**
     * toggle children rendered by form
     */
  }, {
    key: "toggleChildren",
    value: function toggleChildren() {
      var _this$childRef$curren;
      if ((_this$childRef$curren = this.childRef.current) !== null && _this$childRef$curren !== void 0 && _this$childRef$curren.state) {
        var stateData = this.childRef.current.state;
        var componentProps = this.childRef.current.props;
        var propsDoNotMatch = this.props.propsMatchState(this.props.submissionFieldName, stateData, componentProps) === false;
        if (propsDoNotMatch || this.state.useDefaultUnsavedMessage === false) {
          this.toggleUnsavedChangeModal();
        } else {
          this.setState({
            hide: !this.state.hide
          });
        }
      } else {
        this.setState({
          hide: !this.state.hide
        });
      }
    }

    /**
     * toggle delete modal
     */
  }, {
    key: "toggleDeleteModal",
    value: function toggleDeleteModal() {
      this.setState({
        showDeleteModal: !this.state.showDeleteModal
      });
    }

    /**
     * toggle unsaved changes modal
     */
  }, {
    key: "toggleUnsavedChangeModal",
    value: function toggleUnsavedChangeModal() {
      this.setState({
        showUnsavedChangeModal: !this.state.showUnsavedChangeModal
      });
    }

    /**
     * Dismiss changes and close
     */
  }, {
    key: "dismissChangesAndClose",
    value: function dismissChangesAndClose() {
      this.setState({
        showUnsavedChangeModal: false,
        hide: true
      });
    }

    /**
     * on save
     */
  }, {
    key: "onSave",
    value: function onSave() {
      this.props.onSave(this.childRef.current.state, this.childRef.current.props);
      this.setState({
        useDefaultUnsavedMessage: true
      });
    }

    /**
     * on delete
     */
  }, {
    key: "onDelete",
    value: function onDelete() {
      var _this$childRef$curren2, _this$childRef$curren3;
      this.props.onShowToggle(this.props.index);
      this.props.onDelete((_this$childRef$curren2 = this.childRef.current) === null || _this$childRef$curren2 === void 0 ? void 0 : _this$childRef$curren2.state, (_this$childRef$curren3 = this.childRef.current) === null || _this$childRef$curren3 === void 0 ? void 0 : _this$childRef$curren3.props);
      this.setState({
        hide: true,
        showDeleteModal: false
      });
    }

    /**
     * should disable save
     * @param {*} stateData state data
     * @param {*} componentProps component props
     */
  }, {
    key: "shouldDisableSave",
    value: function shouldDisableSave(stateData, componentProps) {
      var enableSave = this.props.disableSave(this.props.submissionFieldName, stateData, componentProps) === false;
      var propsDoNotMatch = this.props.propsMatchState(this.props.submissionFieldName, stateData, componentProps) === false;
      if (enableSave === false && this.state.useDefaultUnsavedMessage && propsDoNotMatch === false) {
        this.setState({
          useDefaultUnsavedMessage: false
        });
      } else if (enableSave && propsDoNotMatch && this.state.disableSave) {
        this.setState({
          disableSave: false,
          propsMatchState: false
        });
      } else if (!this.state.disableSave && (!enableSave || !propsDoNotMatch)) {
        this.setState({
          disableSave: true,
          propsMatchState: !propsDoNotMatch
        });
      }
    }
  }, {
    key: "shouldShow",
    value: function shouldShow() {
      return this.props.forceOpen(this.state, this.props);
    }
  }, {
    key: "networkRuleOrderDidChange",
    value: function networkRuleOrderDidChange(didNotChange) {
      var didChange = !didNotChange;
      if (this.state.ruleOrderChange !== didChange) {
        this.setState({
          ruleOrderChange: didChange
        });
      }
    }
  }, {
    key: "toggleShowChildren",
    value: function toggleShowChildren() {
      this.setState({
        showChildren: !this.state.showChildren
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _objectSpread2$1;
      if (this.props.noDeleteButton !== true && !this.props.onDelete) {
        throw new Error("ToggleForm expects onDelete Function to be passed when a delete button is rendered");
      }
      if (this.props.noSaveButton !== true && !this.props.onSave) {
        throw new Error("ToggleForm expects onSave Function to be passed when a save button is rendered");
      }
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StatefulTabPanel, _extends({}, this.props.tabPanel ? this.props.tabPanel : {}, {
        toggleShowChildren: this.toggleShowChildren,
        form: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.props.name && !this.props.hideName && /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
          name: this.props.name,
          hideButton: true
        }), /*#__PURE__*/React__default["default"].createElement("div", {
          className: lib_2(this.props.type === "formInSubForm" ? "formInSubForm positionRelative marginBottomSmall" : "subForm marginBottomSmall")
        }, /*#__PURE__*/React__default["default"].createElement(StatelessToggleForm, {
          hide: this.state.hide,
          iconType: this.props.useAddButton ? "add" : "edit",
          onIconClick: this.toggleChildren,
          toggleFormTitle: true,
          name: this.props.name,
          buttons: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
            hide: this.props.addButtonAtFormTitle !== true,
            show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
              type: "add",
              onClick: this.onToggleSubModal,
              noDeleteButton: true
            })
          }), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
            hide: this.props.noSaveButton || this.props.addButtonAtFormTitle,
            show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
              onClick: this.onSave,
              disabled: this.state.disableSave,
              noDeleteButton: this.props.noDeleteButton
            })
          }), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
            hide: this.props.noDeleteButton,
            show: /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
              onClick: this.toggleDeleteModal,
              name: this.props.name,
              disabled: this.props.deleteDisabled(this.props),
              disableDeleteMessage: function disableDeleteMessage() {
                return _this2.props.disableDeleteMessage(_this2.props);
              }
            })
          }))
        }, /*#__PURE__*/React__default["default"].createElement(UnsavedChangesModal, {
          name:
          // use tab panel name if passed
          this.props.tabPanel ? this.props.tabPanel.name : this.props.name,
          modalOpen: this.state.showUnsavedChangeModal,
          onModalClose: this.toggleUnsavedChangeModal,
          onModalSubmit: this.dismissChangesAndClose,
          useDefaultUnsavedMessage: this.state.useDefaultUnsavedMessage
        }), /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
          name:
          // use tab panel name if passed
          this.props.tabPanel ? this.props.tabPanel.name : this.props.name,
          modalOpen: this.state.showDeleteModal,
          onModalClose: this.toggleDeleteModal,
          onModalSubmit: this.onDelete
        }), RenderForm(this.props.innerForm, _objectSpread2(_objectSpread2({}, this.props.innerFormProps), {}, (_objectSpread2$1 = {
          ref: this.props.nullRef ? null : this.childRef,
          shouldDisableSave: this.shouldDisableSave,
          showSubModal: this.state.showSubModal,
          networkRuleOrderDidChange: this.networkRuleOrderDidChange,
          onChildShowToggle: this.props.onChildShowToggle,
          shownChildren: this.props.shownChildren,
          handleModalToggle: this.onToggleSubModal
        }, _defineProperty(_objectSpread2$1, "showSubModal", this.state.showSubModal), _defineProperty(_objectSpread2$1, "saveFromChildForm", {
          onSave: this.onSave,
          disableSave: this.state.disableSave
        }), _objectSpread2$1)))))),
        about: this.props.about || false
      })), this.state.showChildren && this.props.children ? this.props.children : "");
    }
  }]);
  return ToggleForm;
}(React__default["default"].Component);
ToggleForm.defaultProps = {
  hide: true,
  unsavedChanges: false,
  index: 0,
  type: "subForm",
  nullRef: false,
  noDeleteButton: false,
  noSaveButton: false,
  useAddButton: false,
  hideName: false,
  // functions that return booleans must have a default
  deleteDisabled: function deleteDisabled() {
    return false;
  },
  forceOpen: function forceOpen() {
    return false;
  }
};
ToggleForm.propTypes = {
  name: PropTypes__default["default"].string,
  hideName: PropTypes__default["default"].bool.isRequired,
  onDelete: PropTypes__default["default"].func,
  onSave: PropTypes__default["default"].func,
  onShowToggle: PropTypes__default["default"].func,
  index: PropTypes__default["default"].number.isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  submissionFieldName: PropTypes__default["default"].string.isRequired,
  propsMatchState: PropTypes__default["default"].func.isRequired,
  disableSave: PropTypes__default["default"].func.isRequired,
  forceOpen: PropTypes__default["default"].func,
  // can be null
  deleteDisabled: PropTypes__default["default"].func,
  // can be null
  disableDeleteMessage: PropTypes__default["default"].func,
  // can be null
  type: PropTypes__default["default"].string.isRequired,
  nullRef: PropTypes__default["default"].bool.isRequired,
  innerFormProps: PropTypes__default["default"].object,
  // can be null
  noDeleteButton: PropTypes__default["default"].bool.isRequired,
  noSaveButton: PropTypes__default["default"].bool.isRequired,
  useAddButton: PropTypes__default["default"].bool.isRequired,
  tabPanel: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    hideFormTitleButton: PropTypes__default["default"].bool // can be null
  }).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f680a35 (almost done)
=======
=======
>>>>>>> 7d02243 (fix merge)
var css_248z = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z);

/**
 * ssh key form
 */
var SshKeyForm = /*#__PURE__*/function (_Component) {
  _inherits(SshKeyForm, _Component);
  var _super = _createSuper(SshKeyForm);
  function SshKeyForm(props) {
    var _this;
    _classCallCheck(this, SshKeyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle other input events
   * @param {*} event
   */
  _createClass(SshKeyForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name + "-ssh-key-name",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "resource_group",
        formName: "".concat(lazyZ.kebabCase(this.props.data.name), "-ssh-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalidText: "Select a Resource Group.",
        labelText: "Resource Group"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        className: "fieldWidthBigger leftTextAlign"
      }, /*#__PURE__*/React__default["default"].createElement(react.TextInput.PasswordInput, {
        labelText: "Public Key",
        name: "public_key",
        id: this.props.data.name + "-ssh-public-key",
        value: this.state.public_key,
        onChange: this.handleInputChange,
        invalid: this.props.invalidKeyCallback(this.state.public_key).invalid,
        invalidText: this.props.invalidKeyCallback(this.state.public_key).invalidText
      }))));
    }
  }]);
  return SshKeyForm;
}(React.Component);
SshKeyForm.defaultProps = {
  data: {
    name: "",
    public_key: ""
  },
  resourceGroups: [],
  isModal: false
};
SshKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string,
    public_key: PropTypes__default["default"].string.isRequired
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  invalidKeyCallback: PropTypes__default["default"].func.isRequired
};

<<<<<<< HEAD
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
<<<<<<< HEAD
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
=======
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> dc1cdcb (arrayOf)
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> 7d02243 (fix merge)
exports.DeleteModal = DeleteModal;
exports.DynamicRender = DynamicRender;
exports.DynamicToolTipWrapper = DynamicToolTipWrapper;
exports.EditCloseIcon = EditCloseIcon;
exports.EmptyResourceTile = EmptyResourceTile;
exports.EncryptionKeyForm = EncryptionKeyForm;
exports.EntitlementSelect = EntitlementSelect;
exports.FetchSelect = FetchSelect;
exports.FormModal = FormModal;
exports.IcseFormGroup = IcseFormGroup;
exports.IcseHeading = IcseHeading;
exports.IcseModal = IcseModal;
exports.IcseMultiSelect = IcseMultiSelect;
exports.IcseNameInput = IcseNameInput;
exports.IcseNumberSelect = IcseNumberSelect;
exports.IcseSelect = IcseSelect;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
exports.IcseSubForm = IcseSubForm;
exports.IcseTextInput = IcseTextInput;
exports.IcseToggle = IcseToggle;
exports.IcseToolTip = IcseToolTip;
exports.KeyManagementForm = KeyManagementForm;
exports.ObjectStorageKeyForm = ObjectStorageKeyForm;
exports.PopoverWrapper = PopoverWrapper;
exports.RenderForm = RenderForm;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 72d0b85 (merge)
=======
exports.ResourceGroupSelect = ResourceGroupSelect;
>>>>>>> b18f05c (added documentation for KeyManagementForm)
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
<<<<<<< HEAD
exports.SccForm = SccForm;
<<<<<<< HEAD
=======
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
>>>>>>> dc1cdcb (arrayOf)
=======
exports.SecretsManagerForm = SecretsManagerForm;
>>>>>>> 1e428a4 (SecretsManager form)
=======
exports.ResourceGroupSelect = ResourceGroupSelect;
=======
>>>>>>> 92f0c0d (removed resourcegroupselect component)
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
exports.SecretsManagerForm = SecretsManagerForm;
>>>>>>> 159e1d3 (fix: remove log and bind)
=======
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
exports.SccForm = SccForm;
exports.SecretsManagerForm = SecretsManagerForm;
>>>>>>> 7d02243 (fix merge)
exports.SecurityGroupMultiSelect = SecurityGroupMultiSelect;
exports.SshKeyForm = SshKeyForm;
exports.SshKeyMultiSelect = SshKeyMultiSelect;
exports.StatefulTabPanel = StatefulTabPanel;
exports.StatelessToggleForm = StatelessToggleForm;
exports.SubnetMultiSelect = SubnetMultiSelect;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> 7d02243 (fix merge)
exports.TitleGroup = TitleGroup;
exports.ToggleForm = ToggleForm;
exports.ToolTipWrapper = ToolTipWrapper;
exports.UnderConstruction = UnderConstruction;
exports.UnsavedChangesModal = UnsavedChangesModal;
exports.UpDownButtons = UpDownButtons;
exports.VpcListMultiSelect = VpcListMultiSelect;
<<<<<<< HEAD
<<<<<<< HEAD
exports.VpnGatewayForm = VpnGatewayForm;
=======
exports.WorkerPoolForm = WorkerPoolForm;
>>>>>>> 353b3a7 ($@)
exports.buildFormDefaultInputMethods = buildFormDefaultInputMethods;
exports.buildFormFunctions = buildFormFunctions;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
exports.VpnGatewayForm = VpnGatewayForm;
exports.WorkerPoolForm = WorkerPoolForm;
exports.buildFormDefaultInputMethods = buildFormDefaultInputMethods;
exports.buildFormFunctions = buildFormFunctions;
>>>>>>> 7d02243 (fix merge)
