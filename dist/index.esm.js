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
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Tile, Toggletip, ToggletipButton, ToggletipContent, Link, Modal, TextInput, Toggle, Button } from '@carbon/react';
>>>>>>> 04bfb65 (added button examples)
=======
import { Popover, PopoverContent, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, FilterableMultiSelect, MultiSelect, Tile, Modal } from '@carbon/react';
>>>>>>> 8db187e (form and documentation)
=======
import { Popover, PopoverContent, FilterableMultiSelect, MultiSelect, Toggletip, ToggletipButton, ToggletipContent, Link, Select, SelectItem, Tile, Modal } from '@carbon/react';
>>>>>>> 67351ff (Dropdowns components)
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
<<<<<<< HEAD
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
=======
import { prettyJSON, isNullOrEmptyString, isEmpty, buildNumberDropdownList, kebabCase } from 'lazy-z';
import { Information, WarningAlt, CloudAlerting, Add } from '@carbon/icons-react';
>>>>>>> 67351ff (Dropdowns components)
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
import React, { Component } from 'react';
import { CloudAlerting, Add, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, Information, WarningAlt } from '@carbon/icons-react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, Toggle, TextInput, Select, SelectItem, Modal, FilterableMultiSelect, MultiSelect, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import PropTypes from 'prop-types';
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isEmpty, isNullOrEmptyString, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1 } from 'lazy-z';
=======
=======
import { Information, Save, Add, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt } from '@carbon/icons-react';
>>>>>>> ad3a1f9 (Migrated VpnGatewayForm + Documentation (Issue702) (#31))
import React, { Component } from 'react';
=======
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, Toggle, TextInput, Dropdown, Select, SelectItem, FilterableMultiSelect, MultiSelect, Modal, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
>>>>>>> 353b3a7 ($@)
=======
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, Toggle, TextInput, Dropdown, Select, SelectItem, Modal, FilterableMultiSelect, MultiSelect, Tabs, TabList, Tab, TabPanels, TabPanel, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
>>>>>>> 817ead3 (update build)
import PropTypes from 'prop-types';
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1 } from 'lazy-z';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, Modal, FilterableMultiSelect, MultiSelect, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
<<<<<<< HEAD
import { Information, Save, Add, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt } from '@carbon/icons-react';
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> ad3a1f9 (Migrated VpnGatewayForm + Documentation (Issue702) (#31))

<<<<<<< HEAD
var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue$2 = _require2.eventTargetToNameAndValue,
  toggleStateBoolean$2 = _require2.toggleStateBoolean,
  setNameToValue$2 = _require2.setNameToValue;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b982705 (feat: StatefulTabPanel)
=======
>>>>>>> b18f05c (added documentation for KeyManagementForm)

<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
function addClassName(className, props) {
  let composedClassName = className;
  if (props?.className) {
    composedClassName += " " + props.className;
    if (props.noMarginRight === true) {
      composedClassName = composedClassName.replace(/\s?marginRight\b/g, "");
    }
  }
  return composedClassName;
=======
=======

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
>>>>>>> b982705 (feat: StatefulTabPanel)
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
=======
}

/**
 * add default methods to component
 * @param {*} component React Component
 */
function buildFormDefaultInputMethods(component) {
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
>>>>>>> f19dfef (merge)
}
=======
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, FilterableMultiSelect, MultiSelect, Modal, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
>>>>>>> ee08088 (issue 700: transit gateway form)

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
=======
var css_248z$9 = ".iconMargin {\r\n  margin: 0 0.5rem -0.4rem 0;\r\n}\r\n\r\n.inlineIconMargin {\r\n  margin: -0.4rem 0.05rem;\r\n}\r\n\r\n.marginBottomXs {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.tileBackground {\r\n  background-color: #f4f4f4;\r\n}";
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
>>>>>>> 353b3a7 ($@)
styleInject(css_248z$9);
>>>>>>> b982705 (feat: StatefulTabPanel)

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
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
=======
var css_248z$a = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$a);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
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
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
=======
>>>>>>> c5662b8 (resolved export errors, moved MultiSelect and Tooltip playground code to backup files in playground/src)
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> f19dfef (merge)
=======
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 611854f (AccesGroupPolicyForm done)
=======
import { Information, Save, Add, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt } from '@carbon/icons-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1 } from 'lazy-z';
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, FilterableMultiSelect, MultiSelect, Modal, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1, contains } from 'lazy-z';
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, Modal, FilterableMultiSelect, MultiSelect, Tabs, TabList, Tab, TabPanels, TabPanel, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
=======
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1, contains } from 'lazy-z';
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, FilterableMultiSelect, MultiSelect, Modal, Tabs, TabList, Tab, TabPanels, TabPanel, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
import { Information, Save, Add, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt } from '@carbon/icons-react';
=======
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isEmpty, isNullOrEmptyString, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1, contains } from 'lazy-z';
=======
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1, contains, eachKey } from 'lazy-z';
>>>>>>> f849341 (access group forms :100:)
=======
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isEmpty, isNullOrEmptyString, buildNumberDropdownList, prettyJSON, parseIntFromZone, isFunction as isFunction$1, contains } from 'lazy-z';
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, capitalize, prettyJSON, parseIntFromZone, isFunction as isFunction$1, contains } from 'lazy-z';
>>>>>>> 007ab0d (cos bucket form)
import { Toggletip, ToggletipButton, ToggletipContent, Link, Popover, PopoverContent, Button, Toggle, TextInput, Select, SelectItem, Tile, Dropdown, FilterableMultiSelect, MultiSelect, Modal, Tabs, TabList, Tab, TabPanels, TabPanel, StructuredListWrapper, StructuredListHead, StructuredListRow, StructuredListCell, StructuredListBody } from '@carbon/react';
import { Information, Save, Add, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, CloudAlerting, WarningAlt } from '@carbon/icons-react';

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
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))

>>>>>>> 7d02243 (fix merge)
=======

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b8c07b (Documentation: Tooltips & Examples (Issue #675) (#12))
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
>>>>>>> b3a36f0 (changes pt. 1)
=======
>>>>>>> f19dfef (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
=======
import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CloudAlerting, Add, Information, WarningAlt } from '@carbon/icons-react';
import { Tile, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, Modal, FilterableMultiSelect, MultiSelect, Popover, PopoverContent } from '@carbon/react';
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
import { CloudAlerting, Add, Information, WarningAlt, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown } from '@carbon/icons-react';
import { Tile, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, Modal, FilterableMultiSelect, MultiSelect, Popover, PopoverContent, Button } from '@carbon/react';
>>>>>>> b5b1ac6 (fixed build)
=======
import { CloudAlerting, Add, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, Information, WarningAlt } from '@carbon/icons-react';
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, Modal, FilterableMultiSelect, MultiSelect } from '@carbon/react';
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
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
<<<<<<< HEAD
>>>>>>> 8655315 (changes (exports, readme, example))
import { Information, WarningAlt, CloudAlerting, Add } from '@carbon/icons-react';

>>>>>>> 8db187e (form and documentation)
=======
=======
=======
import lazyZ, { snakeCase, titleCase, isBoolean, kebabCase as kebabCase$1, prettyJSON, isNullOrEmptyString, isEmpty, buildNumberDropdownList } from 'lazy-z';
>>>>>>> 28f2e52 (code now)
=======
>>>>>>> b6eab56 (example and readme)
import React, { Component } from 'react';
import { CloudAlerting, Add, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, Information, WarningAlt } from '@carbon/icons-react';
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, Toggle, TextInput, Dropdown, Select, SelectItem, Modal, FilterableMultiSelect, MultiSelect, Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import lazyZ, { snakeCase, titleCase, isBoolean, kebabCase as kebabCase$1, prettyJSON, isNullOrEmptyString, isEmpty, buildNumberDropdownList } from 'lazy-z';
>>>>>>> 72d0b85 (merge)
=======

=======
>>>>>>> f19dfef (merge)
=======
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
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
<<<<<<< HEAD
>>>>>>> 611854f (AccesGroupPolicyForm done)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1,
  invalidRegex: invalidRegex$1
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
<<<<<<< HEAD
var lib_9 = lib.setNameToValue;
>>>>>>> 28f2e52 (code now)
=======
import React, { Component } from 'react';
import { CloudAlerting, Add, Save, CloseFilled, Edit, TrashCan, ArrowUp, ArrowDown, Information, WarningAlt } from '@carbon/icons-react';
import { Tile, Popover, PopoverContent, Button, Toggletip, ToggletipButton, ToggletipContent, Link, TextInput, Toggle, Select, SelectItem, Modal, FilterableMultiSelect, MultiSelect } from '@carbon/react';
import PropTypes from 'prop-types';
import lazyZ, { snakeCase, titleCase, isBoolean, kebabCase as kebabCase$1, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON } from 'lazy-z';
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))

<<<<<<< HEAD
const {
  isFunction
} = require("lazy-z");
const {
  eventTargetToNameAndValue: eventTargetToNameAndValue$2,
  toggleStateBoolean: toggleStateBoolean$2,
  setNameToValue: setNameToValue$2
} = require("../src/lib/method-functions");
=======
>>>>>>> dc1cdcb (arrayOf)
=======
import lazyZ, { snakeCase, kebabCase as kebabCase$1, titleCase, isBoolean, isNullOrEmptyString, isEmpty, buildNumberDropdownList, prettyJSON, isFunction as isFunction$1 } from 'lazy-z';

var _require = require("lazy-z"),
  isFunction = _require.isFunction;
var _require2 = require("../src/lib/method-functions"),
  eventTargetToNameAndValue$2 = _require2.eventTargetToNameAndValue,
  toggleStateBoolean$2 = _require2.toggleStateBoolean,
  setNameToValue$2 = _require2.setNameToValue;
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
<<<<<<< HEAD
<<<<<<< HEAD
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let disableSave = isFunction(component.props.shouldDisableSave);
=======
  var disableSubmit = isFunction(component.props.shouldDisableSubmit);
  var disableSave = isFunction(component.props.shouldDisableSave);
>>>>>>> dc1cdcb (arrayOf)
=======
  var disableSubmit = isFunction(component.props.shouldDisableSubmit);
  var disableSave = isFunction(component.props.shouldDisableSave);
>>>>>>> 4c7a274 (fixed formatting for docs)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  component.eventTargetToNameAndValue = lib_7.bind(component);
  component.toggleStateBoolean = lib_8.bind(component);
  component.setNameToValue = lib_9.bind(component);
=======
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
>>>>>>> dc1cdcb (arrayOf)
=======
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
>>>>>>> b6eab56 (example and readme)
=======
  component.eventTargetToNameAndValue = eventTargetToNameAndValue$2.bind(component);
  component.toggleStateBoolean = toggleStateBoolean$2.bind(component);
  component.setNameToValue = setNameToValue$2.bind(component);
>>>>>>> 4c7a274 (fixed formatting for docs)
}
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 7d02243 (fix merge)
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

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
var css_248z$8 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$8);
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> dc1cdcb (arrayOf)
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> b6eab56 (example and readme)
=======
var css_248z$9 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$9);
>>>>>>> 4c7a274 (fixed formatting for docs)

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

