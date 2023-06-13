/**
 * custom resolver input change
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} new state
 */
function handleDnsResolverInputChange(stateData, event) {
  let { name, value } = event.target;
  let state = { ...stateData };
  if (name === "vpc") {
    state[name] = value;
    state.subnets = [];
  } else {
    state[name] = value;
  }
  return state;
}

module.exports = {
  handleDnsResolverInputChange,
};
