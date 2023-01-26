const { toggleMarginBottom, addClassName } = require("./form-utils");
const { formatInputPlaceholder } = require("./text-utils");
<<<<<<< HEAD
const { saveChangeButtonClass } = require("./button-utils");
=======
const {
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
} = require("./method-functions");
const {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} = require("./component-utils");

>>>>>>> 8db187e (form and documentation)
module.exports = {
  toggleMarginBottom,
  addClassName,
  formatInputPlaceholder,
<<<<<<< HEAD
  saveChangeButtonClass,
=======
  eventTargetToNameAndValue,
  toggleStateBoolean,
  setNameToValue,
  buildFormFunctions,
  buildFormDefaultInputMethods,
>>>>>>> 8db187e (form and documentation)
};
