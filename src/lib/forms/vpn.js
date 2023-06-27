/**
 * input change for vpn routes
 * @param {Object} event
 * @param {Object} stateData
 * @returns {object} new state
 */
function vpnRouteInputChange(event, stateData) {
  let { name, value } = event.target;
  let state = { ...stateData };
  state[name] = value.toLowerCase();
  return state;
}

module.exports = {
  vpnRouteInputChange,
};
