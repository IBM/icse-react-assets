import '@carbon/styles/css/styles.css';
import { Popover, PopoverContent, Toggletip, ToggletipButton, ToggletipContent, ToggletipActions, Button, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody, Select, SelectItem, Tile, Modal, Tabs, TabList, Tab, TabPanels, TabPanel, Toggle, TextInput, FilterableMultiSelect, NumberInput, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, TextArea, Tag, DatePicker, DatePickerInput, PasswordInput, Dropdown, Checkbox } from '@carbon/react';
import lazyZ, { titleCase as titleCase$2, kebabCase as kebabCase$6, isEmpty, buildNumberDropdownList, contains as contains$5, prettyJSON, isNullOrEmptyString as isNullOrEmptyString$6, transpose as transpose$2, capitalize as capitalize$2, getObjectFromArray as getObjectFromArray$1, splat as splat$2, containsKeys, parseIntFromZone as parseIntFromZone$1, snakeCase as snakeCase$2, distinct, isWholeNumber as isWholeNumber$1, isInRange as isInRange$1, isIpv4CidrOrAddress as isIpv4CidrOrAddress$2, deepEqual, splatContains } from 'lazy-z';
import regexButWithWords from 'regex-but-with-words';
import React, { Component } from 'react';
import PropTypes, { PropTypes as PropTypes$1 } from 'prop-types';
import { Information, Save, Add, ChevronDown, ChevronRight, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt, Edit, DataView, Network_3, Password } from '@carbon/icons-react';

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

var css_248z$5 = "/* vars and themes */\n:root {\n  --background: #ffffff;\n  --subForm: #f4f4f4;\n  --formInSubForm: #fffdfd;\n  --cds-text-primary: #161616;\n  --cds-text-secondary: #525252;\n  --cds-field: #f4f4f4;\n  --cds-border-strong: #8d8d8d;\n  --blue: #0f62fe;\n  --red: #da1e28;\n  --white: #ffffff;\n}\n\n.dark {\n  --background: #161616;\n  --subForm: #262626;\n  --formInSubForm: #414141;\n  --cds-text-primary: #f4f4f4;\n  --cds-text-secondary: #c6c6c6;\n  --cds-field: #363636;\n  --cds-border-strong: #8897a2;\n  --cds-layer: #262626;\n  --cds-layer-hover: #363636;\n  --cds-field-02: #363636;\n  --cds-icon-secondary: #c6c6c6;\n  --cds-icon-primary: #c6c6c6;\n  --placeholder: #565656;\n  --cds-field-hover: #464646;\n  --cds-layer-selected: #525252;\n  --cds-background-inverse: #f4f4f4;\n  --cds-text-inverse: #262626;\n}\n\n.subForm {\n  /* white background for subform input fields */\n  --cds-field: #ffffff;\n}\n\n.formInSubForm {\n  /* gray for formInSubForm input fields */\n  --cds-field: #f4f4f4;\n}\n\ninput:read-only {\n  /* read only fields should only have text */\n  --cds-border-strong: transparent;\n}\n\n.dark {\n  background-color: var(--background);\n}\n\n.dark p {\n  color: #f4f4f4;\n}\n\n.dark i.chevron > svg {\n  fill: #f4f4f4;\n}\n\n.dark h4 {\n  color: #f4f4f4;\n}\n\n.dark .underConstruction > svg {\n  fill: #ffffff;\n}\n/* styling for tooltip content in dark mode */\n.dark .cds--toggletip-content > p {\n  color: #363636;\n}\n\n.dark .subForm {\n  /* alternate background for dark subforms */\n  --cds-field: #414141;\n}\n\n.dark .formInSubForm {\n  /* alternate background for dark formInSubForm */\n  --cds-field: #363636;\n}\n\n.dark ::placeholder {\n  color: var(--placeholder);\n}\n\n/* general alignment classes */\n\n.displayFlex {\n  display: flex;\n}\n\n.alignItemsTop {\n  align-items: top;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n\n.leftTextAlign {\n  text-align: left;\n}\n\n.fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n\n.fieldWidthSmallest {\n  width: 8rem;\n}\n\n.fieldWidthBigger {\n  width: 40rem;\n}\n\n.textInputWide {\n  width: 30rem;\n}\n\n.textInputMedium {\n  width: 20rem;\n}\n\n/* backhground classes */\n.formInSubForm {\n  margin-top: 0rem;\n  background: var(--formInSubForm);\n  padding: 1rem;\n}\n\n.subForm {\n  background: var(--subForm);\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n/* Tooltips */\n.labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -22px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n\n.tooltip > div.cds--select--invalid {\n  margin-top: -8px;\n}\n\n/* subnet tile form */\n\n.tileFormMargin {\n  margin-bottom: -0.5rem;\n  margin-top: 0.5rem;\n}\n\n.tileFormMargin.subForm {\n  padding: 0px;\n}\n\n.marginRightSubnetTile {\n  margin-right: 10px;\n}\n\n/* StatefulTabPanel */\n\n.cds--tab-content.doc {\n  padding: 0.5rem 0;\n}\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}\n\n/* popover wrappers */\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  z-index: 9001;\n}\n\n/* buttons */\n.edit-view-btn:focus {\n  background-color: var(--white);\n}\n\ni.chevron > svg {\n  display: block; /* remove extra padding on bottom of i which misaligns icon */\n  margin-right: 1rem;\n  margin-top: 0.15rem;\n}\n\n.chevron {\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: var(--blue) !important;\n  fill: var(--white) !important;\n  border-color: var(--blue) !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding: 0.4375rem !important;\n  align-items: center;\n}\n\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: var(--red) !important;\n}\n\n.alignButtons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.cds--tabs__nav-link:focus {\n  outline: none !important;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem !important;\n}\n\n/* docs */\n.about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n\n/* empty resource tile */\n.iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: var(--subForm);\n}\n\n.marginTop {\n  margin-top: 1rem;\n}\n\n/* under construction */\n\n.underConstruction {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flexDirectionColumn {\n  flex-direction: column;\n}\n\n/* f5 vsi */\n.wide {\n  width: 20rem !important;\n}\n\n.tight {\n  width: min-content; /* force invalid text to split line */\n}\n\n.passwordGenerateButton {\n  margin-top: 1.25rem;\n  margin-left: calc(-4rem - 3vw);\n}\n\n.passwordGenerateButton svg {\n  fill: var(--cds-icon-secondary, #525252) !important;\n}\n\n.passwordGenerateButton.invalid {\n  margin-left: calc(-5.75rem - 3vw);\n}\n\n.wrap {\n  flex-flow: wrap;\n}\n\n.docsUpdated {\n  display: flex;\n  align-items: flex-end;\n}\n\n.cds--list-box__menu {\n  width: fit-content;\n  text-align: left;\n}\n\n@media screen and (max-width: 1024px) {\n  .fieldWidth {\n    width: 11rem;\n  }\n\n  .fieldWidthSmaller {\n    width: 8rem;\n  }\n\n  .fieldWidthSmallest {\n    width: 5rem;\n  }\n\n  .textInputWide {\n    width: 20rem;\n  }\n\n  .fieldWidthBigger {\n    width: 30rem;\n  }\n\n  .textInputMedium {\n    width: 15rem;\n  }\n}\n\n@media screen and (max-width: 850px) {\n  .fieldWidth {\n    width: 100%;\n  }\n\n  .fieldWidthSmaller {\n    width: 100%;\n  }\n\n  .fieldWidthSmallest {\n    width: 100%;\n  }\n\n  .textInputMedium {\n    width: 100%;\n  }\n\n  .fieldWidthBigger {\n    width: 100%;\n  }\n\n  .textInputWide {\n    width: 100%;\n  }\n\n  .formGroup {\n    /* items 1 wide */\n    flex-direction: column !important;\n  }\n\n  .popover-obj.select {\n    /* need to adjust size for popover container at small widths */\n    width: 100%;\n  }\n\n  .popover-obj.select > span {\n    width: 100%;\n  }\n\n  /* items with tooltip should also be full width */\n  .cds--form-item {\n    flex: none;\n    width: 100%;\n  }\n}\n\n.cds--form-item {\n  flex: none; /* overwrite flex to fix inconsistent widths */\n}\n\n/* data table */\ndiv .dt-security-group {\n  background-color: white !important;\n}\n";
styleInject(css_248z$5);

const {
  contains: contains$4,
  capitalize: capitalize$1
} = lazyZ;

/**
 * create a composed class name
 * @param {string} className name of classes to add
 * @param {*} props arbitrary props
 * @param {string=} props.className additional classnames
 */
