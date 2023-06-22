/**
 * f5 vsi input change
 * @param {Object} stateData
 * @param {object} event
 * @returns stateData
 */
function f5VsiInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  if (name === "zones") state.zones = Number(value);
  else state[name] = value;
  return state;
}

/**
 * initialize vsis
 * @param {Object} stateData
 * @param {Object} componentProps
 * @returns {array} f5 vsis
 */
function f5Vsis(stateData, componentProps) {
  let vsis = [...componentProps.vsis];

  while (vsis.length < stateData.zones) {
    // add a new vsi to display
    vsis.push(
      componentProps.initVsiCallback(
        componentProps.edge_pattern,
        `zone-${vsis.length + 1}`,
        componentProps.f5_on_management,
        {
          image: stateData.image,
          resource_group: stateData.resource_group,
          ssh_keys: stateData.ssh_keys,
          profile: stateData.profile,
        }
      )
    );
  }
  return vsis;
}

module.exports = {
  f5VsiInputChange,
  f5Vsis,
};
