import '@carbon/styles/css/styles.css';
import { Popover, PopoverContent, Toggletip, ToggletipButton, ToggletipContent, Link, Button, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody, Select, SelectItem, Tile, NumberInput, Modal, TextInput, Toggle, Tabs, TabList, Tab, TabPanels, TabPanel, FilterableMultiSelect, PasswordInput, TextArea, Dropdown, Tag } from '@carbon/react';
import lazyZ, { kebabCase as kebabCase$2, isEmpty, isNullOrEmptyString as isNullOrEmptyString$3, buildNumberDropdownList, titleCase as titleCase$1, contains as contains$2, snakeCase, distinct, getObjectFromArray, splat as splat$1, isWholeNumber as isWholeNumber$1, isInRange as isInRange$1, isBoolean, isFunction as isFunction$1, transpose, prettyJSON, allFieldsNull, containsKeys, capitalize as capitalize$2, isIpv4CidrOrAddress as isIpv4CidrOrAddress$1, deepEqual, parseIntFromZone, eachKey } from 'lazy-z';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Information, Save, Add, ChevronDown, ChevronRight, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt, Password } from '@carbon/icons-react';
import regexButWithWords from 'regex-but-with-words';
import { contains as contains$3 } from 'regex-but-with-words/lib/utils';

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

var css_248z$1 = "/* vars and themes */\n:root {\n  --background: #ffffff;\n  --subForm: #f4f4f4;\n  --formInSubForm: #fffdfd;\n  --cds-text-primary: #161616;\n  --cds-text-secondary: #525252;\n  --cds-field: #f4f4f4;\n  --cds-border-strong: #8d8d8d;\n  --blue: #0f62fe;\n  --red: #da1e28;\n  --white: #ffffff;\n}\n\n.dark {\n  --background: #161616;\n  --subForm: #262626;\n  --formInSubForm: #414141;\n  --cds-text-primary: #f4f4f4;\n  --cds-text-secondary: #c6c6c6;\n  --cds-field: #363636;\n  --cds-border-strong: #8897a2;\n  --cds-layer: #262626;\n  --cds-layer-hover: #363636;\n  --cds-field-02: #363636;\n  --cds-icon-secondary: #c6c6c6;\n  --cds-icon-primary: #c6c6c6;\n  --placeholder: #565656;\n  --cds-field-hover: #464646;\n  --cds-layer-selected: #525252;\n  --cds-background-inverse: #f4f4f4;\n  --cds-text-inverse: #262626;\n}\n\n.subForm {\n  /* white background for subform input fields */\n  --cds-field: #ffffff;\n}\n\n.formInSubForm {\n  /* gray for formInSubForm input fields */\n  --cds-field: #f4f4f4;\n}\n\ninput:read-only {\n  /* read only fields should only have text */\n  --cds-border-strong: transparent;\n}\n\n.dark {\n  background-color: var(--background);\n}\n\n.dark p {\n  color: #f4f4f4;\n}\n\n.dark i.chevron > svg {\n  fill: #f4f4f4;\n}\n\n.dark h4 {\n  color: #f4f4f4;\n}\n\n.dark .underConstruction > svg {\n  fill: #ffffff;\n}\n/* styling for tooltip content in dark mode */\n.dark .cds--toggletip-content > p {\n  color: #363636;\n}\n\n.dark .subForm {\n  /* alternate background for dark subforms */\n  --cds-field: #414141;\n}\n\n.dark .formInSubForm {\n  /* alternate background for dark formInSubForm */\n  --cds-field: #363636;\n}\n\n.dark ::placeholder {\n  color: var(--placeholder);\n}\n\n/* general alignment classes */\n\n.displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n\n.fieldWidthSmallest {\n  width: 8rem;\n}\n\n.fieldWidthBigger {\n  width: 40rem;\n}\n\n.textInputWide {\n  width: 30rem;\n}\n\n.textInputMedium {\n  width: 20rem;\n}\n\n/* backhground classes */\n.formInSubForm {\n  margin-top: 0rem;\n  background: var(--formInSubForm);\n  padding: 1rem;\n}\n\n.subForm {\n  background: var(--subForm);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n/* Tooltips */\n.labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n\n/* subnet tile form */\n\n.tileFormMargin {\n  margin-bottom: -0.5rem;\n  margin-top: 0.5rem;\n}\n\n.tileFormMargin.formInSubForm {\n  padding: 0px;\n}\n\n.marginRightSubnetTile {\n  margin-right: 10px;\n}\n\n/* StatefulTabPanel */\n\n.cds--tab-content.doc {\n  padding: 0.5rem 0;\n}\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n/* popover wrappers */\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  z-index: 9001;\n}\n\n/* buttons */\n\ni.chevron > svg {\n  display: block; /* remove extra padding on bottom of i which misaligns icon */\n  margin-right: 1rem;\n  margin-top: 0.15rem;\n}\n\n.chevron {\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: var(--blue) !important;\n  fill: var(--white) !important;\n  border-color: var(--blue) !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: var(--red) !important;\n}\n\n.alignButtons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important;\n}\n\n/* docs */\n.about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n\n/* empty resource tile */\n.iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: var(--subForm);\n}\n\n/* under construction */\n\n.underConstruction {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flexDirectionColumn {\n  flex-direction: column;\n}\n\n/* f5 vsi */\n.wide {\n  width: 20rem !important;\n}\n\n.tight {\n  width: min-content; /* force invalid text to split line */\n}\n\n.passwordGenerateButton {\n  margin-top: 1.25rem;\n  margin-left: calc(-4rem - 3vw);\n}\n\n.passwordGenerateButton svg {\n  fill: var(--cds-icon-secondary, #525252) !important;\n}\n\n.passwordGenerateButton.invalid {\n  margin-left: calc(-5.75rem - 3vw);\n}\n";
styleInject(css_248z$1);

const {
  contains: contains$1,
  capitalize: capitalize$1
} = lazyZ;

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

/**
 * Function that handles cluster input change
 * @param {string} name field name
 * @param {string} value field value
 * @returns {object} updated cluster object
 */
function handleClusterInputChange$1(name, value, stateData) {
  const kubeTypes = {
    OpenShift: "openshift",
    "IBM Kubernetes Service": "iks"
  };
  let cluster = stateData;
  if (name === "kube_type") {
    cluster[name] = kubeTypes[value];
    cluster.cos_name = "";
    cluster.kube_version = ""; // reset kube version on change
  } else if (name === "workers_per_subnet") {
    cluster[name] = Number(value);
  } else if (name === "vpc") {
    cluster[name] = value;
    cluster.subnets = [];
  } else {
    cluster[name] = value === "null" ? null : value;
  }
  return cluster;
}
function subnetTierName$1(tierName) {
  if (contains$1(["vsi", "vpe", "vpn", "vpn-1", "vpn-2"], tierName)) {
    return tierName.toUpperCase() + " Subnet Tier";
  } else if (tierName === "") {
    return "New Subnet Tier";
  } else {
    return capitalize$1(tierName) + " Subnet Tier";
  }
}

/**
 * Invalid crns (see https://cloud.ibm.com/docs/account?topic=account-crn)
 * @param {Array} crns
 * @returns {object} object containing invalid boolean and invalidText string
 */
function invalidCRNs$1(crns) {
  if (crns === undefined || crns.length === 0) return {
    invalid: false,
    invalidText: ""
  };
  const crnRegex = /^(crn:v1:bluemix:(public|dedicated|local):)[A-z-:/0-9]+$/i;
  for (let crn of crns) {
    let {
      invalid,
      invalidText
    } = invalidRegex$1("crn", crn, crnRegex);
    if (invalid) {
      return {
        invalid,
        invalidText
      };
    }
  }
  return {
    invalid: false,
    invalidText: ""
  };
}
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1,
  handleClusterInputChange: handleClusterInputChange$1,
  subnetTierName: subnetTierName$1,
  invalidCRNs: invalidCRNs$1
};

const {
  kebabCase: kebabCase$1
} = lazyZ;

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
  invalidRegex,
  handleClusterInputChange,
  subnetTierName,
  invalidCRNs
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
  invalidRegex,
  handleClusterInputChange,
  subnetTierName,
  invalidCRNs
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.prependEmptyStringWhenNull;
var lib_4 = lib.checkNullorEmptyString;
var lib_5 = lib.formatInputPlaceholder;
var lib_6 = lib.saveChangeButtonClass;
var lib_10 = lib.invalidRegex;
var lib_11 = lib.handleClusterInputChange;
var lib_12 = lib.subnetTierName;
var lib_13 = lib.invalidCRNs;

/**
 * Wrapper for carbon popover component to handle individual component mouseover
 */
class PopoverWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  /**
   * handle mouse over
   */
  handleMouseOver() {
    this.setState({
      isHovering: true
    });
  }

  /**
   * handle mouse out
   */
  handleMouseOut() {
    this.setState({
      isHovering: false
    });
  }
  render() {
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
      className: "popover-box" + (this.props.contentClassName ? ` ${this.props.contentClassName}` : "")
    }, this.props.hoverText)));
  }
}
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

/**
 * Render a form (duplicate from utils to prevent circular dependencies)
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm$1(form, formProps) {
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
}

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
  }, RenderForm$1(props.innerForm, allProps), tooltip) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.labelText), tooltip), props.children ? /*#__PURE__*/React.cloneElement(props.children, {
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
  return props.tooltip ? /*#__PURE__*/React.createElement(ToolTipWrapper, props) : props.children ? props.children : RenderForm$1(props.innerForm, {});
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
const IcseHeading = props => {
  let titleFormDivClass = props.toggleFormTitle ? "" : props.name === "" ? "" : " icseFormTitleMinHeight";
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2("displayFlex spaceBetween widthOneHundredPercent alignItemsCenter", props) + titleFormDivClass
  }, /*#__PURE__*/React.createElement(DynamicToolTipWrapper, {
    tooltip: props.tooltip,
    noLabelText: true,
    id: props.name,
    innerForm: () => {
      return props.type === "subHeading" ? /*#__PURE__*/React.createElement("h5", null, props.name) : props.type === "p" ? /*#__PURE__*/React.createElement("p", null, props.name) : props.type === "section" ? /*#__PURE__*/React.createElement("h6", null, props.name) : /*#__PURE__*/React.createElement("h4", null, props.name);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "displayFlex"
  }, props.buttons));
};
IcseHeading.defaultProps = {
  type: "heading"
};
IcseHeading.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    align: PropTypes.string,
    alignModal: PropTypes.string
  }),
  buttons: PropTypes.node,
  className: PropTypes.string,
  toggleFormTitle: PropTypes.bool
};

/**
 * All of the toggle form functionality without injecting anything on render
 */
const StatelessToggleForm = props => {
  return props.hideTitle ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleGroup, {
    hide: props.hide,
    props: props,
    className: props.className
  }, props.hideIcon !== true && /*#__PURE__*/React.createElement(EditCloseIcon, {
    name: kebabCase$2(props.name),
    onClick: props.onIconClick,
    type: props.iconType,
    open: props.hide === false
  }), /*#__PURE__*/React.createElement(IcseHeading, {
    type: props.toggleFormTitle ? "p" : props.subHeading ? "subHeading" : "heading",
    name: props.name,
    buttons: /*#__PURE__*/React.createElement(DynamicRender, {
      hide: props.hide === true && props.alwaysShowButtons !== true,
      show: props.buttons || ""
    })
  })), /*#__PURE__*/React.createElement(DynamicRender, {
    hide: props.hide,
    show: props.children
  }));
};
StatelessToggleForm.defaultProps = {
  hide: true,
  iconType: "edit",
  name: "Stateless Toggle Form",
  hideTitle: false,
  alwaysShowButtons: false,
  hideTitle: false,
  toggleFormTitle: false
};
StatelessToggleForm.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool.isRequired,
  iconType: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
  subHeading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  buttons: PropTypes.node,
  toggleFormTitle: PropTypes.bool.isRequired,
  alwaysShowButtons: PropTypes.bool.isRequired,
  hideTitle: PropTypes.bool.isRequired
};

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
 * @returns Save add button
 */
const SaveAddButton = props => {
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : ""),
    align: props.hoverTextAlign
  }, /*#__PURE__*/React.createElement(Button, {
    "aria-label": props.name + "-" + props.type,
    kind: props.type === "add" || props.type === "custom" ? "tertiary" : "primary",
    onClick: props.onClick,
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
    disabled: props.disabled || false,
    size: "sm"
  }, props.type === "custom" ? RenderForm(props.customIcon) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(SaveIcon, {
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
  hoverText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
  hoverTextAlign: PropTypes.string.isRequired,
  customIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @returns edit close icon
 */
const EditCloseIcon = props => {
  let hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Open";
  let icon = props.open ? /*#__PURE__*/React.createElement(ChevronDown, null) : props.type === "add" ?
  /*#__PURE__*/
  // keep add button for optional components
  React.createElement(Add, null) : /*#__PURE__*/React.createElement(ChevronRight, null);
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: hoverText
  }, /*#__PURE__*/React.createElement("i", {
    role: "button",
    "aria-label": props.name + "-open-close",
    onClick: props.onClick,
    className: "chevron"
  }, icon));
};
EditCloseIcon.propTypes = {
  hoverText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired
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
const DeleteButton = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.disabled && props.disableDeleteMessage ? props.disableDeleteMessage : "Delete Resource",
    align: props.hoverTextAlign,
    className: props.disabled ? "inlineBlock cursorNotAllowed" : ""
  }, /*#__PURE__*/React.createElement(Button, {
    "aria-label": props.name + "-delete",
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
  hoverTextAlign: "bottom"
};
DeleteButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  hoverTextAlign: PropTypes.string.isRequired,
  disableDeleteMessage: PropTypes.string
};

/**
 * Up/Down button
 * @param {*} props
 */
const UpDownButtons = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    "aria-label": "rule-up-" + props.name,
    key: "rule-up-" + props.name,
    disabled: props.disableUp,
    kind: "ghost",
    size: "sm",
    id: props.name + "-up",
    onClick: props.handleUp,
    className: "focus forceTertiaryButtonStyles marginRightSmall"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    key: "up-" + props.name
  })), /*#__PURE__*/React.createElement(Button, {
    "aria-label": "rule-down-" + props.name,
    kind: "ghost",
    disabled: props.disableDown,
    key: "rule-down-" + props.name,
    size: "sm",
    id: props.name + "-down",
    onClick: props.handleDown,
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
  handleUp: PropTypes.func.isRequired,
  handleDown: PropTypes.func.isRequired
};

const {
  isFunction,
  splat
} = require("lazy-z");
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
} = require("../src/lib/method-functions");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let disableSave = isFunction(component.props.shouldDisableSave);
  let usesSubnetList = Array.isArray(component.props.subnetList);
  let usesSecurityGroups = Array.isArray(component.props.securityGroups);
  if (component.props.shouldDisableSave) component.shouldDisableSave = component.props.shouldDisableSave.bind(component);
  if (disableSubmit) component.shouldDisableSubmit = component.props.shouldDisableSubmit.bind(component);
  if (usesSubnetList) {
    component.getSubnetList = function () {
      return splat(component.props.subnetList.filter(subnet => {
        if (subnet.vpc === component.state.vpc) return subnet;
      }), "name");
    }.bind(component);
  }
  if (usesSecurityGroups) {
    component.getSecurityGroupList = function () {
      return splat(component.props.securityGroups.filter(sg => {
        if (sg.vpc === component.state.vpc) return sg;
      }), "name");
    };
  }

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

const DocTextField = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: props.text === "_default_includes" ? "marginBottomSmall" : props.className
  }, props.text === "_default_includes" ? "The default configuration includes:" : props.text);
};
DocTextField.defaultProps = {
  className: "marginBottom"
};
DocTextField.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
const StructuredList = props => {
  return /*#__PURE__*/React.createElement(StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React.createElement(StructuredListHead, null, /*#__PURE__*/React.createElement(StructuredListRow, null, props.headers.map((cell, index) => /*#__PURE__*/React.createElement(StructuredListCell, {
    head: true,
    key: index
  }, cell)))), /*#__PURE__*/React.createElement(StructuredListBody, null, props.list.map((row, rowIndex) => /*#__PURE__*/React.createElement(StructuredListRow, {
    key: rowIndex
  }, row.map((cell, colIndex) => /*#__PURE__*/React.createElement(StructuredListCell, {
    key: colIndex
  }, cell))))));
};
StructuredList.propTypes = {
  headers: PropTypes.array,
  list: PropTypes.array.isRequired
};
const DocTable = props => {
  let headers = [];
  let list = [...props.list]; // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = [...props.list[0]]; // copy header row
    headers.shift(); // remove _header

    list.shift(); // remove heaer row from list
  }

  return /*#__PURE__*/React.createElement(StructuredList, {
    list: list,
    headers: headers
  });
};
DocTable.propTypes = {
  list: PropTypes.array.isRequired
};
const RelatedLinks = props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map((link, index) => /*#__PURE__*/React.createElement("div", {
    key: "related-link-" + index
  }, /*#__PURE__*/React.createElement("a", {
    href: link[0],
    target: "_blank",
    rel: "noreferrer",
    className: "smallerText"
  }, link.length === 1 ? "Docs" : link[1]))));
};
RelatedLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired
};
const Docs = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map((field, index) => field.text ?
  /*#__PURE__*/
  // text field
  React.createElement(DocTextField, _extends({
    key: index
  }, field)) : field.subHeading ?
  /*#__PURE__*/
  // subheading
  React.createElement("h6", {
    className: "marginBottomSmall",
    key: index
  }, field.subHeading) :
  /*#__PURE__*/
  // table
  React.createElement(DocTable, {
    key: index,
    list: [...field.table]
  })), props.relatedLinks && /*#__PURE__*/React.createElement(RelatedLinks, {
    links: props.relatedLinks
  }));
};
Docs.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    className: PropTypes.string,
    table: PropTypes.array,
    subHeading: PropTypes.string
  })).isRequired,
  relatedLinks: PropTypes.array
};

