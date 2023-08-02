const { kebabCase } = require("lazy-z");

/**
 * handle input change for Cloud Database Form
 * @param {Object} stateData
 * @param {Object} event
 */
function databaseInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  if (name === "service") state.service = kebabCase(value);
  else if (name === "plan") state.plan = kebabCase(value);
  else state[name] = value;
  return state;
}

module.exports = { databaseInputChange };