function addClassName$4(className, props) {
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
function prependEmptyStringWhenNull$2(value, arr) {
  let arrayCheck = checkNullorEmptyString$1(value);
  let prependArray = arrayCheck ? [""] : [];
  return prependArray.concat(arr);
}

/**
 * add margin bottom to subform chevron
 * @param {*} componentProps
 * @returns {string} additional classNames
 */
function toggleMarginBottom$2(hide) {
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
  if (contains$4(["vsi", "vpe", "vpn", "vpn-1", "vpn-2"], tierName)) {
    return tierName.toUpperCase() + " Subnet Tier";
  } else if (tierName === "") {
    return "New Subnet Tier";
  } else {
    return capitalize$1(tierName) + " Subnet Tier";
  }
}
var formUtils = {
  addClassName: addClassName$4,
  toggleMarginBottom: toggleMarginBottom$2,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$2,
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1,
  handleClusterInputChange: handleClusterInputChange$1,
  subnetTierName: subnetTierName$1
};

const {
  kebabCase: kebabCase$5
} = lazyZ;

/**
 * format input placeholder
 * @param {string} componentName
 * @param {string} fieldName
 * @returns {string} placeholder name
 */
function formatInputPlaceholder$2(componentName, fieldName) {
  return `my-${kebabCase$5(componentName)}-${kebabCase$5(fieldName)}`.replace(/-+/g, "-");
}
var textUtils = {
  formatInputPlaceholder: formatInputPlaceholder$2
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

/**
 * get params for save add button this is tested here to reduce
 * number of needed unit tests for individual components
 * @param {*} props
 * @param {string} props.type
 * @param {string} props.hoverText
 * @param {boolean=} props.disabled
 * @param {boolean=} props.inline
 * @param {string=} props.className
 * @returns {Object} params object
 */
function saveAddParams$1(props) {
  let hoverText = props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText;
  let wrapperClassDisabled = props.disabled ? "inlineBlock cursorNotAllowed" : "";
  let wrapperClassInline = props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : "";
  let buttonKind = props.type === "add" || props.type === "custom" ? "tertiary" : "primary";
  let buttonClass = saveChangeButtonClass$1(props) + (props.disabled === true ? " pointerEventsNone " : " " + (props.className || ""));
  return {
    hoverText,
    wrapperClassDisabled,
    wrapperClassInline,
    buttonKind,
    buttonClass
  };
}

/**
 * get params for edit close icon
 * @param {*} props
 * @param {String} props.hoverText
 * @param {boolean} props.open
 * @param {string} props.type
 * @returns {Object} params object
 */
function editCloseParams$1(props) {
  let hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Open";
  return {
    hoverText
  };
}

/**
 * get params for delete button
 * @param {*} props
 * @param {boolean} props.disabled
 * @param {string} props.disabledDeleteMessage
 * @returns {Object} params object
 */
function deleteButtonParams$1(props) {
  let hoverText = props.disabled && props.disableDeleteMessage ? props.disableDeleteMessage : "Delete Resource";
  let popoverClassName = props.disabled ? "inlineBlock cursorNotAllowed" : "";
  let buttonClassName = "cds--btn--danger--tertiary forceTertiaryButtonStyles" + (props.disabled ? " pointerEventsNone" : "");
  let iconClassName = props.disabled ? "" : "redFill";
  return {
    hoverText,
    popoverClassName,
    buttonClassName,
    iconClassName
  };
}
var buttonUtils = {
  saveChangeButtonClass: saveChangeButtonClass$1,
  saveAddParams: saveAddParams$1,
  editCloseParams: editCloseParams$1,
  deleteButtonParams: deleteButtonParams$1
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

/**
 * get doc text field params
 * @param {Object} props
 * @param {String} props.className
 * @param {String} props.text
 * @returns {Object} params object
 */
function docTextFieldParams$1(props) {
  let className = props.text === "_default_includes" ? "marginBottomSmall" : props.className;
  let text = props.text === "_default_includes" ? "The default configuration includes:" : props.text;
  return {
    className,
    text
  };
}
var docUtils = {
  docTextFieldParams: docTextFieldParams$1
};

const {
  isNullOrEmptyString: isNullOrEmptyString$5,
  kebabCase: kebabCase$4
} = lazyZ;
const {
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  addClassName: addClassName$3
} = formUtils;

/**
 * generate parameters for icse select
 * @param {*} props
 * @returns {Object} parameters
 */
function icseSelectParams$1(props) {
  let invalid =
  // automatically set to invalid if value is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString$5(props.value) ? true : props.invalid;
  let groups = props.groups.length === 0 ? [] // if no groups, empty array
  : prependEmptyStringWhenNull$1(
  // otherwise try and prepend empty string if null or empty string is allowed
  props.disableInvalid ? "" : props.value, props.groups);
  let popoverClassName = props.tooltip ? "tooltip select" : " select";
  let wrapperId = kebabCase$4(props.name) + "-dropdown-tooltip";
  let selectId = kebabCase$4(props.formName + " " + props.name);
  let labelText = props.tooltip ? null : props.labelText;
  let selectClassName = addClassName$3(`leftTextAlign${props.tooltip ? " tooltip" : ""}`, props);
  return {
    invalid,
    groups,
    popoverClassName,
    wrapperId,
    selectId,
    labelText,
    selectClassName
  };
}
var dropdowns = {
  icseSelectParams: icseSelectParams$1
};

const {
  addClassName: addClassName$2,
  toggleMarginBottom: toggleMarginBottom$1
} = formUtils;

/**
 * handle number dropdown event function
 * @param {*} props
 * @param {Function} props.handleInputChange
 * @returns {Function} handle input change
 */
function handleNumberDropdownEvent$1(props) {
  /**
   * handle input change
   * @param {*} event
   */
  function handleInputChange(event) {
    // set name target value and parse int
    let sendEvent = {
      target: {
        name: event.target.name,
        value: parseInt(event.target.value)
      }
    };
    props.handleInputChange(sendEvent);
  }
  return handleInputChange;
}

/**
 * get title group params
 * @param {Object} props
 * @param {boolean} props.hide
 * @param {string} props.className
 * @returns {Object} params object
 */
function titleGroupParams$1(props) {
  return addClassName$2(`displayFlex alignItemsCenter widthOneHundredPercent ${toggleMarginBottom$1(props.hide)}`, props);
}

/**
 *
 * @param {Object} props
 * @param {boolean} props.noMarginBottom
 * @param {string} props.className
 * @returns {Object} params object
 */
function formGroupParams$1(props) {
  let formGroupClassName = "displayFlex marginBottom evenSpacing wrap alignItemsTop";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  formGroupClassName = addClassName$2(formGroupClassName, props);
  return formGroupClassName;
}

/**
 * get icse sub form params
 * @param {Object} props
 * @param {boolean} props.formInSubForm
 * @returns {Object} params object
 */
function icseSubFormParams$1(props) {
  return addClassName$2(props.formInSubForm ? "formInSubForm positionRelative" : "subForm marginBottomSmall", props);
}

/**
 * get icse heading params
 * @param {Object} props
 * @param {boolean} props.toggleFormTitle
 * @param {string} props.name
 * @param {string} props.className
 */
function icseHeadingParams$1(props) {
  let titleFormDivClass = props.toggleFormTitle ? "" : props.name === "" ? "" : " icseFormTitleMinHeight";
  return addClassName$2("displayFlex spaceBetween widthOneHundredPercent alignItemsCenter", props) + titleFormDivClass;
}

/**
 * get stateless toggle form params
 * @param {Object} props
 * @param {boolean} props.toggleFormTitle
 * @param {boolean} props.subHeading
 * @param {boolean} props.hide
 * @param {boolean} props.alwaysShowButtons
 * @returns {Object} params object
 */
function statelessToggleFormParams$1(props) {
  let type = props.toggleFormTitle ? "p" : props.subHeading ? "subHeading" : "heading";
  let dynamicRenderHide = props.hide === true && props.alwaysShowButtons !== true;
  return {
    type,
    dynamicRenderHide
  };
}
var utils = {
  handleNumberDropdownEvent: handleNumberDropdownEvent$1,
  titleGroupParams: titleGroupParams$1,
  formGroupParams: formGroupParams$1,
  icseSubFormParams: icseSubFormParams$1,
  icseHeadingParams: icseHeadingParams$1,
  statelessToggleFormParams: statelessToggleFormParams$1
};
var utils_2 = utils.titleGroupParams;
var utils_3 = utils.formGroupParams;
var utils_4 = utils.icseSubFormParams;
var utils_5 = utils.icseHeadingParams;
var utils_6 = utils.statelessToggleFormParams;

/**
 * get params for empty resource tile
 * @param {Object} props
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @param {boolean} props.noMarginTop
 */
function emptyResourceTileParams$1(props) {
  let show = !props.showIfEmpty || props.showIfEmpty.length === 0;
  let className = "tileBackground displayFlex alignItemsCenter wrap";
  return {
    show,
    className
  };
}
var emptyResourceTile = {
  emptyResourceTileParams: emptyResourceTileParams$1
};
var emptyResourceTile_1 = emptyResourceTile.emptyResourceTileParams;

const {
  snakeCase: snakeCase$1,
  kebabCase: kebabCase$3,
  titleCase: titleCase$1,
  isBoolean
} = lazyZ;
const {
  addClassName: addClassName$1
} = formUtils;
const {
  formatInputPlaceholder: formatInputPlaceholder$1
} = textUtils;

/**
 * create params for icse toggle
 * @param {*} props
 * @param {string=} props.toggleFieldName
 * @param {string=} props.labelText
 * @param {boolean=} props.useOnOff
 * @param {string} props.id
 * @param {Object=} props.tooltip
 * @returns {Object} params object
 */
function toggleParams$1(props) {
  let toggleName = props.toggleFieldName || snakeCase$1(props.labelText);
  let labelA = props.useOnOff ? "Off" : "False",
    labelB = props.useOnOff ? "On" : "True",
    labelText = props.tooltip ? " " : props.labelText,
    id = kebabCase$3(toggleName) + "-icse-toggle-" + props.id,
    className = addClassName$1("leftTextAlign fitContent", props) + (props.tooltip ? " cds--form-item tooltip" : " cds--form-item");
  let onToggle = onToggleEvent$1(props, toggleName);
  return {
    toggleName,
    labelA,
    labelB,
    labelText,
    id,
    className,
    onToggle
  };
}

/**
 * create on toggle function
 * @param {*} props component props
 * @param {string} toggleName toggle name
 * @returns {Function} on toggle function
 */
function onToggleEvent$1(props, toggleName) {
  /**
   * run on toggle event
   * @param {event} event
   */
  function onToggle(event) {
    props.onToggle(toggleName, event);
  }
  return onToggle;
}

/**
 * text input params
 * @param {*} props
 * @param {string} props.field
 * @param {string=} props.invalidText
 * @param {boolean=} props.invalid
 * @param {Function=} props.invalidCallback
 * @param {boolean=} props.optional
 * @param {string=} props.componentName
 * @param {string=} props.labelText
 * @param {Function} props.onChange
 * @returns {Object} params object
 */
function textInputParams(props) {
  let fieldName = titleCase$1(props.field);
  let invalidText = props.invalidText ? props.invalidText : `Invalid ${props.field} value.`,
    invalid = isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
    placeholder = (props.optional ? "(Optional) " : "") + (props.placeholder || formatInputPlaceholder$1(props.componentName, fieldName)),
    labelText = props.labelText ? props.labelText : fieldName,
    onInputChange = props.onChange;
  if (props.forceKebabCase) {
    onInputChange = function (event) {
      event.target.value = kebabCase$3(event.target.value);
      return props.onChange(event);
    };
  }
  return {
    invalid,
    invalidText,
    placeholder,
    labelText,
    onInputChange
  };
}
var inputUtils = {
  toggleParams: toggleParams$1,
  onToggleEvent: onToggleEvent$1,
  textInputParams
};
var inputUtils_1 = inputUtils.toggleParams;
var inputUtils_3 = inputUtils.textInputParams;

/**
 * get icse form template params
 * @param {Object} props
 * @param {boolean} props.overrideTile
 * @param {array} props.arrayData
 * @param {boolan} props.subHeading
 * @returns {Object} params object
 */
function icseFormTemplateParams$1(props) {
  let arrayIsEmpty = props.arrayData.length === 0 && props.overrideTile;
  let tabPanelClassName = props.subHeading ? "subHeading marginBottomSmall" : "";
  return {
    arrayIsEmpty,
    tabPanelClassName
  };
}
var icseFormTemplate = {
  icseFormTemplateParams: icseFormTemplateParams$1
};

const {
  isFunction: isFunction$1
} = lazyZ;

/**
 * get stateful tab panel params
 * @param {Object} props
 * @param {boolean} props.subHeading
 * @param {boolean} props.hideFormTitleButton
 * @param {function} props.onClick
 * @param {boolean} props.hasBuiltInHeading
 * @param {string} props.name
 * @param {Object} state
 * @returns
 */
function statefulTabPanelParams$1(props, state) {
  let headingType = props.subHeading ? "subHeading" : "heading";
  let dynamicRenderHide = props.hideFormTitleButton || state.tabIndex !== 0 || !isFunction$1(props.onClick) || props.hasBuiltInHeading;
  let headingHide = props.name && !props.hasBuiltInHeading;
  let buttonIsDisabled = props.shouldDisableSave ? props.shouldDisableSave() : false;
  return {
    headingType,
    dynamicRenderHide,
    headingHide,
    buttonIsDisabled
  };
}
var statefulTabPanel = {
  statefulTabPanelParams: statefulTabPanelParams$1
};

/**
 * get popoverwraper params
 * @param {Object} props
 * @param {boolean} props.noPopover
 * @param {string} props.hoverText
 * @param {string} props.align
 * @param {string} props.contentClassName
 * @returns {Object} params object
 */
function popoverWrapperParams$1(props) {
  let noPopover = props.noPopover === true || props.hoverText === "";
  let autoAlign = props.align ? false : true;
  let contentClassName = "popover-box" + (props.contentClassName ? ` ${props.contentClassName}` : "");
  return {
    noPopover,
    autoAlign,
    contentClassName
  };
}
var popoverWrapper = {
  popoverWrapperParams: popoverWrapperParams$1
};

const {
  contains: contains$3,
  parseIntFromZone
} = lazyZ;
function handlePgwToggle$1(zone, stateData) {
  let vpc = {
    ...stateData
  };
  let currentGw = [...stateData.publicGateways]; // new array
  let zoneNumber = parseIntFromZone(zone);
  // check if zone is already present
  if (contains$3(currentGw, zoneNumber)) {
    let index = currentGw.indexOf(zoneNumber);
    currentGw.splice(index, 1);
  } else {
    currentGw.push(zoneNumber);
  }
  vpc.publicGateways = currentGw;
  return vpc;
}
var vpc = {
  handlePgwToggle: handlePgwToggle$1
};
var vpc_1 = vpc.handlePgwToggle;

const {
  kebabCase: kebabCase$2
} = lazyZ;

/**
 * handle input change for atracker
 * @param {Object} stateData
 * @param {Object} event
 */
function atrackerInputChange$1(stateData, event) {
  let state = {
    ...stateData
  };
  let {
    name,
    value
  } = event.target;
  if (name === "plan") state.plan = kebabCase$2(value);else state[name] = value;
  return state;
}
var atracker = {
  atrackerInputChange: atrackerInputChange$1
};

const {
  kebabCase: kebabCase$1
} = lazyZ;

/**
 * handle input change for Cloud Database Form
 * @param {Object} stateData
 * @param {Object} event
 */
function databaseInputChange$1(stateData, event) {
  let state = {
    ...stateData
  };
  let {
    name,
    value
  } = event.target;
  if (name === "service") {
    if (value !== "Databases for Mongodb") {
      state.plan = "standard";
      state.group_id = "member";
    }
    state.service = kebabCase$1(value);
  } else if (name === "plan") {
    state.plan = kebabCase$1(value);
  } else if (value === "") {
    state[name] = null;
  } else if (name === "memory") {
    state.memory = Number(value);
  } else if (name === "disk") {
    state.disk = Number(value);
  } else if (name === "cpu") {
    state.cpu = Number(value);
  } else state[name] = value;
  return state;
}
var database = {
  databaseInputChange: databaseInputChange$1
};

/**
 * handle toggle for resource group
 * @param {Object} stateData
 * @param {string} name name of the object key to change
 */
function handleRgToggle$1(stateData, name) {
  let state = {
    ...stateData
  };

  // Turn off the use_prefix toggle when not using data.
  if (name === "use_data" && state.use_data === false) {
    state[name] = !state[name];
    state.use_prefix = false;
  } else {
    state[name] = !state[name];
  }
  return state;
}
var resourceGroups = {
  handleRgToggle: handleRgToggle$1
};

/**
 * Handle vpn-server input
 * @param {event} event
 */
function handleVpnServerInputChange$1(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let newState = {
    ...stateData
  };
  //handle crn inputs
  let crnList = value ? value.replace(/\s\s+/g, "") // replace extra spaces
  .replace(/,(?=,)/g, "") // prevent null tags from
  .replace(/[^\w,-:]/g, "") : [];
  // client_dns_server_ips input: removing white space and checking for empty value
  let clientDnsServerIps = value ? value.replace(/\s*/g, "") : null;
  if (name === "method") {
    // Clear client_ca_crn when method changes
    newState.method = value.toLowerCase();
    newState.client_ca_crn = "";
  } else if (name === "vpc") {
    // Clear subnet and security groups when vpc changes
    newState.vpc = value;
    newState.subnets = [];
    newState.security_groups = [];
  } else if (name === "certificate_crn") {
    newState.certificate_crn = crnList;
  } else if (name === "client_ca_crn") {
    newState.client_ca_crn = crnList;
  } else if (name === "protocol") {
    newState.protocol = value.toLowerCase();
  } else if (name === "client_dns_server_ips") {
    newState.client_dns_server_ips = clientDnsServerIps;
  } else if (name === "additional_prefixes") {
    newState.additional_prefixes = value.replace(/\s*/g, "").split(",");
  } else {
    newState = {
      [name]: value
    };
  }
  return newState;
}
var vpnServer = {
  handleVpnServerInputChange: handleVpnServerInputChange$1
};

const {
  isNullOrEmptyString: isNullOrEmptyString$4,
  isIpv4CidrOrAddress: isIpv4CidrOrAddress$1
} = lazyZ;
const {
  RegexButWithWords: RegexButWithWords$2
} = regexButWithWords;
const ipRangeExpression = new RegexButWithWords$2().wordBoundary().group(exp => {
  exp.group(exp => {
    exp.group(exp => {
      exp.literal("2").set("1-5").set("0-6");
    }).or().group(exp => {
      exp.literal("1").digit(2);
    }).or().group(exp => {
      exp.digit(1, 2);
    });
  }).literal(".");
}, 3).group(exp => {
  exp.group(exp => {
    exp.literal("2").set("1-5").set("0-6");
  }).or().group(exp => {
    exp.literal("1").digit(2);
  }).or().group(exp => {
    exp.digit(1, 2);
  });
}).literal("-").group(exp => {
  exp.group(exp => {
    exp.group(exp => {
      exp.literal("2").set("1-5").set("0-6");
    }).or().group(exp => {
      exp.literal("1").digit(2);
    }).or().group(exp => {
      exp.digit(1, 2);
    });
  }).literal(".");
}, 3).group(exp => {
  exp.group(exp => {
    exp.literal("2").set("1-5").set("0-6");
  }).or().group(exp => {
    exp.literal("1").digit(2);
  }).or().group(exp => {
    exp.digit(1, 2);
  });
}).wordBoundary().done("g");

/**
 * create cbr invalid field sta
 * @param {*} field
 * @param {*} value
 * @returns {Object} invalid boolean invalidText string
 */
function cbrInvalid$1(field, value) {
  let invalid = {
    invalid: false,
    invalidText: ""
  };
  if (!isNullOrEmptyString$4(value) && (value.match(/^[0-9a-z-]+$/) === null || value.length >= 128)) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid ${field}. Value must match regex expression /^[0-9a-z-]+$/.`;
  }
  return invalid;
}

/**
 * cbr value is invalid
 * @param {*} type
 * @param {*} value
 * @returns {Object} invalid boolean invalidText string
 */
function cbrValueInvalid$1(type, value) {
  let invalid = {
    invalid: false,
    invalidText: ""
  };
  if (isNullOrEmptyString$4(value)) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid value for type ${type}. Cannot be empty string.`;
  } else if (type === "ipAddress") {
    if (!isIpv4CidrOrAddress$1(value) || value.includes("/")) {
      invalid.invalid = true;
      invalid.invalidText = `Invalid value for type ${type}. Value must be a valid IPV4 Address.`;
    }
  } else if (type === "ipRange") {
    if (value.match(ipRangeExpression) === null) {
      invalid.invalid = true;
      invalid.invalidText = `Invalid value for type ${type}. Value must be a range of IPV4 Addresses.`;
    }
  } else {
    invalid = cbrInvalid$1(type, value);
  }
  return invalid;
}
const cbrTypeNameMap$1 = {
  ipAddress: "IP Address",
  ipRange: "IP Range",
  subnet: "Subnet",
  vpc: "VPC",
  serviceRef: "Service Ref"
};
const cbrNameTypeMap = {
  "IP Address": "ipAddress",
  "IP Range": "ipRange",
  Subnet: "subnet",
  VPC: "vpc",
  "Service Ref": "serviceRef"
};

/**
 * return a placeholder for value on exclusion/address form
 * @param {string} type
 * @returns
 */
function cbrValuePlaceholder$1(type) {
  return type === "ipAddress" ? "x.x.x.x" : type === "ipRange" ? "x.x.x.x-x.x.x.x" : `my-cbr-zone-${type}`;
}

/**
 * handle input change for cbr rules
 * @param {*} event
 * @param {Object} stateData
 * @returns object
 */
function handleRuleInputChange$1(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let state = {
    ...stateData
  };
  if (name === "enforcement_mode") {
    state[name] = value.toLowerCase();
  } else {
    state[name] = value;
  }
  return state;
}

/**
 * handle exclusion and address input change
 * @param {*} event
 * @param {Object} stateData
 */
function handleExclusionAddressInputChange$1(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let state = {
    ...stateData
  };
  if (name === "type") state[name] = cbrNameTypeMap[value];else state[name] = value;
  return state;
}
var cbrUtils = {
  cbrInvalid: cbrInvalid$1,
  cbrValueInvalid: cbrValueInvalid$1,
  cbrValuePlaceholder: cbrValuePlaceholder$1,
  handleRuleInputChange: handleRuleInputChange$1,
  cbrTypeNameMap: cbrTypeNameMap$1,
  handleExclusionAddressInputChange: handleExclusionAddressInputChange$1
};
var cbrUtils_1 = cbrUtils.cbrInvalid;
var cbrUtils_2 = cbrUtils.cbrValueInvalid;
var cbrUtils_3 = cbrUtils.cbrValuePlaceholder;
var cbrUtils_5 = cbrUtils.cbrTypeNameMap;
var cbrUtils_6 = cbrUtils.handleExclusionAddressInputChange;

const {
  contains: contains$2
} = lazyZ;

/**
 * filter function for kube version select
 * @param {string} version
 * @param {string} kube_type
 * @returns {string} version
 */
function filterKubeVersion$2(version, kube_type) {
  if (kube_type === "openshift" && contains$2(version, "openshift") ||
  // is openshift and contains openshift
  kube_type !== "openshift" && !contains$2(version, "openshift") ||
  // is not openshift and does not contain openshift
  version === "default" // or is default
  ) {
    return version.replace(/\s\(Default\)/g, ""); // replace default with empty string
  }
}

var cluster = {
  filterKubeVersion: filterKubeVersion$2
};

/**
 * custom resolver input change
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} new state
 */
function handleDnsResolverInputChange$1(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let state = {
    ...stateData
  };
  if (name === "vpc") {
    state[name] = value;
    state.subnets = [];
  } else {
    state[name] = value;
  }
  return state;
}

/**
 * handle dns form input change
 * @param {*} event
 * @returns {Object} state update object
 */
function dnsFormInputChange$1(event) {
  let {
    name,
    value
  } = event.target;
  if (name === "plan") value = value.toLowerCase();
  return {
    [name]: value
  };
}
var dns = {
  handleDnsResolverInputChange: handleDnsResolverInputChange$1,
  dnsFormInputChange: dnsFormInputChange$1
};

const {
  RegexButWithWords: RegexButWithWords$1
} = regexButWithWords;
const {
  isNullOrEmptyString: isNullOrEmptyString$3
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
function isValidUrl$1(url) {
  if (isNullOrEmptyString$3(url) || url === "null") return true;
  return url.match(urlValidationExp) !== null;
}

/**
 * verifies tmos admin password
 * @param {str} password
 * @returns {boolean} true when password is valid
 */
function isValidTmosAdminPassword$1(password) {
  if (isNullOrEmptyString$3(password)) return true;else return password.match(tmosAdminPasswordValidationExp) !== null;
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
function getValidAdminPassword$1(length) {
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
var f5 = {
  getValidAdminPassword: getValidAdminPassword$1,
  isNullOrEmptyString: isNullOrEmptyString$3,
  isValidTmosAdminPassword: isValidTmosAdminPassword$1,
  isValidUrl: isValidUrl$1
};
var f5_1 = f5.getValidAdminPassword;
var f5_2 = f5.isNullOrEmptyString;
var f5_3 = f5.isValidTmosAdminPassword;
var f5_4 = f5.isValidUrl;

/**
 * f5 vsi input change
 * @param {Object} stateData
 * @param {object} event
 * @returns stateData
 */
function f5VsiInputChange$1(stateData, event) {
  let state = {
    ...stateData
  };
  let {
    name,
    value
  } = event.target;
  if (name === "zones") state.zones = Number(value);else state[name] = value;
  return state;
}

/**
 * initialize vsis
 * @param {Object} stateData
 * @param {Object} componentProps
 * @returns {array} f5 vsis
 */
function f5Vsis$1(stateData, componentProps) {
  let vsis = [...componentProps.vsis];
  while (vsis.length < stateData.zones) {
    // add a new vsi to display
    vsis.push(componentProps.initVsiCallback(componentProps.edge_pattern, `zone-${vsis.length + 1}`, componentProps.f5_on_management, {
      image: stateData.image,
      resource_group: stateData.resource_group,
      ssh_keys: stateData.ssh_keys,
      profile: stateData.profile
    }));
  }
  return vsis;
}
var f5Vsi = {
  f5VsiInputChange: f5VsiInputChange$1,
  f5Vsis: f5Vsis$1
};
var f5Vsi_1 = f5Vsi.f5VsiInputChange;
var f5Vsi_2 = f5Vsi.f5Vsis;

const {
  allFieldsNull,
  transpose: transpose$1
} = lazyZ;

/**
 * get which rule protocol is being used
 * @param {string} rule
 * @returns {string} protocol
 */
function getRuleProtocol$1(rule) {
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
 * @param {boolean} isSecurityGroup
 * @returns {Object} default rule object
 */
function getSubRule$1(rule, isSecurityGroup) {
  let defaultRule = {
    port_max: null,
    port_min: null,
    source_port_max: null,
    source_port_min: null,
    type: null,
    code: null
  };
  if (getRuleProtocol$1(rule) !== "all") {
    transpose$1(rule[getRuleProtocol$1(rule)], defaultRule);
  }
  if (isSecurityGroup) {
    delete defaultRule.source_port_min;
    delete defaultRule.source_port_max;
  }
  return defaultRule;
}

/**
 * Helper function to move items up and down in the list so they can be rendered properly
 * @param {Array} arr
 * @param {number} indexA
 * @param {number} indexB
 */
function swapArrayElements$1(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

/**
 *
 * @param {Object} props
 * @param {bool} props.isSecurityGroup
 * @returns {string} classname
 */
function getOrderCardClassName$1(props) {
  return "marginBottomSmall positionRelative " + (props.isSecurityGroup ? "formInSubForm" : "subForm");
}

/**
 * set up rows and headers
 * @param {Object} componentProps
 * @param {array} componentProps.rules
 * @param {bool} componentProps.isSecurityGroup
 * @returns {object} rows, headers for data table
 */
function setupRowsAndHeaders(componentProps) {
  const {
    rules,
    isSecurityGroup
  } = {
    ...componentProps
  };
  const headers = [{
    key: "name",
    header: "Name"
  }, {
    key: "direction",
    header: "Direction"
  }, {
    key: "source",
    header: "Source"
  }, {
    key: "protocol",
    header: "Protocol"
  }, {
    key: "port",
    header: "Port"
  }];
  const rows = JSON.parse(JSON.stringify(rules));

  // set up required data for each row
  rows.forEach(row => {
    row.protocol = getRuleProtocol$1(row);
    row.id = row.name;
    row.port = row.protocol === "all" ? "ALL" : row.protocol === "icmp" ? row.icmp.code : `${row[row.protocol].port_min}-${row[row.protocol].port_max}`;
    delete row.icmp;
    delete row.tcp;
    delete row.udp;
  });

  // add in action and destination if not security group
  if (!isSecurityGroup) {
    headers.splice(1, 0, {
      // add extra fields if not security group
      key: "action",
      header: "Action"
    });
    headers.splice(4, 0, {
      key: "destination",
      header: "Destination"
    });
  }
  return {
    rows: rows,
    headers: headers
  };
}
var networkingOrderCard = {
  getRuleProtocol: getRuleProtocol$1,
  getSubRule: getSubRule$1,
  swapArrayElements: swapArrayElements$1,
  getOrderCardClassName: getOrderCardClassName$1,
  setupRowsAndHeaders
};
var networkingOrderCard_5 = networkingOrderCard.setupRowsAndHeaders;

/**
 * handle input change for routing tables
 * @param {Object} stateData
 * @param Object event
 */
function routingTableRouteInputChange$1(stateData, event) {
  let state = {
    ...stateData
  };
  let {
    name,
    value
  } = event.target;
  state[name] = value;
  if (name === "action" && value !== "deliver") {
    state.next_hop = "0.0.0.0";
  } else if (name === "action") {
    state.next_hop = null;
  }
  return state;
}
var routingTable = {
  routingTableRouteInputChange: routingTableRouteInputChange$1
};
var routingTable_1 = routingTable.routingTableRouteInputChange;

/**
 * Handle crn input
 * @param {event} event
 */
function handleCRNs$1(event) {
  let crns = event.target.value ? event.target.value.replace(/\s\s+/g, "") // replace extra spaces
  .replace(/,(?=,)/g, "") // prevent null tags from
  .replace(/[^\w,-:]/g, "").split(",") : [];
  return {
    crns: crns
  };
}

/**
 * Handle vpc selection
 * @param {Array} selectedItems list of selected vpcs
 * @param {String} tgw transit gateway name
 * @param {Array<object>} oldConnections previous state connections
 */
function handleVpcSelect$1(selectedItems, tgw, oldConnections) {
  let connections = [];
  selectedItems.forEach(vpc => {
    connections.push({
      tgw: tgw,
      vpc: vpc
    });
  });
  (oldConnections || []).forEach(connection => {
    if (connection.power) {
      connections.push(connection);
    }
  });
  return {
    connections: connections
  };
}
var transitGateway = {
  handleCRNs: handleCRNs$1,
  handleVpcSelect: handleVpcSelect$1
};

const {
  contains: contains$1,
  splat: splat$1
} = lazyZ;

/**
 * on checklist click
 * @param {Array<string>} items items selected
 * @param {string} ref reference to check
 * @param {Array<object>} secrets list of secrets objects
 * @returns {Array<string>} list of selected items
 */
function onCheckClick$1(items, ref, secrets) {
  let selected = [];
  if (ref === "Select All" && contains$1(items, ref)) {
    selected = [];
  } else if (ref === "Select All") {
    selected = ["Select All"].concat([...splat$1(secrets, "ref")]);
  } else if (contains$1(items, ref)) {
    selected = [...items];
    selected.splice(selected.indexOf(ref), 1);
  } else {
    selected = [...items].concat([ref]);
  }
  if (selected.length < secrets.length + 1 && contains$1(selected, "Select All")) {
    selected.shift();
  }
  return selected;
}
var secretsManager = {
  onCheckClick: onCheckClick$1
};

/**
 * get list of strings from zone
 * @param {Object} stateData
 * @param {object} componentProps
 * @returns {Array<string>} stringified zones
 */
function parseZoneStrings$1(stateData, componentProps) {
  let stringZones = [];
  stateData.select_zones.forEach(zone => {
    stringZones.push(String(zone));
  });
  return stringZones;
}

/**
 * Handle select zones
 * @param {event} event
 * @param {object} stateData
 * @returns {object} new state
 */
function handleSelectZones$1(event, stateData) {
  let items = [];
  let state = {
    ...stateData
  };
  event.selectedItems.forEach(item => {
    items.push(Number(item));
  });
  state.select_zones = items;
  return state;
}

/**
 * @param {string} name
 * @param {Object} stateData
 * @returns {object} new state
 */
function handleSubnetTierToggle$1(name, stateData) {
  let nextState = {
    ...stateData
  };
  nextState[name] = !stateData[name];
  if (name === "advanced" && nextState[name] === true) {
    nextState.select_zones = [];
    [1, 2, 3].forEach(zone => {
      if (zone <= stateData.zones) nextState.select_zones.push(zone);
    });
  } else if (name === "advanced") {
    nextState.zones = stateData.select_zones.length;
    nextState.select_zones = null;
  }
  return nextState;
}

/**
 * handle hide/show form data
 */
function handleSubnetShowToggle(stateData, componentProps) {
  let state = {
    ...stateData
  };
  if (componentProps.propsMatchState(stateData, componentProps) === false && stateData.hide === false && !stateData.showUnsavedChangesModal) {
    state.showUnsavedChangesModal = true;
  } else {
    state.hide = !state.hide;
    state.showUnsavedChangesModal = false;
  }
  return state;
}
var subnets = {
  parseZoneStrings: parseZoneStrings$1,
  handleSelectZones: handleSelectZones$1,
  handleSubnetTierToggle: handleSubnetTierToggle$1,
  handleSubnetShowToggle
};
var subnets_4 = subnets.handleSubnetShowToggle;

/**
 * input change for vpn routes
 * @param {Object} event
 * @param {Object} stateData
 * @returns {object} new state
 */
function vpnRouteInputChange$1(event, stateData) {
  let {
    name,
    value
  } = event.target;
  let state = {
    ...stateData
  };
  state[name] = value.toLowerCase();
  return state;
}
var vpn = {
  vpnRouteInputChange: vpnRouteInputChange$1
};

const {
  transpose
} = lazyZ;

/**
 *
 * @param {Object} event
 * @param {Object} stateData
 * @param {Object} componentProps
 */
function vsiHandleInputChange$1(event, stateData, componentProps) {
  let {
    name,
    value
  } = event.target;
  let stateChangeParams = {
    ...stateData
  };
  stateChangeParams[name] = name === "vsi_per_subnet" && value !== "" ? Number(value) : value;
  if (name === "vpc")
    // Clear subnets and security groups when vpc changes
    componentProps.isTeleport ? transpose({
      subnet: "",
      security_groups: []
    }, stateChangeParams) : transpose({
      subnets: [],
      security_groups: []
    }, stateChangeParams);
  return stateChangeParams;
}
var vsi = {
  vsiHandleInputChange: vsiHandleInputChange$1
};
var vsi_1 = vsi.vsiHandleInputChange;

/**
 * handle change for vpn gateway
 * @param {*} event
 * @returns {object} state object
 */
function handleVpnGatewayChange$1(event) {
  let {
    name,
    value
  } = event.target;
  if (name === "vpc") {
    return {
      vpc: value,
      subnet: ""
    };
  } else return {
    [name]: value
  };
}
var vpnGateways = {
  handleVpnGatewayChange: handleVpnGatewayChange$1
};

const services$1 = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr",
  "secrets-manager": "Secrets Manager",
  "Secrets Manager": "secrets-manager"
};
const serviceGroups$1 = ["Hyper Protect Crypto Services", "Key Protect", "Object Storage", "Container Registry", "Secrets Manager"];

/**
 * handle vpc dropdown
 * @param {Object} event
 * @param {Object} stateData
 * @returns {object} new state
 */
function vpeVpcDropdown$1(event, stateData) {
  let state = {
    ...stateData
  };
  state.vpc = event.target.value;
  state.security_groups = [];
  state.subnets = [];
  return state;
}
/**
 * handle service dropdown
 * @param {Object} event
 * @param {Object} stateData
 * @returns {object} new state
 */
function vpeServiceDropdown$1(event, stateData) {
  let state = {
    ...stateData
  };
  state.service = services$1[event.target.value];
  return state;
}
var vpe = {
  services: services$1,
  serviceGroups: serviceGroups$1,
  vpeVpcDropdown: vpeVpcDropdown$1,
  vpeServiceDropdown: vpeServiceDropdown$1
};

/**
 * initialize worker pool state
 * @param {*} props
 * @returns {Object} state initialization object
 */

function workerPoolInit$1(props) {
  return props.isModal ? {
    name: "",
    flavor: props.cluster.flavor,
    subnets: props.cluster.subnets || [],
    vpc: props.cluster.vpc,
    workers_per_subnet: props.cluster.workers_per_subnet,
    entitlement: props.cluster.entitlement
  } : {
    ...props.data
  };
}

/**
 * handle worker pool input change
 * @param {*} event
 * @param {*} stateData
 * @returns {Object} state data changed
 */
function workerPoolInputChange$1(event, stateData) {
  let {
    name,
    value
  } = event.target;
  let pool = {
    ...stateData
  };
  if (name === "workers_per_subnet") {
    pool[name] = Number(value);
  } else {
    pool[name] = value === "null" ? null : value;
  }
  return pool;
}

/**
 * handle worker pool subnet change
 * @param {*} subnets
 * @param {*} stateData
 * @returns {Object} state data object
 */
function workerPoolSubnetChange$1(subnets, stateData) {
  let pool = {
    ...stateData
  };
  pool.subnets = subnets;
  return pool;
}
var workerPools = {
  workerPoolInit: workerPoolInit$1,
  workerPoolInputChange: workerPoolInputChange$1,
  workerPoolSubnetChange: workerPoolSubnetChange$1
};

const {
  handlePgwToggle
} = vpc;
const {
  atrackerInputChange
} = atracker;
const {
  databaseInputChange
} = database;
const {
  handleRgToggle
} = resourceGroups;
const {
  handleVpnServerInputChange
} = vpnServer;
const {
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  cbrTypeNameMap,
  handleExclusionAddressInputChange
} = cbrUtils;
const {
  filterKubeVersion: filterKubeVersion$1
} = cluster;
const {
  handleDnsResolverInputChange,
  dnsFormInputChange
} = dns;
const {
  getValidAdminPassword,
  isNullOrEmptyString: isNullOrEmptyString$2,
  isValidTmosAdminPassword,
  isValidUrl
} = f5;
const {
  f5VsiInputChange,
  f5Vsis
} = f5Vsi;
const {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName
} = networkingOrderCard;
const {
  routingTableRouteInputChange
} = routingTable;
const {
  handleCRNs,
  handleVpcSelect
} = transitGateway;
const {
  onCheckClick
} = secretsManager;
const {
  parseZoneStrings,
  handleSelectZones,
  handleSubnetTierToggle
} = subnets;
const {
  vpnRouteInputChange
} = vpn;
const {
  vsiHandleInputChange
} = vsi;
const {
  handleVpnGatewayChange
} = vpnGateways;
const {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown
} = vpe;
const {
  workerPoolInit,
  workerPoolInputChange,
  workerPoolSubnetChange
} = workerPools;
var forms = {
  workerPoolSubnetChange,
  workerPoolInputChange,
  workerPoolInit,
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
  vsiHandleInputChange,
  vpnRouteInputChange,
  handleSubnetTierToggle,
  parseZoneStrings,
  handleSelectZones,
  handleVpnGatewayChange,
  f5Vsis,
  f5VsiInputChange,
  routingTableRouteInputChange,
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  cbrTypeNameMap,
  handleExclusionAddressInputChange,
  getValidAdminPassword,
  isNullOrEmptyString: isNullOrEmptyString$2,
  isValidTmosAdminPassword,
  isValidUrl,
  handleDnsResolverInputChange,
  dnsFormInputChange,
  atrackerInputChange,
  databaseInputChange,
  handleRgToggle,
  handleCRNs,
  handleVpcSelect,
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
  filterKubeVersion: filterKubeVersion$1,
  onCheckClick,
  handleVpnServerInputChange,
  handlePgwToggle
};
var forms_1 = forms.workerPoolSubnetChange;
var forms_2 = forms.workerPoolInputChange;
var forms_3 = forms.workerPoolInit;
var forms_4 = forms.services;
var forms_5 = forms.serviceGroups;
var forms_6 = forms.vpeVpcDropdown;
var forms_7 = forms.vpeServiceDropdown;
var forms_9 = forms.vpnRouteInputChange;
var forms_10 = forms.handleSubnetTierToggle;
var forms_11 = forms.parseZoneStrings;
var forms_12 = forms.handleSelectZones;
var forms_13 = forms.handleVpnGatewayChange;
var forms_17 = forms.cbrInvalid;
var forms_20 = forms.handleRuleInputChange;
var forms_27 = forms.handleDnsResolverInputChange;
var forms_28 = forms.dnsFormInputChange;
var forms_29 = forms.atrackerInputChange;
var forms_30 = forms.databaseInputChange;
var forms_31 = forms.handleRgToggle;
var forms_32 = forms.handleCRNs;
var forms_33 = forms.handleVpcSelect;
var forms_34 = forms.getRuleProtocol;
var forms_35 = forms.getSubRule;
var forms_36 = forms.swapArrayElements;
var forms_37 = forms.getOrderCardClassName;
var forms_39 = forms.onCheckClick;
var forms_40 = forms.handleVpnServerInputChange;

const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  invalidRegex,
  handleClusterInputChange,
  subnetTierName
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
  saveChangeButtonClass,
  saveAddParams,
  editCloseParams,
  deleteButtonParams
} = buttonUtils;
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
} = methodFunctions;
const {
  docTextFieldParams
} = docUtils;
const {
  icseSelectParams
} = dropdowns;
const {
  handleNumberDropdownEvent,
  titleGroupParams,
  formGroupParams,
  icseSubFormParams,
  icseHeadingParams,
  statelessToggleFormParams
} = utils;
const {
  emptyResourceTileParams
} = emptyResourceTile;
const {
  onToggleEvent,
  toggleParams
} = inputUtils;
const {
  icseFormTemplateParams
} = icseFormTemplate;
const {
  statefulTabPanelParams
} = statefulTabPanel;
const {
  popoverWrapperParams
} = popoverWrapper;
const {
  filterKubeVersion
} = forms;
var lib = {
  onToggleEvent,
  toggleParams,
  docTextFieldParams,
  handleNumberDropdownEvent,
  icseSelectParams,
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  formatInputPlaceholder,
  saveChangeButtonClass,
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
  invalidRegex,
  handleClusterInputChange,
  subnetTierName,
  saveAddParams,
  editCloseParams,
  deleteButtonParams,
  emptyResourceTileParams,
  icseFormTemplateParams,
  titleGroupParams,
  formGroupParams,
  icseSubFormParams,
  icseHeadingParams,
  statelessToggleFormParams,
  statefulTabPanelParams,
  popoverWrapperParams,
  filterKubeVersion
};
var lib_3 = lib.docTextFieldParams;
var lib_4 = lib.handleNumberDropdownEvent;
var lib_5 = lib.icseSelectParams;
var lib_7 = lib.addClassName;
var lib_9 = lib.checkNullorEmptyString;
var lib_12 = lib.eventTargetToNameAndValue;
var lib_13 = lib.toggleStateBoolean;
var lib_14 = lib.setNameToValue;
var lib_15 = lib.invalidRegex;
var lib_16 = lib.handleClusterInputChange;
var lib_17 = lib.subnetTierName;
var lib_18 = lib.saveAddParams;
var lib_19 = lib.editCloseParams;
var lib_20 = lib.deleteButtonParams;
var lib_22 = lib.icseFormTemplateParams;
var lib_28 = lib.statefulTabPanelParams;
var lib_29 = lib.popoverWrapperParams;
var lib_30 = lib.filterKubeVersion;

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
    let {
      noPopover,
      autoAlign,
      contentClassName
    } = lib_29(this.props);
    return noPopover ? this.props.children : /*#__PURE__*/React.createElement("div", {
      className: lib_7("popover-obj", this.props),
      onMouseEnter: this.handleMouseOver,
      onMouseLeave: this.handleMouseOut
    }, /*#__PURE__*/React.createElement(Popover, {
      open: this.state.isHovering,
      autoAlign: autoAlign,
      dropShadow: false,
      highContrast: true,
      caret: false,
      align: this.props.align
    }, this.props.children, /*#__PURE__*/React.createElement(PopoverContent, {
      className: contentClassName
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Toggletip, {
    align: props.align
  }, /*#__PURE__*/React.createElement(ToggletipButton, null, /*#__PURE__*/React.createElement(Information, {
    className: "tooltipMarginLeft"
  })), /*#__PURE__*/React.createElement(ToggletipContent, null, /*#__PURE__*/React.createElement("p", null, props.content), props.link && /*#__PURE__*/React.createElement(ToggletipActions, null, /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "More information")))));
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
  if (!props.noLabelText && props.labelText === undefined && props.field === undefined) {
    throw new Error("ToolTipWrapper expects `props.labelText` or `props.field` when rendering labelText to be provided, got neither. To not render label text, use the `noLabelText` prop.");
  }
  // remove label text from components where it is not valid param
  if (props.noLabelText) delete allProps.labelText;else allProps.labelText = " ";
  allProps.className = lib_7("tooltip", {
    ...props
  });
  return /*#__PURE__*/React.createElement("div", {
    className: props.noLabelText ? "" : "cds--form-item"
  }, props.noLabelText ?
  /*#__PURE__*/
  // No label- this is usually a title
  React.createElement("div", {
    className: "labelRow"
  }, RenderForm$1(props.innerForm, allProps), tooltip) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cds--label labelRow"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.labelText || titleCase$2(props.field)), tooltip), props.children ? /*#__PURE__*/React.cloneElement(props.children, {
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
  let className = utils_2(props);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes.node.isRequired
};
const IcseFormGroup = props => {
  let formGroupClassName = utils_3(props);
  return /*#__PURE__*/React.createElement("div", {
    className: formGroupClassName
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
  let className = utils_4(props);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
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
  let className = utils_5(props);
  className = className.replace("marginBottomSmall", "");
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement(DynamicToolTipWrapper, {
    tooltip: props.tooltip,
    noLabelText: true,
    id: props.name,
    innerForm: () => {
      return props.type === "subHeading" ? /*#__PURE__*/React.createElement("h5", null, props.name) : props.type === "p" ? /*#__PURE__*/React.createElement("p", {
        className: props.toggleFormTitle ? "toggleFormTitle" : null
      }, props.name) : props.type === "section" ? /*#__PURE__*/React.createElement("h6", null, props.name) : /*#__PURE__*/React.createElement("h4", null, props.name);
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
  let {
    type,
    dynamicRenderHide
  } = utils_6(props);
  return props.hideTitle ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleGroup, {
    hide: props.hide,
    props: props,
    className: props.className
  }, props.hideIcon !== true && /*#__PURE__*/React.createElement(EditCloseIcon, {
    name: kebabCase$6(props.name),
    onClick: props.onIconClick,
    type: props.iconType,
    open: props.hide === false
  }), /*#__PURE__*/React.createElement(IcseHeading, {
    type: type,
    name: props.name,
    toggleFormTitle: props.toggleFormTitle,
    buttons: /*#__PURE__*/React.createElement(DynamicRender, {
      hide: dynamicRenderHide,
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
  let {
    hoverText,
    wrapperClassDisabled,
    wrapperClassInline,
    buttonKind,
    buttonClass
  } = lib_18(props);
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: hoverText,
    className: wrapperClassDisabled + wrapperClassInline,
    align: props.hoverTextAlign
  }, /*#__PURE__*/React.createElement(Button, {
    "aria-label": props.name + "-" + props.type,
    kind: buttonKind,
    onClick: props.onClick,
    className: buttonClass,
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
  let {
    hoverText
  } = lib_19(props);
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: hoverText
  }, /*#__PURE__*/React.createElement("i", {
    role: "button",
    "aria-label": props.name + "-open-close",
    onClick: props.onClick,
    className: "chevron"
  }, props.open ? /*#__PURE__*/React.createElement(ChevronDown, null) : props.type === "add" ?
  /*#__PURE__*/
  // keep add button for optional components
  React.createElement(Add, null) : /*#__PURE__*/React.createElement(ChevronRight, null)));
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
  let {
    hoverText,
    popoverClassName,
    buttonClassName,
    iconClassName
  } = lib_20(props);
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: hoverText,
    align: props.hoverTextAlign,
    className: popoverClassName
  }, /*#__PURE__*/React.createElement(Button, {
    "aria-label": props.name + "-delete",
    className: buttonClassName,
    kind: "ghost",
    size: "sm",
    onClick: props.onClick,
    disabled: props.disabled === true
  }, /*#__PURE__*/React.createElement(TrashCan, {
    className: iconClassName
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
  let {
    className,
    text
  } = lib_3(props);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, text);
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
const LastUpdated = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "smallerText docsUpdated"
  }, "Updated", " ", new Date(props.date).toLocaleString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }));
};
LastUpdated.defaultProps = {
  date: "1/1/1970"
};
LastUpdated.propTypes = {
  date: PropTypes.string.isRequired
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
  })), /*#__PURE__*/React.createElement("div", {
    className: "displayFlex spaceBetween"
  }, props.relatedLinks && /*#__PURE__*/React.createElement(RelatedLinks, {
    links: props.relatedLinks
  }), props.last_updated && /*#__PURE__*/React.createElement(LastUpdated, {
    date: props.last_updated
  })));
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
  let {
    invalid,
    groups,
    popoverClassName,
    wrapperId,
    selectId,
    labelText,
    selectClassName
  } = lib_5(props);
  // please leave debug here
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    id: wrapperId,
    innerForm: () => {
      return /*#__PURE__*/React.createElement(PopoverWrapper, {
        hoverText: props.value || "",
        className: popoverClassName // inherit classnames from tooltip
      }, /*#__PURE__*/React.createElement(Select, {
        id: selectId,
        name: props.name,
        labelText: labelText,
        value: props.value || undefined,
        className: selectClassName,
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
    handleInputChange: lib_4(props),
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
    titleCaseGroups.push(titleCase$2(group).replace(/And/g, "and"));
  });
  return /*#__PURE__*/React.createElement(IcseSelect, {
    name: props.name,
    labelText: "Endpoint Type",
    groups: titleCaseGroups,
    value: titleCase$2(props.value).replace(/And/g, "and"),
    handleInputChange: event => {
      let {
        name,
        value
      } = event.target;
      props.handleInputChange({
        target: {
          name: name,
          value: kebabCase$6(value)
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
  let {
    show,
    className
  } = emptyResourceTile_1(props);
  return show ? /*#__PURE__*/React.createElement(Tile, {
    className: className
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), "No ", props.name, ".", " ", /*#__PURE__*/React.createElement(React.Fragment, null, "Click", /*#__PURE__*/React.createElement(Add, {
    size: "24",
    className: "inlineIconMargin"
  }), "button to add one.")) : "";
};
EmptyResourceTile.defaultProps = {
  name: "items in this list",
  showIfEmpty: false,
  noMarginTop: false
};
EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  noMarginTop: PropTypes.bool
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
    let {
      headingType,
      dynamicRenderHide,
      headingHide,
      buttonIsDisabled
    } = lib_28(this.props, this.state);
    return /*#__PURE__*/React.createElement(React.Fragment, null, headingHide && /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.props.name,
      type: headingType,
      className: this.props.className,
      tooltip: this.props.tooltip,
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: dynamicRenderHide,
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: kebabCase$6(this.props.name),
          type: "add",
          noDeleteButton: true,
          onClick: this.props.onClick,
          disabled: buttonIsDisabled
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
    onRequestClose: props.onRequestClose,
    size: props.size
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
  id: "default-icse-modal",
  size: "md"
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
  children: PropTypes.node.isRequired,
  size: PropTypes.string
};

/**
 * Delete modal
 * @param {*} props
 * @param {string} props.name name of modal
 * @param {string} props.additionalText optional extra text to display
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
    additionalText: props.additionalText,
    primaryButtonText: "Delete Resource",
    danger: true
  }, /*#__PURE__*/React.createElement("span", null, "You are about to delete ", name, ". This cannot be undone.", props.additionalText && /*#__PURE__*/React.createElement("div", null, props.additionalText)));
};
DeleteModal.defaultProps = {
  modalOpen: false
};
DeleteModal.propTypes = {
  name: PropTypes.string.isRequired,
  modalOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onModalSubmit: PropTypes.func.isRequired,
  additionalText: PropTypes.string
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
        className: lib_7(this.props.type === "formInSubForm" ? "formInSubForm positionRelative marginBottomSmall" : "subForm marginBottomSmall")
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
        additionalText: this.props.additionalText,
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
      if (contains$5(this.state.shownChildForms[index], childIndex)) {
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
      if (contains$5(this.state.shownArrayForms, index)) {
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
    return this.props.parentToggle ? contains$5(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
    : contains$5(this.state.shownArrayForms, index);
  }
  render() {
    let formattedName = kebabCase$6(this.props.name); // formatted component name
    // enable submit field here is set to variable value to allow for passing to
    // child array components without needing to reference `this` directly
    let formModalProps = {
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
    };
    if (this.props.defaultModalValues) {
      formModalProps.data = {
        ...this.props.defaultModalValues
      };
    }
    let {
      arrayIsEmpty,
      tabPanelClassName
    } = lib_22(this.props);
    return /*#__PURE__*/React.createElement("div", {
      id: formattedName
    }, /*#__PURE__*/React.createElement(StatefulTabPanel, {
      name: this.props.name,
      onClick: this.toggleModal,
      addText: this.props.addText,
      hideButton: this.props.hideFormTitleButton,
      subHeading: this.props.subHeading,
      className: this.props.arrayData.length === 0 ? "subHeading" : tabPanelClassName,
      tooltip: this.props.tooltip,
      about: this.props.docs ? this.props.docs() : false,
      hideAbout: this.props.hideAbout,
      form: /*#__PURE__*/React.createElement(React.Fragment, null, arrayIsEmpty ? this.props.overrideTile : /*#__PURE__*/React.createElement(EmptyResourceTile, {
        name: this.props.name,
        showIfEmpty: this.props.arrayData,
        noMarginTop: true
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
      RenderForm(this.props.innerForm, formModalProps))),
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
  deleteDisabledMessage: PropTypes.string,
  overrideTile: PropTypes.node,
  defaultModalValues: PropTypes.shape({})
};

const IcseToggle = props => {
  let {
    labelA,
    labelB,
    labelText,
    id,
    className,
    onToggle
  } = inputUtils_1(props);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(Toggle, {
    labelA: labelA,
    labelB: labelB,
    labelText: labelText,
    id: id,
    className: className,
    onToggle: onToggle,
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
  let {
    invalid,
    invalidText,
    placeholder,
    labelText,
    onInputChange
  } = inputUtils_3(props);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(TextInput, {
    id: props.id,
    className: lib_7("leftTextAlign", props),
    labelText: labelText,
    placeholder: placeholder,
    name: props.field,
    value: props.value || "",
    invalid: invalid,
    onChange: onInputChange,
    helperText: props.helperText,
    invalidText: invalidText,
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
  optional: false,
  className: "fieldWidth",
  forceKebabCase: false
};
IcseTextInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  optional: PropTypes.bool,
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
  invalidText: PropTypes.string,
  forceKebabCase: PropTypes.bool.isRequired
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
    className: lib_7("leftTextAlign", props),
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
  labelText: "Name",
  forceKebabCase: false
};
IcseNameInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  componentName: PropTypes.string,
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
  labelText: PropTypes.string.isRequired,
  forceKebabCase: PropTypes.bool.isRequired
};

/**
 * Icse multiselect template
 */
const IcseMultiSelect = props => {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
    id: props.id,
    className: lib_7("leftTextAlign", props),
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
    items: isNullOrEmptyString$6(props.vpc_name) ? [] : props.subnets,
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString$6(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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

const {
  isFunction,
  splat,
  getType,
  getObjectFromArray
} = require("lazy-z");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  let disableSave = isFunction(component.props.shouldDisableSave);
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let usesSubnetList = Array.isArray(component.props.subnetList);
  let usesSecurityGroups = Array.isArray(component.props.securityGroups);
  let usesImageList = getType(component.props.imageMap) === "object";
  let powerInstance = component.props.power;
  let powerVolumes = component.props.power_instances;
  if (component.props.shouldDisableSave) component.shouldDisableSave = component.props.shouldDisableSave.bind(component);
  if (disableSubmit) component.shouldDisableSubmit = component.props.shouldDisableSubmit.bind(component);
  if (usesSubnetList) {
    component.getSubnetList = function () {
      return splat(component.props.subnetList.filter(subnet => {
        if (subnet.vpc === component.state.vpc) return subnet;
      }), "name");
    }.bind(component);
  }
  if (powerVolumes) {
    component.getPowerInstances = function () {
      return splat(component.props.power_instances.filter(instance => {
        if (instance.workspace === component.state.workspace && (instance.pi_storage_type === component.state.pi_volume_type || !component.state.pi_volume_type)) {
          return instance;
        }
      }), "name");
    }.bind(component);
  }
  if (usesImageList) {
    component.getImageList = function () {
      if (component.props.imageMap[component.state.zone]) return splat(component.props.imageMap[component.state.zone], "name");else return [];
    }.bind(component);
  }
  if (usesSecurityGroups) {
    component.getSecurityGroupList = function () {
      return splat(component.props.securityGroups.filter(sg => {
        if (sg.vpc === component.state.vpc) return sg;
      }), "name");
    };
  }
  if (powerInstance) {
    component.getPowerSshKeyList = function () {
      let list = getObjectFromArray(component.props.power, "name", component.state.workspace).ssh_keys;
      return splat(list, "name");
    }.bind(component);
    component.getPowerImageList = function () {
      let list = getObjectFromArray(component.props.power, "name", component.state.workspace).images;
      return splat(list, "name");
    }.bind(component);
    component.getPowerNetworkList = function () {
      let list = getObjectFromArray(component.props.power, "name", component.state.workspace).network;
      return splat(list, "name");
    }.bind(component);
  }

  // set update
  component.componentDidMount = function () {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
  }.bind(component);
  component.componentDidUpdate = function (prevProps) {
    if (disableSubmit) component.shouldDisableSubmit();
    if (disableSave) component.shouldDisableSave(this.state, this.props);
    if (usesImageList) {
      component.forceUpdateOnPropsChange(prevProps);
    }
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
  component.eventTargetToNameAndValue = lib_12.bind(component);
  component.toggleStateBoolean = lib_13.bind(component);
  component.setNameToValue = lib_14.bind(component);
}

class AppIdKeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
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
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-app-id-key-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      field: "name",
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
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("use_data", this.state));
  }
  render() {
    let keyProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      arrayParentName: this.props.data.name
    };
    transpose$2({
      ...this.props.keyProps
    }, keyProps);
    let composedClassName = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return /*#__PURE__*/React.createElement("div", {
      id: "appid-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-appid-name",
      componentName: this.props.data.name + "-appid-name",
      placeholder: "my-appid-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: composedClassName
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: this.props.data.name + "-appid-rg",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: composedClassName,
      id: `${this.props.data.name}-app-id-rg`
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmallest",
      id: `${this.props.data.name}-app-id-existing-instance`
    })), this.state.use_data === false && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      value: this.state.encryption_key,
      groups: this.props.encryptionKeys,
      formName: this.props.data.name + " AppID",
      name: "encryption_key",
      labelText: "(Optional) Encryption Key",
      handleInputChange: this.handleInputChange,
      disableInvalid: true
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
    keys: PropTypes.array.isRequired,
    encryption_key: PropTypes.string
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired
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
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(forms_29(this.state, event));
  }

  /**
   * set locations
   * @param {string} value
   */
  handleMultiSelect(value) {
    this.setState(this.setNameToValue("locations", value));
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
        content: "Enable or Disable routing in your Activity Tracker Instance",
        align: "bottom-left"
      },
      labelText: "Enabled",
      defaultToggled: this.state.enabled,
      toggleFieldName: "enabled",
      onToggle: this.handleToggle,
      id: "atracker-enable-disable"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Only one instance of Activity Tracker can be created per region",
        align: "bottom-left"
      },
      labelText: "Create Activity Tracker Instance",
      defaultToggled: this.state.instance,
      toggleFieldName: "instance",
      onToggle: this.handleToggle,
      id: "atracker-instance"
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
    }), /*#__PURE__*/React.createElement(IcseSelect, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
      labelText: "Create Route",
      defaultToggled: this.state.add_route,
      toggleFieldName: "add_route",
      onToggle: this.handleToggle,
      id: "atracker-add-route"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
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
    })), this.state.instance && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${this.props.data.name}-atracker-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      labelText: "Resource Group",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      groups: ["Lite", "7 Day", "14 Day", "30 Day"],
      formName: this.props.data.name + "-atracker-plan",
      name: "plan",
      value: titleCase$2(this.state.plan),
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      labelText: "Plan",
      invalidText: "Select a plan."
    }), this.props.logdnaEnabled && /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Create an archive with the LogDNA Provider"
      },
      labelText: "Create LogDNA Archive",
      defaultToggled: this.state.archive,
      name: "archive",
      toggleFieldName: "archive",
      onToggle: this.handleToggle,
      id: "logdna-archive",
      className: "fieldWidth"
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
    plan: "lite",
    archive: false,
    add_route: false,
    locations: []
  },
  logdnaEnabled: false
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
  isModal: PropTypes.bool.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  logdnaEnabled: PropTypes.bool.isRequired
};

class ClassicVlanForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
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
      value: this.state.name,
      onChange: this.handleInputChange,
      componentProps: this.props,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "VLAN Type",
      name: "type",
      formName: this.props.data.name + "-type",
      groups: this.props.vlanTypes,
      value: this.state.type,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a VLAN type.",
      id: `${this.props.data.name}-type`
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Datacenter",
      name: "datacenter",
      formName: this.props.data.name + "-datacenter",
      groups: this.props.datacenters,
      value: this.state.datacenter,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a datacenter.",
      id: `${this.props.data.name}-datacenter`
    })));
  }
}
ClassicVlanForm.defaultProps = {
  data: {
    name: "",
    type: "",
    datacenter: ""
  }
};
ClassicVlanForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    datacenter: PropTypes.string
  }).isRequired,
  vlanTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  datacenters: PropTypes.arrayOf(PropTypes.string).isRequired
};

