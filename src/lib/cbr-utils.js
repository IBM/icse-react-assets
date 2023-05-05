const { isNullOrEmptyString, isIpv4CidrOrAddress } = require("lazy-z");

function cbrInvalid(field, value) {
  let invalid = { invalid: false, invalidText: "" };

  if (
    !isNullOrEmptyString(value) &&
    (value.match(/^[0-9a-z-]+$/) === null || value.length >= 128)
  ) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid ${field}. Value must match regex expression /^[0-9a-z-]+$/.`;
  }
  return invalid;
}

function cbrValueInvalid(type, value) {
  let invalid = { invalid: false, invalidText: "" };

  if (isNullOrEmptyString(value)) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid value for type ${type}. Cannot be empty string.`;
  } else {
    switch (type) {
      case "ipAddress":
        if (!isIpv4CidrOrAddress(value) || value.includes("/")) {
          invalid.invalid = true;
          invalid.invalidText = `Invalid value for type ${type}. Value must be a valid IPV4 Address.`;
        }
        break;
      case "ipRange":
        if (
          value.match(
            /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\-\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g
          ) === null
        ) {
          invalid.invalid = true;
          invalid.invalidText = `Invalid value for type ${type}. Value must be a range of IPV4 Addresses.`;
        }
        break;
      default:
        invalid = cbrInvalid("type", value);
    }
  }
  return invalid;
}

module.exports = {
  cbrInvalid,
  cbrValueInvalid,
};