var EmptyResourceTile = function EmptyResourceTile(props) {
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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
<<<<<<< HEAD
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  toggleMarginBottom: toggleMarginBottom$1
=======
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
>>>>>>> 72d0b85 (merge)
=======
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
>>>>>>> dc1cdcb (arrayOf)
=======
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
>>>>>>> b6eab56 (example and readme)
=======
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
>>>>>>> 4c7a274 (fixed formatting for docs)
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

/**
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

/**
>>>>>>> b5b1ac6 (fixed build)
=======

/**
>>>>>>> 72d0b85 (merge)
=======

/**
>>>>>>> dc1cdcb (arrayOf)
=======

/**
>>>>>>> b6eab56 (example and readme)
=======

/**
>>>>>>> 4c7a274 (fixed formatting for docs)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  eventTargetToNameAndValue: eventTargetToNameAndValue$2,
  toggleStateBoolean: toggleStateBoolean$2,
  setNameToValue: setNameToValue$2
<<<<<<< HEAD
<<<<<<< HEAD
});

const {
  isFunction
} = require("lazy-z");

<<<<<<< HEAD
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

=======
>>>>>>> b5b1ac6 (fixed build)
const {
  toggleMarginBottom,
  addClassName
=======
=======
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
>>>>>>> dc1cdcb (arrayOf)
=======
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
>>>>>>> b6eab56 (example and readme)
=======
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
>>>>>>> 4c7a274 (fixed formatting for docs)
};

const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
} = formUtils;
const {
  formatInputPlaceholder
} = textUtils;
const {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  saveChangeButtonClass
} = buttonUtils;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const {
  buildFormFunctions,
  buildFormDefaultInputMethods
} = componentUtils;
>>>>>>> 8db187e (form and documentation)
=======
>>>>>>> 8655315 (changes (exports, readme, example))
=======
>>>>>>> b5b1ac6 (fixed build)
var lib = {
  toggleMarginBottom,
  addClassName,
  formatInputPlaceholder,
<<<<<<< HEAD
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
=======
=======
=======
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
  saveChangeButtonClass
} = buttonUtils;
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
} = methodFunctions;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var lib = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  formatInputPlaceholder,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)
  saveChangeButtonClass,
<<<<<<< HEAD
  eventTargetToNameAndValue: eventTargetToNameAndValue$1,
  toggleStateBoolean: toggleStateBoolean$1,
  setNameToValue: setNameToValue$1
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
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
=======
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
  saveChangeButtonClass,
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> b6eab56 (example and readme)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
};
var lib_1 = lib.toggleMarginBottom;
var lib_2 = lib.addClassName;
var lib_3 = lib.prependEmptyStringWhenNull;
var lib_5 = lib.formatInputPlaceholder;
var lib_6 = lib.saveChangeButtonClass;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 72d0b85 (merge)

<<<<<<< HEAD
=======
>>>>>>> 28f2e52 (code now)
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
=======
var css_248z$7 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
=======
var lib_7 = lib.eventTargetToNameAndValue;
var lib_8 = lib.toggleStateBoolean;
=======
var lib_10 = lib.invalidScc;
>>>>>>> 4fb645f (moved to lib with tests)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var lib_10 = lib.invalidRegex;
>>>>>>> 55b6519 (rename function and fix imports)

var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$9);

<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 10px;\n}";
<<<<<<< HEAD
>>>>>>> b6eab56 (example and readme)
styleInject(css_248z$7);
=======
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);
>>>>>>> b982705 (feat: StatefulTabPanel)
=======

var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);
>>>>>>> dc1cdcb (arrayOf)

<<<<<<< HEAD
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 10px;\n}";
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var css_248z$7 = ".popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  font-size: 80%;\r\n  z-index: 9001;\r\n  top: 10px;\r\n}";
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> f680a35 (almost done)
=======
var lib_10 = lib.invalidRegex;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 353b3a7 ($@)
var css_248z$8 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$8);

var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
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

var css_248z$9 = ".labelRow {\r\n  display: inline-flex !important;\r\n  align-items: center;\r\n}\r\n\r\n.tooltip > div div.cds--password-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--toggle {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--text-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.popover-obj {\r\n  margin-top: -8px;\r\n}\r\n\r\n.subHeadingTooltip {\r\n  margin: 0.2rem 0 0 0.2rem;\r\n}\r\n\r\n.tooltipMarginLeft {\r\n  margin-left: 3px;\r\n}\r\n";
styleInject(css_248z$9);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$b = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
styleInject(css_248z$b);

var css_248z$a = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$a);
>>>>>>> 01e0136 (classNames now as default prop (#40))

=======
var css_248z$b = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
=======
var css_248z$b = ".displayFlex {\r\n  display: flex;\r\n}\r\n\r\n.fitContent {\r\n  width: fit-content;\r\n}\r\n\r\n.alignItemsCenter {\r\n  align-items: center;\r\n}\r\n\r\n.widthOneHundredPercent {\r\n  width: 100%;\r\n}\r\n\r\n.marginBottom {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.marginBottomSmall {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.evenSpacing {\r\n  gap: 3vw;\r\n}\r\n\r\n.positionRelative {\r\n  position: relative;\r\n}\r\n\r\n.formInSubForm {\r\n  margin-top: 0rem;\r\n  background: #fffdfd;\r\n  padding: 1rem;\r\n}\r\n\r\n.subForm {\r\n  background: #f4f4f4;\r\n  padding: 1rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.icseFormTitleMinHeight {\r\n  min-height: 32px;\r\n}\r\n\r\n.spaceBetween {\r\n  justify-content: space-between;\r\n}\r\n";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$b);

var css_248z$a = ".labelRow {\r\n  display: inline-flex !important;\r\n  align-items: center;\r\n}\r\n\r\n.tooltip > div div.cds--password-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--toggle {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--text-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.popover-obj {\r\n  margin-top: -8px;\r\n}\r\n\r\n.subHeadingTooltip {\r\n  margin: 0.2rem 0 0 0.2rem;\r\n}\r\n\r\n.tooltipMarginLeft {\r\n  margin-left: 3px;\r\n}\r\n";
styleInject(css_248z$a);

>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
/**
 * Render a form (duplicate from utils to prevent circular dependencies)
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm$1(form, formProps) {
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
}

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React.createElement(Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
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
var BuildToolTip = function BuildToolTip(props) {
  var _props$tooltip;
  return /*#__PURE__*/React.createElement(IcseToolTip, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired
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
var DynamicToolTipWrapper = function DynamicToolTipWrapper(props) {
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$7 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
>>>>>>> b9aa481 (feat: object storage key form)
=======
>>>>>>> 353b3a7 ($@)
styleInject(css_248z$7);
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
var css_248z$9 = ".displayFlex {\n  display: flex;\n}\n\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent {\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n\n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.icseFormTitleMinHeight {\n  min-height: 32px;\n}\n\n.spaceBetween {\n  justify-content: space-between;\n}\n";
=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
styleInject(css_248z$9);

var css_248z$8 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  z-index: 9001;\n  top: 20px;\n}\n";
styleInject(css_248z$8);
>>>>>>> 817ead3 (update build)

=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
=======
var css_248z$9 = ".popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  font-size: 80%;\r\n  top: 20px;\r\n}\r\n\r\n.cds--popover--open .cds--popover-content {\r\n  position: relative;\r\n  z-index: 9001;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$6 = ".chevron {\r\n  margin-right: 1rem;\r\n  margin-top: 0.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.popover-box {\r\n  padding: 5px;\r\n  position: relative;\r\n  z-index: 9001; /* navbar is 9000 */\r\n  font-size: 80%;\r\n}\r\n\r\n.tertiaryButtonColors {\r\n  color: #0f62fe !important;\r\n  fill: white !important;\r\n  border-color: #0f62fe !important;\r\n}\r\n\r\n.pointerEventsNone {\r\n  pointer-events: none;\r\n}\r\n\r\n.cursorNotAllowed {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.forceTertiaryButtonStyles {\r\n  padding-right: 0.4375rem !important;\r\n  padding-left: 0.4375rem !important;\r\n}\r\n.inlineBlock {\r\n  display: inline-block;\r\n}\r\n\r\n.redFill {\r\n  fill: #da1e28 !important;\r\n}\r\n\r\n/* CSS for overriding default component styles */\r\n.cds--btn--ghost:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.marginRightSmall {\r\n  margin-right: 0.5rem;\r\n}\r\n";
=======
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> b9aa481 (feat: object storage key form)
styleInject(css_248z$6);
=======
var css_248z$7 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
=======
var css_248z$7 = ".chevron {\r\n  margin-right: 1rem;\r\n  margin-top: 0.25rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.tertiaryButtonColors {\r\n  color: #0f62fe !important;\r\n  fill: white !important;\r\n  border-color: #0f62fe !important;\r\n}\r\n\r\n.pointerEventsNone {\r\n  pointer-events: none;\r\n}\r\n\r\n.cursorNotAllowed {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.forceTertiaryButtonStyles {\r\n  padding-right: 0.4375rem !important;\r\n  padding-left: 0.4375rem !important;\r\n}\r\n.inlineBlock {\r\n  display: inline-block;\r\n}\r\n\r\n.redFill {\r\n  fill: #da1e28 !important;\r\n}\r\n\r\n/* CSS for overriding default component styles */\r\n.cds--btn--ghost:focus {\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.marginRightSmall {\r\n  margin-right: 0.5rem;\r\n}\r\n";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$7);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$7 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
styleInject(css_248z$7);
>>>>>>> 7d02243 (fix merge)
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
var SaveAddButton = function SaveAddButton(props) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : ""),
    align: props.hoverTextAlign
  }, /*#__PURE__*/React.createElement(Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
<<<<<<< HEAD
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
=======
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
>>>>>>> dc1cdcb (arrayOf)
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
  disabled: false,
  hoverTextAlign: "bottom"
};
SaveAddButton.propTypes = {
  hoverText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
  hoverTextAlign: PropTypes.string.isRequired
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
  var icon = props.open ? /*#__PURE__*/React.createElement(CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(Edit, null);
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
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
var DeleteButton = function DeleteButton(props) {
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
  disabled: false
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
 * @param {Function} props.handleUp
 * @param {Function} props.handleDown
 *
 */
var UpDownButtons = function UpDownButtons(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
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
=======
var css_248z$9 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n  top: 20px;\n}\n\n.cds--popover--open .cds--popover-content {\n  position: relative;\n  z-index: 9001;\n}";
styleInject(css_248z$9);
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.popover-box {\n  padding: 5px;\n  position: relative;\n  z-index: 9001; /* navbar is 9000 */\n  font-size: 80%;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
=======
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> f680a35 (almost done)
=======
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> f19dfef (merge)
=======
var css_248z$6 = ".chevron {\n  margin-right: 1rem;\n  margin-top: 0.25rem;\n  cursor: pointer;\n}\n\n.tertiaryButtonColors {\n  color: #0f62fe !important;\n  fill: white !important;\n  border-color: #0f62fe !important;\n}\n\n.pointerEventsNone {\n  pointer-events: none;\n}\n\n.cursorNotAllowed {\n  cursor: not-allowed;\n}\n\n.forceTertiaryButtonStyles {\n  padding-right: 0.4375rem !important;\n  padding-left: 0.4375rem !important;\n}\n.inlineBlock {\n  display: inline-block;\n}\n\n.redFill {\n  fill: #da1e28 !important;\n}\n\n/* CSS for overriding default component styles */\n.cds--btn--ghost:focus {\n  outline: none;\n  border: none;\n  box-shadow: none;\n}\n\n.marginRightSmall {\n  margin-right: 0.5rem;\n}\n";
>>>>>>> 353b3a7 ($@)
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

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
var SaveIcon = function SaveIcon(props) {
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
var SaveAddButton = function SaveAddButton(props) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> f19dfef (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : ""),
    align: props.hoverTextAlign
  }, /*#__PURE__*/React.createElement(Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
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
  disabled: false,
  hoverTextAlign: "bottom"
};
SaveAddButton.propTypes = {
  hoverText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
  hoverTextAlign: PropTypes.string.isRequired
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
  var icon = props.open ? /*#__PURE__*/React.createElement(CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(Edit, null);
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
 * @param {Function} props.onClick onclick function
 * @param {string} props.name classname
 *
 */
var DeleteButton = function DeleteButton(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "delete-area"
  }, /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.disabled ? props.disableDeleteMessage : "Delete Resource",
    align: props.hoverTextAlign,
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
  hoverTextAlign: "bottom"
};
DeleteButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hoverTextAlign: PropTypes.string.isRequired
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
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

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
function RenderForm(form, formProps) {
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
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
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2("displayFlex alignItemsCenter widthOneHundredPercent ".concat(lib_1(props.hide)), props)
  }, props.children);
};
TitleGroup.defaultProps = {
  hide: true
};
TitleGroup.propTypes = {
  children: PropTypes.node.isRequired
};
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
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
var IcseSubForm = function IcseSubForm(props) {
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
var IcseHeading = function IcseHeading(props) {
  var titleFormDivClass = props.toggleFormTitle ? "" : props.name === "" ? "" : " icseFormTitleMinHeight";
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2("displayFlex spaceBetween widthOneHundredPercent alignItemsCenter", props) + titleFormDivClass
  }, /*#__PURE__*/React.createElement(DynamicToolTipWrapper, {
    tooltip: props.tooltip,
    noLabelText: props.noLabelText,
    id: props.name,
    innerForm: function innerForm() {
      return props.type === "subHeading" ? /*#__PURE__*/React.createElement("h5", null, props.name) : props.type === "p" ? /*#__PURE__*/React.createElement("p", null, props.name) : /*#__PURE__*/React.createElement("h4", null, props.name);
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
  className: PropTypes.string
};

/**
 * All of the toggle form functionality without injecting anything on render
 */
var StatelessToggleForm = function StatelessToggleForm(props) {
  return props.hideTitle ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TitleGroup, {
    hide: props.hide,
    props: props,
    className: props.className
  }, props.hideIcon !== true && /*#__PURE__*/React.createElement(EditCloseIcon, {
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
  name: "Stateless Toggle Form"
};
StatelessToggleForm.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool.isRequired,
  iconType: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
  subHeading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  buttons: PropTypes.node,
  toggleFormTitle: PropTypes.bool,
  alwaysShowButtons: PropTypes.bool
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
var css_248z$5 = ".labelRow {\r\n  display: inline-flex !important;\r\n  align-items: center;\r\n}\r\n\r\n.tooltip > div div.cds--password-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--toggle {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.cds--text-input-wrapper {\r\n  margin-top: -8px;\r\n}\r\n\r\n.tooltip.popover-obj {\r\n  margin-top: -8px;\r\n}\r\n\r\n.subHeadingTooltip {\r\n  margin: 0.2rem 0 0 0.2rem;\r\n}\r\n\r\n.tooltipMarginLeft {\r\n  margin-left: 3px;\r\n}\r\n";
=======
var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> f19dfef (merge)
=======
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
>>>>>>> b9aa481 (feat: object storage key form)
=======
var css_248z$5 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
>>>>>>> 353b3a7 ($@)
styleInject(css_248z$5);
=======
var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$6 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$6);
>>>>>>> 817ead3 (update build)

<<<<<<< HEAD
/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React.createElement(Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
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
var BuildToolTip = function BuildToolTip(props) {
  var _props$tooltip;
  return /*#__PURE__*/React.createElement(IcseToolTip, {
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired
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
var DynamicToolTipWrapper = function DynamicToolTipWrapper(props) {
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$4 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.leftTextAlign {\r\n  text-align: left;\r\n}";
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
>>>>>>> 353b3a7 ($@)
styleInject(css_248z$4);
=======
var css_248z$5 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$5);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> b6eab56 (example and readme)
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 1e428a4 (SecretsManager form)
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$4);

=======
>>>>>>> b9aa481 (feat: object storage key form)
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> f19dfef (merge)
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
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$7);

<<<<<<< HEAD
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var css_248z$7 = ".fieldWidth {\n  width: 14rem;\n}\n\n.leftTextAlign {\n  text-align: left;\n}";
styleInject(css_248z$7);

<<<<<<< HEAD
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> f849341 (access group forms :100:)
=======
const IcseToggle = props => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
var css_248z$7 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.leftTextAlign {\r\n  text-align: left;\r\n}";
styleInject(css_248z$7);

var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
>>>>>>> 007ab0d (cos bucket form)
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(Toggle, {
    labelA: props.useOnOff ? "Off" : "False",
    labelB: props.useOnOff ? "On" : "True",
    labelText: props.tooltip ? " " : props.labelText,
    id: kebabCase$1(toggleName) + "-icse-toggle-" + props.id,
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
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
=======
var IcseToggle = function IcseToggle(props) {
  var toggleName = props.toggleFieldName || snakeCase(props.labelText);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    innerForm: function innerForm() {
      return /*#__PURE__*/React.createElement(Toggle, {
        labelA: props.useOnOff ? "Off" : "False",
        labelB: props.useOnOff ? "On" : "True",
        labelText: props.tooltip ? "" : props.labelText,
        "aria-labelledby": props.labelText,
        id: kebabCase$1(toggleName) + "-icse-toggle-" + props.id,
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
>>>>>>> f19dfef (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
var IcseTextInput = function IcseTextInput(props) {
  var fieldName = titleCase(props.field);
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, props, /*#__PURE__*/React.createElement(TextInput, {
    id: props.id,
    className: lib_2("leftTextAlign", props),
    labelText: props.labelText ? props.labelText : titleCase(props.field),
<<<<<<< HEAD
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
>>>>>>> f19dfef (merge)
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 7d02243 (fix merge)
=======
    placeholder: props.placeholder || lib_5(props.componentName, fieldName),
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
    name: props.field,
    value: props.value || "",
    invalid: isBoolean(props.invalid) ? props.invalid : props.invalidCallback(),
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
var IcseNameInput = function IcseNameInput(props) {
  var helperText = "";
  // if helper text is not hidden
  if (!props.hideHelperText && !props.useData) {
    helperText = props.helperTextCallback();
  }
  return /*#__PURE__*/React.createElement(IcseTextInput, _extends({}, props, {
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
var css_248z$3 = ".fieldWidthSmaller {\r\n  width: 11rem;\r\n}";
=======
=======
=======
var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);
>>>>>>> 817ead3 (update build)

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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(React.Component);
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
SccForm.defaultProps = {
  data: {
    enable_scc: false
  },
  scopeNameRegex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string
  }),
  scopeNameRegex: PropTypes.instanceOf(RegExp).isRequired,
  descriptionRegex: PropTypes.instanceOf(RegExp).isRequired
};

>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
var IcseSelect = function IcseSelect(props) {
  var invalid =
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
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
  : lib_3(
  // otherwise try and prepend empty string if null
  props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    id: kebabCase$1(props.name) + "-dropdown-tooltip",
    innerForm: function innerForm() {
      return /*#__PURE__*/React.createElement(PopoverWrapper, {
        hoverText: props.value || ""
        // inherit classnames from tooltip
        ,
        className: props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
      }, /*#__PURE__*/React.createElement(Select, {
        id: kebabCase$1(props.formName + " " + props.name),
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
        return /*#__PURE__*/React.createElement(SelectItem, {
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
      if (isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(function (res) {
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
      return /*#__PURE__*/React.createElement(IcseSelect, {
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
}(React.Component);
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
var IcseNumberSelect = function IcseNumberSelect(props) {
  return /*#__PURE__*/React.createElement(IcseSelect, {
    formName: props.formName,
    groups: buildNumberDropdownList(props.max, props.min),
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
var EntitlementSelect = function EntitlementSelect(props) {
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
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        name: "role",
        groups: ["Object Writer", "Object Reader", "Content Reader", "Reader", "Writer", "Manager"],
        value: this.state.role,
        labelText: "Role",
        handleInputChange: this.handleInputChange,
        className: inputSize,
        formName: this.state.data + "-cos-key"
      }), /*#__PURE__*/React.createElement(IcseToggle, {
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
}(Component);
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
      id: this.state.name,
      componentName: this.state.name,
      value: this.state.name,
      onChange: this.handleInputChange,
      helperTextCallback: () => this.props.composedNameCallback(this.state),
      invalid: this.props.invalidCallback(this.state),
      invalidText: this.props.invalidTextCallback(this.state)
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: "Object Storage Bucket",
      name: "storage_class",
      groups: ["Standard", "Vault", "Cold", "Smart"],
      value: capitalize(this.state.storage_class),
      labelText: "Bucket Class",
      handleInputChange: this.handleStorageClassChange
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
      component: this.state.name,
      formName: "Object Storage Bucket",
      name: "kms_key",
      groups: this.props.encryptionKeys,
      value: this.state.kms_key,
      labelText: "Encryption Key",
      handleInputChange: this.handleInputChange
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
    kms_key: ""
  },
  encryptionKeys: [],
  parentHasRandomSuffix: true
};
ObjectStorageBucketForm.propTypes = {
  data: PropTypes.shape({
    force_delete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    storage_class: PropTypes.string.isRequired,
    kms_key: PropTypes.string
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  parentHasRandomSuffix: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f433c72 (fix: remove unused params)
var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
>>>>>>> f19dfef (merge)
styleInject(css_248z$3);
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
=======
var css_248z$4 = ".fieldWidthSmaller {\r\n  width: 11rem;\r\n}";
>>>>>>> ee08088 (issue 700: transit gateway form)
styleInject(css_248z$4);
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
var css_248z$4 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$4);
>>>>>>> 7d02243 (fix merge)
=======
var css_248z$5 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
=======
var css_248z$5 = ".fieldWidthSmaller {\r\n  width: 11rem;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$5);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(React.Component);
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

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
var sccRegions = [{
>>>>>>> 7d02243 (fix merge)
=======
var sccRegions = [{
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
>>>>>>> f19dfef (merge)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
      var _this2 = this;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
<<<<<<< HEAD
<<<<<<< HEAD
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
      ariaLabel: "Dropdown",
      id: "location_id",
      items: sccRegions,
      label: "SCC Region Options",
      titleText: "Region",
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
    }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
SccForm.defaultProps = {
  data: {
    enable_scc: false
  },
  scopeNameRegex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string
  }),
  scopeNameRegex: PropTypes.instanceOf(RegExp).isRequired,
  descriptionRegex: PropTypes.instanceOf(RegExp).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4fb645f (moved to lib with tests)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var IcseSelect = function IcseSelect(props) {
  var invalid =
=======
const IcseSelect = props => {
  let invalid =
>>>>>>> 061a17e (removed resourceGroups from state, added proptypes, removed ResourceGroupSelect)
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString(props.value) ? true : props.invalid;
  let groups = props.groups.length === 0 ? [] // if no groups, empty array
=======
=======
>>>>>>> b9aa481 (feat: object storage key form)
var IcseSelect = function IcseSelect(props) {
  var invalid =
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
>>>>>>> f19dfef (merge)
  : lib_3(
  // otherwise try and prepend empty string if null
  props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
    id: kebabCase$1(props.name) + "-dropdown-tooltip",
<<<<<<< HEAD
    innerForm: () => {
=======
    innerForm: function innerForm() {
>>>>>>> f19dfef (merge)
      return /*#__PURE__*/React.createElement(PopoverWrapper, {
        hoverText: props.value || ""
        // inherit classnames from tooltip
        ,
        className: props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
      }, /*#__PURE__*/React.createElement(Select, {
        id: kebabCase$1(props.formName + " " + props.name),
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
      }, groups.map(value => /*#__PURE__*/React.createElement(SelectItem, {
        key: `${props.id}-${value}`,
        text: value,
        value: value
      }))));
=======
      }, groups.map(function (value) {
        return /*#__PURE__*/React.createElement(SelectItem, {
          key: "".concat(props.id, "-").concat(value),
          text: value,
          value: value
        });
      })));
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
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
      if (isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(function (res) {
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
>>>>>>> f19dfef (merge)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      var _this2 = this;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool.isRequired,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string
  }),
  invalidSccScopeName: PropTypes.func.isRequired,
  invalidSccScopeDescription: PropTypes.func.isRequired,
  invalidSccCollectorDescription: PropTypes.func.isRequired
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> f19dfef (merge)
      return /*#__PURE__*/React.createElement(IcseSelect, {
        labelText: this.props.labelText,
        handleInputChange: this.props.handleInputChange,
        name: this.props.name,
        className: this.props.className,
        formName: this.props.formName,
        groups: this.dataToGroups(),
        value: this.props.value || "null"
<<<<<<< HEAD
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
    return /*#__PURE__*/React.createElement(IcseSelect, {
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
      });
    }
  }]);
  return FetchSelect;
}(React.Component);
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
const IcseNumberSelect = props => {
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> f19dfef (merge)
  return /*#__PURE__*/React.createElement(IcseSelect, {
    formName: props.formName,
    groups: buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
<<<<<<< HEAD
    handleInputChange: event => {
      // set name target value and parse int
      let sendEvent = {
=======
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
const EntitlementSelect = props => {
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> f19dfef (merge)
  return /*#__PURE__*/React.createElement(IcseSelect, {
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
  value: PropTypes.string,
  // can be null
  handleInputChange: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

/**
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f19dfef (merge)
=======
/**
>>>>>>> 7d02243 (fix merge)
=======
/**
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
}(Component);
SecretsManagerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    kms_key_name: PropTypes.string
  }).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
/**
<<<<<<< HEAD
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> f19dfef (merge)
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
      }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseToggle, {
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
      }), /*#__PURE__*/React.createElement(IcseToggle, {
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
}(Component);
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    interval_month: PropTypes.number.isRequired,
    root_key: PropTypes.bool.isRequired,
    force_delete: PropTypes.bool
  }).isRequired,
  isModal: PropTypes.bool.isRequired
<<<<<<< HEAD
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
=======
};

/**
>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
>>>>>>> 8fb616a (added docs)
=======
>>>>>>> f19dfef (merge)
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    return _this;
<<<<<<< HEAD
<<<<<<< HEAD
=======
class AtrackerForm extends Component {
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
=======
>>>>>>> f19dfef (merge)
  }

  /**
   * handle input change
   * @param {event} event event
   */
<<<<<<< HEAD
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
=======
  _createClass(KeyManagementForm, [{
>>>>>>> f19dfef (merge)
    key: "handleInputChange",
    value: function handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
    }
<<<<<<< HEAD
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
    return /*#__PURE__*/React.createElement("div", {
      id: "atracker-form"
    }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
      componentName: "Activity Tracker",
      field: "Name",
      labelText: "Name",
      className: "fieldWidth",
      value: this.props.prefix + "-atracker",
      onChange: this.handleInputChange,
      readOnly: true,
      id: "atracker-name",
      invalid: false
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Activity Tracker",
      value: this.state.resource_group,
      groups: this.props.resourceGroups,
      handleInputChange: this.handleInputChange,
      className: "fieldWidth",
      name: "resource_group",
      labelText: "Resource Group"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
    }), /*#__PURE__*/React.createElement(IcseToggle, {
      tooltip: {
        content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
      },
      labelText: "Create Activity Tracker Route",
      defaultToggled: this.state.add_route,
      toggleFieldName: "add_route",
      onToggle: this.handleToggle,
      id: "app-id-add-route"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseSelect, {
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
=======

>>>>>>> f19dfef (merge)
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
<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
=======

>>>>>>> 8fb616a (added docs)
=======
>>>>>>> f19dfef (merge)
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
      this.setState(this.toggleStateBoolean(name, this.state));
=======
      this.setState(_defineProperty({}, name, !this.state[name]));
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
      this.setState(this.toggleStateBoolean(name, this.state));
>>>>>>> 8fb616a (added docs)
=======
      this.setState(_defineProperty({}, name, !this.state[name]));
>>>>>>> f19dfef (merge)
    }
  }, {
    key: "render",
    value: function render() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8fb616a (added docs)
=======
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
        id: "kms-existing"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseNameInput, {
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
      })));
    }
  }]);
  return KeyManagementForm;
}(Component);
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
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

<<<<<<< HEAD
=======
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
      return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
        id: composedId + "-email",
        componentName: "teleport-claim",
        field: "email",
        invalid: !this.state.email.match(emailRegex),
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.onChangeTextInput("email", event.target.value);
        },
        className: "fieldWidth"
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
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

>>>>>>> 817ead3 (update build)
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
      this.setState(this.toggleStateBoolean(name, this.state));
    }
  }, {
    key: "render",
    value: function render() {
>>>>>>> f19dfef (merge)
      return /*#__PURE__*/React.createElement("div", {
        id: "atracker-form"
      }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
        componentName: "Activity Tracker",
        field: "Name",
        labelText: "Name",
        className: "fieldWidth",
        value: this.props.prefix + "-atracker",
        onChange: this.handleInputChange,
        readOnly: true,
        id: "atracker-name",
        invalid: false
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        formName: "Activity Tracker",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
      }), /*#__PURE__*/React.createElement(IcseToggle, {
        tooltip: {
          content: "Must be enabled in order to forward all logs to the Cloud Object Storage bucket"
        },
        labelText: "Create Activity Tracker Route",
        defaultToggled: this.state.add_route,
        toggleFieldName: "add_route",
        onToggle: this.handleToggle,
        id: "app-id-add-route"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseSelect, {
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
}(Component);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 1e428a4 (SecretsManager form)
=======
>>>>>>> f680a35 (almost done)
=======
>>>>>>> 8fb616a (added docs)
=======
>>>>>>> f19dfef (merge)
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
  data: PropTypes.shape({
    collector_bucket_name: PropTypes.string.isRequired,
    atracker_key: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    add_route: PropTypes.bool.isRequired
  }).isRequired,
  prefix: PropTypes.string.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  cosKeys: PropTypes.array.isRequired,
  cosBuckets: PropTypes.array.isRequired,
=======
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
>>>>>>> dc1cdcb (arrayOf)
  isModal: PropTypes.bool.isRequired
};

<<<<<<< HEAD
=======
      var _this2 = this;
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseNameInput, {
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
      }), /*#__PURE__*/React.createElement(ResourceGroupSelect, {
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
}(Component);
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
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired
  }).isRequired
};

<<<<<<< HEAD
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired
};

>>>>>>> f19dfef (merge)
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
    _this.modalForm = /*#__PURE__*/React.createRef();
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
        }, this.props.show && React.Children.map(this.props.children, function (child) {
          return (
            /*#__PURE__*/
            // clone react child
            React.cloneElement(child, {
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
}(Component);
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
=======
var css_248z$3 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$3);
>>>>>>> 7d02243 (fix merge)

<<<<<<< HEAD
var css_248z$2 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$2);
=======
var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
>>>>>>> 817ead3 (update build)

/**
<<<<<<< HEAD
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
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React.createElement("strong", null, props.name);
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

var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
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
var css_248z$1 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);
>>>>>>> 817ead3 (update build)
=======
var css_248z$4 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$4);

var css_248z$3 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$3);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

/**
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
    id: props.id,
<<<<<<< HEAD
    className: lib_2("fieldWidth leftTextAlign cds--select", props),
=======
    className: lib_2("fieldWidth leftTextAlign", props),
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
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
var SubnetMultiSelect = function SubnetMultiSelect(props) {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
<<<<<<< HEAD
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name],
=======
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  vpc_name: PropTypes.string,
  // not required, `null` needs to be passed here
<<<<<<< HEAD
  subnets: PropTypes.object.isRequired,
=======
  subnets: PropTypes.array.isRequired,
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

/**
 * VPC List MultiSelect
 */
var VpcListMultiSelect = function VpcListMultiSelect(props) {
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
var css_248z$1 = ".popover-box {\n  padding: 5px;\n  position: relative;\n  font-size: 80%;\n}\n";
styleInject(css_248z$1);

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

=======
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> f19dfef (merge)
/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
};

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
var formUtils = {
  addClassName: addClassName$1,
  toggleMarginBottom: toggleMarginBottom$1,
  prependEmptyStringWhenNull: prependEmptyStringWhenNull$1,
  checkNullorEmptyString: checkNullorEmptyString$1
};

const {
  toggleMarginBottom,
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
var lib_3 = lib.prependEmptyStringWhenNull;

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

var css_248z$2 = ".displayFlex {\n  display: flex;\n}\n.fitContent {\n  width: fit-content;\n}\n\n.alignItemsCenter {\n  align-items: center;\n}\n\n.widthOneHundredPercent{\n  width: 100%;\n}\n\n.marginBottom {\n  margin-bottom: 2rem;\n}\n  \n.marginBottomSmall {\n  margin-bottom: 1rem;\n}\n\n.evenSpacing {\n  gap: 3vw;\n}\n\n.positionRelative {\n  position: relative;\n}\n\n.formInSubForm {\n  margin-top: 0rem;\n  background: #fffdfd;\n  padding: 1rem;\n}\n\n.subForm {\n  background: #f4f4f4;\n  padding: 1rem;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}";
styleInject(css_248z$2);

/**
<<<<<<< HEAD
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
=======
>>>>>>> 67351ff (Dropdowns components)
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
=======
  return /*#__PURE__*/React.createElement(form, _objectSpread2({}, formProps));
>>>>>>> b238572 (Dropdowns Documentation)
=======
  return /*#__PURE__*/React.createElement(form, {
    ...formProps
  });
>>>>>>> b3a36f0 (changes pt. 1)
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
=======
var TitleGroup = function TitleGroup(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2("displayFlex alignItemsCenter widthOneHundredPercent ".concat(lib_1(props.hide)), props)
>>>>>>> b238572 (Dropdowns Documentation)
=======
const TitleGroup = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: lib_2(`displayFlex alignItemsCenter widthOneHundredPercent ${lib_1(props.hide)}`, props)
>>>>>>> b3a36f0 (changes pt. 1)
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
=======
var IcseFormGroup = function IcseFormGroup(props) {
  var formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> b238572 (Dropdowns Documentation)
=======
const IcseFormGroup = props => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
>>>>>>> b3a36f0 (changes pt. 1)
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
=======
var IcseSubForm = function IcseSubForm(props) {
>>>>>>> b238572 (Dropdowns Documentation)
=======
const IcseSubForm = props => {
>>>>>>> b3a36f0 (changes pt. 1)
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
=======
var css_248z$1 = ".labelRow {\n  display: inline-flex !important;\n  align-items: center;\n}\n\n.tooltip > div div.cds--password-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.cds--toggle {\n  margin-top: -8px;\n}\n\n.tooltip.cds--text-input-wrapper {\n  margin-top: -8px;\n}\n\n.tooltip.popover-obj {\n  margin-top: -8px;\n}\n\n.subHeadingTooltip {\n  margin: 0.2rem 0 0 0.2rem;\n}\n\n.tooltipMarginLeft {\n  margin-left: 3px;\n}\n";
styleInject(css_248z$1);
>>>>>>> 67351ff (Dropdowns components)

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
=======
=======
>>>>>>> b238572 (Dropdowns Documentation)
var IcseToolTip = function IcseToolTip(props) {
  var link = /*#__PURE__*/React.createElement(Link, {
    onClick: function onClick() {
      return window.open(props.link, "_blank");
    }
<<<<<<< HEAD
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
=======
>>>>>>> b238572 (Dropdowns Documentation)
=======
const IcseToolTip = props => {
  let link = /*#__PURE__*/React.createElement(Link, {
    onClick: () => window.open(props.link, "_blank")
>>>>>>> b3a36f0 (changes pt. 1)
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
<<<<<<< HEAD
<<<<<<< HEAD
    link: props.tooltip?.link,
    align: props.isModal ? props.alignModal : props.align
=======
    link: (_props$tooltip = props.tooltip) === null || _props$tooltip === void 0 ? void 0 : _props$tooltip.link,
=======
    link: props.tooltip?.link,
>>>>>>> b3a36f0 (changes pt. 1)
    align: props.isModal ? props.tooltip.alignModal : props.tooltip.align
>>>>>>> b238572 (Dropdowns Documentation)
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8db187e (form and documentation)
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
  props.disableInvalid !== true && isNullOrEmptyString(props.value) ? true : props.invalid;
  let groups = props.groups.length === 0 ? [] // if no groups, empty array
=======
=======
>>>>>>> b6eab56 (example and readme)
var IcseSelect = function IcseSelect(props) {
  var invalid =
  // automatically set to invalid is is null or empty string and invalid not disabled
  props.disableInvalid !== true && isNullOrEmptyString(props.value) ? true : props.invalid;
  var groups = props.groups.length === 0 ? [] // if no groups, empty array
>>>>>>> 72d0b85 (merge)
  : lib_3(
  // otherwise try and prepend empty string if null
  props.value, props.groups);
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return /*#__PURE__*/React.createElement(DynamicToolTipWrapper, _extends({
<<<<<<< HEAD
<<<<<<< HEAD
    innerForm: () => {
=======
=======
    id: kebabCase$1(props.name) + "-dropdown-tooltip",
>>>>>>> e63c208 (fix value prop type warning)
    innerForm: function innerForm() {
>>>>>>> 72d0b85 (merge)
      return /*#__PURE__*/React.createElement(PopoverWrapper, {
        hoverText: props.value || ""
        // inherit classnames from tooltip
        ,
        className: props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
      }, /*#__PURE__*/React.createElement(Select, {
<<<<<<< HEAD
        id: kebabCase(props.formName + " " + props.name),
=======
        id: kebabCase$1(props.formName + " " + props.name),
>>>>>>> 72d0b85 (merge)
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
      }, groups.map(value => /*#__PURE__*/React.createElement(SelectItem, {
        key: `${props.id}-${value}`,
        text: value,
        value: value
      }))));
=======
      }, groups.map(function (value) {
        return /*#__PURE__*/React.createElement(SelectItem, {
          key: "".concat(props.id, "-").concat(value),
          text: value,
          value: value
        });
      })));
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
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
    return /*#__PURE__*/React.createElement(IcseSelect, {
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
      if (isEmpty(this.state.data)) fetch(this.props.apiEndpoint).then(function (res) {
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
      return /*#__PURE__*/React.createElement(IcseSelect, {
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
}(React.Component);
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
const IcseNumberSelect = props => {
=======
var IcseNumberSelect = function IcseNumberSelect(props) {
>>>>>>> 72d0b85 (merge)
  return /*#__PURE__*/React.createElement(IcseSelect, {
    formName: props.formName,
    groups: buildNumberDropdownList(props.max, props.min),
    value: props.value.toString(),
    name: props.name || "Icse Number Select",
    className: props.className,
<<<<<<< HEAD
    handleInputChange: event => {
      // set name target value and parse int
      let sendEvent = {
=======
    handleInputChange: function handleInputChange(event) {
      // set name target value and parse int
      var sendEvent = {
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
const EntitlementSelect = props => {
=======
var EntitlementSelect = function EntitlementSelect(props) {
>>>>>>> 72d0b85 (merge)
  return /*#__PURE__*/React.createElement(IcseSelect, {
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
  value: PropTypes.string,
  // can be null
  handleInputChange: PropTypes.func.isRequired,
  formName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

<<<<<<< HEAD
=======
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
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
      var fieldWidth = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name,
        component: "cos_keys",
        value: this.state.name,
        onChange: this.handleInputChange,
        componentProps: this.props,
        placeholder: "my-cos-key-name",
        random_suffix: this.props.parentHasRandomSuffix,
        className: fieldWidth,
        helperTextCallback: function helperTextCallback() {
          return _this2.props.composedNameCallback(_this2.state);
        },
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props)
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        component: this.props.data.name,
        name: "role",
        groups: ["Object Writer", "Object Reader", "Content Reader", "Reader", "Writer", "Manager"],
        value: this.state.role,
        labelText: "Role",
        handleInputChange: this.handleInputChange,
        className: fieldWidth
      }), /*#__PURE__*/React.createElement(IcseToggle, {
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
}(Component);
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

var css_248z$4 = ".iconMargin {\n  margin: 0 0.5rem -0.4rem 0;\n}\n\n.inlineIconMargin {\n  margin: -0.4rem 0.05rem;\n}\n\n.marginBottomXs {\n  margin-bottom: 0.5rem;\n}\n\n.tileBackground {\n  background-color: #f4f4f4;\n}";
styleInject(css_248z$4);

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

var EmptyResourceTile = function EmptyResourceTile(props) {
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

var css_248z$3 = ".fieldWidthSmaller {\n  width: 11rem;\n}";
styleInject(css_248z$3);
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
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(React.Component);
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(Dropdown, {
        ariaLabel: "Dropdown",
        id: "location_id",
        items: sccRegions,
        label: "SCC Region Options",
        titleText: "Region",
        onChange: function onChange(selectedItem) {
          _this2.handleLocationChange(selectedItem);
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
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
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
SccForm.defaultProps = {
  data: {
    enable_scc: false
  },
  scopeNameRegex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i
};
SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string
  }),
  scopeNameRegex: PropTypes.instanceOf(RegExp).isRequired,
  descriptionRegex: PropTypes.instanceOf(RegExp).isRequired
};

>>>>>>> b9aa481 (feat: object storage key form)
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
}(Component);
SecretsManagerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    kms_key_name: PropTypes.string
  }).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
};

<<<<<<< HEAD
var css_248z$2 = ".fieldWidth {\n  width: 14rem;\n}\n\n.fieldWidthSmaller {\n  width: 11rem;\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".leftTextAlign {\n  text-align: left;\n}\n";
styleInject(css_248z$1);
=======
var css_248z$4 = ".fieldWidth {\r\n  width: 14rem;\r\n}\r\n\r\n.fieldWidthSmaller {\r\n  width: 11rem;\r\n}\r\n";
styleInject(css_248z$4);

var css_248z$3 = ".leftTextAlign {\r\n  text-align: left;\r\n}\r\n";
styleInject(css_248z$3);
>>>>>>> 007ab0d (cos bucket form)

/**
=======
>>>>>>> 7d02243 (fix merge)
 * Icse multiselect template
 */
var IcseMultiSelect = function IcseMultiSelect(props) {
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
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
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
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
var SubnetMultiSelect = function SubnetMultiSelect(props) {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
    id: props.id + "-subnet-multiselect",
    className: props.className,
    titleText: "Subnets",
    name: props.name,
    label: props.label,
    items: isNullOrEmptyString(props.vpc_name) ? [] : props.subnets,
    initialSelectedItems: props.initialSelectedItems,
    invalidText: isNullOrEmptyString(props.vpc_name) ? "Select a VPC." : "Select at least one subnet.",
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
var VpcListMultiSelect = function VpcListMultiSelect(props) {
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
=======
>>>>>>> 007ab0d (cos bucket form)
var WorkerPoolForm = /*#__PURE__*/function (_Component) {
  _inherits(WorkerPoolForm, _Component);
  var _super = _createSuper(WorkerPoolForm);
  function WorkerPoolForm(props) {
    var _this;
    _classCallCheck(this, WorkerPoolForm);
    _this = _super.call(this, props);
    _this.state = {
      pool: _this.props.isModal ? {
<<<<<<< HEAD
        name: "",
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
        subnets: _this.props.cluster.subnets,
        vpc_name: _this.props.cluster.vpc_name,
        workers_per_subnet: _this.props.cluster.workers_per_subnet,
        entitlement: _this.props.cluster.entitlement
      } : _this.props.data
=======
class WorkerPoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: this.props.isModal ? {
        name: "",
        flavor: this.props.cluster.machine_type,
        subnets: this.props.cluster.subnets,
        vpc_name: this.props.cluster.vpc_name,
        workers_per_subnet: this.props.cluster.workers_per_subnet,
        entitlement: this.props.cluster.entitlement
      } : this.props.data
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
        name: "",
        flavor: _this.props.cluster.machine_type,
        subnets: _this.props.cluster.subnets,
        vpc_name: _this.props.cluster.vpc_name,
        workers_per_subnet: _this.props.cluster.workers_per_subnet,
        entitlement: _this.props.cluster.entitlement
      } : _this.props.data
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
      }), /*#__PURE__*/React.createElement(EntitlementSelect, {
        name: "entitlement",
        value: this.state.pool.entitlement,
        handleInputChange: this.handleInputChange,
        component: this.props.data.name,
        formName: "Worker Pools"
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        formName: "Worker Pools",
        name: "flavor",
        labelText: "Flavor Select",
        value: this.state.pool.flavor,
        groups: ["bx2.16x64", "bx2.2x8"],
        handleInputChange: this.handleInputChange,
        className: "fieldWidthSmaller"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SubnetMultiSelect, {
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
      }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
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
}(Component);
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
    }), /*#__PURE__*/React.createElement(EntitlementSelect, {
      name: "entitlement",
      value: this.state.pool.entitlement,
      handleInputChange: this.handleInputChange,
      component: this.props.data.name,
      formName: "Worker Pools"
    }), /*#__PURE__*/React.createElement(IcseSelect, {
      formName: "Worker Pools",
      name: "flavor",
      labelText: "Flavor Select",
      value: this.state.pool.flavor,
      groups: ["bx2.16x64", "bx2.2x8"],
      handleInputChange: this.handleInputChange,
      className: "fieldWidthSmaller"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(SubnetMultiSelect, {
      id: this.props.data.name,
      slz: this.props.slz,
      disabled: this.state.pool.vpc_name === null,
      vpc_name: this.state.pool.vpc_name,
      initialSelectedItems: this.props.data.subnets,
      subnets: this.props.subnetList,
      onChange: this.handleSubnetChange,
      component: this.props.data.name,
      className: "fieldWidthSmaller cds--form-item"
    }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
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
  isModal: PropTypes.bool.isRequired,
  cluster: PropTypes.shape({
<<<<<<< HEAD
    cos_name: PropTypes.string.isRequired,
    entitlement: PropTypes.string,
    // can be null
    kube_type: PropTypes.string.isRequired,
    kube_version: PropTypes.string.isRequired,
    machine_type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    kms_config: PropTypes.shape({
      crk_name: PropTypes.string.isRequired
    }).isRequired,
    update_all_workers: PropTypes.bool.isRequired,
    vpc_name: PropTypes.string.isRequired,
    worker_pools: PropTypes.array.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired
=======
    entitlement: PropTypes.string,
    // can be null
    machine_type: PropTypes.string.isRequired,
    vpc_name: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired,
    subnetList: PropTypes.array.isRequired
>>>>>>> 7d02243 (fix merge)
=======
  subnetList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired,
  cluster: PropTypes.shape({
    entitlement: PropTypes.string,
    // can be null
    machine_type: PropTypes.string.isRequired,
    vpc_name: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
  }),
  // can be null
  data: PropTypes.shape({
    entitlement: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vpc_name: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
    subnets: PropTypes.array.isRequired
=======
    subnets: PropTypes.array.isRequired,
    subnetList: PropTypes.array.isRequired
>>>>>>> 7d02243 (fix merge)
=======
    subnets: PropTypes.array.isRequired
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
      }), /*#__PURE__*/React.createElement(IcseNumberSelect, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseToggle, {
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
      }), /*#__PURE__*/React.createElement(IcseToggle, {
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
}(Component);
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    interval_month: PropTypes.number.isRequired,
    root_key: PropTypes.bool.isRequired,
    force_delete: PropTypes.bool
  }).isRequired,
  isModal: PropTypes.bool.isRequired
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
class KeyManagementForm extends Component {
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
      id: "kms-existing"
    })), /*#__PURE__*/React.createElement(IcseFormGroup, {
      noMarginBottom: true
    }, /*#__PURE__*/React.createElement(IcseNameInput, {
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
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
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
        id: "kms-existing"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseNameInput, {
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
      })));
    }
  }]);
  return KeyManagementForm;
}(Component);
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
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired
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
      return /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
        id: composedId + "-email",
        componentName: "teleport-claim",
        field: "email",
        invalid: !this.state.email.match(emailRegex),
        value: this.state.email,
        onChange: function onChange(event) {
          return _this2.onChangeTextInput("email", event.target.value);
        },
        className: "fieldWidth"
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
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
}(Component);
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
    initialSelectedItems: props.initialSelectedItems || [],
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
  return /*#__PURE__*/React.createElement(MultiSelect, {
    id: props.id + "-security-group-multiselect",
    label: props.label,
    titleText: "Security Groups",
    className: props.className,
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
  invalid: false,
  className: "fieldWidthSmaller"
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

=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> f849341 (access group forms :100:)
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseToggle, {
        labelText: "Use Transit Gateway",
        toggleFieldName: "enable_transit_gateway",
        id: "tg-enable",
        onToggle: this.handleToggle,
        defaultToggled: this.state.enable_transit_gateway
      }), /*#__PURE__*/React.createElement(IcseTextInput, {
        onChange: this.handleInputChange,
        componentName: "Transit Gateway",
        field: "name",
        value: this.state.name,
        readOnly: this.props.readOnlyName,
        id: "tg-name",
        invalid: this.props.invalidCallback(this.state),
        invalidText: this.props.invalidTextCallback(this.state)
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
        formName: "Transit Gateway",
        value: this.state.transit_gateway_resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        name: "transit_gateway_resource_group",
        labelText: "Resource Group"
      }), /*#__PURE__*/React.createElement(VpcListMultiSelect, {
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
}(Component);
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
  data: PropTypes.shape({
    enable_transit_gateway: PropTypes.bool.isRequired,
    transit_gateway_connections: PropTypes.array.isRequired,
    transit_gateway_resource_group: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired,
  readOnlyName: PropTypes.bool.isRequired,
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired
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
      return /*#__PURE__*/React.createElement("div", {
        id: "atracker-form"
      }, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseTextInput, {
        componentName: "Activity Tracker",
        field: "Name",
        labelText: "Name",
        className: "fieldWidth",
        value: this.props.prefix + "-atracker",
        onChange: this.handleInputChange,
        readOnly: true,
        id: "atracker-name",
        invalid: false
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        formName: "Activity Tracker",
        value: this.state.resource_group,
        groups: this.props.resourceGroups,
        handleInputChange: this.handleInputChange,
        className: "fieldWidth",
        name: "resource_group",
        labelText: "Resource Group"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseSelect, {
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
      }), /*#__PURE__*/React.createElement(IcseToggle, {
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
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement(IcseSelect, {
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
}(Component);
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
  data: PropTypes.shape({
    cos_bucket: "",
    cos_key: "",
    resource_group: "",
    add_route: false
  }).isRequired
};
AtrackerForm.propTypes = {
  data: PropTypes.shape({
    cos_bucket: PropTypes.string.isRequired,
    cos_key: PropTypes.string.isRequired,
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
  data: PropTypes.shape({
    collector_bucket_name: PropTypes.string.isRequired,
    atracker_key: PropTypes.string.isRequired,
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
    resource_group: PropTypes.string.isRequired,
    add_route: PropTypes.bool.isRequired
  }).isRequired,
  prefix: PropTypes.string.isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
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
        formName: "vpc_name",
        name: "vpc_name",
        labelText: "VPC",
        groups: this.props.vpcList,
        value: this.state.vpc_name,
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.vpc_name),
        invalidText: "Select a VPC.",
        className: "fieldWidth"
      }), /*#__PURE__*/React.createElement(IcseSelect, {
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
}(Component);
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    // can be null
    vpc_name: PropTypes.string,
    // can be null
    subnet_name: PropTypes.string // can be null
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
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
        name: "flow_logs_bucket_name",
        formName: this.props.data.name + "-vpc",
        groups: this.props.cosBuckets,
        value: this.state.flow_logs_bucket_name || "",
        handleInputChange: this.handleInputChange,
        invalid: lib_4(this.state.flow_logs_bucket_name),
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
        className: classNameModalCheck + " leftTextAlign"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, null, nameFields.map(function (field) {
        return /*#__PURE__*/React.createElement("div", {
          className: "fitContent",
          key: _this2.props.data.name + "-" + kebabCase$1(field) + "-div"
        }, /*#__PURE__*/React.createElement(IcseTextInput, {
          id: composedId + "-" + field,
          componentName: "VPC Network",
          field: field,
          labelText: field,
          value: _this2.state[field],
          onChange: _this2.handleInputChange,
          invalid: _this2.props.invalidCallback(field, _this2.state, _this2.props),
          invalidText: _this2.props.invalidTextCallback(field, _this2.state, _this2.props),
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
      }, ["zone-1", "zone-2", "zone-3"].map(function (zone) {
        return /*#__PURE__*/React.createElement(IcseToggle, {
          key: _this2.props.data.name + "-gateway-toggle-" + zone,
          id: _this2.props.data.name + "-pgw-" + zone,
          labelText: "Create in Zone " + parseIntFromZone(zone),
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
}(React.Component);
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
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    flow_logs_bucket_name: PropTypes.string,
    default_network_acl_name: PropTypes.string,
    default_security_group_name: PropTypes.string,
    default_routing_table_name: PropTypes.string,
    classic_access: PropTypes.bool.isRequired,
    use_manual_address_prefixes: PropTypes.bool.isRequired,
    use_public_gateways: PropTypes.object.isRequired
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired
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
    _this.modalForm = /*#__PURE__*/React.createRef();
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
        }, this.props.show && React.Children.map(this.props.children, function (child) {
          return (
            /*#__PURE__*/
            // clone react child
            React.cloneElement(child, {
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
}(Component);
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
>>>>>>> 353b3a7 ($@)
=======
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
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
var DeleteModal = function DeleteModal(props) {
  var name = /*#__PURE__*/React.createElement("strong", null, props.name);
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

var UnsavedChangesModal = function UnsavedChangesModal(props) {
  var name = props.name;
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
  return /*#__PURE__*/React.createElement(FilterableMultiSelect, {
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
var SshKeyMultiSelect = function SshKeyMultiSelect(props) {
  return /*#__PURE__*/React.createElement(IcseMultiSelect, {
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
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * sg multiselect
 */
var SecurityGroupMultiSelect = function SecurityGroupMultiSelect(props) {
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
var SubnetMultiSelect = function SubnetMultiSelect(props) {
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
var VpcListMultiSelect = function VpcListMultiSelect(props) {
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
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired
};

=======
>>>>>>> 353b3a7 ($@)
/**
 * Under Construction Page
 */
<<<<<<< HEAD
<<<<<<< HEAD
const UnderConstruction = () => {
=======
var UnderConstruction = function UnderConstruction() {
>>>>>>> 72d0b85 (merge)
=======
var UnderConstruction = function UnderConstruction() {
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
=======
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
/**
 * Under Construction Page
 */
var UnderConstruction = function UnderConstruction() {
<<<<<<< HEAD
>>>>>>> 7d02243 (fix merge)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WarningAlt, {
    size: "128"
  }), /*#__PURE__*/React.createElement("h4", null, "Page Under Construction"));
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

>>>>>>> 67351ff (Dropdowns components)
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
const SaveIcon = props => {
=======
var SaveIcon = function SaveIcon(props) {
>>>>>>> b5b1ac6 (fixed build)
=======
var SaveIcon = function SaveIcon(props) {
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
const SaveAddButton = props => {
=======
var SaveAddButton = function SaveAddButton(props) {
>>>>>>> b5b1ac6 (fixed build)
=======
var SaveAddButton = function SaveAddButton(props) {
>>>>>>> 72d0b85 (merge)
  return /*#__PURE__*/React.createElement(PopoverWrapper, {
    hoverText: props.type === "add" && props.hoverText === "Save Changes" ? "Add Resource" : props.hoverText,
    className: (props.disabled ? "inlineBlock cursorNotAllowed" : "") + (props.inline ? " alignItemsCenter marginTopLarge inLineFormButton" : "")
  }, /*#__PURE__*/React.createElement(Button, {
    kind: props.type === "add" ? "tertiary" : "primary",
    onClick: props.onClick,
<<<<<<< HEAD
    className: lib_4(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
=======
    className: lib_6(props) + (props.disabled === true ? " pointerEventsNone " : " " + props.className),
>>>>>>> 72d0b85 (merge)
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.name && !this.props.hasBuiltInHeading && /*#__PURE__*/React.createElement(IcseHeading, {
        name: this.props.name,
        type: this.props.subHeading ? "subHeading" : "heading",
        className: this.props.className,
        tooltip: this.props.tooltip,
        buttons: /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.hideFormTitleButton || this.state.tabIndex !== 0 || !isFunction$1(this.props.onClick) || this.props.hasBuiltInHeading,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            type: "add",
            noDeleteButton: true,
            onClick: this.props.onClick,
            disabled: this.props.shouldDisableSave ? this.props.shouldDisableSave() : false
          })
        })
      }), this.props.hideAbout && !this.props.about ? this.props.form : /*#__PURE__*/React.createElement(Tabs, {
        onChange: this.setSelectedIndex
      }, /*#__PURE__*/React.createElement(TabList, {
        "aria-label": "formTabs"
      }, /*#__PURE__*/React.createElement(Tab, null, "Create"), /*#__PURE__*/React.createElement(Tab, null, "About")), /*#__PURE__*/React.createElement(TabPanels, null, /*#__PURE__*/React.createElement(TabPanel, {
        className: "doc"
      }, this.props.form), /*#__PURE__*/React.createElement(TabPanel, {
        className: "doc"
      }, this.props.about ? this.props.about : /*#__PURE__*/React.createElement(UnderConstruction, null)))));
    }
  }]);
  return StatefulTabPanel;
}(React.Component);
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
>>>>>>> b6eab56 (example and readme)
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

<<<<<<< HEAD
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
const EditCloseIcon = props => {
  let hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Edit Resource";
  let icon = props.open ? /*#__PURE__*/React.createElement(CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(Edit, null);
=======
=======
>>>>>>> 72d0b85 (merge)
 * @param {Function} props.onClick onclick function
 * @param {boolean} props.open toggle is open, defaults to false
 * @returns edit close icon
 */
var EditCloseIcon = function EditCloseIcon(props) {
  var hoverText = props.hoverText ? props.hoverText : props.open ? "Close" : props.type === "add" ? "Configure Resource" : "Edit Resource";
  var icon = props.open ? /*#__PURE__*/React.createElement(CloseFilled, null) : props.type === "add" ? /*#__PURE__*/React.createElement(Add, null) : /*#__PURE__*/React.createElement(Edit, null);
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
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
const DeleteButton = props => {
=======
var DeleteButton = function DeleteButton(props) {
>>>>>>> b5b1ac6 (fixed build)
=======
var DeleteButton = function DeleteButton(props) {
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
  disabled: false,
  modalOpen: false
=======
  disabled: false
>>>>>>> b5b1ac6 (fixed build)
=======
  disabled: false
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
 * @param {Function} props.handleCardUp
 * @param {Function} props.handleCardDown
 *
 */
const UpDownButtons = props => {
=======
=======
>>>>>>> 72d0b85 (merge)
 * @param {Function} props.handleUp
 * @param {Function} props.handleDown
 *
 */
var UpDownButtons = function UpDownButtons(props) {
<<<<<<< HEAD
>>>>>>> b5b1ac6 (fixed build)
=======
>>>>>>> 72d0b85 (merge)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    key: "rule-up-" + props.name,
    disabled: props.disableUp,
    kind: "ghost",
    size: "sm",
    id: props.name + "-up",
<<<<<<< HEAD
<<<<<<< HEAD
    onClick: props.handleCardUp,
=======
    onClick: props.handleUp,
>>>>>>> b5b1ac6 (fixed build)
=======
    onClick: props.handleUp,
>>>>>>> 72d0b85 (merge)
    className: "focus forceTertiaryButtonStyles marginRightSmall"
  }, /*#__PURE__*/React.createElement(ArrowUp, {
    key: "up-" + props.name
  })), /*#__PURE__*/React.createElement(Button, {
    kind: "ghost",
    disabled: props.disableDown,
    key: "rule-down-" + props.name,
    size: "sm",
    id: props.name + "-down",
<<<<<<< HEAD
<<<<<<< HEAD
    onClick: props.handleCardDown,
=======
    onClick: props.handleDown,
>>>>>>> b5b1ac6 (fixed build)
=======
    onClick: props.handleDown,
>>>>>>> 72d0b85 (merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export { AppIdKeyForm, DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, FormModal, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 1dc4ca0 (Issue 680: Instance Form Modal (#17))
=======
=======
>>>>>>> 72d0b85 (merge)
  handleUp: PropTypes.func.isRequired,
  handleDown: PropTypes.func.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, FormModal, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b5b1ac6 (fixed build)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, FetchSelect, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNumberSelect, IcseSelect, IcseSubForm, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> 67351ff (Dropdowns components)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, EntitlementDropdown, FetchSelect, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNumberSelect, IcseSelect, IcseSubForm, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> e6437cd (dropdown examples)
=======
export { DeleteModal, DynamicRender, DynamicToolTipWrapper, EmptyResourceTile, EntitlementSelect, FetchSelect, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNumberSelect, IcseSelect, IcseSubForm, IcseToolTip, PopoverWrapper, RenderForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, VpcListMultiSelect };
>>>>>>> b238572 (Dropdowns Documentation)
=======
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 72d0b85 (merge)
=======
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecurityGroupMultiSelect, SshKeyMultiSelect, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 28f2e52 (code now)
=======
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b345987 (fixes & heading/statelesstoggle form added)
=======
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 044d5a2 (Migrated EncryptionKeyForm + Documentation (Issue 684) (#22))
=======
=======
>>>>>>> dc1cdcb (arrayOf)
=======
>>>>>>> 4c7a274 (fixed formatting for docs)
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
=======
var css_248z = ".cds--tab-content.doc {\r\n    padding: 0.5rem 0;\r\n  }";
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
var css_248z = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
>>>>>>> f19dfef (merge)
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
var css_248z$1 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }";
styleInject(css_248z$1);
>>>>>>> 817ead3 (update build)
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
=======
var css_248z$2 = ".cds--tab-content.doc {\r\n    padding: 0.5rem 0;\r\n  }\r\n\r\n.cds--tab-content:focus {\r\n  outline: none !important;\r\n  border: none !important;\r\n}";
>>>>>>> 007ab0d (cos bucket form)
styleInject(css_248z$2);
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
var css_248z$2 = ".cds--tab-content.doc {\n    padding: 0.5rem 0;\n  }\n\n.cds--tab-content:focus {\n  outline: none !important;\n  border: none !important;\n}";
styleInject(css_248z$2);
>>>>>>> 01e0136 (classNames now as default prop (#40))

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
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.name && !this.props.hasBuiltInHeading && /*#__PURE__*/React.createElement(IcseHeading, {
        name: this.props.name,
        type: this.props.subHeading ? "subHeading" : "heading",
        className: this.props.className,
        tooltip: this.props.tooltip,
        buttons: /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.hideFormTitleButton || this.state.tabIndex !== 0 || !isFunction$1(this.props.onClick) || this.props.hasBuiltInHeading,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            type: "add",
            noDeleteButton: true,
            onClick: this.props.onClick,
            disabled: this.props.shouldDisableSave ? this.props.shouldDisableSave() : false
          })
        })
      }), this.props.hideAbout && !this.props.about ? this.props.form : /*#__PURE__*/React.createElement(Tabs, {
        onChange: this.setSelectedIndex
      }, /*#__PURE__*/React.createElement(TabList, {
        "aria-label": "formTabs"
      }, /*#__PURE__*/React.createElement(Tab, null, "Create"), /*#__PURE__*/React.createElement(Tab, null, "About")), /*#__PURE__*/React.createElement(TabPanels, null, /*#__PURE__*/React.createElement(TabPanel, {
        className: "doc"
      }, this.props.form), /*#__PURE__*/React.createElement(TabPanel, {
        className: "doc"
      }, this.props.about ? this.props.about : /*#__PURE__*/React.createElement(UnderConstruction, null)))));
    }
  }]);
  return StatefulTabPanel;
}(React.Component);
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
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b982705 (feat: StatefulTabPanel)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> f7f1280 (atrackerform)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> dc1cdcb (arrayOf)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b6eab56 (example and readme)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 1e428a4 (SecretsManager form)
=======
export { AppIdKeyForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, ResourceGroupSelect, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b18f05c (added documentation for KeyManagementForm)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, ResourceGroupSelect, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 4c7a274 (fixed formatting for docs)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 92f0c0d (removed resourcegroupselect component)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 159e1d3 (fix: remove log and bind)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> d3f1972 (migrate TeleportClaimToRoleForm)
=======
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
class ToggleForm extends React.Component {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
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
    _this.childRef = /*#__PURE__*/React.createRef();
    return _this;
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
  }

  /**
   * toggle sub modal
   */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
  onToggleSubModal() {
    this.setState({
      showSubModal: !this.state.showSubModal
    });
  }
  componentDidMount() {
    if (this.state.hide === true && this.shouldShow() === true) {
<<<<<<< HEAD
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
=======
  _createClass(ToggleForm, [{
    key: "onToggleSubModal",
    value: function onToggleSubModal() {
=======
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
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

<<<<<<< HEAD
=======
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
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
      } else {
        this.setState({
          hide: !this.state.hide
        });
      }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
    let formTitle = this.props.name;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatefulTabPanel, _extends({}, this.props.tabPanel ? this.props.tabPanel : {}, {
      toggleShowChildren: this.toggleShowChildren,
      form: /*#__PURE__*/React.createElement(React.Fragment, null, this.props.formName && /*#__PURE__*/React.createElement(IcseHeading, {
        name: this.props.formName,
        hideButton: true
      }), /*#__PURE__*/React.createElement("div", {
        className: lib_2(this.props.type === "formInSubForm" ? "formInSubForm positionRelative marginBottomSmall" : "subForm marginBottomSmall")
      }, /*#__PURE__*/React.createElement(StatelessToggleForm, {
        hide: this.state.hide,
        iconType: this.props.useAddButton ? "add" : "edit",
        onIconClick: this.toggleChildren,
        toggleFormTitle: true,
        name: formTitle,
        buttons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.addButtonAtFormTitle !== true,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            type: "add",
            onClick: this.onToggleSubModal,
            noDeleteButton: true
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noSaveButton || this.props.addButtonAtFormTitle,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            onClick: this.onSave,
            disabled: this.state.disableSave,
            noDeleteButton: this.props.noDeleteButton
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noDeleteButton,
          show: /*#__PURE__*/React.createElement(DeleteButton, {
            onClick: this.toggleDeleteModal,
            name: formTitle,
            disabled: this.props.deleteDisabled(this.props),
            disableDeleteMessage: () => this.props.disableDeleteMessage(this.props)
          })
        }))
      }, /*#__PURE__*/React.createElement(UnsavedChangesModal, {
        name:
        // use tab panel name if passed
        this.props.tabPanel ? this.props.tabPanel.name : formTitle,
        modalOpen: this.state.showUnsavedChangeModal,
        onModalClose: this.toggleUnsavedChangeModal,
        onModalSubmit: this.dismissChangesAndClose,
        useDefaultUnsavedMessage: this.state.useDefaultUnsavedMessage
      }), /*#__PURE__*/React.createElement(DeleteModal, {
        name:
        // use tab panel name if passed
        this.props.tabPanel ? this.props.tabPanel.name : formTitle,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.onDelete
      }), RenderForm(this.props.innerForm, {
        ...this.props.innerFormProps,
        ref: this.props.nullRef ? null : this.childRef,
        shouldDisableSave: this.shouldDisableSave,
        data: this.props.data,
        isModal: false,
        arrayParentName: this.props.arrayParentName,
        showSubModal: this.state.showSubModal,
        addText: this.props.addText,
        // is this used?
        readOnly: this.props.readOnly,
        networkRuleOrderDidChange: this.networkRuleOrderDidChange,
        onChildShowToggle: this.props.onChildShowToggle,
        index: this.props.index,
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
    }

    /**
     * toggle delete modal
     */
  }, {
    key: "toggleDeleteModal",
    value: function toggleDeleteModal() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    } else {
>>>>>>> 45b57f8 (remove extra props, add name and hideName)
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
            type: "add",
            onClick: this.onToggleSubModal,
            noDeleteButton: true
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noSaveButton || this.props.addButtonAtFormTitle,
          show: /*#__PURE__*/React.createElement(SaveAddButton, {
            onClick: this.onSave,
            disabled: this.state.disableSave,
            noDeleteButton: this.props.noDeleteButton
          })
        }), /*#__PURE__*/React.createElement(DynamicRender, {
          hide: this.props.noDeleteButton,
          show: /*#__PURE__*/React.createElement(DeleteButton, {
            onClick: this.toggleDeleteModal,
            name: this.props.name,
            disabled: this.props.deleteDisabled(this.props),
            disableDeleteMessage: () => this.props.disableDeleteMessage(this.props)
          })
        }))
      }, /*#__PURE__*/React.createElement(UnsavedChangesModal, {
        name:
        // use tab panel name if passed
        this.props.tabPanel ? this.props.tabPanel.name : this.props.name,
        modalOpen: this.state.showUnsavedChangeModal,
        onModalClose: this.toggleUnsavedChangeModal,
        onModalSubmit: this.dismissChangesAndClose,
        useDefaultUnsavedMessage: this.state.useDefaultUnsavedMessage
      }), /*#__PURE__*/React.createElement(DeleteModal, {
        name:
        // use tab panel name if passed
        this.props.tabPanel ? this.props.tabPanel.name : this.props.name,
        modalOpen: this.state.showDeleteModal,
        onModalClose: this.toggleDeleteModal,
        onModalSubmit: this.onDelete
      }), RenderForm(this.props.innerForm, {
        ...this.props.innerFormProps,
        ref: this.props.nullRef ? null : this.childRef,
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
<<<<<<< HEAD
=======
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
              type: "add",
              onClick: this.onToggleSubModal,
              noDeleteButton: true
            })
          }), /*#__PURE__*/React.createElement(DynamicRender, {
            hide: this.props.noSaveButton || this.props.addButtonAtFormTitle,
            show: /*#__PURE__*/React.createElement(SaveAddButton, {
              onClick: this.onSave,
              disabled: this.state.disableSave,
              noDeleteButton: this.props.noDeleteButton
            })
          }), /*#__PURE__*/React.createElement(DynamicRender, {
            hide: this.props.noDeleteButton,
            show: /*#__PURE__*/React.createElement(DeleteButton, {
              onClick: this.toggleDeleteModal,
              name: this.props.name,
              disabled: this.props.deleteDisabled(this.props),
              disableDeleteMessage: function disableDeleteMessage() {
                return _this2.props.disableDeleteMessage(_this2.props);
              }
            })
          }))
        }, /*#__PURE__*/React.createElement(UnsavedChangesModal, {
          name:
          // use tab panel name if passed
          this.props.tabPanel ? this.props.tabPanel.name : this.props.name,
          modalOpen: this.state.showUnsavedChangeModal,
          onModalClose: this.toggleUnsavedChangeModal,
          onModalSubmit: this.dismissChangesAndClose,
          useDefaultUnsavedMessage: this.state.useDefaultUnsavedMessage
        }), /*#__PURE__*/React.createElement(DeleteModal, {
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        }), _objectSpread2$1)))))),
        about: this.props.about || false
      })), this.state.showChildren && this.props.children ? this.props.children : "");
    }
  }]);
  return ToggleForm;
}(React.Component);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
        }
      })))),
      about: this.props.about || false
    })), this.state.showChildren && this.props.children ? this.props.children : "");
  }
}
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  deleteDisabled: () => {
    return false;
  },
  forceOpen: () => {
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
  deleteDisabled: function deleteDisabled() {
    return false;
  },
  forceOpen: function forceOpen() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f19dfef (merge)
=======
  deleteDisabled: () => {
    return false;
  },
  forceOpen: () => {
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
    name: PropTypes.string.isRequired,
    hideFormTitleButton: PropTypes.bool // can be null
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
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> f680a35 (almost done)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> f19dfef (merge)
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
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React.createElement(StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React.createElement(StructuredListHead, null, /*#__PURE__*/React.createElement(StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React.createElement(StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React.createElement(StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement(StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React.createElement(StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes.array,
  list: PropTypes.array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
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
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React.createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
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
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React.createElement(RelatedLinks, {
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name + "-ssh-key-name",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        name: "resource_group",
        formName: "".concat(kebabCase$1(this.props.data.name), "-ssh-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalidText: "Select a Resource Group.",
        labelText: "Resource Group"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "fieldWidthBigger leftTextAlign"
      }, /*#__PURE__*/React.createElement(TextInput.PasswordInput, {
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
}(Component);
SshKeyForm.defaultProps = {
  data: {
    name: "",
    public_key: ""
  },
  resourceGroups: [],
  isModal: false
};
SshKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    public_key: PropTypes.string.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 09dbacf (SshKeyForm, example, and docs)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> b9aa481 (feat: object storage key form)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> ad3a1f9 (Migrated VpnGatewayForm + Documentation (Issue702) (#31))
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 353b3a7 ($@)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 7d02243 (fix merge)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> ee08088 (issue 700: transit gateway form)
=======
var css_248z = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z);
=======
var css_248z$1 = ".about {\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.smallerText {\n  font-size: 0.9rem;\n  font-weight: 400;\n}\n";
styleInject(css_248z$1);
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)

var DocTextField = function DocTextField(props) {
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
var StructuredList = function StructuredList(props) {
  return /*#__PURE__*/React.createElement(StructuredListWrapper, {
    className: "marginBottom"
  }, props.headers && /*#__PURE__*/React.createElement(StructuredListHead, null, /*#__PURE__*/React.createElement(StructuredListRow, null, props.headers.map(function (cell, index) {
    return /*#__PURE__*/React.createElement(StructuredListCell, {
      head: true,
      key: index
    }, cell);
  }))), /*#__PURE__*/React.createElement(StructuredListBody, null, props.list.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement(StructuredListRow, {
      key: rowIndex
    }, row.map(function (cell, colIndex) {
      return /*#__PURE__*/React.createElement(StructuredListCell, {
        key: colIndex
      }, cell);
    }));
  })));
};
StructuredList.propTypes = {
  headers: PropTypes.array,
  list: PropTypes.array.isRequired
};
var DocTable = function DocTable(props) {
  var headers = [];
  var list = _toConsumableArray(props.list); // copy list, required due to reference errors

  if (props.list[0][0] === "_headers") {
    headers = _toConsumableArray(props.list[0]); // copy header row
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
var RelatedLinks = function RelatedLinks(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "smallerText"
  }, "Related Links"), props.links.map(function (link, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: "related-link-" + index
    }, /*#__PURE__*/React.createElement("a", {
      href: link[0],
      target: "_blank",
      rel: "noreferrer",
      className: "smallerText"
    }, link.length === 1 ? "Docs" : link[1]));
  }));
};
RelatedLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired).isRequired).isRequired
};
var Docs = function Docs(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "subForm leftTextAlign about"
  }, props.content.map(function (field, index) {
    return field.text ?
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
      list: _toConsumableArray(field.table)
    });
  }), props.relatedLinks && /*#__PURE__*/React.createElement(RelatedLinks, {
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

<<<<<<< HEAD
<<<<<<< HEAD
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, buildFormDefaultInputMethods, buildFormFunctions };
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: this.state.name + "-name",
        componentName: this.props.data.name + "-ssh-key-name",
        value: this.state.name,
        onChange: this.handleInputChange,
        invalid: this.props.invalidCallback(this.state, this.props),
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        hideHelperText: true
      }), /*#__PURE__*/React.createElement(IcseSelect, {
        name: "resource_group",
        formName: "".concat(kebabCase$1(this.props.data.name), "-ssh-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resource_group,
        handleInputChange: this.handleInputChange,
        invalidText: "Select a Resource Group.",
        labelText: "Resource Group"
      })), /*#__PURE__*/React.createElement(IcseFormGroup, {
        noMarginBottom: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "fieldWidthBigger leftTextAlign"
      }, /*#__PURE__*/React.createElement(TextInput.PasswordInput, {
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
}(Component);
SshKeyForm.defaultProps = {
  data: {
    name: "",
    public_key: ""
  },
  resourceGroups: [],
  isModal: false
};
SshKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    public_key: PropTypes.string.isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
class IcseFormTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
=======
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
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
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
      showModal: false,
      shownArrayForms: [],
      // list of array forms to keep open on save
      shownChildForms: [] // list of child forms to keep open on save
    };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    this.onChildToggle = this.onChildToggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
=======
    _this.onChildToggle = _this.onChildToggle.bind(_assertThisInitialized(_this));
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    _this.onSubmit = _this.onSubmit.bind(_assertThisInitialized(_this));
    _this.shouldShow = _this.shouldShow.bind(_assertThisInitialized(_this));
>>>>>>> f849341 (access group forms :100:)
    // add an array to track middle forms
    if (_this.props.isMiddleForm) {
      _this.props.arrayData.forEach(function () {
        return _this.state.shownChildForms.push([]);
      });
    }
<<<<<<< HEAD
=======
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
    return _this;
>>>>>>> f849341 (access group forms :100:)
  }

  /**
   * keep update forms open
   * @param {number} index index to keep open
   * @param {number=} childIndex optional child index
   */
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
      if (contains(this.state.shownChildForms[index], childIndex)) {
        // remove index from list
        shownChildForms[index].splice(index, 1);
=======
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
        if (contains(this.state.shownChildForms[index], childIndex)) {
          // remove index from list
          shownChildForms[index].splice(index, 1);
        } else {
          // otherwise add
          shownChildForms[index].push(childIndex);
        }
        this.setState({
          shownChildForms: shownChildForms
        });
>>>>>>> f849341 (access group forms :100:)
      } else {
        // if only parent index
        var shownForms = _toConsumableArray(this.state.shownArrayForms); // all forms
        if (contains(this.state.shownArrayForms, index)) {
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
      return this.props.parentToggle ? contains(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
      : contains(this.state.shownArrayForms, index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var formattedName = kebabCase$1(this.props.name); // formatted component name
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
        }), this.props.arrayData.map(function (data, index) {
          var _this2$props, _this2$props2;
          // return a form with the index and props
          return /*#__PURE__*/React.createElement(ToggleForm, _extends({}, _this2.props.toggleFormProps, {
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
        }), /*#__PURE__*/React.createElement(FormModal, {
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
        }
      }))),
      hideFormTitleButton: this.props.hideFormTitleButton
    }));
  }
}
=======
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
        if (contains(this.state.shownChildForms[index], childIndex)) {
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
        if (contains(this.state.shownArrayForms, index)) {
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
      return this.props.parentToggle ? contains(this.props.parentToggle.shownChildren[this.props.parentToggle.index], index) // show children
      : contains(this.state.shownArrayForms, index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var formattedName = kebabCase$1(this.props.name); // formatted component name
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
        form: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EmptyResourceTile, {
          name: this.props.name,
          showIfEmpty: this.props.arrayData
        }), this.props.arrayData.map(function (data, index) {
          var _this2$props, _this2$props2;
          // return a form with the index and props
          return /*#__PURE__*/React.createElement(ToggleForm, _extends({}, _this2.props.toggleFormProps, {
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
        }), /*#__PURE__*/React.createElement(FormModal, {
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
=======
>>>>>>> f849341 (access group forms :100:)
        })))),
        hideFormTitleButton: this.props.hideFormTitleButton
      }));
    }
  }]);
  return IcseFormTemplate;
}(React.Component);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
>>>>>>> 01e0136 (classNames now as default prop (#40))
=======
>>>>>>> f849341 (access group forms :100:)
IcseFormTemplate.defaultProps = {
  hideFormTitleButton: false,
  subHeading: false,
  arrayParentName: null,
  isMiddleForm: false
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
  innerFormProps: PropTypes.shape({
    disableSave: PropTypes.func.isRequired
  }).isRequired,
  toggleFormProps: PropTypes.shape({
    disableSave: PropTypes.func.isRequired,
    propsMatchState: PropTypes.func.isRequired
  }).isRequired
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 82a5f28 (Issue 681: IcseFormTemplate (#38))
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 01e0136 (classNames now as default prop (#40))
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
    return _this;
  }

  /**
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: "name",
        componentName: "access_groups",
        value: this.state.name,
        onChange: this.handleInputChange,
        className: "fieldWidthSmaller",
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
      })));
    }
  }]);
  return AccessGroupForm;
}(React.Component);
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

var AccessGroupPolicyForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AccessGroupPolicyForm, _React$Component);
  var _super = _createSuper(AccessGroupPolicyForm);
  function AccessGroupPolicyForm(props) {
    var _this;
    _classCallCheck(this, AccessGroupPolicyForm);
    _this = _super.call(this, props);
    _this.state = _this.props.data;
    buildFormFunctions(_assertThisInitialized(_this));
    buildFormDefaultInputMethods(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleInputResource = _this.handleInputResource.bind(_assertThisInitialized(_this));
    return _this;
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  _createClass(AccessGroupPolicyForm, [{
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
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IcseFormGroup, null, /*#__PURE__*/React.createElement(IcseNameInput, {
        id: "name",
        componentName: "policies",
        value: this.state.name,
        onChange: this.handleInputChange,
        className: "marginRight",
        labelText: "Name",
        invalidText: this.props.invalidTextCallback(this.state, this.props),
        invalid: this.props.invalidCallback(this.state, this.props),
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state);
        }
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
        formName: "".concat(kebabCase$1(this.props.data.name), "-agp-rg-select"),
        groups: this.props.resourceGroups,
        value: this.state.resources.resource_group,
        handleInputChange: this.handleInputResource,
        invalidText: "Select a Resource Group",
        labelText: "Resource Group",
        tooltip: {
          content: "Name of the resource group the policy will apply to",
          alignModal: "bottom-left"
        }
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
  }]);
  return AccessGroupPolicyForm;
}(React.Component);
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
      resource_type: PropTypes.string.isRequired,
      resource: PropTypes.string.isRequired,
      service: PropTypes.string.isRequired,
      resource_instance_id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired
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
        conditions[name] = snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
      } else {
        conditions[name] = value;
      }
      this.setState({
        conditions: conditions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var conditionOperatorGroups = [];
      eachKey(conditionOperators, function (key) {
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
        helperTextCallback: function helperTextCallback() {
          return _this2.props.helperTextCallback(_this2.state);
        }
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
        invalid: false,
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
  }]);
  return AccessGroupDynamicPolicyForm;
}(React.Component);
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
  helperTextCallback: PropTypes.func.isRequired
};

export { AccessGroupDynamicPolicyForm, AccessGroupForm, AccessGroupPolicyForm, AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcListMultiSelect, VpnGatewayForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> f849341 (access group forms :100:)
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcNetworkForm as VpcForm, VpcListMultiSelect, VpnGatewayForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 13e8562 (Migrated VpcForm + Documentation (Issue701) (#39))
=======
export { AppIdKeyForm, AtrackerForm, DeleteButton, DeleteModal, Docs, DynamicRender, DynamicToolTipWrapper, EditCloseIcon, EmptyResourceTile, EncryptionKeyForm, EntitlementSelect, FetchSelect, FormModal, IcseFormGroup, IcseFormTemplate, IcseHeading, IcseModal, IcseMultiSelect, IcseNameInput, IcseNumberSelect, IcseSelect, IcseSubForm, IcseTextInput, IcseToggle, IcseToolTip, KeyManagementForm, ObjectStorageBucketForm, ObjectStorageKeyForm, PopoverWrapper, RenderForm, SaveAddButton, SaveIcon, SccForm, SecretsManagerForm, SecurityGroupMultiSelect, SshKeyForm, SshKeyMultiSelect, StatefulTabPanel, StatelessToggleForm, SubnetMultiSelect, TeleportClaimToRoleForm, TitleGroup, ToggleForm, ToolTipWrapper, TransitGatewayForm, UnderConstruction, UnsavedChangesModal, UpDownButtons, VpcNetworkForm as VpcForm, VpcListMultiSelect, VpnGatewayForm, WorkerPoolForm, buildFormDefaultInputMethods, buildFormFunctions };
>>>>>>> 007ab0d (cos bucket form)
