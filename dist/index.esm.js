<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal, TextInput, Toggle, Button } from '@carbon/react';
>>>>>>> 04bfb65 (added button examples)
=======
import { Popover, PopoverContent, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, FilterableMultiSelect, MultiSelect, Tile, Modal } from '@carbon/react';
>>>>>>> 8db187e (form and documentation)
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { kebabCase, prettyJSON, isNullOrEmptyString, snakeCase, titleCase, isBoolean } from 'lazy-z';
<<<<<<< HEAD
>>>>>>> fecad7c (remove nameinput validation)
import { WarningAlt, CloudAlerting, Add, Information } from '@carbon/icons-react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Tile, Toggletip, ToggletipButton, ToggletipContent, Link } from '@carbon/react';
import { titleCase } from 'lazy-z';
=======
import { Tile, Modal } from '@carbon/react';
>>>>>>> 7f45fcc (modals)
=======
import { Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal } from '@carbon/react';
import { titleCase } from 'lazy-z';
>>>>>>> 90da87c (fixed merge conflicts, fixed tooltip hyperlink)
=======
import PropTypes from 'prop-types';
import { FilterableMultiSelect, MultiSelect, Tile, Modal } from '@carbon/react';
import { prettyJSON, isNullOrEmptyString } from 'lazy-z';
import { WarningAlt, CloudAlerting, Add } from '@carbon/icons-react';
>>>>>>> bbe5b43 (feat: multiselects)
=======
import PropTypes from 'prop-types';
import { FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal } from '@carbon/react';
import { prettyJSON, isNullOrEmptyString, titleCase } from 'lazy-z';
=======
import { prettyJSON, isNullOrEmptyString } from 'lazy-z';
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
import { WarningAlt, CloudAlerting, Add, Information } from '@carbon/icons-react';
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
import { Tile, Popover, PopoverContent, Modal } from '@carbon/react';
=======
import { WarningAlt, CloudAlerting, Add, Information, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown } from '@carbon/icons-react';
>>>>>>> 04bfb65 (added button examples)

<<<<<<< HEAD
var _require = require("./form-utils"),
  toggleMarginBottom = _require.toggleMarginBottom,
  addClassName = _require.addClassName;
>>>>>>> 7ab206c (working on editing imports)
=======
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
>>>>>>> cf684ab (added css and fixed imports)

<<<<<<< HEAD
/**
 * create a composed class name
 * @param {string} className name of classes to add
 * @param {*} props arbitrary props
 * @param {string=} props.className additional classnames
 */
function addClassName(className, props) {
<<<<<<< HEAD
  let composedClassName = className;
  if (props?.className) {
=======
  var composedClassName = className;
  if (props !== null && props !== void 0 && props.className) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
var css_248z$3 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$3);
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);

var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
>>>>>>> bbe5b43 (feat: multiselects)
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)

/**
 * Icse multiselect template
 */
<<<<<<< HEAD
const IcseMultiSelect = props => {
=======
var IcseMultiSelect = function IcseMultiSelect(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
    id: props.id,
    className: addClassName("fieldWidth leftTextAlign cds--select", props),
    titleText: props.titleText,
<<<<<<< HEAD
    itemToString: item => item ? item : "",
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    },
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  useTitleInItem: PropTypes.bool.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

/**
 * ssh key multiselect
 */
<<<<<<< HEAD
const SshKeyMultiSelect = props => {
=======
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-ssh-key-multiselect",
    useTitleInItem: true,
    label: "SSH Keys",
    titleText: "SSH Keys",
    invalidText: "At least one SSH Key is required",
    invalid: props.initialSelectedItems.length === 0,
    items: props.sshKeys,
    initialSelectedItems: props.initialSelectedItems || [],
<<<<<<< HEAD
    onChange: event => {
=======
    onChange: function onChange(event) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
      props.onChange(event.selectedItems);
    },
    className: "fieldWidthSmaller cds--form-item"
  });
};
SshKeyMultiSelect.defaultProps = {
  initialSelectedItems: []
};
SshKeyMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
<<<<<<< HEAD
  initialSelectedItems: PropTypes.array,
  // null needs to be passed
=======
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
<<<<<<< HEAD

