/**
 * get list of strings from zone
 * @param {Object} stateData
 * @param {object} componentProps
 * @returns {Array<string>} stringified zones
 */
function parseZoneStrings(stateData, componentProps) {
  let stringZones = [];
  stateData.select_zones.forEach((zone) => {
    stringZones.push(String(zone));
  });
  return stringZones;
}

/**
 * Handle select zones
 * @param {event} event
 * @param {object} stateData
 * @returns {object} new state
 */
function handleSelectZones(event, stateData) {
  let items = [];
  let state = { ...stateData };
  event.selectedItems.forEach((item) => {
    items.push(Number(item));
  });
  state.select_zones = items;
  return state;
}

/**
 * @param {string} name
 * @param {Object} stateData
 * @returns {object} new state
 */
function handleSubnetTierToggle(name, stateData) {
  let nextState = { ...stateData };
  nextState[name] = !stateData[name];
  if (name === "advanced" && nextState[name] === true) {
    nextState.select_zones = [];
    [1, 2, 3].forEach((zone) => {
      if (zone <= stateData.zones) nextState.select_zones.push(zone);
    });
  } else if (name === "advanced") {
    nextState.zones = stateData.select_zones.length;
    nextState.select_zones = null;
  }
  return nextState;
}

/**
 * handle hide/show form data
 */
function handleSubnetShowToggle(stateData, componentProps) {
  let state = { ...stateData };
  if (
    componentProps.propsMatchState(stateData, componentProps) === false &&
    stateData.hide === false &&
    !stateData.showUnsavedChangesModal
  ) {
    state.showUnsavedChangesModal = true;
  } else {
    state.hide = !state.hide;
    state.showUnsavedChangesModal = false;
  }
  return state;
}

module.exports = {
  parseZoneStrings,
  handleSelectZones,
  handleSubnetTierToggle,
  handleSubnetShowToggle,
};
