import {
  eventTargetToNameAndValue,
  setNameToValue,
  toggleStateBoolean,
} from "../lib";
const { isFunction, splat } = require("lazy-z");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let disableSave = isFunction(component.props.shouldDisableSave);
  let usesSubnetList = Array.isArray(component.props.subnetList);
  let usesSecurityGroups = Array.isArray(component.props.securityGroups);

  if (component.props.shouldDisableSave)
    component.shouldDisableSave =
      component.props.shouldDisableSave.bind(component);

  if (disableSubmit)
    component.shouldDisableSubmit =
      component.props.shouldDisableSubmit.bind(component);

  if (usesSubnetList) {
    component.getSubnetList = function () {
      return splat(
        component.props.subnetList.filter((subnet) => {
          if (subnet.vpc === component.state.vpc) return subnet;
        }),
        "name",
      );
    }.bind(component);
  }

  if (usesSecurityGroups) {
    component.getSecurityGroupList = function () {
      return splat(
        component.props.securityGroups.filter((sg) => {
          if (sg.vpc === component.state.vpc) return sg;
        }),
        "name",
      );
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
  component.eventTargetToNameAndValue =
    eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}

export { buildFormFunctions, buildFormDefaultInputMethods };
