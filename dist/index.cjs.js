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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
=======
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
var React = require('react');
var PropTypes = require('prop-types');
>>>>>>> 7d02243 (fix merge)
=======
var React = require('react');
var PropTypes = require('prop-types');
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
var lazyZ = require('lazy-z');
var react = require('@carbon/react');
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
require('@carbon/styles/css/styles.css');
>>>>>>> 3b432fa (add carbon styles (#52))
=======
require('@carbon/styles/css/styles.css');
>>>>>>> 2a431c4 (feat: better exports)
var react = require('@carbon/react');
var lazyZ = require('lazy-z');
var React = require('react');
var PropTypes = require('prop-types');
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
var iconsReact = require('@carbon/icons-react');
var regexButWithWords = require('regex-but-with-words');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
var lazyZ__default = /*#__PURE__*/_interopDefaultLegacy(lazyZ);

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue$2 = _require2.eventTargetToNameAndValue,
  toggleStateBoolean$2 = _require2.toggleStateBoolean,
  setNameToValue$2 = _require2.setNameToValue;
=======
var regexButWithWords__default = /*#__PURE__*/_interopDefaultLegacy(regexButWithWords);
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
var regexButWithWords__default = /*#__PURE__*/_interopDefaultLegacy(regexButWithWords);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var regexButWithWords__default = /*#__PURE__*/_interopDefaultLegacy(regexButWithWords);
>>>>>>> 2a431c4 (feat: better exports)

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 353b3a7 ($@)
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> 817ead3 (update build)

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
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom$1(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}

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
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1
};

const {
  kebabCase: kebabCase$1
} = lazyZ__default["default"];

/**
 * format input placeholder
 * @param {string} componentName
 * @param {string} fieldName
 * @returns {string} placeholder name
 */
function formatInputPlaceholder$1(componentName, fieldName) {
  return `my-${kebabCase$1(componentName)}-${kebabCase$1(fieldName)}`;
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

const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  invalidRegex
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
  saveChangeButtonClass
} = buttonUtils;
const {
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
} = methodFunctions;
var lib = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  formatInputPlaceholder,
  saveChangeButtonClass,
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1,
  invalidRegex
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.prependEmptyStringWhenNull;
var lib_4 = lib.checkNullorEmptyString;
var lib_5 = lib.formatInputPlaceholder;
var lib_6 = lib.saveChangeButtonClass;
var lib_10 = lib.invalidRegex;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

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
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

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
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
<<<<<<< HEAD
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
=======
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
  checkNullorEmptyString,
  invalidRegex
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======

>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======

>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$8 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$8);
=======
var css_248z$e = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$e);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$f = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$f);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$e = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$e);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$f = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$f);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))
=======
var css_248z$g = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$g);
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))

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
<<<<<<< HEAD
  return composedClassName;
}
=======

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
<<<<<<< HEAD
var css_248z$d = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$d);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$e = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$e);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$d = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$d);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$e = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$e);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))
=======
var css_248z$f = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$f);
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var UnderConstruction = function UnderConstruction() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};
=======
=======
const SaveIcon = props => {
=======
var SaveIcon = function SaveIcon(props) {
>>>>>>> 8d61926 (feat: stories for empty resource tile and under construction)
=======
const SaveIcon = props => {
>>>>>>> 44e3e9d (Issue 747, 746, 738, 737, 763 (#59))
=======
var SaveIcon = function SaveIcon(props) {
>>>>>>> 0029142 (Migrated VpnGatewayForm to storybook (Issue #762) (#65))
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
    align: props.hoverTextAlign,
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
  disabled: false,
  hoverTextAlign: "bottom"
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  hoverTextAlign: PropTypes__default["default"].string.isRequired
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

<<<<<<< HEAD
>>>>>>> b6bcf3f (feat: utils stories)
var _require = require("lazy-z"),
  isFunction = _require.isFunction;
=======
var _require$1 = require("lazy-z"),
  isFunction = _require$1.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue = _require2.eventTargetToNameAndValue,
  toggleStateBoolean = _require2.toggleStateBoolean,
  setNameToValue = _require2.setNameToValue;
>>>>>>> 9774a8a (Issue 698: Networking Rule Form (#86))

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
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var css_248z$a = ".displayFlex {\r\n  display: flex;\r\n}\r\n.fitContent {\r\n  width: fit-content;\r\n}\r\n\r\n.alignItemsCenter {\r\n  align-items: center;\r\n}\r\n\r\n.widthOneHundredPercent{\r\n  width: 100%;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 2rem;\r\n}\r\n  \r\n.marginBottomSmall {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.evenSpacing {\r\n  gap: 3vw;\r\n}\r\n\r\n.positionRelative {\r\n  position: relative;\r\n}\r\n\r\n.formInSubForm {\r\n  margin-top: 0rem;\r\n  background: #fffdfd;\r\n  padding: 1rem;\r\n}\r\n\r\n.subForm {\r\n  background: #f4f4f4;\r\n  padding: 1rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.icseFormTitleMinHeight {\r\n  min-height: 32px;\r\n}\r\n\r\n.spaceBetween {\r\n  justify-content: space-between;\r\n}\r\n";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$a);
=======
var css_248z$b = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$b);
>>>>>>> 01e0136 (classNames now as default prop (#40))

var css_248z$a = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$a);

>>>>>>> 7d02243 (fix merge)
=======
var css_248z$b = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
=======
var css_248z$b = ".displayFlex {\r\n  display: flex;\r\n}\r\n\r\n.fitContent {\r\n  width: fit-content;\r\n}\r\n\r\n.alignItemsCenter {\r\n  align-items: center;\r\n}\r\n\r\n.widthOneHundredPercent {\r\n  width: 100%;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.marginBottomSmall {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.evenSpacing {\r\n  gap: 3vw;\r\n}\r\n\r\n.positionRelative {\r\n  position: relative;\r\n}\r\n\r\n.formInSubForm {\r\n  margin-top: 0rem;\r\n  background: #fffdfd;\r\n  padding: 1rem;\r\n}\r\n\r\n.subForm {\r\n  background: #f4f4f4;\r\n  padding: 1rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.icseFormTitleMinHeight {\r\n  min-height: 32px;\r\n}\r\n\r\n.spaceBetween {\r\n  justify-content: space-between;\r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$b);
=======
var css_248z$c = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
=======
var css_248z$d = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
=======
var css_248z$d = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))
styleInject(css_248z$d);

var css_248z$c = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$c = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
styleInject(css_248z$c);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$a = ".labelRow {\r\n  display: inline-flex !important;\r\n  align-items: center;\r\n}\r\n\r\n.tooltip > div div.cds--password-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--toggle {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--text-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.popover-obj {\r\n  margin-top: -8px;\r\n}\r\n\r\n.subHeadingTooltip {\r\n  margin: 0.2rem 0 0 0.2rem;\r\n}\r\n\r\n.tooltipMarginLeft {\r\n  margin-left: 3px;\r\n}\r\n";
styleInject(css_248z$a);

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
=======
var css_248z$e = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$e);

var css_248z$d = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z$d);

>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
var DocTextField = function DocTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired
};
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React__default["default"].createElement(react.StructuredListHead, null, /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React__default["default"].createElement(react.StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes__default["default"].array,
  list: PropTypes__default["default"].array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React__default["default"].createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes__default["default"].array.isRequired
};
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
    /*#__PURE__*/
    // text field
    React__default["default"].createElement(DocTextField, _extends({
      key: index
    }, field)) : field.subHeading ?
    /*#__PURE__*/
    // subheading
    React__default["default"].createElement("h6", {
      className: "marginBottomSmall",
      key: index
    }, field.subHeading) :
    /*#__PURE__*/
    // table
    React__default["default"].createElement(DocTable, {
      key: index,
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React__default["default"].createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    text: PropTypes__default["default"].string,
    className: PropTypes__default["default"].string,
    table: PropTypes__default["default"].array,
    subHeading: PropTypes__default["default"].string
  })).isRequired,
  relatedLinks: PropTypes__default["default"].array
};

<<<<<<< HEAD
var css_248z$b = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$b);

>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$c = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$c);

>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
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
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);
=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
=======
var css_248z$9 = ".popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  font-size: 80%;\r\n  top: 20px;\r\n}\r\n\r\n.cds--popover--open .cds--popover-content {\r\n  position: relative;\r\n  z-index: 9001;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$9);
>>>>>>> 01e0136 (classNames now as default prop (#40))

var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> 353b3a7 ($@)
styleInject(css_248z$7);
=======
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
styleInject(css_248z$9);

var css_248z$8 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$8);
>>>>>>> 817ead3 (update build)

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
=======
var css_248z$8 = ".popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  font-size: 80%;\r\n  z-index: 9001;\r\n  top: 20px;\r\n}\r\n";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$8);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$8 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$8);
>>>>>>> 7d02243 (fix merge)

=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$9);

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7d02243 (fix merge)
var css_248z$7 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
=======
var css_248z$7 = ".chevron {\r\n  margin-right: 1rem;\r\n  margin-top: 0.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.tertiaryButtonColors {\r\n  color: #0f62fe !important;\r\n  fill: white !important;\r\n  border-color: #0f62fe !important;\r\n}\r\n\r\n.pointerEventsNone {\r\n  pointer-events: none;\r\n}\r\n\r\n.cursorNotAllowed {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.forceTertiaryButtonStyles {\r\n  padding-right: 0.4375rem !important;\r\n  padding-left: 0.4375rem !important;\r\n}\r\n.inlineBlock {\r\n  display: inline-block;\r\n}\r\n\r\n.redFill {\r\n  fill: #da1e28 !important;\r\n}\r\n\r\n/* CSS for overriding default component styles */\r\n.cds--btn--ghost:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.marginRightSmall {\r\n  margin-right: 0.5rem;\r\n}\r\n";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$7);
=======
var css_248z$8 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$8);
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
var css_248z$8 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$8);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

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
=======
var css_248z$c = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$c);
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
var css_248z$c = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$c);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$d = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$d);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$e = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$e);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$d = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$d);
>>>>>>> 2a431c4 (feat: better exports)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 353b3a7 ($@)
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
styleInject(css_248z$6);
=======
var css_248z$7 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
styleInject(css_248z$7);
>>>>>>> 817ead3 (update build)
=======
var css_248z$8 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
=======
var css_248z$8 = ".chevron {\r\n  margin-right: 1rem;\r\n  margin-top: 0.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.tertiaryButtonColors {\r\n  color: #0f62fe !important;\r\n  fill: white !important;\r\n  border-color: #0f62fe !important;\r\n}\r\n\r\n.pointerEventsNone {\r\n  pointer-events: none;\r\n}\r\n\r\n.cursorNotAllowed {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.forceTertiaryButtonStyles {\r\n  padding-right: 0.4375rem !important;\r\n  padding-left: 0.4375rem !important;\r\n}\r\n.inlineBlock {\r\n  display: inline-block;\r\n}\r\n\r\n.redFill {\r\n  fill: #da1e28 !important;\r\n}\r\n\r\n/* CSS for overriding default component styles */\r\n.cds--btn--ghost:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.marginRightSmall {\r\n  margin-right: 0.5rem !important; \r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$8);
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
var css_248z$b = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$b);
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
var css_248z$b = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$b);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$c = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$c);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$d = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$d);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$c = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important; \n}\n";
styleInject(css_248z$c);
>>>>>>> 2a431c4 (feat: better exports)

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
 * @returns Save add button
 */
var SaveAddButton = function SaveAddButton(props) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
  disabled: PropTypes__default["default"].bool.isRequired,
  type: PropTypes__default["default"].string.isRequired,
  open: PropTypes__default["default"].bool.isRequired
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false,
  disabled: false
};

/**
 * Delete button
 * @param {*} props
 */
var DeleteButton = function DeleteButton(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
    hoverText: props.disabled && props.disableDeleteMessage ? props.disableDeleteMessage : "Delete Resource",
    align: props.hoverTextAlign,
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
  disabled: false,
  hoverTextAlign: "bottom"
};
DeleteButton.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  onClick: PropTypes__default["default"].func.isRequired,
  hoverTextAlign: PropTypes__default["default"].string.isRequired,
  disableDeleteMessage: PropTypes__default["default"].string
};

/**
 * Up/Down button
 * @param {*} props
<<<<<<< HEAD
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
 * @param {Function} props.handleUp
 * @param {Function} props.handleDown
 *
=======
>>>>>>> 2a431c4 (feat: better exports)
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

var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue = _require2.eventTargetToNameAndValue,
  toggleStateBoolean = _require2.toggleStateBoolean,
  setNameToValue = _require2.setNameToValue;

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$a = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z$9);

var DocTextField = function DocTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired
};
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React__default["default"].createElement(react.StructuredListHead, null, /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React__default["default"].createElement(react.StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes__default["default"].array,
  list: PropTypes__default["default"].array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React__default["default"].createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes__default["default"].array.isRequired
};
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
    /*#__PURE__*/
    // text field
    React__default["default"].createElement(DocTextField, _extends({
      key: index
    }, field)) : field.subHeading ?
    /*#__PURE__*/
    // subheading
    React__default["default"].createElement("h6", {
      className: "marginBottomSmall",
      key: index
    }, field.subHeading) :
    /*#__PURE__*/
    // table
    React__default["default"].createElement(DocTable, {
      key: index,
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React__default["default"].createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    text: PropTypes__default["default"].string,
    className: PropTypes__default["default"].string,
    table: PropTypes__default["default"].array,
    subHeading: PropTypes__default["default"].string
  })).isRequired,
  relatedLinks: PropTypes__default["default"].array
};

var css_248z$8 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$8);

=======
var css_248z$a = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$a);
=======
var css_248z$b = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$b);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$c = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$c);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))

>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$b = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$b);

>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);
=======
var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$5);
>>>>>>> 353b3a7 ($@)
=======
var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);
>>>>>>> 817ead3 (update build)

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
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
BuildToolTip.defaultProps = {
  tooltip: {
    content: ""
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var css_248z$6 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.leftTextAlign {\r\n  text-align: left;\r\n}";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$6);
=======
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);
>>>>>>> 817ead3 (update build)

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$7);

<<<<<<< HEAD
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$7);

<<<<<<< HEAD
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> f849341 (access group forms :100:)
=======
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var css_248z$7 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.leftTextAlign {\r\n  text-align: left;\r\n}";
styleInject(css_248z$7);

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
>>>>>>> 007ab0d (cos bucket form)
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
    labelA: props.useOnOff ? "Off" : "False",
    labelB: props.useOnOff ? "On" : "True",
    labelText: props.tooltip ? " " : props.labelText,
    id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
    className: lib_2("leftTextAlign", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
    ,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    onToggle: function onToggle(event) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    onToggle: event => {
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
    onToggle: function onToggle(event) {
>>>>>>> f849341 (access group forms :100:)
=======
    onToggle: event => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    onToggle: function onToggle(event) {
>>>>>>> 007ab0d (cos bucket form)
      props.onToggle(toggleName, event);
    },
    defaultToggled: props.defaultToggled,
    disabled: props.disabled
  }));
<<<<<<< HEAD
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
};
IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
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
<<<<<<< HEAD

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
    className: lib_2("leftTextAlign", props),
    labelText: props.labelText ? props.labelText : lazyZ.titleCase(props.field),
<<<<<<< HEAD
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
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
  hideHelperText: false,
  className: "fieldWidth"
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
=======
var ToolTipWrapper = function ToolTipWrapper(props) {
  var allProps = _objectSpread2({}, props);
  var tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined) {
    throw new Error("ToolTipWrapper expects `props.labelText` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
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
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$7 = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$7);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const IcseSelect = props => {
  let invalid =
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
var IcseSelect = function IcseSelect(props) {
  var invalid =
>>>>>>> f849341 (access group forms :100:)
=======
const IcseSelect = props => {
  let invalid =
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var IcseSelect = function IcseSelect(props) {
  var invalid =
>>>>>>> 007ab0d (cos bucket form)
=======
var css_248z$9 = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$9);
=======
var css_248z$a = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$a);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$b = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$b);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$a = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$a);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$b = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$b);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$c = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$c);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))
=======
var css_248z$b = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$b);
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))

var IcseSelect = function IcseSelect(props) {
  var invalid =
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$a = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$a);
=======
var css_248z$b = ".textInputMedium {\n  width: 20rem;\n}";
styleInject(css_248z$b);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))

var IcseSelect = function IcseSelect(props) {
  var invalid =
>>>>>>> 2a431c4 (feat: better exports)
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && lazyZ.isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
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
    innerForm: function innerForm() {
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
        className: lib_2("leftTextAlign", props),
        disabled: props.disabled,
        invalid: invalid,
        invalidText: props.invalidText,
        readOnly: props.readOnly,
        onChange: props.handleInputChange
      }, groups.map(function (value) {
        return /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
          key: "".concat(props.id, "-").concat(value),
          text: value,
          value: value
        });
      })));
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
  debug: false,
  className: "fieldWidth"
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
class FetchSelect extends React__default["default"].Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 007ab0d (cos bucket form)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
var FetchSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(FetchSelect, _React$Component);
  var _super = _createSuper(FetchSelect);
  function FetchSelect(props) {
    var _this;
    _classCallCheck(this, FetchSelect);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "_isMounted", false);
    _this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
>>>>>>> 007ab0d (cos bucket form)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
      data: []
    };
    _this.dataToGroups = _this.dataToGroups.bind(_assertThisInitialized(_this));
    return _this;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
  componentDidMount() {
    this._isMounted = true;
    if (lazyZ.isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(res => res.json()).then(data => {
      if (this.props.onReturnFunction) {
        this.props.onReturnFunction(data);
<<<<<<< HEAD
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
=======
=======
>>>>>>> 007ab0d (cos bucket form)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f849341 (access group forms :100:)
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
=======
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
      }
      if (this._isMounted) this.setState({
        data: data
=======
>>>>>>> 007ab0d (cos bucket form)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
var IcseNumberSelect = function IcseNumberSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    formName: props.formName,
    groups: lazyZ.buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
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
var EntitlementSelect = function EntitlementSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    name: props.name,
    labelText: "Entitlement",
    groups: ["null", "cloud_pak"],
    value: props.value || "null",
    handleInputChange: props.handleInputChange,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
var IcseSelect = function IcseSelect(props) {
  var invalid =
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && lazyZ.isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
    id: lazyZ.kebabCase(props.name) + "-dropdown-tooltip",
    innerForm: function innerForm() {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
      }, groups.map(value => /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
        key: `${props.id}-${value}`,
        text: value,
        value: value
      }))));
=======
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
      }, groups.map(function (value) {
        return /*#__PURE__*/React__default["default"].createElement(react.SelectItem, {
          key: "".concat(props.id, "-").concat(value),
          text: value,
          value: value
        });
      })));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
  tooltip: PropTypes__default["default"].shape({
    content: PropTypes__default["default"].string.isRequired,
    link: PropTypes__default["default"].string,
    alignModal: PropTypes__default["default"].string,
    align: PropTypes__default["default"].string
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
<<<<<<< HEAD
  }]);
  return FetchSelect;
}(React__default["default"].Component);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
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
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
<<<<<<< HEAD
<<<<<<< HEAD
const IcseNumberSelect = props => {
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 7d02243 (fix merge)
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
const IcseNumberSelect = props => {
>>>>>>> 01e0136 (classNames now as default prop (#40))
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    formName: props.formName,
    groups: lazyZ.buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    handleInputChange: event => {
      // set name target value and parse int
      let sendEvent = {
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
<<<<<<< HEAD
<<<<<<< HEAD
const EntitlementSelect = props => {
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 72d0b85 (merge)
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 7d02243 (fix merge)
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
const EntitlementSelect = props => {
>>>>>>> 01e0136 (classNames now as default prop (#40))
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    name: props.name,
    labelText: "Entitlement",
    groups: ["null", "cloud_pak"],
    value: props.value || "null",
    handleInputChange: props.handleInputChange,
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
    className: props.className,
    formName: props.formName
  });
};
EntitlementSelect.propTypes = {
  value: PropTypes__default["default"].string,
  // can be null
  handleInputChange: PropTypes__default["default"].func.isRequired,
  formName: PropTypes__default["default"].string.isRequired,
  name: PropTypes__default["default"].string.isRequired,
  className: PropTypes__default["default"].string
};
EntitlementSelect.defaultProps = {
  className: "fieldWidthSmaller"
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
<<<<<<< HEAD
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
=======
var css_248z$6 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$6);
=======
var css_248z$8 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$8);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 2a431c4 (feat: better exports)
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$b = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$b);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

var EmptyResourceTile = function EmptyResourceTile(props) {
  return !props.showIfEmpty || props.showIfEmpty.length === 0 ? /*#__PURE__*/React__default["default"].createElement(react.Tile, {
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
  name: "items in this list",
  showIfEmpty: false
};
EmptyResourceTile.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  showIfEmpty: PropTypes__default["default"].oneOfType([PropTypes__default["default"].array, PropTypes__default["default"].bool]).isRequired,
  instructions: PropTypes__default["default"].string
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
=======
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$7);
=======
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))

>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);
=======
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2a431c4 (feat: better exports)
=======
=======
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);
=======
var css_248z$a = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$a);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
var _StatelessToggleForm$;

>>>>>>> 8d61926 (feat: stories for empty resource tile and under construction)
=======
>>>>>>> 9475638 (add vsiform documentation to readme)
=======
var _StatelessToggleForm$;

>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
    noLabelText: true,
    id: props.name,
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
  className: PropTypes__default["default"].string,
  toggleFormTitle: PropTypes__default["default"].bool
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
StatelessToggleForm.defaultProps = (_StatelessToggleForm$ = {
  hide: true,
  iconType: "edit",
  name: "Stateless Toggle Form",
  hideTitle: false,
  alwaysShowButtons: false
}, _defineProperty(_StatelessToggleForm$, "hideTitle", false), _defineProperty(_StatelessToggleForm$, "toggleFormTitle", false), _StatelessToggleForm$);
StatelessToggleForm.propTypes = {
  children: PropTypes__default["default"].node.isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  iconType: PropTypes__default["default"].string.isRequired,
  onIconClick: PropTypes__default["default"].func,
  subHeading: PropTypes__default["default"].bool,
  name: PropTypes__default["default"].string.isRequired,
  buttons: PropTypes__default["default"].node,
  toggleFormTitle: PropTypes__default["default"].bool.isRequired,
  alwaysShowButtons: PropTypes__default["default"].bool.isRequired,
  hideTitle: PropTypes__default["default"].bool.isRequired
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);
=======
var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
=======
var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
>>>>>>> b26c811 (readme/example changes and new callback for "identity_provider")
styleInject(css_248z$6);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
styleInject(css_248z$7);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$8 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
=======
var css_248z$8 = ".leftTextAlign {\n  text-align: left;\n}\n\n/******** FIELD WIDTHS ********/\n\n.fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 12rem;\n}\n\n.textInputWide {\n  width: 30rem;\n}\n";
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$8 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
styleInject(css_248z$8);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
styleInject(css_248z$7);
>>>>>>> 2a431c4 (feat: better exports)
=======
var css_248z$8 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
styleInject(css_248z$8);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$9 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.textInputWide {\n  width: 30rem;\n}";
styleInject(css_248z$9);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || lazyZ.snakeCase(props.labelText);
  return /*#__PURE__*/React__default["default"].createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React__default["default"].createElement(react.Toggle, {
    labelA: props.useOnOff ? "Off" : "False",
    labelB: props.useOnOff ? "On" : "True",
    labelText: props.tooltip ? " " : props.labelText,
    id: lazyZ.kebabCase(toggleName) + "-icse-toggle-" + props.id,
    className: lib_2("leftTextAlign", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
    ,

    onToggle: function onToggle(event) {
      props.onToggle(toggleName, event);
    },
    defaultToggled: props.defaultToggled,
    disabled: props.disabled
  }));
};
IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false,
  className: "fieldWidth"
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
    className: lib_2("leftTextAlign", props),
    labelText: props.labelText ? props.labelText : lazyZ.titleCase(props.field),
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
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
  hideHelperText: false,
  className: "fieldWidth"
};
IcseTextInput.propTypes = {
  disabled: PropTypes__default["default"].bool.isRequired,
  componentName: PropTypes__default["default"].string,
  placeholder: PropTypes__default["default"].string,
  field: PropTypes__default["default"].string.isRequired,
  value: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
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
    if (!props.helperTextCallback) {
      throw new Error("IcseNameInput expects either a function `helperTextCallback` that returns a string or `hideHelperText` as a prop, got neither.");
    }
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/React__default["default"].createElement(IcseTextInput, _extends({}, props, {
    className: lib_2("leftTextAlign", props),
    field: "name",
    labelText: "Name",
    helperText: helperText
  }));
};
IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: "",
  className: "fieldWidth"
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);
=======
var css_248z$5 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$5);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$6 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$6);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
=======
class AccessGroupForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
=======
var css_248z$7 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$7);
=======
var css_248z$8 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$8);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

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
>>>>>>> 2e191c6 (Issue 750: AppIdForm, AppIdKeyForm, IamAccountSettingsForm (#78))
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: "name",
      componentName: "access_groups",
      value: this.state.name,
      onChange: this.handleInputChange,
      className: "fieldWidth",
      hideHelperText: true,
      invalid: this.props.invalidCallback("name", this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "description",
      componentName: "description",
      tooltip: {
        content: "Description of the access group"
      },
      field: "description",
      labelText: "Description",
      value: this.state.description,
      onChange: this.handleInputChange,
      isModal: this.props.isModal,
      className: "textInputWide",
      hideHelperText: true,
      invalid: false
    })), this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.props?.subForms.map((form, index) => {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: index
      }, form);
    })));
  }
}
AccessGroupForm.defaultProps = {
  data: {
    name: "",
    description: ""
  },
  isModal: false
};
AccessGroupForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    description: PropTypes__default["default"].string.isRequired
  }).isRequired,
  subForms: PropTypes__default["default"].arrayOf(PropTypes__default["default"].form).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

class AccessGroupPolicyForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputResource = this.handleInputResource.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputResource(event) {
    let {
      name,
      value
    } = event.target;
    let resources = {
      ...this.state.resources
    };
    resources[name] = value;
    this.setState({
      resources
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: "name",
      componentName: "policies",
      value: this.state.name,
      onChange: this.handleInputChange,
      labelText: "Name",
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback("name", this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
      name: "Resource Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource",
      componentName: "resource",
      tooltip: {
        content: "The resource of the policy definition",
        alignModal: "bottom-left"
      },
      isModal: this.props.isModal,
      field: "resource",
      value: this.state.resources.resource,
      invalid: false,
      onChange: this.handleInputResource,
      labelText: "Resource"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      name: "resource_group",
      formName: `${lazyZ.kebabCase(this.props.data.name)}-agp-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resources.resource_group,
      handleInputChange: this.handleInputResource,
      invalidText: "Select a Resource Group",
      labelText: "Resource Group",
      tooltip: {
        content: "Name of the resource group the policy will apply to",
        alignModal: "bottom-left"
      }
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource_instance_id",
      componentName: "resource_instance_id",
      isModal: this.props.isModal,
      field: "resource_instance_id",
      value: this.state.resources.resource_instance_id,
      tooltip: {
        content: "ID of a service instance to give permissions"
      },
      invalid: false,
      labelText: "Resource Instance ID",
      onChange: this.handleInputResource
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "service",
      componentName: "service",
      tooltip: {
        content: 'Name of the service type for the policy ex. "cloud-object-storage"',
        alignModal: "bottom-left",
        align: "top-left"
      },
      labelText: "Service Type",
      field: "service",
      value: this.state.resources.service,
      isModal: this.props.isModal,
      onChange: this.handleInputResource,
      invalid: false
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource_type",
      componentName: "resource_type",
      field: "resource_type",
      tooltip: {
        content: 'Name of the resource type for the policy ex. "resource-group"',
        alignModal: "bottom-left"
      },
      invalid: false,
      value: this.state.resources.resource_type,
      isModal: this.props.isModal,
      onChange: this.handleInputResource,
      labelText: "Resource Type"
    })));
  }
}
AccessGroupPolicyForm.defaultProps = {
  data: {
    name: "",
    resources: {
      resource_group: "",
      resource_type: "",
      resource: "",
      service: "",
      resource_instance_id: ""
    }
  },
  resourceGroups: [],
  isModal: false
};
AccessGroupPolicyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resources: PropTypes__default["default"].shape({
      resource_group: PropTypes__default["default"].string,
      // can be null
      resource_type: PropTypes__default["default"].string.isRequired,
      resource: PropTypes__default["default"].string.isRequired,
      service: PropTypes__default["default"].string.isRequired,
      resource_instance_id: PropTypes__default["default"].string.isRequired
    }).isRequired
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
};

const conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains"
};
class AccessGroupDynamicPolicyForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCondition = this.handleInputCondition.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputCondition(event) {
    let {
      name,
      value
    } = event.target;
    let conditions = {
      ...this.state.conditions
    };
    if (name === "operator") {
      conditions[name] = lazyZ.snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
    } else {
      conditions[name] = value;
    }
    this.setState({
      conditions
    });
  }
  render() {
    let conditionOperatorGroups = [];
    lazyZ.eachKey(conditionOperators, key => {
      conditionOperatorGroups.push(conditionOperators[key]);
    });
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: "name",
      componentName: "dynamic_policies",
      field: "name",
      labelText: "Name",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback("name", this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
      tooltip: {
        content: "How many hours authenticated users can work before refresh"
      },
      formName: "expiration",
      max: 24,
      value: this.state.expiration,
      name: "expiration",
      labelText: "Expiration Hours",
      isModal: this.props.isModal,
      handleInputChange: this.handleInputChange
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "identity_provider",
      tooltip: {
        content: "URI for identity provider",
        alignModal: "bottom-left"
      },
      componentName: "identity_provider",
      field: "identity_provider",
      isModal: this.props.isModal,
      labelText: "Identity Provider",
      value: this.state.identity_provider,
      invalid: this.props.invalidCallback("identity_provider", this.state, this.props),
      onChange: this.handleInputChange,
      className: "textInputWide"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
      name: "Condition Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "claim",
      tooltip: {
        content: "Key value to evaluate the condition against",
        alignModal: "bottom-left"
      },
      componentName: "claim",
      field: "claim",
      isModal: this.props.isModal,
      labelText: "Condition Claim",
      value: this.state.conditions.claim,
      invalid: false,
      onChange: this.handleInputCondition
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "dynamic_policies",
      tooltip: {
        content: "The operation to perform on the claim."
      },
      value: conditionOperators[this.state.conditions.operator],
      groups: conditionOperatorGroups,
      field: "operator",
      isModal: this.props.isModal,
      name: "operator",
      disableInvalid: true,
      labelText: "Condition Operator",
      handleInputChange: this.handleInputCondition
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "value",
      tooltip: {
        content: "Value to be compared against"
      },
      componentName: "value",
      field: "value",
      isModal: this.props.isModal,
      value: this.state.conditions.value,
      labelText: "Condition Value",
      invalid: false,
      onChange: this.handleInputCondition
    })));
  }
}
AccessGroupDynamicPolicyForm.defaultProps = {
  data: {
    name: "",
    identity_provider: "",
    expiration: 1,
    conditions: {
      claim: "",
      operator: "",
      value: ""
    }
  },
  isModal: false
};
AccessGroupDynamicPolicyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    identity_provider: PropTypes__default["default"].string.isRequired,
    expiration: PropTypes__default["default"].number.isRequired,
    conditions: PropTypes__default["default"].shape({
      claim: PropTypes__default["default"].string.isRequired,
      operator: PropTypes__default["default"].string.isRequired,
      value: PropTypes__default["default"].string.isRequired
    }).isRequired
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
};

>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
var css_248z$7 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$7);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$6 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$6);
>>>>>>> 2a431c4 (feat: better exports)
=======
var css_248z$7 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$7);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
var AppIdKeyForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AppIdKeyForm, _React$Component);
  var _super = _createSuper(AppIdKeyForm);
  function AppIdKeyForm(props) {
    var _this;
    _classCallCheck(this, AppIdKeyForm);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    var keyList = _this.props.keys.length === 0 ? [] // if no keys, empty array
    : _this.props.keys;
    _this.state.keys = keyList;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    var keyList = _this.props.keys.length === 0 ? [] // if no keys, empty array
    : _this.props.keys;
    _this.state.keys = keyList;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
<<<<<<< HEAD
>>>>>>> 2a431c4 (feat: better exports)
    return _this;
=======
class AppIdKeyForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
>>>>>>> 9475638 (add vsiform documentation to readme)
=======
    return _this;
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        field: "key_name",
        labelText: "App ID Key",
        componentName: "appid",
        className: "fieldWidthSmaller",
<<<<<<< HEAD
        invalid: this.props.invalidCallback("key_name", this.state, this.props),
        invalidText: this.props.invalidTextCallback("key_name", this.state, this.props)
=======
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
        field: "appid_key",
        labelText: "App ID Key",
        componentName: "appid",
        className: "fieldWidthSmaller",
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
<<<<<<< HEAD
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
=======
        field: "key_name",
        labelText: "App ID Key",
        componentName: "appid",
        className: "fieldWidthSmaller",
        invalid: this.props.invalidCallback("key_name", this.state, this.props),
        invalidText: this.props.invalidTextCallback("key_name", this.state, this.props)
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
>>>>>>> 2e191c6 (Issue 750: AppIdForm, AppIdKeyForm, IamAccountSettingsForm (#78))
      }));
    }
  }]);
  return AppIdKeyForm;
}(React__default["default"].Component);
<<<<<<< HEAD
=======
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
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }));
  }
}
>>>>>>> 9475638 (add vsiform documentation to readme)
=======
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
AppIdKeyForm.defaultProps = {
  data: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    key_name: "",
    keys: []
=======
    key_name: ""
>>>>>>> 2a431c4 (feat: better exports)
=======
    key_name: "",
    keys: []
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
    key_name: ""
>>>>>>> 2e191c6 (Issue 750: AppIdForm, AppIdKeyForm, IamAccountSettingsForm (#78))
  }
};
AppIdKeyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    key_name: PropTypes__default["default"].string.isRequired
  }),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
  shouldDisableSubmit: PropTypes__default["default"].func
};

var css_248z$7 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$7);

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
    primaryButtonDisabled: props.primaryButtonDisabled,
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

var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmallest {\n  width: 8rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.displayFlex {\n  display: flex;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #f4f4f4;\n  padding: 1rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.alignButtons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$6);

/**
 * AppIdForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
<<<<<<< HEAD
class AppIdForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.handleKeyAdd = this.handleKeyAdd.bind(this);
    this.handleKeyDelete = this.handleKeyDelete.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
=======
var AppIdForm = /*#__PURE__*/function (_Component) {
  _inherits(AppIdForm, _Component);
  var _super = _createSuper(AppIdForm);
  function AppIdForm(props) {
    var _this;
    _classCallCheck(this, AppIdForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_assertThisInitialized(_this));
    _this.handleKeyAdd = _this.handleKeyAdd.bind(_assertThisInitialized(_this));
    _this.handleKeyDelete = _this.handleKeyDelete.bind(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    return _this;
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
  }

  /**
   * If the appid form has been updated, must update state accordingly
   * @param {Object} prevProps
   * */
<<<<<<< HEAD
  componentDidUpdate(prevProps) {
    this.props.componentDidUpdateCallback(this.state, this.props);
  }

  /**
   * toggleModal modal for creating or editing AppId Key
   * * @param name name of key to edit
   */
  toggleModal(name) {
    let tempValueState;
    typeof name !== "object" ? tempValueState = {
      open: !this.state.open,
      editKey: true,
      keyNameToEdit: name
    } : tempValueState = {
      open: !this.state.open,
      editKey: false
    };
    this.setState(tempValueState);
  }

  /**
   * toggle delete appid key modal on and off
   * @param name name of key to delete
   */
  toggleDeleteModal(name) {
    let tempValueState = {
      showDeleteModal: !this.state.showDeleteModal,
      keyNameToDelete: name
    };
    this.setState(tempValueState);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    let newAppIdState = {
      ...this.state
    };
    let {
      name,
      value
    } = event.target;
    if (name === "name") {
      newAppIdState.name = value;
    } else newAppIdState.resource_group = value;
    this.setState(newAppIdState);
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    let newAppIdState = {
      ...this.state
    };
    newAppIdState.use_data = !newAppIdState.use_data;
    this.setState(newAppIdState);
  }

  /**
   * adds key to the appid keys list and closes the modal
   * @param {object} data
   * @param {object} data.key_name
   */
  handleKeyAdd(data) {
    let saveType = ``;
    let newAppIdState = {
      ...this.state
    };
    if (this.state.editKey === true) {
      saveType = "edit";
      newAppIdState.keys[newAppIdState.keys.indexOf(newAppIdState.keyNameToEdit)] = data.key_name;
    } else {
      saveType = "add";
      newAppIdState.keys.push(data.key_name);
    }
    newAppIdState.open = false;
    return new Promise((resolve, reject) => {
      this.props.saveCallback(saveType);
      resolve();
    }).then(() => {
      //set state after save is run using promise
      this.setState(newAppIdState);
    });
  }

  /**
   * removes key from the appid keys list and closes the modal
   * @param name key which needs to be deleted
   */
  handleKeyDelete(name) {
    let newKeys = this.state.keys.filter(item => item !== name);
    let newAppIdState = {
      ...this.state
    };
    newAppIdState.keys = newKeys;
    newAppIdState.showDeleteModal = false;
    return new Promise((resolve, reject) => {
      this.props.saveCallback("delete");
      resolve();
    }).then(() => {
      //set state after save is run using promise
      this.setState(newAppIdState);
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(react.Form, {
      id: "appid-form"
    }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmallest",
      id: "app-id-existing-instance"
    }), /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: this.state.name,
      placeholder: "my-appid-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback("name", this.state, this.props),
      invalidText: this.props.invalidTextCallback("name", this.state, this.props),
      className: "fieldWidth"
    }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: "fieldWidth"
    })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
      name: "App ID Keys",
      type: "subHeading",
      className: "marginBottomSmall",
      noLabelText: true,
      tooltip: {
        content: "Keys can be added to connect an application to an IBM Cloud service."
      },
      buttons: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
        id: "appid-key-create",
        type: "add",
        onClick: this.toggleModal,
        className: "forceTertiaryButtonStyles",
        disabled: this.props.invalidCallback("name", this.state, this.props) || lib_4(this.state.resource_group) || this.state.use_appid === false,
        noDeleteButton: true
      })
    }), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(FormModal, {
      name: (this.state.editKey ? "Edit" : "Add") + " an App ID Key",
      show: this.state.open,
      onRequestSubmit: this.handleKeyAdd,
      onRequestClose: this.toggleModal,
      size: "sm"
    }, /*#__PURE__*/React__default["default"].createElement(AppIdKeyForm, {
      shouldDisableSubmit: this.props.shouldDisableSubmitCallback(this.state, this.props),
      keys: this.state.keys,
      invalidCallback: this.props.invalidCallback,
      invalidTextCallback: this.props.invalidTextCallback
    }))), this.state.keys.length > 0 ? /*#__PURE__*/React__default["default"].createElement("div", null, this.state.keys.map((data, index) => /*#__PURE__*/React__default["default"].createElement("div", {
      className: "positionRelative displayFlex formInSubForm marginBottomSmall alignItemsCenter spaceBetween",
      key: `${data}-${this.state.keys[index]}`
    }, data, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "alignButtons"
    }, /*#__PURE__*/React__default["default"].createElement(EditCloseIcon, {
      hoverText: "Edit AppID Key",
      type: "edit",
      disabled: false,
      onClick: () => this.toggleModal(data)
    }), /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
      name: data,
      onClick: () => this.toggleDeleteModal(data)
    })))), /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
      name: this.state.keyNameToDelete || "",
      modalOpen: this.state.showDeleteModal
      //need to call toggleDeleteModal with "" name argument or else canceling deletion passes in the entire event to the name argument and causes the page to error
      ,
      onModalClose: () => this.toggleDeleteModal(""),
      onModalSubmit: () => this.handleKeyDelete(this.state.keyNameToDelete)
    })) : /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
      name: "App ID Keys",
      instructions: this.state.use_appid === false ? "Enable App ID Service to create keys." : "",
      showIfEmpty: this.state.keys
    }));
  }
}
=======
  _createClass(AppIdForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.props.componentDidUpdateCallback(this.state, this.props);
    }

    /**
     * toggleModal modal for creating or editing AppId Key
     * * @param name name of key to edit
     */
  }, {
    key: "toggleModal",
    value: function toggleModal(name) {
      var tempValueState;
      _typeof(name) !== "object" ? tempValueState = {
        open: !this.state.open,
        editKey: true,
        keyNameToEdit: name
      } : tempValueState = {
        open: !this.state.open,
        editKey: false
      };
      this.setState(tempValueState);
    }

    /**
     * toggle delete appid key modal on and off
     * @param name name of key to delete
     */
  }, {
    key: "toggleDeleteModal",
    value: function toggleDeleteModal(name) {
      var tempValueState = {
        showDeleteModal: !this.state.showDeleteModal,
        keyNameToDelete: name
      };
      this.setState(tempValueState);
    }

    /**
     * handle input change
     * @param {event} event event
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var newAppIdState = _objectSpread2({}, this.state);
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      if (name === "name") {
        newAppIdState.name = value;
      } else newAppIdState.resource_group = value;
      this.setState(newAppIdState);
    }

    /**
     * Toggle on and off use_data param in state
     */
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      var newAppIdState = _objectSpread2({}, this.state);
      newAppIdState.use_data = !newAppIdState.use_data;
      this.setState(newAppIdState);
    }

    /**
     * adds key to the appid keys list and closes the modal
     * @param {object} data
     * @param {object} data.key_name
     */
  }, {
    key: "handleKeyAdd",
    value: function handleKeyAdd(data) {
      var _this2 = this;
      var saveType = "";
      var newAppIdState = _objectSpread2({}, this.state);
      if (this.state.editKey === true) {
        saveType = "edit";
        newAppIdState.keys[newAppIdState.keys.indexOf(newAppIdState.keyNameToEdit)] = data.key_name;
      } else {
        saveType = "add";
        newAppIdState.keys.push(data.key_name);
      }
      newAppIdState.open = false;
      return new Promise(function (resolve, reject) {
        _this2.props.saveCallback(saveType);
        resolve();
      }).then(function () {
        //set state after save is run using promise
        _this2.setState(newAppIdState);
      });
    }

    /**
     * removes key from the appid keys list and closes the modal
     * @param name key which needs to be deleted
     */
  }, {
    key: "handleKeyDelete",
    value: function handleKeyDelete(name) {
      var _this3 = this;
      var newKeys = this.state.keys.filter(function (item) {
        return item !== name;
      });
      var newAppIdState = _objectSpread2({}, this.state);
      newAppIdState.keys = newKeys;
      newAppIdState.showDeleteModal = false;
      return new Promise(function (resolve, reject) {
        _this3.props.saveCallback("delete");
        resolve();
      }).then(function () {
        //set state after save is run using promise
        _this3.setState(newAppIdState);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      return /*#__PURE__*/React__default["default"].createElement(react.Form, {
        id: "appid-form"
      }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        labelText: "Use Existing Instance",
        key: this.state.use_data,
        defaultToggled: this.state.use_data,
        toggleFieldName: "use_data",
        onToggle: this.handleToggle,
        className: "fieldWidthSmallest",
        id: "app-id-existing-instance"
      }), /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.state.name,
        placeholder: "my-appid-name",
        value: this.state.name,
        onChange: this.handleInputChange,
        hideHelperText: true,
        invalid: this.props.invalidCallback("name", this.state, this.props),
        invalidText: this.props.invalidTextCallback("name", this.state, this.props),
        className: "fieldWidth"
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: "Resource Group",
        name: "resource_group",
        formName: "resource_group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalidText: "Select a Resource Group.",
        className: "fieldWidth"
      })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "App ID Keys",
        type: "subHeading",
        className: "marginBottomSmall",
        noLabelText: true,
        tooltip: {
          content: "Keys can be added to connect an application to an IBM Cloud service."
        },
        buttons: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
          id: "appid-key-create",
          type: "add",
          onClick: this.toggleModal,
          className: "forceTertiaryButtonStyles",
          disabled: this.props.invalidCallback("name", this.state, this.props) || lib_4(this.state.resource_group) || this.state.use_appid === false,
          noDeleteButton: true
        })
      }), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(FormModal, {
        name: (this.state.editKey ? "Edit" : "Add") + " an App ID Key",
        show: this.state.open,
        onRequestSubmit: this.handleKeyAdd,
        onRequestClose: this.toggleModal,
        size: "sm"
      }, /*#__PURE__*/React__default["default"].createElement(AppIdKeyForm, {
        shouldDisableSubmit: this.props.shouldDisableSubmitCallback(this.state, this.props),
        keys: this.state.keys,
        invalidCallback: this.props.invalidCallback,
        invalidTextCallback: this.props.invalidTextCallback
      }))), this.state.keys.length > 0 ? /*#__PURE__*/React__default["default"].createElement("div", null, this.state.keys.map(function (data, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "positionRelative displayFlex formInSubForm marginBottomSmall alignItemsCenter spaceBetween",
          key: "".concat(data, "-").concat(_this4.state.keys[index])
        }, data, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "alignButtons"
        }, /*#__PURE__*/React__default["default"].createElement(EditCloseIcon, {
          hoverText: "Edit AppID Key",
          type: "edit",
          disabled: false,
          onClick: function onClick() {
            return _this4.toggleModal(data);
          }
        }), /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
          name: data,
          onClick: function onClick() {
            return _this4.toggleDeleteModal(data);
          }
        })));
      }), /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
        name: this.state.keyNameToDelete || "",
        modalOpen: this.state.showDeleteModal
        //need to call toggleDeleteModal with "" name argument or else canceling deletion passes in the entire event to the name argument and causes the page to error
        ,
        onModalClose: function onModalClose() {
          return _this4.toggleDeleteModal("");
        },
        onModalSubmit: function onModalSubmit() {
          return _this4.handleKeyDelete(_this4.state.keyNameToDelete);
        }
      })) : /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
        name: "App ID Keys",
        instructions: this.state.use_appid === false ? "Enable App ID Service to create keys." : "",
        showIfEmpty: this.state.keys
      }));
    }
  }]);
  return AppIdForm;
}(React.Component);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
AppIdForm.defaultProps = {
  data: {
    use_appid: false,
    name: "",
    resource_group: "",
    use_data: false,
    keys: []
  },
  key_name: "",
  open: false,
  editKey: false,
  showDeleteModal: false,
  keyNameToEdit: "",
  keyNameToDelete: ""
};
AppIdForm.propTypes = {
  data: PropTypes__default["default"].shape({
    use_appid: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    use_data: PropTypes__default["default"].bool,
    keys: PropTypes__default["default"].array.isRequired
  }).isRequired,
  key_name: PropTypes__default["default"].string.isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalidCallback: PropTypes__default["default"].func,
  invalidTextCallback: PropTypes__default["default"].func
<<<<<<< HEAD
=======
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
      this.setState(this.toggleStateBoolean(name, this.state));
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      var composedId = "vpn-gateway-form-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        component: "vpn_gateways",
        componentName: this.props.data.name,
        componentProps: this.props,
        value: this.state.name,
        onChange: this.handleInputChange,
        placeholder: "my-vpn-gateway-name",
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: "atracker-form"
      }, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Activity Tracker",
        field: "Name",
        labelText: "Name",
        className: "fieldWidth",
        value: this.props.prefix + "-atracker",
        onChange: function onChange() {
          /** does not change **/
        },
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
  cosKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
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

var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$5);

/**
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("leftTextAlign", props),
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
  invalidText: "Invalid value",
  className: "fieldWidth"
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
    className: props.className
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
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: props.label,
    titleText: "Security Groups",
    className: props.className,
    initialSelectedItems: props.initialSelectedItems,
    vpc_name: props.vpc_name,
    invalid: props.invalid,
    invalidText: props.invalidText,
    onChange: function onChange(event) {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups,
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
  });
};
SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
  label: "Select Security Groups",
  invalid: false,
  className: "fieldWidthSmaller",
  invalidText: "Select at least one security group."
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
  securityGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
  invalidText: PropTypes__default["default"].string.isRequired
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
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
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
  subnets: PropTypes__default["default"].array.isRequired,
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

var F5VsiForm = /*#__PURE__*/function (_Component) {
  _inherits(F5VsiForm, _Component);
  var _super = _createSuper(F5VsiForm);
  function F5VsiForm(props) {
    var _this;
    _classCallCheck(this, F5VsiForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelectChange = _this.handleMultiSelectChange.bind(_assertThisInitialized(_this));
    _this.handleVsiSave = _this.handleVsiSave.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(F5VsiForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "handleMultiSelectChange",
    value: function handleMultiSelectChange(name, value) {
      this.setState(this.setNameToValue(name, value));
    }
  }, {
    key: "handleVsiSave",
    value: function handleVsiSave(stateData) {
      this.props.saveVsiCallback(stateData);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var vsis = _toConsumableArray(this.props.vsis);
      while (vsis.length < this.state.zones) {
        // add a new vsi to display
        vsis.push(this.props.initVsiCallback(this.props.edge_pattern, "zone-".concat(vsis.length + 1), this.props.f5_on_management, {
          f5_image_name: this.state.f5_image_name,
          resource_group: this.state.resource_group,
          ssh_keys: this.state.ssh_keys,
          machine_type: this.state.machine_type
        }));
      }
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "f5_vsi_form",
        name: "zones",
        labelText: "F5 Instance Zones",
        groups: lazyZ.buildNumberDropdownList(4) // 0-3 Zones
        ,
        value: this.state.zones.toString(),
        handleInputChange: this.handleInputChange
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "f5_vsi_form",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroupList,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange
      }), /*#__PURE__*/React__default["default"].createElement(SshKeyMultiSelect, {
        id: "sshkey",
        sshKeys: this.props.sshKeyList,
        initialSelectedItems: this.state.ssh_keys,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("ssh_keys", value);
        }
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "f5_vsi_form",
        name: "f5_image_name",
        labelText: "F5 Image",
        groups: ["f5-bigip-15-1-5-1-0-0-14-all-1slot", "f5-bigip-15-1-5-1-0-0-14-ltm-1slot", "f5-bigip-16-1-2-2-0-0-28-ltm-1slot", "f5-bigip-16-1-2-2-0-0-28-all-1slot", "f5-bigip-16-1-3-2-0-0-4-ltm-1slot", "f5-bigip-16-1-3-2-0-0-4-all-1slot", "f5-bigip-17-0-0-1-0-0-4-ltm-1slot", "f5-bigip-17-0-0-1-0-0-4-all-1slot"],
        value: this.state.f5_image_name,
        handleInputChange: this.handleInputChange
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "f5_vsi_form",
        labelText: "Flavor",
        name: "machine_type",
        apiEndpoint: this.props.apiEndpointFlavors,
        handleInputChange: this.handleInputChange,
        value: this.state.machine_type
      })), vsis.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "F5 Big IP Virtual Servers",
        type: "subHeading",
        className: "marginBottomSmall"
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "displayFlex evenSpacing"
      }, vsis.map(function (instance, index) {
        if (index < _this2.state.zones) return /*#__PURE__*/React__default["default"].createElement(F5VsiTile, {
          key: "f5-vsi-tile" + JSON.stringify(instance) + index,
          data: instance,
          hide: false,
          onSave: _this2.handleVsiSave,
          totalZones: _this2.state.zones,
          index: index,
          resourceGroupList: _this2.props.resourceGroupList,
          encryptionKeyList: _this2.props.encryptionKeyList,
          hideSaveCallback: _this2.props.hideSaveCallback,
          disableSaveCallback: _this2.props.disableSaveCallback
        });
      }))));
    }
  }]);
  return F5VsiForm;
}(React.Component);
var F5VsiTile = /*#__PURE__*/function (_React$Component) {
  _inherits(F5VsiTile, _React$Component);
  var _super2 = _createSuper(F5VsiTile);
  function F5VsiTile(props) {
    var _this3;
    _classCallCheck(this, F5VsiTile);
    _this3 = _super2.call(this, props);
    _this3.state = _this3.props.data;
    _this3.handleInputChange = _this3.handleInputChange.bind(_assertThisInitialized(_this3));
    _this3.shouldHideSave = _this3.shouldHideSave.bind(_assertThisInitialized(_this3));
    _this3.shouldDisableSave = _this3.shouldDisableSave.bind(_assertThisInitialized(_this3));
    return _this3;
  }
  _createClass(F5VsiTile, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "shouldHideSave",
    value: function shouldHideSave() {
      return this.props.hideSaveCallback(this.state, this.props);
    }
  }, {
    key: "shouldDisableSave",
    value: function shouldDisableSave() {
      return this.props.disableSaveCallback(this.state, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      return /*#__PURE__*/React__default["default"].createElement(react.Tile, {
        className: "fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.state.name,
        type: "subHeading",
        className: "marginBottomSmall",
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.shouldHideSave(this.state, this.props),
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            onClick: function onClick() {
              return _this4.props.onSave(_this4.state);
            },
            noDeleteButton: true,
            disabled: this.shouldDisableSave()
          })
        })
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name,
        componentName: "f5_vsi_form",
        value: this.state.name,
        onChange: this.handleInputChange,
        useData: true,
        readOnly: true,
        invalidCallback: function invalidCallback() {},
        invalidText: "",
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "f5_vsi_form",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroupList,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "f5_vsi_form",
        name: "boot_volume_encryption_key_name",
        labelText: "Encryption Key",
        groups: this.props.encryptionKeyList,
        value: this.state.boot_volume_encryption_key_name,
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      })));
    }
  }]);
  return F5VsiTile;
}(React__default["default"].Component);
F5VsiForm.defaultProps = {
  data: {
    zones: 0,
    resource_group: "",
    ssh_keys: [],
    f5_image_name: "",
    machine_type: ""
  },
  vsis: [],
  edge_pattern: "vpn-and-waf",
  f5_on_management: true
};
F5VsiForm.propTypes = {
  data: PropTypes__default["default"].shape({
    zones: PropTypes__default["default"].number.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    ssh_keys: PropTypes__default["default"].array,
    f5_image_name: PropTypes__default["default"].string.isRequired,
    machine_type: PropTypes__default["default"].string.isRequired
  }).isRequired,
  vsis: PropTypes__default["default"].array.isRequired,
  edge_pattern: PropTypes__default["default"].string.isRequired,
  f5_on_management: PropTypes__default["default"].bool.isRequired,
  // use management
  /* api endpoints */
  apiEndpointFlavors: PropTypes__default["default"].string.isRequired,
  /* lists */
  resourceGroupList: PropTypes__default["default"].array.isRequired,
  sshKeyList: PropTypes__default["default"].array.isRequired,
  encryptionKeyList: PropTypes__default["default"].array.isRequired,
  /* callbacks */
  initVsiCallback: PropTypes__default["default"].func.isRequired,
  saveVsiCallback: PropTypes__default["default"].func.isRequired,
  hideSaveCallback: PropTypes__default["default"].func.isRequired,
  disableSaveCallback: PropTypes__default["default"].func.isRequired
};

const {
  RegexButWithWords: RegexButWithWords$1
} = regexButWithWords__default["default"];
const {
  isNullOrEmptyString: isNullOrEmptyString$2
} = lazyZ__default["default"];
const urlValidationExp = new RegexButWithWords$1().group(exp => {
  exp.literal("ftp").or().literal("http").literal("s").lazy();
}).literal("://").group("www.").lazy().group(exp => {
  exp.negatedSet('"\\/').oneOrMore().literal(".");
}).group(exp => {
  exp.negatedSet('"\\/').oneOrMore().literal(".");
}).oneOrMore().negatedSet('"\\/.').oneOrMore().literal("/").negatedSet(' "').anyNumber().stringEnd().done("g");
const tmosAdminPasswordValidationExp = new RegexButWithWords$1().stringBegin().look.ahead(exp => {
  exp.any().anyNumber().set("a-z");
}).look.ahead(exp => {
  exp.any().anyNumber().set("A-Z");
}).look.ahead(exp => {
  exp.any().anyNumber().set("0-9");
}).any(15, "*").stringEnd().done("");

/**
 * url value is valid and not empty
 * @param {str} url
 * @returns {boolean} true when url is valid and not empty, false when invalid
 */
function isValidUrl(url) {
  if (isNullOrEmptyString$2(url)) return false;
  return url.match(urlValidationExp) !== null;
}

/**
 * verifies tmos admin password
 * @param {str} password
 * @returns {boolean} true when password is valid
 */
function isValidTmosAdminPassword(password) {
  if (isNullOrEmptyString$2(password)) return true;else return password.match(tmosAdminPasswordValidationExp) !== null;
}

/**
 * securely generates a random byte to be transformed into a character
 * @returns {byte} random byte
 */
function getRandomByte() {
  var result = new Uint8Array(1);
  result = window.crypto.getRandomValues(result); // cryptographically secure random number generation
  return result[0];
}

/**
 * Checks if the random byte character generated is a valid character in the charset
 * if it is, return the char, add it to the password String
 * @param {int} length
 * @returns {char} a valid char to go into the password
 */
function generatePassword(length) {
  const charset = /[a-zA-Z0-9_\-+!$%^&*#]/; // valid chars for the password string
  return Array.apply(null, {
    length: length
  }) // create an array of null of length specified
  .map(function () {
    // on each element
    var result;
    while (true) {
      result = String.fromCharCode(getRandomByte()); // generate a char until it is a valid char in the charset
      if (charset.test(result)) {
        return result; // char is in the charset
      }
    }
  }, this).join(""); // join all array elements into a single string
}

/**
 * generates the password until it fits the validation expression
 * @param {int} length
 * @returns {string} password that fits the requirements of the validation expression
 */
function getValidAdminPassword(length) {
  let invalid = true;
  let count = 0;
  let result;
  do {
    result = generatePassword(length); // generate a password until it is valid
    if (tmosAdminPasswordValidationExp.test(result)) {
      // we are valid if this test passes
      invalid = false;
    } else {
      result = ""; // reset result
      count++;
    }
  } while (invalid && count <= 5); // only be more than 5 times if you specified an invalid length. dummy counter for unit
  return result;
}
var f5Utils = {
  getValidAdminPassword,
  isNullOrEmptyString: isNullOrEmptyString$2,
  isValidTmosAdminPassword,
  isValidUrl
};
var f5Utils_1 = f5Utils.getValidAdminPassword;
var f5Utils_2 = f5Utils.isNullOrEmptyString;
var f5Utils_3 = f5Utils.isValidTmosAdminPassword;
var f5Utils_4 = f5Utils.isValidUrl;

var css_248z$4 = ".wide {\n  width: 20rem !important;\n}\n\n.tight {\n  width: min-content; /* force invalid text to split line */\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n\n.passwordGenerateButton {\n  margin-top: 1.25rem;\n  margin-left: calc(-4rem - 3vw);\n}\n\n.passwordGenerateButton svg {\n  fill: var(--cds-icon-secondary, #525252) !important;\n}\n\n.passwordGenerateButton.invalid {\n  margin-left: calc(-5.75rem - 3vw);\n}\n";
styleInject(css_248z$4);

/**
 * F5VsiTemplateForm
 */
var F5VsiTemplateForm = /*#__PURE__*/function (_Component) {
  _inherits(F5VsiTemplateForm, _Component);
  var _super = _createSuper(F5VsiTemplateForm);
  function F5VsiTemplateForm(props) {
    var _this;
    _classCallCheck(this, F5VsiTemplateForm);
    _this = _super.call(this, props);
    _this.state = props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.handleLicenseChange = _this.handleLicenseChange.bind(_assertThisInitialized(_this));
    _this.generateAdminPassword = _this.generateAdminPassword.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * set state to event value
   * @param {event} event
   */
  _createClass(F5VsiTemplateForm, [{
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * set conditional fields to null on license type change
     * @param {event} event
     */
  }, {
    key: "handleLicenseChange",
    value: function handleLicenseChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var reset = {};
      var pool = ["license_username", "license_password", "license_host", "license_pool"];
      var conditionalFields = {
        none: [],
        byol: ["byol_license_basekey"],
        regkeypool: pool,
        utilitypool: ["license_unit_of_measure", "license_sku_keyword_1", "license_sku_keyword_2"].concat(pool)
      };
      this.setState(function (prevState) {
        conditionalFields[prevState.license_type].forEach(function (field) {
          if (!conditionalFields[value].includes(field)) {
            reset[field] = "";
          }
        });
        return _objectSpread2(_defineProperty({}, name, value), reset);
      });
    }

    /**
     * get a valid admin password between 15-20 characters
     */
  }, {
    key: "generateAdminPassword",
    value: function generateAdminPassword() {
      var length = Math.floor(Math.random() * 6 + 15); // between 15-20 chars, inclusive (20 - 15 + 1)
      var password = f5Utils_1(length); // get a valid password
      this.setState({
        tmos_admin_password: password
      }); // set password
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "F5 VSI Template",
        tooltip: {
          content: "The type of license.",
          align: "right"
        },
        labelText: "License Type",
        component: "f5-license-type",
        name: "license_type",
        groups: ["none", "byol", "regkeypool", "utilitypool"],
        value: this.state.license_type,
        className: "fieldWidth",
        handleInputChange: this.handleLicenseChange
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "tooltip tight"
      }, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The admin account password for the F5 BIG-IP instance.",
          align: "right"
        },
        innerForm: react.PasswordInput,
        className: "wide",
        id: "tmos_admin_password",
        labelText: "TMOS Admin Password",
        name: "tmos_admin_password",
        value: this.state.tmos_admin_password || "",
        invalid: this.props.invalidCallback("tmos_admin_password", this.state, this.props) || !f5Utils_3(this.state.tmos_admin_password),
        invalidText: "Password must be at least 15 characters, contain one numeric, one uppercase, and one lowercase character.",
        onChange: this.handleTextInput
      })), /*#__PURE__*/React__default["default"].createElement(PopoverWrapper, {
        hoverText: "Generate Password",
        className: "passwordGenerateButton" + (f5Utils_3(this.state.tmos_admin_password) ? "" : " invalid")
      }, /*#__PURE__*/React__default["default"].createElement(react.Button, {
        kind: "ghost",
        onClick: this.generateAdminPassword,
        className: "forceTertiaryButtonStyles"
      }, /*#__PURE__*/React__default["default"].createElement(iconsReact.Password, null)))), this.state.license_type != "none" && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.state.license_type != "regkeypool" && this.state.license_type == "byol" && /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "Bring your own license registration key for the F5 BIG-IP instance.",
          align: "top-right"
        },
        id: "byol_license_basekey",
        field: "byol_license_basekey",
        className: "textInputWide",
        labelText: "BYOL License Basekey",
        innerForm: IcseTextInput,
        value: this.state.byol_license_basekey || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("byol_license_basekey", this.state, this.props) || f5Utils_2(this.state.byol_license_basekey),
        invalidText: this.props.invalidTextCallback("byol_license_basekey", this.state, this.props)
      })), this.state.license_type != "byol" && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ username to use for the pool based licensing of the F5 BIG-IP instance.",
          align: "top-left"
        },
        id: "license_username",
        field: "license_username",
        className: "fieldWidth",
        labelText: "License Username",
        innerForm: IcseTextInput,
        value: this.state.license_username || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_username", this.state, this.props) || f5Utils_2(this.state.license_username),
        invalidText: this.props.invalidTextCallback("license_username", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "leftTextAlign tooltip"
      }, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ password to use for the pool based licensing of the F5 BIG-IP instance."
        },
        id: "license_password",
        className: "wide",
        labelText: "License Password",
        innerForm: react.PasswordInput,
        name: "license_password",
        value: this.state.license_password || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_password", this.state, this.props),
        invalidText: this.props.invalidTextCallback("license_password", this.state, this.props)
      }))), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ IP or hostname to use for pool based licensing of the F5 BIG-IP instance.",
          align: "top-left"
        },
        id: "license_host",
        field: "license_host",
        className: "fieldWidth",
        labelText: "License Host",
        innerForm: IcseTextInput,
        value: this.state.license_host || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_host", this.state, this.props) || f5Utils_2(this.state.license_host),
        invalidText: this.props.invalidTextCallback("license_host", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ license pool name for the licensing of the F5 BIG-IP instance."
        },
        id: "license_pool",
        field: "license_pool",
        className: "wide",
        labelText: "License Pool",
        innerForm: IcseTextInput,
        value: this.state.license_pool || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_pool", this.state, this.props) || f5Utils_2(this.state.license_pool),
        invalidText: this.props.invalidTextCallback("license_pool", this.state, this.props)
      })), this.state.license_type == "utilitypool" && /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ utility pool unit of measurement.",
          align: "top-right"
        },
        id: "license_unit_of_measure",
        field: "license_unit_of_measure",
        className: "fieldWidthSmaller",
        labelText: "License Unit of Measure",
        innerForm: IcseTextInput,
        value: this.state.license_unit_of_measure || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_unit_of_measure", this.state, this.props) || f5Utils_2(this.state.license_unit_of_measure),
        invalidText: this.props.invalidTextCallback("license_unit_of_measure", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ primary SKU for ELA utility licensing of the F5 BIG-IP instance."
        },
        id: "license_sku_keyword_1",
        field: "license_sku_keyword_1",
        className: "fieldWidthSmaller",
        labelText: "License SKU Keyword 1",
        innerForm: IcseTextInput,
        value: this.state.license_sku_keyword_1 || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_sku_keyword_1", this.state, this.props) || f5Utils_2(this.state.license_sku_keyword_1),
        invalidText: this.props.invalidTextCallback("license_sku_keyword_1", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "BIGIQ secondary SKU for ELA utility licensing of the F5 BIG-IP instance"
        },
        id: "license_sku_keyword_2",
        field: "license_sku_keyword_2",
        className: "fieldWidthSmaller",
        labelText: "License SKU Keyword 2",
        innerForm: IcseTextInput,
        value: this.state.license_sku_keyword_2 || "",
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("license_sku_keyword_2", this.state, this.props) || f5Utils_2(this.state.license_sku_keyword_2),
        invalidText: this.props.invalidTextCallback("license_sku_keyword_2", this.state, this.props)
      })))), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The terraform template version for phone_home_url_metadata.",
          align: "top-left"
        },
        id: "template_version",
        field: "template_version",
        className: "fieldWidth",
        labelText: "Template Version",
        innerForm: IcseTextInput,
        value: this.state.template_version,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("template_version", this.state, this.props) || f5Utils_2(this.state.template_version),
        invalidText: this.props.invalidTextCallback("template_version", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The terraform template source for phone_home_url_metadata."
        },
        id: "template_source",
        field: "template_source",
        className: "wide",
        labelText: "Template Source",
        innerForm: IcseTextInput,
        value: this.state.template_source,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("template_source", this.state, this.props) || f5Utils_2(this.state.template_source),
        invalidText: this.props.invalidTextCallback("template_source", this.state, this.props)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The terraform application id for phone_home_url_metadata.",
          align: "top-right"
        },
        id: "app_id",
        field: "app_id",
        className: "fieldWidth",
        labelText: "App ID",
        innerForm: IcseTextInput,
        value: this.state.app_id,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("app_id", this.state, this.props),
        invalidText: this.props.invalidTextCallback("app_id", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to POST status when BIG-IP is finished onboarding."
        },
        id: "phone_home_url",
        field: "phone_home_url",
        className: "fieldWidth",
        labelText: "Phone Home URL",
        innerForm: IcseTextInput,
        value: this.state.phone_home_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("phone_home_url", this.state, this.props) || !f5Utils_4(this.state.phone_home_url),
        invalidText: this.props.invalidTextCallback("phone_home_url", this.state, this.props)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to retrieve the f5-declarative-onboarding JSON declaration.",
          align: "top-left"
        },
        id: "do_declaration_url",
        field: "do_declaration_url",
        className: "fieldWidth",
        labelText: "DO Declaration URL",
        innerForm: IcseTextInput,
        value: this.state.do_declaration_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("do_declaration_url", this.state, this.props) || !f5Utils_4(this.state.do_declaration_url),
        invalidText: this.props.invalidTextCallback("do_declaration_url", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to retrieve the f5-appsvcs-extension JSON declaration."
        },
        id: "as3_declaration_url",
        field: "as3_declaration_url",
        className: "fieldWidth",
        labelText: "AS3 Declaration URL",
        innerForm: IcseTextInput,
        value: this.state.as3_declaration_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("as3_declaration_url", this.state, this.props) || !f5Utils_4(this.state.as3_declaration_url),
        invalidText: this.props.invalidTextCallback("as3_declaration_url", this.state, this.props)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to retrieve the f5-telemetry-streaming JSON declaration.",
          align: "top-left"
        },
        id: "ts_declaration_url",
        field: "ts_declaration_url",
        className: "fieldWidth",
        labelText: "TS Declaration URL",
        innerForm: IcseTextInput,
        value: this.state.ts_declaration_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("ts_declaration_url", this.state, this.props) || !f5Utils_4(this.state.ts_declaration_url),
        invalidText: this.props.invalidTextCallback("ts_declaration_url", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to POST L3 addresses when tgstandby is triggered."
        },
        id: "tgstandby_url",
        field: "tgstandby_url",
        className: "fieldWidth",
        labelText: "TGStandby URL",
        innerForm: IcseTextInput,
        value: this.state.tgstandby_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("tgstandby_url", this.state, this.props) || !f5Utils_4(this.state.tgstandby_url),
        invalidText: this.props.invalidTextCallback("tgstandby_url", this.state, this.props)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to POST L3 addresses when tgrefresh is triggered.",
          align: "top-left"
        },
        id: "tgrefresh_url",
        field: "tgrefresh_url",
        className: "fieldWidth",
        labelText: "TGRefresh URL",
        innerForm: IcseTextInput,
        value: this.state.tgrefresh_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("tgrefresh_url", this.state, this.props) || !f5Utils_4(this.state.tgrefresh_url),
        invalidText: this.props.invalidTextCallback("tgrefresh_url", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "The URL to POST L3 addresses when tgactive is triggered."
        },
        id: "tgactive_url",
        field: "tgactive_url",
        className: "fieldWidth",
        labelText: "TGActive URL",
        innerForm: IcseTextInput,
        value: this.state.tgactive_url,
        onChange: this.handleTextInput,
        invalid: this.props.invalidCallback("tgactive_url", this.state, this.props) || !f5Utils_4(this.state.tgactive_url),
        invalidText: this.props.invalidTextCallback("tgactive_url", this.state, this.props)
      })));
    }
  }]);
  return F5VsiTemplateForm;
}(React.Component);
F5VsiTemplateForm.defaultProps = {
  data: {
    license_type: "none",
    tmos_admin_password: "",
    byol_license_basekey: "",
    license_username: "",
    license_password: "",
    license_host: "",
    license_pool: "",
    license_unit_of_measure: "",
    license_sku_keyword_1: "",
    license_sku_keyword_2: "",
    template_version: "",
    template_source: "",
    app_id: "",
    phone_home_url: "",
    do_declaration_url: "",
    as3_declaration_url: "",
    ts_declaration_url: "",
    tgstandby_url: "",
    tgrefresh_url: "",
    tgactive_url: ""
  }
};
F5VsiTemplateForm.propTypes = {
  data: PropTypes__default["default"].shape({
    license_type: PropTypes__default["default"].string.isRequired,
    tmos_admin_password: PropTypes__default["default"].string.isRequired,
    byol_license_basekey: PropTypes__default["default"].string.isRequired,
    license_username: PropTypes__default["default"].string.isRequired,
    license_password: PropTypes__default["default"].string.isRequired,
    license_host: PropTypes__default["default"].string.isRequired,
    license_pool: PropTypes__default["default"].string.isRequired,
    license_unit_of_measure: PropTypes__default["default"].string.isRequired,
    license_sku_keyword_1: PropTypes__default["default"].string.isRequired,
    license_sku_keyword_2: PropTypes__default["default"].string.isRequired,
    template_version: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]),
    template_source: PropTypes__default["default"].string.isRequired,
    app_id: PropTypes__default["default"].string.isRequired,
    phone_home_url: PropTypes__default["default"].string.isRequired,
    do_declaration_url: PropTypes__default["default"].string.isRequired,
    as3_declaration_url: PropTypes__default["default"].string.isRequired,
    ts_declaration_url: PropTypes__default["default"].string.isRequired,
    tgstandby_url: PropTypes__default["default"].string.isRequired,
    tgrefresh_url: PropTypes__default["default"].string.isRequired,
    tgactive_url: PropTypes__default["default"].string.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

const {
  isWholeNumber,
  isInRange
} = lazyZ__default["default"];
const {
  RegexButWithWords
} = regexButWithWords__default["default"];
const commaSeparatedIpListExp = new RegexButWithWords().stringBegin().group(exp => {
  exp.group(exp => {
    exp.wordBoundary().group(exp => {
      exp.group(exp => {
        exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
      }).literal(".");
    }, 3).group(exp => {
      exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
    }).wordBoundary().group(exp => {
      exp.group(exp => {
        exp.literal("/").group(exp => {
          exp.literal("3").set("0-2").or().set("012").lazy().digit();
        });
      });
    }).lazy();
  });
}).anyNumber().group(exp => {
  exp.literal(",").whitespace().anyNumber().wordBoundary().group(exp => {
    exp.group(exp => {
      exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
    }).literal(".");
  }, 3).group(exp => {
    exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
  }).wordBoundary().group(exp => {
    exp.group(exp => {
      exp.literal("/").group(exp => {
        exp.literal("3").set("0-2").or().set("012").lazy().digit();
      });
    });
  }).lazy();
}).anyNumber().stringEnd().done("gm");

/**
 * return true if value is null or empty string
 * @param {*} value
 * @returns {boolean} true if null or empty string
 */
function isNullOrEmptyString$1(value) {
  return value === null || value === "";
}

/**
 * test for invalid range
 * @param {*} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean} true if invalid
 */
function isRangeInvalid(value, min, max) {
  if (isNullOrEmptyString$1(value)) return false;
  value = parseFloat(value);
  if (!isWholeNumber(value) || !isInRange(value, min, max)) {
    return true;
  }
  return false;
}

/**
 * test for invalid IP string
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isIpStringInvalid(value) {
  if (!isNullOrEmptyString$1(value) && value.match(commaSeparatedIpListExp) === null) {
    return true;
  }
  return false;
}
var iamUtils = {
  isIpStringInvalid,
  isRangeInvalid
};
var iamUtils_1 = iamUtils.isIpStringInvalid;
var iamUtils_2 = iamUtils.isRangeInvalid;

var restrictMenuItems = ["Unset", "Yes", "No"];
var mfaMenuItems = ["NONE", "TOTP", "TOTP4ALL", "Email-Based MFA", "TOTP MFA", "U2F MFA"];
var iamItems = {
  null: {
    display: null,
    value: null
  },
  NONE: {
    display: "NONE",
    value: "NONE"
  },
  TOTP: {
    display: "TOTP",
    value: "TOTP"
  },
  TOTP4ALL: {
    display: "TOTP4ALL",
    value: "TOTP4ALL"
  },
  LEVEL1: {
    display: "Email-Based MFA",
    value: "LEVEL1"
  },
  LEVEL2: {
    display: "TOTP MFA",
    value: "LEVEL2"
  },
  LEVEL3: {
    display: "U2F MFA",
    value: "LEVEL3"
  },
  NOT_SET: {
    display: "Unset",
    value: "NOT_SET"
  },
  RESTRICTED: {
    display: "Yes",
    value: "RESTRICTED"
  },
  NOT_RESTRICTED: {
    display: "No",
    value: "NOT_RESTRICTED"
  },
  "Email-Based MFA": {
    display: "Email-Based MFA",
    value: "LEVEL1"
  },
  "TOTP MFA": {
    display: "TOTP MFA",
    value: "LEVEL2"
  },
  "U2F MFA": {
    display: "U2F MFA",
    value: "LEVEL3"
  },
  Unset: {
    display: "Unset",
    value: "NOT_SET"
  },
  Yes: {
    display: "Yes",
    value: "RESTRICTED"
  },
  No: {
    display: "No",
    value: "NOT_RESTRICTED"
  }
};

/**
 * IAM Account Settings form
 */
var IamAccountSettingsForm = /*#__PURE__*/function (_Component) {
  _inherits(IamAccountSettingsForm, _Component);
  var _super = _createSuper(IamAccountSettingsForm);
  function IamAccountSettingsForm(props) {
    var _this;
    _classCallCheck(this, IamAccountSettingsForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.state.enable = true;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleNumberInputChange = _this.handleNumberInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleAllowedIps = _this.handleAllowedIps.bind(_assertThisInitialized(_this));
    _this.handleSelectChange = _this.handleSelectChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(IamAccountSettingsForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle input change of number-only fields
     * @param {event} event
     */
  }, {
    key: "handleNumberInputChange",
    value: function handleNumberInputChange(event) {
      var value = parseInt(event.target.value) || null;
      if (value || event.target.value === "") {
        this.setState(_defineProperty({}, event.target.name, value));
      }
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the object key to change
     * @param {bool} setDefaults set default values, default is false
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }

    /**
     * Handle input change for allowed ips text field
     * @param {event} event
     */
  }, {
    key: "handleAllowedIps",
    value: function handleAllowedIps(event) {
      // removing white space and checking for empty value
      var value = event.target.value.replace(/\s*/g, "");
      if (value === "") value = null;
      this.setState({
        allowed_ip_addresses: value
      });
    }

    /**
     * Handle input change for a select
     * @param {event} event
     */
  }, {
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      var name = event.target.name;
      var item = event.target.value;
      this.setState(_defineProperty({}, name, iamItems[item].value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "IAM Account Settings",
        className: "fieldWidthSmaller",
        tooltip: {
          content: 'Version of the account settings to update, if no value is supplied then the default value "*" is used to indicate to update any version available. This might result in stale updates.',
          align: "top-left"
        },
        id: "iam-if-match",
        placeholder: "1",
        labelText: "Version",
        value: this.state.if_match,
        onChange: this.handleNumberInputChange,
        field: "if_match",
        invalid: this.props.invalidCallback("if_match", this.state, this.props),
        invalidText: this.props.invalidTextCallback("if_match", this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        value: iamItems[this.state.mfa].display,
        formName: "IAM Account Settings",
        className: "textInputMedium",
        groups: mfaMenuItems,
        handleInputChange: this.handleSelectChange,
        labelText: "Multi-Factor Authentication",
        name: "mfa"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Defines if the entity history is included in the response.",
          align: "top-left"
        },
        labelText: "Include History",
        defaultToggled: this.state.include_history,
        onToggle: function onToggle() {
          return _this2.handleToggle("include_history");
        },
        className: "fieldWidthSmaller",
        id: "iam-include-history"
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "IAM Account Settings",
        name: "restrict_create_service_id",
        groups: restrictMenuItems,
        value: iamItems[this.state.restrict_create_service_id].display,
        labelText: "Restrict Creation of Service IDs",
        handleInputChange: this.handleSelectChange
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "IAM Account Settings",
        name: "restrict_create_platform_apikey",
        groups: restrictMenuItems,
        value: iamItems[this.state.restrict_create_platform_apikey].display,
        labelText: "Restrict Creation of API Keys",
        handleInputChange: this.handleSelectChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "IAM Account Settings",
        placeholder: "1",
        field: "max_sessions_per_identity",
        value: this.state.max_sessions_per_identity || "",
        className: "fieldWidthSmaller",
        onChange: this.handleNumberInputChange,
        labelText: "Max Sessions Per Identity",
        invalid: this.props.invalidCallback("max_sessions_per_identity", this.state, this.props),
        invalidText: this.props.invalidTextCallback("max_sessions_per_identity", this.state, this.props),
        id: "iam-max-sessions-per-id"
      }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
        placeholder: "900",
        label: "Session Expiration (sec)",
        id: "iam-session-expiration-seconds",
        allowEmpty: true,
        value: this.state.session_expiration_in_seconds || "",
        step: 1,
        onChange: this.handleInputChange,
        name: "session_expiration_in_seconds",
        hideSteppers: true,
        min: 900,
        max: 86400,
        invalid: iamUtils_2(this.state.session_expiration_in_seconds, 900, 86400),
        invalidText: "Must be a whole number between 900 and 86400",
        className: "fieldWidth leftTextAlign"
      }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
        placeholder: "900",
        label: "Session Invalidation (sec)",
        id: "iam-session-invalidation-seconds",
        allowEmpty: true,
        value: this.state.session_invalidation_in_seconds || "",
        step: 1,
        onChange: this.handleInputChange,
        name: "session_invalidation_in_seconds",
        hideSteppers: true,
        invalid: iamUtils_2(this.state.session_invalidation_in_seconds, 900, 7200),
        invalidText: "Must be a whole number between 900 and 7200",
        className: "fieldWidth leftTextAlign",
        min: 900,
        max: 7200
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(ToolTipWrapper, {
        tooltip: {
          content: "IP addresses and subnets from which IAM tokens can be created for the account",
          align: "top-left"
        },
        className: "textInputMedium",
        innerForm: react.TextArea,
        id: "iam-allowed-ip",
        labelText: "Allowed IPs",
        onChange: this.handleAllowedIps,
        placeholder: this.state.allowed_ip_addresses || "X.X.X.X, X.X.X.X/X, ...",
        invalid: iamUtils_1(this.state.allowed_ip_addresses),
        invalidText: "Please enter a comma separated list of IP addresses or CIDR blocks"
      })));
    }
  }]);
  return IamAccountSettingsForm;
}(React.Component);
IamAccountSettingsForm.defaultProps = {
  data: {
    if_match: "",
    mfa: mfaMenuItems[0],
    include_history: false,
    restrict_create_service_id: restrictMenuItems[0],
    restrict_create_platform_apikey: restrictMenuItems[0],
    max_sessions_per_identity: "",
    session_expiration_in_seconds: "",
    session_invalidation_in_seconds: "",
    allowed_ip_addresses: ""
  },
  invalidCallback: function invalidCallback() {
    return false;
  },
  invalidTextCallback: function invalidTextCallback() {
    return "Invalid";
  },
  isModal: false
};
IamAccountSettingsForm.propTypes = {
  data: PropTypes__default["default"].shape({
    if_match: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]).isRequired,
    mfa: PropTypes__default["default"].string.isRequired,
    include_history: PropTypes__default["default"].bool.isRequired,
    restrict_create_service_id: PropTypes__default["default"].oneOf(restrictMenuItems).isRequired,
    restrict_create_platform_apikey: PropTypes__default["default"].oneOf(restrictMenuItems).isRequired,
    max_sessions_per_identity: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]).isRequired,
    session_expiration_in_seconds: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]).isRequired,
    session_invalidation_in_seconds: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string]).isRequired,
    allowed_ip_addresses: PropTypes__default["default"].string.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
        className: "fieldWidth"
      })));
    }
  }]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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

<<<<<<< HEAD
var ObjectStorageBucketForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageBucketForm, _Component);
  var _super = _createSuper(ObjectStorageBucketForm);
  function ObjectStorageBucketForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageBucketForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleStorageClassChange = _this.handleStorageClassChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handler for toggle
   */
  _createClass(ObjectStorageBucketForm, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(this.toggleStateBoolean("force_delete", this.state));
    }

    /**
     * handle storage class change and convert to lowercase for value
     * @param {event} event event
     */
  }, {
    key: "handleStorageClassChange",
    value: function handleStorageClassChange(event) {
      this.setState({
        storage_class: event.target.value.toLowerCase()
      });
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
      // composed id for bucket
      var composedId = "bucket-form-".concat(this.props.data.name ? this.props.data.name : "new-bucket");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name,
        componentName: this.state.name,
        value: this.state.name,
        onChange: this.handleInputChange,
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state);
        },
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: this.state.name,
        formName: "Object Storage Bucket",
        name: "storage_class",
        groups: ["Standard", "Vault", "Cold", "Smart"],
        value: lazyZ.capitalize(this.state.storage_class),
        labelText: "Bucket Class",
        handleInputChange: this.handleStorageClassChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: this.state.name,
        formName: "Object Storage Bucket",
        name: "kms_key",
        groups: this.props.encryptionKeys,
        value: this.state.kms_key,
        labelText: "Encryption Key",
        handleInputChange: this.handleInputChange
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Toggling this on will force delete contents of the bucket after the bucket is deleted"
        },
        id: composedId + "force-delete",
        labelText: "Force Delete Contents",
        defaultToggled: this.state.force_delete,
        toggleFieldName: "force_delete",
        onToggle: this.handleToggle
      })));
    }
  }]);
  return ObjectStorageBucketForm;
}(React.Component);
ObjectStorageBucketForm.defaultProps = {
  data: {
    force_delete: false,
    name: "",
    storage_class: "Standard",
    kms_key: ""
  },
  encryptionKeys: []
};
ObjectStorageBucketForm.propTypes = {
  data: PropTypes__default["default"].shape({
    force_delete: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    storage_class: PropTypes__default["default"].string.isRequired,
    kms_key: PropTypes__default["default"].string
  }).isRequired,
  encryptionKeys: PropTypes__default["default"].array.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
/**
 * Object storage
 */
var ObjectStorageInstancesForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageInstancesForm, _Component);
  var _super = _createSuper(ObjectStorageInstancesForm);
  function ObjectStorageInstancesForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageInstancesForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  _createClass(ObjectStorageInstancesForm, [{
    key: "handleInputChange",
    value: function handleInputChange(name, value) {
      var inst = _objectSpread2({}, this.state);
      inst[name] = value;
      this.setState(_objectSpread2({}, inst));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$props;
      var composedId = "object-storage-form-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance."
        },
        id: composedId + "use-data",
        toggleFieldName: "use_data",
        labelText: "Use Existing Instance",
        defaultToggled: this.state.use_data,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments."
        },
        id: composedId + "random-suffix",
        labelText: "Append Random Suffix to Names",
        toggleFieldName: "random_suffix",
        defaultToggled: this.state.random_suffix,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.handleInputChange("name", event.target.value);
        },
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state, _this2.props);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: function handleInputChange(event) {
          return _this2.handleInputChange("resource_group", event.target.value);
        }
      })), this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.subForms.map(function (form, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: index
        }, form);
      })));
    }
  }]);
  return ObjectStorageInstancesForm;
}(React.Component);
ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    random_suffix: true
  },
  resourceGroups: []
};
ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes__default["default"].bool,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    resource_group: PropTypes__default["default"].string,
    random_suffix: PropTypes__default["default"].bool.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired,
  subForms: PropTypes__default["default"].arrayOf(PropTypes__default["default"].node)
};

>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$4 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$4);
=======
var css_248z$5 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
=======
var css_248z$5 = ".iconMargin {\r\n  margin: 0 0.5rem -0.4rem 0;\r\n}\r\n\r\n.inlineIconMargin {\r\n  margin: -0.4rem 0.05rem;\r\n}\r\n\r\n.marginBottomXs {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tileBackground {\r\n  background-color: #f4f4f4;\r\n}";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$5);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$6 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
=======
class ObjectStorageBucketForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStorageClassChange = this.handleStorageClassChange.bind(this);
  }

  /**
   * Handler for toggle
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("force_delete", this.state));
  }

  /**
   * handle storage class change
   * @param {event} event event
   */
  handleStorageClassChange(event) {
    this.setState({
      storage_class: event.target.value.toLowerCase()
    });
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    // composed id for bucket
    let composedId = `bucket-form-${this.props.data.name ? this.props.data.name : "new-bucket"}`;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: this.state.name,
      componentName: this.state.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      helperTextCallback: () => this.props.composedNameCallback(this.state),
      invalid: this.props.invalidCallback(this.state),
      invalidText: this.props.invalidTextCallback(this.state)
    }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      component: this.state.name,
      formName: "Object Storage Bucket",
      name: "storage_class",
      groups: ["Standard", "Vault", "Cold", "Smart"],
      value: lazyZ.capitalize(this.state.storage_class),
      labelText: "Bucket Class",
      handleInputChange: this.handleStorageClassChange
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      component: this.state.name,
      formName: "Object Storage Bucket",
      name: "kms_key",
      groups: this.props.encryptionKeys,
      value: this.state.kms_key,
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      tooltip: {
        content: "Toggling this on will force delete contents of the bucket after the bucket is deleted"
      },
      id: composedId + "force-delete",
      labelText: "Force Delete Contents",
      defaultToggled: this.state.force_delete,
      toggleFieldName: "force_delete",
      onToggle: this.handleToggle
    })));
  }
}
ObjectStorageBucketForm.defaultProps = {
  data: {
    force_delete: false,
    name: "",
    storage_class: "Standard",
    kms_key: ""
  },
  encryptionKeys: [],
  parentHasRandomSuffix: true
};
ObjectStorageBucketForm.propTypes = {
  data: PropTypes__default["default"].shape({
    force_delete: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    storage_class: PropTypes__default["default"].string.isRequired,
    kms_key: PropTypes__default["default"].string
  }).isRequired,
  encryptionKeys: PropTypes__default["default"].array.isRequired,
  parentHasRandomSuffix: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired
};

var css_248z$6 = ".iconMargin {\r\n  margin: 0 0.5rem -0.4rem 0;\r\n}\r\n\r\n.inlineIconMargin {\r\n  margin: -0.4rem 0.05rem;\r\n}\r\n\r\n.marginBottomXs {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tileBackground {\r\n  background-color: #f4f4f4;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$6);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var css_248z$6 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$6);
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 353b3a7 ($@)
var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
=======
var css_248z$4 = ".fieldWidthSmaller {\r\n  width: 11rem;\r\n}";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$4);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);
>>>>>>> 817ead3 (update build)
=======
var css_248z$5 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
=======
var css_248z$5 = ".fieldWidthSmaller {\r\n  width: 11rem;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$5);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var css_248z$5 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$5);
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
=======
/** Resource Groups
 * @param {Object} props
 */
var ResourceGroupForm = /*#__PURE__*/function (_Component) {
  _inherits(ResourceGroupForm, _Component);
  var _super = _createSuper(ResourceGroupForm);
  function ResourceGroupForm(props) {
    var _this;
    _classCallCheck(this, ResourceGroupForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  _createClass(ResourceGroupForm, [{
    key: "handleToggle",
    value: function handleToggle(name) {
      // Turn off the use_prefix toggle when create is turned off.
      if (name === "create" && this.state.create === true) {
        var _this$setState;
        this.setState((_this$setState = {}, _defineProperty(_this$setState, name, !this.state[name]), _defineProperty(_this$setState, "use_prefix", false), _this$setState));
      } else {
        this.setState(_defineProperty({}, name, !this.state[name]));
      }
    }

    /**
     * Handle input change for a text field
     * @param {event} event
     */
  }, {
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState(this.eventTargetToNameAndValue(event));
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
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

=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
      var _this2 = this;
      var composedId = "resource-group-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "If true, get data from an existing resource group"
        },
        labelText: "Use Existing Instance",
        toggleFieldName: this.props.toggleName,
        defaultToggled: !this.state.create,
        id: composedId + "-create-toggle",
        onToggle: function onToggle() {
          return _this2.handleToggle("create");
        },
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "resource_groups",
        value: this.state.name,
        onChange: this.handleTextInput,
        useData: this.state.create === false || this.state.use_prefix === false,
        invalidCallback: function invalidCallback() {
          return _this2.props.invalidCallback(_this2.state, _this2.props);
        },
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state, _this2.props);
        }
      }), this.state.create && /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Append your environment prefix to the beginning of the resource group."
        },
        labelText: "Use Prefix",
        defaultToggled: this.state.use_prefix,
        id: composedId + "-use-prefix-toggle",
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })));
    }
  }]);
  return ResourceGroupForm;
}(React.Component);
ResourceGroupForm.defaultProps = {
  data: {
    create: false,
    name: "",
    use_prefix: true
  },
  toggleName: "use_data",
  isModal: false
};
ResourceGroupForm.propTypes = {
  data: PropTypes__default["default"].shape({
    create: PropTypes__default["default"].bool,
    name: PropTypes__default["default"].string.isRequired,
    use_prefix: PropTypes__default["default"].bool
  }),
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
};

>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);
=======
var css_248z$4 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$4);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$5 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$5);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> 7d02243 (fix merge)

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
    itemToString: item => item ? item : "",
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
=======
var css_248z$4 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.fieldWidthSmaller {\r\n  width: 11rem;\r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$4);
=======
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$3);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))

var css_248z$3 = ".leftTextAlign {\r\n  text-align: left;\r\n}\r\n";
=======
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
styleInject(css_248z$3);

=======
var css_248z$4 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$4);
=======
var css_248z$5 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$5);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$4 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$4);
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))

>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$5 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$5);
=======
var css_248z$4 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$4);
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))

>>>>>>> 2a431c4 (feat: better exports)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);
=======
var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$1);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
<<<<<<< HEAD
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
styleInject(css_248z$3);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
styleInject(css_248z$3);
>>>>>>> 2a431c4 (feat: better exports)
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

/**
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
<<<<<<< HEAD
<<<<<<< HEAD
    className: lib_2("fieldWidth leftTextAlign", props),
    titleText: props.titleText,
<<<<<<< HEAD
<<<<<<< HEAD
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
<<<<<<< HEAD
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
=======
    itemToString: item => item ? item : "",
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SshKeyMultiSelect = props => {
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> f849341 (access group forms :100:)
=======
const SshKeyMultiSelect = props => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => {
=======
    onChange: function onChange(event) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    onChange: function onChange(event) {
>>>>>>> f849341 (access group forms :100:)
=======
    onChange: event => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    onChange: function onChange(event) {
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SecurityGroupMultiSelect = props => {
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> f849341 (access group forms :100:)
=======
const SecurityGroupMultiSelect = props => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => {
=======
    onChange: function onChange(event) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    onChange: function onChange(event) {
>>>>>>> f849341 (access group forms :100:)
=======
    onChange: event => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    onChange: function onChange(event) {
>>>>>>> 007ab0d (cos bucket form)
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    itemToString: item => item ? item : ""
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> f849341 (access group forms :100:)
=======
    itemToString: item => item ? item : ""
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SubnetMultiSelect = props => {
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> f849341 (access group forms :100:)
=======
const SubnetMultiSelect = props => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> 007ab0d (cos bucket form)
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
    initialSelectedItems: props.initialSelectedItems,
    invalidText: lazyZ.isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
    invalid: props.initialSelectedItems.length === 0,
    disabled: props.disabled,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> f849341 (access group forms :100:)
=======
    onChange: event => props.onChange(event.selectedItems)
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
  subnets: PropTypes__default["default"].object.isRequired,
=======
  subnets: PropTypes__default["default"].array.isRequired,
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
<<<<<<< HEAD
const VpcListMultiSelect = props => {
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> f849341 (access group forms :100:)
=======
const VpcListMultiSelect = props => {
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems),
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> f849341 (access group forms :100:)
=======
    onChange: event => props.onChange(event.selectedItems),
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
        flavor: _this.props.cluster.machine_type,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        subnetList: _this.props.cluster.subnetList,
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
=======
        flavor: _this.props.cluster.machine_type,
>>>>>>> 007ab0d (cos bucket form)
        subnets: _this.props.cluster.subnets,
        vpc_name: _this.props.cluster.vpc_name,
        workers_per_subnet: _this.props.cluster.workers_per_subnet,
        entitlement: _this.props.cluster.entitlement
      } : _this.props.data
<<<<<<< HEAD
=======
        flavor: this.props.cluster.machine_type,
        subnets: this.props.cluster.subnets,
        vpc_name: this.props.cluster.vpc_name,
        workers_per_subnet: this.props.cluster.workers_per_subnet,
        entitlement: this.props.cluster.entitlement
      } : this.props.data
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
>>>>>>> 007ab0d (cos bucket form)
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        subnets: this.props.data.subnets,
=======
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.data.subnetList,
>>>>>>> 7d02243 (fix merge)
=======
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.subnetList,
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.subnetList,
>>>>>>> f849341 (access group forms :100:)
=======
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.subnetList,
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
=======
  // Handle subnet multiselect change
  handleSubnetChange(event) {
    let pool = {
      ...this.state.pool
    };
    pool.subnets = event.selectedItems;
    this.setState({
      pool
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: "Worker Pools",
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
      initialSelectedItems: this.props.data.subnets,
      subnets: this.props.subnetList,
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
}
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
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
=======
  subnetList: PropTypes__default["default"].array.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  cluster: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string,
    // can be null
    machine_type: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
  }),
  // can be null
  data: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string.isRequired,
    flavor: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
    subnets: PropTypes__default["default"].array.isRequired
=======
    subnets: PropTypes__default["default"].array.isRequired,
    subnetList: PropTypes__default["default"].array.isRequired
>>>>>>> 7d02243 (fix merge)
=======
    subnets: PropTypes__default["default"].array.isRequired
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$3 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.fieldWidthSmaller {\r\n  width: 11rem;\r\n}\r\n";
styleInject(css_248z$3);
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);
>>>>>>> 01e0136 (classNames now as default prop (#40))

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React__default["default"].createElement(react.FilterableMultiSelect, {
    id: props.id,
    className: lib_2("leftTextAlign", props),
    titleText: props.titleText,
    itemToString: item => item ? item : "",
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
    className: lib_2("leftTextAlign", props),
    titleText: props.titleText,
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
<<<<<<< HEAD
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
  invalidText: "Invalid value",
  className: "fieldWidth"
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> 2a431c4 (feat: better exports)
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
    onChange: function onChange(event) {
>>>>>>> 2a431c4 (feat: better exports)
      props.onChange(event.selectedItems);
    },
    className: props.className
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> 2a431c4 (feat: better exports)
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error("SecurityGroupMultiselect requires a securityGroups object. Got " + lazyZ.prettyJSON(props.securityGroups));
  }
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: props.label,
    titleText: "Security Groups",
    className: props.className,
    initialSelectedItems: props.initialSelectedItems,
    vpc_name: props.vpc_name,
    invalid: props.invalid,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    invalidText: "Invalid Selection",
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
    itemToString: item => item ? item : ""
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
    invalidText: props.invalidText,
    onChange: function onChange(event) {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups,
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
  });
};
SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
  label: "Select Security Groups",
  invalid: false,
  className: "fieldWidthSmaller",
  invalidText: "Select at least one security group."
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
  securityGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalid: PropTypes__default["default"].bool.isRequired,
  invalidText: PropTypes__default["default"].string.isRequired
};

/**
 * vpc subnet multiselect
 */
<<<<<<< HEAD
<<<<<<< HEAD
const SubnetMultiSelect = props => {
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> 2a431c4 (feat: better exports)
  return /*#__PURE__*/React__default["default"].createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
<<<<<<< HEAD
<<<<<<< HEAD
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
=======
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
    items: lazyZ.isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
>>>>>>> 2a431c4 (feat: better exports)
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
  subnets: PropTypes__default["default"].object.isRequired,
=======
  subnets: PropTypes__default["default"].array.isRequired,
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
  subnets: PropTypes__default["default"].array.isRequired,
>>>>>>> 2a431c4 (feat: better exports)
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> 2a431c4 (feat: better exports)
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
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> 2a431c4 (feat: better exports)
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
var TransitGatewayForm = /*#__PURE__*/function (_Component) {
  _inherits(TransitGatewayForm, _Component);
  var _super = _createSuper(TransitGatewayForm);
  function TransitGatewayForm(props) {
    var _this;
    _classCallCheck(this, TransitGatewayForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleVpcSelect = _this.handleVpcSelect.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  _createClass(TransitGatewayForm, [{
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }

    /**
     * handle vpc selection
     * @param {event} event
     */
  }, {
    key: "handleVpcSelect",
    value: function handleVpcSelect(event) {
      this.setState({
        transit_gateway_connections: event
      });
    }

    /**
     * Handle input change
     * @param {event} event
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        labelText: "Use Transit Gateway",
        toggleFieldName: "enable_transit_gateway",
        id: "tg-enable",
        onToggle: this.handleToggle,
        defaultToggled: this.state.enable_transit_gateway
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        onChange: this.handleInputChange,
        componentName: "Transit Gateway",
        field: "name",
        value: this.state.name,
        readOnly: this.props.readOnlyName,
        id: "tg-name",
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Transit Gateway",
        value: this.state.transit_gateway_resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        name: "transit_gateway_resource_group",
        labelText: "Resource Group"
      }), /*#__PURE__*/React__default["default"].createElement(VpcListMultiSelect, {
        id: "tg-vpc-multiselect",
        titleText: "Connected VPCs",
        initialSelectedItems: this.state.transit_gateway_connections,
        vpcList: this.props.vpcList,
        onChange: this.handleVpcSelect,
        invalid: this.state.transit_gateway_connections.length === 0 && this.state.enable_transit_gateway,
        invalidText: "At least one VPC must be connected"
      })));
    }
  }]);
  return TransitGatewayForm;
}(React.Component);
TransitGatewayForm.defaultProps = {
  data: {
    enable_transit_gateway: true,
    transit_gateway_connections: [],
    transit_gateway_resource_group: "",
    name: ""
  },
  readOnlyName: true,
  vpcList: [],
  resourceGroups: []
};
TransitGatewayForm.propTypes = {
  data: PropTypes__default["default"].shape({
    enable_transit_gateway: PropTypes__default["default"].bool.isRequired,
    transit_gateway_connections: PropTypes__default["default"].array.isRequired,
    transit_gateway_resource_group: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string
  }).isRequired,
  readOnlyName: PropTypes__default["default"].bool.isRequired,
  vpcList: PropTypes__default["default"].array.isRequired,
  resourceGroups: PropTypes__default["default"].array.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
      this.setState(_defineProperty({}, name, !this.state[name]));
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 7d02243 (fix merge)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
        },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
        labelText: "Create Activity Tracker Route",
        defaultToggled: this.state.add_route,
        toggleFieldName: "add_route",
        onToggle: this.handleToggle,
        id: "app-id-add-route"
<<<<<<< HEAD
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
    resource_group: PropTypes__default["default"].string.isRequired,
    add_route: PropTypes__default["default"].bool.isRequired
  }).isRequired,
  prefix: PropTypes__default["default"].string.isRequired,
  cosKeys: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

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

=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> 0029142 (Migrated VpnGatewayForm to storybook (Issue #762) (#65))
var nameFields = ["default_network_acl_name", "default_routing_table_name", "default_security_group_name"];
var VpcNetworkForm = /*#__PURE__*/function (_React$Component) {
  _inherits(VpcNetworkForm, _React$Component);
  var _super = _createSuper(VpcNetworkForm);
  function VpcNetworkForm(props) {
    var _this;
    _classCallCheck(this, VpcNetworkForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handPgwToggle = _this.handPgwToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
<<<<<<< HEAD
=======
const nameFields = ["default_network_acl_name", "default_routing_table_name", "default_security_group_name"];
class VpcNetworkForm extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handPgwToggle = this.handPgwToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
>>>>>>> f44a27c (fix: titlecase)
=======
>>>>>>> 0029142 (Migrated VpnGatewayForm to storybook (Issue #762) (#65))
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(VpcNetworkForm, [{
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
     * handle change of public gateway by zone
     * @param {string} zone zone-1, zone-2, or zone-3
     */
  }, {
    key: "handPgwToggle",
    value: function handPgwToggle(zone) {
      var vpc = _objectSpread2({}, this.state);
      var currentGw = _objectSpread2({}, this.state.use_public_gateways);
      currentGw[zone] = !currentGw[zone];
      vpc.use_public_gateways = currentGw;
      this.setState(_objectSpread2({}, vpc));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "".concat(this.props.data.name, "-vpc-form");
      var classNameModalCheck = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        tooltip: {
          content: "This name will be prepended to all components within this VPC.",
          alignModal: "bottom-left",
          align: "bottom-left"
        },
        id: composedId + "-prefix",
        componentProps: this.props,
        component: "vpc",
        componentName: this.props.data.name,
        field: "name",
        labelText: "Name",
        placeholder: "my-vpc-name",
        hideHelperText: true,
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback("name", this.state, this.props),
        invalidText: this.props.invalidTextCallback("name", this.state, this.props),
        className: classNameModalCheck
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: "Resource Group",
        name: "resource_group",
        formName: "resource_group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.resource_group),
        invalidText: "Select a Resource Group.",
        className: classNameModalCheck
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: "Flow Logs Bucket Name",
        name: "flow_logs_bucket_name",
        formName: this.props.data.name + "-vpc",
        groups: this.props.cosBuckets,
        value: this.state.flow_logs_bucket_name || "",
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.flow_logs_bucket_name),
        invalidText: "Select a Bucket.",
        className: classNameModalCheck
      })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "VPC Options",
        type: "subHeading"
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        id: this.props.data.name + "-classic-access",
        labelText: "Classic Infrastructure Access",
        toggleFieldName: "classic_access",
        defaultToggled: this.state.classic_access,
        onToggle: this.handleToggle,
        className: classNameModalCheck + " leftTextAlign"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, nameFields.map(function (field) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "fitContent",
          key: _this2.props.data.name + "-" + lazyZ.kebabCase(field) + "-div"
        }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
          id: composedId + "-" + field,
          componentName: "VPC Network",
          field: field,
          labelText: lazyZ.titleCase(field),
          value: _this2.state[field],
          onChange: _this2.handleInputChange,
          invalid: _this2.props.invalidCallback(field, _this2.state, _this2.props),
          invalidText: _this2.props.invalidTextCallback(field, _this2.state, _this2.props),
          className: classNameModalCheck
        }));
      })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Public Gateways",
        type: "subHeading",
        noLabelText: true,
        tooltip: {
          content: "Public Gateways allow for all resources in a zone to communicate with the public internet. Public Gateways are not needed for subnets where a VPN gateway is created."
        }
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, ["zone-1", "zone-2", "zone-3"].map(function (zone) {
        return /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
          key: _this2.props.data.name + "-gateway-toggle-" + zone,
          id: _this2.props.data.name + "-pgw-" + zone,
          labelText: "Create in Zone " + lazyZ.parseIntFromZone(zone),
          defaultToggled: _this2.state.use_public_gateways[zone],
          onToggle: function onToggle() {
            return _this2.handPgwToggle(zone);
          },
          className: classNameModalCheck + " leftTextAlign"
        });
      })));
    }
  }]);
  return VpcNetworkForm;
}(React__default["default"].Component);
VpcNetworkForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    flow_logs_bucket_name: "",
    default_network_acl_name: "",
    default_routing_table_name: "",
    default_security_group_name: "",
    classic_access: false,
    use_manual_address_prefixes: false,
    use_public_gateways: {
      "zone-1": false,
      "zone-2": false,
      "zone-3": false
    }
  },
  isModal: false
};
VpcNetworkForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string,
    flow_logs_bucket_name: PropTypes__default["default"].string,
    default_network_acl_name: PropTypes__default["default"].string,
    default_security_group_name: PropTypes__default["default"].string,
    default_routing_table_name: PropTypes__default["default"].string,
    classic_access: PropTypes__default["default"].bool.isRequired,
    use_manual_address_prefixes: PropTypes__default["default"].bool.isRequired,
    use_public_gateways: PropTypes__default["default"].object.isRequired
  }),
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

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
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.subnetList,
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
  subnetList: PropTypes__default["default"].array.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  cluster: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string,
    // can be null
    machine_type: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
  }),
  // can be null
  data: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string.isRequired,
    flavor: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
  }).isRequired
};

/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
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
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z);
=======
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$1);
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> 68bf364 (feat: subnet tile form)
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> 2a431c4 (feat: better exports)
=======
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z);
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======
var css_248z$3 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
=======
var css_248z$3 = ".marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.positionRelative {\n  position: relative;\n}\n";
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
styleInject(css_248z$3);
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

<<<<<<< HEAD
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
      }), this.props.hideAbout ? this.props.form : /*#__PURE__*/React__default["default"].createElement(react.Tabs, {
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
<<<<<<< HEAD
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
=======
var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
>>>>>>> 817ead3 (update build)

=======
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);
=======
var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$1);
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);
>>>>>>> 817ead3 (update build)

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
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
styleInject(css_248z$1);
>>>>>>> 817ead3 (update build)

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
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
=======
var css_248z$1 = ".cds--tab-content.doc {\r\n    padding: 0.5rem 0;\r\n  }";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$1);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
styleInject(css_248z$1);
>>>>>>> 7d02243 (fix merge)

=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
=======
var css_248z$2 = ".cds--tab-content.doc {\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n.cds--tab-content:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$2);

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
>>>>>>> 817ead3 (update build)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
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
=======
>>>>>>> 817ead3 (update build)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f680a35 (almost done)
=======
=======
>>>>>>> 7d02243 (fix merge)
var css_248z = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
=======
var css_248z = ".leftTextAlign {\r\n  text-align: left;\r\n}\r\n\r\n.fieldWidthBigger {\r\n  width: 30rem\r\n}\r\n";
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
var css_248z$1 = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
=======
var css_248z$1 = ".about {\r\n  padding: 2rem 1rem;\r\n  line-height: 1.5;\r\n}\r\n\r\n.smallerText {\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$1);

var DocTextField = function DocTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired
};
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React__default["default"].createElement(react.StructuredListHead, null, /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React__default["default"].createElement(react.StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes__default["default"].array,
  list: PropTypes__default["default"].array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React__default["default"].createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes__default["default"].array.isRequired
};
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
    /*#__PURE__*/
    // text field
    React__default["default"].createElement(DocTextField, _extends({
      key: index
    }, field)) : field.subHeading ?
    /*#__PURE__*/
    // subheading
    React__default["default"].createElement("h6", {
      className: "marginBottomSmall",
      key: index
    }, field.subHeading) :
    /*#__PURE__*/
    // table
    React__default["default"].createElement(DocTable, {
      key: index,
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React__default["default"].createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    text: PropTypes__default["default"].string,
    className: PropTypes__default["default"].string,
    table: PropTypes__default["default"].array,
    subHeading: PropTypes__default["default"].string
  })).isRequired,
  relatedLinks: PropTypes__default["default"].array
};

<<<<<<< HEAD
var css_248z = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
var css_248z = ".leftTextAlign {\r\n  text-align: left;\r\n}\r\n\r\n.fieldWidthBigger {\r\n  width: 30rem\r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z);
=======
var css_248z$1 = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z$1);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

var DocTextField = function DocTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired
};
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React__default["default"].createElement(react.StructuredListHead, null, /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React__default["default"].createElement(react.StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes__default["default"].array,
  list: PropTypes__default["default"].array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React__default["default"].createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes__default["default"].array.isRequired
};
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
    /*#__PURE__*/
    // text field
    React__default["default"].createElement(DocTextField, _extends({
      key: index
    }, field)) : field.subHeading ?
    /*#__PURE__*/
    // subheading
    React__default["default"].createElement("h6", {
      className: "marginBottomSmall",
      key: index
    }, field.subHeading) :
    /*#__PURE__*/
    // table
    React__default["default"].createElement(DocTable, {
      key: index,
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React__default["default"].createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    text: PropTypes__default["default"].string,
    className: PropTypes__default["default"].string,
    table: PropTypes__default["default"].array,
    subHeading: PropTypes__default["default"].string
  })).isRequired,
  relatedLinks: PropTypes__default["default"].array
};

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 817ead3 (update build)
=======
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
class IcseFormTemplate extends React__default["default"].Component {
  constructor(props) {
    super(props);
    this.state = {
=======
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> d0c2ed2 (Issue 687: IamAccountSettingsForm (#34))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
var IcseFormTemplate = /*#__PURE__*/function (_React$Component) {
  _inherits(IcseFormTemplate, _React$Component);
  var _super = _createSuper(IcseFormTemplate);
  function IcseFormTemplate(props) {
    var _this;
    _classCallCheck(this, IcseFormTemplate);
    _this = _super.call(this, props);
    _this.state = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
      showModal: false,
      shownArrayForms: [],
      // list of array forms to keep open on save
      shownChildForms: [] // list of child forms to keep open on save
    };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.onChildToggle = this.onChildToggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
=======
=======
>>>>>>> f849341 (access group forms :100:)
    _this.onChildToggle = _this.onChildToggle.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.shouldShow = _this.shouldShow.bind(_assertThisInitialized(_this));
<<<<<<< HEAD
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
    // add an array to track middle forms
    if (_this.props.isMiddleForm) {
      _this.props.arrayData.forEach(function () {
        return _this.state.shownChildForms.push([]);
      });
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
    _this.onChildToggle = _this.onChildToggle.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.shouldShow = _this.shouldShow.bind(_assertThisInitialized(_this));
    // add an array to track middle forms
    if (_this.props.isMiddleForm) {
      _this.props.arrayData.forEach(function () {
        return _this.state.shownChildForms.push([]);
      });
    }
    return _this;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
    return _this;
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
    return _this;
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
  }

  /**
   * keep update forms open
   * @param {number} index index to keep open
   * @param {number=} childIndex optional child index
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  onChildToggle(index, childIndex) {
    if (this.props.parentToggle) {
      // if the parent toggle is passed, run the callback (this function on parent form)
      // with parent index and current index
      this.props.parentToggle.callback(this.props.parentToggle.index, index);
    } else if (arguments.length !== 1) {
      // if a second param is passed
      let shownChildForms = [...this.state.shownChildForms]; // all forms
      // if contains index
      if (lazyZ.contains(this.state.shownChildForms[index], childIndex)) {
        // remove index from list
        shownChildForms[index].splice(index, 1);
=======
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
  _createClass(IcseFormTemplate, [{
    key: "onChildToggle",
    value: function onChildToggle(index, childIndex) {
      if (this.props.parentToggle) {
        // if the parent toggle is passed, run the callback (this function on parent form)
        // with parent index and current index
        this.props.parentToggle.callback(this.props.parentToggle.index, index);
      } else if (arguments.length !== 1) {
        // if a second param is passed
        var shownChildForms = _toConsumableArray(this.state.shownChildForms); // all forms
        // if contains index
        if (lazyZ.contains(this.state.shownChildForms[index], childIndex)) {
          // remove index from list
          shownChildForms[index].splice(index, 1);
        } else {
          // otherwise add
          shownChildForms[index].push(childIndex);
        }
        this.setState({
          shownChildForms: shownChildForms
        });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
      } else {
        // if only parent index
        var shownForms = _toConsumableArray(this.state.shownArrayForms); // all forms
        if (lazyZ.contains(this.state.shownArrayForms, index)) {
          // remove if contains
          shownForms.splice(index, 1);
        } else shownForms.push(index);
        this.setState({
          shownArrayForms: shownForms
        });
      }
    }

    /**
     * on modal submit
     * @param {*} data arbitrary data
     */
  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.onSubmit(data, this.props);
      this.toggleModal();
    }

    /**
     * toggle modal on and off
     */
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }

    /**
     * check if form should show
     * @returns {bool} if the child forms should show
     */
  }, {
    key: "shouldShow",
    value: function shouldShow(index) {
      return this.props.parentToggle ? lazyZ.contains(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
      : lazyZ.contains(this.state.shownArrayForms, index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var formattedName = lazyZ.kebabCase(this.props.name); // formatted component name
      // enable submit field here is set to variable value to allow for passing to
      // child array components without needing to reference `this` directly
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: formattedName
      }, /*#__PURE__*/React__default["default"].createElement(StatefulTabPanel, {
        name: this.props.name,
        onClick: this.toggleModal,
        addText: this.props.addText,
        hideButton: this.props.hideFormTitleButton,
        subHeading: this.props.subHeading,
        className: this.props.subHeading ? "subHeading marginBottomSmall" : "",
        tooltip: this.props.tooltip,
        about: this.props.docs ? this.props.docs() : false,
<<<<<<< HEAD
<<<<<<< HEAD
=======
        hideAbout: this.props.hideAbout,
>>>>>>> f849341 (access group forms :100:)
=======
        hideAbout: this.props.hideAbout,
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
        form: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
          name: this.props.name,
          showIfEmpty: this.props.arrayData
        }), this.props.arrayData.map(function (data, index) {
          var _this2$props, _this2$props2;
          // return a form with the index and props
          return /*#__PURE__*/React__default["default"].createElement(ToggleForm, _extends({}, _this2.props.toggleFormProps, {
            tabPanel: {
              name: _this2.props.name,
              hideAbout: true,
              // passed to ignore second tab panel
              hasBuiltInHeading: true // passed to ignore second tabPanel
            },

            key: _this2.props.name + "-" + index,
            innerForm: _this2.props.innerForm,
            innerFormProps: _objectSpread2(_objectSpread2({}, _this2.props.innerFormProps), {}, {
              data: _objectSpread2({}, data)
            }) // merge data into innerForm props
            ,
            arrayParentName: _this2.props.arrayParentName,
            onShowToggle: _this2.onChildToggle,
            onChildShowToggle: _this2.props.isMiddleForm ? _this2.onChildToggle // pass through to child component if middle form
            : false,
            index: index,
            show: _this2.shouldShow(index),
            shownChildren: _this2.state.shownChildForms,
            onSave: (_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.onSave,
            onDelete: (_this2$props2 = _this2.props) === null || _this2$props2 === void 0 ? void 0 : _this2$props2.onDelete
          }));
        }), /*#__PURE__*/React__default["default"].createElement(FormModal, {
          name: this.props.addText,
          show: this.state.showModal,
          onRequestSubmit: this.onSubmit,
          onRequestClose: this.toggleModal,
          arrayParentName: this.props.arrayParentName
        },
        // render the form inside the modal
        RenderForm(this.props.innerForm, _objectSpread2(_objectSpread2({}, this.props.innerFormProps), {}, {
          arrayParentName: this.props.arrayParentName,
          isModal: true,
          shouldDisableSubmit: function shouldDisableSubmit() {
            // references to `this` in function are intentionally vague
            // in order to pass the correct functions and field values to the
            // child modal component
            // by passing `this` in a function that it scoped to the component
            // we allow the function to be successfully bound to the modal form
            // while still referencing the local value `enableSubmitField`
            // to use it's own values for state and props including enableModal
            // and disableModal, which are dynamically added to the component
            // at time of render
            if (this.props.disableSave(this.state, this.props) === false) {
              this.props.enableModal();
            } else {
              this.props.disableModal();
            }
          }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        }
      }))),
      hideFormTitleButton: this.props.hideFormTitleButton
    }));
  }
}
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
  _createClass(IcseFormTemplate, [{
    key: "onChildToggle",
    value: function onChildToggle(index, childIndex) {
      if (this.props.parentToggle) {
        // if the parent toggle is passed, run the callback (this function on parent form)
        // with parent index and current index
        this.props.parentToggle.callback(this.props.parentToggle.index, index);
      } else if (arguments.length !== 1) {
        // if a second param is passed
        var shownChildForms = _toConsumableArray(this.state.shownChildForms); // all forms
        // if contains index
        if (lazyZ.contains(this.state.shownChildForms[index], childIndex)) {
          // remove index from list
          shownChildForms[index].splice(index, 1);
        } else {
          // otherwise add
          shownChildForms[index].push(childIndex);
        }
        this.setState({
          shownChildForms: shownChildForms
        });
      } else {
        // if only parent index
        var shownForms = _toConsumableArray(this.state.shownArrayForms); // all forms
        if (lazyZ.contains(this.state.shownArrayForms, index)) {
          // remove if contains
          shownForms.splice(index, 1);
        } else shownForms.push(index);
        this.setState({
          shownArrayForms: shownForms
        });
      }
    }

    /**
     * on modal submit
     * @param {*} data arbitrary data
     */
  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.onSubmit(data, this.props);
      this.toggleModal();
    }

    /**
     * toggle modal on and off
     */
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }

    /**
     * check if form should show
     * @returns {bool} if the child forms should show
     */
  }, {
    key: "shouldShow",
    value: function shouldShow(index) {
      return this.props.parentToggle ? lazyZ.contains(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
      : lazyZ.contains(this.state.shownArrayForms, index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var formattedName = lazyZ.kebabCase(this.props.name); // formatted component name
      // enable submit field here is set to variable value to allow for passing to
      // child array components without needing to reference `this` directly
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: formattedName
      }, /*#__PURE__*/React__default["default"].createElement(StatefulTabPanel, {
        name: this.props.name,
        onClick: this.toggleModal,
        addText: this.props.addText,
        hideButton: this.props.hideFormTitleButton,
        subHeading: this.props.subHeading,
        className: this.props.subHeading ? "subHeading marginBottomSmall" : "",
        tooltip: this.props.tooltip,
        about: this.props.docs ? this.props.docs() : false,
<<<<<<< HEAD
=======
        hideAbout: this.props.hideAbout,
>>>>>>> 2a431c4 (feat: better exports)
        form: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
          name: this.props.name,
          showIfEmpty: this.props.arrayData
        }), this.props.arrayData.map(function (data, index) {
          var _this2$props, _this2$props2;
          // return a form with the index and props
          return /*#__PURE__*/React__default["default"].createElement(ToggleForm, _extends({}, _this2.props.toggleFormProps, {
            tabPanel: {
              name: _this2.props.name,
              hideAbout: true,
              // passed to ignore second tab panel
              hasBuiltInHeading: true // passed to ignore second tabPanel
            },

            key: _this2.props.name + "-" + index,
            innerForm: _this2.props.innerForm,
            innerFormProps: _objectSpread2(_objectSpread2({}, _this2.props.innerFormProps), {}, {
              data: _objectSpread2({}, data)
            }) // merge data into innerForm props
            ,
            arrayParentName: _this2.props.arrayParentName,
            onShowToggle: _this2.onChildToggle,
            onChildShowToggle: _this2.props.isMiddleForm ? _this2.onChildToggle // pass through to child component if middle form
            : false,
            index: index,
            show: _this2.shouldShow(index),
            shownChildren: _this2.state.shownChildForms,
            onSave: (_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.onSave,
            onDelete: (_this2$props2 = _this2.props) === null || _this2$props2 === void 0 ? void 0 : _this2$props2.onDelete
          }));
        }), /*#__PURE__*/React__default["default"].createElement(FormModal, {
          name: this.props.addText,
          show: this.state.showModal,
          onRequestSubmit: this.onSubmit,
          onRequestClose: this.toggleModal,
          arrayParentName: this.props.arrayParentName
        },
        // render the form inside the modal
        RenderForm(this.props.innerForm, _objectSpread2(_objectSpread2({}, this.props.innerFormProps), {}, {
          arrayParentName: this.props.arrayParentName,
          isModal: true,
          shouldDisableSubmit: function shouldDisableSubmit() {
            // references to `this` in function are intentionally vague
            // in order to pass the correct functions and field values to the
            // child modal component
            // by passing `this` in a function that it scoped to the component
            // we allow the function to be successfully bound to the modal form
            // while still referencing the local value `enableSubmitField`
            // to use it's own values for state and props including enableModal
            // and disableModal, which are dynamically added to the component
            // at time of render
            if (this.props.disableSave(this.state, this.props) === false) {
              this.props.enableModal();
            } else {
              this.props.disableModal();
            }
          }
<<<<<<< HEAD
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
        })))),
        hideFormTitleButton: this.props.hideFormTitleButton
      }));
    }
  }]);
  return IcseFormTemplate;
}(React__default["default"].Component);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
IcseFormTemplate.defaultProps = {
  hideFormTitleButton: false,
  subHeading: false,
  arrayParentName: null,
  isMiddleForm: false,
  hideAbout: false
};
IcseFormTemplate.propTypes = {
  name: PropTypes__default["default"].string,
  // can be null
  arrayData: PropTypes__default["default"].array.isRequired,
  parentToggle: PropTypes__default["default"].shape({
    // used to track open and closed middle forms
    callback: PropTypes__default["default"].func.isRequired,
    shownChildren: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].number)).isRequired
  }),
  onSubmit: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired,
  onSave: PropTypes__default["default"].func.isRequired,
  addText: PropTypes__default["default"].string,
  hideFormTitleButton: PropTypes__default["default"].bool.isRequired,
  subHeading: PropTypes__default["default"].bool.isRequired,
  docs: PropTypes__default["default"].func,
  // only used on top level components
  tooltip: PropTypes__default["default"].object,
  // used only for cos keys
  arrayParentName: PropTypes__default["default"].string,
  isMiddleForm: PropTypes__default["default"].bool.isRequired,
  innerFormProps: PropTypes__default["default"].shape({
    disableSave: PropTypes__default["default"].func.isRequired
  }).isRequired,
  toggleFormProps: PropTypes__default["default"].shape({
    disableSave: PropTypes__default["default"].func.isRequired,
    propsMatchState: PropTypes__default["default"].func.isRequired
  }).isRequired,
  hideAbout: PropTypes__default["default"].bool
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
var AccessGroupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AccessGroupForm, _React$Component);
  var _super = _createSuper(AccessGroupForm);
  function AccessGroupForm(props) {
    var _this;
    _classCallCheck(this, AccessGroupForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
=======
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
var services = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr"
};
var serviceGroups = ["Hyper Protect Crypto Services", "Key Protect", "Object Storage", "Container Registry"];

/**
 * Vpe Form
 */
var VpeForm = /*#__PURE__*/function (_Component) {
  _inherits(VpeForm, _Component);
  var _super = _createSuper(VpeForm);
  function VpeForm(props) {
    var _this;
    _classCallCheck(this, VpeForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleServiceDropdown = _this.handleServiceDropdown.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelect = _this.handleMultiSelect.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
    return _this;
  }

  /**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
   * Handle input change
   * @param {event} event
   */
  _createClass(VpeForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle service dropdown
     * @param {event} event event
     */
  }, {
    key: "handleServiceDropdown",
    value: function handleServiceDropdown(event) {
      this.setState({
        service: services[event.target.value]
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

    /**
     * handle multiselects
     * @param {event} event
     */
  }, {
    key: "handleMultiSelect",
    value: function handleMultiSelect(name, event) {
      this.setState(_defineProperty({}, name, event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Vpe",
        field: "vpc",
        labelText: "VPC Name",
        className: "fieldWidthSmaller",
        value: this.state.vpc,
        onChange: function onChange() {} // nothing
        ,
        readOnly: true,
        id: "vpe-vpc-name",
        invalid: false
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "service",
        formName: "vpe",
        groups: serviceGroups,
        value: services[this.state.service],
        labelText: "Service Type",
        handleInputChange: this.handleServiceDropdown,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      }), /*#__PURE__*/React__default["default"].createElement(SecurityGroupMultiSelect, {
        id: "vpe-security-groups",
        initialSelectedItems: this.state.security_groups,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("security_groups", event);
        },
        securityGroups: this.props.securityGroups,
        className: "fieldWidthSmaller",
        invalid: this.state.security_groups.length === 0
      }), /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "vpe-subnets",
        initialSelectedItems: this.state.subnets,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("subnets", event);
        },
        subnets: this.props.subnetList,
        className: "fieldWidthSmaller"
      })));
    }
  }]);
  return VpeForm;
}(React.Component);
VpeForm.defaultProps = {
  data: {
    vpc: "",
    service: "kms",
    resource_group: "",
    security_groups: [],
    subnets: []
  },
  resourceGroups: [],
  subnetList: [],
  securityGroups: [],
  isModal: false
};
VpeForm.propTypes = {
  data: PropTypes__default["default"].shape({
    vpc: PropTypes__default["default"].string.isRequired,
    service: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    security_groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
    subnets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
  }),
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  subnetList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  securityGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

/**
 * Object storage
 */
var ObjectStorageInstancesForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageInstancesForm, _Component);
  var _super = _createSuper(ObjectStorageInstancesForm);
  function ObjectStorageInstancesForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageInstancesForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  _createClass(ObjectStorageInstancesForm, [{
    key: "handleInputChange",
    value: function handleInputChange(name, value) {
      var inst = _objectSpread2({}, this.state);
      inst[name] = value;
      this.setState(_objectSpread2({}, inst));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$props;
      var composedId = "object-storage-form-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance."
        },
        id: composedId + "use-data",
        toggleFieldName: "use_data",
        labelText: "Use Existing Instance",
        defaultToggled: this.state.use_data,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments."
        },
        id: composedId + "random-suffix",
        labelText: "Append Random Suffix to Names",
        toggleFieldName: "random_suffix",
        defaultToggled: this.state.random_suffix,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.handleInputChange("name", event.target.value);
        },
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state, _this2.props);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: function handleInputChange(event) {
          return _this2.handleInputChange("resource_group", event.target.value);
        }
      })), this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.subForms.map(function (form, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: index
        }, form);
      })));
    }
  }]);
  return ObjectStorageInstancesForm;
}(React.Component);
ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    random_suffix: true
  },
  resourceGroups: []
};
ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes__default["default"].bool,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    resource_group: PropTypes__default["default"].string,
    random_suffix: PropTypes__default["default"].bool.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired,
  subForms: PropTypes__default["default"].arrayOf(PropTypes__default["default"].node)
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
var VsiForm = /*#__PURE__*/function (_Component) {
  _inherits(VsiForm, _Component);
  var _super = _createSuper(VsiForm);
  function VsiForm(props) {
    var _this;
    _classCallCheck(this, VsiForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelectChange = _this.handleMultiSelectChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VsiForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var stateChangeParams = _defineProperty({}, name, name === "vsi_per_subnet" && value !== "" ? Number(value) : value);
      if (name === "vpc_name") lazyZ.transpose({
        subnet_names: [],
        subnet_name: ""
      }, stateChangeParams);
      this.setState(stateChangeParams);
    }
  }, {
    key: "handleMultiSelectChange",
    value: function handleMultiSelectChange(name, value) {
<<<<<<< HEAD
<<<<<<< HEAD
      console.log(name, value);
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
      this.setState(this.setNameToValue(name, value));
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "vsi-deployment-form-".concat(this.props.data.name);
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "vsi",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroupList,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name),
        invalidText: "Select a VPC."
      }), this.props.isTeleport ?
      /*#__PURE__*/
      // render dropdown for teleport instance
      React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "subnet_name",
        labelText: "Subnet",
        groups: this.props.subnetList,
        value: this.state.subnet_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name) || lib_4(this.state.subnet_name),
        invalidText: lib_4(this.state.vpc_name) ? "No VPC Selected." : "Select a Subnet."
      }) : /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "subnet",
        initialSelectedItems: this.state.subnet_names,
        vpc_name: this.state.vpc_name,
        subnets: this.props.subnetList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("subnet_names", value);
        }
      }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
        label: "Instances per Subnet",
        id: composedId + "-vsi-per-subnet",
        allowEmpty: false,
        value: this.state.vsi_per_subnet,
        defaultValue: 1,
        max: 10,
        min: 1,
        onChange: this.handleInputChange,
        name: "vsi_per_subnet",
        hideSteppers: true,
        invalidText: "Please input a number 1-10",
        className: "fieldWidth leftTextAlign"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(SshKeyMultiSelect, {
        id: "sshkey",
        sshKeys: this.props.sshKeyList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("ssh_keys", value);
        },
        initialSelectedItems: this.state.ssh_keys
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "vsi_form",
        labelText: "Image",
        name: "image_name",
        apiEndpoint: this.props.apiEndpointImages,
        handleInputChange: this.handleInputChange,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        invalid: this.invalidCallback,
        invalidText: this.invalidTextCallback
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
=======
        value: this.state.image_name
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
>>>>>>> c9d8670 (add fetch selects for flavor and image, update readme and example)
=======
        value: this.state.image_name
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
>>>>>>> 2a431c4 (feat: better exports)
=======
        value: this.state.image_name
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
        formName: "vsi_form",
        labelText: "Flavor",
        name: "machine_type",
        apiEndpoint: this.props.apiEndpointFlavors,
        handleInputChange: this.handleInputChange,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        invalid: this.invalidCallback,
        invalidText: this.invalidTextCallback
=======
        value: this.state.machine_type
>>>>>>> c9d8670 (add fetch selects for flavor and image, update readme and example)
=======
        value: this.state.machine_type
>>>>>>> 2a431c4 (feat: better exports)
=======
        value: this.state.machine_type
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "boot_volume_encryption_key_name",
        labelText: "Encryption Key",
        groups: this.props.encryptionKeyList,
        value: this.state.boot_volume_encryption_key_name,
        handleInputChange: this.handleInputChange,
<<<<<<< HEAD
<<<<<<< HEAD
        invalid: this.invalidCallback,
        invalidText: this.invalidTextCallback
=======
        invalid: this.props.invalidCallback(this.state),
        invalidText: "Select a valid encryption key."
>>>>>>> 2a431c4 (feat: better exports)
=======
        invalid: this.props.invalidCallback(this.state),
        invalidText: "Select a valid encryption key."
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        id: composedId + "-fips-toggle",
        labelText: "Enable Floating IP",
        defaultToggled: this.state.enable_floating_ip,
        onToggle: this.handleToggle
      })), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
        hide: this.props.isTeleport,
        show: /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.TextArea, {
          id: composedId + "-vsi-user-data",
<<<<<<< HEAD
<<<<<<< HEAD
          invalidText: "Invalid error message.",
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
          placeholder: "Cloud init data",
          labelText: "User Data",
          name: "user_data",
          value: this.state.user_data || "",
          onChange: this.handleInputChange,
<<<<<<< HEAD
<<<<<<< HEAD
=======
          invalidText: "Invalid error message.",
>>>>>>> 2a431c4 (feat: better exports)
=======
          invalidText: "Invalid error message.",
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
          className: "fieldWidthBigger"
        }))
      }));
    }
  }]);
  return VsiForm;
}(React.Component);
<<<<<<< HEAD
<<<<<<< HEAD
=======
class VsiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    let stateChangeParams = {
      [name]: name === "vsi_per_subnet" && value !== "" ? Number(value) : value
    };
    if (name === "vpc_name") lazyZ.transpose({
      subnet_names: [],
      subnet_name: ""
    }, stateChangeParams);
    this.setState(stateChangeParams);
  }
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = `vsi-deployment-form-${this.props.data.name}`;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: composedId,
      componentName: "vsi",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state),
      invalidText: this.props.invalidTextCallback(this.state),
      hideHelperText: true
    }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "vsi_form",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroupList,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "vsi_form",
      name: "vpc_name",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc_name,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc_name),
      invalidText: "Select a VPC."
    }), this.props.isTeleport ?
    /*#__PURE__*/
    // render dropdown for teleport instance
    React__default["default"].createElement(IcseSelect, {
      formName: "vsi_form",
      name: "subnet_name",
      labelText: "Subnet",
      groups: this.props.subnetList,
      value: this.state.subnet_name,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc_name) || lib_4(this.state.subnet_name),
      invalidText: lib_4(this.state.vpc_name) ? `No VPC Selected.` : `Select a Subnet.`
    }) : /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
      id: "subnet",
      initialSelectedItems: this.state.subnet_names,
      vpc_name: this.state.vpc_name,
      subnets: this.props.subnetList,
      onChange: value => this.handleMultiSelectChange("subnet_names", value)
    }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
      label: "Instances per Subnet",
      id: composedId + "-vsi-per-subnet",
      allowEmpty: false,
      value: this.state.vsi_per_subnet,
      defaultValue: 1,
      max: 10,
      min: 1,
      onChange: this.handleInputChange,
      name: "vsi_per_subnet",
      hideSteppers: true,
      invalidText: "Please input a number 1-10",
      className: "fieldWidth leftTextAlign"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(SshKeyMultiSelect, {
      id: "sshkey",
      sshKeys: this.props.sshKeyList,
      onChange: value => this.handleMultiSelectChange("ssh_keys", value),
      initialSelectedItems: this.state.ssh_keys
    }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
      formName: "vsi_form",
      labelText: "Image",
      name: "image_name",
      apiEndpoint: this.props.apiEndpointImages,
      handleInputChange: this.handleInputChange,
      value: this.state.image_name
    }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
      formName: "vsi_form",
      labelText: "Flavor",
      name: "machine_type",
      apiEndpoint: this.props.apiEndpointFlavors,
      handleInputChange: this.handleInputChange,
      value: this.state.machine_type
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      formName: "vsi_form",
      name: "boot_volume_encryption_key_name",
      labelText: "Encryption Key",
      groups: this.props.encryptionKeyList,
      value: this.state.boot_volume_encryption_key_name,
      handleInputChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state),
      invalidText: "Select a valid encryption key."
    }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
      id: composedId + "-fips-toggle",
      labelText: "Enable Floating IP",
      defaultToggled: this.state.enable_floating_ip,
      onToggle: this.handleToggle
    })), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
      hide: this.props.isTeleport,
      show: /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.TextArea, {
        id: composedId + "-vsi-user-data",
        placeholder: "Cloud init data",
        labelText: "User Data",
        name: "user_data",
        value: this.state.user_data || "",
        onChange: this.handleInputChange,
        invalidText: "Invalid error message.",
        className: "fieldWidthBigger"
      }))
    }));
  }
}
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
VsiForm.defaultProps = {
  data: {
    name: "",
    ssh_keys: [],
    subnet_name: "",
    subnet_names: [],
    enable_floating_ip: false,
    vpc_name: "",
    image_name: "",
    machine_type: "",
    resource_group: "",
    boot_volume_encryption_key_name: "",
    vsi_per_subnet: 1
  },
  isModal: false,
  isTeleport: false,
  resourceGroupList: [],
  vpcList: [],
  subnetList: [],
  sshKeyList: [],
  encryptionKeyList: [],
  apiEndpointImages: "",
  apiEndpointFlavors: ""
};
VsiForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    ssh_keys: PropTypes__default["default"].array,
    subnet_name: PropTypes__default["default"].string,
    subnet_names: PropTypes__default["default"].array,
    enable_floating_ip: PropTypes__default["default"].bool,
    vpc_name: PropTypes__default["default"].string,
    image_name: PropTypes__default["default"].string,
    machine_type: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    boot_volume_encryption_key_name: PropTypes__default["default"].string,
    vsi_per_subnet: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }).isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  isModal: PropTypes__default["default"].bool.isRequired,
  isTeleport: PropTypes__default["default"].bool.isRequired,
=======
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
  /* bools */
  isModal: PropTypes__default["default"].bool.isRequired,
  isTeleport: PropTypes__default["default"].bool.isRequired,
  /* lists */
<<<<<<< HEAD
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
  resourceGroupList: PropTypes__default["default"].array.isRequired,
  vpcList: PropTypes__default["default"].array.isRequired,
  subnetList: PropTypes__default["default"].array.isRequired,
  sshKeyList: PropTypes__default["default"].array.isRequired,
  encryptionKeyList: PropTypes__default["default"].array.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  imageList: PropTypes__default["default"].array.isRequired,
  flavorList: PropTypes__default["default"].array.isRequired,
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
  /* api endpoints */
  apiEndpointImages: PropTypes__default["default"].string.isRequired,
  apiEndpointFlavors: PropTypes__default["default"].string.isRequired,
  /* callbacks */
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c9d8670 (add fetch selects for flavor and image, update readme and example)
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
=======
=======
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

<<<<<<< HEAD
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
/**
 * create a tile for each subnet
 * @param {Object} props
 * @returns {SubnetTile} react component
 */
var SubnetForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetForm, _React$Component);
  var _super = _createSuper(SubnetForm);
  function SubnetForm(props) {
    var _this;
    _classCallCheck(this, SubnetForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SubnetForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.componentDidUpdateCallback(this.state, this.props);
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.props.onSave(this.state, this.props);
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState({
        public_gateway: !this.state.public_gateway
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(react.Tile, {
        key: this.props.vpc_name + "-subnets-" + this.props.data.name,
        className: "marginRight fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.props.data.name,
        type: "subHeading",
        className: "marginBottomSmall",
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.isModal,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            disabled: this.props.disableSaveCallback(this.state, this.props),
            onClick: this.handleSave,
            noDeleteButton: true
          })
        })
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
        id: this.props.data.name + "-cidr",
        invalidText: "Invalid subnet CIDR.",
        labelText: "Subnet CIDR",
        value: this.props.data.cidr,
        className: "fieldWidthSmaller",
        readOnly: true
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "acl_name",
        formName: "".concat(this.props.data.name, "-subnet-acl"),
        labelText: "Network ACL",
        groups: this.props.networkAcls,
        value: this.state.acl_name,
        handleInputChange: this.handleChange,
        className: "fieldWidthSmaller",
        disabled: this.props.isModal,
        invalid: lazyZ.isNullOrEmptyString(this.state.acl_name),
        invalidText: "Select a Network ACL."
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "A Public Gateway must be enabled in this zone to use. To enable public gateways, see the VPC page."
        },
        id: "new-subnet-public-gateway-" + this.props.data.name,
        labelText: "Use Public Gateway",
        toggleFieldName: "public_gateway",
        defaultToggled: this.state.public_gateway,
        onToggle: this.handleToggle,
        disabled: this.props.isModal || this.props.shouldDisableGatewayToggle(this.state, this.props)
      })));
    }
  }]);
  return SubnetForm;
}(React__default["default"].Component);
SubnetForm.defaultProps = {
  isModal: false
};
SubnetForm.propTypes = _defineProperty({
  isModal: PropTypes__default["default"].bool.isRequired,
  onSave: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  }).isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  shouldDisableGatewayToggle: PropTypes__default["default"].func,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired,
  onSave: PropTypes__default["default"].func
>>>>>>> 88a6242 (feat: subnet form)
};
=======
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);
>>>>>>> ed5fa5a (fix: subnet => data)
=======
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired,
  onSave: PropTypes__default["default"].func
};
=======
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);
>>>>>>> 8845d68 (fix: move to compoenent method, styles)
=======
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);
>>>>>>> 2a431c4 (feat: better exports)
=======
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))

var css_248z$1 = ".subnetTileFormMargin {\n  margin-bottom: -0.5rem;\n  margin-top: 0.5rem;\n}\n\n.marginRight {\n  margin-right: 10px;\n}\n";
styleInject(css_248z$1);

var SubnetTileForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetTileForm, _React$Component);
  var _super = _createSuper(SubnetTileForm);
  function SubnetTileForm(props) {
    var _this;
    _classCallCheck(this, SubnetTileForm);
    _this = _super.call(this, props);
    _this.state = {
      subnetData: {}
    };
    if (!_this.props.isModal) {
      _this.props.data.forEach(function (subnet) {
        _this.state.subnetData[subnet.name] = true;
      });
    }
    _this.shouldDisableGatewayToggle = _this.shouldDisableGatewayToggle.bind(_assertThisInitialized(_this));
    _this.childSubnetHasChanged = _this.childSubnetHasChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * check if child subnet has changed
   * @param {Object} stateData
   * @param {string} stateData.name
   * @param {Object} componentProps
   * @param {Object} componentProps.data
   */
  _createClass(SubnetTileForm, [{
    key: "childSubnetHasChanged",
    value: function childSubnetHasChanged(stateData, componentProps) {
      var name = stateData.name;
      if (this.state.subnetData[name] && !lazyZ.deepEqual(stateData, componentProps.data)) {
        var subnetData = _objectSpread2({}, this.state.subnetData);
        subnetData[name] = false;
        this.setState({
          subnetData: subnetData
        });
      }
    }

    /**
     * check if gateway should be disabled
     * @param {Object} stateData
     * @param {string} stateData.name
     */
  }, {
    key: "shouldDisableGatewayToggle",
    value: function shouldDisableGatewayToggle(stateData) {
      var zone = lazyZ.parseIntFromZone(stateData.name);
      if (lazyZ.contains(this.props.enabledPublicGateways, zone)) {
        return false;
      } else return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var subnetMap = _toConsumableArray(this.props.data);
      return /*#__PURE__*/React__default["default"].createElement(IcseSubForm, {
        id: "subnet-tile-".concat(this.props.tier, "-").concat(this.props.vpc_name),
        formInSubForm: true,
        className: "popoverLeft subnetTileFormMargin"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Subnets",
        type: "subHeading",
        className: "marginBottomSmall"
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "displayFlex"
      }, subnetMap.map(function (subnet) {
        return /*#__PURE__*/React__default["default"].createElement(SubnetForm // change so doesn't show buttons
        , {
          key: "".concat(subnet.name, "-tile-").concat(_this2.props.tier, "-").concat(_this2.props.vpc_name, "-").concat(JSON.stringify(subnet)),
          vpc_name: _this2.props.vpc_name,
          data: subnet,
          onSave: _this2.props.onSave,
          isModal: _this2.props.isModal || _this2.props.readOnly,
          componentDidUpdateCallback: _this2.childSubnetHasChanged,
          networkAcls: _this2.props.networkAcls,
          disableSaveCallback: _this2.props.disableSaveCallback,
          shouldDisableGatewayToggle: _this2.shouldDisableGatewayToggle
        });
      })));
    }
  }]);
  return SubnetTileForm;
}(React__default["default"].Component);
SubnetTileForm.defaultProps = {
  isModal: false,
  readOnly: false
};
SubnetTileForm.propTypes = {
  isModal: PropTypes__default["default"].bool.isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  tier: PropTypes__default["default"].string.isRequired,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  onSave: PropTypes__default["default"].func,
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  })),
  readOnly: PropTypes__default["default"].bool.isRequired,
  enabledPublicGateways: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number).isRequired
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 68bf364 (feat: subnet tile form)
=======
>>>>>>> 2a431c4 (feat: better exports)

var VsiForm = /*#__PURE__*/function (_Component) {
  _inherits(VsiForm, _Component);
  var _super = _createSuper(VsiForm);
  function VsiForm(props) {
    var _this;
    _classCallCheck(this, VsiForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelectChange = _this.handleMultiSelectChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VsiForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var stateChangeParams = _defineProperty({}, name, name === "vsi_per_subnet" && value !== "" ? Number(value) : value);
      if (name === "vpc_name") lazyZ.transpose({
        subnet_names: [],
        subnet_name: ""
      }, stateChangeParams);
      this.setState(stateChangeParams);
    }
  }, {
    key: "handleMultiSelectChange",
    value: function handleMultiSelectChange(name, value) {
      this.setState(this.setNameToValue(name, value));
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "vsi-deployment-form-".concat(this.props.data.name);
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "vsi",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroupList,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name),
        invalidText: "Select a VPC."
      }), this.props.isTeleport ?
      /*#__PURE__*/
      // render dropdown for teleport instance
      React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "subnet_name",
        labelText: "Subnet",
        groups: this.props.subnetList,
        value: this.state.subnet_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name) || lib_4(this.state.subnet_name),
        invalidText: lib_4(this.state.vpc_name) ? "No VPC Selected." : "Select a Subnet."
      }) : /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "subnet",
        initialSelectedItems: this.state.subnet_names,
        vpc_name: this.state.vpc_name,
        subnets: this.props.subnetList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("subnet_names", value);
        }
      }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
        label: "Instances per Subnet",
        id: composedId + "-vsi-per-subnet",
        allowEmpty: false,
        value: this.state.vsi_per_subnet,
        defaultValue: 1,
        max: 10,
        min: 1,
        onChange: this.handleInputChange,
        name: "vsi_per_subnet",
        hideSteppers: true,
        invalidText: "Please input a number 1-10",
        className: "fieldWidth leftTextAlign"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(SshKeyMultiSelect, {
        id: "sshkey",
        sshKeys: this.props.sshKeyList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("ssh_keys", value);
        },
        initialSelectedItems: this.state.ssh_keys
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "vsi_form",
        labelText: "Image",
        name: "image_name",
        apiEndpoint: this.props.apiEndpointImages,
        handleInputChange: this.handleInputChange,
        value: this.state.image_name
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "vsi_form",
        labelText: "Flavor",
        name: "machine_type",
        apiEndpoint: this.props.apiEndpointFlavors,
        handleInputChange: this.handleInputChange,
        value: this.state.machine_type
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "boot_volume_encryption_key_name",
        labelText: "Encryption Key",
        groups: this.props.encryptionKeyList,
        value: this.state.boot_volume_encryption_key_name,
        handleInputChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state),
        invalidText: "Select a valid encryption key."
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        id: composedId + "-fips-toggle",
        labelText: "Enable Floating IP",
        defaultToggled: this.state.enable_floating_ip,
        onToggle: this.handleToggle
      })), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
        hide: this.props.isTeleport,
        show: /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.TextArea, {
          id: composedId + "-vsi-user-data",
          placeholder: "Cloud init data",
          labelText: "User Data",
          name: "user_data",
          value: this.state.user_data || "",
          onChange: this.handleInputChange,
          invalidText: "Invalid error message.",
          className: "fieldWidthBigger"
        }))
      }));
    }
  }]);
  return VsiForm;
}(React.Component);
VsiForm.defaultProps = {
  data: {
    name: "",
    ssh_keys: [],
    subnet_name: "",
    subnet_names: [],
    enable_floating_ip: false,
    vpc_name: "",
    image_name: "",
    machine_type: "",
    resource_group: "",
    boot_volume_encryption_key_name: "",
    vsi_per_subnet: 1
  },
  isModal: false,
  isTeleport: false,
  resourceGroupList: [],
  vpcList: [],
  subnetList: [],
  sshKeyList: [],
  encryptionKeyList: [],
  apiEndpointImages: "",
  apiEndpointFlavors: ""
};
VsiForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    ssh_keys: PropTypes__default["default"].array,
    subnet_name: PropTypes__default["default"].string,
    subnet_names: PropTypes__default["default"].array,
    enable_floating_ip: PropTypes__default["default"].bool,
    vpc_name: PropTypes__default["default"].string,
    image_name: PropTypes__default["default"].string,
    machine_type: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    boot_volume_encryption_key_name: PropTypes__default["default"].string,
    vsi_per_subnet: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }).isRequired,
  /* bools */
  isModal: PropTypes__default["default"].bool.isRequired,
  isTeleport: PropTypes__default["default"].bool.isRequired,
  /* lists */
  resourceGroupList: PropTypes__default["default"].array.isRequired,
  vpcList: PropTypes__default["default"].array.isRequired,
  subnetList: PropTypes__default["default"].array.isRequired,
  sshKeyList: PropTypes__default["default"].array.isRequired,
  encryptionKeyList: PropTypes__default["default"].array.isRequired,
  /* api endpoints */
  apiEndpointImages: PropTypes__default["default"].string.isRequired,
  apiEndpointFlavors: PropTypes__default["default"].string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};
<<<<<<< HEAD
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
=======

/**
 * create a tile for each subnet
 * @param {Object} props
 * @returns {SubnetTile} react component
 */
var SubnetForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetForm, _React$Component);
  var _super = _createSuper(SubnetForm);
  function SubnetForm(props) {
    var _this;
    _classCallCheck(this, SubnetForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SubnetForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.componentDidUpdateCallback(this.state, this.props);
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.props.onSave(this.state, this.props);
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState({
        public_gateway: !this.state.public_gateway
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(react.Tile, {
        key: this.props.vpc_name + "-subnets-" + this.props.data.name,
        className: "marginRight fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.props.data.name,
        type: "subHeading",
        className: "marginBottomSmall",
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.isModal,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            disabled: this.props.disableSaveCallback(this.state, this.props),
            onClick: this.handleSave,
            noDeleteButton: true
          })
        })
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
        id: this.props.data.name + "-cidr",
        invalidText: "Invalid subnet CIDR.",
        labelText: "Subnet CIDR",
        value: this.props.data.cidr,
        className: "fieldWidthSmaller",
        readOnly: true
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "acl_name",
        formName: "".concat(this.props.data.name, "-subnet-acl"),
        labelText: "Network ACL",
        groups: this.props.networkAcls,
        value: this.state.acl_name,
        handleInputChange: this.handleChange,
        className: "fieldWidthSmaller",
        disabled: this.props.isModal,
        invalid: lazyZ.isNullOrEmptyString(this.state.acl_name),
        invalidText: "Select a Network ACL."
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "A Public Gateway must be enabled in this zone to use. To enable public gateways, see the VPC page."
        },
        id: "new-subnet-public-gateway-" + this.props.data.name,
        labelText: "Use Public Gateway",
        toggleFieldName: "public_gateway",
        defaultToggled: this.state.public_gateway,
        onToggle: this.handleToggle,
        disabled: this.props.isModal || this.props.shouldDisableGatewayToggle(this.state, this.props)
      })));
    }
  }]);
  return SubnetForm;
}(React__default["default"].Component);
SubnetForm.defaultProps = {
  isModal: false
};
SubnetForm.propTypes = _defineProperty({
  isModal: PropTypes__default["default"].bool.isRequired,
  onSave: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  }).isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  shouldDisableGatewayToggle: PropTypes__default["default"].func,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);

var css_248z$2 = ".subnetTileFormMargin {\n  margin-bottom: -0.5rem;\n  margin-top: 0.5rem;\n}\n\n.marginRight {\n  margin-right: 10px;\n}\n";
styleInject(css_248z$2);

var SubnetTileForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetTileForm, _React$Component);
  var _super = _createSuper(SubnetTileForm);
  function SubnetTileForm(props) {
    var _this;
    _classCallCheck(this, SubnetTileForm);
    _this = _super.call(this, props);
    _this.state = {
      subnetData: {}
    };
    if (!_this.props.isModal) {
      _this.props.data.forEach(function (subnet) {
        _this.state.subnetData[subnet.name] = true;
      });
    }
    _this.shouldDisableGatewayToggle = _this.shouldDisableGatewayToggle.bind(_assertThisInitialized(_this));
    _this.childSubnetHasChanged = _this.childSubnetHasChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * check if child subnet has changed
   * @param {Object} stateData
   * @param {string} stateData.name
   * @param {Object} componentProps
   * @param {Object} componentProps.data
   */
  _createClass(SubnetTileForm, [{
    key: "childSubnetHasChanged",
    value: function childSubnetHasChanged(stateData, componentProps) {
      var name = stateData.name;
      if (this.state.subnetData[name] && !lazyZ.deepEqual(stateData, componentProps.data)) {
        var subnetData = _objectSpread2({}, this.state.subnetData);
        subnetData[name] = false;
        this.setState({
          subnetData: subnetData
        });
      }
    }

    /**
     * check if gateway should be disabled
     * @param {Object} stateData
     * @param {string} stateData.name
     */
  }, {
    key: "shouldDisableGatewayToggle",
    value: function shouldDisableGatewayToggle(stateData) {
      var zone = lazyZ.parseIntFromZone(stateData.name);
      if (lazyZ.contains(this.props.enabledPublicGateways, zone)) {
        return false;
      } else return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var subnetMap = _toConsumableArray(this.props.data);
      return /*#__PURE__*/React__default["default"].createElement(IcseSubForm, {
        id: "subnet-tile-".concat(this.props.tier, "-").concat(this.props.vpc_name),
        formInSubForm: true,
        className: "popoverLeft subnetTileFormMargin"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Subnets",
        type: "subHeading",
        className: "marginBottomSmall"
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "displayFlex"
      }, subnetMap.map(function (subnet) {
        return /*#__PURE__*/React__default["default"].createElement(SubnetForm // change so doesn't show buttons
        , {
          key: "".concat(subnet.name, "-tile-").concat(_this2.props.tier, "-").concat(_this2.props.vpc_name, "-").concat(JSON.stringify(subnet)),
          vpc_name: _this2.props.vpc_name,
          data: subnet,
          onSave: _this2.props.onSave,
          isModal: _this2.props.isModal || _this2.props.readOnly,
          componentDidUpdateCallback: _this2.childSubnetHasChanged,
          networkAcls: _this2.props.networkAcls,
          disableSaveCallback: _this2.props.disableSaveCallback,
          shouldDisableGatewayToggle: _this2.shouldDisableGatewayToggle
        });
      })));
    }
  }]);
  return SubnetTileForm;
}(React__default["default"].Component);
SubnetTileForm.defaultProps = {
  isModal: false,
  readOnly: false
};
SubnetTileForm.propTypes = {
  isModal: PropTypes__default["default"].bool.isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  tier: PropTypes__default["default"].string.isRequired,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  onSave: PropTypes__default["default"].func,
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  })),
  readOnly: PropTypes__default["default"].bool.isRequired,
  enabledPublicGateways: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number).isRequired
};
>>>>>>> ecca896 (Issue 707: NetworkingRuleOrderCard (#87))

var css_248z$1 = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z$1);

var DocTextField = function DocTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes__default["default"].string.isRequired,
  text: PropTypes__default["default"].string.isRequired
};
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React__default["default"].createElement(react.StructuredListHead, null, /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React__default["default"].createElement(react.StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React__default["default"].createElement(react.StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React__default["default"].createElement(react.StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes__default["default"].array,
  list: PropTypes__default["default"].array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React__default["default"].createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes__default["default"].array.isRequired
};
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React__default["default"].createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
    /*#__PURE__*/
    // text field
    React__default["default"].createElement(DocTextField, _extends({
      key: index
    }, field)) : field.subHeading ?
    /*#__PURE__*/
    // subheading
    React__default["default"].createElement("h6", {
      className: "marginBottomSmall",
      key: index
    }, field.subHeading) :
    /*#__PURE__*/
    // table
    React__default["default"].createElement(DocTable, {
      key: index,
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React__default["default"].createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    text: PropTypes__default["default"].string,
    className: PropTypes__default["default"].string,
    table: PropTypes__default["default"].array,
    subHeading: PropTypes__default["default"].string
  })).isRequired,
  relatedLinks: PropTypes__default["default"].array
};

/** Resource Groups
 * @param {Object} props
 */
var ResourceGroupForm = /*#__PURE__*/function (_Component) {
  _inherits(ResourceGroupForm, _Component);
  var _super = _createSuper(ResourceGroupForm);
  function ResourceGroupForm(props) {
    var _this;
    _classCallCheck(this, ResourceGroupForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  _createClass(ResourceGroupForm, [{
    key: "handleToggle",
    value: function handleToggle(name) {
      // Turn off the use_prefix toggle when create is turned off.
      if (name === "create" && this.state.create === true) {
        var _this$setState;
        this.setState((_this$setState = {}, _defineProperty(_this$setState, name, !this.state[name]), _defineProperty(_this$setState, "use_prefix", false), _this$setState));
      } else {
        this.setState(_defineProperty({}, name, !this.state[name]));
      }
    }

    /**
     * Handle input change for a text field
     * @param {event} event
     */
  }, {
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "resource-group-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "If true, get data from an existing resource group"
        },
        labelText: "Use Existing Instance",
        toggleFieldName: this.props.toggleName,
        defaultToggled: !this.state.create,
        id: composedId + "-create-toggle",
        onToggle: function onToggle() {
          return _this2.handleToggle("create");
        },
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "resource_groups",
        value: this.state.name,
        onChange: this.handleTextInput,
        useData: this.state.create === false || this.state.use_prefix === false,
        invalidCallback: function invalidCallback() {
          return _this2.props.invalidCallback(_this2.state, _this2.props);
        },
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state, _this2.props);
        }
      }), this.state.create && /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Append your environment prefix to the beginning of the resource group."
        },
        labelText: "Use Prefix",
        defaultToggled: this.state.use_prefix,
        id: composedId + "-use-prefix-toggle",
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })));
    }
  }]);
  return ResourceGroupForm;
}(React.Component);
ResourceGroupForm.defaultProps = {
  data: {
    create: false,
    name: "",
    use_prefix: true
  },
  toggleName: "use_data",
  isModal: false
};
ResourceGroupForm.propTypes = {
  data: PropTypes__default["default"].shape({
    create: PropTypes__default["default"].bool,
    name: PropTypes__default["default"].string.isRequired,
    use_prefix: PropTypes__default["default"].bool
  }),
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
};

var SubnetTierForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetTierForm, _React$Component);
  var _super = _createSuper(SubnetTierForm);
  function SubnetTierForm(props) {
    var _this;
    _classCallCheck(this, SubnetTierForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.onSave = _this.onSave.bind(_assertThisInitialized(_this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    _this.handleShowToggle = _this.handleShowToggle.bind(_assertThisInitialized(_this));
    _this.shouldDisableSubmit = _this.shouldDisableSubmit.bind(_assertThisInitialized(_this));
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_assertThisInitialized(_this));
    _this.onSubnetSave = _this.onSubnetSave.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Handle input change
   * @param {event} event
   */
  _createClass(SubnetTierForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }

    /**
     * handle toggle
     */
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState({
        addPublicGateway: !this.state.addPublicGateway
      });
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
     * handle hide/show form data
     */
  }, {
    key: "handleShowToggle",
    value: function handleShowToggle() {
      this.setState({
        hide: !this.state.hide
      });
    }
  }, {
    key: "onSave",
    value: function onSave() {
      this.props.onSave(this.state, this.props);
    }
  }, {
    key: "onSubnetSave",
    value: function onSubnetSave(stateData, componentProps) {
      this.props.onSubnetSave(stateData, componentProps);
    }
  }, {
    key: "onDelete",
    value: function onDelete() {
      this.props.onDelete(this.state, this.props);
    }
  }, {
    key: "shouldDisableSubmit",
    value: function shouldDisableSubmit() {
      if (this.props.isModal) {
        if (this.props.shouldDisableSubmit(this.state, this.props) === false) this.props.enableModal();else this.props.disableModal();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.shouldDisableSubmit();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.shouldDisableSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var composedId = "".concat(this.props.vpc_name, "-tier-").concat(this.props.data.name === "" ? "new-subnet-tier" : this.props.data.name);
      var formName = this.props.data.name + "-subnet-tier";
      var tierName = this.props.data.name === "" ? "New Subnet Tier" : lazyZ.titleCase(formName).replace(/Vsi/g, "VSI").replace(/Vpe/g, "VPE").replace(/Vpn/g, "VPN");
      return /*#__PURE__*/React__default["default"].createElement(IcseSubForm, {
        formInSubForm: true,
        id: composedId,
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
        name: tierName,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.onDelete
      }), /*#__PURE__*/React__default["default"].createElement(StatelessToggleForm, {
        hideTitle: this.props.isModal === true,
        hide: this.state.hide,
        name: tierName,
        onIconClick: this.handleShowToggle,
        toggleFormTitle: true,
        buttons: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
          onClick: this.onSave,
          noDeleteButton: this.props.noDeleteButton,
          disabled: this.props.shouldDisableSave(this.state, this.props)
        }), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.noDeleteButton,
          show: /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
            name: tierName,
            onClick: this.toggleDeleteModal
          })
        }))
      }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.props.isModal ? "new-tier-name" : this.props.data.name + "-tier-name",
        value: this.state.name,
        componentName: formName,
        onChange: this.handleChange,
        className: "fieldWidthSmaller",
        readOnly: this.props.readOnly,
        invalidCallback: this.props.invalidCallback,
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
        max: 3,
        value: this.state.zones,
        labelText: "Subnet Tier Zones",
        name: "zones",
        handleInputChange: this.handleChange,
        className: "fieldWidthSmaller",
        invalid: this.state.zones === 0,
        invalidText: "At least one zone must be selected.",
        formName: formName
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "Changing this field will overwrite existing Network ACL changes to subnets in this data."
        },
        className: "fieldWidthSmaller",
        field: "networkAcl",
        name: "networkAcl",
        value: this.state.networkAcl || "",
        vpcName: this.props.vpc_name,
        labelText: "Network ACL",
        groups: this.props.networkAcls,
        handleInputChange: this.handleChange,
        isModal: this.props.isModal,
        formName: formName
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: this.props.enabledPublicGateways.length === 0 ? "This VPC has no public gateways enabled. To add public gateways, return to the VPC page." : "Changing this field will overwrite existing Public Gateway changes to subnets in this data."
        },
        id: composedId + "-public-gateway",
        labelText: "Use Public Gateways",
        defaultToggled: this.state.addPublicGateway,
        onToggle: this.handleToggle,
        isModal: this.props.isModal,
        disabled: this.props.enabledPublicGateways.length === 0
      })), /*#__PURE__*/React__default["default"].createElement(SubnetTileForm, {
        tier: this.props.data.name,
        vpc_name: this.props.vpc_name,
        onSave: this.onSubnetSave,
        isModal: this.props.isModal,
        data: this.props.subnetListCallback(this.state, this.props),
        key: this.state.zones,
        enabledPublicGateways: this.props.enabledPublicGateways,
        networkAcls: this.props.networkAcls,
        disableSaveCallback: this.props.disableSubnetSaveCallback
      }))));
    }
  }]);
  return SubnetTierForm;
}(React__default["default"].Component);
SubnetTierForm.defaultProps = {
  isModal: false,
  hide: true,
  readOnly: false,
  noDeleteButton: false,
  data: {
    hide: false,
    name: "",
    zones: 3,
    networkAcl: null,
    addPublicGateway: false
  }
};
SubnetTierForm.propTypes = {
  data: PropTypes__default["default"].shape({
    hide: PropTypes__default["default"].bool,
    name: PropTypes__default["default"].string.isRequired,
    zones: PropTypes__default["default"].number.isRequired,
    networkAcl: PropTypes__default["default"].string,
    addPublicGateway: PropTypes__default["default"].bool
  }),
  // save and delete functions can be null when form rendered as modal
  onSave: PropTypes__default["default"].func,
  onSubnetSave: PropTypes__default["default"].func,
  onDelete: PropTypes__default["default"].func,
  disableSubnetSaveCallback: PropTypes__default["default"].func,
  // can be null when modal
  shouldDisableSave: PropTypes__default["default"].func,
  shouldDisableSubmit: PropTypes__default["default"].func,
  // can be null when not modal
  noDeleteButton: PropTypes__default["default"].bool,
  // can be null when modal
  isModal: PropTypes__default["default"].bool.isRequired,
  readOnly: PropTypes__default["default"].bool.isRequired,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  enabledPublicGateways: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number).isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  vpc_name: PropTypes__default["default"].string.isRequired,
  subnetListCallback: PropTypes__default["default"].func.isRequired,
  enableModal: PropTypes__default["default"].func,
  disableModal: PropTypes__default["default"].func
};

var css_248z = ".marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.positionRelative {\n  position: relative;\n}\n";
styleInject(css_248z);

=======
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
var _require = require("lazy-z"),
  capitalize = _require.capitalize,
  titleCase = _require.titleCase,
  kebabCase = _require.kebabCase,
  isIpv4CidrOrAddress = _require.isIpv4CidrOrAddress,
  validPortRange = _require.validPortRange,
  isNullOrEmptyString = _require.isNullOrEmptyString,
  contains = _require.contains;

/** NetworkingRuleForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
var NetworkingRuleForm = /*#__PURE__*/function (_Component) {
  _inherits(NetworkingRuleForm, _Component);
  var _super = _createSuper(NetworkingRuleForm);
  function NetworkingRuleForm(props) {
    var _this;
    _classCallCheck(this, NetworkingRuleForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_this));
    _this.handleRuleUpdate = _this.handleRuleUpdate.bind(_assertThisInitialized(_this));
    _this.handleRuleDelete = _this.handleRuleDelete.bind(_assertThisInitialized(_this));
    _this.handleRuleDataUpdate = _this.handleRuleDataUpdate.bind(_assertThisInitialized(_this));
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_assertThisInitialized(_this));
    _this.shouldDisableSave = _this.shouldDisableSave.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handle input change for a text field
   * @param {String} inputName name of the field to set state
   * @param {event} event
   * @param {boolean=} lowercase set value to lowercase
   */
  _createClass(NetworkingRuleForm, [{
    key: "handleInput",
    value: function handleInput(inputName, event, lowercase) {
      var newValue = lowercase ? event.target.value.toLowerCase() : event.target.value;
      this.setState(_defineProperty({}, inputName, newValue));
    }

    /**
     * Handler function for the rule updates
     * @param {String} inputName name of the field to set state in Rule
     * @param event event
     */
  }, {
    key: "handleRuleDataUpdate",
    value: function handleRuleDataUpdate(inputName, event) {
      var value = parseInt(event.target.value) || null;
      this.setState(function (prevState) {
        return {
          rule: _objectSpread2(_objectSpread2({}, prevState.rule), {}, _defineProperty({}, inputName, value))
        };
      });
    }

    /**
     * update a network rule
     */
  }, {
    key: "handleRuleUpdate",
    value: function handleRuleUpdate() {
      this.props.onSave(this.state, this.props);
    }

    /**
     * delete a network rule
     */
  }, {
    key: "handleRuleDelete",
    value: function handleRuleDelete() {
      this.props.onDelete(this.state, this.props);
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
     * Returns true if save should be disabled or if props match state (save disabled)
     * @returns {boolean} if save is disabled
     */
  }, {
    key: "shouldDisableSave",
    value: function shouldDisableSave() {
      return this.props.disableSaveCallback(this.state, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var ruleName = this.props.isModal ? "new-rule" : this.props.data.name;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
        key: "rule-div-" + ruleName,
        className: this.props.hide ? "" : "marginBottomSmall" // add margin bottom small if shown
      }, this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
        name: ruleName,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.handleRuleDelete
      }), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
        hide: this.props.hide && this.props.isModal === true,
        show: /*#__PURE__*/React__default["default"].createElement(StatelessToggleForm, {
          key: "rule-name-" + ruleName,
          name: this.props.isModal ? "" : ruleName // do not show name when modal
          ,
          onIconClick: this.props.onToggle,
          toggleFormTitle: true,
          hide: this.props.hide && this.props.isModal !== true,
          hideIcon: this.props.isModal,
          alwaysShowButtons: true,
          buttons: this.props.isModal ? "" : this.props.hide === false ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            onClick: this.handleRuleUpdate,
            disabled: this.shouldDisableSave()
          }), /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
            onClick: this.toggleDeleteModal,
            name: ruleName
          })) : /*#__PURE__*/React__default["default"].createElement(UpDownButtons, {
            name: ruleName,
            handleUp: this.props.handleUp,
            handleDown: this.props.handleDown,
            disableUp: this.props.disableUp,
            disableDown: this.props.disableDown
          })
        }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
          id: this.state.name + "-name",
          componentName: this.props.data.name + "-rule",
          value: this.state.name,
          onChange: function onChange(event) {
            return _this2.handleInput("name", event);
          },
          invalidCallback: function invalidCallback() {
            return _this2.props.invalidCallback(_this2.state, _this2.props);
          },
          invalidTextCallback: function invalidTextCallback() {
            return _this2.props.invalidCallback(_this2.state, _this2.props);
          },
          hideHelperText: true,
          className: "fieldWidthSmaller"
        }), !this.props.isSecurityGroup && /*#__PURE__*/React__default["default"].createElement(NetworkingRuleSelect, {
          state: this.state,
          name: "action",
          onChange: this.handleInput,
          groups: ["Allow", "Deny"],
          props: this.props
        }), /*#__PURE__*/React__default["default"].createElement(NetworkingRuleSelect, {
          name: "direction",
          state: this.state,
          onChange: this.handleInput,
          groups: ["Inbound", "Outbound"],
          props: this.props
        }), this.props.isSecurityGroup && /*#__PURE__*/React__default["default"].createElement(NetworkingRuleTextField, {
          name: "source",
          state: this.state,
          onChange: this.handleInput
        })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, !this.props.isSecurityGroup && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleTextField, {
          name: "source",
          state: this.state,
          onChange: this.handleInput
        }), /*#__PURE__*/React__default["default"].createElement(NetworkingRuleTextField, {
          name: "destination",
          state: this.state,
          onChange: this.handleInput
        })), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
          formName: ruleName + "-protocol",
          groups: ["ALL", "TCP", "UDP", "ICMP"],
          value: this.state.ruleProtocol.toUpperCase(),
          labelText: "Protocol",
          name: "ruleProtocol",
          handleInputChange: function handleInputChange(event) {
            return _this2.handleInput("ruleProtocol", event, true);
          },
          className: "fieldWidthSmaller"
        })), (this.state.ruleProtocol === "tcp" || this.state.ruleProtocol === "udp") && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "port_min",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        }), /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "port_max",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        })), !this.props.isSecurityGroup && /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "source_port_min",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        }), /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "source_port_max",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        }))), this.state.ruleProtocol === "icmp" && /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "type",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        }), /*#__PURE__*/React__default["default"].createElement(NetworkingRuleProtocolTextField, {
          name: "code",
          state: this.state,
          onChange: this.handleRuleDataUpdate
        }))))
      })));
    }
  }]);
  return NetworkingRuleForm;
}(React.Component);
NetworkingRuleForm.defaultProps = {
  isSecurityGroup: false,
  isModal: false,
  disableUp: false,
  disableDown: false,
  data: {
    name: "",
    action: "allow",
    direction: "inbound",
    source: "",
    destination: "",
    ruleProtocol: "all",
    rule: {
      port_max: null,
      port_min: null,
      source_port_max: null,
      source_port_min: null,
      type: null,
      code: null
    }
  },
  hide: false
};
NetworkingRuleForm.propTypes = {
  isModal: PropTypes__default["default"].bool.isRequired,
  // functions only used when not modal
  onSave: PropTypes__default["default"].func,
  onDelete: PropTypes__default["default"].func,
  onToggle: PropTypes__default["default"].func,
  disableDown: PropTypes__default["default"].bool,
  disableUp: PropTypes__default["default"].bool,
  handleDown: PropTypes__default["default"].func,
  handleUp: PropTypes__default["default"].func,
  disableSaveCallback: PropTypes__default["default"].func,
  // functions for components
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  data: PropTypes__default["default"].shape({
    action: PropTypes__default["default"].string,
    // not required for sg
    destination: PropTypes__default["default"].string,
    // not required for sg
    direction: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    rule: PropTypes__default["default"].shape({
      // can be null
      port_min: PropTypes__default["default"].number,
      port_max: PropTypes__default["default"].number,
      source_port_min: PropTypes__default["default"].number,
      source_port_max: PropTypes__default["default"].number,
      type: PropTypes__default["default"].number,
      code: PropTypes__default["default"].number
    }).isRequired,
    source: PropTypes__default["default"].string.isRequired
  }),
  isSecurityGroup: PropTypes__default["default"].bool.isRequired
};

/**
 * readability shortcut for nw rules
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 */
var NetworkingRuleTextField = function NetworkingRuleTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
    id: "".concat(props.state.name, "-nw-").concat(kebabCase(props.name), "-input"),
    field: props.name,
    labelText: titleCase(props.name),
    value: String(props.state[props.name]),
    onChange: function onChange(e) {
      return props.onChange(props.name, e);
    },
    className: "fieldWidthSmaller",
    placeholder: "x.x.x.x",
    invalidText: "Please provide a valid IPV4 IP address or CIDR notation.",
    invalidCallback: function invalidCallback() {
      return isIpv4CidrOrAddress(props.state[props.name]) === false;
    }
  });
};
NetworkingRuleTextField.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  state: PropTypes__default["default"].shape({}).isRequired,
  onChange: PropTypes__default["default"].func.isRequired
};

/**
 * rule protocol text field
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 */
var NetworkingRuleProtocolTextField = function NetworkingRuleProtocolTextField(props) {
  return /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
    id: "".concat(props.state.name, "-nw-").concat(kebabCase(props.name), "-input"),
    labelText: titleCase(props.name),
    placeholder: String(props.state.rule[props.name] || ""),
    value: props.state.rule[props.name] || "",
    onChange: function onChange(e) {
      return props.onChange(props.name, e);
    },
    invalid: validPortRange(props.name, props.state.rule[props.name] || -1) === false && isNullOrEmptyString(props.state.rule[props.name]) === false,
    invalidText: contains(["type", "code"], props.name) ? "0 to ".concat(props.name === "type" ? 254 : 255) : "1 to 65535",
    className: "fieldWidthSmaller"
  });
};
NetworkingRuleProtocolTextField.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  state: PropTypes__default["default"].shape({
    rule: PropTypes__default["default"].shape({}).isRequired
  }).isRequired,
  onChange: PropTypes__default["default"].func.isRequired
};

/**
 * readability shortcut for nw rules
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 * @param {Array<string>} props.groups list of groups for select
 */
var NetworkingRuleSelect = function NetworkingRuleSelect(props) {
  return /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
    formName: props.state.name + "-nw-rule-" + props.name,
    name: props.name,
    groups: props.groups,
    value: capitalize(props.state[props.name]),
    labelText: capitalize(props.name),
    handleInputChange: function handleInputChange(e) {
      return props.onChange(props.name, e, true);
    },
    className: "fieldWidthSmaller"
  });
};
NetworkingRuleSelect.propTypes = {
  name: PropTypes__default["default"].string.isRequired,
  state: PropTypes__default["default"].shape({
    rule: PropTypes__default["default"].shape({}).isRequired,
    name: PropTypes__default["default"].string
  }).isRequired,
  onChange: PropTypes__default["default"].func.isRequired,
  groups: PropTypes__default["default"].array.isRequired
};

var NetworkingRulesOrderCard = /*#__PURE__*/function (_Component) {
  _inherits(NetworkingRulesOrderCard, _Component);
  var _super = _createSuper(NetworkingRulesOrderCard);
  function NetworkingRulesOrderCard(props) {
    var _this;
    _classCallCheck(this, NetworkingRulesOrderCard);
    _this = _super.call(this, props);
    _this.state = {
      rules: _toConsumableArray(_this.props.rules),
      collapse: {},
      allCollapsed: false,
      showModal: false
    };
    _this.swapArrayElements = _this.swapArrayElements.bind(_assertThisInitialized(_this));
    _this.handleUp = _this.handleUp.bind(_assertThisInitialized(_this));
    _this.handleDown = _this.handleDown.bind(_assertThisInitialized(_this));
    _this.toggleCollapse = _this.toggleCollapse.bind(_assertThisInitialized(_this));
    _this.collapseAll = _this.collapseAll.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.getRuleProtocol = _this.getRuleProtocol.bind(_assertThisInitialized(_this));
    _this.getSubRule = _this.getSubRule.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(NetworkingRulesOrderCard, [{
    key: "getRuleProtocol",
    value: function getRuleProtocol(rule) {
      var protocol = "all";
      // for each possible protocol
      ["icmp", "tcp", "udp"].forEach(function (field) {
        // set protocol to that field if not all fields are null
        if (lazyZ.allFieldsNull(rule[field]) === false) {
          protocol = field;
        }
      });
      return protocol;
    }

    /**
     * create sub rule
     * @param {*} rule rule object
     * @param {string} protocol all, tcp, icmp, or udp
     * @returns {Object} default rule object
     */
  }, {
    key: "getSubRule",
    value: function getSubRule(rule) {
      var defaultRule = {
        port_max: null,
        port_min: null,
        source_port_max: null,
        source_port_min: null,
        type: null,
        code: null
      };
      if (this.props.isSecurityGroup) {
        delete defaultRule.source_port_min;
        delete defaultRule.source_port_max;
      }
      if (this.getRuleProtocol(rule) !== "all") {
        transpose(rule[protocol], defaultRule);
      }
      return defaultRule;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.allCollapsed === false && this.props.expandAll === false) this.collapseAll();
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }

    /**
     * toggle collapse rule
     * @param {string} ruleName rule name
     */
  }, {
    key: "toggleCollapse",
    value: function toggleCollapse(ruleName) {
      var collapse = this.state.collapse;
      collapse[ruleName] = !lazyZ.containsKeys(this.state.collapse, ruleName) // if rule dies not exist
      ? true // set to true
      : !this.state.collapse[ruleName]; // otherwise set to opposite
      this.setState({
        collapse: collapse
      });
    }

    /**
     * collapse each rule
     */
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      var _this2 = this;
      var collapse = this.state.collapse;
      this.state.rules.forEach(function (rule) {
        collapse[rule.name] = !_this2.state.allCollapsed;
      });
      this.setState({
        collapse: collapse,
        allCollapsed: !this.state.allCollapsed
      });
    }

    /**
     * Helper function to move items up and down in the list so they can be rendered properly
     * @param {Array} arr
     * @param {number} indexA
     * @param {number} indexB
     */
  }, {
    key: "swapArrayElements",
    value: function swapArrayElements(arr, indexA, indexB) {
      var temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
    }

    /**
     * Move the card up
     * @param {number} index
     */
  }, {
    key: "handleUp",
    value: function handleUp(index) {
      var prevRulesState = _toConsumableArray(this.state.rules);
      if (index !== 0) {
        this.swapArrayElements(prevRulesState, index, index - 1);
      }
      this.props.networkRuleOrderDidChange(prevRulesState);
      this.setState({
        rules: prevRulesState
      });
    }

    /**
     * Move the card down
     * @param {number} index
     */
  }, {
    key: "handleDown",
    value: function handleDown(index) {
      var prevRulesState = _toConsumableArray(this.state.rules);
      var maxLen = prevRulesState.length - 1;
      if (index !== maxLen) {
        this.swapArrayElements(prevRulesState, index, index + 1);
      }
      this.props.networkRuleOrderDidChange(prevRulesState);
      this.setState({
        rules: prevRulesState
      });
    }

    /**
     * @param {Object} modalData data from the modal form passed back from instanceFormModal
     */
  }, {
    key: "handleSubmit",
    value: function handleSubmit(modalData) {
      this.props.onSubmitCallback(modalData, this.props);
      this.toggleModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Rules",
        className: "marginBottomSmall",
        type: "subHeading",
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.hideCreate,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            type: "add",
            onClick: this.toggleModal
          })
        })
      }), /*#__PURE__*/React__default["default"].createElement(FormModal, {
        name: "Create a Network Rule",
        show: this.state.showModal,
        onRequestSubmit: this.handleSubmit,
        onRequestClose: this.toggleModal
      }, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleForm, {
        isSecurityGroup: this.props.isSecurityGroup,
        invalidCallback: this.props.invalidCallback,
        invalidTextCallback: this.props.invalidTextCallback,
        parent_name: this.props.parent_name,
        disableModalSubmit: function disableModalSubmit() {
          //set modal form enable submit
          if (this.props.disableModalSubmitCallback(this.state, this.props) === false) {
            this.props.enableModal();
          } else {
            this.props.disableModal();
          }
        }
      })), /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
        name: "Network Rules",
        showIfEmpty: this.state.rules
      }), this.state.rules.map(function (rule, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: "rule-div-" + rule.name + "-wrapper",
          className: "marginBottomSmall positionRelative formInSubForm"
        }, /*#__PURE__*/React__default["default"].createElement(NetworkingRuleForm, {
          hide: _this3.state.collapse[rule.name],
          onToggle: function onToggle() {
            return _this3.toggleCollapse(rule.name);
          },
          disableUp: index === 0,
          handleUp: function handleUp() {
            return _this3.handleUp(index);
          },
          disableDown: index === _this3.state.rules.length - 1,
          handleDown: function handleDown() {
            return _this3.handleDown(index);
          },
          key: _this3.props.vpc_name + "-nw-rule-" + rule.name,
          id: _this3.props.vpc_name + "-nw-rule-form-" + rule.name,
          invalidCallback: _this3.props.invalidCallback,
          invalidTextCallback: _this3.props.invalidTextCallback,
          data: {
            name: rule.name,
            action: rule.action || null,
            direction: rule.direction,
            source: rule.source,
            destination: rule.destination || null,
            ruleProtocol: _this3.getRuleProtocol(rule),
            rule: _this3.getSubRule(rule)
          },
          disableSaveCallback: _this3.props.disableSaveCallback,
          isSecurityGroup: _this3.props.isSecurityGroup,
          onSave: _this3.props.onRuleSave,
          onDelete: _this3.props.onRuleDelete,
          parent_name: _this3.props.parent_name
        }));
      }));
    }
  }]);
  return NetworkingRulesOrderCard;
}(React.Component);
NetworkingRulesOrderCard.defaultProps = {
  rules: [],
  hideCreate: false,
  isSecurityGroup: false,
  expandAll: false
};
NetworkingRulesOrderCard.propTypes = {
  isSecurityGroup: PropTypes__default["default"].bool.isRequired,
  rules: PropTypes__default["default"].array.isRequired,
  hideCreate: PropTypes__default["default"].bool.isRequired,
  expandAll: PropTypes__default["default"].bool.isRequired,
  disableModalSubmitCallback: PropTypes__default["default"].func.isRequired,
  disableSaveCallback: PropTypes__default["default"].func.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  vpc_name: PropTypes__default["default"].string.isRequired,
  networkRuleOrderDidChange: PropTypes__default["default"].func.isRequired,
  onSubmitCallback: PropTypes__default["default"].func.isRequired,
  onRuleSave: PropTypes__default["default"].func.isRequired,
  onRuleDelete: PropTypes__default["default"].func.isRequired,
  parent_name: PropTypes__default["default"].string.isRequired
};

/** NetworkAclForm
 * @param {Object} props
 */
var NetworkAclForm = /*#__PURE__*/function (_Component) {
  _inherits(NetworkAclForm, _Component);
  var _super = _createSuper(NetworkAclForm);
  function NetworkAclForm(props) {
    var _this;
    _classCallCheck(this, NetworkAclForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.networkRuleOrderDidChange = _this.networkRuleOrderDidChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handle input change for a text field
   * @param {event} event
   */
  _createClass(NetworkAclForm, [{
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * Toggle on and off param in state at name
     * @param {string} name name of the toggle to change
     */
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
    }
    /**
     * Check if the order of network rules updated - then update state to allow save
     * @param {Array} rules list of rule objects
     */
  }, {
    key: "networkRuleOrderDidChange",
    value: function networkRuleOrderDidChange(rules) {
      this.props.networkRuleOrderDidChange(this.state, this.props);
      this.setState({
        rules: rules
      }); // update rules state when an update occurs
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: this.handleTextInput,
        placeholder: "my-network-acl-name",
        component: "network_acls",
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state, _this2.props);
        },
        invalidCallback: function invalidCallback() {
          return _this2.props.invalidCallback(_this2.state, _this2.props);
        },
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Automatically add to ACL rules needed to allow cluster provisioning from private service endpoints.",
          link: "https://cloud.ibm.com/docs/openshift?topic=openshift-vpc-acls"
        },
        labelText: "Use Cluster Rules",
        toggleFieldName: "add_cluster_rules",
        defaultToggled: this.state.add_cluster_rules,
        id: this.state.name + "acl-add-rules-toggle",
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })), !this.props.isModal &&
      /*#__PURE__*/
      // ability to move rules up and down
      React__default["default"].createElement(NetworkingRulesOrderCard, {
        rules: this.state.rules,
        vpc_name: this.props.arrayParentName,
        parent_name: this.props.data.name,
        networkRuleOrderDidChange: this.networkRuleOrderDidChange,
        isAclForm: true,
        invalidCallback: this.props.invalidCallback,
        invalidTextCallback: this.props.invalidTextCallback,
        onSubmitCallback: this.props.onSubmitCallback,
        onRuleSave: this.props.onRuleSave,
        onRuleDelete: this.props.onRuleDelete,
        disableModalSubmitCallback: this.props.disableModalSubmitCallback,
        disableSaveCallback: this.props.disableSaveCallback
      }));
    }
  }]);
  return NetworkAclForm;
}(React.Component);
NetworkAclForm.defaultProps = {
  data: {
    name: "",
    add_cluster_rules: false,
    rules: []
  },
  isModal: false
};
NetworkAclForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    add_cluster_rules: PropTypes__default["default"].bool.isRequired,
    rules: PropTypes__default["default"].array
  }),
  isModal: PropTypes__default["default"].bool.isRequired,
  networkRuleOrderDidChange: PropTypes__default["default"].func,
  // can be undefined
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired,
  onSubmitCallback: PropTypes__default["default"].func.isRequired,
  onRuleSave: PropTypes__default["default"].func.isRequired,
  onRuleDelete: PropTypes__default["default"].func.isRequired,
  disableModalSubmitCallback: PropTypes__default["default"].func.isRequired,
  disableSaveCallback: PropTypes__default["default"].func.isRequired
};

var ObjectStorageBucketForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageBucketForm, _Component);
  var _super = _createSuper(ObjectStorageBucketForm);
  function ObjectStorageBucketForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageBucketForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleStorageClassChange = _this.handleStorageClassChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handler for toggle
   */
  _createClass(ObjectStorageBucketForm, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(this.toggleStateBoolean("force_delete", this.state));
    }

    /**
     * handle storage class change and convert to lowercase for value
     * @param {event} event event
     */
  }, {
    key: "handleStorageClassChange",
    value: function handleStorageClassChange(event) {
      this.setState({
        storage_class: event.target.value.toLowerCase()
      });
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
      // composed id for bucket
      var composedId = "bucket-form-".concat(this.props.data.name ? this.props.data.name : "new-bucket");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name,
        componentName: this.state.name,
        value: this.state.name,
        onChange: this.handleInputChange,
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state);
        },
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: this.state.name,
        formName: "Object Storage Bucket",
        name: "storage_class",
        groups: ["Standard", "Vault", "Cold", "Smart"],
        value: lazyZ.capitalize(this.state.storage_class),
        labelText: "Bucket Class",
        handleInputChange: this.handleStorageClassChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        component: this.state.name,
        formName: "Object Storage Bucket",
        name: "kms_key",
        groups: this.props.encryptionKeys,
        value: this.state.kms_key,
        labelText: "Encryption Key",
        handleInputChange: this.handleInputChange
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Toggling this on will force delete contents of the bucket after the bucket is deleted"
        },
        id: composedId + "force-delete",
        labelText: "Force Delete Contents",
        defaultToggled: this.state.force_delete,
        toggleFieldName: "force_delete",
        onToggle: this.handleToggle
      })));
    }
  }]);
  return ObjectStorageBucketForm;
}(React.Component);
ObjectStorageBucketForm.defaultProps = {
  data: {
    force_delete: false,
    name: "",
    storage_class: "Standard",
    kms_key: ""
  },
  encryptionKeys: []
};
ObjectStorageBucketForm.propTypes = {
  data: PropTypes__default["default"].shape({
    force_delete: PropTypes__default["default"].bool.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    storage_class: PropTypes__default["default"].string.isRequired,
    kms_key: PropTypes__default["default"].string
  }).isRequired,
  encryptionKeys: PropTypes__default["default"].array.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired
};

/**
 * Object storage
 */
var ObjectStorageInstancesForm = /*#__PURE__*/function (_Component) {
  _inherits(ObjectStorageInstancesForm, _Component);
  var _super = _createSuper(ObjectStorageInstancesForm);
  function ObjectStorageInstancesForm(props) {
    var _this;
    _classCallCheck(this, ObjectStorageInstancesForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  _createClass(ObjectStorageInstancesForm, [{
    key: "handleInputChange",
    value: function handleInputChange(name, value) {
      var inst = _objectSpread2({}, this.state);
      inst[name] = value;
      this.setState(_objectSpread2({}, inst));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$props;
      var composedId = "object-storage-form-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance."
        },
        id: composedId + "use-data",
        toggleFieldName: "use_data",
        labelText: "Use Existing Instance",
        defaultToggled: this.state.use_data,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments."
        },
        id: composedId + "random-suffix",
        labelText: "Append Random Suffix to Names",
        toggleFieldName: "random_suffix",
        defaultToggled: this.state.random_suffix,
        onToggle: this.handleInputChange,
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        value: this.state.name,
        onChange: function onChange(event) {
          return _this2.handleInputChange("name", event.target.value);
        },
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state, _this2.props);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: function handleInputChange(event) {
          return _this2.handleInputChange("resource_group", event.target.value);
        }
      })), this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.subForms.map(function (form, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: index
        }, form);
      })));
    }
  }]);
  return ObjectStorageInstancesForm;
}(React.Component);
ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    random_suffix: true
  },
  resourceGroups: []
};
ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes__default["default"].bool,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    use_data: PropTypes__default["default"].bool.isRequired,
    resource_group: PropTypes__default["default"].string,
    random_suffix: PropTypes__default["default"].bool.isRequired
  }),
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  composedNameCallback: PropTypes__default["default"].func.isRequired,
  subForms: PropTypes__default["default"].arrayOf(PropTypes__default["default"].node)
};

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

/** Resource Groups
 * @param {Object} props
 */
var ResourceGroupForm = /*#__PURE__*/function (_Component) {
  _inherits(ResourceGroupForm, _Component);
  var _super = _createSuper(ResourceGroupForm);
  function ResourceGroupForm(props) {
    var _this;
    _classCallCheck(this, ResourceGroupForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleTextInput = _this.handleTextInput.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  _createClass(ResourceGroupForm, [{
    key: "handleToggle",
    value: function handleToggle(name) {
      // Turn off the use_prefix toggle when create is turned off.
      if (name === "create" && this.state.create === true) {
        var _this$setState;
        this.setState((_this$setState = {}, _defineProperty(_this$setState, name, !this.state[name]), _defineProperty(_this$setState, "use_prefix", false), _this$setState));
      } else {
        this.setState(_defineProperty({}, name, !this.state[name]));
      }
    }

    /**
     * Handle input change for a text field
     * @param {event} event
     */
  }, {
    key: "handleTextInput",
    value: function handleTextInput(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "resource-group-".concat(this.props.data.name, "-");
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "If true, get data from an existing resource group"
        },
        labelText: "Use Existing Instance",
        toggleFieldName: this.props.toggleName,
        defaultToggled: !this.state.create,
        id: composedId + "-create-toggle",
        onToggle: function onToggle() {
          return _this2.handleToggle("create");
        },
        isModal: this.props.isModal
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "resource_groups",
        value: this.state.name,
        onChange: this.handleTextInput,
        useData: this.state.create === false || this.state.use_prefix === false,
        invalidCallback: function invalidCallback() {
          return _this2.props.invalidCallback(_this2.state, _this2.props);
        },
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state, _this2.props);
        }
      }), this.state.create && /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "Append your environment prefix to the beginning of the resource group."
        },
        labelText: "Use Prefix",
        defaultToggled: this.state.use_prefix,
        id: composedId + "-use-prefix-toggle",
        onToggle: this.handleToggle,
        isModal: this.props.isModal
      })));
    }
  }]);
  return ResourceGroupForm;
}(React.Component);
ResourceGroupForm.defaultProps = {
  data: {
    create: false,
    name: "",
    use_prefix: true
  },
  toggleName: "use_data",
  isModal: false
};
ResourceGroupForm.propTypes = {
  data: PropTypes__default["default"].shape({
    create: PropTypes__default["default"].bool,
    name: PropTypes__default["default"].string.isRequired,
    use_prefix: PropTypes__default["default"].bool
  }),
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
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

/**
 * security group form
 */
var SecurityGroupForm = /*#__PURE__*/function (_Component) {
  _inherits(SecurityGroupForm, _Component);
  var _super = _createSuper(SecurityGroupForm);
  function SecurityGroupForm(props) {
    var _this;
    _classCallCheck(this, SecurityGroupForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2(_objectSpread2({}, _this.props.data), {}, {
      show: false
    });
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleShowToggle = _this.handleShowToggle.bind(_assertThisInitialized(_this));
    _this.networkRuleOrderDidChange = _this.networkRuleOrderDidChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event
   */
  _createClass(SecurityGroupForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "handleShowToggle",
    value: function handleShowToggle() {
      this.setState(this.toggleStateBoolean("show", this.state));
    }

    /**
     * Check if the order of network rules updated - then update state to allow save
     * @param {Array} rules list of rule objects
     */
  }, {
    key: "networkRuleOrderDidChange",
    value: function networkRuleOrderDidChange(rules) {
      this.props.networkRuleOrderDidChange(this.state, this.props);
      this.setState({
        rules: rules
      }); // if the order of the rules changed, update rules state
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "security-group-form-".concat(this.props.data.name);
      var className = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "security_groups",
        value: this.state.name,
        onChange: this.handleInputChange,
        hideHelperText: true,
        className: className,
        invalidCallback: function invalidCallback() {
          return _this2.props.invalidCallback(_this2.state, _this2.props);
        },
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "security_Group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: className
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "security_Group",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        className: className
      })), (!this.props.isModal || this.props.isTeleport) && /*#__PURE__*/React__default["default"].createElement(NetworkingRulesOrderCard, {
        rules: this.state.rules,
        vpc_name: this.state.vpc_name,
        parent_name: this.props.data.name,
        isSecurityGroup: true,
        isTeleport: this.props.isTeleport,
        networkRuleOrderDidChange: this.networkRuleOrderDidChange,
        invalidCallback: this.props.invalidCallback,
        invalidTextCallback: this.props.invalidTextCallback,
        onSubmitCallback: this.props.onSubmitCallback,
        onRuleSave: this.props.onRuleSave,
        onRuleDelete: this.props.onRuleDelete,
        disableModalSubmitCallback: this.props.disableModalSubmitCallback,
        disableSaveCallback: this.props.disableSaveCallback
      }));
    }
  }]);
  return SecurityGroupForm;
}(React.Component);
SecurityGroupForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc_name: "",
    rules: []
  },
  isModal: false,
  isTeleport: false
};
SecurityGroupForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    rules: PropTypes__default["default"].array
  }).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  isTeleport: PropTypes__default["default"].bool.isRequired,
  networkRuleOrderDidChange: PropTypes__default["default"].func,
  // can be undefined
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  onSubmitCallback: PropTypes__default["default"].func.isRequired,
  onRuleSave: PropTypes__default["default"].func.isRequired,
  onRuleDelete: PropTypes__default["default"].func.isRequired,
  disableModalSubmitCallback: PropTypes__default["default"].func.isRequired,
  disableSaveCallback: PropTypes__default["default"].func.isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  vpcList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
};

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidthBigger {\n  width: 30rem\n}\n";
styleInject(css_248z$2);

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

/**
 * create a tile for each subnet
 * @param {Object} props
 * @returns {SubnetTile} react component
 */
var SubnetForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetForm, _React$Component);
  var _super = _createSuper(SubnetForm);
  function SubnetForm(props) {
    var _this;
    _classCallCheck(this, SubnetForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleSave = _this.handleSave.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(SubnetForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.props.componentDidUpdateCallback(this.state, this.props);
    }
  }, {
    key: "handleSave",
    value: function handleSave() {
      this.props.onSave(this.state, this.props);
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState({
        public_gateway: !this.state.public_gateway
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(react.Tile, {
        key: this.props.vpc_name + "-subnets-" + this.props.data.name,
        className: "marginRight fieldWidth"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: this.props.data.name,
        type: "subHeading",
        className: "marginBottomSmall",
        buttons: /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.isModal,
          show: /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
            disabled: this.props.disableSaveCallback(this.state, this.props),
            onClick: this.handleSave,
            noDeleteButton: true
          })
        })
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(react.TextInput, {
        id: this.props.data.name + "-cidr",
        invalidText: "Invalid subnet CIDR.",
        labelText: "Subnet CIDR",
        value: this.props.data.cidr,
        className: "fieldWidthSmaller",
        readOnly: true
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "acl_name",
        formName: "".concat(this.props.data.name, "-subnet-acl"),
        labelText: "Network ACL",
        groups: this.props.networkAcls,
        value: this.state.acl_name,
        handleInputChange: this.handleChange,
        className: "fieldWidthSmaller",
        disabled: this.props.isModal,
        invalid: lazyZ.isNullOrEmptyString(this.state.acl_name),
        invalidText: "Select a Network ACL."
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: "A Public Gateway must be enabled in this zone to use. To enable public gateways, see the VPC page."
        },
        id: "new-subnet-public-gateway-" + this.props.data.name,
        labelText: "Use Public Gateway",
        toggleFieldName: "public_gateway",
        defaultToggled: this.state.public_gateway,
        onToggle: this.handleToggle,
        disabled: this.props.isModal || this.props.shouldDisableGatewayToggle(this.state, this.props)
      })));
    }
  }]);
  return SubnetForm;
}(React__default["default"].Component);
SubnetForm.defaultProps = {
  isModal: false
};
SubnetForm.propTypes = _defineProperty({
  isModal: PropTypes__default["default"].bool.isRequired,
  onSave: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  }).isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  shouldDisableGatewayToggle: PropTypes__default["default"].func,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  componentDidUpdateCallback: PropTypes__default["default"].func.isRequired
}, "onSave", PropTypes__default["default"].func);

var css_248z$1 = ".subnetTileFormMargin {\n  margin-bottom: -0.5rem;\n  margin-top: 0.5rem;\n}\n\n.marginRight {\n  margin-right: 10px;\n}\n";
styleInject(css_248z$1);

var SubnetTileForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetTileForm, _React$Component);
  var _super = _createSuper(SubnetTileForm);
  function SubnetTileForm(props) {
    var _this;
    _classCallCheck(this, SubnetTileForm);
    _this = _super.call(this, props);
    _this.state = {
      subnetData: {}
    };
    if (!_this.props.isModal) {
      _this.props.data.forEach(function (subnet) {
        _this.state.subnetData[subnet.name] = true;
      });
    }
    _this.shouldDisableGatewayToggle = _this.shouldDisableGatewayToggle.bind(_assertThisInitialized(_this));
    _this.childSubnetHasChanged = _this.childSubnetHasChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * check if child subnet has changed
   * @param {Object} stateData
   * @param {string} stateData.name
   * @param {Object} componentProps
   * @param {Object} componentProps.data
   */
  _createClass(SubnetTileForm, [{
    key: "childSubnetHasChanged",
    value: function childSubnetHasChanged(stateData, componentProps) {
      var name = stateData.name;
      if (this.state.subnetData[name] && !lazyZ.deepEqual(stateData, componentProps.data)) {
        var subnetData = _objectSpread2({}, this.state.subnetData);
        subnetData[name] = false;
        this.setState({
          subnetData: subnetData
        });
      }
    }

    /**
     * check if gateway should be disabled
     * @param {Object} stateData
     * @param {string} stateData.name
     */
  }, {
    key: "shouldDisableGatewayToggle",
    value: function shouldDisableGatewayToggle(stateData) {
      var zone = lazyZ.parseIntFromZone(stateData.name);
      if (lazyZ.contains(this.props.enabledPublicGateways, zone)) {
        return false;
      } else return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var subnetMap = _toConsumableArray(this.props.data);
      return /*#__PURE__*/React__default["default"].createElement(IcseSubForm, {
        id: "subnet-tile-".concat(this.props.tier, "-").concat(this.props.vpc_name),
        formInSubForm: true,
        className: "popoverLeft subnetTileFormMargin"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Subnets",
        type: "subHeading",
        className: "marginBottomSmall"
      }), /*#__PURE__*/React__default["default"].createElement("div", {
        className: "displayFlex"
      }, subnetMap.map(function (subnet) {
        return /*#__PURE__*/React__default["default"].createElement(SubnetForm // change so doesn't show buttons
        , {
          key: "".concat(subnet.name, "-tile-").concat(_this2.props.tier, "-").concat(_this2.props.vpc_name, "-").concat(JSON.stringify(subnet)),
          vpc_name: _this2.props.vpc_name,
          data: subnet,
          onSave: _this2.props.onSave,
          isModal: _this2.props.isModal || _this2.props.readOnly,
          componentDidUpdateCallback: _this2.childSubnetHasChanged,
          networkAcls: _this2.props.networkAcls,
          disableSaveCallback: _this2.props.disableSaveCallback,
          shouldDisableGatewayToggle: _this2.shouldDisableGatewayToggle
        });
      })));
    }
  }]);
  return SubnetTileForm;
}(React__default["default"].Component);
SubnetTileForm.defaultProps = {
  isModal: false,
  readOnly: false
};
SubnetTileForm.propTypes = {
  isModal: PropTypes__default["default"].bool.isRequired,
  disableSaveCallback: PropTypes__default["default"].func,
  vpc_name: PropTypes__default["default"].string.isRequired,
  tier: PropTypes__default["default"].string.isRequired,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  onSave: PropTypes__default["default"].func,
  data: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    cidr: PropTypes__default["default"].string.isRequired,
    public_gateway: PropTypes__default["default"].bool,
    acl_name: PropTypes__default["default"].string.isRequired
  })),
  readOnly: PropTypes__default["default"].bool.isRequired,
  enabledPublicGateways: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number).isRequired
};

var SubnetTierForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SubnetTierForm, _React$Component);
  var _super = _createSuper(SubnetTierForm);
  function SubnetTierForm(props) {
    var _this;
    _classCallCheck(this, SubnetTierForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.onSave = _this.onSave.bind(_assertThisInitialized(_this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    _this.handleShowToggle = _this.handleShowToggle.bind(_assertThisInitialized(_this));
    _this.shouldDisableSubmit = _this.shouldDisableSubmit.bind(_assertThisInitialized(_this));
    _this.toggleDeleteModal = _this.toggleDeleteModal.bind(_assertThisInitialized(_this));
    _this.onSubnetSave = _this.onSubnetSave.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Handle input change
   * @param {event} event
   */
  _createClass(SubnetTierForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      this.setState(_defineProperty({}, name, value));
    }

    /**
     * handle toggle
     */
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      this.setState({
        addPublicGateway: !this.state.addPublicGateway
      });
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
     * handle hide/show form data
     */
  }, {
    key: "handleShowToggle",
    value: function handleShowToggle() {
      this.setState({
        hide: !this.state.hide
      });
    }
  }, {
    key: "onSave",
    value: function onSave() {
      this.props.onSave(this.state, this.props);
    }
  }, {
    key: "onSubnetSave",
    value: function onSubnetSave(stateData, componentProps) {
      this.props.onSubnetSave(stateData, componentProps);
    }
  }, {
    key: "onDelete",
    value: function onDelete() {
      this.props.onDelete(this.state, this.props);
    }
  }, {
    key: "shouldDisableSubmit",
    value: function shouldDisableSubmit() {
      if (this.props.isModal) {
        if (this.props.shouldDisableSubmit(this.state, this.props) === false) this.props.enableModal();else this.props.disableModal();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.shouldDisableSubmit();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.shouldDisableSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var composedId = "".concat(this.props.vpc_name, "-tier-").concat(this.props.data.name === "" ? "new-subnet-tier" : this.props.data.name);
      var formName = this.props.data.name + "-subnet-tier";
      var tierName = this.props.data.name === "" ? "New Subnet Tier" : lazyZ.titleCase(formName).replace(/Vsi/g, "VSI").replace(/Vpe/g, "VPE").replace(/Vpn/g, "VPN");
      return /*#__PURE__*/React__default["default"].createElement(IcseSubForm, {
        formInSubForm: true,
        id: composedId,
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(DeleteModal, {
        name: tierName,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.onDelete
      }), /*#__PURE__*/React__default["default"].createElement(StatelessToggleForm, {
        hideTitle: this.props.isModal === true,
        hide: this.state.hide,
        name: tierName,
        onIconClick: this.handleShowToggle,
        toggleFormTitle: true,
        buttons: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(SaveAddButton, {
          onClick: this.onSave,
          noDeleteButton: this.props.noDeleteButton,
          disabled: this.props.shouldDisableSave(this.state, this.props)
        }), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
          hide: this.props.noDeleteButton,
          show: /*#__PURE__*/React__default["default"].createElement(DeleteButton, {
            name: tierName,
            onClick: this.toggleDeleteModal
          })
        }))
      }, /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: this.props.isModal ? "new-tier-name" : this.props.data.name + "-tier-name",
        value: this.state.name,
        componentName: formName,
        onChange: this.handleChange,
        className: "fieldWidthSmaller",
        readOnly: this.props.readOnly,
        invalidCallback: this.props.invalidCallback,
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseNumberSelect, {
        max: 3,
        value: this.state.zones,
        labelText: "Subnet Tier Zones",
        name: "zones",
        handleInputChange: this.handleChange,
        className: "fieldWidthSmaller",
        invalid: this.state.zones === 0,
        invalidText: "At least one zone must be selected.",
        formName: formName
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        tooltip: {
          content: "Changing this field will overwrite existing Network ACL changes to subnets in this data."
        },
        className: "fieldWidthSmaller",
        field: "networkAcl",
        name: "networkAcl",
        value: this.state.networkAcl || "",
        vpcName: this.props.vpc_name,
        labelText: "Network ACL",
        groups: this.props.networkAcls,
        handleInputChange: this.handleChange,
        isModal: this.props.isModal,
        formName: formName
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        tooltip: {
          content: this.props.enabledPublicGateways.length === 0 ? "This VPC has no public gateways enabled. To add public gateways, return to the VPC page." : "Changing this field will overwrite existing Public Gateway changes to subnets in this data."
        },
        id: composedId + "-public-gateway",
        labelText: "Use Public Gateways",
        defaultToggled: this.state.addPublicGateway,
        onToggle: this.handleToggle,
        isModal: this.props.isModal,
        disabled: this.props.enabledPublicGateways.length === 0
      })), /*#__PURE__*/React__default["default"].createElement(SubnetTileForm, {
        tier: this.props.data.name,
        vpc_name: this.props.vpc_name,
        onSave: this.onSubnetSave,
        isModal: this.props.isModal,
        data: this.props.subnetListCallback(this.state, this.props),
        key: this.state.zones,
        enabledPublicGateways: this.props.enabledPublicGateways,
        networkAcls: this.props.networkAcls,
        disableSaveCallback: this.props.disableSubnetSaveCallback
      }))));
    }
  }]);
  return SubnetTierForm;
}(React__default["default"].Component);
SubnetTierForm.defaultProps = {
  isModal: false,
  hide: true,
  readOnly: false,
  noDeleteButton: false,
  data: {
    hide: false,
    name: "",
    zones: 3,
    networkAcl: null,
    addPublicGateway: false
  }
};
SubnetTierForm.propTypes = {
  data: PropTypes__default["default"].shape({
    hide: PropTypes__default["default"].bool,
    name: PropTypes__default["default"].string.isRequired,
    zones: PropTypes__default["default"].number.isRequired,
    networkAcl: PropTypes__default["default"].string,
    addPublicGateway: PropTypes__default["default"].bool
  }),
  // save and delete functions can be null when form rendered as modal
  onSave: PropTypes__default["default"].func,
  onSubnetSave: PropTypes__default["default"].func,
  onDelete: PropTypes__default["default"].func,
  disableSubnetSaveCallback: PropTypes__default["default"].func,
  // can be null when modal
  shouldDisableSave: PropTypes__default["default"].func,
  shouldDisableSubmit: PropTypes__default["default"].func,
  // can be null when not modal
  noDeleteButton: PropTypes__default["default"].bool,
  // can be null when modal
  isModal: PropTypes__default["default"].bool.isRequired,
  readOnly: PropTypes__default["default"].bool.isRequired,
  networkAcls: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  enabledPublicGateways: PropTypes__default["default"].arrayOf(PropTypes__default["default"].number).isRequired,
  hide: PropTypes__default["default"].bool.isRequired,
  vpc_name: PropTypes__default["default"].string.isRequired,
  subnetListCallback: PropTypes__default["default"].func.isRequired,
  enableModal: PropTypes__default["default"].func,
  disableModal: PropTypes__default["default"].func
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

var TransitGatewayForm = /*#__PURE__*/function (_Component) {
  _inherits(TransitGatewayForm, _Component);
  var _super = _createSuper(TransitGatewayForm);
  function TransitGatewayForm(props) {
    var _this;
    _classCallCheck(this, TransitGatewayForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handleVpcSelect = _this.handleVpcSelect.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  _createClass(TransitGatewayForm, [{
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(_defineProperty({}, name, !this.state[name]));
    }

    /**
     * handle vpc selection
     * @param {event} event
     */
  }, {
    key: "handleVpcSelect",
    value: function handleVpcSelect(event) {
      this.setState({
        transit_gateway_connections: event
      });
    }

    /**
     * Handle input change
     * @param {event} event
     */
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        labelText: "Use Transit Gateway",
        toggleFieldName: "enable_transit_gateway",
        id: "tg-enable",
        onToggle: this.handleToggle,
        defaultToggled: this.state.enable_transit_gateway
      }), /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        onChange: this.handleInputChange,
        componentName: "Transit Gateway",
        field: "name",
        value: this.state.name,
        readOnly: this.props.readOnlyName,
        id: "tg-name",
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "Transit Gateway",
        value: this.state.transit_gateway_resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        name: "transit_gateway_resource_group",
        labelText: "Resource Group"
      }), /*#__PURE__*/React__default["default"].createElement(VpcListMultiSelect, {
        id: "tg-vpc-multiselect",
        titleText: "Connected VPCs",
        initialSelectedItems: this.state.transit_gateway_connections,
        vpcList: this.props.vpcList,
        onChange: this.handleVpcSelect,
        invalid: this.state.transit_gateway_connections.length === 0 && this.state.enable_transit_gateway,
        invalidText: "At least one VPC must be connected"
      })));
    }
  }]);
  return TransitGatewayForm;
}(React.Component);
TransitGatewayForm.defaultProps = {
  data: {
    enable_transit_gateway: true,
    transit_gateway_connections: [],
    transit_gateway_resource_group: "",
    name: ""
  },
  readOnlyName: true,
  vpcList: [],
  resourceGroups: []
};
TransitGatewayForm.propTypes = {
  data: PropTypes__default["default"].shape({
    enable_transit_gateway: PropTypes__default["default"].bool.isRequired,
    transit_gateway_connections: PropTypes__default["default"].array.isRequired,
    transit_gateway_resource_group: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string
  }).isRequired,
  readOnlyName: PropTypes__default["default"].bool.isRequired,
  vpcList: PropTypes__default["default"].array.isRequired,
  resourceGroups: PropTypes__default["default"].array.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
};

var nameFields = ["default_network_acl_name", "default_routing_table_name", "default_security_group_name"];
var VpcNetworkForm = /*#__PURE__*/function (_React$Component) {
  _inherits(VpcNetworkForm, _React$Component);
  var _super = _createSuper(VpcNetworkForm);
  function VpcNetworkForm(props) {
    var _this;
    _classCallCheck(this, VpcNetworkForm);
    _this = _super.call(this, props);
    _this.state = _objectSpread2({}, _this.props.data);
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    _this.handPgwToggle = _this.handPgwToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {event} event event
   */
  _createClass(VpcNetworkForm, [{
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
     * handle change of public gateway by zone
     * @param {string} zone zone-1, zone-2, or zone-3
     */
  }, {
    key: "handPgwToggle",
    value: function handPgwToggle(zone) {
      var vpc = _objectSpread2({}, this.state);
      var currentGw = _objectSpread2({}, this.state.use_public_gateways);
      currentGw[zone] = !currentGw[zone];
      vpc.use_public_gateways = currentGw;
      this.setState(_objectSpread2({}, vpc));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "".concat(this.props.data.name, "-vpc-form");
      var classNameModalCheck = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        tooltip: {
          content: "This name will be prepended to all components within this VPC.",
          alignModal: "bottom-left",
          align: "bottom-left"
        },
        id: composedId + "-prefix",
        componentProps: this.props,
        component: "vpc",
        componentName: this.props.data.name,
        field: "name",
        labelText: "Name",
        placeholder: "my-vpc-name",
        hideHelperText: true,
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback("name", this.state, this.props),
        invalidText: this.props.invalidTextCallback("name", this.state, this.props),
        className: classNameModalCheck
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: "Resource Group",
        name: "resource_group",
        formName: "resource_group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.resource_group),
        invalidText: "Select a Resource Group.",
        className: classNameModalCheck
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        labelText: "Flow Logs Bucket Name",
        name: "flow_logs_bucket_name",
        formName: this.props.data.name + "-vpc",
        groups: this.props.cosBuckets,
        value: this.state.flow_logs_bucket_name || "",
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.flow_logs_bucket_name),
        invalidText: "Select a Bucket.",
        className: classNameModalCheck
      })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "VPC Options",
        type: "subHeading"
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        id: this.props.data.name + "-classic-access",
        labelText: "Classic Infrastructure Access",
        toggleFieldName: "classic_access",
        defaultToggled: this.state.classic_access,
        onToggle: this.handleToggle,
        className: classNameModalCheck + " leftTextAlign"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, nameFields.map(function (field) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: "fitContent",
          key: _this2.props.data.name + "-" + lazyZ.kebabCase(field) + "-div"
        }, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
          id: composedId + "-" + field,
          componentName: "VPC Network",
          field: field,
          labelText: lazyZ.titleCase(field),
          value: _this2.state[field],
          onChange: _this2.handleInputChange,
          invalid: _this2.props.invalidCallback(field, _this2.state, _this2.props),
          invalidText: _this2.props.invalidTextCallback(field, _this2.state, _this2.props),
          className: classNameModalCheck
        }));
      })), /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Public Gateways",
        type: "subHeading",
        noLabelText: true,
        tooltip: {
          content: "Public Gateways allow for all resources in a zone to communicate with the public internet. Public Gateways are not needed for subnets where a VPN gateway is created."
        }
      }), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        noMarginBottom: true
      }, ["zone-1", "zone-2", "zone-3"].map(function (zone) {
        return /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
          key: _this2.props.data.name + "-gateway-toggle-" + zone,
          id: _this2.props.data.name + "-pgw-" + zone,
          labelText: "Create in Zone " + lazyZ.parseIntFromZone(zone),
          defaultToggled: _this2.state.use_public_gateways[zone],
          onToggle: function onToggle() {
            return _this2.handPgwToggle(zone);
          },
          className: classNameModalCheck + " leftTextAlign"
        });
      })));
    }
  }]);
  return VpcNetworkForm;
}(React__default["default"].Component);
VpcNetworkForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    flow_logs_bucket_name: "",
    default_network_acl_name: "",
    default_routing_table_name: "",
    default_security_group_name: "",
    classic_access: false,
    use_manual_address_prefixes: false,
    use_public_gateways: {
      "zone-1": false,
      "zone-2": false,
      "zone-3": false
    }
  },
  isModal: false
};
VpcNetworkForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string,
    flow_logs_bucket_name: PropTypes__default["default"].string,
    default_network_acl_name: PropTypes__default["default"].string,
    default_security_group_name: PropTypes__default["default"].string,
    default_routing_table_name: PropTypes__default["default"].string,
    classic_access: PropTypes__default["default"].bool.isRequired,
    use_manual_address_prefixes: PropTypes__default["default"].bool.isRequired,
    use_public_gateways: PropTypes__default["default"].object.isRequired
  }),
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  cosBuckets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

var services = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr"
};
var serviceGroups = ["Hyper Protect Crypto Services", "Key Protect", "Object Storage", "Container Registry"];

/**
 * Vpe Form
 */
var VpeForm = /*#__PURE__*/function (_Component) {
  _inherits(VpeForm, _Component);
  var _super = _createSuper(VpeForm);
  function VpeForm(props) {
    var _this;
    _classCallCheck(this, VpeForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleServiceDropdown = _this.handleServiceDropdown.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelect = _this.handleMultiSelect.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * Handle input change
   * @param {event} event
   */
  _createClass(VpeForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle service dropdown
     * @param {event} event event
     */
  }, {
    key: "handleServiceDropdown",
    value: function handleServiceDropdown(event) {
      this.setState({
        service: services[event.target.value]
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

    /**
     * handle multiselects
     * @param {event} event
     */
  }, {
    key: "handleMultiSelect",
    value: function handleMultiSelect(name, event) {
      this.setState(_defineProperty({}, name, event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Vpe",
        field: "vpc",
        labelText: "VPC Name",
        className: "fieldWidthSmaller",
        value: this.state.vpc,
        onChange: function onChange() {} // nothing
        ,
        readOnly: true,
        id: "vpe-vpc-name",
        invalid: false
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "service",
        formName: "vpe",
        groups: serviceGroups,
        value: services[this.state.service],
        labelText: "Service Type",
        handleInputChange: this.handleServiceDropdown,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      }), /*#__PURE__*/React__default["default"].createElement(SecurityGroupMultiSelect, {
        id: "vpe-security-groups",
        initialSelectedItems: this.state.security_groups,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("security_groups", event);
        },
        securityGroups: this.props.securityGroups,
        className: "fieldWidthSmaller",
        invalid: this.state.security_groups.length === 0
      }), /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "vpe-subnets",
        initialSelectedItems: this.state.subnets,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("subnets", event);
        },
        subnets: this.props.subnetList,
        className: "fieldWidthSmaller"
      })));
    }
  }]);
  return VpeForm;
}(React.Component);
VpeForm.defaultProps = {
  data: {
    vpc: "",
    service: "kms",
    resource_group: "",
    security_groups: [],
    subnets: []
  },
  resourceGroups: [],
  subnetList: [],
  securityGroups: [],
  isModal: false
};
VpeForm.propTypes = {
  data: PropTypes__default["default"].shape({
    vpc: PropTypes__default["default"].string.isRequired,
    service: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    security_groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
    subnets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
  }),
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  subnetList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  securityGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

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

var VsiForm = /*#__PURE__*/function (_Component) {
  _inherits(VsiForm, _Component);
  var _super = _createSuper(VsiForm);
  function VsiForm(props) {
    var _this;
    _classCallCheck(this, VsiForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleMultiSelectChange = _this.handleMultiSelectChange.bind(_assertThisInitialized(_this));
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(VsiForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var stateChangeParams = _defineProperty({}, name, name === "vsi_per_subnet" && value !== "" ? Number(value) : value);
      if (name === "vpc_name") lazyZ.transpose({
        subnet_names: [],
        subnet_name: ""
      }, stateChangeParams);
      this.setState(stateChangeParams);
    }
  }, {
    key: "handleMultiSelectChange",
    value: function handleMultiSelectChange(name, value) {
      this.setState(this.setNameToValue(name, value));
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var composedId = "vsi-deployment-form-".concat(this.props.data.name);
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: composedId,
        componentName: "vsi",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state),
        hideHelperText: true
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroupList,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name),
        invalidText: "Select a VPC."
      }), this.props.isTeleport ?
      /*#__PURE__*/
      // render dropdown for teleport instance
      React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "subnet_name",
        labelText: "Subnet",
        groups: this.props.subnetList,
        value: this.state.subnet_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name) || lib_4(this.state.subnet_name),
        invalidText: lib_4(this.state.vpc_name) ? "No VPC Selected." : "Select a Subnet."
      }) : /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "subnet",
        initialSelectedItems: this.state.subnet_names,
        vpc_name: this.state.vpc_name,
        subnets: this.props.subnetList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("subnet_names", value);
        }
      }), /*#__PURE__*/React__default["default"].createElement(react.NumberInput, {
        label: "Instances per Subnet",
        id: composedId + "-vsi-per-subnet",
        allowEmpty: false,
        value: this.state.vsi_per_subnet,
        defaultValue: 1,
        max: 10,
        min: 1,
        onChange: this.handleInputChange,
        name: "vsi_per_subnet",
        hideSteppers: true,
        invalidText: "Please input a number 1-10",
        className: "fieldWidth leftTextAlign"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(SshKeyMultiSelect, {
        id: "sshkey",
        sshKeys: this.props.sshKeyList,
        onChange: function onChange(value) {
          return _this2.handleMultiSelectChange("ssh_keys", value);
        },
        initialSelectedItems: this.state.ssh_keys
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "vsi_form",
        labelText: "Image",
        name: "image_name",
        apiEndpoint: this.props.apiEndpointImages,
        handleInputChange: this.handleInputChange,
        value: this.state.image_name
      }), /*#__PURE__*/React__default["default"].createElement(FetchSelect, {
        formName: "vsi_form",
        labelText: "Flavor",
        name: "machine_type",
        apiEndpoint: this.props.apiEndpointFlavors,
        handleInputChange: this.handleInputChange,
        value: this.state.machine_type
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "vsi_form",
        name: "boot_volume_encryption_key_name",
        labelText: "Encryption Key",
        groups: this.props.encryptionKeyList,
        value: this.state.boot_volume_encryption_key_name,
        handleInputChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state),
        invalidText: "Select a valid encryption key."
      }), /*#__PURE__*/React__default["default"].createElement(IcseToggle, {
        id: composedId + "-fips-toggle",
        labelText: "Enable Floating IP",
        defaultToggled: this.state.enable_floating_ip,
        onToggle: this.handleToggle
      })), /*#__PURE__*/React__default["default"].createElement(DynamicRender, {
        hide: this.props.isTeleport,
        show: /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(react.TextArea, {
          id: composedId + "-vsi-user-data",
          placeholder: "Cloud init data",
          labelText: "User Data",
          name: "user_data",
          value: this.state.user_data || "",
          onChange: this.handleInputChange,
          invalidText: "Invalid error message.",
          className: "fieldWidthBigger"
        }))
      }));
    }
  }]);
<<<<<<< HEAD
  return F5VsiTile;
}(React__default["default"].Component);
F5VsiForm.defaultProps = {
  data: {
    zones: 0,
    resource_group: "",
    ssh_keys: [],
    f5_image_name: "",
    machine_type: ""
  },
  vsis: [],
  edge_pattern: "vpn-and-waf",
  f5_on_management: true
};
F5VsiForm.propTypes = {
  data: PropTypes__default["default"].shape({
    zones: PropTypes__default["default"].number.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    ssh_keys: PropTypes__default["default"].array,
    f5_image_name: PropTypes__default["default"].string.isRequired,
    machine_type: PropTypes__default["default"].string.isRequired
  }).isRequired,
  vsis: PropTypes__default["default"].array.isRequired,
  edge_pattern: PropTypes__default["default"].string.isRequired,
  f5_on_management: PropTypes__default["default"].bool.isRequired,
  // use management
  /* api endpoints */
  apiEndpointFlavors: PropTypes__default["default"].string.isRequired,
  /* lists */
  resourceGroupList: PropTypes__default["default"].array.isRequired,
  sshKeyList: PropTypes__default["default"].array.isRequired,
  encryptionKeyList: PropTypes__default["default"].array.isRequired,
  /* callbacks */
  initVsiCallback: PropTypes__default["default"].func.isRequired,
  saveVsiCallback: PropTypes__default["default"].func.isRequired,
  hideSaveCallback: PropTypes__default["default"].func.isRequired,
  disableSaveCallback: PropTypes__default["default"].func.isRequired
};

var AccessGroupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AccessGroupForm, _React$Component);
  var _super = _createSuper(AccessGroupForm);
  function AccessGroupForm(props) {
    var _this;
    _classCallCheck(this, AccessGroupForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(AccessGroupForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: "name",
        componentName: "access_groups",
        value: this.state.name,
        onChange: this.handleInputChange,
        className: "fieldWidth",
        hideHelperText: true,
        invalid: this.props.invalidCallback("name", this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "description",
        componentName: "description",
        tooltip: {
          content: "Description of the access group"
        },
        field: "description",
        labelText: "Description",
        value: this.state.description,
        onChange: this.handleInputChange,
        isModal: this.props.isModal,
        className: "textInputWide",
        hideHelperText: true,
        invalid: false
      })), this.props.isModal !== true && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.subForms.map(function (form, index) {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: index
        }, form);
      })));
    }
  }]);
  return AccessGroupForm;
}(React__default["default"].Component);
AccessGroupForm.defaultProps = {
=======
  return VsiForm;
}(React.Component);
VsiForm.defaultProps = {
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
  data: {
    name: "",
    ssh_keys: [],
    subnet_name: "",
    subnet_names: [],
    enable_floating_ip: false,
    vpc_name: "",
    image_name: "",
    machine_type: "",
    resource_group: "",
    boot_volume_encryption_key_name: "",
    vsi_per_subnet: 1
  },
  isModal: false,
  isTeleport: false,
  resourceGroupList: [],
  vpcList: [],
  subnetList: [],
  sshKeyList: [],
  encryptionKeyList: [],
  apiEndpointImages: "",
  apiEndpointFlavors: ""
};
VsiForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string,
    ssh_keys: PropTypes__default["default"].array,
    subnet_name: PropTypes__default["default"].string,
    subnet_names: PropTypes__default["default"].array,
    enable_floating_ip: PropTypes__default["default"].bool,
    vpc_name: PropTypes__default["default"].string,
    image_name: PropTypes__default["default"].string,
    machine_type: PropTypes__default["default"].string,
    resource_group: PropTypes__default["default"].string,
    boot_volume_encryption_key_name: PropTypes__default["default"].string,
    vsi_per_subnet: PropTypes__default["default"].oneOfType([PropTypes__default["default"].number, PropTypes__default["default"].string])
  }).isRequired,
  /* bools */
  isModal: PropTypes__default["default"].bool.isRequired,
  isTeleport: PropTypes__default["default"].bool.isRequired,
  /* lists */
  resourceGroupList: PropTypes__default["default"].array.isRequired,
  vpcList: PropTypes__default["default"].array.isRequired,
  subnetList: PropTypes__default["default"].array.isRequired,
  sshKeyList: PropTypes__default["default"].array.isRequired,
  encryptionKeyList: PropTypes__default["default"].array.isRequired,
  /* api endpoints */
  apiEndpointImages: PropTypes__default["default"].string.isRequired,
  apiEndpointFlavors: PropTypes__default["default"].string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired
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

<<<<<<< HEAD
  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  _createClass(AccessGroupPolicyForm, [{
<<<<<<< HEAD
=======
   * Handle input change
   * @param {event} event
   */
  _createClass(VpeForm, [{
>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
  _createClass(AccessGroupPolicyForm, [{
>>>>>>> 1381471 (new invalidCallback)
=======
  _createClass(AccessGroupPolicyForm, [{
>>>>>>> 2a431c4 (feat: better exports)
=======
  _createClass(AccessGroupPolicyForm, [{
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    /**
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
     * handle input change
     * @param {string} name key to change in state
     * @param {*} value value to update
     */
  }, {
    key: "handleInputResource",
    value: function handleInputResource(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var resources = _objectSpread2({}, this.state.resources);
      resources[name] = value;
      this.setState({
        resources: resources
      });
    }
<<<<<<< HEAD
=======
     * handle service dropdown
     * @param {event} event event
     */
  }, {
    key: "handleServiceDropdown",
    value: function handleServiceDropdown(event) {
      this.setState({
        service: services[event.target.value]
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

    /**
     * handle multiselects
     * @param {event} event
     */
  }, {
    key: "handleMultiSelect",
    value: function handleMultiSelect(name, event) {
      this.setState(_defineProperty({}, name, event));
    }
>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: "name",
        componentName: "policies",
        value: this.state.name,
        onChange: this.handleInputChange,
        labelText: "Name",
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        invalid: this.props.invalidCallback(this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state);
        }
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Resource Configuration",
        type: "subHeading"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource",
        componentName: "resource",
        tooltip: {
          content: "The resource of the policy definition",
          alignModal: "bottom-left"
        },
        isModal: this.props.isModal,
        field: "resource",
        value: this.state.resources.resource,
        invalid: false,
        onChange: this.handleInputResource,
        labelText: "Resource"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "resource_group",
        formName: "".concat(lazyZ.kebabCase(this.props.data.name), "-agp-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resources.resource_group,
        handleInputChange: this.handleInputResource,
        invalidText: "Select a Resource Group",
        labelText: "Resource Group",
        tooltip: {
          content: "Name of the resource group the policy will apply to",
          alignModal: "bottom-left"
        }
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource_instance_id",
        componentName: "resource_instance_id",
        isModal: this.props.isModal,
        field: "resource_instance_id",
        value: this.state.resources.resource_instance_id,
        tooltip: {
          content: "ID of a service instance to give permissions"
        },
        invalid: false,
        labelText: "Resource Instance ID",
        onChange: this.handleInputResource
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "service",
        componentName: "service",
        tooltip: {
          content: 'Name of the service type for the policy ex. "cloud-object-storage"',
          alignModal: "bottom-left",
          align: "top-left"
        },
        labelText: "Service Type",
        field: "service",
        value: this.state.resources.service,
        isModal: this.props.isModal,
        onChange: this.handleInputResource,
        invalid: false
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource_type",
        componentName: "resource_type",
        field: "resource_type",
        tooltip: {
          content: 'Name of the resource type for the policy ex. "resource-group"',
          alignModal: "bottom-left"
        },
        invalid: false,
        value: this.state.resources.resource_type,
        isModal: this.props.isModal,
        onChange: this.handleInputResource,
        labelText: "Resource Type"
      })));
    }
  }]);
  return AccessGroupPolicyForm;
}(React__default["default"].Component);
=======
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputResource(event) {
    let {
      name,
      value
    } = event.target;
    let resources = {
      ...this.state.resources
    };
    resources[name] = value;
    this.setState({
      resources
    });
  }
  render() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
      id: "name",
      componentName: "policies",
      value: this.state.name,
      onChange: this.handleInputChange,
      labelText: "Name",
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state)
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
      name: "Resource Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource",
      componentName: "resource",
      tooltip: {
        content: "The resource of the policy definition",
        alignModal: "bottom-left"
      },
      isModal: this.props.isModal,
      field: "resource",
      value: this.state.resources.resource,
      invalid: false,
      onChange: this.handleInputResource,
      labelText: "Resource"
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
      name: "resource_group",
      formName: `${lazyZ.kebabCase(this.props.data.name)}-agp-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resources.resource_group,
      handleInputChange: this.handleInputResource,
      invalidText: "Select a Resource Group",
      labelText: "Resource Group",
      tooltip: {
        content: "Name of the resource group the policy will apply to",
        alignModal: "bottom-left"
      }
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource_instance_id",
      componentName: "resource_instance_id",
      isModal: this.props.isModal,
      field: "resource_instance_id",
      value: this.state.resources.resource_instance_id,
      tooltip: {
        content: "ID of a service instance to give permissions"
      },
      invalid: false,
      labelText: "Resource Instance ID",
      onChange: this.handleInputResource
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "service",
      componentName: "service",
      tooltip: {
        content: 'Name of the service type for the policy ex. "cloud-object-storage"',
        alignModal: "bottom-left",
        align: "top-left"
      },
      labelText: "Service Type",
      field: "service",
      value: this.state.resources.service,
      isModal: this.props.isModal,
      onChange: this.handleInputResource,
      invalid: false
    })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
      id: "resource_type",
      componentName: "resource_type",
      field: "resource_type",
      tooltip: {
        content: 'Name of the resource type for the policy ex. "resource-group"',
        alignModal: "bottom-left"
      },
      invalid: false,
      value: this.state.resources.resource_type,
      isModal: this.props.isModal,
      onChange: this.handleInputResource,
      labelText: "Resource Type"
    })));
  }
}
>>>>>>> 21a3131 (added default prop and removed extra lines)
=======
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))

    /**
     * handle input change
     * @param {string} name key to change in state
     * @param {*} value value to update
     */
  }, {
    key: "handleInputResource",
    value: function handleInputResource(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var resources = _objectSpread2({}, this.state.resources);
      resources[name] = value;
      this.setState({
        resources: resources
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseNameInput, {
        id: "name",
        componentName: "policies",
        value: this.state.name,
        onChange: this.handleInputChange,
        labelText: "Name",
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        invalid: this.props.invalidCallback("name", this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state, _this2.props);
        }
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, {
        className: "marginBottomSmall"
      }, /*#__PURE__*/React__default["default"].createElement(IcseHeading, {
        name: "Resource Configuration",
        type: "subHeading"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource",
        componentName: "resource",
        tooltip: {
          content: "The resource of the policy definition",
          alignModal: "bottom-left"
        },
        isModal: this.props.isModal,
        field: "resource",
        value: this.state.resources.resource,
        invalid: false,
        onChange: this.handleInputResource,
        labelText: "Resource"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "resource_group",
        formName: "".concat(lazyZ.kebabCase(this.props.data.name), "-agp-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resources.resource_group,
        handleInputChange: this.handleInputResource,
        invalidText: "Select a Resource Group",
        labelText: "Resource Group",
        tooltip: {
          content: "Name of the resource group the policy will apply to",
          alignModal: "bottom-left"
        }
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource_instance_id",
        componentName: "resource_instance_id",
        isModal: this.props.isModal,
        field: "resource_instance_id",
        value: this.state.resources.resource_instance_id,
        tooltip: {
          content: "ID of a service instance to give permissions"
        },
        invalid: false,
        labelText: "Resource Instance ID",
        onChange: this.handleInputResource
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "service",
        componentName: "service",
        tooltip: {
          content: 'Name of the service type for the policy ex. "cloud-object-storage"',
          alignModal: "bottom-left",
          align: "top-left"
        },
        labelText: "Service Type",
        field: "service",
        value: this.state.resources.service,
        isModal: this.props.isModal,
        onChange: this.handleInputResource,
        invalid: false
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        id: "resource_type",
        componentName: "resource_type",
        field: "resource_type",
        tooltip: {
          content: 'Name of the resource type for the policy ex. "resource-group"',
          alignModal: "bottom-left"
        },
        invalid: false,
        value: this.state.resources.resource_type,
        isModal: this.props.isModal,
        onChange: this.handleInputResource,
        labelText: "Resource Type"
      })));
    }
  }]);
  return AccessGroupPolicyForm;
}(React__default["default"].Component);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1381471 (new invalidCallback)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
AccessGroupPolicyForm.defaultProps = {
  data: {
    name: "",
    resources: {
      resource_group: "",
      resource_type: "",
      resource: "",
      service: "",
      resource_instance_id: ""
    }
  },
  resourceGroups: [],
  isModal: false
};
AccessGroupPolicyForm.propTypes = {
  data: PropTypes__default["default"].shape({
    name: PropTypes__default["default"].string.isRequired,
    resources: PropTypes__default["default"].shape({
      resource_group: PropTypes__default["default"].string,
      // can be null
      resource_type: PropTypes__default["default"].string.isRequired,
      resource: PropTypes__default["default"].string.isRequired,
      service: PropTypes__default["default"].string.isRequired,
      resource_instance_id: PropTypes__default["default"].string.isRequired
    }).isRequired
  }).isRequired,
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  invalidCallback: PropTypes__default["default"].func.isRequired,
  invalidTextCallback: PropTypes__default["default"].func.isRequired,
  helperTextCallback: PropTypes__default["default"].func.isRequired
};

var conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains"
};
var AccessGroupDynamicPolicyForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AccessGroupDynamicPolicyForm, _React$Component);
  var _super = _createSuper(AccessGroupDynamicPolicyForm);
  function AccessGroupDynamicPolicyForm(props) {
    var _this;
    _classCallCheck(this, AccessGroupDynamicPolicyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleInputCondition = _this.handleInputCondition.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(AccessGroupDynamicPolicyForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }

    /**
     * handle input change
     * @param {string} name key to change in state
     * @param {*} value value to update
     */
  }, {
    key: "handleInputCondition",
    value: function handleInputCondition(event) {
      var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
      var conditions = _objectSpread2({}, this.state.conditions);
      if (name === "operator") {
        conditions[name] = lazyZ.snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
=======
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
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
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
        initialSelectedItems: this.props.data.subnets,
        subnets: this.props.subnetList,
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
  subnetList: PropTypes__default["default"].array.isRequired,
  isModal: PropTypes__default["default"].bool.isRequired,
  cluster: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string,
    // can be null
    machine_type: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
  }),
  // can be null
  data: PropTypes__default["default"].shape({
    entitlement: PropTypes__default["default"].string.isRequired,
    flavor: PropTypes__default["default"].string.isRequired,
    name: PropTypes__default["default"].string.isRequired,
    vpc_name: PropTypes__default["default"].string.isRequired,
    workers_per_subnet: PropTypes__default["default"].number.isRequired,
    subnets: PropTypes__default["default"].array.isRequired
  }).isRequired
};

/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(iconsReact.WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React__default["default"].createElement("h4", null, "Page Under Construction"));
};

