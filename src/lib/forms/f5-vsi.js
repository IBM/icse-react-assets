function f5VsiInputChange(stateData, event) {
  let state = { ...stateData };
  let { name, value } = event.target;
  if (name === "zones") state.zones = Number(value);
  else state[name] = value;
  return state;
}

module.exports = {
  f5VsiInputChange,
};