const {
  isWholeNumber,
  isInRange
} = lazyZ;
const {
  RegexButWithWords
} = regexButWithWords;
const commaSeparatedCidrListExp = new RegexButWithWords().stringBegin().group(exp => {
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
    });
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
  });
}).anyNumber().stringEnd().done("gm");
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
const commaSeparatedIpListExpNoCidr = new RegexButWithWords().stringBegin().group(exp => {
  exp.group(exp => {
    exp.wordBoundary().group(exp => {
      exp.group(exp => {
        exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
      }).literal(".");
    }, 3).group(exp => {
      exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
    }).lazy();
  });
}).anyNumber().group(exp => {
  exp.literal(",").whitespace().anyNumber().wordBoundary().group(exp => {
    exp.group(exp => {
      exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
    }).literal(".");
  }, 3).group(exp => {
    exp.literal("25").set("0-5").or().literal("2").set("0-4").digit().or().set("01").lazy().digit(1, 2);
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
 * test for invalid IP string/CIDR
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isIpStringInvalid(value) {
  if (!isNullOrEmptyString$1(value) && value.match(commaSeparatedIpListExp) === null) {
    return true;
  }
  return false;
}

/**
 * test for invalid IP string no CIDR
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isIpStringInvalidNoCidr(value) {
  if (!isNullOrEmptyString$1(value) && value.match(commaSeparatedIpListExpNoCidr) === null) {
    return true;
  }
  return false;
}

/**
 * test for invalid list of cidr string
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isCidrStringInvalid(value) {
  if (!isNullOrEmptyString$1(value) && value.match(commaSeparatedCidrListExp) === null) {
    return true;
  } else return false;
}
var iamUtils = {
  isIpStringInvalid,
  isIpStringInvalidNoCidr,
  isRangeInvalid,
  isCidrStringInvalid
};
var iamUtils_1 = iamUtils.isIpStringInvalid;
var iamUtils_2 = iamUtils.isIpStringInvalidNoCidr;
var iamUtils_3 = iamUtils.isRangeInvalid;
var iamUtils_4 = iamUtils.isCidrStringInvalid;

/**
 * CloudDatabaseForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
class CloudDatabaseForm extends Component {
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
    this.setState(forms_30(this.state, event));
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("use_data", this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "db-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-db-existing-instance`
    }), /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-db-name",
      componentName: this.props.data.name + "-db-name",
      placeholder: "my-db-name",
      value: this.state.name || "",
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Cloud Database",
      name: "service",
      formName: this.props.data.name + "-db-service",
      groups: ["databases-for-postgresql", "databases-for-etcd", "databases-for-redis", "databases-for-mongodb", "databases-for-mysql"].map(titleCase$2),
      value: titleCase$2(this.state.service),
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Cloud Database.",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: this.props.data.name + "-db-rg-select",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: "fieldWidthSmaller"
    }), this.state.use_data !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Plan",
      name: "plan",
      formName: this.props.data.name + "-db-plan",
      groups: this.state.service === "databases-for-mongodb" ? ["Standard", "Enterprise"] : ["Standard"],
      disabled: this.state.service === "databases-for-mongodb" ? false : true,
      value: titleCase$2(this.state.plan),
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Plan.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Group ID",
      name: "group_id",
      formName: this.props.data.name + "-db-groupId",
      tooltip: {
        content: "The ID of the scaling group. Read more about analytics and bi_connector for MongoDB down below.",
        align: "bottom-left",
        link: "https://cloud.ibm.com/docs/databases-for-mongodb?topic=databases-for-mongodb-mongodbee-analytics&interface=api"
      },
      groups: this.state.service === "databases-for-mongodb" ? ["member", "analytcs", "bi_connector"] : ["member"],
      disabled: this.state.service === "databases-for-mongodb" ? false : true,
      value: this.state.group_id,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Group ID.",
      className: "fieldWidthSmaller"
    }))), this.state.use_data !== true && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      label: "Memory (GB)",
      id: this.props.data.name + "-db-memory",
      value: this.state.memory || "",
      allowEmpty: true,
      placeholder: this.props.memoryMin,
      min: this.props.memoryMin,
      max: this.props.memoryMax,
      onChange: this.handleInputChange,
      name: "memory",
      hideSteppers: true,
      invalid: iamUtils_3(this.state.memory, this.props.memoryMin, this.props.memoryMax),
      invalidText: `RAM must be a minimum of ${this.props.memoryMin}GB and a maximum ${this.props.memoryMax}GB per member`,
      className: "fieldWidthSmaller leftTextAlign"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "Disk (GB)",
      id: this.props.data.name + "-db-disk",
      value: this.state.disk || "",
      allowEmpty: true,
      placeholder: this.props.diskMin,
      min: this.props.diskMin,
      max: this.props.diskMax,
      onChange: this.handleInputChange,
      name: "disk",
      hideSteppers: true,
      invalid: iamUtils_3(this.state.disk, this.props.diskMin, this.props.diskMax),
      invalidText: `Disk must be a minimum of ${this.props.diskMin}GB and a maximum ${this.props.diskMax}GB per member`,
      className: "fieldWidthSmaller leftTextAlign"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "CPU",
      id: this.props.data.name + "-db-cpu",
      value: this.state.cpu || "",
      allowEmpty: true,
      placeholder: this.props.cpuMin,
      min: this.props.cpuMin,
      max: this.props.cpuMax,
      onChange: this.handleInputChange,
      name: "cpu",
      hideSteppers: true,
      invalid: this.props.invalidCpuCallback(this.state, this.props),
      invalidText: this.props.invalidCpuTextCallback(this.state, this.props),
      className: "fieldWidthSmaller leftTextAlign"
    })), this.state.use_data !== true && /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      value: this.state.encryption_key,
      groups: this.props.encryptionKeys,
      formName: this.props.data.name + " CloudDatabase",
      name: "encryption_key",
      labelText: "(Optional) Encryption Key",
      handleInputChange: this.handleInputChange,
      disableInvalid: true,
      className: "fieldWidthSmaller"
    })));
  }
}
CloudDatabaseForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    use_data: false,
    plan: "standard",
    encryption_key: "",
    service: "",
    group_id: "member",
    memory: null,
    disk: null,
    cpu: null
  },
  memoryMin: 1,
  memoryMax: 112,
  diskMin: 5,
  diskMax: 4096,
  cpuMin: 0,
  cpuMax: 28
};
CloudDatabaseForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    use_data: PropTypes.bool,
    plan: PropTypes.string,
    service: PropTypes.string.isRequired,
    group_id: PropTypes.string,
    memory: PropTypes.number,
    disk: PropTypes.number,
    cpu: PropTypes.number,
    encryption_key: PropTypes.string
  }).isRequired,
  memoryMin: PropTypes.number,
  memoryMax: PropTypes.number,
  diskMin: PropTypes.number,
  diskMax: PropTypes.number,
  cpuMin: PropTypes.number,
  cpuMax: PropTypes.number,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func
};

const {
  snakeCase
} = lazyZ;

/**
 * input change for resources in access group policies
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} resources
 */
function handleInputResource(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let resources = {
    ...stateData.resources
  };
  resources[name] = value;
  return {
    resources: resources
  };
}

/**
 * dynamic policy condition handler
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} conditions
 */
function handleInputCondition(stateData, event) {
  let {
    name,
    value
  } = event.target;
  let conditions = {
    ...stateData.conditions
  };
  if (name === "operator") {
    conditions[name] = snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
  } else {
    conditions[name] = value;
  }
  return {
    conditions: conditions
  };
}
var accessGroups = {
  handleInputCondition,
  handleInputResource
};
var accessGroups_1 = accessGroups.handleInputCondition;
var accessGroups_2 = accessGroups.handleInputResource;

class AccessGroupPolicyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputResourceChange = this.handleInputResourceChange.bind(this);
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
  handleInputResourceChange(event) {
    this.setState(accessGroups_2(this.state, event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: `${this.props.data.name}-name`,
      componentName: `${this.props.data.name}-name`,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      forceKebabCase: true
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Resource Configuration",
      type: "subHeading"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-resource`,
      tooltip: {
        content: "The resource of the policy definition",
        alignModal: "bottom-left"
      },
      isModal: this.props.isModal,
      field: "resource",
      value: this.state.resources.resource,
      invalid: false,
      onChange: this.handleInputResourceChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${kebabCase$6(this.props.data.name)}-agp-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resources.resource_group,
      handleInputChange: this.handleInputResourceChange,
      labelText: "Resource Group",
      tooltip: {
        content: "Name of the resource group the policy will apply to",
        alignModal: "bottom-left"
      },
      disableInvalid: true // resource group is not required
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-resource_instance_id`,
      isModal: this.props.isModal,
      field: "resource_instance_id",
      value: this.state.resources.resource_instance_id,
      tooltip: {
        content: "ID of a service instance to give permissions"
      },
      invalid: false,
      labelText: "Resource Instance ID" // needed to override Id in titleCase
      ,
      onChange: this.handleInputResourceChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-service`,
      tooltip: {
        content: 'Name of the service type for the policy ex. "cloud-object-storage". You can run the `ibmcloud catalog service-marketplace` command to retrieve the service types. For account management services, you can find supported values in the following link.',
        link: "https://cloud.ibm.com/docs/account?topic=account-account-services#api-acct-mgmt",
        alignModal: "bottom-left",
        align: "top-left"
      },
      labelText: "Service Type" // override field, display text different
      ,
      field: "service",
      value: this.state.resources.service,
      isModal: this.props.isModal,
      onChange: this.handleInputResourceChange,
      invalid: false
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-resource-type`,
      field: "resource_type",
      tooltip: {
        content: 'Name of the resource type for the policy ex. "resource-group"',
        alignModal: "bottom-left"
      },
      invalid: false,
      value: this.state.resources.resource_type,
      isModal: this.props.isModal,
      onChange: this.handleInputResourceChange
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

// Access Groups

const conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains"
};
const conditionOperatorGroups = ["Equals", "Equals (Ignore Case)", "In", "Not Equals (Ignore Case)", "Not Equals", "Contains"];
var constants = {
  conditionOperatorGroups,
  conditionOperators
};
var constants_1 = constants.conditionOperatorGroups;
var constants_2 = constants.conditionOperators;

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
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change for conditions
   * @param {*} event
   */
  handleInputCondition(event) {
    this.setState(accessGroups_1(this.state, event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: "name",
      componentName: "dynamic_policies",
      forceKebabCase: true,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
      tooltip: {
        content: "How many hours authenticated users can work before refresh"
      },
      formName: this.props.data.name + "-dynamic-policies",
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
      componentName: "dynamic_policies",
      field: "identity_provider",
      isModal: this.props.isModal,
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
      componentName: "dynamic_policies",
      field: "claim",
      isModal: this.props.isModal,
      labelText: "Condition Claim",
      value: this.state.conditions.claim,
      invalid: false,
      onChange: this.handleInputCondition
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-dynamic-policies",
      tooltip: {
        content: "The operation to perform on the claim."
      },
      value: constants_2[this.state.conditions.operator],
      groups: constants_1,
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
    transpose$2({
      ...this.props.dynamicPolicyProps
    }, dynamicPolicyProps);
    let policyProps = {
      invalidCallback: this.props.invalidPolicyCallback,
      invalidTextCallback: this.props.invalidPolicyTextCallback,
      arrayParentName: this.props.data.name,
      helperTextCallback: this.props.policyHelperTextCallback
    };
    transpose$2({
      ...this.props.policyProps
    }, policyProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-name",
      componentName: "access_groups",
      value: this.state.name,
      onChange: this.handleInputChange,
      className: "fieldWidth",
      hideHelperText: true,
      forceKebabCase: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-description",
      tooltip: {
        content: "Description of the access group",
        alignModal: "right",
        align: "right"
      },
      field: "description",
      value: this.state.description,
      onChange: this.handleInputChange,
      isModal: this.props.isModal,
      className: "textInputWide",
      hideHelperText: true,
      invalid: false,
      optional: true
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

const AccessGroups = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Access Groups",
    addText: "Create Access Groups",
    docs: props.docs,
    innerForm: AccessGroupForm,
    arrayData: props.access_groups,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    forceOpen: props.forceOpen,
    propsMatchState: props.propsMatchState,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState,
      invalidPolicyCallback: props.invalidPolicyCallback,
      invalidPolicyTextCallback: props.invalidDynamicPolicyTextCallback,
      policyHelperTextCallback: props.policyHelperTextCallback,
      policyProps: {
        onSave: props.onPolicySave,
        onDelete: props.onPolicyDelete,
        onSubmit: props.onPolicySubmit,
        disableSave: props.disableSave,
        craig: props.craig,
        resourceGroups: props.resourceGroups
      },
      invalidDynamicPolicyCallback: props.invalidDynamicPolicyCallback,
      invalidDynamicPolicyTextCallback: props.invalidDynamicPolicyTextCallback,
      dynamicPolicyHelperTextCallback: props.dynamicPolicyHelperTextCallback,
      invalidIdentityProviderCallback: props.invalidIdentityProviderCallback,
      dynamicPolicyProps: {
        onSave: props.onDynamicPolicySave,
        onDelete: props.onDynamicPolicyDelete,
        onSubmit: props.onDynamicPolicySubmit,
        disableSave: props.disableSave,
        craig: props.craig
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "access_groups",
      hide: true,
      hideName: true
    }
  });
};
AccessGroups.propTypes = {
  docs: PropTypes.func.isRequired,
  access_groups: PropTypes.array.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidPolicyCallback: PropTypes.func.isRequired,
  invalidPolicyTextCallback: PropTypes.func.isRequired,
  policyHelperTextCallback: PropTypes.func.isRequired,
  onPolicyDelete: PropTypes.func.isRequired,
  onPolicySave: PropTypes.func.isRequired,
  onPolicySubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidDynamicPolicyCallback: PropTypes.func.isRequired,
  invalidDynamicPolicyTextCallback: PropTypes.func.isRequired,
  dynamicPolicyHelperTextCallback: PropTypes.func.isRequired,
  invalidIdentityProviderCallback: PropTypes.func.isRequired,
  onDynamicPolicyDelete: PropTypes.func.isRequired,
  onDynamicPolicySave: PropTypes.func.isRequired,
  onDynamicPolicySubmit: PropTypes.func.isRequired
};

const AppId = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "AppID",
    addText: "Create an App ID Instance",
    docs: props.docs,
    innerForm: AppIdForm,
    arrayData: props.appid,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    craig: props.craig,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidKeyCallback: props.invalidKeyCallback,
      invalidKeyTextCallback: props.invalidKeyTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      encryptionKeys: props.encryptionKeys,
      keyProps: {
        craig: props.craig,
        onSave: props.onKeySave,
        onDelete: props.onKeyDelete,
        onSubmit: props.onKeySubmit,
        disableSave: props.disableSave
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "appid",
      hide: true,
      hideName: true
    }
  });
};
AppId.propTypes = {
  appid: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  docs: PropTypes.func.isRequired,
  encryptionKeys: PropTypes.array.isRequired
};

const CloudDatabase = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Cloud Databases",
    addText: "Create a Cloud Database",
    docs: props.docs,
    innerForm: CloudDatabaseForm,
    arrayData: props.icd,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidCpuCallback: props.invalidCpuCallback,
      invalidCpuTextCallback: props.invalidCpuTextCallback,
      resourceGroups: props.resourceGroups,
      encryptionKeys: props.encryptionKeys,
      memoryMin: props.memoryMin,
      memoryMax: props.memoryMax,
      diskMin: props.diskMin,
      diskMax: props.diskMax,
      cpuMin: props.cpuMin,
      cpuMax: props.cpuMax
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "icd",
      hide: true,
      hideName: true
    }
  });
};
CloudDatabase.defaultProps = {
  memoryMin: 1,
  memoryMax: 112,
  diskMin: 5,
  diskMax: 4096,
  cpuMin: 0,
  cpuMax: 28
};
CloudDatabase.propTypes = {
  docs: PropTypes.func.isRequired,
  icd: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCpuCallback: PropTypes.func.isRequired,
  invalidCpuTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
  memoryMin: PropTypes.number,
  memoryMax: PropTypes.number,
  diskMin: PropTypes.number,
  diskMax: PropTypes.number,
  cpuMin: PropTypes.number,
  cpuMax: PropTypes.number
};

var css_248z$4 = ".no-secrets-link {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n\n.no-vpc-link {\n  padding-left: 3px;\n  padding-right: 3px;\n}\n";
styleInject(css_248z$4);

const NoVpcTile = () => {
  return /*#__PURE__*/React.createElement(Tile, {
    className: "tileBackground displayFlex alignItemsCenter wrap marginTop"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), " No VPCs have been created. Go to the", /*#__PURE__*/React.createElement("a", {
    className: "no-vpc-link",
    href: "/form/vpcs"
  }, "Virtual Private Clouds Page"), "to create one.");
};

const Clusters = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Clusters",
    addText: "Create a Cluster",
    innerForm: ClusterForm,
    arrayData: props.clusters,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    docs: props.docs,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidPoolCallback: props.invalidPoolCallback,
      invalidPoolTextCallback: props.invalidPoolTextCallback,
      resourceGroups: props.resourceGroups,
      vpcList: props.vpcList,
      encryptionKeys: props.encryptionKeys,
      subnetList: props.subnetList,
      kubeVersionApiEndpoint: props.kubeVersionApiEndpoint,
      flavorApiEndpoint: props.flavorApiEndpoint,
      helperTextCallback: props.helperTextCallback,
      propsMatchState: props.propsMatchState,
      cosNames: props.cosNames,
      secretsManagerList: props.secretsManagerList,
      secretsManagerGroupCallback: props.secretsManagerGroupCallback,
      secretsManagerGroupCallbackText: props.secretsManagerGroupCallbackText,
      secretCallback: props.secretCallback,
      secretCallbackText: props.secretCallbackText,
      descriptionInvalid: props.descriptionInvalid,
      descriptionInvalidText: props.descriptionInvalidText,
      labelsInvalid: props.labelsInvalid,
      labelsInvalidText: props.labelsInvalidText,
      workerPoolProps: {
        onSave: props.onPoolSave,
        onDelete: props.onPoolDelete,
        onSubmit: props.onPoolSubmit,
        disableSave: props.disablePoolSave
      },
      opaqueIngressSecretProps: {
        onSave: props.onOpaqueSecretsSave,
        onDelete: props.onOpaqueSecretsDelete,
        onSubmit: props.onOpaqueSecretsSubmit,
        disableSave: props.disableOpaqueSecretsSave
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "clusters",
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
Clusters.propTypes = {
  clusters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  onPoolSave: PropTypes.func.isRequired,
  onPoolDelete: PropTypes.func.isRequired,
  onPoolSubmit: PropTypes.func.isRequired,
  disablePoolSave: PropTypes.func.isRequired,
  invalidPoolCallback: PropTypes.func,
  invalidPoolTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  onOpaqueSecretsSave: PropTypes.func.isRequired,
  onOpaqueSecretsDelete: PropTypes.func.isRequired,
  onOpaqueSecretsSubmit: PropTypes.func.isRequired,
  disableOpaqueSecretsSave: PropTypes.func.isRequired,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.string,
  secretsManagerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  docs: PropTypes.func,
  overrideTile: PropTypes.node
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
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = `encryption-key-${this.props.data.name}-`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      component: "kms_key",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleInputChange,
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
      onChange: this.handleInputChange,
      id: this.props.data.name + "-key-ring",
      invalid: this.props.invalidRingCallback(this.state, this.props),
      invalidText: this.props.invalidRingText,
      optional: true
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNumberSelect, {
      tooltip: {
        content: "Setting a rotation policy shortens the lifetime of the key at regular intervals. When it's time to rotate the key based on the rotation interval that you specify, the root key will be automatically replaced with new key material.",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
      component: this.props.data.name,
      max: 12,
      value: this.state.rotation,
      formName: "rotation",
      name: "rotation",
      labelText: "Rotation Interval (Months)",
      handleInputChange: this.handleInputChange,
      isModal: this.props.isModal
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Force deletion of a key refers to the deletion of any key that's actively protecting any registered cloud resources. KMS keys can be force-deleted by managers of the instance. However, the force-delete won't succeed if the key's associated resource is non-erasable due to a retention policy.",
        align: "bottom-left",
        alignModal: "right"
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
        alignModal: "left"
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
        alignModal: "right"
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
    rotation: 1,
    root_key: false,
    force_delete: false,
    dual_auth_delete: false,
    key_ring: ""
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
    transpose$2({
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

const KeyManagement = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Key Management",
    addText: "Create a Key Management Service",
    docs: props.docs,
    innerForm: KeyManagementForm,
    arrayData: props.key_management,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    deleteDisabled: props.deleteDisabled,
    deleteDisabledMessage: "Cannot delete only key management instance",
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidKeyCallback: props.invalidKeyCallback,
      invalidKeyTextCallback: props.invalidKeyTextCallback,
      invalidRingCallback: props.invalidRingCallback,
      invalidRingText: props.invalidRingText,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      encryptionKeyProps: {
        craig: props.craig,
        onSave: props.onKeySave,
        onDelete: props.onKeyDelete,
        onSubmit: props.onKeySubmit,
        disableSave: props.disableSave
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "key_management",
      hide: true,
      hideName: true
    }
  });
};
KeyManagement.propTypes = {
  key_management: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  deleteDisabled: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  invalidRingCallback: PropTypes.func.isRequired,
  invalidRingText: PropTypes.string.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired
};

class ObjectStorageBucketForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
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
      id: composedId + "-name",
      componentName: this.state.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      helperTextCallback: () => this.props.composedNameCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: composedId + "-class",
      formName: this.props.data.name + "-object-storage-bucket-class",
      name: "storage_class",
      groups: ["Standard", "Vault", "Cold", "Smart"],
      value: capitalize$2(this.state.storage_class),
      labelText: "Bucket Class",
      handleInputChange: this.handleStorageClassChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: composedId + "-key",
      formName: this.props.data.name + "-object-storage-bucket-key",
      name: "kms_key",
      groups: this.props.encryptionKeyFilter ? this.props.encryptionKeyFilter(this.state, this.props) : this.props.encryptionKeys,
      value: this.state.kms_key,
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      invalidText: isEmpty(this.props.encryptionKeys) ? "Select a KMS Instance." : "Select an Encryption Key."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
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
      ...this.props.data
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
      value: this.state.name,
      onChange: this.handleInputChange,
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
        alignModal: "bottom-left"
      },
      id: composedId + "cos-instance-key-hmac",
      labelText: "Enable HMAC",
      defaultToggled: this.state.enable_hmac,
      onToggle: this.handleToggle,
      disabled: this.props.forceEnableHmac,
      isModal: this.props.isModal
    })));
  }
}
ObjectStorageKeyForm.defaultProps = {
  data: {
    name: "",
    role: "Writer",
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

function cosPlanTitleCase(str) {
  return titleCase$2(str).replace("1 2", "12").replace("2 4", "24").replace("4 8", "48").replace("9 6", "96");
}
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
    this.handleCosPlanChange = this.handleCosPlanChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle cos plan change and convert to kebab when saving to state
   * @param {event} event event
   */
  handleCosPlanChange(event) {
    this.setState({
      plan: kebabCase$6(event.target.value)
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
    transpose$2({
      ...this.props.bucketProps
    }, bucketInnerFormProps);
    let keyInnerFormProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      composedNameCallback: this.props.composedNameCallback,
      arrayParentName: this.props.data.name
    };
    transpose$2({
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
      id: composedId + "use-random-suffix",
      labelText: "Append Random Suffix to Names",
      toggleFieldName: "use_random_suffix",
      defaultToggled: this.state.use_random_suffix,
      onToggle: this.handleInputChange,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-object-storage-kms",
      name: "kms",
      labelText: "Key Management Instance",
      groups: this.props.kmsList,
      value: this.state.kms,
      handleInputChange: this.handleInputChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-object-storage-name",
      componentName: this.props.data.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      helperTextCallback: () => this.props.composedNameCallback(this.state, this.props),
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-object-storage-rg",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-object-storage-plan",
      name: "plan",
      labelText: "Plan",
      groups: this.props.cosPlans.map(cosPlanTitleCase),
      value: cosPlanTitleCase(this.state.plan),
      handleInputChange: this.handleCosPlanChange
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
    plan: "standard",
    use_random_suffix: true
  },
  resourceGroups: [],
  cosPlans: ["standard"]
};
ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes.bool,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosPlans: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    use_data: PropTypes.bool.isRequired,
    resource_group: PropTypes.string,
    use_random_suffix: PropTypes.bool.isRequired,
    plan: PropTypes.string.isRequired
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired
};

const ObjectStorage = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Object Storage",
    addText: "Create an Object Storage Service",
    docs: props.docs,
    innerForm: ObjectStorageInstancesForm,
    arrayData: props.object_storage,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      cosPlans: props.cosPlans,
      kmsList: props.kmsList,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidKeyCallback: props.invalidKeyCallback,
      invalidKeyTextCallback: props.invalidKeyTextCallback,
      invalidBucketCallback: props.invalidBucketCallback,
      invalidBucketTextCallback: props.invalidBucketTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      composedNameCallback: props.composedNameCallback,
      keyProps: {
        craig: props.craig,
        onSave: props.onKeySave,
        onDelete: props.onKeyDelete,
        onSubmit: props.onKeySubmit,
        disableSave: props.disableSave
      },
      bucketProps: {
        craig: props.craig,
        onSave: props.onBucketSave,
        onDelete: props.onBucketDelete,
        onSubmit: props.onBucketSubmit,
        disableSave: props.disableSave,
        encryptionKeys: props.encryptionKeys,
        encryptionKeyFilter: props.encryptionKeyFilter
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "object_storage",
      hide: true,
      hideName: true
    }
  });
};
ObjectStorage.propTypes = {
  object_storage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  cosPlans: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  invalidBucketCallback: PropTypes.func.isRequired,
  invalidBucketTextCallback: PropTypes.func.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  onBucketSave: PropTypes.func.isRequired,
  onBucketDelete: PropTypes.func.isRequired,
  onBucketSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  encryptionKeyFilter: PropTypes.func.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
  kmsList: PropTypes.array.isRequired
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
    this.setState(forms_31(this.state, name));
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

const ResourceGroups = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Resource Groups",
    addText: "Create a Resource Group",
    docs: props.docs,
    innerForm: ResourceGroupForm,
    arrayData: props.resource_groups,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    craig: props.craig,
    deleteDisabled: props.deleteDisabled,
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      helperTextCallback: props.helperTextCallback
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "resource_groups",
      hideName: true
    }
  });
};
ResourceGroups.propTypes = {
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  deleteDisabled: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  docs: PropTypes.func
};

var css_248z$3 = ".secretsChecklistPadding {\n  margin-bottom: 0px !important;\n  margin-top: 1rem !important;\n}\n\n.secretChecklistMargin {\n  margin-top: -1rem !important;\n}\n\n.secretCheckBoxMargin {\n  padding-left: 1rem !important;\n}\n";
styleInject(css_248z$3);

/**
 * SecretsManagerForm
 * @param {Object} props
 */
class SecretsManagerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
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
  onSelectChange(items) {
    let nextSecrets = [];
    items.forEach(item => {
      if (item !== "Select All") {
        nextSecrets.push(getObjectFromArray$1(this.props.secrets, "ref", item));
      }
    });
    this.setState({
      secrets: nextSecrets
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
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
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(SecretsManagerChecklist, {
      parentName: this.props.data.name,
      secrets: this.props.secrets,
      selected: [...splat$2(this.props.data.secrets, "ref")],
      onSelectChange: this.onSelectChange
    }));
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

const SecretsManager = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Secrets Manager",
    addText: "Create a Secrets Manager",
    docs: props.docs,
    innerForm: SecretsManagerForm,
    arrayData: props.secrets_managers,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      encryptionKeys: props.encryptionKeys,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      secrets: props.secrets,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "secrets_manager",
      hide: true,
      hideName: true
    }
  });
};
SecretsManager.propTypes = {
  secrets_managers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  secrets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired
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
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = null;
    }
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
  let value = contains(["null", null, ""], props.state.rule[props.name]) ? -1 // set to an invalid number only in these cases
  : props.state.rule[props.name]; // set to number otherwise
  return /*#__PURE__*/React.createElement(TextInput, {
    id: `${props.state.name}-nw-${kebabCase(props.name)}-input`,
    labelText: titleCase(props.name),
    placeholder: String(props.state.rule[props.name]),
    value: value === -1 ? "" : String(value) // if invalid number value is empty string
    ,
    onChange: e => props.onChange(props.name, e),
    invalid: !validPortRange(props.name, value) && !isNullOrEmptyString(props.state.rule[props.name]) || props.state.rule[props.name] === "null",
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

class OrderCardDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = networkingOrderCard_5(this.props);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.rules !== this.props.rules) {
      this.setState(networkingOrderCard_5(this.props));
    }
  }
  render() {
    const {
      rows,
      headers
    } = {
      ...this.state
    };
    return /*#__PURE__*/React.createElement(DataTable, {
      headers: headers,
      rows: rows
    }, ({
      rows,
      headers,
      getHeaderProps,
      getRowProps
    }) => /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, headers.map((header, index) => /*#__PURE__*/React.createElement(TableHeader, _extends({
      key: header.header + "-" + index
    }, getHeaderProps({
      header
    })), header.header)))), /*#__PURE__*/React.createElement(TableBody, null, rows.map((row, index) => /*#__PURE__*/React.createElement(TableRow, _extends({
      key: row.name + "-" + index
    }, getRowProps({
      row
    })), row.cells.map(cell => /*#__PURE__*/React.createElement(TableCell, {
      key: JSON.stringify(cell),
      className: this.props.isSecurityGroup ? "dt-security-group" : ""
    }, /*#__PURE__*/React.createElement("div", {
      key: JSON.stringify(cell) + "-port"
    }, contains$5(["tcp", "udp", "all", "icmp"], cell.value) ? cell.value.toUpperCase() : cell.value)))))))));
  }
}
OrderCardDataTable.propTypes = {
  isSecurityGroup: PropTypes.bool.isRequired,
  rules: PropTypes.array.isRequired
};

class NetworkingRulesOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [...this.props.rules],
      collapse: {},
      allCollapsed: false,
      showModal: false,
      showTable: true
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
   * Move the card up
   * @param {number} index
   */
  handleUp(index) {
    let prevRulesState = [...this.state.rules];
    if (index !== 0) {
      forms_36(prevRulesState, index, index - 1);
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
      forms_36(prevRulesState, index, index + 1);
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
        show: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SaveAddButton, {
          type: "custom",
          onClick: () => {
            this.setState({
              showTable: !this.state.showTable
            });
          },
          customIcon: this.state.showTable ? Edit : DataView,
          hoverText: this.state.showTable ? "Edit" : "View Data",
          className: "edit-view-btn",
          hide: this.state.rules.length < 0 // do not show edit if no rules
        }), /*#__PURE__*/React.createElement(SaveAddButton, {
          name: this.props.vpc_name,
          type: "add",
          onClick: this.toggleModal
        }))
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
    }), this.state.showTable && this.state.rules.length > 0 ? /*#__PURE__*/React.createElement(OrderCardDataTable, {
      isSecurityGroup: this.props.isSecurityGroup,
      rules: this.state.rules,
      vpc_name: this.props.vpc_name
    }) : this.state.rules.map((rule, index) => /*#__PURE__*/React.createElement("div", {
      key: "rule-div-" + rule.name + "-wrapper",
      className: forms_37(this.props)
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
        ruleProtocol: forms_34(rule),
        rule: forms_35(rule, this.props.isSecurityGroup)
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      componentName: "security_groups",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      className: "fieldWidthSmaller",
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "security_Group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "security_Group",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
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

const SecurityGroups = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Security Groups",
    addText: "Create a Security Group",
    docs: props.docs,
    innerForm: SecurityGroupForm,
    arrayData: props.security_groups,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: isEmpty(props.vpcList),
    isSecurityGroup: true,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      invalidRuleText: props.invalidRuleText,
      invalidRuleTextCallback: props.invalidRuleTextCallback,
      onSubmitCallback: props.onSubmitCallback,
      onRuleSave: props.onRuleSave,
      onRuleDelete: props.onRuleDelete,
      disableModalSubmitCallback: () => {},
      // investigate
      disableSaveCallback: props.disableSaveCallback,
      vpcList: props.vpcList
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "security_groups",
      hide: true,
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
SecurityGroups.propTypes = {
  security_groups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.array.isRequired,
  overrideTile: PropTypes.node
};

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCRNs = this.handleCRNs.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    this.handlePowerWorkspaceSelect = this.handlePowerWorkspaceSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
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
    this.setState(forms_32(event));
  }

  /**
   * Handle vpc selection
   * @param {Array} selectedItems
   */
  handleVpcSelect(selectedItems) {
    this.setState(forms_33(selectedItems, this.state.name, this.state.connections));
  }

  /**
   * handle power workspace selection
   * @param {Array} selectedItems
   */
  handlePowerWorkspaceSelect(selectedItems) {
    let newConnetions = [];
    this.state.connections.forEach(connection => {
      if (connection.vpc) {
        newConnetions.push(connection);
      }
    });
    selectedItems.forEach(item => {
      newConnetions.push({
        power: item,
        tgw: this.state.name
      });
    });
    this.setState({
      connections: newConnetions
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
      id: this.props.data.name + "-tg-name"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Transit Gateway",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      id: this.props.data.name + "-resource_group",
      name: "resource_group",
      labelText: "Resource Group"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Global Routing",
      toggleFieldName: "global",
      id: this.props.data.name + "-tg-global",
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
      id: this.props.data.name + "-tg-vpc-multiselect",
      titleText: "Connected VPCs",
      initialSelectedItems: splat$2(
      // filter only connections with vpc
      this.state.connections.filter(connection => {
        if (connection.vpc) return connection;
      }), "vpc"),
      vpcList: this.props.vpcList,
      onChange: this.handleVpcSelect,
      invalid: this.state.connections.length === 0,
      invalidText: "At least one VPC must be connected"
    }), /*#__PURE__*/React.createElement(IcseMultiSelect, {
      invalid: false,
      id: this.props.data.name + "-tg-power-multislect",
      titleText: "Connected Power Workspaces",
      onChange: event => {
        this.handlePowerWorkspaceSelect(event.selectedItems);
      },
      initialSelectedItems: splat$2(this.state.connections.filter(connection => {
        if (connection.power) return connection;
      }), "power"),
      items: splat$2(this.props.power.filter(workspace => {
        if (contains$5(this.props.edgeRouterEnabledZones, workspace.zone)) return workspace;
      }), "name")
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Additional connections",
      type: "section"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      className: "textInputWide",
      id: this.props.data.name + "crns",
      labelText: "(Optional) Add a new connection from any region in the account",
      value: this.state.crns === undefined ? "" : String(this.state.crns),
      onChange: this.handleCRNs,
      invalid: this.props.invalidCrns(this.state, this.props),
      invalidText: this.props.invalidCrnText(this.state, this.props),
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
  resourceGroups: [],
  power: [],
  edgeRouterEnabledZones: ["dal10"]
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
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  edgeRouterEnabledZones: PropTypes.arrayOf(PropTypes.string).isRequired
};

const TransitGateways = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Transit Gateways",
    addText: "Create a Transit Gateway",
    docs: props.docs,
    innerForm: TransitGatewayForm,
    arrayData: props.transit_gateways,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      vpcList: props.vpcList,
      readOnlyName: false,
      invalidCrns: props.invalidCrns,
      invalidCrnText: props.invalidCrnText,
      resourceGroups: props.resourceGroups,
      edgeRouterEnabledZones: props.edgeRouterEnabledZones,
      power: props.power
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "transit_gateways",
      hide: true,
      hideName: true
    }
  });
};
TransitGateways.defaultProps = {
  edgeRouterEnabledZones: ["dal10"]
};
TransitGateways.propTypes = {
  docs: PropTypes.func.isRequired,
  transit_gateways: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired,
  edgeRouterEnabledZones: PropTypes.arrayOf(PropTypes.string).isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired
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
    this.handlePgwToggle = this.handlePgwToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (name === "bucket" && value === "Disabled") {
      value = "$disabled";
    }
    this.setState(this.setNameToValue(name, value));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle change of public gateway by zone
   * @param {string} zone zone-1, zone-2, or zone-3
   */
  handlePgwToggle(zone) {
    this.setState(vpc_1(zone, this.state));
  }
  render() {
    let composedId = `${this.props.data.name}-vpc-form`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      tooltip: {
        content: "This name will be prepended to all components within this VPC.",
        alignModal: "bottom-left",
        align: "bottom-left"
      },
      id: composedId + "-name",
      placeholder: "my-vpc-name",
      hideHelperText: true,
      value: this.state.name,
      forceKebabCase: true,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback("name", this.state, this.props),
      invalidText: this.props.invalidTextCallback("name", this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.resource_group),
      invalidText: "Select a Resource Group.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Flow Logs Bucket Name",
      name: "bucket",
      formName: this.props.data.name + "-vpc",
      groups: this.props.cosBuckets.concat("Disabled"),
      value: (this.state.bucket === "$disabled" ? "Disabled" : this.state.bucket) || "",
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.bucket),
      invalidText: "Select a Bucket.",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, nameFields.map(field => {
      return /*#__PURE__*/React.createElement(IcseTextInput, {
        id: composedId + "-" + field,
        key: this.props.data.name + "-" + kebabCase$6(field),
        field: field,
        labelText: titleCase$2(field),
        value: this.state[field],
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(field, this.state, this.props),
        invalidText: this.props.invalidTextCallback(field, this.state, this.props),
        className: "fieldWidthSmaller",
        optional: true,
        forceKebabCase: true
      });
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Public Gateways",
      type: "subHeading",
      noLabelText: true,
      tooltip: {
        content: "Public Gateways allow for all resources in a zone to communicate with the public internet. Public Gateways are not needed for subnets where a VPN gateway is created."
      }
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, ["zone-1", "zone-2", "zone-3"].map(zone => /*#__PURE__*/React.createElement(IcseToggle, {
      key: this.props.data.name + "-gateway-toggle-" + zone,
      id: this.props.data.name + "-pgw-" + zone,
      labelText: "Create in Zone " + parseIntFromZone$1(zone),
      defaultToggled: this.state.publicGateways.indexOf(parseIntFromZone$1(zone)) !== -1,
      onToggle: () => this.handlePgwToggle(zone),
      className: "fieldWidthSmaller leftTextAlign"
    }))), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Classic Access",
      type: "subHeading"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-classic-access",
      labelText: "Classic Infrastructure Access",
      toggleFieldName: "classic_access",
      defaultToggled: this.state.classic_access,
      onToggle: this.handleToggle,
      disabled: this.props.disableManualPrefixToggle,
      className: "fieldWidthSmaller leftTextAlign"
    })));
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

const Vpcs = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Virtual Private Clouds",
    addText: "Create a VPC",
    docs: props.docs,
    innerForm: VpcNetworkForm,
    arrayData: props.vpcs,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    craig: props.craig,
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      resourceGroups: props.resourceGroups,
      cosBuckets: props.cosBuckets,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "vpcs",
      hide: true,
      hideName: true
    }
  });
};
Vpcs.propTypes = {
  docs: PropTypes.func.isRequired,
  vpcs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

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
    this.setState(forms_6(event, this.state));
  }

  /**
   * handle service dropdown
   * @param {event} event event
   */
  handleServiceDropdown(event) {
    this.setState(forms_7(event, this.state));
  }

  /**
   * handle multiselects
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState(this.setNameToValue(name, event));
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
      formName: this.props.data.name + "vpce-service",
      groups: forms_5,
      value: forms_4[this.state.service],
      labelText: "Service Type",
      handleInputChange: this.handleServiceDropdown,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: this.state.service !== "secrets-manager"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "resource_group",
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
    })), this.state.service === "secrets-manager" && /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "instance",
      name: "instance",
      labelText: "Secrets Manager Instance",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      groups: this.props.secretsManagerInstances,
      value: this.state.instance
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
  secretsManagerInstances: [],
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
  secretsManagerInstances: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
};

const Vpe = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Virtual Private Endpoints",
    addText: "Create a VPE",
    docs: props.docs,
    arrayData: props.vpe,
    innerForm: VpeForm,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      resourceGroups: props.resourceGroups,
      subnetList: props.subnetList,
      securityGroups: props.securityGroups,
      vpcList: props.vpcList,
      secretsManagerInstances: props.secretsManagerInstances,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "virtual_private_endpoints",
      hide: true,
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
Vpe.propTypes = {
  docs: PropTypes.func.isRequired,
  vpe: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  secretsManagerInstances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
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
    this.setState(forms_13(event));
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
      formName: this.props.data.name + "-resource_group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.resource_group),
      invalidText: "Select a Resource Group.",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      id: composedId,
      formName: this.props.data.name + "-vpn-" + this.state.vpc,
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.vpc),
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
      invalid: lib_9(this.state.vpc) || lib_9(this.state.subnet),
      invalidText: lib_9(this.state.vpc) ? `No VPC Selected.` : `Select a Subnet.`,
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

const VpnGateways = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "VPN Gateways",
    addText: "Create a VPN Gateway",
    docs: props.docs,
    innerForm: VpnGatewayForm,
    arrayData: props.vpn_gateways,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      vpcList: props.vpcList,
      subnetList: props.subnetList,
      resourceGroups: props.resourceGroups
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "vpn_gateways",
      hide: true,
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
VpnGateways.propTypes = {
  docs: PropTypes.func.isRequired,
  vpn_gateways: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  overrideTile: PropTypes.node
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
      label: "(Optional) Capacity (GB)",
      value: this.state.capacity || "",
      onChange: this.handleInputChange,
      allowEmpty: true,
      step: 1,
      hideSteppers: true,
      placeholder: "100",
      min: 10,
      max: 16000,
      invalid: iamUtils_3(this.state.capacity, 10, 16000),
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
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }
  handleInputChange(event) {
    this.setState(vsi_1(event, this.state, this.props));
  }
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = `vsi-deployment-form-${this.props.data.name}`;
    let volumeProps = {
      invalidCallback: this.props.invalidVsiVolumeCallback,
      invalidTextCallback: this.props.invalidVsiVolumeTextCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name
    };
    transpose$2({
      ...this.props.vsiVolumeProps
    }, volumeProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      className: "fieldWidthSmaller",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true,
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: composedId + "-rg",
      name: "resource_group",
      className: "fieldWidthSmaller",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: composedId + "-vpc",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.vpc),
      invalidText: "Select a VPC.",
      className: "fieldWidthSmaller"
    }), this.props.isTeleport ?
    /*#__PURE__*/
    // render dropdown for teleport instance
    React.createElement(IcseSelect, {
      formName: composedId + "-subnet",
      name: "subnet",
      className: "fieldWidthSmaller",
      labelText: "Subnet",
      groups: this.getSubnetList(),
      value: this.state.subnet,
      handleInputChange: this.handleInputChange,
      invalid: lib_9(this.state.vpc) || lib_9(this.state.subnet),
      invalidText: lib_9(this.state.vpc) ? `No VPC Selected.` : `Select a Subnet.`
    }) : /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      key: this.state.vpc + "-subnet",
      id: composedId + "-vsi-subnets",
      className: "fieldWidthSmaller",
      initialSelectedItems: this.state.subnets,
      vpc_name: this.state.vpc,
      subnets: this.getSubnetList(),
      onChange: value => this.handleMultiSelectChange("subnets", value)
    }), /*#__PURE__*/React.createElement(SecurityGroupMultiSelect, {
      key: this.state.vpc + "-sg",
      id: "vsi-security-groups",
      className: "fieldWidthSmaller",
      initialSelectedItems: this.state.security_groups || [],
      vpc_name: this.state.vpc,
      onChange: value => this.handleMultiSelectChange("security_groups", value),
      securityGroups: this.getSecurityGroupList(),
      invalid: !(this.state.security_groups?.length > 0),
      invalidText: !this.state.vpc || lib_9(this.state.vpc) ? `Select a VPC.` : `Select at least one security group.`
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      label: "Instances per Subnet",
      id: composedId + "-vsi-per-subnet",
      value: this.state.vsi_per_subnet,
      defaultValue: 1,
      max: 10,
      min: 1,
      onChange: this.handleInputChange,
      name: "vsi_per_subnet",
      hideSteppers: true,
      invalidText: "Please input a number 1-10",
      className: "fieldWidthSmaller leftTextAlign"
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      formName: composedId + "-image",
      labelText: "Image",
      name: "image_name",
      className: "fieldWidthSmaller",
      apiEndpoint: this.props.apiEndpointImages,
      handleInputChange: this.handleInputChange,
      value: this.state.image_name
    }), /*#__PURE__*/React.createElement(FetchSelect, {
      formName: composedId + "-profile",
      labelText: "Profile",
      name: "profile",
      className: "fieldWidthSmaller",
      apiEndpoint: this.props.apiEndpointInstanceProfiles,
      handleInputChange: this.handleInputChange,
      value: this.state.profile
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SshKeyMultiSelect, {
      id: composedId + "-sshkey",
      className: "fieldWidthSmaller",
      sshKeys: this.props.sshKeys,
      initialSelectedItems: this.state.ssh_keys || [],
      onChange: value => this.handleMultiSelectChange("ssh_keys", value)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: composedId + "-encryption_key",
      name: "encryption_key",
      className: "fieldWidthSmaller",
      labelText: "Encryption Key",
      groups: this.props.encryptionKeys,
      value: this.state.encryption_key,
      handleInputChange: this.handleInputChange,
      invalid: isNullOrEmptyString$6(this.state.encryption_key),
      invalidText: "Select a valid encryption key."
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-fips-toggle",
      className: "fieldWidthSmaller",
      labelText: "Enable Floating IP",
      defaultToggled: this.state.enable_floating_ip,
      onToggle: this.handleToggle
    })), /*#__PURE__*/React.createElement(DynamicRender, {
      hide: this.props.isTeleport,
      show: /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
        id: composedId + "-vsi-user-data",
        className: this.props.isModal ? "textInputWide" : "fieldWidthBigger",
        placeholder: "Cloud init data",
        labelText: "(Optional) User Data",
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

const Vsi = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Virtual Server Instances",
    addText: "Create a VSI",
    docs: props.docs,
    arrayData: props.vsi,
    innerForm: VsiForm,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      readOnlyName: false,
      resourceGroups: props.resourceGroups,
      encryptionKeys: props.encryptionKeys,
      subnetList: props.subnetList,
      securityGroups: props.securityGroups,
      vpcList: props.vpcList,
      sshKeys: props.sshKeys,
      apiEndpointImages: props.apiEndpointImages,
      apiEndpointInstanceProfiles: props.apiEndpointInstanceProfiles,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidVsiVolumeCallback: props.invalidVolumeCallback,
      invalidVsiVolumeTextCallback: props.invalidVolumeTextCallback,
      propsMatchState: props.propsMatchState,
      vsiVolumeProps: {
        disableSave: props.disableSave,
        encryptionKeys: props.encryptionKeys,
        craig: props.craig,
        onSave: props.onVolumeSave,
        onDelete: props.onVolumeDelete,
        onSubmit: props.onVolumeCreate
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "vsi",
      hide: true,
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
Vsi.propTypes = {
  docs: PropTypes.func.isRequired,
  vsi: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  sshKeys: PropTypes.array,
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidVolumeCallback: PropTypes.func.isRequired,
  invalidVolumeTextCallback: PropTypes.func.isRequired,
  onVolumeSave: PropTypes.func.isRequired,
  onVolumeDelete: PropTypes.func.isRequired,
  onVolumeCreate: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

class WorkerPoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = forms_3(this.props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubnetChange = this.handleSubnetChange.bind(this);
    buildFormFunctions(this);
  }
  handleInputChange(event) {
    this.setState(forms_2(event, this.state));
  }
  handleSubnetChange(subnets) {
    this.setState(forms_1(subnets, this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      componentName: "Worker Pools",
      onChange: this.handleInputChange,
      value: this.state.name,
      className: "fieldWidthSmaller",
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

const WorkerPools = props => {
  return props.isModal ? "" : /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Worker Pools",
    subHeading: true,
    addText: "Create a Worker Pool",
    arrayData: props.worker_pools,
    innerForm: WorkerPoolForm,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    innerFormProps: {
      subnetList: props.subnetList,
      cluster: props.cluster,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      flavorApiEndpoint: props.flavorApiEndpoint,
      craig: props.craig,
      arrayParentName: props.cluster.name
    },
    hideAbout: true,
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "worker_pools",
      disableSave: props.disableSave,
      type: "formInSubForm"
    }
  });
};
WorkerPools.defaultProps = {
  isModal: false
};
WorkerPools.propTypes = {
  isModal: PropTypes.bool.isRequired,
  worker_pools: PropTypes.arrayOf(PropTypes.shape({})),
  disableSave: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  propsMatchState: PropTypes.func,
  subnetList: PropTypes.array,
  cluster: PropTypes.shape({}).isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string,
  flavorApiEndpoint: PropTypes.string,
  craig: PropTypes.shape({})
};

var css_248z$2 = ".tileTitle {\n  font-size: 80%;\n  font-weight: bold;\n}\n\n.tileContent {\n  font-size: 90%;\n}\n";
styleInject(css_248z$2);

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
    nextState[name] = contains$5(["name", "vpc", "resource_group", "type"], name) ? value : contains$5(["health_delay", "health_retries", "health_timeout", "port", "listener_port", "connection_limit"], name) ? Number(value) : snakeCase$2(value);
    if (name === "vpc") {
      nextState.subnets = [];
      nextState.security_groups = [];
      nextState.target_vsi = [];
    } else if (name === "connection_limit" && nextState[name] === 0) {
      // reset when 0
      nextState[name] = "";
    } else if (name === "session_persistence_type" && value !== "app_cookie") {
      nextState.session_persistence_app_cookie_name = null;
    } else if (name === "type") {
      nextState.type = snakeCase$2(value.split(" ")[0]);
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
      let vsi = getObjectFromArray$1(this.props.vsiDeployments, "name", deployment);
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
      groups: ["Public (ALB)", "Private (NLB)"],
      value: this.state.type === "private" ? "Private (NLB)" : this.state.type === "public" ? "Public (ALB)" : "",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vsi_form",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: isNullOrEmptyString$6(this.state.vpc),
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
      invalidText: !this.state.vpc || isNullOrEmptyString$6(this.state.vpc) ? `Select a VPC.` : `Select at least one security group.`,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "subHeading",
      name: "Load Balancer VSI"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseMultiSelect, {
      key: this.state.vpc + "-vsi",
      className: "fieldWidthSmaller",
      id: componentName + "-vsi",
      titleText: "Deployment VSI",
      items: splat$2(this.props.vsiDeployments.filter(deployment => {
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
      invalid: isNullOrEmptyString$6(this.state.port || "") ? true : !isWholeNumber$1(this.state.port),
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
      value: titleCase$2(this.state.algorithm || ""),
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
      invalid: isNullOrEmptyString$6(this.state.health_timeout || "") ? true : !isWholeNumber$1(this.state.health_timeout),
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
      invalid: isNullOrEmptyString$6(this.state.health_delay || "") ? true : this.state.health_delay <= this.state.health_timeout || !isWholeNumber$1(this.state.health_delay),
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
      invalid: isNullOrEmptyString$6(this.state.health_retries || "") ? true : !isWholeNumber$1(this.state.health_retries),
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
      invalid: isNullOrEmptyString$6(this.state.listener_port || "") ? true : !isWholeNumber$1(this.state.listener_port),
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
        content: "Protocol of the listener for the load balancer"
      }
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "(Optional) Connection Limit",
      id: componentName + "-connection-limit",
      allowEmpty: true,
      value: this.state.connection_limit || "",
      step: 1,
      onChange: this.handleInputChange,
      name: "connection_limit",
      hideSteppers: true,
      min: 1,
      max: 15000,
      invalid: isNullOrEmptyString$6(this.state.connection_limit || "") ? false : isInRange$1(this.state.connection_limit, 1, 15000) === false || !isWholeNumber$1(this.state.connection_limit),
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
      value: titleCase$2(this.state.session_persistence_type || "").replace(/Ip/s, "IP").replace(/Http/g, "HTTP"),
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
      invalid: isNullOrEmptyString$6(this.state.session_persistence_app_cookie_name || "") ? false : this.props.invalidCallback(this.state, this.props),
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

const VsiLoadBalancer = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "VPC Load Balancers",
    addText: "Create a Load Balancer",
    docs: props.docs,
    innerForm: VsiLoadBalancerForm,
    arrayData: props.load_balancers,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      resourceGroups: props.resourceGroups,
      vpcList: props.vpcList,
      securityGroups: props.securityGroups,
      vsiDeployments: props.vsiDeployments
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "load_balancers",
      hide: true,
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
VsiLoadBalancer.propTypes = {
  docs: PropTypes.func.isRequired,
  load_balancers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string.isRequired),
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vsiDeployments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  overrideTile: PropTypes.node
};

class DnsZoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
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
   * handle vpc multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState(this.setNameToValue(name, event));
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "dns-zone-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-dns-zone-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(VpcListMultiSelect, {
      id: this.props.data.name + "-vpc-multiselect",
      titleText: "Permitted Networks",
      initialSelectedItems: this.state.vpcs,
      vpcList: this.props.vpcList,
      onChange: event => this.handleMultiSelect("vpcs", event),
      invalid: this.state.vpcs.length === 0
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.label + "-dns-zone-label",
      field: "label",
      value: this.state.label,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidLabelCallback(this.state, this.props),
      invalidText: this.props.invalidLabelTextCallback(this.state, this.props)
    })), /*#__PURE__*/React.createElement(TextArea, {
      id: this.props.data.name + "-dns-zone-description",
      className: "textInputWide",
      name: "description",
      value: this.state.description,
      labelText: "Description",
      onChange: this.handleInputChange,
      enableCounter: true,
      invalid: this.props.invalidDescriptionCallback(this.state.description),
      invalidText: this.props.invalidDescriptionTextCallback(this.state, this.props)
    }));
  }
}
DnsZoneForm.defaultProps = {
  data: {
    name: "",
    description: "",
    label: "",
    vpcs: []
  },
  vpcList: [],
  isModal: false
};
DnsZoneForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    label: PropTypes.string,
    vpcs: PropTypes.array
  }),
  invalidLabelCallback: PropTypes.func.isRequired,
  invalidLabelTextCallback: PropTypes.func.isRequired,
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired
};

class DnsCustomResolverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(forms_27(this.state, event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle subnet multiselect
   * @param {value} value
   */
  handleMultiSelect(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "dns-custom-resolver-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-dns-custom-resolver",
      componentName: this.props.data.name + "-dns-custom-resolver",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "To meet high availability status, configure custom resolvers with a minimum of two resolver locations",
        align: "bottom-left"
      },
      labelText: "High Availability",
      defaultToggled: this.state.high_availability,
      onToggle: this.handleToggle,
      className: "fieldWidth",
      toggleFieldName: "high_availability",
      id: this.props.data.name + "-high-availability"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Enabled",
      key: this.state.enabled,
      defaultToggled: this.state.enabled,
      onToggle: this.handleToggle,
      className: "fieldWidth",
      toggleFieldName: "enabled",
      id: this.props.data.name + "-enabled"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: `${this.props.data.name}-dns-custom-resolver-vpc`,
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: "Select a VPC.",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      key: this.state.vpc,
      id: this.props.data.name + "-dns-resolver-subnets",
      initialSelectedItems: [...this.state.subnets],
      vpc_name: this.state.vpc,
      onChange: event => this.handleMultiSelect("subnets", event),
      subnets: [...this.getSubnetList()],
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(TextArea, {
      id: this.props.data.name + "-dns-resolver-description",
      className: "textInputWide",
      name: "description",
      value: this.state.description,
      labelText: "Description",
      onChange: this.handleInputChange,
      enableCounter: true,
      invalid: this.props.invalidDescriptionCallback(this.state.description),
      invalidText: this.props.invalidDescriptionTextCallback(this.state, this.props)
    }));
  }
}
DnsCustomResolverForm.defaultProps = {
  data: {
    name: "",
    description: "",
    high_availability: true,
    enabled: false,
    vpc: "",
    subnets: []
  },
  isModal: false
};
DnsCustomResolverForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    high_availability: PropTypes.bool,
    vpc: PropTypes.string,
    subnets: PropTypes.arrayOf(PropTypes.string)
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired
};

/**
 * DnsRecordForm
 * @param {Object} props
 */
class DnsRecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
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
    let dnsComponent = this.props.isModal ? "new-dns-record" : this.props.data.name;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: dnsComponent + "-name",
      labelText: "DNS Record Name",
      componentName: dnsComponent,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "dns_zone",
      formName: dnsComponent + "-dns-zone",
      labelText: "DNS Zone",
      groups: this.props.dnsZones,
      value: this.state.dns_zone,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a DNS Zone.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "type",
      formName: dnsComponent + "-type",
      labelText: "DNS Record Type",
      groups: ["A", "AAAA", "CNAME", "PTR", "TXT", "MX", "SRV"],
      value: this.state.type,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a DNS Record Type.",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      componentName: "DNS Record",
      field: "rdata",
      labelText: "Resource Data",
      value: this.state.rdata,
      id: this.state.name + "-rdata",
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidRdata(this.state, this.props),
      invalidText: this.props.invalidRdataText(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "Time To Live (s)",
      id: dnsComponent + "-ttl",
      allowEmpty: true,
      value: this.state.ttl,
      onChange: this.handleInputChange,
      name: "ttl",
      hideSteppers: true,
      min: 300,
      max: 2147483647,
      invalid: iamUtils_3(this.state.ttl, 300, 2147483647),
      invalidText: "Must be a whole number (representing seconds) within range 300 to 2147483647",
      className: "fieldWidthSmaller"
    }), this.state.type === "MX" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NumberInput, {
      label: "Preference",
      id: dnsComponent + "-preference",
      value: this.state.preference,
      onChange: this.handleInputChange,
      name: "preference",
      hideSteppers: true,
      min: 0,
      max: 65535,
      step: 1,
      invalid: iamUtils_3(this.state.preference, 0, 65535),
      invalidText: "Must be a whole number within range 0 and 65535.",
      className: "fieldWidthSmaller"
    }))), this.state.type === "SRV" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      label: "DNS Record Port",
      id: dnsComponent + "-port",
      value: this.state.port,
      onChange: this.handleInputChange,
      name: "port",
      hideSteppers: true,
      min: 1,
      max: 65535,
      step: 1,
      invalid: iamUtils_3(this.state.port, 1, 65535),
      invalidText: "Must be a whole number between 1 and 65535",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: dnsComponent + "-protocol",
      name: "protocol",
      groups: ["TCP", "UDP"],
      value: this.state.protocol,
      labelText: "DNS Record Protocol",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "DNS Record Priority",
      id: dnsComponent + "-priority",
      value: this.state.priority,
      onChange: this.handleInputChange,
      name: "priority",
      hideSteppers: true,
      min: 0,
      max: 65535,
      step: 1,
      invalid: iamUtils_3(this.state.priority, 0, 65535),
      invalidText: "Must be a whole number between 0 and 65535",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: dnsComponent + "-service",
      componentName: "DNS Record",
      field: "service",
      value: this.state.service,
      onChange: this.handleInputChange,
      labelText: "DNS Record Service",
      invalid: lib_9(this.state.service) || this.state.service === undefined ? true : this.state.service.charAt(0) !== "_",
      invalidText: "Service must start with a '_'.",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      label: "DNS Record Weight",
      id: dnsComponent + "-weight",
      value: this.state.weight,
      onChange: this.handleInputChange,
      name: "weight",
      hideSteppers: true,
      min: 0,
      max: 65535,
      step: 1,
      invalid: iamUtils_3(this.state.weight, 0, 65535),
      invalidText: "Must be a whole number between 0 and 65535",
      className: "fieldWidthSmaller"
    }))));
  }
}
DnsRecordForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    dns_zone: "",
    type: "",
    rdata: "",
    ttl: 300
  },
  invalidCallback: () => {
    return false;
  },
  invalidTextCallback: () => {
    return "Invalid";
  },
  helperTextCallback: () => {
    return "";
  },
  dnsZones: []
};
DnsRecordForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dns_zone: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rdata: PropTypes.string.isRequired,
    ttl: PropTypes.string.isRequired,
    port: PropTypes.string,
    protocol: PropTypes.string,
    priority: PropTypes.string,
    service: PropTypes.string,
    weight: PropTypes.string,
    preference: PropTypes.string
  }).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  dnsZones: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired
};

/**
 * Context-based restriction rules
 */
class DnsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
  }
  handleInputChange(event) {
    this.setState(forms_28(event));
  }
  render() {
    // set up props for subforms
    let zoneInnerFormProps = {};
    transpose$2({
      ...this.props.zoneProps,
      arrayParentName: this.props.data.name
    }, zoneInnerFormProps);
    let recordInnerFormProps = {};
    transpose$2({
      ...this.props.recordProps,
      arrayParentName: this.props.data.name
    }, recordInnerFormProps);
    let resolverInnerFormProps = {};
    transpose$2({
      ...this.props.resolverProps,
      arrayParentName: this.props.data.name
    }, resolverInnerFormProps);
    return /*#__PURE__*/React.createElement("div", {
      id: "dns-form-" + this.props.data.name
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-dns",
      componentName: this.props.data.name + "-dns",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: this.props.data.name + "-dns-plan",
      name: "plan",
      className: "fieldWidthSmaller",
      value: titleCase$2(this.state.plan),
      labelText: "Plan",
      groups: ["Free", "Standard"],
      formName: "dns-form",
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${this.props.data.name}-dns-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      labelText: "Resource Group"
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Zones",
      subHeading: true,
      addText: "Create a DNS Zone",
      arrayData: this.props.data.zones,
      innerForm: DnsZoneForm,
      disableSave: this.props.zoneProps.disableSave,
      onDelete: this.props.zoneProps.onDelete,
      onSave: this.props.zoneProps.onSave,
      onSubmit: this.props.zoneProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...zoneInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "zones",
        disableSave: this.props.zoneProps.disableSave,
        type: "formInSubForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Records",
      subHeading: true,
      addText: "Create a DNS Record",
      arrayData: this.props.data.records,
      innerForm: DnsRecordForm,
      disableSave: this.props.recordProps.disableSave,
      onDelete: this.props.recordProps.onDelete,
      onSave: this.props.recordProps.onSave,
      onSubmit: this.props.recordProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...recordInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "records",
        disableSave: this.props.recordProps.disableSave,
        type: "formInSubForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Custom Resolvers",
      subHeading: true,
      addText: "Create a Custom Resolver",
      arrayData: this.props.data.custom_resolvers,
      innerForm: DnsCustomResolverForm,
      disableSave: this.props.resolverProps.disableSave,
      onDelete: this.props.resolverProps.onDelete,
      onSave: this.props.resolverProps.onSave,
      onSubmit: this.props.resolverProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...resolverInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "custom_resolvers",
        disableSave: this.props.resolverProps.disableSave,
        type: "formInSubForm"
      }
    })));
  }
}
DnsForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    plan: "free",
    resource_group: "service-rg",
    zones: [],
    records: [],
    custom_resolvers: []
  }
};
DnsForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    zones: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      label: PropTypes.string,
      vpcs: PropTypes.array
    })),
    records: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      dns_zone: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      rdata: PropTypes.string.isRequired,
      ttl: PropTypes.number.isRequired
    })),
    custom_resolvers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      enabled: PropTypes.bool,
      high_availability: PropTypes.bool,
      vpc: PropTypes.string,
      subnets: PropTypes.arrayOf(PropTypes.string)
    }))
  }),
  zoneProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    invalidLabelCallback: PropTypes.func.isRequired,
    invalidLabelTextCallback: PropTypes.func.isRequired,
    invalidDescriptionCallback: PropTypes.func.isRequired,
    invalidDescriptionTextCallback: PropTypes.func.isRequired,
    invalidNameCallback: PropTypes.func.isRequired,
    invalidNameTextCallback: PropTypes.func.isRequired
  }),
  resolverProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    subnetList: PropTypes.array.isRequired,
    vpcList: PropTypes.array.isRequired,
    invalidCallback: PropTypes.func.isRequired,
    invalidTextCallback: PropTypes.func.isRequired,
    invalidDescriptionCallback: PropTypes.func.isRequired,
    invalidDescriptionTextCallback: PropTypes.func.isRequired,
    invalidNameCallback: PropTypes.func.isRequired,
    invalidNameTextCallback: PropTypes.func.isRequired
  }),
  recordProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    invalidCallback: PropTypes.func.isRequired,
    invalidTextCallback: PropTypes.func.isRequired,
    invalidRdata: PropTypes.func.isRequired,
    invalidRdataText: PropTypes.func.isRequired,
    dnsZones: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};

const Dns = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "DNS Service",
    addText: "Create a DNS service",
    innerForm: DnsForm,
    craig: props.craig,
    arrayData: props.dns,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    docs: props.docs,
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      invalidNameCallback: props.invalidCallback,
      invalidNameTextCallback: props.invalidTextCallback,
      vpcList: props.vpcList,
      subnetList: props.subnetList,
      resourceGroups: props.resourceGroups,
      propsMatchState: props.propsMatchState,
      zoneProps: {
        craig: props.craig,
        onSave: props.onZoneSave,
        onDelete: props.onZoneDelete,
        onSubmit: props.onZoneSubmit,
        disableSave: props.disableSave,
        invalidNameCallback: props.invalidZoneNameCallback,
        invalidNameTextCallback: props.invalidZoneNameTextCallback,
        invalidLabelCallback: props.invalidLabelCallback,
        invalidLabelTextCallback: () => {
          return "Label cannot be null or empty string.";
        },
        invalidDescriptionCallback: props.invalidDescriptionCallback,
        invalidDescriptionTextCallback: props.invalidDescriptionTextCallback,
        vpcList: props.vpcList,
        propsMatchState: props.propsMatchState
      },
      recordProps: {
        craig: props.craig,
        disableSave: props.disableSave,
        onSave: props.onRecordSave,
        onDelete: props.onRecordDelete,
        onSubmit: props.onRecordSubmit,
        invalidCallback: props.invalidRecordCallback,
        invalidTextCallback: props.invalidRecordTextCallback,
        invalidRdata: props.invalidRdataCallback,
        dnsZones: props.dnsZones,
        invalidRdataText: () => {
          return "Resource Data cannot be null or empty string.";
        },
        propsMatchState: props.propsMatchState
      },
      resolverProps: {
        craig: props.craig,
        onSave: props.onResolverSave,
        onSubmit: props.onResolverSubmit,
        onDelete: props.onResolverDelete,
        disableSave: props.disableSave,
        invalidNameCallback: props.invalidResolverNameCallback,
        invalidNameTextCallback: props.invalidResolverNameTextCallback,
        invalidCallback: () => {},
        // these are only used on a select which handles its own invalid state
        invalidTextCallback: () => {},
        invalidDescriptionCallback: props.invalidResolverDescriptionCallback,
        invalidDescriptionTextCallback: props.invalidResolverDescriptionTextCallback,
        subnetList: props.subnetList,
        vpcList: props.vpcList,
        propsMatchState: props.propsMatchState
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "dns",
      hideName: true
    }
  });
};
Dns.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  dns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  onZoneSave: PropTypes.func.isRequired,
  onZoneDelete: PropTypes.func.isRequired,
  onZoneSubmit: PropTypes.func.isRequired,
  invalidZoneNameCallback: PropTypes.func.isRequired,
  invalidZoneNameTextCallback: PropTypes.func.isRequired,
  invalidLabelCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  onRecordSave: PropTypes.func.isRequired,
  onRecordDelete: PropTypes.func.isRequired,
  onRecordSubmit: PropTypes.func.isRequired,
  invalidRecordCallback: PropTypes.func.isRequired,
  invalidRecordTextCallback: PropTypes.func.isRequired,
  invalidRdataCallback: PropTypes.func.isRequired,
  dnsZones: PropTypes.array,
  onResolverSave: PropTypes.func.isRequired,
  onResolverSubmit: PropTypes.func.isRequired,
  onResolverDelete: PropTypes.func.isRequired,
  invalidResolverNameCallback: PropTypes.func.isRequired,
  invalidResolverNameTextCallback: PropTypes.func.isRequired,
  invalidResolverDescriptionCallback: PropTypes.func.isRequired,
  invalidResolverDescriptionTextCallback: PropTypes.func.isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

class RoutingTableRouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!isNullOrEmptyString$6(this.state.action) && this.state.action !== "deliver") {
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
    this.setState(routingTable_1(this.state, event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
      name: "destination",
      field: "destination",
      value: this.state.destination,
      placeholder: "x.x.x.x",
      labelText: "Destination IP or CIDR",
      invalidCallback: () => isIpv4CidrOrAddress$2(this.state.destination) === false,
      invalidText: "Destination must be a valid IP or IPV4 CIDR block",
      onChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "action",
      formName: this.props.data.name + "-routing-table-route-action",
      groups: ["Delegate", "Deliver", "Delegate VPC", "Drop"],
      labelText: "Action",
      handleInputChange: this.handleInputChange,
      value: titleCase$2(this.state.action),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-next-hop",
      field: "next_hop",
      value: this.state.next_hop,
      placeholder: "x.x.x.x",
      invalidCallback: () => isNullOrEmptyString$6(this.state.next_hop) || isIpv4CidrOrAddress$2(this.state.next_hop) === false || contains$5(this.state.next_hop, `/`),
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
    zone: 1,
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
    if (!this.state.accept_routes_from_resource_type) {
      this.state.accept_routes_from_resource_type = [];
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
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
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  handleMultiSelectChange(items) {
    this.setState({
      accept_routes_from_resource_type: items
    });
  }
  render() {
    let composedId = this.props.data.name + "-route-form";
    let innerFormProps = {
      arrayParentName: this.props.data.name,
      route: this.props.data,
      invalidTextCallback: this.props.invalidRouteTextCallback,
      invalidCallback: this.props.invalidRouteCallback
    };
    transpose$2({
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
      name: "direct_link_ingress",
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, the routing table is used to route traffic that originates from Direct Link to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-route-internet-toggle",
      labelText: "Internet Ingress",
      defaultToggled: this.state.internet_ingress,
      name: "internet_ingress",
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, this routing table will be used to route traffic that originates from the internet. For this to succeed, the VPC must not already have a routing table with this property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: composedId + "-tgw-ingress",
      labelText: "Transit Gateway Ingress",
      defaultToggled: this.state.transit_gateway_ingress,
      name: "transit_gateway_ingress",
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
      name: "vpc_zone_ingress",
      onToggle: this.handleToggle,
      tooltip: {
        content: "If set to true, the routing table is used to route traffic that originates from subnets in other zones in the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
        align: "bottom-left",
        alignModal: "bottom-left"
      }
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseMultiSelect, {
      id: this.props.data.name + "-accept-routes",
      titleText: "Additional Route Sources",
      initialSelectedItems: this.state.accept_routes_from_resource_type,
      items: ["vpn_server", "vpn_gateway"],
      onChange: event => {
        this.handleMultiSelectChange(event.selectedItems);
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
    internet_ingress: false,
    transit_gateway_ingress: false,
    vpc_zone_ingress: false,
    direct_link_ingress: false
  }
};
RoutingTableForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    routes: PropTypes.array.isRequired,
    internet_ingress: PropTypes.bool.isRequired,
    transit_gateway_ingress: PropTypes.bool.isRequired,
    vpc_zone_ingress: PropTypes.bool.isRequired,
    direct_link_ingress: PropTypes.bool.isRequired
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

const RoutingTables = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Routing Tables",
    addText: "Create a Routing Table",
    innerForm: RoutingTableForm,
    arrayData: props.routing_tables,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    docs: props.docs,
    hideFormTitleButton: isEmpty(props.vpcList),
    innerFormProps: {
      propsMatchState: props.propsMatchState,
      craig: props.craig,
      disableSave: props.disableSave,
      vpcList: props.vpcList,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      invalidRouteCallback: props.invalidRouteCallback,
      invalidRouteTextCallback: props.invalidRouteTextCallback,
      routeProps: {
        disableSave: props.disableSave,
        onSave: props.onRouteSave,
        onDelete: props.onRouteDelete,
        onSubmit: props.onRouteSubmit,
        craig: props.craig
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "routing_tables",
      hideName: true
    },
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : null
  });
};
RoutingTables.propTypes = {
  routing_tables: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  onRouteSave: PropTypes.func.isRequired,
  onRouteDelete: PropTypes.func.isRequired,
  onRouteSubmit: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

/**
 *  handle allowed ips for event streams
 * @param {Object} event
 * @param {Object} stateData
 * @returns {Object} new state
 */
function handleAllowedIps$1(event, stateData) {
  let state = {
    ...stateData
  };
  // removing white space and checking for empty value
  let value = event.target.value.replace(/\s*/g, "");
  state.private_ip_allowlist = value;
  return state;
}

/**
 * handle plan change for event streams
 * @param {Object} event
 * @param {Object} stateData
 * @returns {Object} new state
 */
function handlePlanChange(event, stateData) {
  let state = {
    ...stateData
  };
  let value = event.target.value.toLowerCase();
  state.plan = value;
  if (value !== "enterprise") {
    state = {
      ...state,
      throughput: "",
      storage_size: "",
      private_ip_allowlist: ""
    };
  }
  return state;
}
var eventStreams = {
  handleAllowedIps: handleAllowedIps$1,
  handlePlanChange
};
var eventStreams_1 = eventStreams.handleAllowedIps;
var eventStreams_2 = eventStreams.handlePlanChange;

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
    this.setState(eventStreams_1(event, this.state));
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
    this.setState(eventStreams_2(event, this.state));
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
      value: titleCase$2(this.state.plan),
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
    })), this.state.plan === "enterprise" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
      id: this.props.data.name + "-event-streams-private-ips",
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
    throughput: PropTypes.string,
    storage_size: PropTypes.string,
    private_ip_allowlist: PropTypes.string
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

const EventStreams = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Event Streams",
    addText: "Create an Event Streams Service",
    docs: props.docs,
    innerForm: EventStreamsForm,
    arrayData: props.event_streams,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "event_streams",
      hide: true,
      hideName: true
    }
  });
};
EventStreams.propTypes = {
  event_streams: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired
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
    this.setState(forms_9(event, this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: `${this.props.data.name}-name`,
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      className: "fieldWidthSmaller",
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: `${this.props.data.name}-route-destination`,
      field: "destination",
      value: this.state.destination,
      placeholder: "x.x.x.x",
      labelText: "Destination CIDR",
      invalidCallback: () => isIpv4CidrOrAddress$2(this.state.destination) === false || !contains$5(this.state.destination, "/"),
      invalidText: "Destination must be a valid IPV4 CIDR Block",
      onChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "vpn-server-action",
      name: "action",
      labelText: "Action",
      groups: ["Translate", "Deliver", "Drop"],
      value: titleCase$2(this.state.action),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
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

class VpnServerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!this.state.additional_prefixes) {
      this.state.additional_prefixes = [];
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change for vpn server form
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(forms_40(this.state, event));
  }
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
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
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = `vpn-server-form-${this.props.data.name}`;
    let routeProps = {
      invalidCallback: this.props.invalidVpnServerRouteCallback,
      invalidTextCallback: this.props.invalidVpnServerRouteTextCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name
    };
    transpose$2({
      ...this.props.vpnServerRouteProps
    }, routeProps);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId,
      componentName: composedId,
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-vpn-server-resource-group",
      name: "resource_group",
      labelText: "Resource Group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-vpn-server-vpc",
      name: "vpc",
      labelText: "VPC",
      groups: this.props.vpcList,
      value: this.state.vpc,
      handleInputChange: this.handleInputChange,
      invalid: isNullOrEmptyString$6(this.state.vpc),
      invalidText: "Select a VPC.",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      key: this.state.vpc + "-subnets",
      id: this.props.data.name + "-vpe-subnets",
      initialSelectedItems: this.state.subnets || [],
      vpc_name: this.state.vpc,
      onChange: event => this.handleMultiSelect("subnets", event),
      subnets: [...this.getSubnetList()],
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(SecurityGroupMultiSelect, {
      key: this.state.vpc + "-sg",
      id: this.props.data.name + "-vpn-server-security-groups",
      initialSelectedItems: this.state.security_groups || [],
      vpc_name: this.state.vpc,
      onChange: value => this.handleMultiSelectChange("security_groups", value),
      securityGroups: this.getSecurityGroupList(),
      invalid: !(this.state.security_groups?.length > 0),
      invalidText: !this.state.vpc || isNullOrEmptyString$6(this.state.vpc) ? `Select a VPC.` : `Select at least one security group.`,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-vpn-server-certificate-crn",
      field: "certificate_crn",
      componentName: "certificate_crn",
      tooltip: {
        content: "Secrets Manager certificate unique identifier for VPN server",
        align: "top-left"
      },
      labelText: "Secrets Manager Certificate CRN",
      value: this.state.certificate_crn || "",
      onChange: this.handleInputChange,
      invalid: this.props.invalidCrns(this.state, this.props, "certificate_crn"),
      invalidText: this.props.invalidCrnText(this.state, this.props, "certificate_crn"),
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-vpn-server-method",
      name: "method",
      labelText: "Authentication Method",
      groups: ["Certificate", "Username"],
      value: titleCase$2(this.state.method),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), this.state.method === "certificate" && /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-vpn-server-client-ca-crn",
      field: "client_ca_crn",
      componentName: "client_ca_crn",
      labelText: "Client CA CRN",
      tooltip: {
        content: "Client Secrets Manager Certificate CRN",
        align: "top-left"
      },
      value: this.state.client_ca_crn || "",
      onChange: this.handleInputChange,
      invalid: this.props.invalidCrns(this.state, this.props, "client_ca_crn"),
      invalidText: () => this.props.invalidCrnText(this.state, this.props, "client_ca_crn"),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-vpn-server-client-ip-pool",
      componentName: "client_ip_pool",
      name: "client_ip_pool",
      field: "client_ip_pool",
      tooltip: {
        content: "VPN client IPv4 address pool, expressed in CIDR format. The request must not overlap with any existing address prefixes in the VPC or any reserved address ranges.",
        link: "https://cloud.ibm.com/docs/vpc?topic=vpc-vpn-client-to-site-overview",
        align: "top-left"
      },
      value: this.state.client_ip_pool,
      placeholder: "x.x.x.x/x",
      labelText: "Client CIDR Pool",
      invalidCallback: () => this.props.invalidClientIpPoolCallback(this.state, this.props),
      invalidText: this.props.invalidClientIpPoolTextCallback(this.state, this.props),
      onChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      id: this.props.data.name + "-vpn-server-port",
      label: "Port",
      allowEmpty: true,
      value: this.state.port || "",
      step: 1,
      onChange: this.handleInputChange,
      name: "port",
      hideSteppers: true,
      min: 1,
      max: 65535,
      invalid: iamUtils_3(this.state.port, 1, 65535) || isNullOrEmptyString$6(this.state.port || ""),
      invalidText: "Must be a whole number between 1 and 65535.",
      className: "fieldWidthSmaller leftTextAlign"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-vpn-server-protocol",
      groups: ["TCP", "UDP"],
      value: this.state.protocol.toUpperCase(),
      labelText: "Protocol",
      name: "protocol",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-vpn-server-enable-split-tunneling",
      labelText: "Enable Split Tunneling",
      defaultToggled: this.state.enable_split_tunneling,
      onToggle: () => this.handleToggle("enable_split_tunneling"),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      id: this.props.data.name + "-vpn-server-client-idle-timeout-seconds",
      name: "client_idle_timeout",
      placeholder: "600",
      label: "Client Idle Timeout (s)",
      allowEmpty: true,
      value: this.state.client_idle_timeout || "",
      step: 1,
      onChange: this.handleInputChange,
      hideSteppers: true,
      min: 0,
      max: 28800,
      invalid: iamUtils_3(this.state.client_idle_timeout, 0, 28800),
      invalidText: "Must be a whole number between 0 and 28800.",
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      className: "textInputMedium",
      id: this.props.data.name + "-vpn-server-client-dns-server-ips",
      labelText: "Client DNS Server IPs",
      placeholder: "X.X.X.X, X.X.X.X, ...",
      value: this.state.client_dns_server_ips || "",
      onChange: this.handleInputChange,
      invalid: iamUtils_2(this.state.client_dns_server_ips),
      invalidText: "Please enter a comma separated list of IP addresses.",
      helperText: "Enter a comma separated list of IP addresses."
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      type: "p",
      name: "Additional VPC Prefixes"
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-vpn-additional-prefix-zone",
      groups: ["1", "2", "3"],
      value: this.state.zone || "",
      labelText: "Zone",
      name: "zone",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      disableInvalid: isEmpty(this.state.additional_prefixes)
    }), /*#__PURE__*/React.createElement(TextArea, {
      className: "textInputMedium",
      id: this.props.data.name + "-vpn-server-additional-prefixes",
      labelText: "Additional VPC Prefixes",
      placeholder: "X.X.X.X/XX, X.X.X.X/XX, ...",
      value: this.state.additional_prefixes.join(","),
      onChange: event => {
        event.target.name = "additional_prefixes";
        this.handleInputChange(event);
      },
      invalid: iamUtils_4(this.state.additional_prefixes.join(",")),
      invalidText: "Please enter a comma separated list of IPV4 CIDR blocks.",
      helperText: "Enter a comma separated list of IPV4 CIDR blocks."
    })), this.props.isModal === false && /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Routes",
      subHeading: true,
      addText: "Create a Route",
      arrayData: this.props.data.routes,
      innerForm: VpnServerRouteForm,
      disableSave: this.props.vpnServerRouteProps.disableSave,
      onDelete: this.props.vpnServerRouteProps.onDelete,
      onSave: this.props.vpnServerRouteProps.onSave,
      onSubmit: this.props.vpnServerRouteProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...routeProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "routes",
        disableSave: this.props.vpnServerRouteProps.disableSave,
        type: "formInSubForm"
      }
    }));
  }
}
VpnServerForm.defaultProps = {
  data: {
    name: "",
    certificate_crn: "",
    method: "",
    client_ca_crn: "",
    client_ip_pool: "",
    enable_split_tunneling: false,
    client_idle_timeout: "",
    port: "",
    protocol: "udp",
    resource_group: "",
    vpc: "",
    security_groups: [],
    client_dns_server_ips: "",
    routes: [],
    subnets: [],
    additional_prefixes: []
  },
  isModal: false,
  resourceGroups: [],
  securityGroups: [],
  subnetList: [],
  vpcList: []
};
VpnServerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    certificate_crn: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    client_ca_crn: PropTypes.string.isRequired,
    client_ip_pool: PropTypes.string.isRequired,
    enable_split_tunneling: PropTypes.bool,
    client_idle_timeout: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    port: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    protocol: PropTypes.string,
    resource_group: PropTypes.string,
    vpc: PropTypes.string.isRequired,
    subnets: PropTypes.array,
    security_groups: PropTypes.array.isRequired,
    routes: PropTypes.array,
    additional_prefixes: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  /* lists */
  resourceGroups: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  securityGroups: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidClientIpPoolCallback: PropTypes.func.isRequired,
  invalidClientIpPoolTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  /* forms */
  vpnServerRouteProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired
  }).isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired
};

const NoSecretsManagerTile = ({
  text
}) => {
  return /*#__PURE__*/React.createElement(Tile, {
    className: "tileBackground displayFlex alignItemsCenter wrap marginTop"
  }, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), " No Secrets Manager instances have been created. Create one from the", " ", /*#__PURE__*/React.createElement("a", {
    className: "no-secrets-link",
    href: "/form/secretsManager"
  }, "Secrets Manager Page"), " ", text);
};
const VpnServers = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "VPN Servers",
    addText: "Create a VPN Server",
    docs: props.docs,
    innerForm: VpnServerForm,
    arrayData: props.vpn_servers,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    hideFormTitleButton: props.noSecretsManager || isEmpty(props.vpcList),
    overrideTile: props.vpcList.length === 0 ? NoVpcTile() : props.noSecretsManager ? /*#__PURE__*/React.createElement(NoSecretsManagerTile, {
      text: "to enable VPN Servers."
    }) : null,
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      invalidClientIpPoolTextCallback: function (stateData) {
        return props.invalidCidrBlock(stateData.client_ip_pool) ? "Invalid CIDR block" : "";
      },
      invalidClientIpPoolCallback: function (stateData) {
        return props.invalidCidrBlock(stateData.client_ip_pool);
      },
      invalidCrns: function (stateData, componentProps, field) {
        return props.invalidCrnList([stateData[field]]);
      },
      invalidCrnText: function (stateData, componentProps, field) {
        return props.invalidCrnList([stateData[field]]) ? "Enter a valid resource CRN" : "";
      },
      helperTextCallback: props.helperTextCallback,
      subnetList: props.subnetList,
      securityGroups: props.securityGroups,
      vpcList: props.vpcList,
      vpnServerRouteProps: {
        onSave: props.onRouteSave,
        onDelete: props.onRouteDelete,
        onSubmit: props.onRouteSubmit,
        disableSave: function (field, stateData, componentProps) {
          // pass through function to change field name
          return props.disableSave("vpn_server_routes", stateData, componentProps);
        },
        invalidCallback: props.invalidRouteCallback,
        invalidTextCallback: props.invalidRouteTextCallback,
        craig: props.craig,
        propsMatchState: props.propsMatchState
      }
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "vpn_servers",
      hide: true,
      hideName: true
    }
  });
};
VpnServers.defaultProps = {
  noSecretsManager: false
};
VpnServers.propTypes = {
  noSecretsManager: PropTypes.bool.isRequired,
  vpn_servers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  invalidCidrBlock: PropTypes.func.isRequired,
  invalidCrnList: PropTypes.func.isRequired,
  onRouteSave: PropTypes.func.isRequired,
  onRouteDelete: PropTypes.func.isRequired,
  onRouteSubmit: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  overrideTile: PropTypes.node
};

function none$2() {}
class NetworkAclPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToggleForm: false,
      sourceAcl: null,
      destinationVpc: null,
      addClusterRuleAcl: null
    };
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  onModalSubmit(data) {
    this.props.onAclSubmit(data, {
      vpc_name: this.props.data.name
    });
    this.props.handleModalToggle();
  }
  handleSelect(event) {
    let {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    let {
      disableSave,
      propsMatchState
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormModal, {
      name: "Add a Network ACL",
      show: this.props.showSubModal,
      onRequestSubmit: this.onModalSubmit,
      onRequestClose: this.props.handleModalToggle
    }, /*#__PURE__*/React.createElement(NetworkAclForm$1, {
      invalidTextCallback: this.props.invalidTextCallback,
      invalidCallback: this.props.invalidCallback,
      craig: this.props.craig,
      resourceGroups: this.props.resourceGroups,
      vpc_name: this.props.data.name,
      shouldDisableSubmit: function () {
        // set modal form enable submit
        if (disableSave("acls", this.state, this.props) === false) {
          this.props.enableModal();
        } else {
          this.props.disableModal();
        }
      },
      isModal: true
      /* below functions only needed when not modal but are required */,
      disableSaveCallback: none$2,
      helperTextCallback: none$2,
      onRuleSave: none$2,
      onRuleDelete: none$2,
      disableModalSubmitCallback: none$2,
      onSubmitCallback: none$2
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Network Access Control Lists",
      className: "marginBottomSmall",
      type: "subHeading",
      buttons: /*#__PURE__*/React.createElement(SaveAddButton, {
        onClick: () => this.props.handleModalToggle(),
        type: "add",
        noDeleteButton: true
      })
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      arrayData: this.props.data.acls,
      onSubmit: none$2 // no modal
      ,
      onDelete: this.props.onDelete,
      onSave: this.props.onSave,
      innerForm: NetworkAclForm$1,
      isMiddleForm: true,
      innerFormProps: {
        invalidTextCallback: this.props.invalidTextCallback,
        invalidCallback: this.props.invalidCallback,
        invalidRuleTextCallback: this.props.invalidRuleTextCallback,
        invalidRuleText: this.props.invalidRuleText,
        disableSaveCallback: function (stateData, componentProps) {
          return disableSave("acl_rules", stateData, componentProps) || propsMatchState("acl_rules", stateData, componentProps);
        },
        helperTextCallback: this.props.helperTextCallback,
        onRuleSave: this.props.onRuleSave,
        onRuleDelete: this.props.onRuleDelete,
        onSubmitCallback: this.props.onSubmitCallback,
        resourceGroups: this.props.resourceGroups,
        vpc_name: this.props.data.name,
        craig: this.props.craig,
        disableModalSubmitCallback: none$2
      },
      disableSave: this.props.disableSave,
      propsMatchState: this.props.propsMatchState,
      toggleFormProps: {
        submissionFieldName: "acls",
        hideName: true,
        type: "formInSubForm",
        disableSave: this.props.disableSave,
        propsMatchState: this.props.propsMatchState,
        vpc_name: this.props.data.name
      },
      hideAbout: true
    }), this.props.child ? RenderForm(this.props.child, {
      data: this.props.data,
      craig: this.props.craig
    }) : "");
  }
}
NetworkAclPage.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    acls: PropTypes.array
  }),
  onAclSubmit: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleModalToggle: PropTypes.func,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
const NetworkAcls = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Network Access Control Lists",
    innerForm: NetworkAclPage,
    arrayData: props.vpcs,
    docs: props.docs,
    onSubmit: none$2,
    onDelete: none$2,
    onSave: none$2,
    disableSave: none$2,
    propsMatchState: none$2,
    forceOpen: props.forceOpen,
    hideFormTitleButton: true,
    innerFormProps: {
      craig: props.craig,
      onAclSubmit: props.onAclSubmit,
      resourceGroups: props.resourceGroups,
      child: props.child,
      invalidTextCallback: props.invalidTextCallback,
      invalidCallback: props.invalidCallback,
      invalidRuleTextCallback: props.invalidRuleTextCallback,
      invalidRuleText: props.invalidRuleText,
      disableSave: props.disableSave,
      propsMatchState: props.propsMatchState,
      helperTextCallback: props.helperTextCallback,
      onRuleSave: props.onRuleSave,
      onRuleDelete: props.onRuleDelete,
      onSubmitCallback: props.onSubmitCallback,
      onSave: props.onSave,
      onDelete: props.onDelete
    },
    toggleFormProps: {
      craig: props.craig,
      noDeleteButton: true,
      noSaveButton: true,
      hideName: true,
      submissionFieldName: "network_acls",
      disableSave: none$2,
      propsMatchState: none$2,
      nullRef: true
    },
    overrideTile: props.craig.store.json.vpcs.length === 0 ? NoVpcTile() : null
  });
};
NetworkAcls.propTypes = {
  vpcs: PropTypes.array.isRequired,
  docs: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  onAclSubmit: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

const SshKeys = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "SSH Keys",
    addText: "Create an SSH Key",
    docs: props.powerVs ? undefined : props.docs,
    subHeading: props.powerVs,
    innerForm: SshKeyForm,
    arrayData: props.ssh_keys,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    deleteDisabled: props.deleteDisabled,
    deleteDisabledMessage: "SSH Key currently in use",
    innerFormProps: {
      craig: props.craig,
      resourceGroups: props.resourceGroups,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      invalidKeyCallback: props.invalidKeyCallback,
      powerVs: props.powerVs,
      arrayParentName: props.powerVs ? props.arrayParentName : undefined,
      classic: props.classic
    },
    hideAbout: props.powerVs,
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "ssh_keys",
      hide: true,
      hideName: true,
      type: props.powerVs ? "formInSubForm" : undefined
    }
  });
};
SshKeys.defaultProps = {
  powerVs: false,
  classic: false
};
SshKeys.propTypes = {
  ssh_keys: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func,
  // not required for power vs
  deleteDisabled: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  powerVs: PropTypes.bool.isRequired,
  arrayParentName: PropTypes.string,
  classic: PropTypes.bool.isRequired
};

function none$1() {}
class SubnetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }
  onModalSubmit(data) {
    this.props.onSubnetSubmit.create(data, {
      vpc_name: this.props.data.name
    });
    this.props.handleModalToggle();
  }
  render() {
    let tiers = [...this.props.subnetTiers[this.props.data.name]];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FormModal, {
      name: "Add a Subnet Tier",
      show: this.props.showSubModal,
      onRequestSubmit: this.onModalSubmit,
      onRequestClose: this.props.handleModalToggle
    }, /*#__PURE__*/React.createElement(SubnetTierForm$1, {
      dynamicSubnets: this.props.dynamicSubnets,
      networkAcls: splat$2(this.props.data.acls, "name"),
      enabledPublicGateways: this.props.data.publicGateways,
      vpc_name: this.props.data.name,
      subnetListCallback: this.props.subnetListCallback,
      craig: this.props.craig,
      disableSubnetSaveCallback: none$1,
      propsMatchState: none$1,
      shouldDisableSave: none$1,
      shouldDisableSubmit: (stateData, componentProps) => {
        return this.props.disableSave("subnetTier", stateData, componentProps);
      },
      invalidTextCallback: this.props.invalidSubnetTierText,
      invalidCallback: this.props.invalidSubnetTierName,
      invalidCidr: this.props.invalidCidr(this.props.craig),
      invalidCidrText: this.props.invalidCidrText(this.props.craig),
      invalidSubnetCallback: this.props.invalidName("subnet", this.props.craig),
      invalidSubnetTextCallback: this.props.invalidNameText("subnet", this.props.craig)
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Subnet Tiers",
      className: tiers.length === 0 ? "" : "marginBottomSmall",
      type: "subHeading",
      buttons: /*#__PURE__*/React.createElement(SaveAddButton, {
        onClick: () => this.props.handleModalToggle(),
        type: "add",
        noDeleteButton: true
      })
    }), tiers.length === 0 && /*#__PURE__*/React.createElement(EmptyResourceTile, {
      name: "Subnet Tiers for " + titleCase$2(this.props.data.name) + " VPC",
      noMarginTop: true
    }), this.props.subnetTiers[this.props.data.name].map((tier, index) => /*#__PURE__*/React.createElement(SubnetTierForm$1, {
      key: JSON.stringify(tier),
      data: this.props.getSubnetTierStateData(tier, this.props.data),
      index: index,
      onSave: this.props.onSubnetTierSave,
      onDelete: this.props.onSubnetTierDelete,
      networkAcls: splat$2(this.props.data.acls, "name"),
      enabledPublicGateways: this.props.data.publicGateways,
      vpc_name: this.props.data.name,
      subnetListCallback: this.props.getTierSubnets(tier, {
        ...this.props.data
      }),
      craig: this.props.craig,
      dynamicSubnets: this.props.dynamicSubnets,
      disableSubnetSaveCallback: (stateData, componentProps) => {
        return this.props.propsMatchState("subnet", stateData, componentProps) || this.props.disableSave("subnet", stateData, componentProps, this.props.craig);
      },
      shouldDisableSave: (stateData, componentProps) => {
        return this.props.propsMatchState("subnetTier", stateData, componentProps) || this.props.disableSave("subnetTier", stateData, componentProps);
      },
      propsMatchState: (stateData, componentProps) => {
        return this.props.propsMatchState("subnetTier", stateData, componentProps);
      },
      shouldDisableSubmit: none$1,
      invalidTextCallback: this.props.invalidSubnetTierText,
      invalidCallback: this.props.invalidSubnetTierName,
      invalidCidr: this.props.invalidCidr(this.props.craig),
      invalidCidrText: this.props.invalidCidrText(this.props.craig),
      invalidSubnetCallback: this.props.invalidName("subnet", this.props.craig),
      invalidSubnetTextCallback: this.props.invalidNameText("subnet", this.props.craig),
      onSubnetSave: this.props.onSubnetSave
    })));
  }
}
SubnetsPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    acls: PropTypes.array.isRequired
  }),
  onSubnetSubmit: PropTypes.func.isRequired,
  subnetTiers: PropTypes.shape({}).isRequired,
  showSubModal: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  dynamicSubnets: PropTypes.bool,
  subnetListCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidSubnetTierText: PropTypes.func.isRequired,
  invalidSubnetTierName: PropTypes.func.isRequired,
  invalidCidr: PropTypes.func.isRequired,
  invalidCidrText: PropTypes.func.isRequired,
  invalidName: PropTypes.func.isRequired,
  invalidNameText: PropTypes.func.isRequired,
  getSubnetTierStateData: PropTypes.func.isRequired,
  getTierSubnets: PropTypes.func.isRequired,
  onSubnetSave: PropTypes.func.isRequired,
  onSubnetTierSave: PropTypes.func.isRequired,
  onSubnetTierDelete: PropTypes.func.isRequired
};
const Subnets = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "VPC Subnets",
    innerForm: SubnetsPage,
    arrayData: props.vpcs,
    docs: props.docs,
    onSubmit: none$1,
    onDelete: none$1,
    onSave: none$1,
    disableSave: none$1,
    propsMatchState: none$1,
    forceOpen: props.forceOpen,
    hideFormTitleButton: true,
    innerFormProps: {
      craig: props.craig,
      onSubnetSubmit: props.onSubnetSubmit,
      subnetTiers: props.subnetTiers,
      dynamicSubnets: props.dynamicSubnets,
      subnetListCallback: props.subnetListCallback,
      propsMatchState: props.propsMatchState,
      disableSave: props.disableSave,
      invalidSubnetTierText: props.invalidSubnetTierText,
      invalidSubnetTierName: props.invalidSubnetTierName,
      invalidCidr: props.invalidCidr,
      invalidCidrText: props.invalidCidrText,
      invalidName: props.invalidName,
      invalidNameText: props.invalidNameText,
      getSubnetTierStateData: props.getSubnetTierStateData,
      getTierSubnets: props.getTierSubnets,
      onSubnetSave: props.onSubnetSave,
      onSubnetTierSave: props.onSubnetTierSave,
      onSubnetTierDelete: props.onSubnetTierDelete
    },
    toggleFormProps: {
      craig: props.craig,
      noDeleteButton: true,
      noSaveButton: true,
      hideName: true,
      submissionFieldName: "subnets",
      disableSave: none$1,
      propsMatchState: none$1,
      nullRef: true
    },
    overrideTile: props.craig.store.json.vpcs.length === 0 ? NoVpcTile() : null
  });
};
Subnets.propTypes = {
  vpcs: PropTypes.array.isRequired,
  docs: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  onSubnetSubmit: PropTypes.func.isRequired,
  subnetTiers: PropTypes.shape({}).isRequired,
  dynamicSubnets: PropTypes.bool,
  subnetListCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidSubnetTierText: PropTypes.func.isRequired,
  invalidSubnetTierName: PropTypes.func.isRequired,
  invalidCidr: PropTypes.func.isRequired,
  invalidCidrText: PropTypes.func.isRequired,
  invalidName: PropTypes.func.isRequired,
  invalidNameText: PropTypes.func.isRequired,
  getSubnetTierStateData: PropTypes.func.isRequired,
  getTierSubnets: PropTypes.func.isRequired,
  onSubnetSave: PropTypes.func.isRequired,
  onSubnetTierSave: PropTypes.func.isRequired,
  onSubnetTierDelete: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

class PowerVsNetworkForm extends Component {
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
  handleInputChange(event) {
    if (event.target.name === "pi_dns") {
      this.setState({
        pi_dns: [event.target.value]
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-power-nw-name",
      componentName: this.props.data.name + "-power-nw-name",
      placeholder: "my-network-name",
      value: this.state.name || "",
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidNetworkNameCallback(this.state, this.props),
      invalidText: this.props.invalidNetworkNameCallbackText(this.state, this.props),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-power-nw",
      groups: ["vlan", "pub-vlan"],
      value: this.state.pi_network_type,
      labelText: "Network Type",
      name: "pi_network_type",
      handleInputChange: this.handleInputChange,
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-power-nw-cidr",
      componentName: this.props.data.name + "-power-nw-cidr",
      name: "client_ip_pool",
      field: "pi_cidr",
      value: this.state.pi_cidr,
      placeholder: "x.x.x.x/x",
      labelText: "Network CIDR Block",
      invalid: this.props.invalidCidrCallback(this.state, this.props),
      invalidText: this.props.invalidCidrCallbackText(this.state, this.props),
      onChange: this.handleInputChange,
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-power-nw-dns",
      componentName: this.props.data.name + "-power-nw-dns",
      field: "pi_dns",
      value: this.state.pi_dns[0],
      placeholder: "127.0.0.1",
      labelText: "DNS Server IP",
      invalid: this.props.invalidDnsCallback(this.state, this.props),
      invalidText: this.props.invalidDnsCallbackText(this.state, this.props),
      onChange: this.handleInputChange,
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-power-nw-jumbo",
      defaultToggled: this.state.pi_network_jumbo,
      labelText: "MTU Jumbo",
      onToggle: () => this.handleToggle("pi_network_jumbo"),
      className: "fieldWidth"
    })));
  }
}
PowerVsNetworkForm.defaultProps = {
  data: {
    name: "",
    pi_network_type: "vlan",
    pi_cidr: "",
    pi_dns: [""],
    pi_network_jumbo: false
  },
  isModal: false
};
PowerVsNetworkForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pi_network_type: PropTypes.string.isRequired,
    pi_cidr: PropTypes.string.isRequired,
    pi_dns: PropTypes.arrayOf(PropTypes.string).isRequired,
    pi_network_jumbo: PropTypes.bool.isRequired
  }),
  isModal: PropTypes.bool.isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired
};

class PowerVsCloudConnectionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle multiselect change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cloud-connect-name",
      componentName: this.props.data.name + "-cloud-connect-name",
      value: this.state.name || "",
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: this.props.data.name + "-cloud-connect-speed",
      groups: ["50", "100", "200", "500", "1000", "2000", "5000", "10000"],
      value: this.state.pi_cloud_connection_speed,
      labelText: "Connection Speed",
      name: "pi_cloud_connection_speed",
      handleInputChange: this.handleInputChange,
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-cloud-connect-global-routing",
      defaultToggled: this.state.pi_cloud_connection_global_routing,
      labelText: "Enable Global Routing",
      onToggle: () => this.handleToggle("pi_cloud_connection_global_routing"),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-cloud-connect-metered",
      defaultToggled: this.state.pi_cloud_connection_metered,
      labelText: "Enable Metered Connection",
      onToggle: () => this.handleToggle("pi_cloud_connection_metered"),
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-cloud-connect-transit-enabled",
      defaultToggled: this.state.pi_cloud_connection_transit_enabled,
      labelText: "Enable Transit Gateway",
      onToggle: () => this.handleToggle("pi_cloud_connection_transit_enabled"),
      className: "fieldWidth"
    }), this.state.pi_cloud_connection_transit_enabled && /*#__PURE__*/React.createElement(IcseMultiSelect, {
      className: "fieldWidth",
      id: this.props.data.name + "-cloud-connect-transit-gw",
      titleText: "Transit Gateways",
      items: this.props.transitGatewayList,
      onChange: value => {
        this.handleMultiSelectChange("transit_gateways", value.selectedItems);
      },
      initialSelectedItems: this.state.transit_gateways,
      invalid: this.state.transit_gateways.length === 0,
      invalidText: "Select at least one transit gateway"
    })));
  }
}
PowerVsCloudConnectionForm.defaultProps = {
  data: {
    name: "",
    pi_cloud_connection_speed: null,
    //[50, 100, 200, 500, 1000, 2000, 5000, 10000],
    pi_cloud_connection_global_routing: false,
    pi_cloud_connection_metered: false,
    pi_cloud_connection_transit_enabled: false,
    transit_gateways: []
  },
  isModal: false,
  transitGatewayList: []
};
PowerVsCloudConnectionForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pi_cloud_connection_speed: PropTypes.string,
    pi_cloud_connection_global_routing: PropTypes.bool.isRequired,
    pi_cloud_connection_metered: PropTypes.bool.isRequired,
    pi_cloud_connection_transit_enabled: PropTypes.bool.isRequired,
    transit_gateways: PropTypes.arrayOf(PropTypes.string)
  }),
  isModal: PropTypes.bool.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

class PowerVsNetworkAttachmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormFunctions(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  }
  handleMultiSelectChange(event) {
    this.setState({
      connections: event.selectedItems
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseMultiSelect, {
      titleText: "Connections",
      className: "fieldWidth",
      id: this.props.data.network + "-power-connections",
      items: this.props.cloud_connections,
      initialSelectedItems: this.state.connections,
      onChange: this.handleMultiSelectChange
    }));
  }
}
PowerVsNetworkAttachmentForm.propTypes = {
  data: PropTypes.shape({
    connections: PropTypes.arrayOf(PropTypes.string).isRequired,
    network: PropTypes.string.isRequired
  }),
  // not required as not abailable on load
  cloud_connections: PropTypes.arrayOf(PropTypes.string.isRequired)
};

var css_248z$1 = ".network-div {\n  margin-top: 1.75rem;\n}\n\n.network-icon {\n  margin-right: 1rem;\n  margin-top: 0.3rem;\n}\n\n.powerIpMargin {\n  margin-top: 24px;\n}\n";
styleInject(css_248z$1);

class PowerVsWorkspaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.forceUpdateOnPropsChange = this.forceUpdateOnPropsChange.bind(this);
  }
  handleInputChange(event) {
    if (event.target.name === "zone") {
      this.setState({
        zone: event.target.value,
        imageNames: []
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }
  handleMultiSelectChange(items) {
    this.setState({
      imageNames: items
    });
  }
  forceUpdateOnPropsChange(prevProps) {
    // force component to update when images change
    if (!deepEqual(prevProps.data.imageNames, this.props.data.imageNames)) {
      this.setState({
        ...this.props.data
      });
    }
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + "-name",
      labelText: "Workspace Name",
      componentName: this.state.name + "-power-vs-workspace",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Resource Group",
      name: "resource_group",
      formName: this.state.name + "-power-vs-workspace-resource-group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Availability Zone",
      name: "zone",
      formName: this.state.name + "-power-vs-workspace-zone",
      groups: this.props.zones,
      value: this.state.zone,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Zone.",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseMultiSelect, {
      key: this.state.zone,
      titleText: "Import Images",
      className: "fieldWidth",
      items: isNullOrEmptyString$6(this.state.zone) ? [] : this.getImageList(),
      id: this.props.data.name + "-images",
      initialSelectedItems: this.state.imageNames,
      onChange: event => this.handleMultiSelectChange(event.selectedItems),
      invalid: isEmpty(this.state.imageNames || []),
      invalidText: "Select at least one Image"
    })), this.props.isModal ? "" : /*#__PURE__*/React.createElement(SshKeys, {
      isModal: this.props.isModal,
      ssh_keys: this.props.data.ssh_keys,
      disableSave: this.props.disableSave,
      onDelete: this.props.onSshKeyDelete,
      onSave: this.props.onSshKeySave,
      onSubmit: this.props.onSshKeySubmit,
      propsMatchState: this.props.propsMatchState,
      forceOpen: this.props.forceOpen,
      resourceGroups: this.props.resourceGroups,
      invalidCallback: this.props.invalidSshKeyCallback,
      invalidTextCallback: this.props.invalidSshKeyCallbackText,
      craig: this.props.craig,
      deleteDisabled: this.props.sshKeyDeleteDisabled,
      invalidKeyCallback: this.props.invalidKeyCallback,
      powerVs: true,
      arrayParentName: this.props.data.name
    }), /*#__PURE__*/React.createElement(PowerVsNetwork, {
      isModal: this.props.isModal,
      networks: this.props.data.network,
      disableSave: this.props.disableSave,
      propsMatchState: this.props.propsMatchState,
      onNetworkDelete: this.props.onNetworkDelete,
      onNetworkSave: this.props.onNetworkSave,
      onNetworkSubmit: this.props.onNetworkSubmit,
      craig: this.props.craig,
      invalidNetworkNameCallback: this.props.invalidNetworkNameCallback,
      invalidNetworkNameCallbackText: this.props.invalidNetworkNameCallbackText,
      invalidCidrCallback: this.props.invalidCidrCallback,
      invalidCidrCallbackText: this.props.invalidCidrCallbackText,
      invalidDnsCallback: this.props.invalidDnsCallback,
      invalidDnsCallbackText: this.props.invalidDnsCallbackText,
      workspace: this.props.data.name
    }), contains$5(this.props.edgeRouterEnabledZones, this.state.zone) ? /*#__PURE__*/React.createElement(Tile, {
      className: "tileBackground displayFlex alignItemsCenter wrap marginTop"
    }, /*#__PURE__*/React.createElement(CloudAlerting, {
      size: "24",
      className: "iconMargin"
    }), " Cloud Connections cannot be created in zones where the Power Edge Router (PER) is enabled. Connect this workspace to VPC networks from the", /*#__PURE__*/React.createElement("a", {
      className: "no-vpc-link",
      href: "/form/transitGateways"
    }, "Transit Gateways Page.")) : /*#__PURE__*/React.createElement(PowerVsCloudConnections, {
      cloud_connections: this.props.data.cloud_connections,
      isModal: this.props.isModal,
      disableSave: this.props.disableSave,
      propsMatchState: this.props.propsMatchState,
      onConnectionDelete: this.props.onConnectionDelete,
      onConnectionSave: this.props.onConnectionSave,
      onConnectionSubmit: this.props.onConnectionSubmit,
      invalidConnectionNameCallback: this.props.invalidConnectionNameCallback,
      invalidConnectionNameTextCallback: this.props.invalidConnectionNameTextCallback,
      transitGatewayList: this.props.transitGatewayList,
      workspace: this.props.data.name,
      craig: this.props.craig
    }), this.props.isModal || this.props.data.network.length === 0 || this.props.data.cloud_connections.length === 0 || contains$5(this.props.edgeRouterEnabledZones, this.state.zone) ? "" : /*#__PURE__*/React.createElement(PowerVsNetworkAttachment$1, {
      attachments: this.props.data.attachments,
      disableSave: this.props.disableSave,
      propsMatchState: this.props.propsMatchState,
      onAttachmentSave: this.props.onAttachmentSave,
      cloud_connections: splat$2(this.props.data.cloud_connections, "name"),
      workspace: this.props.data.name,
      craig: this.props.craig
    }));
  }
}
PowerVsWorkspaceForm.propTypes = {
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  zones: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    zone: PropTypes.string,
    imageNames: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onSshKeyDelete: PropTypes.func.isRequired,
  onSshKeySave: PropTypes.func.isRequired,
  onSshKeySubmit: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  invalidSshKeyCallback: PropTypes.func.isRequired,
  invalidSshKeyCallbackText: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  sshKeyDeleteDisabled: PropTypes.func.isRequired,
  imageMap: PropTypes.shape({}).isRequired,
  edgeRouterEnabledZones: PropTypes.arrayOf(PropTypes.string).isRequired
};
PowerVsWorkspaceForm.defaultProps = {
  edgeRouterEnabledZones: ["dal10"],
  isModal: false,
  data: {
    name: "",
    resource_group: "",
    zone: "",
    ssh_keys: [],
    network: [],
    cloud_connections: [],
    images: [],
    attachments: []
  },
  imageMap: {},
  sshKeyDeleteDisabled: () => {
    return false;
  }
};

const PowerVsAffinity = props => {
  let volumeTypeFieldName = props.isVolume ? "pi_volume_type" : "pi_storage_type";
  return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
    labelText: "Storage Option",
    name: "storage_option",
    formName: props.data.name + "-power-instance-status",
    groups: ["Storage Type", "Storage Pool"].concat(!props.stateData.pi_health_status || props.stateData.pi_health_status === "OK" ? ["Affinity", "Anti-Affinity"] : []),
    value: props.stateData.storage_option,
    handleInputChange: props.handleInputChange,
    invalidText: "Select a Storage Option.",
    className: "fieldWidthSmaller",
    id: `${props.data.name}-power-storage-option`,
    disabled: props.affinityChangesDisabled(props.stateData, props.componentProps)
  }), props.stateData.storage_option === "Storage Type" && /*#__PURE__*/React.createElement(IcseSelect, {
    labelText: "Storage Type",
    name: volumeTypeFieldName,
    formName: props.data.name + "-power-instance-stortype",
    groups: ["Tier-1", "Tier-3"],
    value: isNullOrEmptyString$6(props.stateData[volumeTypeFieldName]) ? "" : capitalize$2(props.stateData[volumeTypeFieldName].split(/(?=\d)/).join("-")),
    handleInputChange: props.handleInputChange,
    invalidText: "Select a Storage Type.",
    className: "fieldWidthSmaller",
    id: `${props.data.name}-power-instance-stortype`,
    disabled: props.affinityChangesDisabled(props.stateData, props.componentProps)
  }), props.stateData.storage_option === "Storage Pool" && /*#__PURE__*/React.createElement(IcseSelect, {
    key: props.stateData.zone,
    labelText: "Storage Pool",
    name: props.isVolume ? "pi_volume_pool" : "pi_storage_pool",
    formName: props.data.name + "-power-instance-storpool",
    groups: props.storage_pool_map[props.stateData.zone],
    value: isNullOrEmptyString$6(props.stateData.pi_storage_pool) ? "" : props.stateData.pi_storage_pool,
    handleInputChange: props.handleInputChange,
    invalidText: "Select a Storage Pool.",
    className: "fieldWidthSmaller",
    id: `${props.data.name}-power-instance-storpool`,
    disabled: props.affinityChangesDisabled(props.stateData, props.componentProps)
  }), contains$5(["Affinity", "Anti-Affinity"], props.stateData.storage_option) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseSelect, {
    labelText: "Affinity Type",
    name: "affinity_type",
    formName: props.data.name + "-power-instance-affinity-type",
    groups: ["Instance", "Volume"],
    value: isNullOrEmptyString$6(props.stateData.affinity_type) ? "" : props.stateData.affinity_type,
    handleInputChange: props.handleInputChange,
    invalidText: "Select Instance or Volume for boot volume affinity",
    className: "fieldWidthSmaller",
    id: `${props.data.name}-power-affinity-type`,
    disabled: props.affinityChangesDisabled(props.stateData, props.componentProps)
  }), props.stateData.affinity_type && /*#__PURE__*/React.createElement(IcseSelect, {
    groups: props.stateData.affinity_type === "Instance" ? splat$2(props.power_instances.filter(props.instanceFilter), "name") : splat$2(props.power_volumes.filter(props.volumeFilter), "name"),
    formName: props.data.name + "-power-affinity-source",
    labelText: `${props.stateData.storage_option === "Anti-Affinity" ? "Anti-" : ""}Affinity ${props.stateData.affinity_type}`,
    name: snakeCase$2(`pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`),
    handleInputChange: props.handleInputChange,
    invalidText: `Select an ${props.stateData.affinity_type.toLowerCase()} ${props.stateData.affinity_type.toLowerCase()}.`,
    id: `${props.data.name}-power-affinity-source`,
    value: isNullOrEmptyString$6(props.stateData[snakeCase$2(`pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`)]) ? "" : props.stateData[snakeCase$2(`pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`)],
    className: "fieldWidthSmaller",
    disabled: props.affinityChangesDisabled(props.stateData, props.componentProps)
  })));
};
PowerVsAffinity.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  stateData: PropTypes.shape({
    pi_health_status: PropTypes.string,
    storage_option: PropTypes.string,
    zone: PropTypes.string.isRequired,
    pi_storage_pool: PropTypes.string,
    storage_option: PropTypes.string,
    affinity_type: PropTypes.string
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  affinityChangesDisabled: PropTypes.func.isRequired,
  componentProps: PropTypes.shape({}).isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  instanceFilter: PropTypes.func.isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  volumeFilter: PropTypes.func.isRequired
};

class PowerVsInstanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!this.state.storage_option) {
      this.state.storage_option = "Storage Type";
      this.state.affinity_type = null;
      this.state.pi_storage_pool_affinity = true;
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleIpAddressChange = this.handleIpAddressChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.instanceFilter = this.instanceFilter.bind(this);
    this.volumeFilter = this.volumeFilter.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }
  handleToggle() {
    this.setState(this.toggleStateBoolean("pi_storage_pool_affinity", this.state));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (name === "workspace") {
      let zone = getObjectFromArray$1(this.props.power, "name", value).zone;
      this.setState({
        workspace: value,
        zone: zone,
        image: "",
        ssh_key: "",
        network: [],
        pi_affinity_volume: null,
        pi_anti_affinity_instance: null,
        pi_anti_affinity_volume: null,
        pi_anti_affinity_instance: null
      });
    } else if (contains$5(["pi_proc_type", "pi_storage_type"], name)) {
      this.setState({
        [name]: value.toLowerCase().replace(/-/g, "")
      });
    } else if (name === "pi_health_status") {
      this.setState({
        [name]: value.toUpperCase()
      }, () => {
        // if status is set to warning, disable affinity
        if (this.state.pi_health_status === "WARNING" && !contains$5(["Storage Type", "Storage Pool"], this.state.storage_option)) {
          this.setState({
            storage_option: null,
            affinity_type: null,
            pi_affinity_policy: null,
            pi_affinity_volume: null,
            pi_anti_affinity_instance: null,
            pi_anti_affinity_volume: null,
            pi_anti_affinity_instance: null
          });
        }
      });
    } else if (name === "storage_option") {
      let nextState = {
        ...this.state
      };
      if (value !== "Storage Type") {
        nextState.pi_storage_type = null;
      }
      if (value !== "Storage Pool") {
        nextState.pi_storage_pool = null;
      }
      if (value !== "Affinity") {
        nextState.pi_affinity_policy = null;
        nextState.pi_affinity_volume = null;
        nextState.pi_affinity_instance = null;
      }
      if (value !== "Anti-Affinity") {
        nextState.pi_anti_affinity_volume = null;
        nextState.pi_anti_affinity_instance = null;
      }
      if (contains$5(["Affinity", "Anti-Affinity"], value)) {
        nextState.pi_affinity_policy = value.toLowerCase();
      } else {
        nextState.pi_affinity_policy = null;
      }
      nextState[name] = value;
      this.setState(nextState);
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle network change
   * @param {*} event
   */
  handleMultiSelectChange(event) {
    let newItems = [];
    let oldItems = [...this.state.network];
    oldItems.forEach(item => {
      if (contains$5(event.selectedItems, item.name)) {
        newItems.push(item);
      }
    });
    event.selectedItems.forEach(item => {
      if (!splatContains(newItems, "name", item)) {
        newItems.push({
          name: item,
          ip_address: ""
        });
      }
    });
    this.setState({
      network: newItems
    });
  }
  handleIpAddressChange(index, ip) {
    let nw = [...this.state.network];
    let item = {
      ...nw[index]
    };
    item.ip_address = ip;
    nw[index] = item;
    this.setState({
      network: nw
    });
  }
  instanceFilter(instance) {
    if (instance.name !== this.props.data.name && (!instance.pi_affinity_policy || isNullOrEmptyString$6(instance.pi_affinity_policy)) && (!instance.pi_anti_affinity_policy || isNullOrEmptyString$6(instance.pi_anti_affinity_policy)) && instance.zone === this.state.zone && instance.workspace === this.state.workspace) {
      return instance;
    }
  }
  volumeFilter(volume) {
    if ((!volume.pi_affinity_policy || isNullOrEmptyString$6(volume.pi_affinity_policy)) && (!volume.pi_anti_affinity_policy || isNullOrEmptyString$6(volume.pi_anti_affinity_policy)) && volume.zone === this.state.zone && volume.workspace === this.state.workspace) return volume;
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-power-vs-name",
      componentName: this.props.data.name + "-power-vs-name",
      placeholder: "my-powe-vs-instance-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Workspace",
      name: "workspace",
      formName: this.props.data.name + "-power-instance-workspace",
      groups: splat$2(this.props.power, "name"),
      value: this.state.workspace,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Workspace.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-workspace`
    }), /*#__PURE__*/React.createElement(IcseMultiSelect, {
      key: this.state.workspace,
      titleText: "Network Interfaces",
      className: "fieldWidthSmaller",
      id: this.props.data.network + "-power-instance-network",
      items: isNullOrEmptyString$6(this.state.workspace) ? [] : this.getPowerNetworkList(),
      initialSelectedItems: splat$2(this.state.network, "name"),
      onChange: this.handleMultiSelectChange,
      invalid: this.state.network.length === 0,
      invalidText: "Select at lease one Network Interface"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "SSH Key",
      name: "ssh_key",
      formName: this.props.data.name + "-power-instance-key",
      groups: isNullOrEmptyString$6(this.state.workspace) ? [] : this.getPowerSshKeyList(),
      value: this.state.ssh_key,
      handleInputChange: this.handleInputChange,
      invalidText: "Select an SSH Key.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-key`
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Image",
      name: "image",
      formName: this.props.data.name + "-power-instance-image",
      groups: isNullOrEmptyString$6(this.state.workspace) ? [] : this.getPowerImageList(),
      value: this.state.image,
      handleInputChange: this.handleInputChange,
      invalidText: "Select an Image.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-image`
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "System Type",
      name: "pi_sys_type",
      formName: this.props.data.name + "-power-instance-systype",
      groups: ["e880", "e980", "s922", "s1022"],
      value: this.state.pi_sys_type,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a System Type.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-systype`
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Processor Type",
      name: "pi_proc_type",
      formName: this.props.data.name + "-power-instance-proctype",
      groups: ["Shared", "Capped", "Dedicated"],
      value: capitalize$2(this.state.pi_proc_type),
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Processor Type.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-proctype`
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "power-instance" + this.state.name + "processors",
      labelText: "Processors",
      onChange: this.handleInputChange,
      field: "pi_processors",
      invalid: this.props.invalidPiProcessorsCallback(this.state, this.props),
      invalidText: this.props.invalidPiProcessorsTextCallback(this.state, this.props),
      value: this.state.pi_processors,
      className: "fieldWidthSmaller",
      placeholder: "0.25"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "power-instance" + this.state.name + "memory",
      labelText: "Memory (GB)",
      onChange: this.handleInputChange,
      field: "pi_memory",
      invalid: this.props.invalidPiMemoryCallback(this.state, this.props),
      invalidText: this.props.invalidPiMemoryTextCallback(this.state, this.props),
      value: this.state.pi_memory,
      className: "fieldWidthSmaller",
      placeholder: "1024"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Health Status",
      name: "pi_health_status",
      formName: this.props.data.name + "-power-instance-status",
      groups: ["Ok", "Warning"],
      value: capitalize$2(this.state.pi_health_status.toLowerCase()),
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Health Status.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-instance-status`,
      disabled: this.props.storageChangesDisabledCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        align: "bottom-left",
        alignModal: "right",
        content: "To attach data volumes from different storage pools, set to false. When this is set to false it cannot be set to true without re-creation of instance."
      },
      id: this.props.data.name + "pi_storage_pool_affinity",
      labelText: "Enable Storage Pool Affinity",
      toggleFieldName: "pi_storage_pool_affinity",
      defaultToggled: this.state.pi_storage_pool_affinity,
      onToggle: this.handleToggle,
      className: "fieldWidthSmaller",
      disabled: this.props.storageChangesDisabledCallback(this.state, this.props)
    })), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Boot Volume",
      type: "subHeading"
    }), /*#__PURE__*/React.createElement(PowerVsAffinity, {
      data: this.props.data,
      stateData: this.state,
      componentProps: this.props,
      handleInputChange: this.handleInputChange,
      affinityChangesDisabled: this.props.storageChangesDisabledCallback,
      storage_pool_map: this.props.storage_pool_map,
      power_instances: this.props.power_instances,
      power_volumes: this.props.power_volumes,
      instanceFilter: this.instanceFilter,
      volumeFilter: this.volumeFilter
    }), /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Interface IP Addresses",
      type: "subHeading"
    }), /*#__PURE__*/React.createElement("div", {
      className: "formInSubForm"
    }, this.state.network.length === 0 ? "No Network Interfaces Selected" : this.state.network.map((nw, index) => /*#__PURE__*/React.createElement(IcseFormGroup, {
      key: nw.name + "-group",
      className: "alignItemsCenter marginBottomSmall"
    }, /*#__PURE__*/React.createElement(Network_3, {
      className: "powerIpMargin"
    }), /*#__PURE__*/React.createElement("div", {
      className: "powerIpMargin fieldWidth"
    }, /*#__PURE__*/React.createElement("p", null, nw.name)), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: "power-instance" + this.state.name + "ip",
      onChange: event => {
        this.handleIpAddressChange(index, event.target.value);
      },
      field: "ip_address",
      invalidCallback: () => this.props.invalidIpCallback(nw.ip_address),
      invalidTextCallback: () => {
        return "Invalid IP Address";
      },
      value: nw.ip_address
    })))));
  }
}
PowerVsInstanceForm.defaultProps = {
  data: {
    name: "",
    workspace: "",
    image: "",
    network: [],
    zone: "",
    pi_health_status: "OK",
    pi_proc_type: "shared",
    pi_storage_type: "",
    storage_option: "Storage Type",
    pi_storage_pool_affinity: false
  }
};
PowerVsInstanceForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidIpCallback: PropTypes.func.isRequired,
  invalidPiProcessorsCallback: PropTypes.func.isRequired,
  invalidPiProcessorsTextCallback: PropTypes.func.isRequired,
  invalidPiMemoryCallback: PropTypes.func.isRequired,
  invalidPiMemoryTextCallback: PropTypes.func.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // changes should be disabled when another instance or volume uses this
  // instance for affinity
  storageChangesDisabledCallback: PropTypes.func.isRequired
};

class PowerVsVolumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (!this.state.storage_option) {
      this.state.storage_option = "Storage Type";
      this.state.affinity_type = null;
    }
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInstanceSelect = this.handleInstanceSelect.bind(this);
    this.instanceFilter = this.instanceFilter.bind(this);
    this.volumeFilter = this.volumeFilter.bind(this);
  }
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (name === "workspace") {
      let zone = getObjectFromArray$1(this.props.power, "name", value).zone;
      this.setState({
        workspace: value,
        zone: zone,
        attachments: []
      });
    } else if (contains$5(["pi_volume_type"], name)) {
      this.setState({
        [name]: value.toLowerCase().replace(/-/g, ""),
        attachments: []
      });
    } else if (name === "storage_option") {
      let nextState = {
        ...this.state
      };
      if (value !== "Storage Type") {
        nextState.pi_volume_type = null;
      }
      if (value !== "Storage Pool") {
        nextState.pi_storage_pool = null;
      }
      if (value !== "Affinity") {
        nextState.pi_affinity_policy = null;
        nextState.pi_affinity_volume = null;
        nextState.pi_affinity_instance = null;
      }
      if (value !== "Anti-Affinity") {
        nextState.pi_anti_affinity_volume = null;
        nextState.pi_anti_affinity_instance = null;
      }
      if (contains$5(["Affinity", "Anti-Affinity"], value)) {
        nextState.pi_affinity_policy = value.toLowerCase();
      } else {
        nextState.pi_affinity_policy = null;
      }
      nextState[name] = value;
      this.setState(nextState);
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    if (name === "pi_volume_shareable") {
      this.setState({
        pi_volume_shareable: !this.state.pi_volume_shareable,
        attachments: []
      });
    }
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  handleInstanceSelect(instances) {
    this.setState({
      attachments: instances
    });
  }
  instanceFilter(instance) {
    if ((!instance.pi_affinity_policy || isNullOrEmptyString$6(instance.pi_affinity_policy)) && (!instance.pi_anti_affinity_policy || isNullOrEmptyString$6(instance.pi_anti_affinity_policy)) && instance.zone === this.state.zone && instance.workspace === this.state.workspace) {
      return instance;
    }
  }
  volumeFilter(volume) {
    if ((!volume.pi_affinity_policy || isNullOrEmptyString$6(volume.pi_affinity_policy)) && (!volume.pi_anti_affinity_policy || isNullOrEmptyString$6(volume.pi_anti_affinity_policy)) && volume.zone === this.state.zone && volume.workspace === this.state.workspace && volume.name !== this.props.data.name) return volume;
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-power-volume-name",
      componentName: this.props.data.name + "-power-volume-name",
      placeholder: "my-power-volume-instance-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Workspace",
      name: "workspace",
      formName: this.props.data.name + "-power-volume-workspace",
      groups: splat$2(this.props.power, "name"),
      value: this.state.workspace,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Workspace.",
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-volume-workspace`
    }), /*#__PURE__*/React.createElement(NumberInput, {
      id: this.props.data.name + "power-volume-capacity",
      name: "pi_volume_size",
      label: "Capacity (GB)",
      value: this.state.pi_volume_size ? parseInt(isNullOrEmptyString$6(this.state.pi_volume_size) ? 0 : this.state.pi_volume_size) : "",
      onChange: this.handleInputChange,
      allowEmpty: true,
      step: 1,
      hideSteppers: true,
      placeholder: "1",
      min: 1,
      max: 2000,
      invalid: iamUtils_3(this.state.pi_volume_size, 1, 2000),
      invalidText: "Must be a whole number between 1 and 2000",
      className: "fieldWidthSmaller leftTextAlign"
    })), /*#__PURE__*/React.createElement(PowerVsAffinity, {
      data: this.props.data,
      stateData: this.state,
      componentProps: this.props,
      handleInputChange: this.handleInputChange,
      affinityChangesDisabled: this.props.affinityChangesDisabled,
      storage_pool_map: this.props.storage_pool_map,
      power_instances: this.props.power_instances,
      power_volumes: this.props.power_volumes,
      instanceFilter: this.instanceFilter,
      volumeFilter: this.volumeFilter,
      isVolume: true
    }), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      id: this.props.data.name + "-power-volume-replication",
      labelText: "Enable Volume Replication",
      toggleFieldName: "pi_replication_enabled",
      defaultToggled: this.state.pi_replication_enabled,
      onToggle: this.handleToggle,
      isModal: this.props.isModal,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Enable sharing between multiple instances",
        align: "bottom-left",
        alignModal: "right"
      },
      id: this.props.data.name + "-power-volume-sharable",
      labelText: "Enable Volume Sharing",
      toggleFieldName: "pi_volume_shareable",
      defaultToggled: this.state.pi_volume_shareable,
      onToggle: this.handleToggle,
      isModal: this.props.isModal,
      className: "fieldWidthSmaller"
    }), this.state.pi_volume_shareable ? /*#__PURE__*/React.createElement(IcseMultiSelect, {
      key: JSON.stringify(this.state.attachments) // force rerender on type change
      ,
      titleText: "Attached Instances",
      items: this.getPowerInstances(),
      id: this.props.data.name + "-power-volume",
      initialSelectedItems: this.state.attachments,
      onChange: event => this.handleInstanceSelect(event.selectedItems),
      className: "fieldWidthSmaller"
    }) : /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Attached Instance",
      name: "attachments",
      formName: this.props.data.name + "-power-volume-instance",
      groups: this.getPowerInstances(),
      value: isEmpty(this.state.attachments) ? "" : this.state.attachments[0],
      handleInputChange: event => this.handleInstanceSelect([event.target.value]),
      disableInvalid: true,
      className: "fieldWidthSmaller",
      id: `${this.props.data.name}-power-volume-instance`
    })));
  }
}
PowerVsVolumeForm.defaultProps = {
  data: {
    name: "",
    workspace: "",
    pi_volume_shareable: false,
    pi_replication_enabled: false,
    pi_volume_type: "",
    attachments: []
  },
  isModal: false
};
PowerVsVolumeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    workspace: PropTypes.string,
    pi_volume_shareable: PropTypes.bool,
    pi_replication_enabled: PropTypes.bool,
    pi_volume_type: PropTypes.string
  }),
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // changes should be disabled when another instance or volume uses this
  // instance for affinity
  affinityChangesDisabled: PropTypes.func.isRequired
};

const PowerVsNetwork = props => {
  return props.isModal ? "" : /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Network Interfaces",
    subHeading: true,
    addText: "Create a Network Interface",
    arrayData: props.networks,
    innerForm: PowerVsNetworkForm,
    disableSave: props.disableSave,
    propsMatchState: props.propsMatchState,
    onDelete: props.onNetworkDelete,
    onSave: props.onNetworkSave,
    onSubmit: props.onNetworkSubmit,
    innerFormProps: {
      craig: props.craig,
      isModal: props.isModal,
      invalidNetworkNameCallback: props.invalidNetworkNameCallback,
      invalidNetworkNameCallbackText: props.invalidNetworkNameCallbackText,
      invalidCidrCallback: props.invalidCidrCallback,
      invalidCidrCallbackText: props.invalidCidrCallbackText,
      invalidDnsCallback: props.invalidDnsCallback,
      invalidDnsCallbackText: props.invalidDnsCallbackText,
      arrayParentName: props.workspace
    },
    hideAbout: true,
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "network",
      disableSave: props.disableSave,
      type: "formInSubForm"
    }
  });
};
PowerVsNetwork.defaultProps = {
  isModal: false
};
PowerVsNetwork.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  workspace: PropTypes.string.isRequired
};

const PowerVsCloudConnections = props => {
  return props.isModal ? "" : /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Cloud Connections",
    subHeading: true,
    addText: "Create a Cloud Connection",
    arrayData: props.cloud_connections,
    innerForm: PowerVsCloudConnectionForm,
    disableSave: props.disableSave,
    propsMatchState: props.propsMatchState,
    onDelete: props.onConnectionDelete,
    onSave: props.onConnectionSave,
    onSubmit: props.onConnectionSubmit,
    innerFormProps: {
      craig: props.craig,
      isModal: props.isModal,
      invalidCallback: props.invalidConnectionNameCallback,
      invalidTextCallback: props.invalidConnectionNameTextCallback,
      arrayParentName: props.workspace,
      transitGatewayList: props.transitGatewayList
    },
    hideAbout: true,
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "cloud_connections",
      disableSave: props.disableSave,
      type: "formInSubForm"
    }
  });
};
PowerVsCloudConnections.defaultProps = {
  isModal: false
};
PowerVsCloudConnections.propTypes = {
  cloud_connections: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  isModal: PropTypes.bool.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
  workspace: PropTypes.string.isRequired
};

const PowerVsWorkspace = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Power VS Workspaces",
    addText: "Create a Workspace",
    innerForm: PowerVsWorkspaceForm,
    hideFormTitleButton: props.overrideTile ? true : false,
    overrideTile: props.overrideTile,
    arrayData: props.power,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    docs: props.docs,
    deleteDisabled: props.deleteDisabled,
    deleteDisabledMessage: "Cannot delete only power VS workspace when volumes or instances are provisioned.",
    innerFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      propsMatchState: props.propsMatchState,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      helperTextCallback: props.helperTextCallback,
      resourceGroups: props.resourceGroups,
      zones: props.zones,
      onNetworkDelete: props.onNetworkDelete,
      onNetworkSave: props.onNetworkSave,
      onNetworkSubmit: props.onNetworkSubmit,
      invalidNetworkNameCallback: props.invalidNetworkNameCallback,
      invalidNetworkNameCallbackText: props.invalidNetworkNameCallbackText,
      invalidCidrCallback: props.invalidCidrCallback,
      invalidCidrCallbackText: props.invalidCidrCallbackText,
      invalidDnsCallback: props.invalidDnsCallback,
      invalidDnsCallbackText: props.invalidDnsCallbackText,
      onConnectionDelete: props.onConnectionDelete,
      onConnectionSave: props.onConnectionSave,
      onConnectionSubmit: props.onConnectionSubmit,
      onAttachmentSave: props.onAttachmentSave,
      invalidConnectionNameCallback: props.invalidConnectionNameCallback,
      invalidConnectionNameTextCallback: props.invalidConnectionNameTextCallback,
      transitGatewayList: props.transitGatewayList,
      onSshKeyDelete: props.onSshKeyDelete,
      onSshKeySave: props.onSshKeySave,
      onSshKeySubmit: props.onSshKeySubmit,
      forceOpen: props.forceOpen,
      invalidSshKeyCallback: props.invalidSshKeyCallback,
      invalidSshKeyCallbackText: props.invalidSshKeyCallbackText,
      invalidKeyCallback: props.invalidKeyCallback,
      sshKeyDeleteDisabled: props.sshKeyDeleteDisabled,
      disableAttachmentSave: props.disableAttachmentSave,
      imageMap: props.imageMap,
      edgeRouterEnabledZones: props.edgeRouterEnabledZones
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "power",
      hideName: true
    }
  });
};
PowerVsWorkspace.defaultProps = {
  edgeRouterEnabledZones: ["dal10"]
};
PowerVsWorkspace.propTypes = {
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  docs: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  zones: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSshKeyDelete: PropTypes.func.isRequired,
  onSshKeySave: PropTypes.func.isRequired,
  onSshKeySubmit: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  invalidSshKeyCallback: PropTypes.func.isRequired,
  invalidSshKeyCallbackText: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  sshKeyDeleteDisabled: PropTypes.func.isRequired,
  disableAttachmentSave: PropTypes.func.isRequired,
  imageMap: PropTypes.shape({}).isRequired,
  edgeRouterEnabledZones: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteDisabled: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

class PowerVsNetworkAttachment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
  }
  handleToggle() {
    this.setState({
      hide: !this.state.hide
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Network Connections",
      subHeading: true,
      hideFormTitleButton: true,
      arrayData: this.props.attachments,
      innerForm: PowerVsNetworkAttachmentForm,
      disableSave: this.props.disableSave,
      propsMatchState: this.props.propsMatchState,
      onSubmit: () => {},
      onDelete: () => {},
      onSave: this.props.onAttachmentSave,
      toggleFormFieldName: "network",
      innerFormProps: {
        cloud_connections: this.props.cloud_connections,
        arrayParentName: this.props.workspace,
        craig: this.props.craig
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "attachments",
        disableSave: this.props.disableSave,
        type: "formInSubForm",
        noDeleteButton: true
      }
    });
  }
}
PowerVsNetworkAttachment.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  cloud_connections: PropTypes.arrayOf(PropTypes.string).isRequired,
  workspace: PropTypes.string.isRequired,
  craig: PropTypes.shape({}).isRequired
};
var PowerVsNetworkAttachment$1 = PowerVsNetworkAttachment;