const IcseSelect = props => {
  let invalid =
  // automatically set to invalid if value is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString$3(props.value) ? true : props.invalid;
  let groups = props.groups.length === 0 ? [] // if no groups, empty array
  : lib_3(
  // otherwise try and prepend empty string if null or empty string is allowed
  props.disableInvalid ? "" : props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    id: kebabCase$2(props.name) + "-dropdown-tooltip",
    innerForm: () => {
      return /*#__PURE__*/React.createElement(PopoverWrapper, {
        hoverText: props.value || ""
        // inherit classnames from tooltip
        ,
        className: props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
      }, /*#__PURE__*/React.createElement(Select, {
        id: kebabCase$2(props.formName + " " + props.name),
        name: props.name,
        labelText: props.tooltip ? null : props.labelText,
        value: props.value || undefined,
        className: lib_2("leftTextAlign", props),
        disabled: props.disabled,
        invalid: invalid,
        invalidText: props.invalidText,
        readOnly: props.readOnly,
        onChange: props.handleInputChange
      }, groups.map(value => /*#__PURE__*/React.createElement(SelectItem, {
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
  debug: false,
  className: "fieldWidth"
};
IcseSelect.propTypes = {
  value: PropTypes.any,
  // must accept null
  formName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  disableInvalid: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired,
  debug: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
    align: PropTypes.string
  })
};
class FetchSelect extends React.Component {
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
    if (isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(res => res.json()).then(data => {
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
    let groups = this.dataToGroups();
    if (this.props.value === "") {
      groups = [""].concat(groups);
    }
    return /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: this.props.labelText,
      handleInputChange: this.props.handleInputChange,
      name: this.props.name,
      className: this.props.className,
      formName: this.props.formName,
      groups: groups,
      value: this.props.value || "null",
      invalid: this.props.value === ""
    });
  }
}
FetchSelect.propTypes = {
  labelText: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  filterArr: PropTypes.array,
  className: PropTypes.string,
  // can be null or undefined
  value: PropTypes.string,
  // can be null or undefined
  groups: PropTypes.array,
  apiEndpoint: PropTypes.string.isRequired,
  onReturnFunction: PropTypes.func,
  filter: PropTypes.func,
  name: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired
};
const IcseNumberSelect = props => {
  return /*#__PURE__*/React.createElement(IcseSelect, {
    formName: props.formName,
    groups: buildNumberDropdownList(props.max, props.min),
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
  formName: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number,
  // can be null
  name: PropTypes.string,
  className: PropTypes.string,
  invalidText: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
    align: PropTypes.string
  }),
  labelText: PropTypes.string.isRequired,
  isModal: PropTypes.bool.isRequired
};
const EntitlementSelect = props => {
  return /*#__PURE__*/React.createElement(IcseSelect, {
    name: props.name,
    labelText: "Entitlement",
    groups: ["null", "cloud_pak"],
    value: props.value || "null",
    handleInputChange: props.handleInputChange,
    className: props.className,
    formName: props.formName
  });
};
EntitlementSelect.propTypes = {
  value: PropTypes.string,
  // can be null
  handleInputChange: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};
EntitlementSelect.defaultProps = {
  className: "fieldWidthSmaller"
};
const EndpointSelect = props => {
  let titleCaseGroups = [];
  props.groups.forEach(group => {
    titleCaseGroups.push(titleCase$1(group).replace(/And/g, "and"));
  });
  return /*#__PURE__*/React.createElement(IcseSelect, {
    name: props.name,
    labelText: "Endpoint Type",
    groups: titleCaseGroups,
    value: titleCase$1(props.value).replace(/And/g, "and"),
    handleInputChange: event => {
      let {
        name,
        value
      } = event.target;
      props.handleInputChange({
        target: {
          name: name,
          value: kebabCase$2(value)
        }
      });
    },
    className: props.className,
    formName: props.formName
  });
};
EndpointSelect.propTypes = {
  value: PropTypes.string,
  // can be null
  handleInputChange: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  className: PropTypes.string,
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string
};
EndpointSelect.defaultProps = {
  name: "endpoint",
  groups: ["private", "public", "public-and-private"]
};

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

const EmptyResourceTile = props => {
  return !props.showIfEmpty || props.showIfEmpty.length === 0 ? /*#__PURE__*/React.createElement(Tile, {
    className: "tileBackground displayFlex alignItemsCenter"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", props.instructions || /*#__PURE__*/React.createElement(React.Fragment, null, "Click", /*#__PURE__*/React.createElement(Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list",
  showIfEmpty: false
};
EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  instructions: PropTypes.string
};

var css_248z = ".tileTitle {\n  font-size: 80%;\n  font-weight: bold;\n}\n\n.tileContent {\n  font-size: 90%;\n}\n";
styleInject(css_248z);

class VsiLoadBalancerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.allVsi = this.allVsi.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    let nextState = {
      ...this.state
    };
    nextState[name] = contains$2(["name", "vpc", "resource_group"], name) ? value : contains$2(["health_delay", "health_retries", "health_timeout", "port", "listener_port", "connection_limit"], name) ? Number(value) : snakeCase(value);
    if (name === "vpc") {
      nextState.subnets = [];
      nextState.security_groups = [];
      nextState.target_vsi = [];
    } else if (name === "connection_limit" && nextState[name] === 0) {
      // reset when 0
      nextState[name] = "";
    } else if (name === "session_persistence_type" && value !== "app_cookie") {
      nextState.session_persistence_app_cookie_name = null;
    }
    this.setState(nextState);
  }

  /**
   * handle multiselect change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleMultiSelectChange(name, value) {
    let nextState = {
      ...this.state
    };
    if (name === "target_vsi") {
      nextState.subnets = [];
      this.props.vsiDeployments.forEach(deployment => {
        nextState.subnets = distinct(nextState.subnets.concat(deployment.subnets));
      });
    }
    nextState[name] = value;
    this.setState(nextState);
  }

  /**
   * get all vsi
   * @returns {Array<object>} list of vsi
   */
  allVsi() {
    let allVsi = [];
    this.state.target_vsi.forEach(deployment => {
      let vsi = getObjectFromArray(this.props.vsiDeployments, "name", deployment);
      let nextRow = [];
      // for each subnet vsi
      for (let subnet = 0; subnet < vsi.subnets.length; subnet++) {
        // for each vsi per subnet
        for (let count = 0; count < vsi.vsi_per_subnet; count++) {
          nextRow.push({
            name: deployment + "-" + (count + 1),
            subnet: vsi.subnets[subnet]
          });
          if (nextRow.length === 3) {
            allVsi.push(nextRow);
            nextRow = [];
          }
        }
      }
      if (nextRow.length > 0) {
        allVsi.push(nextRow);
      }
    });
    return allVsi;
  }
  render() {
    let componentName = this.props.data.name + "-lb";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "Load Balancer"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: componentName + "-name",
      tooltip: {
        content: "Name for the load balancer service. This name will be prepended to the components provisioned as part of the load balancer.",
        align: "right"
      },
      componentName: componentName,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller",
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName + "-rg",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName + "-type",
      name: "type",
      labelText: "Load Balancer Type",
      groups: ["Public", "Private"],
      value: titleCase$1(this.state.type || ""),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: isNullOrEmptyString$3(this.state.vpc),
      invalidText: "Select a VPC.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(SecurityGroupMultiSelect, {
      key: this.state.vpc + "-sg",
      id: componentName + "-sg",
      initialSelectedItems: this.state.security_groups || [],
      vpc_name: this.state.vpc,
      onChange: value => this.handleMultiSelectChange("security_groups", value),
      securityGroups: this.getSecurityGroupList(),
      invalid: !(this.state.security_groups?.length > 0),
      invalidText: !this.state.vpc || isNullOrEmptyString$3(this.state.vpc) ? `Select a VPC.` : `Select at least one security group.`,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "Load Balancer VSI"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseMultiSelect, {
      key: this.state.vpc + "-vsi",
      className: "fieldWidthSmaller",
      id: componentName + "-vsi",
      titleText: "Deployment VSI",
      items: splat$1(this.props.vsiDeployments.filter(deployment => {
        if (deployment.vpc === this.state.vpc) {
          return deployment;
        }
      }), "name"),
      onChange: value => {
        this.handleMultiSelectChange("target_vsi", value.selectedItems);
      },
      initialSelectedItems: this.state.target_vsi,
      invalid: this.state.target_vsi.length === 0,
      invalidText: "Select at least one VSI deployment"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "80",
      label: "Application Port",
      id: componentName + "-port",
      allowEmpty: true,
      value: this.state.port,
      step: 1,
      onChange: this.handleInputChange,
      name: "port",
      hideSteppers: true,
      min: 1,
      max: 65535,
      invalid: isNullOrEmptyString$3(this.state.port || "") ? true : !isWholeNumber$1(this.state.port),
      invalidText: "Must be a whole number between 1 and 65535",
      className: "fieldWidthSmaller"
    })), this.allVsi().map((row, index) => /*#__PURE__*/React.createElement(IcseFormGroup, {
      key: "row-" + index
    }, row.map((vsi, vsiIndex) => /*#__PURE__*/React.createElement(Tile, {
      key: `${index}-${vsiIndex}`,
      className: "fieldWidthSmaller tileFormMargin"
    }, /*#__PURE__*/React.createElement("p", {
      className: "tileTitle"
    }, "Name:"), /*#__PURE__*/React.createElement("p", {
      className: "tileContent"
    }, vsi.name), /*#__PURE__*/React.createElement("p", {
      className: "tileTitle"
    }, "Subnet:"), /*#__PURE__*/React.createElement("p", {
      className: "tileContent"
    }, vsi.subnet))))), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "Load Balancer Pool"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "algorithm",
      labelText: "Load Balancing Algorithm",
      groups: ["Round Robin", "Weighted Round Robin", "Least Connections"],
      value: titleCase$1(this.state.algorithm || ""),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "protocol",
      labelText: "Pool Protocol",
      groups: ["HTTPS", "HTTP", "TCP", "UDP"],
      value: (this.state.protocol || "").toUpperCase(),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      tooltip: {
        content: "Protocol of the application running on VSI instances"
      }
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "health_type",
      labelText: "Pool Health Protocol",
      groups: ["HTTPS", "HTTP", "TCP"],
      value: (this.state.health_type || "").toUpperCase(),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      tooltip: {
        content: "Protocol used to check the health of member VSI instances"
      }
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "5",
      label: "Health Timeout (in Seconds)",
      id: componentName + "-timeout",
      allowEmpty: true,
      value: this.state.health_timeout,
      step: 1,
      onChange: this.handleInputChange,
      name: "health_timeout",
      hideSteppers: true,
      min: 5,
      max: 3000,
      invalid: isNullOrEmptyString$3(this.state.health_timeout || "") ? true : !isWholeNumber$1(this.state.health_timeout),
      invalidText: "Must be a whole number between 5 and 300",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "5",
      label: "Health Delay (in Seconds)",
      id: componentName + "-delay",
      allowEmpty: true,
      value: this.state.health_delay,
      step: 1,
      onChange: this.handleInputChange,
      name: "health_delay",
      hideSteppers: true,
      min: 5,
      max: 3000,
      invalid: isNullOrEmptyString$3(this.state.health_delay || "") ? true : this.state.health_delay <= this.state.health_timeout || !isWholeNumber$1(this.state.health_delay),
      invalidText: this.state.health_delay <= this.state.health_timeout ? "Must be greater than Health Timeout value" : "Must be a whole number between 5 and 300",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "5",
      label: "Health Retries",
      id: componentName + "-retries",
      allowEmpty: true,
      value: this.state.health_retries,
      step: 1,
      onChange: this.handleInputChange,
      name: "health_retries",
      hideSteppers: true,
      min: 5,
      max: 3000,
      invalid: isNullOrEmptyString$3(this.state.health_retries || "") ? true : !isWholeNumber$1(this.state.health_retries),
      invalidText: "Must be a whole number between 5 and 300",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "Load Balancer Listener"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "443",
      label: "Listener Port",
      id: componentName + "-listener-port",
      allowEmpty: true,
      value: this.state.listener_port,
      step: 1,
      onChange: this.handleInputChange,
      name: "listener_port",
      hideSteppers: true,
      min: 1,
      max: 65535,
      invalid: isNullOrEmptyString$3(this.state.listener_port || "") ? true : !isWholeNumber$1(this.state.listener_port),
      invalidText: "Must be a whole number between 1 and 65535",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "listener_protocol",
      labelText: "Listener Protocol",
      groups: ["HTTPS", "HTTP", "TCP", "UDP"],
      value: (this.state.listener_protocol || "").toUpperCase(),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      tooltip: {
        content: "Protocol of the listener for the looad balancer"
      }
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "Connection Limit",
      id: componentName + "-connection-limit",
      allowEmpty: true,
      value: this.state.connection_limit || "",
      step: 1,
      onChange: this.handleInputChange,
      name: "connection_limit",
      hideSteppers: true,
      min: 1,
      max: 15000,
      invalid: isNullOrEmptyString$3(this.state.connection_limit || "") ? false : isInRange$1(this.state.connection_limit, 1, 15000) === false || !isWholeNumber$1(this.state.connection_limit),
      invalidText: "Must be a whole number between 1 and 15000",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "(Optional) Pool Customization"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "proxy_protocol",
      labelText: "Proxy Protocol",
      groups: ["Disabled", "V1", "V2"],
      value: (this.state.proxy_protocol || "disabled").toUpperCase(),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: componentName,
      name: "session_persistence_type",
      labelText: "Session Persistence Type",
      groups: ["Source IP", "App Cookie", "HTTP Cookie"],
      value: titleCase$1(this.state.session_persistence_type || "").replace(/Ip/s, "IP").replace(/Http/g, "HTTP"),
      handleInputChange: this.handleInputChange,
      disableInvalid: true,
      className: "fieldWidthSmaller"
    }), this.state.session_persistence_type === "app_cookie" && /*#__PURE__*/React.createElement(IcseTextInput, {
      id: componentName + "session_persistence_app_cookie_name",
      componentName: componentName + "-cookie-name",
      field: "session_persistence_app_cookie_name",
      isModal: this.props.isModal,
      labelText: "Session Cookie Name",
      value: this.state.session_persistence_app_cookie_name || "",
      invalid: isNullOrEmptyString$3(this.state.session_persistence_app_cookie_name || "") ? false : this.props.invalidCallback(this.state, this.props),
      onChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })));
  }
}
VsiLoadBalancerForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc: "",
    type: "",
    security_groups: [],
    algorithm: "",
    protocol: "",
    proxy_protocol: "",
    health_type: "",
    session_persistence_app_cookie_name: "",
    target_vsi: [],
    listener_protocol: "",
    connection_limit: null,
    port: "",
    health_timeout: "",
    health_delay: "",
    health_retries: "",
    listener_port: ""
  },
  isModal: false
};
VsiLoadBalancerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    vpc: PropTypes.string,
    security_groups: PropTypes.arrayOf(PropTypes.string)
  }),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string.isRequired),
  isModal: PropTypes.bool.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vsiDeployments: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

/**
 * Form Modal
 * @param {Object} props
 * @param {string} props.name the name of the modal
 * @param {Function} props.onRequestClose close modal function
 * @param {Function} props.onRequestSubmit submit function
 * @param {boolean} props.show show modal if true
 */
class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false
    };
    this.modalForm = /*#__PURE__*/React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableModal = this.disableModal.bind(this);
    this.enableModal = this.enableModal.bind(this);
  }

  /**
   * submit child data
   */
  handleSubmit() {
    let childData = this.modalForm.current.state;
    this.props.onRequestSubmit(childData);
  }

  /**
   * disable modal
   */
  disableModal() {
    if (!this.state.isDisabled) this.setState({
      isDisabled: true
    });
  }

  /**
   * enable modal
   */
  enableModal() {
    if (this.state.isDisabled) this.setState({
      isDisabled: false
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(DynamicRender, {
      hide: this.props.show === false,
      show: /*#__PURE__*/React.createElement(Modal, {
        modalHeading: this.props.name,
        open: this.props.show,
        onRequestSubmit: this.handleSubmit,
        onRequestClose: this.props.onRequestClose,
        primaryButtonText: "Submit",
        secondaryButtonText: "Cancel",
        primaryButtonDisabled: this.state.isDisabled
      }, this.props.show && React.Children.map(this.props.children, child =>
      /*#__PURE__*/
      // clone react child
      React.cloneElement(child, {
        // add modal specific methods
        disableModal: this.disableModal,
        enableModal: this.enableModal,
        isModal: true,
        ref: this.modalForm
      })))
    });
  }
}
FormModal.defaultProps = {
  show: false
};
FormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  name: PropTypes.string,
  // undefined for loaded modal not rendered
  children: PropTypes.node.isRequired
};

const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(Toggle, {
    labelA: props.useOnOff ? "Off" : "False",
    labelB: props.useOnOff ? "On" : "True",
    labelText: props.tooltip ? " " : props.labelText,
    id: kebabCase$2(toggleName) + "-icse-toggle-" + props.id,
    className: lib_2("leftTextAlign", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
    ,

    onToggle: event => {
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
  let fieldName = titleCase$1(props.field);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(TextInput, {
    id: props.id,
    className: lib_2("leftTextAlign", props),
    labelText: props.labelText ? props.labelText : titleCase$1(props.field),
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
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
  hideHelperText: false,
  className: "fieldWidth"
};
IcseTextInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  componentName: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  }),
  className: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
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
    if (!props.helperTextCallback) {
      throw new Error("IcseNameInput expects either a function `helperTextCallback` that returns a string or `hideHelperText` as a prop, got neither.");
    }
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/React.createElement(IcseTextInput, _extends({}, props, {
    className: lib_2("leftTextAlign", props),
    field: "name",
    labelText: props.labelText,
    helperText: helperText
  }));
};
IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: "",
  className: "fieldWidth",
  labelText: "Name"
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
  invalidCallback: PropTypes.func,
  labelText: PropTypes.string.isRequired
};

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
      name: event.target.value
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "app-id-key-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      field: "name",
      labelText: "Name",
      componentName: "appid",
      className: "fieldWidthSmaller",
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }));
  }
}
AppIdKeyForm.defaultProps = {
  data: {
    name: ""
  }
};
AppIdKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  shouldDisableSubmit: PropTypes.func
};

/**
 * Under Construction Page
 */
const UnderConstruction = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "underConstruction flexDirectionColumn"
  }, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
};

/**
 * StatefulTabPanel wrapper for non array forms
 * @param {*} props props
 * @param {*} props.form form to put in the create tab
 * @param {*} props.about docs to put in the about tab
 */
class StatefulTabPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0
    };
    this.setSelectedIndex = this.setSelectedIndex.bind(this);
  }
  setSelectedIndex(event) {
    // if the index is being set to a new tab
    if (this.props.toggleShowChildren && event.selectedIndex !== this.state.tabIndex) this.props.toggleShowChildren();
    this.setState({
      tabIndex: event.selectedIndex
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.name && !this.props.hasBuiltInHeading && /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.props.name,
      type: this.props.subHeading ? "subHeading" : "heading",
      className: this.props.className,
      tooltip: this.props.tooltip,
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.hideFormTitleButton || this.state.tabIndex !== 0 || !isFunction$1(this.props.onClick) || this.props.hasBuiltInHeading,
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: kebabCase$2(this.props.name),
          type: "add",
          noDeleteButton: true,
          onClick: this.props.onClick,
          disabled: this.props.shouldDisableSave ? this.props.shouldDisableSave() : false
        })
      })
    }), this.props.hideAbout ? this.props.form : /*#__PURE__*/React.createElement(Tabs, {
      onChange: this.setSelectedIndex
    }, /*#__PURE__*/React.createElement(TabList, {
      "aria-label": "formTabs"
    }, /*#__PURE__*/React.createElement(Tab, null, "Create"), /*#__PURE__*/React.createElement(Tab, null, "About")), /*#__PURE__*/React.createElement(TabPanels, null, /*#__PURE__*/React.createElement(TabPanel, {
      className: "doc"
    }, this.props.form), /*#__PURE__*/React.createElement(TabPanel, {
      className: "doc"
    }, this.props.about ? this.props.about : /*#__PURE__*/React.createElement(UnderConstruction, null)))));
  }
}
StatefulTabPanel.defaultProps = {
  subHeading: false,
  hideFormTitleButton: false,
  hideAbout: false,
  hasBuiltInHeading: false
};
StatefulTabPanel.propTypes = {
  name: PropTypes.string,
  // can be null
  subHeading: PropTypes.bool.isRequired,
  className: PropTypes.string,
  // can be null
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    align: PropTypes.string,
    alignModal: PropTypes.string
  }),
  hideFormTitleButton: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  // can be null
  shouldDisableSave: PropTypes.func,
  // can be null
  about: PropTypes.node,
  // can be null
  form: PropTypes.node.isRequired,
  hideAbout: PropTypes.bool.isRequired,
  hasBuiltInHeading: PropTypes.bool.isRequired
};

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
const IcseModal = props => {
  /*#__PURE__*/React.createElement("strong", null, props.name);
  return /*#__PURE__*/React.createElement(Modal, {
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
const DeleteModal = props => {
  let name = /*#__PURE__*/React.createElement("strong", null, props.name);
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

const UnsavedChangesModal = props => {
  let name = props.name;
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

class ToggleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.hide,
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
    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleUnsavedChangeModal = this.toggleUnsavedChangeModal.bind(this);
    this.dismissChangesAndClose = this.dismissChangesAndClose.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.shouldDisableSave = this.shouldDisableSave.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
    this.networkRuleOrderDidChange = this.networkRuleOrderDidChange.bind(this);
    this.toggleShowChildren = this.toggleShowChildren.bind(this);
    this.onToggleSubModal = this.onToggleSubModal.bind(this);
    this.childRef = /*#__PURE__*/React.createRef();
  }

  /**
   * toggle sub modal
   */
  onToggleSubModal() {
    this.setState({
      showSubModal: !this.state.showSubModal
    });
  }
  componentDidMount() {
    if (this.props.devMode) {
      console.log(this.props);
    }
    if (this.state.hide === true && this.shouldShow() === true) {
      this.setState({
        hide: false
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.hide !== this.state.hide && this.props.onShowToggle) {
      this.props.onShowToggle(this.props.index);
    }
  }

  /**
   * toggle children rendered by form
   */
  toggleChildren() {
    if (this.childRef.current?.state) {
      let stateData = this.childRef.current.state;
      let componentProps = this.childRef.current.props;
      let propsDoNotMatch = this.props.propsMatchState(this.props.submissionFieldName, stateData, componentProps) === false;
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
  toggleDeleteModal() {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  }

  /**
   * toggle unsaved changes modal
   */
  toggleUnsavedChangeModal() {
    this.setState({
      showUnsavedChangeModal: !this.state.showUnsavedChangeModal
    });
  }

  /**
   * Dismiss changes and close
   */
  dismissChangesAndClose() {
    this.setState({
      showUnsavedChangeModal: false,
      hide: true
    });
  }

  /**
   * on save
   */
  onSave() {
    this.props.onSave(this.childRef.current.state, this.childRef.current.props);
    this.setState({
      useDefaultUnsavedMessage: true
    });
  }

  /**
   * on delete
   */
  onDelete() {
    this.props.onShowToggle(this.props.index);
    this.props.onDelete(this.childRef.current?.state, this.childRef.current?.props);
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
  shouldDisableSave(stateData, componentProps) {
    let enableSave = this.props.disableSave(this.props.submissionFieldName, stateData, componentProps) === false;
    let propsDoNotMatch = this.props.propsMatchState(this.props.submissionFieldName, stateData, componentProps) === false;
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
  shouldShow() {
    return this.props.forceOpen(this.state, this.props);
  }
  networkRuleOrderDidChange(didNotChange) {
    let didChange = !didNotChange;
    if (this.state.ruleOrderChange !== didChange) {
      this.setState({
        ruleOrderChange: didChange
      });
    }
  }
  toggleShowChildren() {
    this.setState({
      showChildren: !this.state.showChildren
    });
  }
  render() {
    if (this.props.noDeleteButton !== true && !this.props.onDelete) {
      throw new Error(`ToggleForm expects onDelete Function to be passed when a delete button is rendered`);
    }
    if (this.props.noSaveButton !== true && !this.props.onSave) {
      throw new Error(`ToggleForm expects onSave Function to be passed when a save button is rendered`);
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatefulTabPanel, _extends({}, this.props.tabPanel ? this.props.tabPanel : {}, {
      toggleShowChildren: this.toggleShowChildren,
      form: /*#__PURE__*/React.createElement(React.Fragment, null, this.props.name && !this.props.hideName && /*#__PURE__*/React.createElement(IcseHeading, {
        name: this.props.name,
        hideButton: true
      }), /*#__PURE__*/React.createElement("div", {
        className: lib_2(this.props.type === "formInSubForm" ? "formInSubForm positionRelative marginBottomSmall" : "subForm marginBottomSmall")
      }, /*#__PURE__*/React.createElement(StatelessToggleForm, {
        hide: this.state.hide,
        iconType: this.props.useAddButton ? "add" : "edit",
        onIconClick: this.toggleChildren,
        toggleFormTitle: true,
        name: this.props.name,
        buttons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.addButtonAtFormTitle !== true,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            name: this.props.name,
            type: "add",
            onClick: this.onToggleSubModal,
            noDeleteButton: true
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noSaveButton || this.props.addButtonAtFormTitle,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            name: this.props.name,
            onClick: this.onSave,
            disabled: this.state.disableSave,
            noDeleteButton: this.props.noDeleteButton
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noDeleteButton,
          show: /*#__PURE__*/React.createElement(DeleteButton, {
            onClick: this.toggleDeleteModal,
            name: this.props.name,
            disabled: this.props.deleteDisabled({
              ...this.props,
              ...this.props.innerFormProps
            }),
            disableDeleteMessage: this.props.deleteDisabledMessage
          })
        }))
      }, /*#__PURE__*/React.createElement(UnsavedChangesModal, {
        name:
        // use tab panel name if passed
        this.props.name,
        modalOpen: this.state.showUnsavedChangeModal,
        onModalClose: this.toggleUnsavedChangeModal,
        onModalSubmit: this.dismissChangesAndClose,
        useDefaultUnsavedMessage: this.state.useDefaultUnsavedMessage
      }), /*#__PURE__*/React.createElement(DeleteModal, {
        name: this.props.name,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.onDelete
      }), RenderForm(this.props.innerForm, {
        ...this.props.innerFormProps,
        ref: this.props.nullRef ? null : this.childRef,
        index: this.props.index,
        shouldDisableSave: this.shouldDisableSave,
        showSubModal: this.state.showSubModal,
        networkRuleOrderDidChange: this.networkRuleOrderDidChange,
        onChildShowToggle: this.props.onChildShowToggle,
        shownChildren: this.props.shownChildren,
        handleModalToggle: this.onToggleSubModal,
        showSubModal: this.state.showSubModal,
        // this is an override to allow the
        // parent form to be saved from a button inside the child form
        saveFromChildForm: {
          onSave: this.onSave,
          disableSave: this.state.disableSave
        }
      })))),
      about: this.props.about || false
    })), this.state.showChildren && this.props.children ? this.props.children : "");
  }
}
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
  deleteDisabled: () => {
    return false;
  },
  forceOpen: () => {
    return false;
  }
};
ToggleForm.propTypes = {
  name: PropTypes.string,
  hideName: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onShowToggle: PropTypes.func,
  index: PropTypes.number.isRequired,
  hide: PropTypes.bool.isRequired,
  submissionFieldName: PropTypes.string.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  forceOpen: PropTypes.func,
  // can be null
  deleteDisabled: PropTypes.func,
  // can be null
  disableDeleteMessage: PropTypes.func,
  // can be null
  type: PropTypes.string.isRequired,
  nullRef: PropTypes.bool.isRequired,
  innerFormProps: PropTypes.object,
  // can be null
  noDeleteButton: PropTypes.bool.isRequired,
  noSaveButton: PropTypes.bool.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  tabPanel: PropTypes.shape({
    hideFormTitleButton: PropTypes.bool // can be null
  }).isRequired
};

class IcseFormTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      shownArrayForms: [],
      // list of array forms to keep open on save
      shownChildForms: [] // list of child forms to keep open on save
    };

    this.onChildToggle = this.onChildToggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
    // add an array to track middle forms
    if (this.props.isMiddleForm) {
      this.props.arrayData.forEach(() => this.state.shownChildForms.push([]));
    }
  }

  /**
   * keep update forms open
   * @param {number} index index to keep open
   * @param {number=} childIndex optional child index
   */
  onChildToggle(index, childIndex) {
    if (this.props.parentToggle) {
      // if the parent toggle is passed, run the callback (this function on parent form)
      // with parent index and current index
      this.props.parentToggle.callback(this.props.parentToggle.index, index);
    } else if (arguments.length !== 1) {
      // if a second param is passed
      let shownChildForms = [...this.state.shownChildForms]; // all forms
      // if contains index
      if (contains$2(this.state.shownChildForms[index], childIndex)) {
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
      let shownForms = [...this.state.shownArrayForms]; // all forms
      if (contains$2(this.state.shownArrayForms, index)) {
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
  onSubmit(data) {
    this.props.onSubmit(data, this.props);
    this.toggleModal();
  }

  /**
   * toggle modal on and off
   */
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  /**
   * check if form should show
   * @returns {bool} if the child forms should show
   */
  shouldShow(index) {
    return this.props.parentToggle ? contains$2(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
    : contains$2(this.state.shownArrayForms, index);
  }
  render() {
    let formattedName = kebabCase$2(this.props.name); // formatted component name
    // enable submit field here is set to variable value to allow for passing to
    // child array components without needing to reference `this` directly
    return /*#__PURE__*/React.createElement("div", {
      id: formattedName
    }, /*#__PURE__*/React.createElement(StatefulTabPanel, {
      name: this.props.name,
      onClick: this.toggleModal,
      addText: this.props.addText,
      hideButton: this.props.hideFormTitleButton,
      subHeading: this.props.subHeading,
      className: this.props.subHeading ? "subHeading marginBottomSmall" : "",
      tooltip: this.props.tooltip,
      about: this.props.docs ? this.props.docs() : false,
      hideAbout: this.props.hideAbout,
      form: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EmptyResourceTile, {
        name: this.props.name,
        showIfEmpty: this.props.arrayData
      }), this.props.arrayData.map((data, index) => {
        // return a form with the index and props
        return /*#__PURE__*/React.createElement(ToggleForm, _extends({}, this.props.toggleFormProps, {
          propsMatchState: this.props.propsMatchState,
          disableSave: this.props.disableSave,
          name: data[this.props.toggleFormFieldName],
          tabPanel: {
            name: this.props.name,
            hideAbout: true,
            // passed to ignore second tab panel
            hasBuiltInHeading: true // passed to ignore second tabPanel
          },

          key: this.props.name + "-" + index,
          innerForm: this.props.innerForm,
          innerFormProps: {
            ...this.props.innerFormProps,
            data: {
              ...data
            }
          } // merge data into innerForm props
          ,
          arrayParentName: this.props.arrayParentName,
          onShowToggle: this.onChildToggle,
          onChildShowToggle: this.props.isMiddleForm ? this.onChildToggle // pass through to child component if middle form
          : false,
          index: index,
          forceOpen: this.props.forceOpen,
          show: this.shouldShow(index),
          shownChildren: this.state.shownChildForms,
          onSave: this.props?.onSave,
          onDelete: this.props?.onDelete,
          deleteDisabled: this.props?.deleteDisabled,
          deleteDisabledMessage: this.props?.deleteDisabledMessage
        }));
      }), /*#__PURE__*/React.createElement(FormModal, {
        name: this.props.addText,
        show: this.state.showModal,
        onRequestSubmit: this.onSubmit,
        onRequestClose: this.toggleModal,
        arrayParentName: this.props.arrayParentName
      },
      // render the form inside the modal
      RenderForm(this.props.innerForm, {
        ...this.props.innerFormProps,
        disableSave: this.props.disableSave,
        arrayParentName: this.props.arrayParentName,
        isModal: true,
        submissionFieldName: this.props.toggleFormProps.submissionFieldName,
        shouldDisableSubmit: function () {
          // references to `this` in function are intentionally vague
          // in order to pass the correct functions and field values to the
          // child modal component
          // by passing `this` in a function that it scoped to the component
          // we allow the function to be successfully bound to the modal form
          // while still referencing the local value `enableSubmitField`
          // to use it's own values for state and props including enableModal
          // and disableModal, which are dynamically added to the component
          // at time of render
          if (this.props.disableSave(this.props.submissionFieldName, this.state, this.props) === false) {
            this.props.enableModal();
          } else {
            this.props.disableModal();
          }
        }
      }))),
      hideFormTitleButton: this.props.hideFormTitleButton
    }));
  }
}
IcseFormTemplate.defaultProps = {
  hideFormTitleButton: false,
  subHeading: false,
  arrayParentName: null,
  isMiddleForm: false,
  hideAbout: false,
  toggleFormFieldName: "name",
  forceOpen: () => {
    return false;
  }
};
IcseFormTemplate.propTypes = {
  name: PropTypes.string,
  // can be null
  arrayData: PropTypes.array.isRequired,
  parentToggle: PropTypes.shape({
    // used to track open and closed middle forms
    callback: PropTypes.func.isRequired,
    shownChildren: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }),
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  addText: PropTypes.string,
  hideFormTitleButton: PropTypes.bool.isRequired,
  subHeading: PropTypes.bool.isRequired,
  docs: PropTypes.func,
  // only used on top level components
  tooltip: PropTypes.object,
  // used only for cos keys
  arrayParentName: PropTypes.string,
  isMiddleForm: PropTypes.bool.isRequired,
  innerFormProps: PropTypes.object.isRequired,
  toggleFormProps: PropTypes.object.isRequired,
  toggleFormFieldName: PropTypes.string.isRequired,
  hideAbout: PropTypes.bool,
  deleteDisabled: PropTypes.func,
  forceOpen: PropTypes.func,
  deleteDisabledMessage: PropTypes.string
};

/**
 * AppIdForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
class AppIdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
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
  render() {
    let keyProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      arrayParentName: this.props.data.name
    };
    transpose({
      ...this.props.keyProps
    }, keyProps);
    return /*#__PURE__*/React.createElement("div", {
      id: "appid-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmallest",
      id: "app-id-existing-instance"
    }), /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-appid-name",
      componentName: this.props.data.name + "-appid-name",
      placeholder: "my-appid-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: this.props.data.name + "-appid-rg",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: "fieldWidth"
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "AppID Keys",
      subHeading: true,
      addText: "Create an AppID Key",
      arrayData: this.props.data.keys,
      innerForm: AppIdKeyForm,
      disableSave: this.props.keyProps.disableSave,
      onDelete: this.props.keyProps.onDelete,
      onSave: this.props.keyProps.onSave,
      onSubmit: this.props.keyProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...keyProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "appid_key",
        disableSave: this.props.keyProps.disableSave,
        type: "formInSubForm"
      }
    }));
  }
}
AppIdForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    use_data: false,
    keys: []
  },
  isModal: false
};
AppIdForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    use_data: PropTypes.bool,
    keys: PropTypes.array.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func
};

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
    id: props.id,
    className: lib_2("leftTextAlign", props),
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
  invalidText: "Invalid value",
  className: "fieldWidth"
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
    initialSelectedItems: props.initialSelectedItems,
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    className: props.className
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
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: "Security Groups",
    titleText: "Security Groups",
    className: props.className,
    initialSelectedItems: props.initialSelectedItems,
    vpc_name: props.vpc_name,
    invalid: props.invalid,
    invalidText: props.invalidText,
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: props.vpc_name === "" ? [] : props.securityGroups,
    itemToString: item => item ? item : ""
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialSelectedItems: PropTypes.array.isRequired,
  vpc_name: PropTypes.string,
  // not required, null value should be valid
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired
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
    items: isNullOrEmptyString$3(props.vpc_name) ? [] : props.subnets,
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString$3(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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
  subnets: PropTypes.array.isRequired,
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
const LocationsMultiSelect = props => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.region) {
    throw new Error("LocationsMultiSelect requires a region using the prop `region`. Got " + props.region);
  }
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-locations-multiselect",
    label: props.label,
    titleText: "Locations",
    className: props.className,
    initialSelectedItems: props.initialSelectedItems,
    invalid: props.invalid,
    invalidText: props.invalidText,
    onChange: event => {
      props.onChange(event.selectedItems);
    },
    disabled: props.disabled,
    items: ["global"].concat(props.region),
    itemToString: item => item ? item : ""
  });
};
LocationsMultiSelect.defaultProps = {
  invalid: false,
  initialSelectedItems: [],
  invalidText: "Select at least one location."
};
LocationsMultiSelect.propTypes = {
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  region: PropTypes.string.isRequired
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
class AtrackerForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
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
  handleMultiSelect(event) {
    this.setState({
      locations: event
    });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "atracker-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Enable or Disable your Activity Tracker instance.",
        align: "bottom-left"
      },
      labelText: "Enabled",
      defaultToggled: this.state.enabled,
      toggleFieldName: "enabled",
      onToggle: this.handleToggle,
      id: "atracker-enable-disable"
    })), this.state.enabled && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      componentName: "Activity Tracker",
      field: "Name",
      labelText: "Name",
      className: "fieldWidth",
      value: this.props.prefix + "-atracker",
      readOnly: true,
      id: "atracker-name",
      invalid: false,
      placeholder: this.props.prefix + "-atracker"
    }), /*#__PURE__*/React.createElement(LocationsMultiSelect, {
      id: this.props.data.name + "-activity-tracker-location",
      region: this.props.region,
      onChange: this.handleMultiSelect,
      invalid: this.state.locations.length === 0,
      invalidText: "Select at least one location.",
      initialSelectedItems: this.props.data.locations
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      tooltip: {
        content: "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored"
      },
      groups: this.props.cosBuckets,
      formName: this.props.data.name + "-activity-tracker-bucket",
      field: "bucket",
      name: "bucket",
      value: this.state.bucket,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      labelText: "Object Storage Log Bucket",
      invalidText: "Select an Object Storage bucket."
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
      },
      labelText: "Create Activity Tracker Route",
      defaultToggled: this.state.add_route,
      toggleFieldName: "add_route",
      onToggle: this.handleToggle,
      id: "atracker-add-route"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      tooltip: {
        content: "The IAM API key that has writer access to the Cloud Object Storage instance"
      },
      formName: this.props.data.name + "-activity-tracker-cos-key",
      name: "cos_key",
      groups: this.props.cosKeys,
      value: this.state.cos_key,
      labelText: "Privileged IAM Object Storage Key",
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      invalidText: "Select an Object Storage key."
    }))));
  }
}
AtrackerForm.defaultProps = {
  isModal: false,
  data: {
    enabled: true,
    bucket: "",
    cos_key: "",
    resource_group: "",
    add_route: false,
    locations: []
  }
};
AtrackerForm.propTypes = {
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    bucket: PropTypes.string,
    cos_key: PropTypes.string,
    resource_group: PropTypes.string,
    add_route: PropTypes.bool,
    locations: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  region: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired
};

/**
 * kms keys
 */
class EncryptionKeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
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
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  /**
   * Handle input change for a text field
   * @param {event} event
   */
  handleTextInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Handle toggle for showing/hiding details of keys
  toggleShow() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    let composedId = `encryption-key-${this.props.data.name}-`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      componentName: this.props.data.name,
      field: "key_ring",
      labelText: "Key Ring Name",
      value: this.state.key_ring || "",
      onChange: this.handleTextInput // nothing
      ,
      id: this.props.data.name + "-key-ring",
      invalid: this.props.invalidRingCallback(this.state, this.props),
      invalidText: this.props.invalidRingText
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNumberSelect, {
      tooltip: {
        content: "Setting a rotation policy shortens the lifetime of the key at regular intervals. When it's time to rotate the key based on the rotation interval that you specify, the root key will be automatically replaced with new key material.",
        align: "bottom-left"
      },
      component: this.props.data.name,
      max: 12,
      value: this.state.rotation,
      formName: "rotation",
      name: "rotation",
      labelText: "Rotation Interval (Months)",
      handleInputChange: this.handleInputChange,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(EndpointSelect, {
      formName: this.props.data.name,
      handleInputChange: this.handleInputChange,
      value: this.state.endpoint
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Force deletion of a key refers to the deletion of any key that's actively protecting any registered cloud resources. KMS keys can be force-deleted by managers of the instance. However, the force-delete won't succeed if the key's associated resource is non-erasable due to a retention policy.",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
      id: composedId + "kms-key-force-delete",
      labelText: "Force Deletion of KMS Key",
      toggleFieldName: "force_delete",
      defaultToggled: this.state.force_delete,
      onToggle: this.handleToggle,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Allow key to be deleted only by two users. One user can schedule the key for deletion, a second user must confirm it before the key will be destroyed.",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
      id: composedId + "kms-key-dual-auth-delete",
      labelText: "Dual Authorization Deletion Policy",
      toggleFieldName: "dual_auth_delete",
      defaultToggled: this.state.dual_auth_delete,
      onToggle: this.handleToggle,
      isModal: this.props.isModal
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Root keys are symmetric key-wrapping keys used as roots of trust for encrypting/decrypting other keys. Can be either imported or generated by IBM Key Protect.",
        link: "https://cloud.ibm.com/docs/key-protect?topic=key-protect-envelope-encryption",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
      id: composedId + "kms-key-root",
      labelText: "Set as a Root Key",
      toggleFieldName: "root_key",
      onToggle: this.handleToggle,
      defaultToggled: this.state.root_key,
      isModal: this.props.isModal
    })));
  }
}
EncryptionKeyForm.defaultProps = {
  data: {
    name: "",
    rotation: 12,
    root_key: false,
    force_delete: false,
    dual_auth_delete: false,
    key_ring: "",
    endpoint: "private"
  },
  isModal: false
};
EncryptionKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation: PropTypes.number.isRequired,
    root_key: PropTypes.bool.isRequired,
    dual_auth_delete: PropTypes.bool.isRequired,
    force_delete: PropTypes.bool,
    key_ring: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidRingCallback: PropTypes.func.isRequired
};