const SecurityGroupMultiSelect = props => {
=======
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error("SecurityGroupMultiselect requires a securityGroups object. Got " + prettyJSON(props.securityGroups));
  }
  return /*#__PURE__*/React.createElement(MultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: props.label,
    titleText: "Security Groups",
    className: "fieldWidthSmaller cds--form-item",
    initialSelectedItems: props.initialSelectedItems,
    vpc_name: props.vpc_name,
<<<<<<< HEAD
    invalid: false,
    invalidText: "Invalid Selection",
    onChange: event => {
=======
    invalid: props.invalid,
    invalidText: "Invalid Selection",
    onChange: function onChange(event) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name],
<<<<<<< HEAD
    itemToString: item => item ? item : ""
=======
    itemToString: function itemToString(item) {
      return item ? item : "";
    }
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  });
};
SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
<<<<<<< HEAD
  label: "Select Security Groups"
=======
  label: "Select Security Groups",
  invalid: false
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
};
SecurityGroupMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialSelectedItems: PropTypes.array.isRequired,
  vpc_name: PropTypes.string,
  // not required, null value should be valid
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
<<<<<<< HEAD
  securityGroups: PropTypes.object.isRequired
=======
  securityGroups: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
};

/**
 * vpc subnet multiselect
 */
<<<<<<< HEAD

const SubnetMultiSelect = props => {
=======
var SubnetMultiSelect = function SubnetMultiSelect(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
    invalid: props.initialSelectedItems.length === 0,
    disabled: props.disabled,
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems)
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    }
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  vpc_name: PropTypes.string,
  // not required, `null` needs to be passed here
  subnets: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * VPC List MultiSelect
 */
<<<<<<< HEAD

const VpcListMultiSelect = props => {
=======
var VpcListMultiSelect = function VpcListMultiSelect(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error("VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " + prettyJSON(props.vpcList));
  }
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    invalidText: "At least one VPC must be selected.",
    invalid: props.invalid,
    id: props.id + "-vpc-select",
    titleText: props.titleText,
<<<<<<< HEAD
    onChange: event => props.onChange(event.selectedItems),
=======
    onChange: function onChange(event) {
      return props.onChange(event.selectedItems);
    },
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Under Construction Page
 */
<<<<<<< HEAD
const UnderConstruction = () => {
=======
var UnderConstruction = function UnderConstruction() {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
};

<<<<<<< HEAD
var css_248z$1 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$1);

const EmptyResourceTile = props => {
=======
var css_248z$2 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$2);

var EmptyResourceTile = function EmptyResourceTile(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React.createElement(Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React.createElement(React.Fragment, null, "Click", /*#__PURE__*/React.createElement(Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
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
var css_248z$2 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$2);
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal } from '@carbon/react';
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal, Toggle } from '@carbon/react';
>>>>>>> e90fadd (updates)
import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { kebabCase, prettyJSON, isNullOrEmptyString, titleCase, snakeCase } from 'lazy-z';
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal, TextInput, Toggle } from '@carbon/react';
import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase, prettyJSON, isNullOrEmptyString, snakeCase, titleCase, isBoolean } from 'lazy-z';
<<<<<<< HEAD
>>>>>>> 16dd967 (icsetextinput, working on nameinput)
=======
import regexButWithWords from 'regex-but-with-words';
>>>>>>> 6979d94 (icse name input, needs docs)
import { WarningAlt, CloudAlerting, Add, Information } from '@carbon/icons-react';
>>>>>>> faf8c38 (fixed imports)

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
function toggleMarginBottom(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}
=======
var css_248z = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z);
>>>>>>> bbe5b43 (feat: multiselects)
=======
var css_248z$1 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$1);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)

=======
>>>>>>> 23b5837 (add id as required)
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
<<<<<<< HEAD
=======
>>>>>>> e90fadd (updates)
=======
>>>>>>> 23b5837 (add id as required)
=======
import { kebabCase, snakeCase, titleCase, isBoolean, prettyJSON, isNullOrEmptyString } from 'lazy-z';
=======
import lazyZ, { snakeCase, titleCase, isBoolean, kebabCase as kebabCase$1, prettyJSON, isNullOrEmptyString } from 'lazy-z';
>>>>>>> 8655315 (changes (exports, readme, example))
import { Information, WarningAlt, CloudAlerting, Add } from '@carbon/icons-react';

>>>>>>> 8db187e (form and documentation)
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

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom$1(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1
};

const {
  kebabCase
} = lazyZ;

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
var textUtils_1 = textUtils.formatInputPlaceholder;

var textUtils$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': textUtils,
  __moduleExports: textUtils,
  formatInputPlaceholder: textUtils_1
});

