import { kebabCase } from "lazy-z";
import { nameValidationExp } from "./constants";

/**
 * format input placeholder
 * @param {string} componentName
 * @param {string} fieldName
 * @returns {string} placeholder name
 */
function formatInputPlaceholder(componentName, fieldName) {
  return `my-${kebabCase(componentName)}-${kebabCase(fieldName)}`;
}

/**
 * check to see if a component has a valid name
 * @param {string} componentName ex: resource_groups
 * @param {string} value name value. ex: management-rg
 * @param {*} componentProps component props
 * @param {boolean=} useData get resource grom data
 * @returns {Object} boolean invalid and text invalidText
 */
function hasInvalidName(componentName, value, componentProps, useData) {
  let returnData = {
    invalidText: `Invalid Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]/`,
  };

  // if using data, send only no name provided
  if (useData) {
    returnData.invalid = value.length === 0;
    returnData.invalidText = `Invalid Name. No name provided.`;
  } else {
    returnData.invalid =
      validName(value) === false || value.match(/[A-Z]{2,}/g) !== null; // fix edge case where all caps string matches
  }

  if (useData && value.match(/[^\-_\s\d\w]/i)) {
    returnData.invalidText = "Invalid name";
    returnData.invalid = true;
  }
  return returnData;
}

/**
 * validate name
 * @param {string} str string
 * @returns {boolean} true if name does match
 */
function validName(str) {
  if (str) return str.match(nameValidationExp) !== null;
  else return false;
}

export { formatInputPlaceholder, hasInvalidName, validName };
