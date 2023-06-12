/**
 * input change for resources in access group policies
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} resources
 */
function handleInputResource(stateData, event) {
  let { name, value } = event.target;
  let resources = { ...stateData.resources };
  resources[name] = value;
  return { resources: resources };
}

module.exports = {
  handleInputResource,
};
