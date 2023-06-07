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
const {
  saveChangeButtonClass,
  saveAddParams,
  editCloseParams,
  deleteButtonParams,
} = require("./button-utils");
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
} = require("./method-functions");
const { docTextFieldParams } = require("./doc-utils");
module.exports = {
  docTextFieldParams,
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
  editCloseParams,
  deleteButtonParams,
};