class F5VsiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleVsiSave = this.handleVsiSave.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (name === "zones") {
      this.setState({
        zones: Number(value)
      });
    } else this.setState({
      [name]: value
    });
  }
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  handleVsiSave(stateData) {
    this.props.saveVsiCallback(stateData);
  }
  render() {
    let vsis = [...this.props.vsis];
    while (vsis.length < this.state.zones) {
      // add a new vsi to display
      vsis.push(this.props.initVsiCallback(this.props.edge_pattern, `zone-${vsis.length + 1}`, this.props.f5_on_management, {
        image: this.state.image,
        resource_group: this.state.resource_group,
        ssh_keys: this.state.ssh_keys,
        profile: this.state.profile
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "f5_vsi_form",
      name: "zones",
      labelText: "F5 Instance Zones",
      groups: buildNumberDropdownList(4) // 0-3 Zones
      ,
      value: this.state.zones.toString(),
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "f5_vsi_form",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(SshKeyMultiSelect, {
      id: "sshkey",
      sshKeys: this.props.sshKeys,
      initialSelectedItems: this.state.ssh_keys || [],
      onChange: value => this.handleMultiSelectChange("ssh_keys", value)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "f5_vsi_form",
      name: "image",
      labelText: "F5 Image",
      groups: this.props.f5Images,
      value: this.state.image,
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      formName: "f5_vsi_form",
      labelText: "Profile",
      name: "profile",
      apiEndpoint: this.props.apiEndpointInstanceProfiles,
      handleInputChange: this.handleInputChange,
      value: this.state.profile
    })), vsis.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "F5 Big IP Virtual Servers",
      type: "subHeading",
      className: "marginBottomSmall"
    }), /*#__PURE__*/React.createElement("div", {
      className: "displayFlex evenSpacing"
    }, vsis.map((instance, index) => {
      if (index < this.state.zones) return /*#__PURE__*/React.createElement(F5VsiTile, {
        key: "f5-vsi-tile" + JSON.stringify(instance) + index,
        data: instance,
        hide: false,
        onSave: this.handleVsiSave,
        totalZones: this.state.zones,
        index: index,
        resourceGroups: this.props.resourceGroups,
        encryptionKeys: this.props.encryptionKeys,
        hideSaveCallback: this.props.hideSaveCallback,
        propsMatchState: this.props.propsMatchState
      });
    }))));
  }
}
class F5VsiTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.shouldHideSave = this.shouldHideSave.bind(this);
  }
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }
  shouldHideSave() {
    return this.props.hideSaveCallback(this.state, this.props);
  }
  render() {
    return /*#__PURE__*/React.createElement(Tile, {
      className: "fieldWidth subForm"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.state.name,
      type: "subHeading",
      className: "marginBottomSmall",
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.shouldHideSave(this.state, this.props),
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: this.props.name,
          onClick: () => this.props.onSave(this.state),
          noDeleteButton: true,
          disabled: this.props.propsMatchState("f5_vsi", this.state, this.props)
        })
      })
    }), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name,
      componentName: "f5_vsi_form",
      value: this.state.name,
      onChange: this.handleInputChange,
      useData: true,
      readOnly: true,
      invalidCallback: () => {},
      invalidText: "",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "f5_vsi_form",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "f5_vsi_form",
      name: "encryption_key",
      labelText: "Encryption Key",
      groups: this.props.encryptionKeys,
      value: this.state.encryption_key,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })));
  }
}
F5VsiForm.defaultProps = {
  data: {
    zones: 0,
    resource_group: "",
    ssh_keys: [],
    image: "",
    profile: ""
  },
  vsis: [],
  edge_pattern: "vpn-and-waf",
  f5_on_management: true
};
F5VsiForm.propTypes = {
  data: PropTypes.shape({
    zones: PropTypes.number.isRequired,
    resource_group: PropTypes.string,
    ssh_keys: PropTypes.array,
    image: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired
  }).isRequired,
  vsis: PropTypes.array.isRequired,
  edge_pattern: PropTypes.string.isRequired,
  f5_on_management: PropTypes.bool.isRequired,
  // use management
  /* api endpoints */
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  /* lists */
  resourceGroups: PropTypes.array.isRequired,
  sshKeys: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  f5Images: PropTypes.array.isRequired,
  /* callbacks */
  initVsiCallback: PropTypes.func.isRequired,
  saveVsiCallback: PropTypes.func.isRequired,
  hideSaveCallback: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired
};

const {
  RegexButWithWords: RegexButWithWords$1
} = regexButWithWords;
const {
  isNullOrEmptyString: isNullOrEmptyString$2
} = lazyZ;
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
  if (isNullOrEmptyString$2(url) || url === "null") return true;
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

/**
 * F5VsiTemplateForm
 */
class F5VsiTemplateForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleLicenseChange = this.handleLicenseChange.bind(this);
    this.generateAdminPassword = this.generateAdminPassword.bind(this);
  }

  /**
   * set state to event value
   * @param {event} event
   */
  handleTextInput(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * set conditional fields to null on license type change
   * @param {event} event
   */
  handleLicenseChange(event) {
    let {
      name,
      value
    } = event.target;
    let reset = {};
    let pool = ["license_username", "license_password", "license_host", "license_pool"];
    let conditionalFields = {
      none: [],
      byol: ["byol_license_basekey"],
      regkeypool: pool,
      utilitypool: ["license_unit_of_measure", "license_sku_keyword_1", "license_sku_keyword_2", ...pool]
    };
    this.setState(prevState => {
      conditionalFields[prevState.license_type].forEach(field => {
        if (!conditionalFields[value].includes(field)) {
          reset[field] = "";
        }
      });
      return {
        [name]: value,
        ...reset
      };
    });
  }

  /**
   * get a valid admin password between 15-20 characters
   */
  generateAdminPassword() {
    let length = Math.floor(Math.random() * 6 + 15); // between 15-20 chars, inclusive (20 - 15 + 1)
    let password = f5Utils_1(length); // get a valid password
    this.setState({
      tmos_admin_password: password
    }); // set password
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
    }), /*#__PURE__*/React.createElement("div", {
      className: "tooltip tight"
    }, /*#__PURE__*/React.createElement(ToolTipWrapper, {
      tooltip: {
        content: "The admin account password for the F5 BIG-IP instance.",
        align: "right"
      },
      innerForm: PasswordInput,
      className: "wide",
      id: "tmos_admin_password",
      labelText: "TMOS Admin Password",
      name: "tmos_admin_password",
      value: this.state.tmos_admin_password || "",
      invalid: this.props.invalidCallback("tmos_admin_password", this.state, this.props) || !f5Utils_3(this.state.tmos_admin_password),
      invalidText: "Password must be at least 15 characters, contain one numeric, one uppercase, and one lowercase character.",
      onChange: this.handleTextInput
    })), /*#__PURE__*/React.createElement(PopoverWrapper, {
      hoverText: "Generate Password",
      className: "passwordGenerateButton" + (f5Utils_3(this.state.tmos_admin_password) ? "" : " invalid")
    }, /*#__PURE__*/React.createElement(Button, {
      kind: "ghost",
      onClick: this.generateAdminPassword,
      className: "forceTertiaryButtonStyles"
    }, /*#__PURE__*/React.createElement(Password, null)))), this.state.license_type != "none" && /*#__PURE__*/React.createElement(React.Fragment, null, this.state.license_type != "regkeypool" && this.state.license_type == "byol" && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), this.state.license_type != "byol" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement("div", {
      className: "leftTextAlign tooltip"
    }, /*#__PURE__*/React.createElement(ToolTipWrapper, {
      tooltip: {
        content: "BIGIQ password to use for the pool based licensing of the F5 BIG-IP instance."
      },
      id: "license_password",
      className: "wide",
      labelText: "License Password",
      innerForm: PasswordInput,
      name: "license_password",
      value: this.state.license_password || "",
      onChange: this.handleTextInput,
      invalid: this.props.invalidCallback("license_password", this.state, this.props),
      invalidText: this.props.invalidTextCallback("license_password", this.state, this.props)
    }))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), this.state.license_type == "utilitypool" && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
    }), /*#__PURE__*/React.createElement(ToolTipWrapper, {
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
}
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
  data: PropTypes.shape({
    license_type: PropTypes.string.isRequired,
    tmos_admin_password: PropTypes.string,
    byol_license_basekey: PropTypes.string,
    license_username: PropTypes.string.isRequired,
    license_password: PropTypes.string.isRequired,
    license_host: PropTypes.string.isRequired,
    license_pool: PropTypes.string.isRequired,
    license_unit_of_measure: PropTypes.string.isRequired,
    license_sku_keyword_1: PropTypes.string.isRequired,
    license_sku_keyword_2: PropTypes.string.isRequired,
    template_version: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    template_source: PropTypes.string.isRequired,
    app_id: PropTypes.string.isRequired,
    phone_home_url: PropTypes.string.isRequired,
    do_declaration_url: PropTypes.string.isRequired,
    as3_declaration_url: PropTypes.string.isRequired,
    ts_declaration_url: PropTypes.string.isRequired,
    tgstandby_url: PropTypes.string.isRequired,
    tgrefresh_url: PropTypes.string.isRequired,
    tgactive_url: PropTypes.string.isRequired
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

const {
  isWholeNumber,
  isInRange
} = lazyZ;
const {
  RegexButWithWords
} = regexButWithWords;
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

const restrictMenuItems = ["Unset", "Yes", "No"];
const mfaMenuItems = ["NONE", "TOTP", "TOTP4ALL", "Email-Based MFA", "TOTP MFA", "U2F MFA"];
const iamItems = {
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

class IamAccountSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.state.enable = true;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
   * handle input change of number-only fields
   * @param {event} event
   */
  handleNumberInputChange(event) {
    let value = parseInt(event.target.value) || null;
    if (value || event.target.value === "") {
      this.setState({
        [event.target.name]: value
      });
    }
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   * @param {bool} setDefaults set default values, default is false
   */
  handleToggle(name) {
    this.setState({
      [name]: !this.state[name]
    });
  }

  /**
   * Handle input change for allowed ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    // removing white space and checking for empty value
    let value = event.target.value.replace(/\s*/g, "");
    if (value === "") value = null;
    this.setState({
      allowed_ip_addresses: value
    });
  }

  /**
   * Handle input change for a select
   * @param {event} event
   */
  handleSelectChange(event) {
    let name = event.target.name;
    let item = event.target.value;
    this.setState({
      [name]: iamItems[item].value
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      value: iamItems[this.state.mfa].display,
      formName: "IAM Account Settings",
      className: "textInputMedium",
      groups: mfaMenuItems,
      handleInputChange: this.handleSelectChange,
      labelText: "Multi-Factor Authentication",
      name: "mfa"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Defines if the entity history is included in the response.",
        align: "top-left"
      },
      labelText: "Include History",
      defaultToggled: this.state.include_history,
      onToggle: () => this.handleToggle("include_history"),
      className: "fieldWidthSmaller",
      id: "iam-include-history"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "IAM Account Settings",
      name: "restrict_create_service_id",
      groups: restrictMenuItems,
      value: iamItems[this.state.restrict_create_service_id].display,
      labelText: "Restrict Creation of Service IDs",
      handleInputChange: this.handleSelectChange
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "IAM Account Settings",
      name: "restrict_create_platform_apikey",
      groups: restrictMenuItems,
      value: iamItems[this.state.restrict_create_platform_apikey].display,
      labelText: "Restrict Creation of API Keys",
      handleInputChange: this.handleSelectChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    }), /*#__PURE__*/React.createElement(NumberInput, {
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
    }), /*#__PURE__*/React.createElement(NumberInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
      tooltip: {
        content: "IP addresses and subnets from which IAM tokens can be created for the account",
        align: "top-left"
      },
      className: "textInputMedium",
      innerForm: TextArea,
      id: "iam-allowed-ip",
      labelText: "Allowed IPs",
      onChange: this.handleAllowedIps,
      placeholder: this.state.allowed_ip_addresses || "X.X.X.X, X.X.X.X/X, ...",
      invalid: iamUtils_1(this.state.allowed_ip_addresses),
      invalidText: "Please enter a comma separated list of IP addresses or CIDR blocks"
    })));
  }
}
IamAccountSettingsForm.defaultProps = {
  data: {
    if_match: "",
    mfa: mfaMenuItems[0],
    include_history: false,
    restrict_create_service_id: iamItems[restrictMenuItems[0]].value,
    restrict_create_platform_apikey: iamItems[restrictMenuItems[0]].value,
    max_sessions_per_identity: "",
    session_expiration_in_seconds: "",
    session_invalidation_in_seconds: "",
    allowed_ip_addresses: ""
  },
  invalidCallback: () => {
    return false;
  },
  invalidTextCallback: () => {
    return "Invalid";
  }
};
IamAccountSettingsForm.propTypes = {
  data: PropTypes.shape({
    if_match: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mfa: PropTypes.string,
    include_history: PropTypes.bool,
    restrict_create_service_id: PropTypes.oneOf(restrictMenuItems.map(item => {
      return iamItems[item].value;
    })),
    restrict_create_platform_apikey: PropTypes.oneOf(restrictMenuItems.map(item => {
      return iamItems[item].value;
    })),
    max_sessions_per_identity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    session_expiration_in_seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    session_invalidation_in_seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    allowed_ip_addresses: PropTypes.string
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

/**
 * Key Management
 */
class KeyManagementForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    if (this.props.isModal) this.state.keys = [];
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
    let innerFormProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      invalidRingCallback: this.props.invalidRingCallback,
      invalidRingText: this.props.invalidRingText,
      arrayParentName: this.props.data.name
    };
    transpose({
      ...this.props.encryptionKeyProps
    }, innerFormProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      component: "km-system-dropdown",
      name: "system",
      formName: "system",
      groups: ["Key Protect", "HPCS"],
      value: this.state.use_hs_crypto ? "HPCS" : "Key Protect",
      labelText: "Key Management System",
      handleInputChange: this.handleSystemDropdown,
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
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
      toggleFieldName: "use_data",
      id: this.props.data.name + "-use-existing"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "resource_group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: this.props.isModal
    }, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Allow for IAM Authorization policies to be created to allow this Key Management service to encrypt VPC block storage volumes. This should be false only if these policies already exist within your account.",
        align: "bottom-left"
      },
      labelText: "Authorize VPC Reader Role",
      key: this.state.authorize_vpc_reader_role,
      defaultToggled: this.state.authorize_vpc_reader_role,
      onToggle: () => this.handleToggle("authorize_vpc_reader_role"),
      className: "fieldWidth",
      id: this.props.data.name + "-kms-vpc-reader-role"
    })), this.props.isModal === false && /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Encryption Keys",
      subHeading: true,
      addText: "Create an Encryption Key",
      arrayData: this.props.data.keys,
      innerForm: EncryptionKeyForm,
      disableSave: this.props.encryptionKeyProps.disableSave,
      onDelete: this.props.encryptionKeyProps.onDelete,
      onSave: this.props.encryptionKeyProps.onSave,
      onSubmit: this.props.encryptionKeyProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...innerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "encryption_keys",
        disableSave: this.props.encryptionKeyProps.disableSave,
        type: "formInSubForm"
      }
    }));
  }
}
KeyManagementForm.defaultProps = {
  data: {
    use_hs_crypto: false,
    use_data: false,
    name: "",
    resource_group: "",
    authorize_vpc_reader_role: false,
    keys: []
  },
  isModal: false
};
KeyManagementForm.propTypes = {
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    authorize_vpc_reader_role: PropTypes.bool.isRequired,
    keys: PropTypes.array.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  invalidRingCallback: PropTypes.func.isRequired,
  invalidRingText: PropTypes.string.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  encryptionKeyProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired
  }).isRequired
};

const {
  capitalize,
  titleCase,
  kebabCase,
  isIpv4CidrOrAddress,
  validPortRange,
  isNullOrEmptyString,
  contains
} = require("lazy-z");

/** NetworkingRuleForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
class NetworkingRuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleRuleUpdate = this.handleRuleUpdate.bind(this);
    this.handleRuleDelete = this.handleRuleDelete.bind(this);
    this.handleRuleDataUpdate = this.handleRuleDataUpdate.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.shouldDisableSave = this.shouldDisableSave.bind(this);
    buildFormFunctions(this);
  }

  /**
   * Handle input change for a text field
   * @param {String} inputName name of the field to set state
   * @param {event} event
   * @param {boolean=} lowercase set value to lowercase
   */
  handleInput(inputName, event, lowercase) {
    let newValue = lowercase ? event.target.value.toLowerCase() : event.target.value;
    this.setState({
      [inputName]: newValue
    });
  }

  /**
   * Handler function for the rule updates
   * @param {String} inputName name of the field to set state in Rule
   * @param event event
   */
  handleRuleDataUpdate(inputName, event) {
    let value = parseInt(event.target.value) || null;
    this.setState(prevState => ({
      rule: {
        // object that we want to update
        ...prevState.rule,
        // keep all other key-value pairs
        [inputName]: value // update the value of specific key
      }
    }));
  }

  /**
   * update a network rule
   */
  handleRuleUpdate() {
    this.props.onSave(this.state, this.props);
  }

  /**
   * delete a network rule
   */
  handleRuleDelete() {
    this.props.onDelete(this.state, this.props);
  }

  /**
   * toggle delete modal
   */
  toggleDeleteModal() {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  }

  /**
   * Returns true if save should be disabled or if props match state (save disabled)
   * @returns {boolean} if save is disabled
   */
  shouldDisableSave() {
    if (this.props.isModal) {
      this.props.disableModalSubmit(this.state, this.props);
    } else {
      let shouldBeDisabled = this.props.disableSaveCallback(this.state, this.props);
      return shouldBeDisabled;
    }
  }
  render() {
    let ruleName = this.props.isModal ? "new-rule" : this.props.data.name;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      key: "rule-div-" + ruleName,
      className: this.props.hide ? "" : "marginBottomSmall" // add margin bottom small if shown
    }, this.props.isModal !== true && /*#__PURE__*/React.createElement(DeleteModal, {
      name: ruleName,
      modalOpen: this.state.showDeleteModal,
      onModalClose: this.toggleDeleteModal,
      onModalSubmit: this.handleRuleDelete
    }), /*#__PURE__*/React.createElement(DynamicRender, {
      hide: this.props.hide && this.props.isModal === true,
      show: /*#__PURE__*/React.createElement(StatelessToggleForm, {
        key: "rule-name-" + ruleName,
        name: this.props.isModal ? "" : ruleName // do not show name when modal
        ,
        onIconClick: this.props.onToggle,
        toggleFormTitle: true,
        hide: this.props.hide && this.props.isModal !== true,
        hideIcon: this.props.isModal,
        alwaysShowButtons: true,
        buttons: this.props.isModal ? "" : this.props.hide === false ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SaveAddButton, {
          name: ruleName,
          onClick: this.handleRuleUpdate,
          disabled: this.shouldDisableSave()
        }), /*#__PURE__*/React.createElement(DeleteButton, {
          name: ruleName,
          onClick: this.toggleDeleteModal
        })) : /*#__PURE__*/React.createElement(UpDownButtons, {
          name: ruleName,
          handleUp: this.props.handleUp,
          handleDown: this.props.handleDown,
          disableUp: this.props.disableUp,
          disableDown: this.props.disableDown
        })
      }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name + "-rule",
        value: this.state.name,
        onChange: event => this.handleInput("name", event),
        invalidCallback: () => this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true,
        className: "fieldWidthSmaller"
      }), !this.props.isSecurityGroup && /*#__PURE__*/React.createElement(NetworkingRuleSelect, {
        state: this.state,
        name: "action",
        onChange: this.handleInput,
        groups: ["Allow", "Deny"],
        props: this.props
      }), /*#__PURE__*/React.createElement(NetworkingRuleSelect, {
        name: "direction",
        state: this.state,
        onChange: this.handleInput,
        groups: ["Inbound", "Outbound"],
        props: this.props
      }), this.props.isSecurityGroup && /*#__PURE__*/React.createElement(NetworkingRuleTextField, {
        name: "source",
        state: this.state,
        onChange: this.handleInput
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, !this.props.isSecurityGroup && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NetworkingRuleTextField, {
        name: "source",
        state: this.state,
        onChange: this.handleInput
      }), /*#__PURE__*/React.createElement(NetworkingRuleTextField, {
        name: "destination",
        state: this.state,
        onChange: this.handleInput
      })), /*#__PURE__*/React.createElement(IcseSelect, {
        formName: ruleName + "-protocol",
        groups: ["ALL", "TCP", "UDP", "ICMP"],
        value: this.state.ruleProtocol.toUpperCase(),
        labelText: "Protocol",
        name: "ruleProtocol",
        handleInputChange: event => this.handleInput("ruleProtocol", event, true),
        className: "fieldWidthSmaller"
      })), (this.state.ruleProtocol === "tcp" || this.state.ruleProtocol === "udp") && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "port_min",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      }), /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "port_max",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      })), !this.props.isSecurityGroup && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "source_port_min",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      }), /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "source_port_max",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      }))), this.state.ruleProtocol === "icmp" && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "type",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      }), /*#__PURE__*/React.createElement(NetworkingRuleProtocolTextField, {
        name: "code",
        state: this.state,
        onChange: this.handleRuleDataUpdate
      }))))
    })));
  }
}
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
  isModal: PropTypes.bool.isRequired,
  // functions only used when not modal
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  disableDown: PropTypes.bool,
  disableUp: PropTypes.bool,
  handleDown: PropTypes.func,
  handleUp: PropTypes.func,
  disableSaveCallback: PropTypes.func,
  // functions for components
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  hide: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    action: PropTypes.string,
    // not required for sg
    destination: PropTypes.string,
    // not required for sg
    direction: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rule: PropTypes.shape({
      // can be null
      port_min: PropTypes.number,
      port_max: PropTypes.number,
      source_port_min: PropTypes.number,
      source_port_max: PropTypes.number,
      type: PropTypes.number,
      code: PropTypes.number
    }).isRequired,
    source: PropTypes.string.isRequired
  }),
  isSecurityGroup: PropTypes.bool.isRequired
};

