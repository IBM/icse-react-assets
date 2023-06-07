const {
  toggleMarginBottom,
  addClassName,
  prependEmptyStringWhenNull,
  checkNullorEmptyString,
  invalidRegex,
  handleClusterInputChange,
  subnetTierName,
} = require("./form-utils");
const { formatInputPlaceholder } = require("./text-utils");
const { saveChangeButtonClass, saveAddParams } = require("./button-utils");
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
  subnetTierName,
  saveAddParams,
};
