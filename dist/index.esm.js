import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { WarningAlt, CloudAlerting, Add, Information } from '@carbon/icons-react';
import PropTypes from 'prop-types';
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
import { WarningAlt, CloudAlerting, Add, Information } from '@carbon/icons-react';
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)

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
var css_248z$2 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$2);

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

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
<<<<<<< HEAD
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
=======
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
const TitleGroup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName(`displayFlex alignItemsCenter widthOneHundredPercent ${toggleMarginBottom(props.hide)}`, props)
=======
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName("displayFlex alignItemsCenter widthOneHundredPercent ".concat(toggleMarginBottom(props.hide)), props)
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes.node.isRequired
};
<<<<<<< HEAD
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
=======
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName(formGroupClassName, props)
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
const IcseSubForm = props => {
=======
var IcseSubForm = function IcseSubForm(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  return /*#__PURE__*/React.createElement("div", {
    className: addClassName(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props),
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

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
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
const ToolTipWrapper = props => {
  let allProps = {
    ...props
  };
  let tooltip = BuildToolTip(props);
=======
var ToolTipWrapper = function ToolTipWrapper(props) {
  var allProps = _objectSpread2({}, props);
  var tooltip = BuildToolTip(props);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
  delete allProps.innerForm;
  delete allProps.tooltip;
  delete allProps.noLabelText;
  //check for labelText or field prop for components where it is a valid param
  if (!props.noLabelText && props.labelText === undefined && props.field === undefined) {
    throw new Error("ToolTipWrapper expects either `props.labelText` or `props.field` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
<<<<<<< HEAD
  allProps.className = addClassName("tooltip", {
    ...props
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "cds--form-item"
  }, console.log(props.field), props.noLabelText ?
=======
  allProps.className = addClassName("tooltip", _objectSpread2({}, props));
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
styleInject(css_248z);

=======
>>>>>>> bbe5b43 (feat: multiselects)
=======
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
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
const IcseModal = props => {
=======
var IcseModal = function IcseModal(props) {
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const IcseModal = props => {
>>>>>>> 33b1d10 (feat: Modal docs)
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
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
=======
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
>>>>>>> 33b1d10 (feat: Modal docs)
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
const UnsavedChangesModal = props => {
  let name = props.name;
=======
var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
const UnsavedChangesModal = props => {
  let name = props.name;
>>>>>>> 33b1d10 (feat: Modal docs)
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
