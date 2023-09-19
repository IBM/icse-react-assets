import {
  eventTargetToNameAndValue,
  setNameToValue,
  toggleStateBoolean,
} from "../lib";
const { isFunction, splat, getType, getObjectFromArray } = require("lazy-z");

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

  if (powerVolumes) {
    component.getPowerInstances = function () {
      return splat(
        component.props.power_instances.filter((instance) => {
          if (
            instance.workspace === component.state.workspace &&
            instance.pi_storage_type === component.state.pi_volume_type
          ) {
            return instance;
          }
        }),
        "name",
      );
    }.bind(component);
  }

  if (usesImageList) {
    component.getImageList = function () {
      if (component.props.imageMap[component.state.zone])
        return splat(component.props.imageMap[component.state.zone], "name");
      else return [];
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

  if (powerInstance) {
    component.getPowerSshKeyList = function () {
      let list = getObjectFromArray(
        component.props.power,
        "name",
        component.state.workspace,
      ).ssh_keys;
      return splat(list, "name");
    }.bind(component);

    component.getPowerImageList = function () {
      let list = getObjectFromArray(
        component.props.power,
        "name",
        component.state.workspace,
      ).images;
      return splat(list, "name");
    }.bind(component);

    component.getPowerNetworkList = function () {
      let list = getObjectFromArray(
        component.props.power,
        "name",
        component.state.workspace,
      ).network;
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
  component.eventTargetToNameAndValue =
    eventTargetToNameAndValue.bind(component);
  component.toggleStateBoolean = toggleStateBoolean.bind(component);
  component.setNameToValue = setNameToValue.bind(component);
}

export { buildFormFunctions, buildFormDefaultInputMethods };
