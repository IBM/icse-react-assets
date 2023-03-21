const { isFunction, splat } = require("lazy-z");
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
} = require("../src/lib/method-functions");

/**
 * build functions for modal forms
 * @param {React.Element} component stateful component
 */
function buildFormFunctions(component) {
  let disableSubmit = isFunction(component.props.shouldDisableSubmit);
  let disableSave = isFunction(component.props.shouldDisableSave);
  let usesSubnetList = Array.isArray(component.props.subnetList);

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
        "name"
      );
    }.bind(component);
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
