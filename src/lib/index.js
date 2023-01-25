<<<<<<< HEAD
const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  invalidRegex,
  handleClusterInputChange,
} = require("./form-utils");
const { formatInputPlaceholder } = require("./text-utils");
const { saveChangeButtonClass } = require("./button-utils");
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
} = require("./method-functions");

module.exports = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  formatInputPlaceholder,
  saveChangeButtonClass,
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
  invalidRegex,
  handleClusterInputChange,
=======
const { toggleMarginBottom, addClassName, prependEmptyStringToArrayOnNullOrEmptyString, checkNullorEmptyString } = require("./form-utils");
module.exports = {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringToArrayOnNullOrEmptyString,
  checkNullorEmptyString
>>>>>>> 67351ff (Dropdowns components)
};