/**
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
});

const {
  isFunction
} = require("lazy-z");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions$1(component) {
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
function buildFormDefaultInputMethods$1(component) {
  component.eventTargetToNameAndValue = eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}

var componentUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  buildFormFunctions: buildFormFunctions$1,
  buildFormDefaultInputMethods: buildFormDefaultInputMethods$1
});
>>>>>>> 8db187e (form and documentation)
=======
};
>>>>>>> 8655315 (changes (exports, readme, example))

const {
  toggleMarginBottom,
  addClassName
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils$1;
const {
<<<<<<< HEAD
  saveChangeButtonClass
} = buttonUtils;
=======
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
} = methodFunctions;
<<<<<<< HEAD
const {
  buildFormFunctions,
  buildFormDefaultInputMethods
} = componentUtils;
>>>>>>> 8db187e (form and documentation)
=======
>>>>>>> 8655315 (changes (exports, readme, example))
var lib = {
  toggleMarginBottom,
  addClassName,
  formatInputPlaceholder,
<<<<<<< HEAD
  saveChangeButtonClass
=======
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

var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$7);

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
      return this.props.noPopover === true || this.props.hoverText === "" ? this.props.children : /*#__PURE__*/React.createElement("div", {
        className: lib_2("popover-obj", this.props),
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut
      }, /*#__PURE__*/React.createElement(Popover, {
        open: this.state.isHovering,
        autoAlign: this.props.align ? false : true,
        dropShadow: false,
        highContrast: true,
        caret: false,
        align: this.props.align
      }, this.props.children, /*#__PURE__*/React.createElement(PopoverContent, {
        className: "popover-box" + (this.props.contentClassName ? " ".concat(this.props.contentClassName) : "")
      }, this.props.hoverText)));
    }
  }]);
  return PopoverWrapper;
}(React.Component);
PopoverWrapper.defaultProps = {
  noPopover: false
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes.bool,
  hoverText: PropTypes.string.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$6 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$6);