var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z);

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
      }), this.props.hideAbout ? this.props.form : /*#__PURE__*/React__default["default"].createElement(react.Tabs, {
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

var ToggleForm = /*#__PURE__*/function (_React$Component) {
  _inherits(ToggleForm, _React$Component);
  var _super = _createSuper(ToggleForm);
  function ToggleForm(props) {
    var _this;
    _classCallCheck(this, ToggleForm);
    _this = _super.call(this, props);
    _this.state = {
      hide: _this.props.hide,
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

var IcseFormTemplate = /*#__PURE__*/function (_React$Component) {
  _inherits(IcseFormTemplate, _React$Component);
  var _super = _createSuper(IcseFormTemplate);
  function IcseFormTemplate(props) {
    var _this;
    _classCallCheck(this, IcseFormTemplate);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      shownArrayForms: [],
      // list of array forms to keep open on save
      shownChildForms: [] // list of child forms to keep open on save
    };

    _this.onChildToggle = _this.onChildToggle.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.shouldShow = _this.shouldShow.bind(_assertThisInitialized(_this));
    // add an array to track middle forms
    if (_this.props.isMiddleForm) {
      _this.props.arrayData.forEach(function () {
        return _this.state.shownChildForms.push([]);
      });
    }
    return _this;
  }

  /**
   * keep update forms open
   * @param {number} index index to keep open
   * @param {number=} childIndex optional child index
   */
  _createClass(IcseFormTemplate, [{
    key: "onChildToggle",
    value: function onChildToggle(index, childIndex) {
      if (this.props.parentToggle) {
        // if the parent toggle is passed, run the callback (this function on parent form)
        // with parent index and current index
        this.props.parentToggle.callback(this.props.parentToggle.index, index);
      } else if (arguments.length !== 1) {
        // if a second param is passed
        var shownChildForms = _toConsumableArray(this.state.shownChildForms); // all forms
        // if contains index
        if (lazyZ.contains(this.state.shownChildForms[index], childIndex)) {
          // remove index from list
          shownChildForms[index].splice(index, 1);
        } else {
          // otherwise add
          shownChildForms[index].push(childIndex);
        }
        this.setState({
          shownChildForms: shownChildForms
        });
      } else {
        // if only parent index
        var shownForms = _toConsumableArray(this.state.shownArrayForms); // all forms
        if (lazyZ.contains(this.state.shownArrayForms, index)) {
          // remove if contains
          shownForms.splice(index, 1);
        } else shownForms.push(index);
        this.setState({
          shownArrayForms: shownForms
        });
      }
    }

    /**
     * on modal submit
     * @param {*} data arbitrary data
     */
  }, {
    key: "onSubmit",
    value: function onSubmit(data) {
      this.props.onSubmit(data, this.props);
      this.toggleModal();
    }

    /**
     * toggle modal on and off
     */
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      this.setState({
        showModal: !this.state.showModal
      });
    }

    /**
     * check if form should show
     * @returns {bool} if the child forms should show
     */
  }, {
    key: "shouldShow",
    value: function shouldShow(index) {
      return this.props.parentToggle ? lazyZ.contains(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
      : lazyZ.contains(this.state.shownArrayForms, index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var formattedName = lazyZ.kebabCase(this.props.name); // formatted component name
      // enable submit field here is set to variable value to allow for passing to
      // child array components without needing to reference `this` directly
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: formattedName
      }, /*#__PURE__*/React__default["default"].createElement(StatefulTabPanel, {
        name: this.props.name,
        onClick: this.toggleModal,
        addText: this.props.addText,
        hideButton: this.props.hideFormTitleButton,
        subHeading: this.props.subHeading,
        className: this.props.subHeading ? "subHeading marginBottomSmall" : "",
        tooltip: this.props.tooltip,
        about: this.props.docs ? this.props.docs() : false,
        hideAbout: this.props.hideAbout,
        form: /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(EmptyResourceTile, {
          name: this.props.name,
          showIfEmpty: this.props.arrayData
        }), this.props.arrayData.map(function (data, index) {
          var _this2$props, _this2$props2;
          // return a form with the index and props
          return /*#__PURE__*/React__default["default"].createElement(ToggleForm, _extends({}, _this2.props.toggleFormProps, {
            tabPanel: {
              name: _this2.props.name,
              hideAbout: true,
              // passed to ignore second tab panel
              hasBuiltInHeading: true // passed to ignore second tabPanel
            },

            key: _this2.props.name + "-" + index,
            innerForm: _this2.props.innerForm,
            innerFormProps: _objectSpread2(_objectSpread2({}, _this2.props.innerFormProps), {}, {
              data: _objectSpread2({}, data)
            }) // merge data into innerForm props
            ,
            arrayParentName: _this2.props.arrayParentName,
            onShowToggle: _this2.onChildToggle,
            onChildShowToggle: _this2.props.isMiddleForm ? _this2.onChildToggle // pass through to child component if middle form
            : false,
            index: index,
            show: _this2.shouldShow(index),
            shownChildren: _this2.state.shownChildForms,
            onSave: (_this2$props = _this2.props) === null || _this2$props === void 0 ? void 0 : _this2$props.onSave,
            onDelete: (_this2$props2 = _this2.props) === null || _this2$props2 === void 0 ? void 0 : _this2$props2.onDelete
          }));
        }), /*#__PURE__*/React__default["default"].createElement(FormModal, {
          name: this.props.addText,
          show: this.state.showModal,
          onRequestSubmit: this.onSubmit,
          onRequestClose: this.toggleModal,
          arrayParentName: this.props.arrayParentName
        },
        // render the form inside the modal
        RenderForm(this.props.innerForm, _objectSpread2(_objectSpread2({}, this.props.innerFormProps), {}, {
          arrayParentName: this.props.arrayParentName,
          isModal: true,
          shouldDisableSubmit: function shouldDisableSubmit() {
            // references to `this` in function are intentionally vague
            // in order to pass the correct functions and field values to the
            // child modal component
            // by passing `this` in a function that it scoped to the component
            // we allow the function to be successfully bound to the modal form
            // while still referencing the local value `enableSubmitField`
            // to use it's own values for state and props including enableModal
            // and disableModal, which are dynamically added to the component
            // at time of render
            if (this.props.disableSave(this.state, this.props) === false) {
              this.props.enableModal();
            } else {
              this.props.disableModal();
            }
          }
        })))),
        hideFormTitleButton: this.props.hideFormTitleButton
      }));
    }
  }]);
  return IcseFormTemplate;
}(React__default["default"].Component);
IcseFormTemplate.defaultProps = {
  hideFormTitleButton: false,
  subHeading: false,
  arrayParentName: null,
  isMiddleForm: false,
  hideAbout: false
};
IcseFormTemplate.propTypes = {
  name: PropTypes__default["default"].string,
  // can be null
  arrayData: PropTypes__default["default"].array.isRequired,
  parentToggle: PropTypes__default["default"].shape({
    // used to track open and closed middle forms
    callback: PropTypes__default["default"].func.isRequired,
    shownChildren: PropTypes__default["default"].arrayOf(PropTypes__default["default"].arrayOf(PropTypes__default["default"].number)).isRequired
  }),
  onSubmit: PropTypes__default["default"].func.isRequired,
  onDelete: PropTypes__default["default"].func.isRequired,
  onSave: PropTypes__default["default"].func.isRequired,
  addText: PropTypes__default["default"].string,
  hideFormTitleButton: PropTypes__default["default"].bool.isRequired,
  subHeading: PropTypes__default["default"].bool.isRequired,
  docs: PropTypes__default["default"].func,
  // only used on top level components
  tooltip: PropTypes__default["default"].object,
  // used only for cos keys
  arrayParentName: PropTypes__default["default"].string,
  isMiddleForm: PropTypes__default["default"].bool.isRequired,
  innerFormProps: PropTypes__default["default"].shape({
    disableSave: PropTypes__default["default"].func.isRequired
  }).isRequired,
  toggleFormProps: PropTypes__default["default"].shape({
    disableSave: PropTypes__default["default"].func.isRequired,
    propsMatchState: PropTypes__default["default"].func.isRequired
  }).isRequired,
  hideAbout: PropTypes__default["default"].bool
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 81d03a4 (Issue 718: F5VsiTemplateForm (#45))
=======
>>>>>>> dc96cd8 (Revert "Issue 718: F5VsiTemplateForm (#45)" (#69))
exports.AccessGroupDynamicPolicyForm = AccessGroupDynamicPolicyForm;
exports.AccessGroupForm = AccessGroupForm;
exports.AccessGroupPolicyForm = AccessGroupPolicyForm;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f849341 (access group forms :100:)
=======
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseTextInput, {
        componentName: "Vpe",
        field: "vpc",
        labelText: "VPC Name",
        className: "fieldWidthSmaller",
        value: this.state.vpc,
        onChange: function onChange() {} // nothing
        ,
        readOnly: true,
        id: "vpe-vpc-name",
        invalid: false
      }), /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        name: "service",
        formName: "vpe",
        groups: serviceGroups,
        value: services[this.state.service],
        labelText: "Service Type",
        handleInputChange: this.handleServiceDropdown,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React__default["default"].createElement(IcseFormGroup, null, /*#__PURE__*/React__default["default"].createElement(IcseSelect, {
        formName: "resource_group",
        name: "resource_group",
        labelText: "Resource Group",
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      }), /*#__PURE__*/React__default["default"].createElement(SecurityGroupMultiSelect, {
        id: "vpe-security-groups",
        initialSelectedItems: this.state.security_groups,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("security_groups", event);
        },
        securityGroups: this.props.securityGroups,
        className: "fieldWidthSmaller",
        invalid: this.state.security_groups.length === 0
      }), /*#__PURE__*/React__default["default"].createElement(SubnetMultiSelect, {
        id: "vpe-subnets",
        initialSelectedItems: this.state.subnets,
        vpc_name: this.state.vpc,
        onChange: function onChange(event) {
          return _this2.handleMultiSelect("subnets", event);
        },
        subnets: this.props.subnetList,
        className: "fieldWidthSmaller"
      })));
    }
  }]);
  return VpeForm;
}(React.Component);
VpeForm.defaultProps = {
  data: {
    vpc: "",
    service: "kms",
    resource_group: "",
    security_groups: [],
    subnets: []
  },
  resourceGroups: [],
  subnetList: [],
  securityGroups: [],
  isModal: false
};
VpeForm.propTypes = {
  data: PropTypes__default["default"].shape({
    vpc: PropTypes__default["default"].string.isRequired,
    service: PropTypes__default["default"].string.isRequired,
    resource_group: PropTypes__default["default"].string.isRequired,
    security_groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
    subnets: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired
  }),
  resourceGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  subnetList: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  securityGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string).isRequired,
  isModal: PropTypes__default["default"].bool.isRequired
};

