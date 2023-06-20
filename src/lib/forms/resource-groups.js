/**
 * handle toggle for resource group
 * @param {Object} stateData
 * @param {string} name name of the object key to change
 */
function handleRgToggle(stateData, name) {
  let state = { ...stateData };

  // Turn off the use_prefix toggle when not using data.
  if (name === "use_data" && state.use_data === false) {
    state[name] = !state[name];
    state.use_prefix = false;
  } else {
    state[name] = !state[name];
  }
  return state;
}

module.exports = { handleRgToggle };
