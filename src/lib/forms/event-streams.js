/**
 *  handle allowed ips for event streams
 * @param {Object} event
 * @param {Object} stateData
 * @returns {Object} new state
 */
function handleAllowedIps(event, stateData) {
  let state = { ...stateData };
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
  let state = { ...stateData };
  let value = event.target.value.toLowerCase();
  state.plan = value;
  if (value !== "enterprise") {
    state = {
      ...state,
      throughput: "",
      storage_size: "",
      private_ip_allowlist: "",
    };
  }
  return state;
}

module.exports = {
  handleAllowedIps,
  handlePlanChange,
};
