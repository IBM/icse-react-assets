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
const { icseSelectParams } = require("./dropdowns");
const { handleNumberDropdownEvent } = require("./utils");
const { emptyResourceTileParams } = require("./empty-resource-tile");
const { onToggleEvent, toggleParams } = require("./input-utils");

module.exports = {
  onToggleEvent,
  toggleParams,
  docTextFieldParams,
  handleNumberDropdownEvent,
  icseSelectParams,
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
  emptyResourceTileParams,
};