>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
=======
>>>>>>> c412340 (Issue 718: F5 Vsi Template Form with storybook (#92))
exports.AppIdForm = AppIdForm;
>>>>>>> 06b8a89 (Migrated AppIdForm + Documentation (Issue692) (#47))
=======
exports.AppIdForm = AppIdForm;
>>>>>>> a53fa37 (Migrated AppIdForm + Documentation (Issue692) (#47))
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
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
exports.AppIdKeyForm = AppIdKeyForm;
exports.AtrackerForm = AtrackerForm;
exports.DeleteButton = DeleteButton;
>>>>>>> 2a431c4 (feat: better exports)
exports.DeleteModal = DeleteModal;
exports.Docs = Docs;
exports.DynamicRender = DynamicRender;
exports.DynamicToolTipWrapper = DynamicToolTipWrapper;
exports.EditCloseIcon = EditCloseIcon;
exports.EmptyResourceTile = EmptyResourceTile;
exports.EncryptionKeyForm = EncryptionKeyForm;
exports.EntitlementSelect = EntitlementSelect;
exports.F5VsiForm = F5VsiForm;
exports.F5VsiTemplateForm = F5VsiTemplateForm;
exports.FetchSelect = FetchSelect;
exports.FormModal = FormModal;
exports.IamAccountSettingsForm = IamAccountSettingsForm;
exports.IcseFormGroup = IcseFormGroup;
exports.IcseFormTemplate = IcseFormTemplate;
exports.IcseHeading = IcseHeading;
exports.IcseModal = IcseModal;
exports.IcseMultiSelect = IcseMultiSelect;
exports.IcseNameInput = IcseNameInput;
exports.IcseNumberSelect = IcseNumberSelect;
exports.IcseSelect = IcseSelect;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
exports.IcseSubForm = IcseSubForm;
exports.IcseTextInput = IcseTextInput;
exports.IcseToggle = IcseToggle;
exports.IcseToolTip = IcseToolTip;
exports.KeyManagementForm = KeyManagementForm;
exports.NetworkAclForm = NetworkAclForm;
exports.NetworkingRuleForm = NetworkingRuleForm;
exports.NetworkingRulesOrderCard = NetworkingRulesOrderCard;
exports.ObjectStorageBucketForm = ObjectStorageBucketForm;
exports.ObjectStorageForm = ObjectStorageInstancesForm;
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
exports.ResourceGroupForm = ResourceGroupForm;
>>>>>>> 0029142 (Migrated VpnGatewayForm to storybook (Issue #762) (#65))
exports.SaveAddButton = SaveAddButton;
exports.SaveIcon = SaveIcon;
exports.SccForm = SccForm;
exports.SecretsManagerForm = SecretsManagerForm;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
=======
exports.SecurityGroupForm = SecurityGroupForm;
>>>>>>> 1eee3c9 (Issue 709: Security Group Form (#89))
exports.SecurityGroupMultiSelect = SecurityGroupMultiSelect;
exports.SshKeyForm = SshKeyForm;
exports.SshKeyMultiSelect = SshKeyMultiSelect;
exports.StatefulTabPanel = StatefulTabPanel;
exports.StatelessToggleForm = StatelessToggleForm;
exports.SubnetForm = SubnetForm;
exports.SubnetMultiSelect = SubnetMultiSelect;
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
=======
exports.SubnetTileForm = SubnetTileForm;
>>>>>>> 68bf364 (feat: subnet tile form)
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> 7d02243 (fix merge)
=======
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
=======
exports.SubnetTierForm = SubnetTierForm;
>>>>>>> 617d5ce (Issue 711: SubnetTierForm (#85))
exports.SubnetTileForm = SubnetTileForm;
exports.TeleportClaimToRoleForm = TeleportClaimToRoleForm;
>>>>>>> 2a431c4 (feat: better exports)
exports.TitleGroup = TitleGroup;
exports.ToggleForm = ToggleForm;
exports.ToolTipWrapper = ToolTipWrapper;
exports.TransitGatewayForm = TransitGatewayForm;
exports.UnderConstruction = UnderConstruction;
exports.UnsavedChangesModal = UnsavedChangesModal;
exports.UpDownButtons = UpDownButtons;
exports.VpcForm = VpcNetworkForm;
exports.VpcListMultiSelect = VpcListMultiSelect;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
exports.VpnGatewayForm = VpnGatewayForm;
<<<<<<< HEAD
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
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
exports.VpeForm = VpeForm;
>>>>>>> 74e4b37 (Issue 713: **NEW** VPE Form  (#41))
=======
exports.VpeForm = VpeForm;
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
exports.VpeForm = VpeForm;
>>>>>>> 2a431c4 (feat: better exports)
exports.VpnGatewayForm = VpnGatewayForm;
=======
>>>>>>> a8d076e (merge)
exports.VsiForm = VsiForm;
exports.WorkerPoolForm = WorkerPoolForm;
exports.buildFormDefaultInputMethods = buildFormDefaultInputMethods;
exports.buildFormFunctions = buildFormFunctions;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 3d9c171 (fix exports and update examples/readme :smile:)
=======
>>>>>>> 2a431c4 (feat: better exports)
