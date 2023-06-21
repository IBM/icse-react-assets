/**
 * handle input change for routing tables
 * @param {Object} stateData
 * @param Object event
 */
function routingTableRouteInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  state[name] = value;
  if (name === "action" && value !== "deliver") {
    state.next_hop = "0.0.0.0";
  } else if (name === "action") {
    state.next_hop = null;
  }
  return state;
}

module.exports = {
  routingTableRouteInputChange,
};
