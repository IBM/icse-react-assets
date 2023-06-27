const { transpose } = require("lazy-z");

/**
 *
 * @param {Object} event
 * @param {Object} stateData
 * @param {Object} componentProps
 */
function vsiHandleInputChange(event, stateData, componentProps) {
  let { name, value } = event.target;
  let stateChangeParams = { ...stateData };
  stateChangeParams[name] =
    name === "vsi_per_subnet" && value !== "" ? Number(value) : value;
  if (name === "vpc")
    // Clear subnets and security groups when vpc changes
    componentProps.isTeleport
      ? transpose({ subnet: "", security_groups: [] }, stateChangeParams)
      : transpose({ subnets: [], security_groups: [] }, stateChangeParams);

  return stateChangeParams;
}

module.exports = {
  vsiHandleInputChange,
};
