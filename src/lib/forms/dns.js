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

/**
 * handle dns form input change
 * @param {*} event 
 * @returns {Object} state update object
 */
function dnsFormInputChange(event) {
  let { name, value } = event.target;
  if(name === "plan") value = value.toLowerCase();
  return { [name]: value }
}

module.exports = {
  handleDnsResolverInputChange,
  dnsFormInputChange
};
