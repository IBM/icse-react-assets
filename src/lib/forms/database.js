const { kebabCase, titleCase } = require("lazy-z");

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
  else if (name === "memory") {
    state.memory = Number(value) || "";
  } else if (name === "disk") {
    state.disk = Number(value) || "";
  } else state[name] = value;
  console.log(state);
  return state;
}

module.exports = { databaseInputChange };