/**
 * readability shortcut for nw rules
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 */
const NetworkingRuleTextField = props => {
  return /*#__PURE__*/React.createElement(IcseTextInput, {
    id: `${props.state.name}-nw-${kebabCase(props.name)}-input`,
    field: props.name,
    labelText: titleCase(props.name),
    value: String(props.state[props.name]),
    onChange: e => props.onChange(props.name, e),
    className: "fieldWidthSmaller",
    placeholder: "x.x.x.x",
    invalidText: "Please provide a valid IPV4 IP address or CIDR notation.",
    invalidCallback: () => {
      return isIpv4CidrOrAddress(props.state[props.name]) === false;
    }
  });
};
NetworkingRuleTextField.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * rule protocol text field
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 */
const NetworkingRuleProtocolTextField = props => {
  return /*#__PURE__*/React.createElement(TextInput, {
    id: `${props.state.name}-nw-${kebabCase(props.name)}-input`,
    labelText: titleCase(props.name),
    placeholder: String(props.state.rule[props.name]),
    value: props.state.rule[props.name] || "",
    onChange: e => props.onChange(props.name, e),
    invalid: validPortRange(props.name, props.state.rule[props.name] || -1) === false && isNullOrEmptyString(props.state.rule[props.name]) === false,
    invalidText: contains(["type", "code"], props.name) ? `0 to ${props.name === "type" ? 254 : 255}` : "1 to 65535",
    className: "fieldWidthSmaller"
  });
};
NetworkingRuleProtocolTextField.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.shape({
    rule: PropTypes.shape({}).isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * readability shortcut for nw rules
 * @param {*} props
 * @param {string} props.name field to update
 * @param {Object} props.state parent state
 * @param {Function} props.onChange onchange function
 * @param {Array<string>} props.groups list of groups for select
 */
const NetworkingRuleSelect = props => {
  return /*#__PURE__*/React.createElement(IcseSelect, {
    formName: props.state.name + "-nw-rule-" + props.name,
    name: props.name,
    groups: props.groups,
    value: capitalize(props.state[props.name]),
    labelText: capitalize(props.name),
    handleInputChange: e => props.onChange(props.name, e, true),
    className: "fieldWidthSmaller"
  });
};
NetworkingRuleSelect.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.shape({
    rule: PropTypes.shape({}).isRequired,
    name: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired
};

class NetworkingRulesOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [...this.props.rules],
      collapse: {},
      allCollapsed: false,
      showModal: false
    };
    this.swapArrayElements = this.swapArrayElements.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRuleProtocol = this.getRuleProtocol.bind(this);
    this.getSubRule = this.getSubRule.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rules.length !== this.state.rules.length) {
      this.setState({
        rules: [...this.props.rules]
      }, () => {
        this.collapseAll();
      });
    }
  }
  getRuleProtocol(rule) {
    let protocol = "all";
    // for each possible protocol
    ["icmp", "tcp", "udp"].forEach(field => {
      // set protocol to that field if not all fields are null
      if (allFieldsNull(rule[field]) === false) {
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
  getSubRule(rule) {
    let defaultRule = {
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
      transpose(rule[this.getRuleProtocol(rule)], defaultRule);
    }
    return defaultRule;
  }
  componentDidMount() {
    if (this.state.allCollapsed === false && this.props.expandAll === false) this.collapseAll();
  }
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  /**
   * toggle collapse rule
   * @param {string} ruleName rule name
   */
  toggleCollapse(ruleName) {
    let collapse = this.state.collapse;
    collapse[ruleName] = !containsKeys(this.state.collapse, ruleName) // if rule dies not exist
    ? true // set to true
    : !this.state.collapse[ruleName]; // otherwise set to opposite
    this.setState({
      collapse: collapse
    });
  }

  /**
   * collapse each rule
   */
  collapseAll() {
    let collapse = this.state.collapse;
    this.state.rules.forEach(rule => {
      collapse[rule.name] = true;
    });
    this.setState({
      collapse: collapse,
      allCollapsed: true
    });
  }

  /**
   * Helper function to move items up and down in the list so they can be rendered properly
   * @param {Array} arr
   * @param {number} indexA
   * @param {number} indexB
   */
  swapArrayElements(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

  /**
   * Move the card up
   * @param {number} index
   */
  handleUp(index) {
    let prevRulesState = [...this.state.rules];
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
  handleDown(index) {
    let prevRulesState = [...this.state.rules];
    let maxLen = prevRulesState.length - 1;
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
  handleSubmit(modalData) {
    this.props.onSubmitCallback(modalData, this.props);
    this.toggleModal();
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Rules",
      className: "marginBottomSmall",
      type: "subHeading",
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.hideCreate,
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: this.props.vpc_name,
          type: "add",
          onClick: this.toggleModal
        })
      })
    }), /*#__PURE__*/React.createElement(FormModal, {
      name: "Create a Network Rule",
      show: this.state.showModal,
      onRequestSubmit: this.handleSubmit,
      onRequestClose: this.toggleModal
    }, RenderForm(NetworkingRuleForm, {
      ...this.props,
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
      isSecurityGroup: this.props.isSecurityGroup,
      invalidCallback: this.props.invalidRuleText,
      invalidTextCallback: this.props.invalidRuleTextCallback,
      parent_name: this.props.parent_name,
      disableSave: this.props.disableSaveCallback,
      shouldDisableSubmit: function () {
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
    })), /*#__PURE__*/React.createElement(EmptyResourceTile, {
      name: "Network Rules",
      showIfEmpty: this.state.rules
    }), this.state.rules.map((rule, index) => /*#__PURE__*/React.createElement("div", {
      key: "rule-div-" + rule.name + "-wrapper",
      className: "marginBottomSmall positionRelative " + (this.props.isSecurityGroup ? "formInSubForm" : "subForm")
    }, /*#__PURE__*/React.createElement(NetworkingRuleForm, {
      hide: this.state.collapse[rule.name],
      onToggle: () => this.toggleCollapse(rule.name),
      disableUp: index === 0,
      handleUp: () => this.handleUp(index),
      disableDown: index === this.state.rules.length - 1,
      handleDown: () => this.handleDown(index),
      key: JSON.stringify(rule),
      id: this.props.vpc_name + "-nw-rule-form-" + rule.name,
      invalidCallback: this.props.invalidRuleText,
      invalidTextCallback: this.props.invalidRuleTextCallback,
      data: {
        name: rule.name,
        action: rule.action || null,
        direction: rule.direction,
        source: rule.source,
        destination: rule.destination || null,
        ruleProtocol: this.getRuleProtocol(rule),
        rule: this.getSubRule(rule)
      },
      disableSaveCallback: this.props.disableSaveCallback,
      isSecurityGroup: this.props.isSecurityGroup,
      onSave: this.props.onRuleSave,
      onDelete: this.props.onRuleDelete,
      parent_name: this.props.parent_name,
      innerFormProps: {
        ...this.props
      },
      dev: this.props.dev
    }))));
  }
}
NetworkingRulesOrderCard.defaultProps = {
  rules: [],
  hideCreate: false,
  isSecurityGroup: false,
  expandAll: false
};
NetworkingRulesOrderCard.propTypes = {
  isSecurityGroup: PropTypes.bool.isRequired,
  rules: PropTypes.array.isRequired,
  hideCreate: PropTypes.bool.isRequired,
  expandAll: PropTypes.bool.isRequired,
  disableModalSubmitCallback: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpc_name: PropTypes.string,
  networkRuleOrderDidChange: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  parent_name: PropTypes.string.isRequired
};

/** NetworkAclForm
 * @param {Object} props
 */
class NetworkAclForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.networkRuleOrderDidChange = this.networkRuleOrderDidChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change for a text field
   * @param {event} event
   */
  handleTextInput(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the toggle to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  /**
   * Check if the order of network rules updated - then update state to allow save
   * @param {Array} rules list of rule objects
   */
  networkRuleOrderDidChange(rules) {
    this.props.networkRuleOrderDidChange(this.state, this.props);
    this.setState({
      rules: rules
    }); // update rules state when an update occurs
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleTextInput,
      placeholder: "my-network-acl-name",
      component: "network_acls",
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleTextInput,
      invalid: lib_4(this.state.resource_group),
      invalidText: "Select a Resource Group."
    })), !this.props.isModal &&
    /*#__PURE__*/
    // ability to move rules up and down
    React.createElement(NetworkingRulesOrderCard, _extends({}, this.props, {
      rules: this.state.rules,
      vpc_name: this.props.vpc_name,
      parent_name: this.props.data.name,
      networkRuleOrderDidChange: this.networkRuleOrderDidChange,
      isAclForm: true,
      invalidCallback: this.props.invalidCallback,
      invalidRuleTextCallback: this.props.invalidRuleTextCallback,
      onSubmitCallback: this.props.onSubmitCallback,
      onRuleSave: this.props.onRuleSave,
      onRuleDelete: this.props.onRuleDelete,
      disableModalSubmitCallback: this.props.disableModalSubmitCallback,
      disableSaveCallback: this.props.disableSaveCallback,
      dev: this.props.dev
    })));
  }
}
NetworkAclForm.defaultProps = {
  data: {
    name: "",
    rules: []
  },
  isModal: false
};
NetworkAclForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rules: PropTypes.array,
    resource_group: PropTypes.string
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  networkRuleOrderDidChange: PropTypes.func,
  // can be undefined
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  disableModalSubmitCallback: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired
};

class ObjectStorageBucketForm extends Component {
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
   * handle storage class change and convert to lowercase for value
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-object-storage-bucket-name",
      componentName: this.state.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      helperTextCallback: () => this.props.composedNameCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: this.props.data.name + "-object-storage-bucket-class",
      name: "storage_class",
      groups: ["Standard", "Vault", "Cold", "Smart"],
      value: capitalize$2(this.state.storage_class),
      labelText: "Bucket Class",
      handleInputChange: this.handleStorageClassChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(EndpointSelect, {
      formName: "Object Storage Bucket",
      handleInputChange: this.handleInputChange,
      value: this.state.endpoint,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: this.props.data.name + "-object-storage-bucket-key",
      name: "kms_key",
      groups: this.props.encryptionKeyFilter ? this.props.encryptionKeyFilter(this.state, this.props) : this.props.encryptionKeys,
      value: this.state.kms_key,
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
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
    kms_key: "",
    endpoint: "public"
  },
  encryptionKeys: []
};
ObjectStorageBucketForm.propTypes = {
  data: PropTypes.shape({
    force_delete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    storage_class: PropTypes.string.isRequired,
    kms_key: PropTypes.string,
    endpoint: PropTypes.string.isRequired
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  encryptionKeyFilter: PropTypes.func,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired
};

class ObjectStorageKeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name,
      role: this.props.data.role || "Writer",
      enable_hmac: this.props.data.enable_hmac,
      use_random_suffix: this.props.data.use_random_suffix
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * Handler for toggle
   * @param {String} name specifies the name of the state value you wish to change
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("enable_hmac", this.state));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    // composed id
    let composedId = `key-form-${this.props.data.name ? this.props.data.name : "new-key"}`;
    let inputSize = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      componentProps: this.props,
      placeholder: "my-cos-key-name",
      className: inputSize,
      helperTextCallback: () => this.props.composedNameCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "role",
      groups: ["Object Writer", "Object Reader", "Content Reader", "Reader", "Writer", "Manager"],
      value: this.state.role,
      labelText: "Role",
      handleInputChange: this.handleInputChange,
      className: inputSize,
      formName: this.props.data.name + "-object-storage-key-role"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        link: "https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-uhc-hmac-credentials-main",
        content: "HMAC (hash-based message authentication code) is required for Teleport VSI instances.",
        alignModal: "bottom"
      },
      id: composedId + "cos-instance-key-hmac",
      labelText: "Enable HMAC",
      defaultToggled: this.props.forceEnableHmac,
      onToggle: this.handleToggle,
      isModal: this.props.isModal,
      disabled: this.props.forceEnableHmac
    })));
  }
}
ObjectStorageKeyForm.defaultProps = {
  data: {
    name: "",
    enable_hmac: false
  },
  forceEnableHmac: false
};
ObjectStorageKeyForm.propTypes = {
  isModal: PropTypes.bool,
  data: PropTypes.shape({
    enable_hmac: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string
  }),
  shouldDisableSave: PropTypes.func,
  shouldDisableSubmit: PropTypes.func,
  forceEnableHmac: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired
};

/**
 * Object storage
 */
class ObjectStorageInstancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleInputChange(name, value) {
    let inst = {
      ...this.state
    };
    inst[name] = value;
    this.setState({
      ...inst
    });
  }
  render() {
    let composedId = `object-storage-form-${this.props.data.name}-`;
    let bucketInnerFormProps = {
      invalidCallback: this.props.invalidBucketCallback,
      invalidTextCallback: this.props.invalidBucketTextCallback,
      composedNameCallback: this.props.composedNameCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name
    };
    transpose({
      ...this.props.bucketProps
    }, bucketInnerFormProps);
    let keyInnerFormProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      composedNameCallback: this.props.composedNameCallback,
      arrayParentName: this.props.data.name
    };
    transpose({
      ...this.props.keyProps
    }, keyInnerFormProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance.",
        alignModal: "bottom"
      },
      id: composedId + "use-data",
      toggleFieldName: "use_data",
      labelText: "Use Existing Instance",
      defaultToggled: this.state.use_data,
      onToggle: this.handleInputChange,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments.",
        alignModal: "bottom"
      },
      id: composedId + "random-suffix",
      labelText: "Append Random Suffix to Names",
      toggleFieldName: "random_suffix",
      defaultToggled: this.state.random_suffix,
      onToggle: this.handleInputChange,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-object-storage-kms",
      name: "kms",
      labelText: "Key Management Instance",
      groups: this.props.kmsList,
      value: this.state.kms,
      handleInputChange: event => this.handleInputChange("kms", event.target.value)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-object-storage-name",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: event => this.handleInputChange("name", event.target.value),
      helperTextCallback: () => this.props.composedNameCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-object-storage-rg",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: event => this.handleInputChange("resource_group", event.target.value)
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Service Credentials",
      subHeading: true,
      tooltip: {
        content: "A service credential allows for a service instance to connect to Object Storage.",
        link: "https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-service-credentials"
      },
      addText: "Create a Service Credential",
      arrayData: this.props.data.keys,
      innerForm: ObjectStorageKeyForm,
      disableSave: this.props.keyProps.disableSave,
      onDelete: this.props.keyProps.onDelete,
      onSave: this.props.keyProps.onSave,
      onSubmit: this.props.keyProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...keyInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "cos_keys",
        disableSave: this.props.keyProps.disableSave,
        type: "formInSubForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Buckets",
      subHeading: true,
      addText: "Create a Bucket",
      arrayData: this.props.data.buckets,
      innerForm: ObjectStorageBucketForm,
      disableSave: this.props.bucketProps.disableSave,
      onDelete: this.props.bucketProps.onDelete,
      onSave: this.props.bucketProps.onSave,
      onSubmit: this.props.bucketProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...bucketInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "buckets",
        disableSave: this.props.bucketProps.disableSave,
        type: "formInSubForm"
      }
    })));
  }
}
ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    use_random_suffix: true
  },
  resourceGroups: []
};
ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes.bool,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    use_data: PropTypes.bool.isRequired,
    resource_group: PropTypes.string,
    use_random_suffix: PropTypes.bool.isRequired
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired
};

/** Resource Groups
 * @param {Object} props
 */
class ResourceGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }
  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    // Turn off the use_prefix toggle when not using data.
    if (name === "use_data" && this.state.use_data === false) {
      this.setState({
        [name]: !this.state[name],
        use_prefix: false
      });
    } else {
      this.setState({
        [name]: !this.state[name]
      });
    }
  }

  /**
   * Handle input change for a text field
   * @param {event} event
   */
  handleTextInput(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    let composedId = `resource-group-${this.props.data.name}-`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "If true, get data from an existing resource group",
        alignModal: "bottom"
      },
      labelText: "Use Existing Instance",
      toggleFieldName: this.props.toggleName,
      defaultToggled: this.state.use_data,
      id: composedId + "-use-data-toggle",
      onToggle: () => this.handleToggle("use_data"),
      isModal: this.props.isModal
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      componentName: "resource_groups",
      value: this.state.name,
      onChange: this.handleTextInput,
      useData: this.state.use_data || this.state.use_prefix === false,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    }), this.state.use_data === false && /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Append your environment prefix to the beginning of the resource group.",
        alignModal: "bottom"
      },
      labelText: "Use Prefix",
      defaultToggled: this.state.use_prefix,
      id: composedId + "-use-prefix-toggle",
      onToggle: this.handleToggle,
      isModal: this.props.isModal
    })));
  }
}
ResourceGroupForm.defaultProps = {
  data: {
    use_data: false,
    name: "",
    use_prefix: true
  },
  toggleName: "use_data",
  isModal: false
};
ResourceGroupForm.propTypes = {
  data: PropTypes.shape({
    use_data: PropTypes.bool,
    name: PropTypes.string.isRequired,
    use_prefix: PropTypes.bool
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired
};

const sccRegions = [{
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
class SccForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.state.enable = true;
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleLocationChange(selectedItem) {
    this.setState({
      location: selectedItem.selectedItem.label
    });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   * @param {bool} setDefaults set default values, default is false
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "scc_group_id",
      tooltip: {
        content: "The group ID for Security and Compliance Center.",
        align: "bottom-left"
      },
      componentName: "SCC",
      field: "id",
      labelText: "Group ID",
      value: this.state.id,
      onChange: this.handleInputChange,
      maxLength: 255,
      invalid: lib_10("id", this.state.id, this.props.descriptionRegex).invalid,
      invalidText: lib_10("id", this.state.id, this.props.descriptionRegex).invalidText
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "scc_passphrase",
      tooltip: {
        content: "Security and Compliance Center group passphrase.",
        align: "bottom-left"
      },
      labelText: "Group Passphrase",
      field: "passphrase",
      value: this.state.passphrase,
      onChange: this.handleInputChange,
      componentName: "SCC",
      maxLength: 1000,
      invalid: lib_10("passphrase", this.state.passphrase, this.props.descriptionRegex).invalid,
      invalidText: lib_10("passphrase", this.state.passphrase, this.props.descriptionRegex).invalidText
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-scc-name",
      componentName: "scc-cred",
      labelText: "Credential Name",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "scc_credential_description",
      tooltip: {
        content: "A detailed description of the credential to be created."
      },
      componentName: "SCC",
      field: "credential_description",
      labelText: "Credential Description",
      value: this.state.credential_description,
      onChange: this.handleInputChange,
      maxLength: 255,
      invalid: lib_10("credential_description", this.state.credential_description, this.props.descriptionRegex).invalid,
      invalidText: lib_10("credential_description", this.state.credential_description, this.props.descriptionRegex).invalidText
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
      ariaLabel: "Dropdown",
      label: "Region",
      id: "location",
      items: sccRegions,
      titleText: "Region",
      initialSelectedItem: this.state.location,
      onChange: selectedItem => {
        this.handleLocationChange(selectedItem);
      },
      className: "leftTextAlign fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Determines whether the collector endpoint is accessible on a public network."
      },
      labelText: "Is Public",
      defaultToggled: this.state.is_public,
      className: "leftTextAlign",
      onToggle: this.handleToggle,
      id: "scc-is-public"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
SccForm.defaultProps = {
  data: {
    enable: false
  },
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes.shape({
    enable: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location: PropTypes.string,
    scope_description: PropTypes.string,
    passphrase: PropTypes.string,
    credential_description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  descriptionRegex: PropTypes.instanceOf(RegExp).isRequired
};

/**
 * SecretsManagerForm
 * @param {Object} props
 */
class SecretsManagerForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: "Secrets Manager",
      component: "secrets_manager",
      value: this.state.name,
      onChange: this.handleInputChange,
      componentProps: this.props,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Secrets Manager",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      name: "resource_group",
      labelText: "Resource Group"
    })), /*#__PURE__*/React.createElement("div", {
      className: "fieldWidth"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      value: this.state.encryption_key,
      groups: this.props.encryptionKeys,
      formName: "Secrets Manager",
      name: "encryption_key",
      className: "fieldWidth",
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange
    })));
  }
}
SecretsManagerForm.defaultProps = {
  data: {
    name: "",
    resource_group: null,
    encryption_key: null
  }
};
SecretsManagerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    encryption_key: PropTypes.string
  }).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * security group form
 */
class SecurityGroupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      show: false
    };
    if (this.props.isModal) this.state.rules = [];
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.networkRuleOrderDidChange = this.networkRuleOrderDidChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  handleShowToggle() {
    this.setState(this.toggleStateBoolean("show", this.state));
  }

  /**
   * Check if the order of network rules updated - then update state to allow save
   * @param {Array} rules list of rule objects
   */
  networkRuleOrderDidChange(rules) {
    this.props.networkRuleOrderDidChange(this.state, this.props);
    this.setState({
      rules: rules
    }); // if the order of the rules changed, update rules state
  }

  render() {
    let composedId = `security-group-form-${this.props.data.name}`;
    let className = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      componentName: "security_groups",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      className: className,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "security_Group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: className
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "security_Group",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      className: className
    })), !this.props.isModal && /*#__PURE__*/React.createElement(NetworkingRulesOrderCard, {
      key: JSON.stringify(this.props.rules),
      rules: this.props.data.rules,
      vpc_name: this.state.vpc,
      parent_name: this.props.data.name,
      isSecurityGroup: true,
      networkRuleOrderDidChange: this.networkRuleOrderDidChange,
      invalidCallback: this.props.invalidCallback,
      invalidTextCallback: this.props.invalidTextCallback,
      onSubmitCallback: this.props.onSubmitCallback,
      onRuleSave: this.props.onRuleSave,
      onRuleDelete: this.props.onRuleDelete,
      disableModalSubmitCallback: this.props.disableModalSubmitCallback,
      disableSaveCallback: this.props.disableSaveCallback,
      invalidRuleTextCallback: this.props.invalidRuleTextCallback,
      invalidRuleText: this.props.invalidRuleText
    }));
  }
}
SecurityGroupForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc: "",
    rules: []
  },
  isModal: false
};
SecurityGroupForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    resource_group: PropTypes.string,
    rules: PropTypes.array
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  networkRuleOrderDidChange: PropTypes.func,
  // can be undefined
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  disableModalSubmitCallback: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * ssh key form
 */
class SshKeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState({
      use_data: !this.state.use_data
    });
  }

  /**
   * handle other input events
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmallest",
      id: this.state.name + "-use-existing-instance"
    }), /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: this.props.data.name + "-ssh-key-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${kebabCase$2(this.props.data.name)}-ssh-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      labelText: "Resource Group"
    })), !this.state.use_data && /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "fieldWidthBigger leftTextAlign"
    }, /*#__PURE__*/React.createElement(TextInput.PasswordInput, {
      labelText: "Public Key",
      name: "public_key",
      id: this.props.data.name + "-ssh-public-key",
      value: this.state.public_key,
      onChange: this.handleInputChange,
      invalid: this.props.invalidKeyCallback(this.state, this.props).invalid,
      invalidText: this.props.invalidKeyCallback(this.state, this.props).invalidText
    }))));
  }
}
SshKeyForm.defaultProps = {
  data: {
    name: "",
    public_key: "",
    use_data: false,
    resource_group: ""
  },
  resourceGroups: [],
  isModal: false
};
SshKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    public_key: PropTypes.string,
    use_data: PropTypes.bool
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired
};

/**
 * create a tile for each subnet
 * @param {Object} props
 * @returns {SubnetTile} react component
 */
class SubnetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.cidrIsValid = this.cidrIsValid.bind(this);
  }
  handleChange(event) {
    let {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }
  componentDidUpdate() {
    this.props.componentDidUpdateCallback(this.state, this.props);
  }
  handleSave() {
    this.props.onSave(this.state, this.props);
  }
  handleToggle() {
    this.setState({
      public_gateway: !this.state.public_gateway
    });
  }

  /**
   * check if cidr valid
   * @param {string} cidr 
   * @returns {boolean} true if not valid
   */
  cidrIsValid(cidr) {
    return isIpv4CidrOrAddress$1(cidr) === false || !contains$2(cidr, "/");
  }
  render() {
    return /*#__PURE__*/React.createElement(Tile, {
      key: this.props.vpc_name + "-subnets-" + this.props.data.name,
      className: "marginRightSubnetTile fieldWidth subForm"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.props.data.name,
      type: "subHeading",
      className: "marginBottomSmall",
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.isModal,
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: this.props.data.name,
          disabled: this.props.disableSaveCallback(this.state, this.props),
          onClick: this.handleSave,
          noDeleteButton: true
        })
      })
    }), this.props.advanced && /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseNameInput, {
      className: "fieldWidthSmaller",
      id: this.props.data.name + "-subnet-name",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleChange,
      disabled: this.props.readOnly,
      invalid: this.props.readOnly ? false : this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.readOnly ? "" : this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(TextInput, {
      id: this.props.data.name + "-cidr",
      name: "cidr",
      invalidText: this.props.invalidCidrText ? this.props.invalidCidrText(this.state, this.props) : "Invalid subnet CIDR.",
      labelText: "Subnet CIDR",
      value: this.state.cidr,
      className: "fieldWidthSmaller",
      readOnly: this.props.advanced === false || this.props.readOnly,
      onChange: this.handleChange,
      invalid: this.props.invalidCidr ? this.props.invalidCidr(this.state, this.props) || this.cidrIsValid(this.state.cidr) : this.cidrIsValid(this.state.cidr)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "acl_name",
      formName: `${this.props.data.name}-subnet-acl`,
      labelText: "Network ACL",
      groups: this.props.networkAcls,
      value: this.state.network_acl,
      handleInputChange: this.handleChange,
      className: "fieldWidthSmaller",
      disabled: this.props.isModal || this.props.readOnly,
      invalid: isNullOrEmptyString$3(this.state.network_acl),
      invalidText: "Select a Network ACL."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "A Public Gateway must be enabled in this zone to use. To enable public gateways, see the VPC page."
      },
      id: "new-subnet-public-gateway-" + this.props.data.name,
      labelText: "Use Public Gateway",
      toggleFieldName: "public_gateway",
      defaultToggled: this.state.public_gateway,
      onToggle: this.handleToggle,
      disabled: this.props.isModal || this.props.readOnly || this.props.shouldDisableGatewayToggle(this.state, this.props)
    })));
  }
}
SubnetForm.defaultProps = {
  isModal: false,
  advanced: false,
  readOnly: false
};
SubnetForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  vpc_name: PropTypes.string,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cidr: PropTypes.string.isRequired,
    public_gateway: PropTypes.bool,
    network_acl: PropTypes.string.isRequired
  }).isRequired,
  disableSaveCallback: PropTypes.func,
  shouldDisableGatewayToggle: PropTypes.func,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  componentDidUpdateCallback: PropTypes.func,
  // not required for undefined subnets
  onSave: PropTypes.func,
  advanced: PropTypes.bool.isRequired,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  readOnly: PropTypes.bool.isRequired
};

class SubnetTileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subnetData: {}
    };
    if (!this.props.isModal) {
      this.props.data.forEach(subnet => {
        this.state.subnetData[subnet.name] = true;
      });
    }
    this.shouldDisableGatewayToggle = this.shouldDisableGatewayToggle.bind(this);
    this.childSubnetHasChanged = this.childSubnetHasChanged.bind(this);
  }

  /**
   * check if child subnet has changed
   * @param {Object} stateData
   * @param {string} stateData.name
   * @param {Object} componentProps
   * @param {Object} componentProps.data
   */
  childSubnetHasChanged(stateData, componentProps) {
    let name = stateData.name;
    if (this.state.subnetData[name] && !deepEqual(stateData, componentProps.data)) {
      let subnetData = {
        ...this.state.subnetData
      };
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
  shouldDisableGatewayToggle(stateData) {
    let zone = parseIntFromZone(stateData.name);
    if (contains$2(this.props.enabledPublicGateways, zone)) {
      return false;
    } else return true;
  }
  render() {
    let subnetMap = [...this.props.data];
    return /*#__PURE__*/React.createElement(IcseSubForm, {
      id: `subnet-tile-${this.props.tier}-${this.props.vpc_name}`,
      formInSubForm: true,
      className: "popoverLeft tileFormMargin"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Subnets",
      type: "subHeading",
      className: "marginBottomSmall"
    }), /*#__PURE__*/React.createElement("div", {
      className: "displayFlex"
    }, subnetMap.map((subnet, index) => {
      if (this.props.data.advanced && !contains$2(this.props.select_zones, index + 1)) {
        return /*#__PURE__*/React.createElement(SubnetForm, {
          key: `${subnet.name}-tile-${this.props.tier}-${this.props.vpc_name}-${JSON.stringify(subnet)}`,
          vpc_name: this.props.vpc_name,
          data: {
            name: "No Subnet in Zone " + (index + 1),
            cidr: "-",
            network_acl: "-"
          },
          onSave: this.props.onSave,
          advanced: true,
          readOnly: true,
          networkAcls: [],
          disableSaveCallback: this.props.disableSaveCallback,
          componentDidUpdateCallback: this.childSubnetHasChanged
        });
      } else return /*#__PURE__*/React.createElement(SubnetForm, {
        key: `${subnet.name}-tile-${this.props.tier}-${this.props.vpc_name}-${JSON.stringify(subnet)}`,
        vpc_name: this.props.vpc_name,
        data: subnet,
        onSave: this.props.onSave,
        isModal: this.props.isModal || this.props.readOnly,
        componentDidUpdateCallback: this.childSubnetHasChanged,
        networkAcls: this.props.networkAcls,
        disableSaveCallback: this.props.disableSaveCallback,
        shouldDisableGatewayToggle: this.shouldDisableGatewayToggle,
        advanced: this.props.advanced,
        invalidCidr: this.props.invalidCidr,
        invalidCidrText: this.props.invalidCidrText,
        invalidCallback: this.props.invalidCallback,
        invalidTextCallback: this.props.invalidTextCallback
      });
    })));
  }
}
SubnetTileForm.defaultProps = {
  isModal: false,
  readOnly: false,
  advanced: false
};
SubnetTileForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  disableSaveCallback: PropTypes.func,
  vpc_name: PropTypes.string,
  tier: PropTypes.string.isRequired,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cidr: PropTypes.string.isRequired,
    public_gateway: PropTypes.bool,
    network_acl: PropTypes.string
  })),
  readOnly: PropTypes.bool.isRequired,
  enabledPublicGateways: PropTypes.arrayOf(PropTypes.number).isRequired,
  advanced: PropTypes.bool.isRequired,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  select_zones: PropTypes.array
};

class SubnetTierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!this.props.data.advanced) {
      let zones = buildNumberDropdownList(this.state.zones, 1);
      this.state.select_zones = [];
      zones.forEach(zone => this.state.select_zones.push(Number(zone)));
    }
    this.state.advancedSave = false;
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.shouldDisableSubmit = this.shouldDisableSubmit.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.onSubnetSave = this.onSubnetSave.bind(this);
    this.handleSelectZones = this.handleSelectZones.bind(this);
    this.parseZoneStrings = this.parseZoneStrings.bind(this);
  }

  /**
   * get list of strings from zone
   * @returns {Array<string>} stringified zones
   */
  parseZoneStrings() {
    let stringZones = [];
    this.state.select_zones.forEach(zone => {
      stringZones.push(String(zone));
    });
    return stringZones;
  }

  /**
   * Handle select zones
   * @param {event} event
   */
  handleSelectZones(event) {
    let items = [];
    event.selectedItems.forEach(item => {
      items.push(Number(item));
    });
    this.setState({
      select_zones: items
    });
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleChange(event) {
    let {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * handle toggle
   */
  handleToggle(name) {
    let nextState = {
      ...this.state
    };
    nextState[name] = !this.state[name];
    if (name === "advanced" && nextState[name] === true) {
      nextState.select_zones = [];
      [1, 2, 3].forEach(zone => nextState.select_zones.push(zone));
    }
    this.setState(nextState);
  }
  /**
   * toggle delete modal
   */
  toggleDeleteModal() {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal
    });
  }

  /**
   * handle hide/show form data
   */
  handleShowToggle() {
    if (this.props.propsMatchState(this.state, this.props) === false && this.state.hide === false && !this.state.showUnsavedChangesModal) {
      this.setState({
        showUnsavedChangesModal: true
      });
    } else {
      this.setState({
        hide: !this.state.hide,
        showUnsavedChangesModal: false
      });
    }
  }
  onSave() {
    if (this.state.advanced && !this.state.advancedSave && !this.props.advanced) {
      this.setState({
        advancedSave: true
      });
    } else {
      let noToggleState = {
        ...this.state
      };
      delete noToggleState.hide;
      delete noToggleState.showUnsavedChangesModal;
      delete noToggleState.advancedSave;
      this.setState({
        advancedSave: false
      }, () => {
        this.props.onSave(noToggleState, this.props);
      });
    }
  }
  onSubnetSave(stateData, componentProps) {
    this.props.onSubnetSave(stateData, componentProps);
  }
  onDelete() {
    this.props.onDelete(this.state, this.props);
  }
  shouldDisableSubmit() {
    if (this.props.isModal) {
      if (this.props.shouldDisableSubmit(this.state, this.props) === false) this.props.enableModal();else this.props.disableModal();
    }
  }
  componentDidUpdate() {
    this.shouldDisableSubmit();
  }
  componentDidMount() {
    this.shouldDisableSubmit();
  }
  render() {
    let composedId = `${this.props.vpc_name}-tier-${this.props.data.name === "" ? "new-subnet-tier" : this.props.data.name}`;
    let formName = this.props.data.name + "-subnet-tier";
    let tierName = lib_12(this.props.data.name);
    return /*#__PURE__*/React.createElement(IcseSubForm, {
      formInSubForm: true,
      id: composedId,
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(DeleteModal, {
      name: tierName,
      modalOpen: this.state.showDeleteModal,
      onModalClose: this.toggleDeleteModal,
      onModalSubmit: this.onDelete,
      useDefaultUnsavedMessage: false
    }), /*#__PURE__*/React.createElement(UnsavedChangesModal, {
      name: this.props.data.name + " Subnet Tier",
      modalOpen: this.state.showUnsavedChangesModal,
      onModalSubmit: this.handleShowToggle,
      onModalClose: () => {
        this.setState({
          showUnsavedChangesModal: false
        });
      }
    }), /*#__PURE__*/React.createElement(IcseModal, {
      id: this.props.data.name + "-avanced-save",
      name: "Enable Advanced Configuration",
      heading: "Enable Advanced Configuration",
      open: this.state.advancedSave,
      onRequestClose: () => {
        this.setState({
          advancedSave: false
        });
      },
      onRequestSubmit: this.onSave,
      primaryButtonText: "Save as Advanced",
      danger: true
    }, /*#__PURE__*/React.createElement("span", null, "You are about to set ", this.props.data.name, " subnet tier to use advanced configuration. This will allow the use of custom CIDR blocks and individual subnet names.", " ", /*#__PURE__*/React.createElement("strong", null, "This cannot be undone."))), /*#__PURE__*/React.createElement(StatelessToggleForm, {
      hideTitle: this.props.isModal === true,
      hide: this.state.hide,
      name: tierName,
      onIconClick: this.handleShowToggle,
      toggleFormTitle: true,
      buttons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SaveAddButton, {
        name: this.props.data.name,
        onClick: this.onSave,
        noDeleteButton: this.props.noDeleteButton,
        disabled: this.props.shouldDisableSave(this.state, this.props)
      }), /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.noDeleteButton,
        show: /*#__PURE__*/React.createElement(DeleteButton, {
          name: tierName,
          onClick: this.toggleDeleteModal
        })
      }))
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.isModal ? "new-tier-name" : this.props.data.name + "-tier-name",
      value: this.state.name,
      componentName: formName,
      onChange: this.handleChange,
      className: "fieldWidthSmaller",
      readOnly: this.props.readOnly,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    }), this.state.advanced || this.props.data.advanced ? /*#__PURE__*/React.createElement(IcseMultiSelect, {
      id: this.props.data.name + "-subnet-zones",
      className: "fieldWidthSmaller",
      titleText: "Zones",
      invalid: this.state.select_zones.length === 0,
      invalidText: "Select at least one zone",
      items: ["1", "2", "3"],
      initialSelectedItems: this.parseZoneStrings(),
      onChange: this.handleSelectZones
    }) : /*#__PURE__*/React.createElement(IcseNumberSelect, {
      max: 3,
      value: this.state.zones,
      labelText: "Subnet Tier Zones",
      name: "zones",
      handleInputChange: this.handleChange,
      className: "fieldWidthSmaller",
      invalid: this.state.zones === 0,
      invalidText: "At least one zone must be selected.",
      formName: formName
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Enable advanced subnet configuration such as custom CIDR blocks"
      },
      id: composedId + "-advanced",
      labelText: "Advanced Configuration",
      defaultToggled: this.state.advanced,
      onToggle: () => this.handleToggle("advanced"),
      className: "fieldWidthSmaller",
      disabled: this.props.data.advanced
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
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
      formName: formName,
      disabled: this.state.advanced
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: this.props.enabledPublicGateways.length === 0 ? "This VPC has no public gateways enabled. To add public gateways, return to the VPC page." : "Changing this field will overwrite existing Public Gateway changes to subnets in this data."
      },
      id: composedId + "-public-gateway",
      labelText: "Use Public Gateways",
      defaultToggled: this.state.addPublicGateway,
      onToggle: () => this.handleToggle("addPublicGateway"),
      isModal: this.props.isModal,
      disabled: this.state.advanced || this.props.data.advanced || this.props.enabledPublicGateways.length === 0,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(SubnetTileForm, {
      tier: this.props.data.name,
      vpc_name: this.props.vpc_name,
      onSave: this.onSubnetSave,
      isModal: this.props.isModal,
      data: this.props.subnetListCallback(this.state, this.props),
      key: JSON.stringify(this.state.select_zones) + this.state.zones,
      enabledPublicGateways: this.props.enabledPublicGateways,
      networkAcls: this.props.networkAcls,
      disableSaveCallback: this.props.disableSubnetSaveCallback,
      advanced: this.props.data.advanced,
      invalidCidr: this.props.invalidCidr,
      invalidCidrText: this.props.invalidCidrText,
      invalidCallback: this.props.invalidSubnetCallback,
      invalidTextCallback: this.props.invalidSubnetTextCallback,
      select_zones: this.state.select_zones
    }))));
  }
}
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
  data: PropTypes.shape({
    hide: PropTypes.bool,
    name: PropTypes.string.isRequired,
    zones: PropTypes.number,
    networkAcl: PropTypes.string,
    addPublicGateway: PropTypes.bool
  }),
  // save and delete functions can be null when form rendered as modal
  onSave: PropTypes.func,
  onSubnetSave: PropTypes.func,
  onDelete: PropTypes.func,
  disableSubnetSaveCallback: PropTypes.func,
  // can be null when modal
  shouldDisableSave: PropTypes.func,
  shouldDisableSubmit: PropTypes.func,
  // can be null when not modal
  noDeleteButton: PropTypes.bool,
  // can be null when modal
  isModal: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  enabledPublicGateways: PropTypes.arrayOf(PropTypes.number).isRequired,
  hide: PropTypes.bool.isRequired,
  vpc_name: PropTypes.string,
  subnetListCallback: PropTypes.func.isRequired,
  enableModal: PropTypes.func,
  disableModal: PropTypes.func,
  propsMatchState: PropTypes.func,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidSubnetCallback: PropTypes.func,
  invalidSubnetTextCallback: PropTypes.func
};

