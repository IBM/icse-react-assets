const { snakeCase } = require("lazy-z");

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

/**
 * dynamic policy condition handler
 * @param {Object} stateData
 * @param {*} event
 * @returns {Object} conditions
 */
function handleInputCondition(stateData, event) {
  let { name, value } = event.target;
  let conditions = { ...stateData.conditions };
  if (name === "operator") {
    conditions[name] = snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
  } else {
    conditions[name] = value;
  }
  return { conditions: conditions };
}

const conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains",
};

const conditionOperatorGroups = [
  "Equals",
  "Equals (Ignore Case)",
  "In",
  "Not Equals (Ignore Case)",
  "Not Equals",
  "Contains",
];

module.exports = {
  conditionOperatorGroups,
  conditionOperators,
  handleInputCondition,
  handleInputResource,
};
