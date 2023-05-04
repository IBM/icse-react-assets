const { isNullOrEmptyString } = require("lazy-z");

function cbrInvalid(field, value) {
  let invalid = { invalid: false, invalidText: "" };

  if (
    isNullOrEmptyString(value) ||
    value.match(/^[0-9a-z-]+$/) === null ||
    value.length >= 128
  ) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid ${field}. Value must match regex expression /^[0-9a-z-]+$/.`;
  }
  return invalid;
}

module.exports = {
  cbrInvalid,
};