const emailRegex = /^[\w-_\.]+@([\w-_]+\.)+[\w]{1,4}$/g;
class TeleportClaimToRoleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.data.email,
      roles: this.props.data.roles
    };
    this.onChangeTextInput = this.onChangeTextInput.bind(this);
    buildFormFunctions(this);
  }

  /**
   *
   * @param {String} name specifies name of state value to change
   * @param {String} value value to set it to
   */
  onChangeTextInput(name, value) {
    if (name === "roles") {
      this.setState({
        [name]: [value]
      });
    } else this.setState({
      [name]: value
    });
  }
  render() {
    let composedId = `teleport-claim-form-${this.props.data.email}`;
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-email",
      componentName: "teleport-claim",
      field: "email",
      invalid: !this.state.email.match(emailRegex),
      value: this.state.email,
      onChange: event => this.onChangeTextInput("email", event.target.value),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "roles",
      componentName: "teleport-claim",
      field: "roles",
      value: this.state.roles[0] || "",
      onChange: event => this.onChangeTextInput("roles", event.target.value),
      invalid: this.props.invalidRolesCallback(this.state),
      className: "fieldWidth"
    }));
  }
}
TeleportClaimToRoleForm.defaultProps = {
  data: {
    email: "",
    roles: []
  }
};
TeleportClaimToRoleForm.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string.isRequired,
    roles: PropTypes.array.isRequired
  }).isRequired
};

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCRNs = this.handleCRNs.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
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

  /**
   * Handle vpc selection
   * @param {event} event
   */
  handleVpcSelect(event) {
    let connections = [];
    event.forEach(vpc => {
      connections.push({
        tgw: this.state.name,
        vpc: vpc
      });
    });
    this.setState({
      connections: connections
    });
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Handle crn input
   * @param {event} event
   */
  handleCRNs(event) {
    let crnList = event.target.value ? event.target.value.replace(/\s\s+/g, "") // replace extra spaces
    .replace(/,(?=,)/g, "") // prevent null tags from
    .replace(/[^\w,-:]/g, "").split(",") : [];
    this.setState({
      crns: crnList
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      onChange: this.handleInputChange,
      componentName: "Transit Gateway",
      field: "name",
      value: this.state.name,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      id: this.state.name + "-tg-name"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Transit Gateway",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      id: this.state.name + "-resource_group",
      name: "resource_group",
      labelText: "Resource Group"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Global Routing",
      toggleFieldName: "global",
      id: this.state.name + "-tg-global",
      onToggle: this.handleToggle,
      defaultToggled: this.state.global,
      tooltip: {
        align: "right",
        content: "Must be enabled in order to connect your IBM Cloud and on-premises networks in all IBM Cloud multizone regions."
      }
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Connections",
      type: "subHeading"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(VpcListMultiSelect, {
      id: this.state.name + "-tg-vpc-multiselect",
      titleText: "Connected VPCs",
      initialSelectedItems: splat$1(this.state.connections, "vpc"),
      vpcList: this.props.vpcList,
      onChange: this.handleVpcSelect,
      invalid: this.state.connections.length === 0,
      invalidText: "At least one VPC must be connected"
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Additional connections",
      type: "section"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      className: "textInputWide",
      id: "crns",
      labelText: "Add a new connection from any region in the account",
      value: this.state.crns === undefined ? "" : String(this.state.crns),
      onChange: this.handleCRNs,
      invalid: lib_13(this.state.crns).invalid,
      invalidText: lib_13(this.state.crns).invalidText,
      helperText: "Enter a comma separated list of CRNs",
      placeholder: "crn:v1:bluemix..."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement("div", {
      className: "marginBottomSmall textInputWide"
    }, this.state.crns !== undefined && this.state.crns.length > 0 && this.state.crns.map((crn, i) => /*#__PURE__*/React.createElement(Tag, {
      key: "crn" + i,
      size: "md",
      type: "green"
    }, crn)))));
  }
}
TransitGatewayForm.defaultProps = {
  data: {
    global: true,
    connections: [],
    resource_group: "",
    name: "",
    crns: []
  },
  vpcList: [],
  resourceGroups: []
};
TransitGatewayForm.propTypes = {
  data: PropTypes.shape({
    global: PropTypes.bool.isRequired,
    connections: PropTypes.array.isRequired,
    resource_group: PropTypes.string,
    name: PropTypes.string,
    crns: PropTypes.array
  }),
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

const nameFields = ["default_network_acl_name", "default_routing_table_name", "default_security_group_name"];
class VpcNetworkForm extends React.Component {
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
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
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

  /**
   * handle change of public gateway by zone
   * @param {string} zone zone-1, zone-2, or zone-3
   */
  handPgwToggle(zone) {
    let vpc = {
      ...this.state
    };
    let currentGw = [...this.state.publicGateways]; // new array
    let zoneNumber = parseIntFromZone(zone);
    // check if zone is already present
    if (contains$3(currentGw, zoneNumber)) {
      let index = currentGw.indexOf(zoneNumber);
      currentGw.splice(index, 1);
    } else {
      currentGw.push(zoneNumber);
    }
    vpc.publicGateways = currentGw;
    this.setState({
      ...vpc
    });
  }
  render() {
    let composedId = `${this.props.data.name}-vpc-form`;
    let classNameModalCheck = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.resource_group),
      invalidText: "Select a Resource Group.",
      className: classNameModalCheck
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Flow Logs Bucket Name",
      name: "bucket",
      formName: this.props.data.name + "-vpc",
      groups: this.props.cosBuckets,
      value: this.state.bucket || "",
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.bucket),
      invalidText: "Select a Bucket.",
      className: classNameModalCheck
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "VPC Options",
      type: "subHeading"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-classic-access",
      labelText: "Classic Infrastructure Access",
      toggleFieldName: "classic_access",
      defaultToggled: this.state.classic_access,
      onToggle: this.handleToggle,
      disabled: this.props.disableManualPrefixToggle,
      className: classNameModalCheck + " leftTextAlign"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, nameFields.map(field => {
      return /*#__PURE__*/React.createElement("div", {
        className: "fitContent",
        key: this.props.data.name + "-" + kebabCase$2(field) + "-div"
      }, /*#__PURE__*/React.createElement(IcseTextInput, {
        id: composedId + "-" + field,
        componentName: "VPC Network",
        field: field,
        labelText: titleCase$1(field),
        value: this.state[field],
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(field, this.state, this.props),
        invalidText: this.props.invalidTextCallback(field, this.state, this.props),
        className: classNameModalCheck
      }));
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Public Gateways",
      type: "subHeading",
      noLabelText: true,
      tooltip: {
        content: "Public Gateways allow for all resources in a zone to communicate with the public internet. Public Gateways are not needed for subnets where a VPN gateway is created."
      }
    }), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, ["zone-1", "zone-2", "zone-3"].map(zone => /*#__PURE__*/React.createElement(IcseToggle, {
      key: this.props.data.name + "-gateway-toggle-" + zone,
      id: this.props.data.name + "-pgw-" + zone,
      labelText: "Create in Zone " + parseIntFromZone(zone),
      defaultToggled: this.state.publicGateways.indexOf(parseIntFromZone(zone)) !== -1,
      onToggle: () => this.handPgwToggle(zone),
      className: classNameModalCheck + " leftTextAlign"
    }))));
  }
}
VpcNetworkForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    bucket: "",
    default_network_acl_name: "",
    default_routing_table_name: "",
    default_security_group_name: "",
    classic_access: false,
    manual_address_prefix_management: false,
    publicGateways: []
  },
  isModal: false,
  disableManualPrefixToggle: false
};
VpcNetworkForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    bucket: PropTypes.string,
    default_network_acl_name: PropTypes.string,
    default_security_group_name: PropTypes.string,
    default_routing_table_name: PropTypes.string,
    classic_access: PropTypes.bool.isRequired,
    manual_address_prefix_management: PropTypes.bool.isRequired,
    publicGateways: PropTypes.arrayOf(PropTypes.number).isRequired
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  disableManualPrefixToggle: PropTypes.bool.isRequired
};

const services = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr"
};
const serviceGroups = ["Hyper Protect Crypto Services", "Key Protect", "Object Storage", "Container Registry"];

/**
 * Vpe Form
 */
class VpeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleVpcDropdown = this.handleVpcDropdown.bind(this);
    this.handleServiceDropdown = this.handleServiceDropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle vpc dropdown
   * @param {event} event event
   */
  handleVpcDropdown(event) {
    this.setState({
      vpc: event.target.value,
      security_groups: [],
      subnets: []
    });
  }

  /**
   * handle service dropdown
   * @param {event} event event
   */
  handleServiceDropdown(event) {
    this.setState({
      service: services[event.target.value]
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

  /**
   * handle multiselects
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({
      [name]: event
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-name",
      component: "vpe",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      placeholder: "my-vpe-name",
      hideHelperText: true,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "vpc",
      formName: this.props.data.name + "-vpe" + this.state.vpc,
      groups: this.props.vpcList,
      value: this.state.vpc,
      labelText: "VPC Name",
      handleInputChange: this.handleVpcDropdown,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "service",
      formName: "vpe",
      groups: serviceGroups,
      value: services[this.state.service],
      labelText: "Service Type",
      handleInputChange: this.handleServiceDropdown,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "resource_group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(SecurityGroupMultiSelect, {
      key: this.state.vpc + "-sg",
      id: this.props.data.name + "-vpe-security-groups",
      initialSelectedItems: [...this.state.security_groups],
      vpc_name: this.state.vpc,
      onChange: event => this.handleMultiSelect("security_groups", event),
      securityGroups: [...this.getSecurityGroupList()],
      className: "fieldWidthSmaller",
      invalid: this.state.security_groups.length === 0
    }), /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      key: this.state.vpc + "-subnets",
      id: this.props.data.name + "-vpe-subnets",
      initialSelectedItems: [...this.state.subnets],
      vpc_name: this.state.vpc,
      onChange: event => this.handleMultiSelect("subnets", event),
      subnets: [...this.getSubnetList()],
      className: "fieldWidthSmaller"
    })));
  }
}
VpeForm.defaultProps = {
  data: {
    name: "",
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    service: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    security_groups: PropTypes.arrayOf(PropTypes.string).isRequired,
    subnets: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
};

/**
 * vpn gateway form
 */
class VpnGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    if (event.target.name === "vpc") {
      this.setState({
        vpc: event.target.value,
        subnet: ""
      });
    } else if (event.target.name === "subnet" && lib_4(this.state.vpc)) {
      this.setState({
        subnet: ""
      });
    } else {
      this.setState(this.eventTargetToNameAndValue(event));
    }
  }
  render() {
    let composedId = `vpn-gateway-form-${this.props.data.name}-`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      component: "vpn_gateways",
      componentName: this.props.data.name,
      componentProps: this.props,
      value: this.state.name,
      onChange: this.handleInputChange,
      placeholder: "my-vpn-gateway-name",
      hideHelperText: true,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "resource_group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.resource_group),
      invalidText: "Select a Resource Group.",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      id: composedId,
      formName: "vpc",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc),
      invalidText: "Select a VPC.",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: composedId,
      formName: "subnet",
      name: "subnet",
      labelText: "Subnet",
      groups: this.getSubnetList(),
      value: this.state.subnet,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc) || lib_4(this.state.subnet),
      invalidText: lib_4(this.state.vpc) ? `No VPC Selected.` : `Select a Subnet.`,
      className: "fieldWidth"
    })));
  }
}
VpnGatewayForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc: "",
    subnet: null
  },
  isModal: false
};
VpnGatewayForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    // can be null
    vpc: PropTypes.string,
    // can be null
    subnet: PropTypes.string // can be null
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
};

class VsiVolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-vsi-volume-name",
      componentName: this.state.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller",
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: this.props.data.name + "-vsi-volume-profile",
      name: "profile",
      groups: ["3iops-tier", "5iops-tier", "10iops-tier"],
      value: this.state.profile,
      labelText: "Profile",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: this.props.data.name + "-object-storage-bucket-key",
      name: "encryption_key",
      groups: this.props.encryptionKeyFilter ? this.props.encryptionKeyFilter(this.state, this.props) : this.props.encryptionKeys,
      value: this.state.encryption_key,
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      id: this.props.data.name + "vsi-volume-capacity",
      name: "capacity",
      label: "Capacity (GB)",
      value: this.state.capacity || "",
      onChange: this.handleInputChange,
      allowEmpty: true,
      step: 1,
      hideSteppers: true,
      placeholder: "100",
      min: 10,
      max: 16000,
      invalid: iamUtils_2(this.state.capacity, 10, 16000),
      invalidText: "Must be a whole number between 10 and 16000",
      className: "fieldWidthSmaller leftTextAlign"
    })));
  }
}
VsiVolumeForm.defaultProps = {
  data: {
    name: "",
    profile: "general-purpose",
    encryption_key: "",
    capacity: ""
  },
  encryptionKeys: []
};
VsiVolumeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string,
    encryption_key: PropTypes.string,
    capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  encryptionKeyFilter: PropTypes.func,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

class VsiForm extends Component {
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
    if (name === "vpc")
      // Clear subnets and security groups when vpc changes
      this.props.isTeleport ? transpose({
        subnet: "",
        security_groups: []
      }, stateChangeParams) : transpose({
        subnets: [],
        security_groups: []
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
    let classNameModalCheck = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    let volumeProps = {
      invalidCallback: this.props.invalidVsiVolumeCallback,
      invalidTextCallback: this.props.invalidVsiVolumeTextCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name
    };
    transpose({
      ...this.props.vsiVolumeProps
    }, volumeProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      className: classNameModalCheck,
      componentName: "vsi",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "resource_group",
      className: classNameModalCheck,
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "vpc",
      className: classNameModalCheck,
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc),
      invalidText: "Select a VPC."
    }), this.props.isTeleport ?
    /*#__PURE__*/
    // render dropdown for teleport instance
    React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "subnet",
      className: classNameModalCheck,
      labelText: "Subnet",
      groups: this.getSubnetList(),
      value: this.state.subnet,
      handleInputChange: this.handleInputChange,
      invalid: lib_4(this.state.vpc) || lib_4(this.state.subnet),
      invalidText: lib_4(this.state.vpc) ? `No VPC Selected.` : `Select a Subnet.`
    }) : /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      key: this.state.vpc + "-subnet",
      id: "vsi-subnets",
      className: classNameModalCheck,
      initialSelectedItems: this.state.subnets,
      vpc_name: this.state.vpc,
      subnets: this.getSubnetList(),
      onChange: value => this.handleMultiSelectChange("subnets", value)
    }), /*#__PURE__*/React.createElement(SecurityGroupMultiSelect, {
      key: this.state.vpc + "-sg",
      id: "vsi-security-groups",
      className: classNameModalCheck,
      initialSelectedItems: this.state.security_groups || [],
      vpc_name: this.state.vpc,
      onChange: value => this.handleMultiSelectChange("security_groups", value),
      securityGroups: this.getSecurityGroupList(),
      invalid: !(this.state.security_groups?.length > 0),
      invalidText: !this.state.vpc || lib_4(this.state.vpc) ? `Select a VPC.` : `Select at least one security group.`
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
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
      className: `${classNameModalCheck} leftTextAlign`
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      formName: "vsi_form",
      labelText: "Image",
      name: "image_name",
      className: classNameModalCheck,
      apiEndpoint: this.props.apiEndpointImages,
      handleInputChange: this.handleInputChange,
      value: this.state.image_name
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      formName: "vsi_form",
      labelText: "Profile",
      name: "profile",
      className: classNameModalCheck,
      apiEndpoint: this.props.apiEndpointInstanceProfiles,
      handleInputChange: this.handleInputChange,
      value: this.state.profile
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SshKeyMultiSelect, {
      id: "sshkey",
      className: classNameModalCheck,
      sshKeys: this.props.sshKeys,
      initialSelectedItems: this.state.ssh_keys || [],
      onChange: value => this.handleMultiSelectChange("ssh_keys", value)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "encryption_key",
      className: classNameModalCheck,
      labelText: "Encryption Key",
      groups: this.props.encryptionKeys,
      value: this.state.encryption_key,
      handleInputChange: this.handleInputChange,
      invalid: isNullOrEmptyString$3(this.state.encryption_key),
      invalidText: "Select a valid encryption key."
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-fips-toggle",
      className: classNameModalCheck,
      labelText: "Enable Floating IP",
      defaultToggled: this.state.enable_floating_ip,
      onToggle: this.handleToggle
    })), /*#__PURE__*/React.createElement(DynamicRender, {
      hide: this.props.isTeleport,
      show: /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
        id: composedId + "-vsi-user-data",
        className: this.props.isModal ? "textInputWide" : "fieldWidthBigger",
        placeholder: "Cloud init data",
        labelText: "User Data",
        name: "user_data",
        value: this.state.user_data || "",
        onChange: this.handleInputChange,
        invalidText: "Invalid error message."
      }))
    }), this.props.isModal !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Block Storage",
      subHeading: true,
      addText: "Create a Block Storage Volume",
      arrayData: this.props.data.volumes,
      innerForm: VsiVolumeForm,
      disableSave: this.props.vsiVolumeProps.disableSave,
      onDelete: this.props.vsiVolumeProps.onDelete,
      onSave: this.props.vsiVolumeProps.onSave,
      onSubmit: this.props.vsiVolumeProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...volumeProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "volumes",
        disableSave: this.props.vsiVolumeProps.disableSave,
        type: "formInSubForm"
      }
    })));
  }
}
VsiForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc: "",
    subnet: "",
    subnets: [],
    ssh_keys: [],
    security_groups: [],
    vsi_per_subnet: 1,
    encryption_key: "",
    image_name: "",
    profile: "",
    enable_floating_ip: false
  },
  isModal: false,
  isTeleport: false,
  encryptionKeys: [],
  resourceGroups: [],
  securityGroups: [],
  sshKeys: [],
  subnetList: [],
  vpcList: [],
  apiEndpointImages: "",
  apiEndpointInstanceProfiles: ""
};
VsiForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    vpc: PropTypes.string,
    subnet: PropTypes.string,
    subnets: PropTypes.array,
    security_groups: PropTypes.array,
    vsi_per_subnet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image_name: PropTypes.string,
    profile: PropTypes.string,
    ssh_keys: PropTypes.array,
    encryption_key: PropTypes.string,
    enable_floating_ip: PropTypes.bool
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  isTeleport: PropTypes.bool.isRequired,
  /* lists */
  encryptionKeys: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  securityGroups: PropTypes.array.isRequired,
  sshKeys: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  /* api endpoints */
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  /* forms */
  vsiVolumeProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    encryptionKeys: PropTypes.array.isRequired
  }).isRequired
};

class WorkerPoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.isModal ? {
      name: "",
      flavor: this.props.cluster.flavor,
      subnets: this.props.cluster.subnets || [],
      vpc: this.props.cluster.vpc,
      workers_per_subnet: this.props.cluster.workers_per_subnet,
      entitlement: this.props.cluster.entitlement
    } : {
      ...this.props.data
    }, this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubnetChange = this.handleSubnetChange.bind(this);
    buildFormFunctions(this);
  }

  // Handle pool input change
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    let pool = {
      ...this.state
    };
    if (name === "workers_per_subnet") {
      pool[name] = Number(value);
    } else {
      pool[name] = value === "null" ? null : value;
    }
    this.setState(pool);
  }

  // Handle subnet multiselect change
  handleSubnetChange(event) {
    let pool = {
      ...this.state
    };
    pool.subnets = event;
    this.setState(pool);
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: "Worker Pools",
      onChange: this.handleInputChange,
      componentProps: this.props,
      value: this.state.name,
      className: "fieldWidthSmaller",
      placeholder: "my-worker-pool-name",
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(EntitlementSelect, {
      name: "entitlement",
      value: this.state.entitlement,
      handleInputChange: this.handleInputChange,
      component: this.props.data.name,
      formName: "Worker Pools"
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      name: "flavor",
      formName: this.props.data.name + "flavor",
      labelText: "Instance Profile",
      value: this.state.flavor,
      apiEndpoint: this.props.flavorApiEndpoint,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      id: this.props.data.name,
      disabled: this.props.cluster.vpc === null,
      vpc_name: this.state.vpc,
      initialSelectedItems: this.state.subnets,
      subnets: this.getSubnetList(),
      onChange: this.handleSubnetChange,
      component: this.props.data.name,
      className: "fieldWidthSmaller cds--form-item"
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
      name: "workers_per_subnet",
      formName: this.props.data.name + "Worker Pools",
      labelText: "Workers Per Subnet",
      value: this.state.workers_per_subnet,
      max: 10,
      min: 0,
      handleInputChange: this.handleInputChange,
      component: this.props.data.name,
      className: "fieldWidthSmaller"
    })));
  }
}
WorkerPoolForm.defaultProps = {
  data: {
    entitlement: "",
    flavor: "",
    name: "",
    subnets: [],
    vpc: "",
    workers_per_subnet: 2
  },
  isModal: false
};
WorkerPoolForm.propTypes = {
  subnetList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired,
  cluster: PropTypes.shape({
    entitlement: PropTypes.string,
    // can be null
    flavor: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired
  }),
  // can be null
  data: PropTypes.shape({
    entitlement: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired
  }).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

class ClusterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (this.props.isModal) this.state.worker_pools = [];
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  // Handle cluster input change
  handleInputChange = event => {
    let {
      name,
      value
    } = event.target;
    let cluster = {
      ...this.state
    };
    this.setState(lib_11(name, value, cluster));
  };

  /**
   * handle toggle change
   * @param {*} event event
   */
  handleToggleChange = () => {
    let cluster = {
      ...this.state
    };
    cluster.update_all_workers = !cluster.update_all_workers;
    this.setState(cluster);
  };

  /**
   * handle subnet multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({
      [name]: event
    });
  }
  render() {
    let clusterComponent = this.props.isModal ? "new-cluster" : this.props.data.name;
    let innerFormProps = {
      arrayParentName: this.props.data.name,
      cluster: this.props.data,
      invalidTextCallback: this.props.invalidPoolTextCallback,
      invalidCallback: this.props.invalidPoolCallback,
      subnetList: this.props.subnetList
    };
    transpose({
      ...this.props.workerPoolProps
    }, innerFormProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      labelText: "Cluster Name",
      componentName: clusterComponent,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: clusterComponent + "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "kube_type",
      formName: clusterComponent + "kube_type",
      labelText: "Kube Type",
      groups: ["OpenShift", "IBM Kubernetes Service"],
      handleInputChange: this.handleInputChange,
      invalidText: "Select a cluster type.",
      value: this.state.kube_type === "" ? "" : this.state.kube_type === "openshift" ? "OpenShift" : "IBM Kubernetes Service",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(EntitlementSelect, {
      name: "entitlement",
      formName: clusterComponent + "entitlement",
      labelText: "Entitlement",
      value: this.state.entitlement,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      name: "flavor",
      formName: clusterComponent + "flavor",
      labelText: "Instance Profile",
      value: this.state.flavor,
      apiEndpoint: this.props.flavorApiEndpoint,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), this.state.kube_type === "openshift" && /*#__PURE__*/React.createElement(IcseSelect, {
      name: "cos",
      formName: clusterComponent + "cos",
      labelText: "Cloud Object Storage Instance",
      groups: this.props.cosNames,
      value: this.state.cos,
      handleInputChange: this.handleInputChange,
      invalidText: "Select an Object Storage instance",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      id: clusterComponent + "-vpc-name",
      name: "vpc",
      formName: clusterComponent + "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      id: clusterComponent,
      key: this.state.vpc,
      vpc_name: this.state.vpc,
      subnets: [...this.getSubnetList()],
      initialSelectedItems: [...this.state.subnets],
      onChange: event => this.handleMultiSelect("subnets", event),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
      max: 10,
      name: "workers_per_subnet",
      formName: clusterComponent + "workers_per_subnet",
      labelText: "Workers per Subnet",
      value: this.state.workers_per_subnet,
      handleInputChange: this.handleInputChange,
      isModal: this.props.isModal,
      className: "fieldWidthSmaller",
      invalid: this.state.kube_type === "openshift" && this.state.subnets.length * this.state.workers_per_subnet < 2,
      invalidText: "OpenShift clusters require at least 2 worker nodes across any number of subnets"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(FetchSelect, {
      name: "kube_version",
      formName: clusterComponent + "kube_version",
      labelText: "Kube Version",
      value: this.state.kube_version || "",
      apiEndpoint: this.props.kubeVersionApiEndpoint,
      filter: version => {
        if (this.state.kube_type === "openshift" && version.indexOf("openshift") !== -1 ||
        // is openshift and contains openshift
        this.state.kube_type !== "openshift" && version.indexOf("openshift") === -1 ||
        // is not openshift and does not contain openshift
        version === "default" // or is default
        ) {
          return version.replace(/\s\(Default\)/g, ""); // replace default with empty string
        }
      },

      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: clusterComponent + "-update-all",
      labelText: "Update All Workers",
      toggleFieldName: "update_all_workers",
      defaultToggled: this.state.update_all_workers,
      onToggle: this.handleToggleChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "encryption_key",
      formName: clusterComponent + "encryption_key",
      labelText: "Encryption Key",
      groups: this.props.encryptionKeys,
      value: this.state.encryption_key,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: clusterComponent + "-service-endpoint",
      tooltip: {
        content: "Use private service endpoint for Encryption Key"
      },
      labelText: "Private Endpoint",
      toggleFieldName: "private_endpoint",
      defaultToggled: this.state.private_endpoint,
      onToggle: this.handleToggleChange
    })), /*#__PURE__*/React.createElement(React.Fragment, null, this.props.isModal === false && /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Worker Pools",
      subHeading: true,
      addText: "Create a Worker Pool",
      arrayData: this.props.data.worker_pools,
      innerForm: WorkerPoolForm,
      disableSave: this.props.workerPoolProps.disableSave,
      onDelete: this.props.workerPoolProps.onDelete,
      onSave: this.props.workerPoolProps.onSave,
      onSubmit: this.props.workerPoolProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...innerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "worker_pools",
        disableSave: this.props.workerPoolProps.disableSave,
        type: "formInSubForm"
      }
    })));
  }
}
ClusterForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    kube_type: "openshift",
    entitlement: "null",
    encryption_key: null,
    cos: "",
    vpc: "",
    subnets: [],
    workers_per_subnet: 2,
    flavor: "",
    kube_version: "",
    update_all_workers: false,
    worker_pools: []
  },
  resourceGroups: [],
  encryptionKeys: [],
  cosNames: [],
  vpcList: [],
  subnetList: [],
  isModal: false
};
ClusterForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    kube_type: PropTypes.string.isRequired,
    entitlement: PropTypes.string,
    // can be null
    encryption_key: PropTypes.string,
    cos: PropTypes.string.isRequired,
    subnets: PropTypes.array.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    vpc: PropTypes.string,
    kube_version: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    update_all_workers: PropTypes.bool.isRequired,
    worker_pools: PropTypes.array.isRequired
  }),
  /* bools */
  isModal: PropTypes.bool.isRequired,
  /* lists */
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* api endpoints */
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  invalidPoolCallback: PropTypes.func,
  invalidPoolTextCallback: PropTypes.func,
  /* forms */
  workerPoolProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired
  }).isRequired
};

class VpnServerRouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value.toLowerCase()
    });
  }
  render() {
    let className = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: `${this.props.data.name}-name`,
      componentName: "vpn-server-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      className: className,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-route-destination`,
      componentName: "vpn-server-route-destination",
      name: "destination",
      field: "destination",
      value: this.state.destination,
      placeholder: "x.x.x.x",
      labelText: "Destination CIDR",
      invalidCallback: () => isIpv4CidrOrAddress$1(this.state.destination) === false || !contains$2(this.state.destination, "/"),
      invalidText: "Destination must be a valid IPV4 CIDR Block",
      onChange: this.handleInputChange,
      className: className
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vpn-server-action",
      name: "action",
      labelText: "Action",
      groups: ["Translate", "Deliver", "Drop"],
      value: titleCase$1(this.state.action),
      handleInputChange: this.handleInputChange,
      className: className
    }));
  }
}
VpnServerRouteForm.defaultProps = {
  data: {
    name: "",
    destination: "",
    action: "translate"
  },
  isModal: false
};
VpnServerRouteForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

class AccessGroupPolicyForm extends React.Component {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: "name",
      componentName: "policies",
      value: this.state.name,
      onChange: this.handleInputChange,
      labelText: "Name",
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Resource Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${kebabCase$2(this.props.data.name)}-agp-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resources.resource_group,
      handleInputChange: this.handleInputResource,
      labelText: "Resource Group",
      tooltip: {
        content: "Name of the resource group the policy will apply to",
        alignModal: "bottom-left"
      },
      disableInvalid: true // resource group is not required
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resources: PropTypes.shape({
      resource_group: PropTypes.string,
      // can be null
      resource_type: PropTypes.string,
      resource: PropTypes.string,
      service: PropTypes.string,
      resource_instance_id: PropTypes.string
    }).isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired
};

const conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains"
};
class AccessGroupDynamicPolicyForm extends React.Component {
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
      conditions[name] = snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
    } else {
      conditions[name] = value;
    }
    this.setState({
      conditions
    });
  }
  render() {
    let conditionOperatorGroups = [];
    eachKey(conditionOperators, key => {
      conditionOperatorGroups.push(conditionOperators[key]);
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: "name",
      componentName: "dynamic_policies",
      field: "name",
      labelText: "Name",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
      invalid: this.props.invalidIdentityProviderCallback(this.state, this.props),
      onChange: this.handleInputChange,
      className: "textInputWide"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Condition Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identity_provider: PropTypes.string.isRequired,
    expiration: PropTypes.number.isRequired,
    conditions: PropTypes.shape({
      claim: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  invalidIdentityProviderCallback: PropTypes.func.isRequired
};

class AccessGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    let dynamicPolicyProps = {
      invalidCallback: this.props.invalidDynamicPolicyCallback,
      invalidTextCallback: this.props.invalidDynamicPolicyTextCallback,
      invalidIdentityProviderCallback: this.props.invalidIdentityProviderCallback,
      arrayParentName: this.props.data.name,
      helperTextCallback: this.props.dynamicPolicyHelperTextCallback
    };
    transpose({
      ...this.props.dynamicPolicyProps
    }, dynamicPolicyProps);
    let policyProps = {
      invalidCallback: this.props.invalidPolicyCallback,
      invalidTextCallback: this.props.invalidPolicyTextCallback,
      arrayParentName: this.props.data.name,
      helperTextCallback: this.props.policyHelperTextCallback
    };
    transpose({
      ...this.props.policyProps
    }, policyProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: "name",
      componentName: "access_groups",
      value: this.state.name,
      onChange: this.handleInputChange,
      className: "fieldWidth",
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), this.props.isModal === false && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Policies",
      subHeading: true,
      addText: "Create a Policy",
      arrayData: this.props.data.policies,
      innerForm: AccessGroupPolicyForm,
      disableSave: this.props.policyProps.disableSave,
      onDelete: this.props.policyProps.onDelete,
      onSave: this.props.policyProps.onSave,
      onSubmit: this.props.policyProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...policyProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "policies",
        disableSave: this.props.policyProps.disableSave,
        type: "formInSubForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Dynamic Policies",
      subHeading: true,
      addText: "Create a Dynamic Policy",
      arrayData: this.props.data.dynamic_policies,
      innerForm: AccessGroupDynamicPolicyForm,
      disableSave: this.props.dynamicPolicyProps.disableSave,
      onDelete: this.props.dynamicPolicyProps.onDelete,
      onSave: this.props.dynamicPolicyProps.onSave,
      onSubmit: this.props.dynamicPolicyProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...dynamicPolicyProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "dynamic_policies",
        disableSave: this.props.dynamicPolicyProps.disableSave,
        type: "formInSubForm"
      }
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

class RoutingTableRouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!isNullOrEmptyString$3(this.state.action) && this.state.action !== "deliver") {
      this.state.next_hop = "0.0.0.0";
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let nextState = {
      ...this.state
    };
    let {
      name,
      value
    } = event.target;
    nextState[name] = value;
    if (name === "action" && value !== "deliver") {
      nextState.next_hop = "0.0.0.0";
    } else if (name === "action") {
      nextState.next_hop = null;
    }
    this.setState(nextState);
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      componentName: "routing-table-route",
      id: this.props.data.name + "-route-name",
      hideHelperText: true,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
      formName: "routing-table-route",
      value: this.state.zone || "",
      min: 1,
      max: 3,
      name: "zone",
      labelText: "Route Zone",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-route-destination",
      componentName: "routing-route-destination",
      name: "destination",
      field: "destination",
      value: this.state.destination,
      placeholder: "x.x.x.x",
      labelText: "Destination IP or CIDR",
      invalidCallback: () => isIpv4CidrOrAddress$1(this.state.destination) === false,
      invalidText: "Destination must be a valid IP or IPV4 CIDR block",
      onChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "action",
      formName: this.props.data.name + "-routing-table-route-action",
      groups: ["delegate", "deliver", "delegate_vpc", "drop"],
      labelText: "Action",
      handleInputChange: this.handleInputChange,
      value: this.state.action,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-next-hop",
      componentName: "routing-next-hop",
      field: "next_hop",
      value: this.state.next_hop,
      labelText: "Next Hop",
      placeholder: "x.x.x.x",
      invalidCallback: () => isNullOrEmptyString$3(this.state.next_hop) || isIpv4CidrOrAddress$1(this.state.next_hop) === false || contains$2(this.state.next_hop, `/`),
      invalidText: "Next hop must be a valid IP",
      onChange: this.handleInputChange,
      disabled: this.state.action !== "deliver",
      className: "fieldWidthSmaller"
    })));
  }
}
RoutingTableRouteForm.defaultProps = {
  data: {
    name: "",
    zone: "",
    destination: "",
    action: "",
    next_hop: ""
  }
};
RoutingTableRouteForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    next_hop: PropTypes.string,
    zone: PropTypes.number
  }).isRequired
};

class RoutingTableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (this.props.isModal) this.state.routes = [];
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let nextState = {
      ...this.state
    };
    let {
      name,
      value
    } = event.target;
    nextState[name] = value;
    this.setState(nextState);
  }
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = this.props.data.name + "-route-form";
    let innerFormProps = {
      arrayParentName: this.props.data.name,
      route: this.props.data,
      invalidTextCallback: this.props.invalidRouteTextCallback,
      invalidCallback: this.props.invalidRouteCallback
    };
    transpose({
      ...this.props.routeProps
    }, innerFormProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      componentName: "routing-table-route",
      id: this.props.data.name + "-route-name",
      hideHelperText: true,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: composedId + "-vpc",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: "Select a VPC."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-direct-link-toggle",
      labelText: "Direct Link Ingress",
      defaultToggled: this.state.route_direct_link_ingress,
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, the routing table is used to route traffic that originates from Direct Link to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-route-internet-toggle",
      labelText: "Internet Ingress",
      defaultToggled: this.state.route_internet_ingress,
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, this routing table will be used to route traffic that originates from the internet. For this to succeed, the VPC must not already have a routing table with this property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-tgw-ingress",
      labelText: "Transit Gateway Ingress",
      defaultToggled: this.state.route_transit_gateway_ingress,
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, the routing table is used to route traffic that originates from Transit Gateway to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-zone-ingress",
      labelText: "VPC Zone Ingress",
      defaultToggled: this.state.route_vpc_zone_ingress,
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, the routing table is used to route traffic that originates from subnets in other zones in the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    })), this.props.isModal === false && /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Routes",
      subHeading: true,
      addText: "Create a Route",
      arrayData: this.props.data.routes,
      innerForm: RoutingTableRouteForm,
      disableSave: this.props.routeProps.disableSave,
      onDelete: this.props.routeProps.onDelete,
      onSave: this.props.routeProps.onSave,
      onSubmit: this.props.routeProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...innerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "routes",
        disableSave: this.props.routeProps.disableSave,
        type: "formInSubForm"
      }
    }));
  }
}
RoutingTableForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    vpc: null,
    routes: [],
    route_internet_ingress: false,
    route_transit_gateway_ingress: false,
    route_vpc_zone_ingress: false,
    route_direct_link_ingress: false
  }
};
RoutingTableForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    routes: PropTypes.array.isRequired,
    route_internet_ingress: PropTypes.bool.isRequired,
    route_transit_gateway_ingress: PropTypes.bool.isRequired,
    route_vpc_zone_ingress: PropTypes.bool.isRequired,
    route_direct_link_ingress: PropTypes.bool.isRequired
  }).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  routeProps: PropTypes.shape({
    disableSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
  }).isRequired
};

/**
 * EventStreamsForm
 */
class EventStreamsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);
    this.handlePlanChange = this.handlePlanChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change for allowed ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    // removing white space and checking for empty value
    let value = event.target.value.replace(/\s*/g, "");
    this.setState({
      private_ip_allowlist: value
    });
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Handle input change for a select
   * @param {event} event
   */
  handlePlanChange(event) {
    let value = event.target.value.toLowerCase();
    let tempState = {
      ...this.state
    };
    tempState.plan = value;
    if (value !== "enterprise") {
      tempState = {
        ...tempState,
        throughput: "",
        storage_size: "",
        endpoints: "",
        private_ip_allowlist: ""
      };
    }
    this.setState(tempState);
  }
  render() {
    let composedId = `event-streams-form-${this.props.data.name}`;
    let classNameModalCheck = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      componentName: this.props.data.name + "-event-streams",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: classNameModalCheck
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-event-streams",
      value: titleCase$1(this.state.plan),
      groups: ["Lite", "Standard", "Enterprise"],
      handleInputChange: this.handlePlanChange,
      className: classNameModalCheck,
      name: "plan",
      labelText: "Plan"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-event-streams",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      className: classNameModalCheck,
      name: "resource_group",
      labelText: "Resource Group"
    })), this.state.plan === "enterprise" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(EndpointSelect, {
      name: "endpoints",
      formName: this.props.data.name + "-event-streams",
      handleInputChange: this.handleInputChange,
      value: this.state.endpoints,
      className: classNameModalCheck
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-event-streams",
      value: this.state.throughput,
      groups: ["150MB/s", "300MB/s", "450MB/s"],
      handleInputChange: this.handleInputChange,
      className: classNameModalCheck,
      name: "throughput",
      labelText: "Throughput"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-event-streams",
      value: this.state.storage_size,
      groups: ["2TB", "4TB", "6TB", "8TB", "10TB", "12TB"],
      handleInputChange: this.handleInputChange,
      className: classNameModalCheck,
      name: "storage_size",
      labelText: "Storage Size"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(ToolTipWrapper, {
      tooltip: {
        content: "Private IP addresses or CIDR blocks to allowlist",
        align: "top-left"
      },
      className: "textInputMedium",
      innerForm: TextArea,
      id: "event-streams-private-ips",
      labelText: "Allowed Private IPs",
      onChange: this.handleAllowedIps,
      placeholder: this.state.private_ip_allowlist || "X.X.X.X, X.X.X.X/X, ...",
      invalid: iamUtils_1(this.state.private_ip_allowlist),
      invalidText: "Please enter a comma separated list of IP addresses or CIDR blocks"
    }))));
  }
}
EventStreamsForm.defaultProps = {
  data: {
    name: "",
    plan: "lite",
    resource_group: "",
    endpoints: "",
    throughput: "",
    storage_size: "",
    private_ip_allowlist: ""
  }
};
EventStreamsForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    endpoints: PropTypes.string,
    throughput: PropTypes.string,
    storage_size: PropTypes.string,
    private_ip_allowlist: PropTypes.string
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

export { AccessGroupDynamicPolicyForm, AccessGroupForm, AccessGroupPolicyForm, AppIdForm, AppIdKeyForm, AtrackerForm, ClusterForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EndpointSelect, EntitlementSelect, EventStreamsForm, F5VsiForm, F5VsiTemplateForm, FetchSelect, FormModal, IamAccountSettingsForm, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, LocationsMultiSelect, NetworkAclForm, NetworkingRuleForm, NetworkingRulesOrderCard, ObjectStorageBucketForm, ObjectStorageInstancesForm as ObjectStorageForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, ResourceGroupForm, RoutingTableForm, RoutingTableRouteForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetForm, SubnetMultiSelect, SubnetTierForm, SubnetTileForm, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcNetworkForm as VpcForm, VpcListMultiSelect, VpeForm, VpnGatewayForm, VpnServerRouteForm, VsiForm, VsiLoadBalancerForm, VsiVolumeForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
