const { kebabCase } = require("lazy-z");

/**
 * handle input change for atracker
 * @param {Object} stateData
 * @param {Object} event
 */
function atrackerInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  if (name === "plan") state.plan = kebabCase(value);
  else state[name] = value;
  return state;
}

module.exports = { atrackerInputChange };
