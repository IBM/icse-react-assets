const { kebabCase, titleCase } = require("lazy-z");

/**
 * handle input change for Cloud Database Form
 * @param {Object} stateData
 * @param {Object} event
 */
function databaseInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  if (name === "service") {
    if(value !== "Databases for Mongodb") {
        state.plan = "standard";
        state.group_id = "member";
    }
    state.service = kebabCase(value);
  } else if (name === "plan") state.plan = kebabCase(value);
  else if (name === "memory") {
    state.memory = Number(value);
  } else if (name === "disk") {
    state.disk = Number(value);
  } else if (name === "cpu") {
    state.cpu = Number(value);
  } else state[name] = value;
  return state;
}

module.exports = { databaseInputChange };