const PowerVsInstances = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Power VS Instances",
    addText: "Create an Instance",
    docs: props.docs,
    arrayData: props.power_instances,
    innerForm: PowerVsInstanceForm,
    disableSave: props.disableSave,
    propsMatchState: props.propsMatchState,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    onDelete: props.onDelete,
    forceOpen: props.forceOpen,
    hideFormTitleButton: props.overrideTile ? true : false,
    overrideTile: props.overrideTile,
    innerFormProps: {
      craig: props.craig,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      power: props.power,
      invalidIpCallback: props.invalidIpCallback,
      invalidPiProcessorsCallback: props.invalidPiProcessorsCallback,
      invalidPiProcessorsTextCallback: props.invalidPiProcessorsTextCallback,
      invalidPiMemoryCallback: props.invalidPiMemoryCallback,
      invalidPiMemoryTextCallback: props.invalidPiMemoryTextCallback,
      storage_pool_map: props.storage_pool_map,
      power_instances: props.power_instances,
      power_volumes: props.power_volumes,
      storageChangesDisabledCallback: props.storageChangesDisabledCallback
    },
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "power_instances",
      disableSave: props.disableSave
    }
  });
};
PowerVsInstances.propTypes = {
  power_instances: PropTypes.arrayOf(PropTypes.shape).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidIpCallback: PropTypes.func.isRequired,
  invalidPiProcessorsCallback: PropTypes.func.isRequired,
  invalidPiProcessorsTextCallback: PropTypes.func.isRequired,
  invalidPiMemoryCallback: PropTypes.func.isRequired,
  invalidPiMemoryTextCallback: PropTypes.func.isRequired,
  docs: PropTypes.func.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  forceOpen: PropTypes.func.isRequired,
  storageChangesDisabledCallback: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

const PowerVsVolume = props => {
  return /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Power VS Storage Volumes",
    addText: "Create a Volume",
    arrayData: props.power_volumes,
    innerForm: PowerVsVolumeForm,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    forceOpen: props.forceOpen,
    docs: props.docs,
    hideFormTitleButton: props.overrideTile ? true : false,
    overrideTile: props.overrideTile,
    innerFormProps: {
      craig: props.craig,
      power: props.power,
      power_instances: props.power_instances,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback,
      power_volumes: props.power_volumes,
      storage_pool_map: props.storage_pool_map,
      affinityChangesDisabled: props.affinityChangesDisabled
    },
    toggleFormProps: {
      craig: props.craig,
      disableSave: props.disableSave,
      submissionFieldName: "power_volumes",
      hideName: true
    }
  });
};
PowerVsVolume.propTypes = {
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  docs: PropTypes.func,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  affinityChangesDisabled: PropTypes.func.isRequired,
  overrideTile: PropTypes.node
};

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
 * handle input change of number-only fields
 * @param {event} event
 */
function handleNumberInputChange(event) {
  let value = parseInt(event.target.value) || null;
  if (value || event.target.value === "") {
    return {
      [event.target.name]: value
    };
  } else {
    return null;
  }
}

/**
 * Handle input change for allowed ips text field
 * @param {event} event
 */
function handleAllowedIps(event) {
  let value = event.target.value.replace(/\s*/g, ""); // remove white space and check for empty value
  if (value === "") {
    value = null;
  }
  return {
    allowed_ip_addresses: value
  };
}

/**
 * Handle input change for a select
 * @param {event} event
 */
function handleSelectChange(event) {
  let {
    name,
    value
  } = event.target;
  return {
    [name]: iamItems[value].value
  };
}
var iam = {
  restrictMenuItems,
  mfaMenuItems,
  iamItems,
  handleNumberInputChange,
  handleAllowedIps,
  handleSelectChange
};
var iam_1 = iam.restrictMenuItems;
var iam_2 = iam.mfaMenuItems;
var iam_3 = iam.iamItems;
var iam_4 = iam.handleNumberInputChange;
var iam_5 = iam.handleAllowedIps;
var iam_6 = iam.handleSelectChange;

var css_248z = ".cds--date-picker-container {\n  width: 11rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.cds--date-picker.cds--date-picker--single .cds--date-picker__input {\n  width: 11rem;\n}\n";
styleInject(css_248z);

const labelColors = ["red", "magenta", "purple", "blue", "cyan", "teal", "green"];
class OpaqueIngressSecretForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLabels = this.handleLabels.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle text input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle toggle
   * @param {event} event
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle date
   * @param {event} event // event from DatePicker is an array with the selected date
   */
  handleDate(event) {
    this.setState({
      expiration_date: event[0]
    });
  }

  /**
   * handle input change of number-only fields
   * @param {event} event
   */
  handleNumberInputChange(event) {
    let value = iam_4(event);
    if (value !== null) {
      this.setState(value);
    }
  }

  /**
   * handle labels
   * @param {event} event
   */
  handleLabels(event) {
    let labelList = event.target.value ? event.target.value.replace(/\s\s+/g, "") // replace extra spaces
    .replace(/,(?=,)/g, "") // prevent null tags from
    .replace(/[^\w,-]/g, "").split(",") : [];
    this.setState({
      labels: labelList
    });
  }
  render() {
    let composedId = `opaque-ingress-secrets-from-${this.props.data.name}`;
    let tileClassName = this.props.isModal ? "formInSubForm" : "subForm";
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: composedId + "-name",
      component: "opaque_ingress_secrets",
      componentName: this.props.data.name,
      componentProps: this.props,
      value: this.state.name,
      onChange: this.handleInputChange,
      placeholder: "my-opaque-ingress-name",
      invalidCallback: () => this.props.secretCallback(this.state, this.props),
      invalidText: this.props.secretCallbackText(this.state, this.props),
      className: "fieldWidthSmaller",
      field: "name",
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-namespace",
      componentName: this.props.data.namespace,
      labelText: "Namespace",
      placeholder: "my-namespace",
      value: this.state.namespace,
      onChange: this.handleInputChange,
      invalid: lib_15("namespace", this.state.namespace, this.props.descriptionRegex).invalid,
      invalidText: lib_15("namespace", this.state.namespace, this.props.descriptionRegex).invalidText,
      className: "fieldWidthSmaller",
      field: "namespace"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "The persistence field ensures that if a user inadvertently deletes the secret from the cluster, it will be recreated.",
        alignModal: "bottom",
        align: "bottom"
      },
      labelText: "Persistence",
      defaultToggled: this.state.persistence,
      id: composedId + "-persistence-toggle",
      onToggle: () => this.handleToggle("persistence"),
      isModal: this.props.isModal,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Opaque Secrets Ingress Form",
      name: "secrets_manager",
      groups: this.props.secretsManagerList,
      value: this.state.secrets_manager,
      labelText: "Secrets Manager",
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      invalid: isNullOrEmptyString$6(this.state.secrets_manager),
      invalidText: "Invalid Selection"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-secrets-group",
      componentName: this.props.data.secrets_group,
      labelText: "Secrets Group",
      placeholder: "my-secrets-group",
      value: this.state.secrets_group,
      onChange: this.handleInputChange,
      field: "secrets_group",
      invalidCallback: () => this.props.secretsManagerGroupCallback(this.state, this.props, "secrets_group"),
      invalidText: this.props.secretsManagerGroupCallbackText(this.state, this.props, "secrets_group"),
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(DatePicker, {
      datePickerType: "single",
      dateFormat: "Y-m-d",
      value: this.state.expiration_date,
      onChange: this.handleDate
    }, /*#__PURE__*/React.createElement(DatePickerInput, {
      placeholder: "YYYY-MM-DD",
      labelText: "Expiration Date",
      id: composedId + "-expiration-date",
      invalid: !this.state.expiration_date,
      invalidText: "Select an expiration date"
    }))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      className: "wide",
      id: "labels",
      labelText: "Labels",
      placeholder: "hello,world",
      value: String(this.state.labels),
      onChange: this.handleLabels,
      invalid: this.props.labelsInvalid(this.state.labels),
      invalidText: "One or more labels are invalid",
      helperText: "Enter a comma separated list of tags"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Tile, {
      className: tileClassName + " widthOneHundredPercent"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement("strong", null, "Arbitrary Secret")), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-arb-secret-name",
      componentName: this.props.data.arbitrary_secret_name,
      labelText: "Name",
      placeholder: "my-secret-name",
      value: this.state.arbitrary_secret_name,
      onChange: this.handleInputChange,
      field: "arbitrary_secret_name",
      invalidCallback: () => this.props.secretCallback(this.state, this.props, "arbitrary_secret_name"),
      invalidText: this.props.secretCallbackText(this.state, this.props, "arbitrary_secret_name"),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-arb-secret-description",
      componentName: this.props.data.arbitrary_secret_description,
      labelText: "Description",
      placeholder: "my-secret-description",
      value: this.state.arbitrary_secret_description,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.descriptionInvalid(this.state.arbitrary_secret_description, this.props),
      invalidText: this.props.descriptionInvalidText(this.state, this.props),
      field: "arbitrary_secret_description",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-arb-secret-data",
      componentName: this.props.data.arbitrary_secret_data,
      labelText: "Data",
      placeholder: "my-secret-data",
      value: this.state.arbitrary_secret_data,
      onChange: this.handleInputChange,
      invalid: isNullOrEmptyString$6(this.state.arbitrary_secret_data),
      invalidText: "Arbitrary Secret Data cannot be empty",
      field: "arbitrary_secret_data",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement("div", {
      className: "marginBottomSmall"
    }, this.state.labels.map((label, i) => /*#__PURE__*/React.createElement(Tag, {
      key: "label" + i,
      size: "md",
      type: labelColors[i % labelColors.length]
    }, label))))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Tile, {
      className: tileClassName + " widthOneHundredPercent"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement("strong", null, "Username Password Secret")), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-username-password-secret-name",
      componentName: this.props.data.username_password_secret_name,
      labelText: "Name",
      placeholder: "my-secret-name",
      value: this.state.username_password_secret_name,
      onChange: this.handleInputChange,
      field: "username_password_secret_name",
      invalidCallback: () => this.props.secretCallback(this.state, this.props, "username_password_secret_name"),
      invalidText: this.props.secretCallbackText(this.state, this.props, "username_password_secret_name"),
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-username-password-secret-description",
      componentName: this.props.data.username_password_secret_description,
      labelText: "Description",
      placeholder: "my-secret-description",
      value: this.state.username_password_secret_description,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.descriptionInvalid(this.state.username_password_secret_description, this.props),
      invalidText: this.props.descriptionInvalidText(this.state, this.props),
      field: "username_password_secret_description",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-username-password-secret-username",
      componentName: this.props.data.username_password_secret_username,
      labelText: "Username",
      placeholder: "my-secret-username",
      value: this.state.username_password_secret_username,
      onChange: this.handleInputChange,
      maxLength: 255,
      invalid: lib_15("username", this.state.username_password_secret_username, this.props.descriptionRegex).invalid,
      invalidText: lib_15("username", this.state.username_password_secret_username, this.props.descriptionRegex).invalidText,
      field: "username_password_secret_username",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: composedId + "-username-password-secret-password",
      componentName: this.props.data.username_password_secret_password,
      labelText: "Password",
      placeholder: "my-secret-password",
      value: this.state.username_password_secret_password,
      onChange: this.handleInputChange,
      invalid: lib_15("password", this.state.username_password_secret_password, this.props.descriptionRegex).invalid,
      invalidText: lib_15("password", this.state.username_password_secret_password, this.props.descriptionRegex).invalidText,
      field: "username_password_secret_password",
      className: "fieldWidth"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Auto Rotate",
      defaultToggled: this.state.auto_rotate,
      id: composedId + "-auto-rotate-toggle",
      onToggle: () => this.handleToggle("auto_rotate"),
      isModal: this.props.isModal
    })), this.state.auto_rotate ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(NumberInput, {
      id: composedId + "-interval",
      label: "Interval",
      value: this.state.interval,
      defaultValue: this.props.interval,
      min: 1,
      onChange: this.handleNumberInputChange,
      name: "interval",
      hideSteppers: true,
      invalidText: "Enter a number greater than or equal to 1",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Opaque Secrets Ingress Form",
      name: "unit",
      groups: ["day", "month"],
      value: this.state.unit,
      labelText: "Unit",
      handleInputChange: this.handleInputChange,
      className: "fieldWidth"
    }))) : "", /*#__PURE__*/React.createElement("div", {
      className: "marginBottomSmall"
    }, this.state.labels.map((label, i) => /*#__PURE__*/React.createElement(Tag, {
      key: "label" + i,
      size: "md",
      type: labelColors[i % labelColors.length]
    }, label))))));
  }
}
OpaqueIngressSecretForm.defaultProps = {
  data: {
    name: "",
    namespace: "",
    interval: 1,
    auto_rotate: false,
    labels: [],
    arbitrary_secret_name: "",
    arbitrary_secret_description: "",
    arbitrary_secret_data: "",
    secrets_group: "",
    secrets_manager: "",
    username_password_secret_name: "",
    username_password_secret_username: "",
    username_password_secret_password: "",
    username_password_secret_description: ""
  },
  isModal: false,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
OpaqueIngressSecretForm.propTypes = {
  cluster: PropTypes$1.shape({
    entitlement: PropTypes$1.string,
    // can be null
    flavor: PropTypes$1.string.isRequired,
    vpc: PropTypes$1.string,
    workers_per_subnet: PropTypes$1.number.isRequired,
    subnets: PropTypes$1.array.isRequired
  }),
  // can be null
  data: PropTypes$1.shape({
    cluster: PropTypes$1.string,
    name: PropTypes$1.string.isRequired,
    namespace: PropTypes$1.string,
    persistence: PropTypes$1.bool,
    secrets_manager: PropTypes$1.string,
    secrets_group: PropTypes$1.string,
    expiration_date: PropTypes$1.string,
    labels: PropTypes$1.arrayOf(PropTypes$1.string).isRequired,
    arbitrary_secret_name: PropTypes$1.string,
    arbitrary_secret_description: PropTypes$1.string,
    arbitrary_secret_data: PropTypes$1.string,
    username_password_secret_name: PropTypes$1.string,
    username_password_secret_description: PropTypes$1.string,
    username_password_secret_username: PropTypes$1.string,
    username_password_secret_password: PropTypes$1.string,
    interval: PropTypes$1.number.isRequired,
    auto_rotate: PropTypes$1.bool.isRequired,
    unit: PropTypes$1.string
  }),
  secretsManagerList: PropTypes$1.arrayOf(PropTypes$1.string).isRequired,
  secretsManagerGroupCallback: PropTypes$1.func.isRequired,
  secretsManagerGroupCallbackText: PropTypes$1.func.isRequired,
  secretCallback: PropTypes$1.func.isRequired,
  secretCallbackText: PropTypes$1.func.isRequired,
  descriptionInvalid: PropTypes$1.func.isRequired,
  descriptionInvalidText: PropTypes$1.func.isRequired,
  labelsInvalid: PropTypes$1.func.isRequired,
  labelsInvalidText: PropTypes$1.string,
  descriptionRegex: PropTypes$1.instanceOf(RegExp).isRequired
};

const OpaqueIngressSecret = props => {
  return props.isModal ? "" : /*#__PURE__*/React.createElement(IcseFormTemplate, {
    name: "Opaque Ingress Secrets",
    subHeading: true,
    addText: "Create a Opaque Ingress Secret",
    arrayData: props.opaque_secrets,
    innerForm: OpaqueIngressSecretForm,
    disableSave: props.disableSave,
    onDelete: props.onDelete,
    onSave: props.onSave,
    onSubmit: props.onSubmit,
    propsMatchState: props.propsMatchState,
    hideFormTitleButton: isEmpty(props.secretsManagerList),
    overrideTile: isEmpty(props.secretsManagerList) ? /*#__PURE__*/React.createElement(NoSecretsManagerTile, {
      text: "to enable Opaque Ingress Secrets"
    }) : null,
    innerFormProps: {
      secretsManagerList: props.secretsManagerList,
      secretsManagerGroupCallback: props.secretsManagerGroupCallback,
      secretsManagerGroupCallbackText: props.secretsManagerGroupCallbackText,
      secretCallback: props.secretCallback,
      secretCallbackText: props.secretCallbackText,
      descriptionInvalid: props.descriptionInvalid,
      descriptionInvalidText: props.descriptionInvalidText,
      labelsInvalid: props.labelsInvalid,
      labelsInvalidText: props.labelsInvalidText,
      craig: props.craig,
      cluster: props.cluster,
      arrayParentName: props.cluster.name
    },
    hideAbout: true,
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "opaque_secrets",
      disableSave: props.disableSave,
      type: "formInSubForm"
    }
  });
};
OpaqueIngressSecret.defaultProps = {
  isModal: false
};
OpaqueIngressSecret.propTypes = {
  isModal: PropTypes.bool.isRequired,
  opaque_secrets: PropTypes.arrayOf(PropTypes.shape({})),
  disableSave: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  propsMatchState: PropTypes.func,
  secretsManagerList: PropTypes.array,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.string,
  craig: PropTypes.shape({}),
  arrayParentName: PropTypes.string,
  cluster: PropTypes.shape({}).isRequired
};

class ClusterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    if (this.props.isModal) this.state.worker_pools = [];
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.filterVersion = this.filterVersion.bind(this);
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
    this.setState(lib_16(name, value, cluster));
  };

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle subnet multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({
      [name]: event
    });
  }

  /**
   * filter function for kube version select
   * @param {string} version
   * @returns {string} version
   */
  filterVersion(version) {
    return lib_30(version, this.state.kube_type);
  }
  render() {
    let clusterComponent = this.props.isModal ? "new-cluster" : this.props.data.name;
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(FetchSelect, {
      name: "flavor",
      formName: clusterComponent + "flavor",
      labelText: "Instance Profile",
      value: this.state.flavor,
      apiEndpoint: this.props.flavorApiEndpoint,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), this.state.kube_type === "openshift" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "cos",
      formName: clusterComponent + "cos",
      labelText: "Cloud Object Storage Instance",
      groups: this.props.cosNames,
      value: this.state.cos,
      handleInputChange: this.handleInputChange,
      invalidText: "Select an Object Storage instance",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(EntitlementSelect, {
      name: "entitlement",
      formName: clusterComponent + "entitlement",
      labelText: "Entitlement",
      value: this.state.entitlement,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
      filter: this.filterVersion,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      id: clusterComponent + "-update-all",
      labelText: "Update All Workers",
      toggleFieldName: "update_all_workers",
      defaultToggled: this.state.update_all_workers,
      onToggle: this.handleToggle
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
      onToggle: this.handleToggle
    })), /*#__PURE__*/React.createElement(WorkerPools, {
      worker_pools: this.props.data.worker_pools,
      disableSave: this.props.workerPoolProps.disableSave,
      onDelete: this.props.workerPoolProps.onDelete,
      onSave: this.props.workerPoolProps.onSave,
      onSubmit: this.props.workerPoolProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      cluster: this.props.data,
      invalidCallback: this.props.invalidPoolCallback,
      invalidTextCallback: this.props.invalidPoolTextCallback,
      subnetList: this.props.subnetList,
      craig: this.props.craig,
      flavorApiEndpoint: this.props.flavorApiEndpoint,
      isModal: this.props.isModal
    }), /*#__PURE__*/React.createElement(OpaqueIngressSecret, {
      cluster: this.props.data,
      opaque_secrets: this.props.data.opaque_secrets,
      disableSave: this.props.opaqueIngressSecretProps.disableSave,
      onDelete: this.props.opaqueIngressSecretProps.onDelete,
      onSave: this.props.opaqueIngressSecretProps.onSave,
      onSubmit: this.props.opaqueIngressSecretProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      secretsManagerList: this.props.secretsManagerList,
      secretsManagerGroupCallback: this.props.secretsManagerGroupCallback,
      secretsManagerGroupCallbackText: this.props.secretsManagerGroupCallbackText,
      secretCallback: this.props.secretCallback,
      secretCallbackText: this.props.secretCallbackText,
      descriptionInvalid: this.props.descriptionInvalid,
      descriptionInvalidText: this.props.descriptionInvalidText,
      labelsInvalid: this.props.labelsInvalid,
      labelsInvalidText: this.props.labelsInvalidText,
      craig: this.props.craig,
      isModal: this.props.isModal
    }));
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
    worker_pools: [],
    opaque_secrets: []
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
    worker_pools: PropTypes.array.isRequired,
    opaque_secrets: PropTypes.array.isRequired
  }),
  /* bools */
  isModal: PropTypes.bool.isRequired,
  /* lists */
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  secretsManagerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* api endpoints */
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  invalidPoolCallback: PropTypes.func,
  invalidPoolTextCallback: PropTypes.func,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.string,
  /* forms */
  workerPoolProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired
  }).isRequired,
  opaqueIngressSecretProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired
  }).isRequired
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
    this.setState(f5Vsi_1(this.state, event));
  }
  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }
  handleVsiSave(stateData) {
    this.props.saveVsiCallback(stateData);
  }
  render() {
    let vsis = f5Vsi_2(this.state, this.props);
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
      return /*#__PURE__*/React.createElement(F5VsiTile, {
        key: "f5-vsi-tile" + JSON.stringify(instance) + index,
        data: instance,
        hide: this.props.hideSaveCallback(instance),
        onSave: this.handleVsiSave,
        totalZones: this.state.zones,
        index: index,
        resourceGroups: this.props.resourceGroups,
        encryptionKeys: this.props.encryptionKeys,
        propsMatchState: this.props.propsMatchState
      });
    }))));
  }
}
class F5VsiTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(Tile, {
      className: "fieldWidth subForm"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.state.name,
      type: "subHeading",
      className: "marginBottomSmall",
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.hide,
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
      value: this.state.name,
      onChange: this.handleInputChange,
      useData: true,
      readOnly: true,
      invalidCallback: () => {} // empty stuff for required prop
      ,
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
F5VsiTile.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    encryption_key: ""
  },
  hide: false,
  hideSaveCallback: () => {}
};
F5VsiTile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    encryption_key: PropTypes.string.isRequired
  }),
  hide: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  totalZones: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  hideSaveCallback: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired
};
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
  f5_on_management: true,
  hideSaveCallback: () => {}
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
    let password = f5_1(length); // get a valid password
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
      invalid: this.props.invalidCallback("tmos_admin_password", this.state, this.props) || !f5_3(this.state.tmos_admin_password),
      invalidText: "Password must be at least 15 characters, contain one numeric, one uppercase, and one lowercase character.",
      onChange: this.handleTextInput
    })), /*#__PURE__*/React.createElement(PopoverWrapper, {
      hoverText: "Generate Password",
      className: "passwordGenerateButton" + (f5_3(this.state.tmos_admin_password) ? "" : " invalid")
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
      invalid: this.props.invalidCallback("byol_license_basekey", this.state, this.props) || f5_2(this.state.byol_license_basekey),
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
      invalid: this.props.invalidCallback("license_username", this.state, this.props) || f5_2(this.state.license_username),
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
      invalid: this.props.invalidCallback("license_host", this.state, this.props) || f5_2(this.state.license_host),
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
      invalid: this.props.invalidCallback("license_pool", this.state, this.props) || f5_2(this.state.license_pool),
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
      invalid: this.props.invalidCallback("license_unit_of_measure", this.state, this.props) || f5_2(this.state.license_unit_of_measure),
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
      invalid: this.props.invalidCallback("license_sku_keyword_1", this.state, this.props) || f5_2(this.state.license_sku_keyword_1),
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
      invalid: this.props.invalidCallback("license_sku_keyword_2", this.state, this.props) || f5_2(this.state.license_sku_keyword_2),
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
      invalid: this.props.invalidCallback("template_version", this.state, this.props) || f5_2(this.state.template_version),
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
      invalid: this.props.invalidCallback("template_source", this.state, this.props) || f5_2(this.state.template_source),
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
      invalid: this.props.invalidCallback("phone_home_url", this.state, this.props) || !f5_4(this.state.phone_home_url),
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
      invalid: this.props.invalidCallback("do_declaration_url", this.state, this.props) || !f5_4(this.state.do_declaration_url),
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
      invalid: this.props.invalidCallback("as3_declaration_url", this.state, this.props) || !f5_4(this.state.as3_declaration_url),
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
      invalid: this.props.invalidCallback("ts_declaration_url", this.state, this.props) || !f5_4(this.state.ts_declaration_url),
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
      invalid: this.props.invalidCallback("tgstandby_url", this.state, this.props) || !f5_4(this.state.tgstandby_url),
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
      invalid: this.props.invalidCallback("tgrefresh_url", this.state, this.props) || !f5_4(this.state.tgrefresh_url),
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
      invalid: this.props.invalidCallback("tgactive_url", this.state, this.props) || !f5_4(this.state.tgactive_url),
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
    license_unit_of_measure: PropTypes.string,
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
    let value = iam_4(event);
    if (value !== null) {
      this.setState(value);
    }
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * Handle input change for allowed ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    this.setState(iam_5(event));
  }

  /**
   * Handle input change for a select
   * @param {event} event
   */
  handleSelectChange(event) {
    this.setState(iam_6(event));
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
      value: iam_3[this.state.mfa].display,
      formName: "IAM Account Settings",
      className: "textInputMedium",
      groups: iam_2,
      handleInputChange: this.handleSelectChange,
      labelText: "Multi-Factor Authentication",
      name: "mfa"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Defines if the entity history is included in the response.",
        align: "top-left"
      },
      labelText: "(Optional) Include History",
      defaultToggled: this.state.include_history,
      onToggle: () => this.handleToggle("include_history"),
      className: "fieldWidthSmaller",
      id: "iam-include-history"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "IAM Account Settings",
      name: "restrict_create_service_id",
      groups: iam_1,
      value: iam_3[this.state.restrict_create_service_id].display,
      labelText: "Restrict Creation of Service IDs",
      handleInputChange: this.handleSelectChange
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "IAM Account Settings",
      name: "restrict_create_platform_apikey",
      groups: iam_1,
      value: iam_3[this.state.restrict_create_platform_apikey].display,
      labelText: "Restrict Creation of API Keys",
      handleInputChange: this.handleSelectChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      tooltip: {
        content: "The number of sessions allowed per user at a time",
        align: "bottom-left",
        alignModal: "bottom-left"
      },
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
      label: "(Optional) Session Expiration (sec)",
      id: "iam-session-expiration-seconds",
      allowEmpty: true,
      value: this.state.session_expiration_in_seconds || "",
      step: 1,
      onChange: this.handleInputChange,
      name: "session_expiration_in_seconds",
      hideSteppers: true,
      min: 900,
      max: 86400,
      invalid: iamUtils_3(this.state.session_expiration_in_seconds, 900, 86400),
      invalidText: "Must be a whole number between 900 and 86400",
      className: "fieldWidth leftTextAlign"
    }), /*#__PURE__*/React.createElement(NumberInput, {
      placeholder: "900",
      label: "(Optional) Session Invalidation (sec)",
      id: "iam-session-invalidation-seconds",
      allowEmpty: true,
      value: this.state.session_invalidation_in_seconds || "",
      step: 1,
      onChange: this.handleInputChange,
      name: "session_invalidation_in_seconds",
      hideSteppers: true,
      invalid: iamUtils_3(this.state.session_invalidation_in_seconds, 900, 7200),
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
      placeholder: this.state.allowed_ip_addresses || "(Optional) X.X.X.X, X.X.X.X/X, ...",
      invalid: iamUtils_1(this.state.allowed_ip_addresses),
      invalidText: "Please enter a comma separated list of IP addresses or CIDR blocks"
    })));
  }
}
IamAccountSettingsForm.defaultProps = {
  data: {
    if_match: "",
    mfa: iam_2[0],
    include_history: false,
    restrict_create_service_id: iam_3[iam_1[0]].value,
    restrict_create_platform_apikey: iam_3[iam_1[0]].value,
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
    restrict_create_service_id: PropTypes.oneOf(iam_1.map(item => {
      return iam_3[item].value;
    })),
    restrict_create_platform_apikey: PropTypes.oneOf(iam_1.map(item => {
      return iam_3[item].value;
    })),
    max_sessions_per_identity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    session_expiration_in_seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    session_invalidation_in_seconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    allowed_ip_addresses: PropTypes.string
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
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
      value: this.state.name,
      onChange: this.handleTextInput,
      placeholder: "my-network-acl-name",
      helperTextCallback: () => this.props.helperTextCallback(this.state, this.props),
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: this.props.data.name + "-rg",
      labelText: "Resource Group",
      name: "resource_group",
      formName: "resource_group",
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleTextInput,
      invalid: lib_9(this.state.resource_group),
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
var NetworkAclForm$1 = NetworkAclForm;

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
      invalid: lib_15("id", this.state.id, this.props.descriptionRegex).invalid,
      invalidText: lib_15("id", this.state.id, this.props.descriptionRegex).invalidText
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
      invalid: lib_15("passphrase", this.state.passphrase, this.props.descriptionRegex).invalid,
      invalidText: lib_15("passphrase", this.state.passphrase, this.props.descriptionRegex).invalidText
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
      invalid: lib_15("credential_description", this.state.credential_description, this.props.descriptionRegex).invalid,
      invalidText: lib_15("credential_description", this.state.credential_description, this.props.descriptionRegex).invalidText
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
      invalid: lib_15("scope_description", this.state.scope_description, this.props.descriptionRegex).invalid,
      invalidText: lib_15("scope_description", this.state.scope_description, this.props.descriptionRegex).invalidText
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
      invalid: lib_15("collector_description", this.state.collector_description, this.props.descriptionRegex).invalid,
      invalidText: lib_15("collector_description", this.state.collector_description, this.props.descriptionRegex).invalidText
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, !this.props.powerVs && !this.props.classic && /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Use Existing Instance",
      key: this.state.use_data,
      defaultToggled: this.state.use_data,
      toggleFieldName: "use_data",
      onToggle: this.handleToggle,
      className: "fieldWidthSmallest",
      id: this.state.name + "-use-existing-instance"
    }), /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name + (this.props.powerVs ? "-power-ssh-key" : this.props.classic ? "-classic-ssh-key" : "") + "-name",
      componentName: this.props.data.name + "-ssh-key-name",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true
    }), !this.props.classic && /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${kebabCase$6(this.props.data.name)}-ssh-rg-select`,
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
  powerVs: false,
  resourceGroups: [],
  isModal: false,
  classic: false
};
SshKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    public_key: PropTypes.string,
    use_data: PropTypes.bool
  }).isRequired,
  powerVs: PropTypes.bool.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  classic: PropTypes.bool.isRequired
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
    return isIpv4CidrOrAddress$2(cidr) === false || !contains$5(cidr, "/");
  }
  render() {
    return /*#__PURE__*/React.createElement(Tile, {
      key: this.props.vpc_name + "-subnets-" + this.props.data.name,
      className: "marginRightSubnetTile fieldWidth " + (this.props.isModal ? "formInSubForm" : "subForm")
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: this.props.data.name || "New Subnet",
      type: "subHeading",
      className: "marginBottomSmall",
      buttons: /*#__PURE__*/React.createElement(DynamicRender, {
        hide: this.props.isModal,
        show: /*#__PURE__*/React.createElement(SaveAddButton, {
          name: this.props.data.name || "New Subnet",
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
      componentName: this.props.data.name || "new-subnet",
      value: this.state.name || "",
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
      value: this.state.cidr || "",
      className: "fieldWidthSmaller",
      readOnly: this.props.advanced === false || this.props.readOnly,
      onChange: this.handleChange,
      invalid: this.props.invalidCidr ? this.props.invalidCidr(this.state, this.props) || this.cidrIsValid(this.state.cidr) : this.cidrIsValid(this.state.cidr)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "network_acl",
      formName: `${this.props.data.name}-subnet-acl`,
      labelText: "Network ACL",
      groups: this.props.networkAcls,
      value: this.state.network_acl,
      handleInputChange: this.handleChange,
      className: "fieldWidthSmaller",
      disabled: this.props.isModal || this.props.readOnly,
      disableInvalid: this.props.isModal || this.props.readOnly,
      invalid: this.props.isModal || this.props.readOnly ? false : isNullOrEmptyString$6(this.state.network_acl),
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
    name: PropTypes.string,
    cidr: PropTypes.string,
    public_gateway: PropTypes.bool,
    network_acl: PropTypes.string
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
        if (subnet.name) this.state.subnetData[subnet.name] = true;
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
    let zone = parseIntFromZone$1(stateData.name);
    if (contains$5(this.props.enabledPublicGateways, zone)) {
      return false;
    } else return true;
  }
  render() {
    let subnetMap = [...this.props.data];
    return /*#__PURE__*/React.createElement(IcseSubForm, {
      id: `subnet-tile-${this.props.tier}-${this.props.vpc_name}`,
      formInSubForm: this.props.isModal === false,
      className: "popoverLeft tileFormMargin"
    }, /*#__PURE__*/React.createElement(IcseHeading, {
      name: "Subnets",
      type: "subHeading",
      className: "marginBottomSmall"
    }), /*#__PURE__*/React.createElement("div", {
      className: "displayFlex"
    }, subnetMap.map((subnet, index) => {
      if (!subnet || this.props.advanced && !contains$5(this.props.select_zones, index + 1)) {
        return /*#__PURE__*/React.createElement(SubnetForm, {
          key: `${"no-subnet-zone-" + (index + 1)}-tile-${this.props.tier}-${this.props.vpc_name}-${JSON.stringify(subnet)}`,
          vpc_name: this.props.vpc_name,
          data: {
            name: "No Subnet in Zone " + (index + 1),
            cidr: "",
            network_acl: ""
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
    if (!this.props.data.select_zones) {
      this.state.select_zones = [];
    }
    this.state.advancedSave = false;
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.handleSubnetTierToggle = this.handleSubnetTierToggle.bind(this);
    this.shouldDisableSubmit = this.shouldDisableSubmit.bind(this);
    this.handleSelectZones = this.handleSelectZones.bind(this);
    this.onSubnetSave = this.onSubnetSave.bind(this);
    buildFormDefaultInputMethods(this);
  }
  /**
   * handle select zones
   * @param {Object} event
   */
  handleSelectZones(event) {
    this.setState(forms_12(event, this.state));
  }

  /**
   * toggle
   * @param {string} name
   */
  handleSubnetTierToggle(name) {
    this.setState(forms_10(name, this.state));
  }

  /**
   * show for modals toggle
   */
  handleShowToggle() {
    this.setState(subnets_4(this.state, this.props));
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  onSave() {
    if (this.state.advanced && !this.state.advancedSave && !this.props.data.advanced) {
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
    let tierName = lib_17(this.props.data.name);
    return /*#__PURE__*/React.createElement(IcseSubForm, {
      formInSubForm: this.props.isModal === false,
      id: composedId,
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(DeleteModal, {
      name: tierName,
      modalOpen: this.state.showDeleteModal,
      onModalClose: () => this.handleSubnetTierToggle("showDeleteModal"),
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
          onClick: () => this.handleSubnetTierToggle("showDeleteModal")
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
    }), this.state.advanced ? /*#__PURE__*/React.createElement(IcseMultiSelect, {
      id: this.props.data.name + "-subnet-zones",
      className: "fieldWidthSmaller",
      titleText: "Zones",
      invalid: this.state.select_zones.length === 0,
      invalidText: "Select at least one zone",
      items: ["1", "2", "3"],
      initialSelectedItems: forms_11(this.state, this.props),
      onChange: this.handleSelectZones
    }) : /*#__PURE__*/React.createElement(IcseNumberSelect, {
      max: 3,
      value: this.state.zones ? this.state.zones : 1,
      labelText: "Subnet Tier Zones",
      name: "zones",
      handleInputChange: this.handleChange,
      className: "fieldWidthSmaller",
      invalid: this.state.zones === 0,
      invalidText: "At least one zone must be selected.",
      formName: formName
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: this.props.dynamicSubnets ? "Advanced configuration cannot be set when using dynamically scaled subnets" : "Enable advanced subnet configuration such as custom CIDR blocks",
        alignModal: "bottom",
        align: "left"
      },
      id: composedId + "-advanced",
      labelText: "Advanced Configuration",
      defaultToggled: this.state.advanced,
      onToggle: () => this.handleSubnetTierToggle("advanced"),
      className: "fieldWidthSmaller",
      disabled: this.props.dynamicSubnets || this.props.data.advanced
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      className: "marginBottomSmall"
    }, /*#__PURE__*/React.createElement(IcseSelect, {
      tooltip: {
        content: "Changing this field will overwrite existing Network ACL changes to subnets in this data.",
        alignModal: "right",
        align: "right"
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
      onToggle: () => this.handleSubnetTierToggle("addPublicGateway"),
      isModal: this.props.isModal,
      disabled: this.state.advanced || this.props.data.advanced || this.props.enabledPublicGateways.length === 0,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(SubnetTileForm, {
      tier: this.props.data.name,
      vpc_name: this.props.vpc_name,
      onSave: this.onSubnetSave,
      isModal: this.props.isModal,
      data: this.props.subnetListCallback(this.state, this.props),
      key: JSON.stringify(this.state.select_zones) + this.state.zones + JSON.stringify(this.state),
      enabledPublicGateways: this.props.enabledPublicGateways,
      networkAcls: this.props.networkAcls,
      disableSaveCallback: this.props.disableSubnetSaveCallback,
      invalidCidr: this.props.invalidCidr,
      invalidCidrText: this.props.invalidCidrText,
      invalidCallback: this.props.invalidSubnetCallback,
      invalidTextCallback: this.props.invalidSubnetTextCallback,
      select_zones: this.state.select_zones,
      advanced: this.state.advanced
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
  },
  dynamicSubnets: false
};
SubnetTierForm.propTypes = {
  data: PropTypes.shape({
    hide: PropTypes.bool,
    name: PropTypes.string.isRequired,
    zones: PropTypes.any,
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
  invalidSubnetTextCallback: PropTypes.func,
  dynamicSubnets: PropTypes.bool.isRequired
};
var SubnetTierForm$1 = SubnetTierForm;

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

class CbrContextForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-context",
      componentName: this.props.arrayParentName + "-cbr-context",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props),
      hideHelperText: true,
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-cbr-context-value",
      componentName: this.props.arrayParentName + "-cbr-context",
      field: "value",
      value: this.state.value,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback("value", this.state, this.props),
      invalidText: this.props.invalidTextCallback("value", this.state, this.props)
    }));
  }
}
CbrContextForm.defaultProps = {
  data: {
    name: "",
    value: ""
  },
  arrayParentName: ""
};
CbrContextForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string
};

class CbrResourceAttributeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-ra",
      componentName: this.props.data.name + "-cbr-ra",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props),
      hideHelperText: true,
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-cbr-ra-value",
      componentName: this.props.data.name + "-cbr-ra",
      field: "value",
      value: this.state.value,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback("value", this.state, this.props),
      invalidText: this.props.invalidTextCallback("value", this.state, this.props),
      hideHelperText: true
    }));
  }
}
CbrResourceAttributeForm.defaultProps = {
  data: {
    name: "",
    value: ""
  },
  arrayParentName: ""
};
CbrResourceAttributeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string
};

/**
 * Context-based restriction tags
 */
class CbrTagForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }
  render() {
    return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-tag",
      componentName: this.props.data.name + "-cbr-tag",
      className: "fieldWidthSmaller",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props),
      hideHelperText: true,
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-cbr-tag-operator",
      componentName: this.props.data.name + "-cbr-tag",
      className: "fieldWidthSmaller",
      field: "operator",
      value: this.state.operator,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback("operator", this.state, this.props),
      invalidText: this.props.invalidTextCallback("operator", this.state, this.props),
      hideHelperText: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      id: this.props.data.name + "-cbr-tag-value",
      componentName: this.props.data.name + "-cbr-tag",
      className: "fieldWidthSmaller",
      field: "value",
      value: this.state.value,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback("value", this.state, this.props),
      invalidText: this.props.invalidTextCallback("value", this.state, this.props),
      hideHelperText: true
    }));
  }
}
CbrTagForm.defaultProps = {
  data: {
    name: "",
    operator: "",
    value: ""
  },
  arrayParentName: ""
};
CbrTagForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    operator: PropTypes.string,
    value: PropTypes.string.isRequired
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string
};

/**
 * Context-based restriction rules
 */
class CbrRuleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }
  handleInputChange(event) {
    this.setState(forms_20(this.state, event));
  }
  render() {
    // set up props for subforms
    let contextInnerFormProps = {};
    transpose$2({
      ...this.props.contextProps,
      arrayParentName: this.props.data.name
    }, contextInnerFormProps);
    let resourceAttributeInnerFormProps = {};
    transpose$2({
      ...this.props.resourceAttributeProps,
      arrayParentName: this.props.data.name
    }, resourceAttributeInnerFormProps);
    let tagInnerFormProps = {};
    transpose$2({
      ...this.props.tagProps,
      arrayParentName: this.props.data.name
    }, tagInnerFormProps);
    return /*#__PURE__*/React.createElement("div", {
      id: "cbr-rule-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-rule",
      componentName: this.props.data.name + "-cbr-rule",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalidCallback: () => this.props.invalidNameCallback(this.state, this.props),
      invalidText: this.props.invalidNameTextCallback(this.state, this.props),
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      id: this.props.data.name + "-cbr-rule-enforcement-mode",
      name: "enforcement_mode",
      className: "fieldWidthSmaller",
      value: titleCase$2(this.state.enforcement_mode),
      labelText: "Enforcement Mode",
      groups: ["Enabled", "Disabled", "Report"],
      invalid: this.props.invalidCallback("enforcement_mode", this.state, this.props),
      invalidText: this.props.invalidTextCallback("enforcement_mode", this.state, this.props),
      formName: "cbr-rule",
      handleInputChange: this.handleInputChange
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
      tooltip: {
        content: "APIs can be scoped for some service types that adopt CBR. This is mostly used for managed database services.",
        alignModal: "right",
        align: "right"
      },
      id: this.props.data.name + "-cbr-rule-api-type-id",
      labelText: "API Type ID" // needed to override title case capitalization
      ,
      field: "api_type_id",
      value: this.state.api_type_id,
      onChange: this.handleInputChange,
      optional: true,
      invalidCallback: () => this.props.invalidCallback("api_type_id", this.state, this.props),
      invalidText: this.props.invalidTextCallback("api_type_id", this.state, this.props)
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      id: this.props.data.name + "-cbr-rule-description",
      className: "textInputWide",
      name: "description",
      value: this.state.description,
      labelText: "(Optional) Description",
      onChange: this.handleInputChange,
      invalid: this.props.invalidCallback("description", this.state, this.props),
      invalidText: this.props.invalidTextCallback("description", this.state, this.props),
      enableCounter: true
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Contexts",
      subHeading: true,
      tooltip: {
        content: "Contexts define where your resource can be accessed.",
        link: "https://cloud.ibm.com/docs/account?topic=account-context-restrictions-whatis#restriction-context",
        align: "top-left"
      },
      addText: "Create a Context",
      arrayData: this.props.data.contexts,
      innerForm: CbrContextForm,
      disableSave: this.props.contextProps.disableSave,
      onDelete: this.props.contextProps.onDelete,
      onSave: this.props.contextProps.onSave,
      onSubmit: this.props.contextProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...contextInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "contexts",
        disableSave: this.props.contextProps.disableSave,
        type: "subForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Resource Attributes",
      subHeading: true,
      tooltip: {
        content: "A cloud resource is specified by resource attributes.",
        link: "https://cloud.ibm.com/docs/account?topic=account-context-restrictions-whatis#restriction-rules"
      },
      addText: "Create a Resource Attribute",
      arrayData: this.props.data.resource_attributes,
      innerForm: CbrResourceAttributeForm,
      disableSave: this.props.resourceAttributeProps.disableSave,
      onDelete: this.props.resourceAttributeProps.onDelete,
      onSave: this.props.resourceAttributeProps.onSave,
      onSubmit: this.props.resourceAttributeProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...resourceAttributeInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "resource_attributes",
        disableSave: this.props.resourceAttributeProps.disableSave,
        type: "subForm"
      }
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Tags",
      subHeading: true,
      tooltip: {
        content: "A cloud resource can also be specified using tags.",
        align: "top-left"
      },
      addText: "Create a Tag",
      arrayData: this.props.data.tags,
      innerForm: CbrTagForm,
      disableSave: this.props.tagProps.disableSave,
      onDelete: this.props.tagProps.onDelete,
      onSave: this.props.tagProps.onSave,
      onSubmit: this.props.tagProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...tagInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "tags",
        disableSave: this.props.tagProps.disableSave,
        type: "subForm"
      }
    })));
  }
}
CbrRuleForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    description: "",
    enforcement_mode: "enabled",
    api_type_id: "",
    contexts: [],
    resource_attributes: [],
    tags: []
  }
};
CbrRuleForm.propTypes = {
  isModal: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    enforcement_mode: PropTypes.string.isRequired,
    api_type_id: PropTypes.string.isRequired,
    contexts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired),
    resource_attributes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired),
    tags: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired)
  }),
  propsMatchState: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  contextProps: PropTypes.shape({
    // these should not be required in modal
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func
  }).isRequired,
  resourceAttributeProps: PropTypes.shape({
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func
  }).isRequired,
  tagProps: PropTypes.shape({
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func
  }).isRequired
};

/**
 * Context-based restriction addresses / exclusions
 */
class CbrExclusionAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(cbrUtils_6(this.state, event));
  }
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-address-exclusion",
      componentName: this.props.data.name + "-cbr-zone",
      className: "fieldWidthSmaller",
      value: this.state.name,
      onChange: this.handleInputChange,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      hideHelperText: true,
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-account-id",
      componentName: this.props.data.name + "-cbr-zone",
      field: "account_id",
      labelText: "Account ID" // need to override case on account id
      ,
      value: this.state.account_id,
      onChange: this.handleInputChange,
      hideHelperText: true,
      className: "fieldWidthSmaller"
    }, cbrUtils_1("account_id", this.state.account_id))), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-zone-location",
      componentName: this.props.data.name + "cbr-zone-location",
      className: "fieldWidthSmaller",
      field: "location",
      value: this.state.location,
      onChange: this.handleInputChange,
      hideHelperText: true
    }, cbrUtils_1("location", this.state.location)))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-zone-service-name",
      componentName: this.props.data.name + "cbr-zone-service-name",
      className: "fieldWidthSmaller",
      field: "service_name",
      value: this.state.service_name,
      onChange: this.handleInputChange,
      hideHelperText: true
    }, cbrUtils_1("service_name", this.state.service_name))), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-zone-service-instance",
      componentName: this.props.data.name + "cbr-zone-service-instance",
      className: "fieldWidthSmaller",
      field: "service_instance",
      value: this.state.service_instance,
      onChange: this.handleInputChange,
      hideHelperText: true
    }, cbrUtils_1("service_instance", this.state.service_instance))), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-zone-service-type",
      componentName: this.props.data.name + "cbr-zone-service-type",
      className: "fieldWidthSmaller",
      field: "service_type",
      value: this.state.service_type,
      onChange: this.handleInputChange,
      hideHelperText: true
    }, cbrUtils_1("service_type", this.state.service_type)))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      labelText: "Type",
      name: "type",
      formName: this.props.data.name + "cbr-zone-type",
      groups: ["IP Address", "IP Range", "Subnet", "VPC", "Service Ref"],
      value: cbrUtils_5[this.state.type],
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Type",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-zone-value",
      componentName: this.props.data.name + "cbr-zone-value",
      className: "fieldWidthSmaller",
      field: "value",
      value: this.state.value,
      onChange: this.handleInputChange,
      hideHelperText: true,
      placeholder: cbrUtils_3(this.state.type)
    }, cbrUtils_2(this.state.type, this.state.value)))));
  }
}
CbrExclusionAddressForm.defaultProps = {
  data: {
    name: "",
    account_id: "",
    location: "",
    service_name: "",
    service_instance: "",
    service_type: "",
    type: "ipAddress",
    value: ""
  },
  isModal: false
};
CbrExclusionAddressForm.propTypes = {
  data: PropTypes.shape({
    account_id: PropTypes.string.isRequired,
    location: PropTypes.string,
    name: PropTypes.string,
    service_name: PropTypes.string,
    service_instance: PropTypes.string,
    service_type: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
};

/**
 * Context-based restriction zones
 */
class CbrZoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
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
  render() {
    // set up props for subforms
    let exclusionInnerFormProps = {
      type: "exclusion",
      invalidCallback: this.props.invalidExclusionCallback,
      invalidTextCallback: this.props.invalidExclusionTextCallback,
      arrayParentName: this.props.data.name
    };
    transpose$2({
      ...this.props.exclusionProps
    }, exclusionInnerFormProps);
    let addressInnerFormProps = {
      invalidCallback: this.props.invalidAddressCallback,
      invalidTextCallback: this.props.invalidAddressTextCallback,
      arrayParentName: this.props.data.name,
      type: "address"
    };
    transpose$2({
      ...this.props.addressProps
    }, addressInnerFormProps);
    return /*#__PURE__*/React.createElement("div", {
      id: "cbr-zone-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.props.data.name + "-cbr-zone",
      componentName: this.props.data.name + "-cbr-zone",
      value: this.state.name,
      onChange: this.handleInputChange,
      hideHelperText: true,
      invalidCallback: () => this.props.invalidCallback(this.state, this.props),
      invalidText: this.props.invalidTextCallback(this.state, this.props),
      forceKebabCase: true
    }), /*#__PURE__*/React.createElement(IcseTextInput, _extends({
      id: this.props.data.name + "-cbr-account-id",
      componentName: this.props.data.name + "-cbr-zone",
      field: "account_id",
      value: this.state.account_id,
      labelText: "Account ID" // needed to override titlecase capitalization
      ,
      onChange: this.handleInputChange,
      optional: true
    }, forms_17("account_id", this.state.account_id)))), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(TextArea, {
      id: this.props.data.name + "-cbr-zone-description",
      className: "textInputWide",
      name: "description",
      value: this.state.description,
      labelText: "(Optional) Description",
      onChange: this.handleInputChange,
      invalid: this.state.description.length < 0 || this.state.description.length > 300,
      invalidText: "Invalid description, must be between 0 and 300 characters.",
      enableCounter: true
    })), this.props.isModal !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Addresses",
      subHeading: true,
      addText: "Create an Address",
      arrayData: this.props.data.addresses,
      innerForm: CbrExclusionAddressForm,
      disableSave: this.props.addressProps.disableSave,
      onDelete: this.props.addressProps.onDelete,
      onSave: this.props.addressProps.onSave,
      onSubmit: this.props.addressProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...addressInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "addresses",
        disableSave: this.props.addressProps.disableSave,
        type: "subForm"
      },
      defaultModalValues: this.props.addressProps.defaultModalValues
    }), /*#__PURE__*/React.createElement(IcseFormTemplate, {
      name: "Exclusions",
      subHeading: true,
      addText: "Create an Exclusion",
      arrayData: this.props.data.exclusions,
      innerForm: CbrExclusionAddressForm,
      disableSave: this.props.exclusionProps.disableSave,
      onDelete: this.props.exclusionProps.onDelete,
      onSave: this.props.exclusionProps.onSave,
      onSubmit: this.props.exclusionProps.onSubmit,
      propsMatchState: this.props.propsMatchState,
      innerFormProps: {
        ...exclusionInnerFormProps
      },
      hideAbout: true,
      toggleFormProps: {
        hideName: true,
        submissionFieldName: "exclusions",
        disableSave: this.props.exclusionProps.disableSave,
        type: "subForm"
      },
      defaultModalValues: this.props.exclusionProps.defaultModalValues
    })));
  }
}
CbrZoneForm.defaultProps = {
  data: {
    name: "",
    description: "",
    account_id: "",
    addresses: [],
    exclusions: []
  },
  isModal: false
};
CbrZoneForm.propTypes = {
  addressProps: PropTypes.shape({
    disableSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    onSubmit: PropTypes.func
  }),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    account_id: PropTypes.string,
    description: PropTypes.string,
    addresses: PropTypes.arrayOf(PropTypes.shape({
      account_id: PropTypes.string,
      location: PropTypes.string,
      name: PropTypes.string,
      service_name: PropTypes.string,
      service_type: PropTypes.string,
      service_instance: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string
    }).isRequired),
    exclusions: PropTypes.arrayOf(PropTypes.shape({
      account_id: PropTypes.string,
      location: PropTypes.string,
      name: PropTypes.string,
      service_name: PropTypes.string,
      service_type: PropTypes.string,
      service_instance: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.string
    }).isRequired)
  }),
  exclusionProps: PropTypes.shape({
    disableSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    onSubmit: PropTypes.func
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidAddressCallback: PropTypes.func,
  // not required for modal
  invalidAddressTextCallback: PropTypes.func,
  // not required for modal
  invalidExclusionCallback: PropTypes.func,
  // not required for modal
  invalidExclusionTextCallback: PropTypes.func,
  // not required for modal
  isModal: PropTypes.bool.isRequired,
  propsMatchState: PropTypes.func.isRequired
};

class LogDNAForm extends Component {
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
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (contains$5(["plan", "endpoints"], name)) value = kebabCase$6(value);
    this.setState(this.setNameToValue(name, value));
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
    return /*#__PURE__*/React.createElement("div", {
      id: "logdna-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      field: "Name",
      labelText: "Name",
      value: this.props.prefix + "-logdna",
      readOnly: true,
      id: "logdna-name",
      invalid: false,
      placeholder: this.props.prefix + "-logdna",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Enabled",
      defaultToggled: this.state.enabled,
      name: "enabled",
      toggleFieldName: "enabled",
      onToggle: this.handleToggle,
      id: "logdna-enabled",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      groups: ["Lite", "7 Day", "14 Day", "30 Day"],
      formName: this.props.data.name + "-logdna-plan",
      name: "plan",
      value: titleCase$2(this.state.plan).replace(/3 0/, "30").replace(/1 4/, "14"),
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      labelText: "Plan",
      invalidText: "Select a plan."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${this.props.data.name}-logdna-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      labelText: "Resource Group",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      groups: this.props.cosBuckets,
      formName: this.props.data.name + "-logdna-bucket",
      name: "bucket",
      value: this.state.bucket,
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller",
      labelText: "Log Bucket",
      invalidText: "Select a bucket."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Create an archive with the LogDNA Provider",
        align: "bottom-left"
      },
      labelText: "(Optional) Add LogDNA Archive",
      defaultToggled: this.state.archive,
      name: "archive",
      toggleFieldName: "archive",
      onToggle: this.handleToggle,
      id: "logdna-archive",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "(Optional) Add Platform Logging",
      defaultToggled: this.state.platform_logs,
      name: "platform_logs",
      toggleFieldName: "platform_logs",
      onToggle: this.handleToggle,
      id: "logdna-platform-logs",
      className: "fieldWidthSmaller"
    })));
  }
}
LogDNAForm.defaultProps = {
  data: {
    enabled: false,
    plan: "7-day",
    resource_group: "",
    bucket: "",
    archive: false,
    platform_logs: false
  },
  isModal: false
};
LogDNAForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    plan: PropTypes.string,
    resource_group: PropTypes.string,
    bucket: PropTypes.string,
    archive: PropTypes.bool,
    platform_logs: PropTypes.bool
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string.isRequired
};

class SysdigForm extends Component {
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
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let {
      name,
      value
    } = event.target;
    if (name === "plan") value = kebabCase$6(value);
    this.setState(this.setNameToValue(name, value));
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      field: "Name",
      labelText: "Name",
      value: this.props.prefix + "-sysdig",
      readOnly: true,
      id: "sysdig-name",
      invalid: false,
      placeholder: this.props.prefix + "-sysdig",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "Enabled",
      defaultToggled: this.state.enabled,
      toggleFieldName: "enabled",
      onToggle: this.handleToggle,
      id: "sysdig-enabled",
      className: "fieldWidthSmaller"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      tooltip: {
        content: "Each tier level allows for more time-series per month.",
        link: "https://cloud.ibm.com/docs/monitoring?topic=monitoring-pricing_plans#graduated_secure",
        align: "bottom-left"
      },
      groups: ["Graduated Tier"],
      formName: this.props.data.name + "-sysdig-plan",
      name: "plan",
      value: titleCase$2(this.state.plan),
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      labelText: "Plan",
      invalidText: "Select a plan."
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      name: "resource_group",
      formName: `${this.props.data.name}-sysdig-rg-select`,
      groups: this.props.resourceGroups,
      value: this.state.resource_group,
      handleInputChange: this.handleInputChange,
      invalidText: "Select a Resource Group.",
      labelText: "Resource Group",
      className: "fieldWidth"
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      labelText: "(Optional) Add Platform Logging",
      defaultToggled: this.state.platform_logs,
      name: "platform_logs",
      toggleFieldName: "platform_logs",
      onToggle: this.handleToggle,
      id: "sysdig-platform-logs",
      className: "fieldWidth"
    })));
  }
}
SysdigForm.defaultProps = {
  data: {
    enabled: false,
    plan: "graduated-tier",
    resource_group: "",
    platform_logs: false
  },
  isModal: false
};
SysdigForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    plan: PropTypes.string,
    resource_group: PropTypes.string,
    platform_logs: PropTypes.bool
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string.isRequired
};

class SecretsManagerChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      selected: this.props.selected && this.props.selected.length !== this.props.secrets.length ? this.props.selected : ["Select All"].concat([...splat$2(this.props.secrets, "ref")])
    };
    this.onCheckClick = this.onCheckClick.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }
  onCheckClick(ref) {
    let selected = forms_39(this.state.selected, ref, this.props.secrets);
    this.setState({
      selected: selected
    }, () => {
      this.props.onSelectChange(selected);
    });
  }
  toggleHide() {
    this.setState({
      hide: !this.state.hide
    });
  }
  render() {
    return /*#__PURE__*/React.createElement(StatelessToggleForm, {
      id: this.props.parentName + "-toggle-form",
      name: "Import Existing Secrets",
      hide: this.state.hide,
      onIconClick: this.toggleHide,
      className: "formInSubForm secretsChecklistPadding",
      toggleFormTitle: true,
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement("div", {
      className: "formInSubForm secretChecklistMargin"
    }, distinct(["Select All"].concat([...splat$2(this.props.secrets, "ref")])).map(value => /*#__PURE__*/React.createElement(Checkbox, {
      className: "secretCheckBoxMargin",
      id: value + `-${this.props.parentName}`,
      key: kebabCase$6(value),
      labelText: value,
      checked: contains$5(this.state.selected, value),
      onChange: () => this.onCheckClick(value)
    }))));
  }
}
SecretsManagerChecklist.defaultProps = {
  secrets: [],
  parentName: ""
};
SecretsManagerChecklist.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  secrets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectChange: PropTypes.func.isRequired,
  parentName: PropTypes.string.isRequired
};

const Atracker = props => {
  return /*#__PURE__*/React.createElement(ToggleForm, {
    name: props.resourceName,
    about: props.docs,
    propsMatchState: props.propsMatchState,
    disableSave: props.disableSave,
    innerForm: AtrackerForm,
    hideName: true,
    noDeleteButton: true,
    tabPanel: {
      name: "Activity Tracker"
    },
    hide: true,
    submissionFieldName: "atracker",
    onSave: props.onSave,
    innerFormProps: {
      craig: props.craig,
      region: props.region,
      data: props.data,
      resourceGroups: props.resourceGroups,
      cosKeys: props.cosKeys,
      cosBuckets: props.cosBuckets,
      prefix: props.prefix
    }
  });
};
Atracker.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  region: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
  resourceName: PropTypes.string.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired
};

const IamAccountSettings = props => {
  return /*#__PURE__*/React.createElement(ToggleForm, {
    name: "IAM Account Settings",
    about: props.docs,
    propsMatchState: props.propsMatchState,
    disableSave: props.disableSave,
    innerForm: IamAccountSettingsForm,
    hideName: true,
    tabPanel: {
      name: "IAM Account Settings"
    },
    hide: true,
    submissionFieldName: "iam_account_settings",
    noDeleteButton: props.noDeleteButton,
    onSave: props.onSave,
    onDelete: props.onDelete,
    useAddButton: props.useAddButton,
    onShowToggle: () => {},
    innerFormProps: {
      craig: props.craig,
      data: props.data,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback
    }
  });
};
IamAccountSettings.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  noDeleteButton: PropTypes.bool.isRequired
};

const SccV1 = props => {
  return /*#__PURE__*/React.createElement(ToggleForm, {
    name: "Security and Compliance Center V1",
    about: props.docs,
    propsMatchState: props.propsMatchState,
    disableSave: props.disableSave,
    innerForm: SccForm,
    hideName: true,
    noDeleteButton: props.noDeleteButton,
    onDelete: props.onDelete,
    useAddButton: props.useAddButton,
    tabPanel: {
      name: "Security and Compliance Center V1"
    },
    hide: true,
    onShowToggle: () => {},
    submissionFieldName: "scc",
    onSave: props.onSave,
    innerFormProps: {
      craig: props.craig,
      data: props.data,
      invalidCallback: props.invalidCallback,
      invalidTextCallback: props.invalidTextCallback
    }
  });
};
SccV1.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  onSave: PropTypes.func.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  noDeleteButton: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};

function none() {}
const NoEdgeNetworkTile = () => {
  return /*#__PURE__*/React.createElement(Tile, {
    className: "tileBackground displayFlex alignItemsCenter wrap marginTop"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(CloudAlerting, {
    size: "24",
    className: "iconMargin"
  }), " No Edge Network. Go back to the", " ", /*#__PURE__*/React.createElement("a", {
    className: "no-secrets-link",
    href: "/"
  }, "Home page"), " ", "to enable Edge Networking.", " ", /*#__PURE__*/React.createElement("em", null, "Dynamic Scalable Subnets must be disabled to create an Edge VPC network.")));
};
const F5Form = props => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ToggleForm, {
    name: "F5 Big IP Template Configuration",
    submissionFieldName: "f5_vsi_template",
    noDeleteButton: true,
    hideName: true,
    onSave: props.onTemplateSave,
    disableSave: props.disableSave,
    type: "formInSubForm",
    innerForm: F5VsiTemplateForm,
    tabPanel: {
      hideAbout: true
    },
    craig: props.craig,
    innerFormProps: props.templateInnerFormProps,
    propsMatchState: props.propsMatchState
  }), /*#__PURE__*/React.createElement(ToggleForm, {
    name: "F5 VSI Deployment Configuration",
    submissionFieldName: "f5_vsi",
    noDeleteButton: true,
    hideName: true,
    tabPanel: {
      hideAbout: true
    },
    onSave: props.onVsiSave,
    disableSave: props.disableSave,
    type: "formInSubForm",
    innerForm: F5VsiForm,
    innerFormProps: props.deploymentInnerFormProps,
    craig: props.craig,
    propsMatchState: props.propsMatchState
  }));
};
F5Form.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  templateInnerFormProps: PropTypes.shape({}).isRequired,
  deploymentInnerFormProps: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}),
  onTemplateSave: PropTypes.func.isRequired,
  onVsiSave: PropTypes.func.isRequired
};
const F5BigIp = props => {
  return props.noEdgePattern ? /*#__PURE__*/React.createElement(StatefulTabPanel, {
    name: "F5 Big IP",
    hideFormTitleButton: true,
    form: /*#__PURE__*/React.createElement(NoEdgeNetworkTile, null),
    about: props.docs
  }) : /*#__PURE__*/React.createElement(ToggleForm, {
    craig: props.craig,
    name: "Configure F5 Big IP",
    noSaveButton: true,
    submissionFieldName: "f5_vsi",
    about: props.docs,
    innerForm: F5Form,
    hideName: true,
    noDeleteButton: true,
    tabPanel: {
      name: "F5 Big IP"
    },
    propsMatchState: props.propsMatchState,
    disableSave: props.disableSave,
    hide: true,
    nullRef: true,
    innerFormProps: {
      onVsiSave: props.onVsiSave,
      onTemplateSave: props.onTemplateSave,
      craig: props.craig,
      disableSave: props.disableSave,
      propsMatchState: props.propsMatchState,
      templateInnerFormProps: {
        invalidCallback: props.invalidTemplateCallback,
        invalidTextCallback: none,
        disableSave: props.disableSave,
        propsMatchState: props.propsMatchState,
        data: props.templateData
      },
      deploymentInnerFormProps: {
        craig: props.craig,
        vsis: props.vsis,
        sshKeys: props.sshKeys,
        edge_pattern: props.edge_pattern,
        f5_on_management: props.f5_on_management,
        apiEndpointInstanceProfiles: props.instanceProfilesApiEndpoint,
        resourceGroups: props.resourceGroups,
        encryptionKeys: props.encryptionKeys,
        f5Images: props.f5Images,
        initVsiCallback: props.initVsiCallback,
        saveVsiCallback: props.saveVsiCallback,
        disableSaveCallback: props.propsMatchState,
        hideSaveCallback: none,
        propsMatchState: props.propsMatchState,
        data: props.deploymentData
      }
    }
  });
};
F5BigIp.propTypes = {
  docs: PropTypes.object.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidTemplateCallback: PropTypes.func.isRequired,
  vsis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sshKeys: PropTypes.array.isRequired,
  edge_pattern: PropTypes.string,
  f5_on_management: PropTypes.bool.isRequired,
  instanceProfilesApiEndpoint: PropTypes.string.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  f5Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initVsiCallback: PropTypes.func.isRequired,
  saveVsiCallback: PropTypes.func.isRequired,
  templateData: PropTypes.shape({}).isRequired,
  deploymentData: PropTypes.shape({}),
  onTemplateSave: PropTypes.func.isRequired,
  onVsiSave: PropTypes.func.isRequired
};

export { AccessGroupDynamicPolicyForm, AccessGroupForm, AccessGroupPolicyForm, AccessGroups as AccessGroupsTemplate, AppIdForm, AppIdKeyForm, AppId as AppIdTemplate, AtrackerForm, Atracker as AtrackerPage, CbrContextForm, CbrExclusionAddressForm, CbrResourceAttributeForm, CbrRuleForm, CbrTagForm, CbrZoneForm, ClassicVlanForm, CloudDatabaseForm, CloudDatabase as CloudDatabaseTemplate, ClusterForm, Clusters as ClustersTemplate, DeleteButton, DeleteModal, DnsCustomResolverForm, DnsForm, DnsRecordForm, Dns as DnsTemplate, DnsZoneForm, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EndpointSelect, EntitlementSelect, EventStreamsForm, EventStreams as EventStreamsTemplate, F5BigIp as F5BigIpPage, F5VsiForm, F5VsiTemplateForm, FetchSelect, FormModal, IamAccountSettingsForm, IamAccountSettings as IamAccountSettingsPage, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, KeyManagement as KeyManagementTemplate, LocationsMultiSelect, LogDNAForm, NetworkAclForm$1 as NetworkAclForm, NetworkAcls as NetworkAclTemplate, NetworkingRuleForm, NetworkingRulesOrderCard, ObjectStorageBucketForm, ObjectStorageInstancesForm as ObjectStorageForm, ObjectStorageKeyForm, ObjectStorage as ObjectStorageTemplate, OpaqueIngressSecretForm, OrderCardDataTable, PopoverWrapper, PowerVsCloudConnectionForm, PowerVsCloudConnections as PowerVsCloudConnectionPage, PowerVsInstanceForm, PowerVsInstances as PowerVsInstancesPage, PowerVsNetworkAttachmentForm, PowerVsNetworkForm, PowerVsNetwork as PowerVsNetworkPage, PowerVsVolumeForm, PowerVsVolume as PowerVsVolumesPage, PowerVsWorkspaceForm, PowerVsWorkspace as PowerVsWorkspacePage, RenderForm, ResourceGroupForm, ResourceGroups as ResourceGroupsTemplate, RoutingTableForm, RoutingTableRouteForm, RoutingTables as RoutingTableTemplate, SaveAddButton, SaveIcon, SccForm, SccV1 as SccV1Page, SecretsManagerChecklist, SecretsManagerForm, SecretsManager as SecretsManagerTemplate, SecurityGroupForm, SecurityGroupMultiSelect, SecurityGroups as SecurityGroupTemplate, SshKeyForm, SshKeyMultiSelect, SshKeys as SshKeysTemplate, StatefulTabPanel, StatelessToggleForm, SubnetForm, SubnetMultiSelect, Subnets as SubnetPageTemplate, SubnetTierForm$1 as SubnetTierForm, SubnetTileForm, SysdigForm, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, TransitGateways as TransitGatewayTemplate, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcNetworkForm as VpcForm, VpcListMultiSelect, Vpcs as VpcTemplate, VpeForm, Vpe as VpeTemplate, VpnGatewayForm, VpnGateways as VpnGatewayTemplate, VpnServerForm, VpnServerRouteForm, VpnServers as VpnServerTemplate, VsiForm, VsiLoadBalancerForm, VsiLoadBalancer as VsiLoadBalancerTemplate, Vsi as VsiTemplate, VsiVolumeForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