var css_248z$5 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$5);
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

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
  return /*#__PURE__*/React.createElement(form, {
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
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(`displayFlex alignItemsCenter widthOneHundredPercent ${lib_1(props.hide)}`, props)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes.node.isRequired
};
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(formGroupClassName, props)
  }, props.children);
};
IcseFormGroup.defaultProps = {
  noMarginBottom: false
};
IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
const IcseSubForm = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props),
    id: props.id
  }, props.children);
};
IcseSubForm.defaultProps = {
  formInSubForm: false
};
IcseSubForm.propTypes = {
  id: PropTypes.string.isRequired,
  formInSubForm: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$5);

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
  }, "this link");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toggletip, {
    align: props.align
  }, /*#__PURE__*/React.createElement(ToggletipButton, null, /*#__PURE__*/React.createElement(Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React.createElement(ToggletipContent, null, /*#__PURE__*/React.createElement("p", null, props.content, props.link && /*#__PURE__*/React.createElement(React.Fragment, null, " Visit ", link, " for more information. ")))));
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top"
};
IcseToolTip.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  align: PropTypes.string.isRequired
};
const BuildToolTip = props => {
  return /*#__PURE__*/React.createElement(IcseToolTip, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired
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
  return /*#__PURE__*/React.createElement("div", {
    className: "cds--form-item"
  }, props.noLabelText ?
  /*#__PURE__*/
  // No label- this is usually a title
  React.createElement("div", {
    className: "labelRow"
  }, RenderForm(props.innerForm, allProps), tooltip) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React.cloneElement(props.children, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  noLabelText: PropTypes.bool.isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
const DynamicToolTipWrapper = props => {
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error("DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither.");
  }
  return props.tooltip ? /*#__PURE__*/React.createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes.shape({
    content: PropTypes.string,
    link: PropTypes.string
  }),
  isModal: PropTypes.bool,
  children: PropTypes.node,
  innerForm: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$4);
>>>>>>> 8db187e (form and documentation)

const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    innerForm: () => {
      return /*#__PURE__*/React.createElement(Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        id: kebabCase$1(toggleName) + "-icse-toggle-" + props.id,
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
  useOnOff: PropTypes.bool.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleFieldName: PropTypes.string,
  // if field is name other than label text snake case
  defaultToggled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  onToggle: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
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
const IcseTextInput = props => {
  let fieldName = titleCase(props.field);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(TextInput, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign", props),
    labelText: props.labelText ? props.labelText : titleCase(props.field),
    placeholder: props.placeholder || lib_3(props.componentName, fieldName),
    name: props.field,
    value: props.value || "",
    invalid: isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
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
  disabled: PropTypes.bool.isRequired,
  componentName: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  className: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  invalidCallback: PropTypes.func,
  id: PropTypes.string.isRequired,
  invalidText: PropTypes.string
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
  return /*#__PURE__*/React.createElement(IcseTextInput, _extends({}, props, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  hideHelperText: PropTypes.bool.isRequired,
  useData: PropTypes.bool.isRequired,
  helperTextCallback: PropTypes.func,
  invalidText: PropTypes.string.isRequired,
  invalidCallback: PropTypes.func
};

var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);

class AppIdKeyForm extends React.Component {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
  data: PropTypes.shape({
    key_name: PropTypes.string.isRequired
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  useTitleInItem: PropTypes.bool.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

/**
 * ssh key multiselect
 */
const SshKeyMultiSelect = props => {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
const SecurityGroupMultiSelect = props => {
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error("SecurityGroupMultiselect requires a securityGroups object. Got " + prettyJSON(props.securityGroups));
  }
  return /*#__PURE__*/React.createElement(MultiSelect, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialSelectedItems: PropTypes.array.isRequired,
  vpc_name: PropTypes.string,
  // not required, null value should be valid
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  securityGroups: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired
};

/**
 * vpc subnet multiselect
 */
const SubnetMultiSelect = props => {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  vpc_name: PropTypes.string,
  // not required, `null` needs to be passed here
  subnets: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * VPC List MultiSelect
 */
const VpcListMultiSelect = props => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error("VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " + prettyJSON(props.vpcList));
  }
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Under Construction Page
 */
const UnderConstruction = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
};

<<<<<<< HEAD
var css_248z$4 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$4);
=======
var css_248z = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z);
>>>>>>> 8db187e (form and documentation)

<<<<<<< HEAD
=======
/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

>>>>>>> 6979d94 (icse name input, needs docs)
const EmptyResourceTile = props => {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React.createElement(Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React.createElement(React.Fragment, null, "Click", /*#__PURE__*/React.createElement(Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired
};

var css_248z$3 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$3);

/**
=======
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

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom$1(hide) {
  if (hide === false) return " marginBottomSmall";else return "";
}

var formUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1
});

const {
  toggleMarginBottom,
  addClassName
} = formUtils;
var lib = {
  toggleMarginBottom,
  addClassName
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;

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

var css_248z$5 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$5);

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
      return this.props.noPopover === true || this.props.hoverText === "" ? this.props.children : /*#__PURE__*/React.createElement("div", {
        className: lib_2("popover-obj", this.props),
        onMouseEnter: this.handleMouseOver,
        onMouseLeave: this.handleMouseOut
      }, /*#__PURE__*/React.createElement(Popover, {
        open: this.state.isHovering,
        autoAlign: this.props.align ? false : true,
        dropShadow: false,
        highContrast: true,
        caret: false,
        align: this.props.align
      }, this.props.children, /*#__PURE__*/React.createElement(PopoverContent, {
        className: "popover-box" + (this.props.contentClassName ? " ".concat(this.props.contentClassName) : "")
      }, this.props.hoverText)));
    }
  }]);
  return PopoverWrapper;
}(React.Component);
PopoverWrapper.defaultProps = {
  noPopover: false
};
PopoverWrapper.propTypes = {
  noPopover: PropTypes.bool,
  hoverText: PropTypes.string.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node.isRequired
};

<<<<<<< HEAD
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  useTitleInItem: PropTypes.bool.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired
};

/**
 * ssh key multiselect
 */
const SshKeyMultiSelect = props => {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
const SecurityGroupMultiSelect = props => {
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error("SecurityGroupMultiselect requires a securityGroups object. Got " + prettyJSON(props.securityGroups));
  }
  return /*#__PURE__*/React.createElement(MultiSelect, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialSelectedItems: PropTypes.array.isRequired,
  vpc_name: PropTypes.string,
  // not required, null value should be valid
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  securityGroups: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired
};

/**
 * vpc subnet multiselect
 */
const SubnetMultiSelect = props => {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  vpc_name: PropTypes.string,
  // not required, `null` needs to be passed here
  subnets: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * VPC List MultiSelect
 */
const VpcListMultiSelect = props => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error("VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " + prettyJSON(props.vpcList));
  }
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Under Construction Page
 */
const UnderConstruction = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
};

var css_248z$2 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$2);

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {boolean} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns
 */

const EmptyResourceTile = props => {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? /*#__PURE__*/React.createElement(Tile, {
    className: "marginBottomXs tileBackground"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React.createElement(React.Fragment, null, "Click", /*#__PURE__*/React.createElement(Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list"
};
EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired
};

<<<<<<< HEAD
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
var css_248z$1 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$1);

/**
>>>>>>> 7ab206c (working on editing imports)
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
=======
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
>>>>>>> faf8c38 (fixed imports)
=======
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
>>>>>>> e90fadd (updates)
=======
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
>>>>>>> 23b5837 (add id as required)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const TitleGroup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName(`displayFlex alignItemsCenter widthOneHundredPercent ${toggleMarginBottom(props.hide)}`, props)
=======
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName("displayFlex alignItemsCenter widthOneHundredPercent ".concat(toggleMarginBottom(props.hide)), props)
<<<<<<< HEAD
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
>>>>>>> faf8c38 (fixed imports)
=======
const TitleGroup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(`displayFlex alignItemsCenter widthOneHundredPercent ${lib_1(props.hide)}`, props)
>>>>>>> e90fadd (updates)
=======
const TitleGroup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(`displayFlex alignItemsCenter widthOneHundredPercent ${lib_1(props.hide)}`, props)
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2("displayFlex alignItemsCenter widthOneHundredPercent ".concat(lib_1(props.hide)), props)
>>>>>>> 23b5837 (add id as required)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes.node.isRequired
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
=======
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> e90fadd (updates)
=======
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> 23b5837 (add id as required)
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(formGroupClassName, props)
  }, props.children);
};
IcseFormGroup.defaultProps = {
  noMarginBottom: false
};
IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseSubForm = props => {
=======
var IcseSubForm = function IcseSubForm(props) {
<<<<<<< HEAD
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
>>>>>>> faf8c38 (fixed imports)
=======
const IcseSubForm = props => {
>>>>>>> e90fadd (updates)
=======
const IcseSubForm = props => {
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
var IcseSubForm = function IcseSubForm(props) {
>>>>>>> 23b5837 (add id as required)
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props),
    id: props.id
  }, props.children);
};
IcseSubForm.defaultProps = {
  formInSubForm: false
};
IcseSubForm.propTypes = {
  id: PropTypes.string.isRequired,
  formInSubForm: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z = ".labelRow {\n  display: inline-flex;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z);
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> 71c64fb (fixed className for labelText tooltip, added to labelRow styling)
styleInject(css_248z$1);
>>>>>>> 90da87c (fixed merge conflicts, fixed tooltip hyperlink)
=======
var css_248z = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$1);
>>>>>>> e90fadd (updates)
=======
var css_248z$2 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$2);
>>>>>>> 04bfb65 (added button examples)

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
=======
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React.createElement(Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  }, "this link");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toggletip, {
    align: props.align
  }, /*#__PURE__*/React.createElement(ToggletipButton, null, /*#__PURE__*/React.createElement(Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React.createElement(ToggletipContent, null, /*#__PURE__*/React.createElement("p", null, props.content, props.link && /*#__PURE__*/React.createElement(React.Fragment, null, " Visit ", link, " for more information. ")))));
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top"
};
IcseToolTip.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  align: PropTypes.string.isRequired
};
<<<<<<< HEAD
<<<<<<< HEAD
const BuildToolTip = props => {
  return /*#__PURE__*/React.createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: props.tooltip?.link,
=======
var BuildToolTip = function BuildToolTip(props) {
  var _props$tooltip;
  return /*#__PURE__*/React.createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: (_props$tooltip = props.tooltip) === null || _props$tooltip === void 0 ? void 0 : _props$tooltip.link,
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
    align: props.isModal ? props.alignModal : props.align
=======
const BuildToolTip = props => {
  return /*#__PURE__*/React.createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: props.tooltip?.link,
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
const ToolTipWrapper = props => {
  let allProps = {
    ...props
  };
  let tooltip = BuildToolTip(props);
<<<<<<< HEAD
=======
var ToolTipWrapper = function ToolTipWrapper(props) {
  var allProps = _objectSpread2({}, props);
  var tooltip = BuildToolTip(props);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined) {
    throw new Error("ToolTipWrapper expects `props.labelText` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
<<<<<<< HEAD
<<<<<<< HEAD
  allProps.className = addClassName("tooltip", {
    ...props
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cds--form-item"
  }, console.log(props.field), props.noLabelText ?
=======
  allProps.className = addClassName("tooltip", _objectSpread2({}, props));
=======
  allProps.className = lib_2("tooltip", {
    ...props
  });
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  return /*#__PURE__*/React.createElement("div", {
    className: "cds--form-item"
  }, props.noLabelText ?
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  /*#__PURE__*/
  // No label- this is usually a title
  React.createElement("div", {
    className: "labelRow"
  }, RenderForm(props.innerForm, allProps), tooltip) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.labelText || titleCase(props.field)), tooltip), props.children ? /*#__PURE__*/React.cloneElement(props.children, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  field: PropTypes.string,
  noLabelText: PropTypes.bool.isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.object
};
<<<<<<< HEAD
const DynamicToolTipWrapper = props => {
=======
var DynamicToolTipWrapper = function DynamicToolTipWrapper(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error("DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither.");
  }
  return props.tooltip ? /*#__PURE__*/React.createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.defaultProps = {
  tooltip: {
    content: "",
    link: false
  }
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.object
};

<<<<<<< HEAD
var css_248z = ".leftTextAlign {\n    text-align: left;\n}";
=======
var css_248z = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> faf8c38 (fixed imports)
styleInject(css_248z);

=======
>>>>>>> bbe5b43 (feat: multiselects)
=======
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React.createElement(Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
=======
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
>>>>>>> e90fadd (updates)
  }, "this link");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toggletip, {
    align: props.align
  }, /*#__PURE__*/React.createElement(ToggletipButton, null, /*#__PURE__*/React.createElement(Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React.createElement(ToggletipContent, null, /*#__PURE__*/React.createElement("p", null, props.content, props.link && /*#__PURE__*/React.createElement(React.Fragment, null, " Visit ", link, " for more information. ")))));
};
IcseToolTip.defaultProps = {
  content: "",
  align: "top"
};
IcseToolTip.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  align: PropTypes.string.isRequired
};
const BuildToolTip = props => {
  return /*#__PURE__*/React.createElement(IcseToolTip, {
    content: props.tooltip.content,
    link: props.tooltip?.link,
    align: props.isModal ? props.alignModal : props.align
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired
};
const ToolTipWrapper = props => {
  let allProps = {
    ...props
  };
  let tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText or field prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined && props.field === undefined) {
    throw new Error("ToolTipWrapper expects either `props.labelText` or `props.field` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
  allProps.className = lib_2("tooltip", {
    ...props
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cds--form-item"
  }, props.noLabelText ?
  /*#__PURE__*/
  // No label- this is usually a title
  React.createElement("div", {
    className: "labelRow"
  }, RenderForm(props.innerForm, allProps), tooltip) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React.cloneElement(props.children, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  noLabelText: PropTypes.bool.isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};
const DynamicToolTipWrapper = props => {
  //make sure that either children or innerForm are passed as a prop
  if (props.children === undefined && props.innerForm === undefined) {
    throw new Error("DynamicToolTipWrapper expects either `props.children` or `props.innerForm` when rendering ToolTipWrapper, got neither.");
  }
  return props.tooltip ? /*#__PURE__*/React.createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm(props.innerForm, {});
};
DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes.shape({
    content: PropTypes.string,
    link: PropTypes.string
  }),
  isModal: PropTypes.bool,
  children: PropTypes.node,
  innerForm: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
};

=======
>>>>>>> 8db187e (form and documentation)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseModal = props => {
=======
var IcseModal = function IcseModal(props) {
<<<<<<< HEAD
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const IcseModal = props => {
>>>>>>> 33b1d10 (feat: Modal docs)
=======
>>>>>>> faf8c38 (fixed imports)
=======
var IcseModal = function IcseModal(props) {
>>>>>>> 61e1d69 (icse multiselect)
=======
const IcseModal = props => {
>>>>>>> e90fadd (updates)
=======
const IcseModal = props => {
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  /*#__PURE__*/React.createElement("strong", null, props.name);
  return /*#__PURE__*/React.createElement(Modal, {
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
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  primaryButtonDisabled: PropTypes.bool,
  danger: PropTypes.bool,
  alert: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

/**
 * Delete modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
=======
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React.createElement("strong", null, props.name);
<<<<<<< HEAD
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> 33b1d10 (feat: Modal docs)
=======
>>>>>>> faf8c38 (fixed imports)
=======
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> 61e1d69 (icse multiselect)
=======
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> e90fadd (updates)
=======
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  return /*#__PURE__*/React.createElement(IcseModal, {
    id: props.name + "-delete",
    name: props.name,
    heading: props.name,
    open: props.modalOpen,
    onRequestClose: props.onModalClose,
    onRequestSubmit: props.onModalSubmit,
    primaryButtonText: "Delete Resource",
    danger: true
  }, /*#__PURE__*/React.createElement("span", null, "You are about to delete ", name, ". This cannot be undone."));
};
DeleteModal.defaultProps = {
  modalOpen: false
};
DeleteModal.propTypes = {
  name: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onModalSubmit: PropTypes.func.isRequired
};

/**
 * unsaved changes modal modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {boolean} props.modalOpen true if open
 * @param {Function} props.onModalClose function for on close
 * @param {Function} props.onModalSubmit function for on submit
 */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const UnsavedChangesModal = props => {
  let name = props.name;
=======
var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
<<<<<<< HEAD
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const UnsavedChangesModal = props => {
  let name = props.name;
>>>>>>> 33b1d10 (feat: Modal docs)
=======
>>>>>>> faf8c38 (fixed imports)
=======
var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
>>>>>>> 61e1d69 (icse multiselect)
=======
const UnsavedChangesModal = props => {
  let name = props.name;
>>>>>>> e90fadd (updates)
=======
const UnsavedChangesModal = props => {
  let name = props.name;
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
  return /*#__PURE__*/React.createElement("div", {
    className: "unsaved-changes-modal-area"
  }, /*#__PURE__*/React.createElement(IcseModal, {
    id: props.name + "-unsaved-changes",
    open: props.modalOpen,
    name: props.name,
    onRequestClose: props.onModalClose,
    onRequestSubmit: props.onModalSubmit,
    heading: props.useDefaultUnsavedMessage ? "Missing Required Values" : "Unsaved Changes",
    danger: true,
    primaryButtonText: "Dismiss Changes"
  }, props.useDefaultUnsavedMessage ? /*#__PURE__*/React.createElement("span", null, "Resource ", name, " is missing required values.", " ", /*#__PURE__*/React.createElement("strong", null, "Without these values, your configuration is invalid."), " ", "Are you sure you want to dismiss these changes?") : /*#__PURE__*/React.createElement("span", null, "Resource ", name, " has unsaved changes. Are you sure you want to dismiss these changes?")));
};
UnsavedChangesModal.defaultProps = {
  modalOpen: false,
  useDefaultUnsavedMessage: true
};
UnsavedChangesModal.propTypes = {
  name: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onModalSubmit: PropTypes.func.isRequired,
  useDefaultUnsavedMessage: PropTypes.bool
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
export { DeleteModal, DynamicRender, EmptyResourceTile, IcseFormGroup, IcseModal, IcseSubForm, RenderForm, TitleGroup, UnderConstruction, UnsavedChangesModal, addClassName, toggleMarginBottom };
>>>>>>> 7f45fcc (modals)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseSubForm, IcseToolTip, RenderForm, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, addClassName, toggleMarginBottom };
>>>>>>> 90da87c (fixed merge conflicts, fixed tooltip hyperlink)
=======
export { DeleteModal, DynamicRender, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect, addClassName, toggleMarginBottom };
>>>>>>> bbe5b43 (feat: multiselects)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, IcseToolTip, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect, addClassName, toggleMarginBottom };
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
export { DeleteModal, DynamicRender, EmptyResourceTile, IcseFormGroup, IcseModal, IcseSubForm, PopoverWrapper, RenderForm, TitleGroup, UnderConstruction, UnsavedChangesModal, addClassName, toggleMarginBottom };
>>>>>>> 7ab206c (working on editing imports)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect, addClassName, toggleMarginBottom };
>>>>>>> faf8c38 (fixed imports)
=======
var css_248z = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z);
=======
var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$1);
>>>>>>> 04bfb65 (added button examples)

const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    innerForm: () => {
      return /*#__PURE__*/React.createElement(Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        id: kebabCase(toggleName) + "-icse-toggle-" + props.id,
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
  useOnOff: PropTypes.bool.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleFieldName: PropTypes.string,
  // if field is name other than label text snake case
  defaultToggled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  onToggle: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
};

<<<<<<< HEAD
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> e90fadd (updates)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
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
  let fieldName = titleCase(props.field);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(TextInput, {
    id: props.id,
    className: lib_2("fieldWidth leftTextAlign", props),
    labelText: props.labelText ? props.labelText : titleCase(props.field),
    placeholder: props.placeholder || lib_3(props.componentName, fieldName),
    name: props.field,
    value: props.value || "",
    invalid: isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
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
  disabled: PropTypes.bool.isRequired,
  componentName: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  className: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  invalidCallback: PropTypes.func,
  id: PropTypes.string.isRequired,
  invalidText: PropTypes.string
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
  return /*#__PURE__*/React.createElement(IcseTextInput, _extends({}, props, {
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  hideHelperText: PropTypes.bool.isRequired,
  useData: PropTypes.bool.isRequired,
  helperTextCallback: PropTypes.func,
  invalidText: PropTypes.string.isRequired,
  invalidCallback: PropTypes.func
};

<<<<<<< HEAD
<<<<<<< HEAD
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> 16dd967 (icsetextinput, working on nameinput)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> 6979d94 (icse name input, needs docs)
=======
var css_248z = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  top: 20px;\n  z-index: 9001; /* navbar is 9000 */\n  font-size: 80%;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n";
styleInject(css_248z);

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
const SaveIcon = props => {
  return /*#__PURE__*/React.createElement(Save, {
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
const SaveAddButton = props => {
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : "")
  }, /*#__PURE__*/React.createElement(Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(SaveIcon, {
    saveIsDisabled: props.disabled
  })));
};
SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
  disabled: false
};
SaveAddButton.propTypes = {
  hoverText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @param {string=} props.hoverText text for popover hover
 * @param {string} props.type can be `edit` or `add`, defaults to add
 * @param {boolean} props.disabled
 * @param {boolean} props.open toggle is open, defaults to false
 * @returns edit close icon
 */
const EditCloseIcon = props => {
  let hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Edit Resource";
  let icon = props.open ? /*#__PURE__*/React.createElement(CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(Edit, null);
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: hoverText
  }, /*#__PURE__*/React.createElement("i", {
    onClick: props.onClick,
    className: "chevron"
  }, icon));
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  open: PropTypes.bool
};
EditCloseIcon.defaultProps = {
  type: "edit",
  open: false
};

/**
 * Delete button
 * @param {*} props
 * @param {boolean} props.disabled
 * @param {boolean} props.modalOpen toggle is modal open, defaults to false
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
const DeleteButton = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.disabled ? props.disableDeleteMessage : "Delete Resource",
    className: props.disabled ? "inlineBlock cursorNotAllowed" : ""
  }, /*#__PURE__*/React.createElement(Button, {
    className: "cds--btn--danger--tertiary forceTertiaryButtonStyles" + (props.disabled ? " pointerEventsNone" : ""),
    kind: "ghost",
    size: "sm",
    onClick: props.onClick,
    disabled: props.disabled === true
  }, /*#__PURE__*/React.createElement(TrashCan, {
    className: props.disabled ? "" : "redFill"
  }))));
};
DeleteButton.defaultProps = {
  disabled: false,
  modalOpen: false
};
DeleteButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

/**
 * Up/Down button
 * @param {*} props
 * @param {string} props.name
 * @param {boolean} props.disableUp
 * @param {boolean} props.disableDown
 * @param {Function} props.handleCardUp
 * @param {Function} props.handleCardDown
 *
 */
const UpDownButtons = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    key: "rule-up-" + props.name,
    disabled: props.disableUp,
    kind: "ghost",
    size: "sm",
    id: props.name + "-up",
    onClick: props.handleCardUp,
    className: "focus forceTertiaryButtonStyles marginRightSmall"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    key: "up-" + props.name
  })), /*#__PURE__*/React.createElement(Button, {
    kind: "ghost",
    disabled: props.disableDown,
    key: "rule-down-" + props.name,
    size: "sm",
    id: props.name + "-down",
    onClick: props.handleCardDown,
    className: "focus forceTertiaryButtonStyles"
  }, /*#__PURE__*/React.createElement(ArrowDown, {
    key: "down-" + props.name
  })));
};
UpDownButtons.defaultProps = {
  disableUp: false,
  disableDown: false
};
UpDownButtons.propTypes = {
  disableUp: PropTypes.bool.isRequired,
  disableDown: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleCardUp: PropTypes.func.isRequired,
  handleCardDown: PropTypes.func.isRequired
};

export { DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect };
>>>>>>> 04bfb65 (added button examples)
=======
export { AppIdKeyForm, DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> 8db187e (form and documentation)
=======
export { AppIdKeyForm, DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 8655315 (changes (exports, readme, example))
