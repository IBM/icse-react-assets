const { isNullOrEmptyString, isIpv4CidrOrAddress } = require("lazy-z");
const { RegexButWithWords } = require("regex-but-with-words");

const ipRangeExpression = new RegexButWithWords()
  .wordBoundary()
  .group((exp) => {
    exp
      .group((exp) => {
        exp
          .group((exp) => {
            exp.literal("2").set("1-5").set("0-6");
          })
          .or()
          .group((exp) => {
            exp.literal("1").digit(2);
          })
          .or()
          .group((exp) => {
            exp.digit(1, 2);
          });
      })
      .literal(".");
  }, 3)
  .group((exp) => {
    exp
      .group((exp) => {
        exp.literal("2").set("1-5").set("0-6");
      })
      .or()
      .group((exp) => {
        exp.literal("1").digit(2);
      })
      .or()
      .group((exp) => {
        exp.digit(1, 2);
      });
  })
  .literal("-")
  .group((exp) => {
    exp
      .group((exp) => {
        exp
          .group((exp) => {
            exp.literal("2").set("1-5").set("0-6");
          })
          .or()
          .group((exp) => {
            exp.literal("1").digit(2);
          })
          .or()
          .group((exp) => {
            exp.digit(1, 2);
          });
      })
      .literal(".");
  }, 3)
  .group((exp) => {
    exp
      .group((exp) => {
        exp.literal("2").set("1-5").set("0-6");
      })
      .or()
      .group((exp) => {
        exp.literal("1").digit(2);
      })
      .or()
      .group((exp) => {
        exp.digit(1, 2);
      });
  })
  .wordBoundary()
  .done("g");

/**
 * create cbr invalid field sta
 * @param {*} field
 * @param {*} value
 * @returns {Object} invalid boolean invalidText string
 */
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

/**
 * cbr value is invalid
 * @param {*} type
 * @param {*} value
 * @returns {Object} invalid boolean invalidText string
 */
function cbrValueInvalid(type, value) {
  let invalid = { invalid: false, invalidText: "" };

  if (isNullOrEmptyString(value)) {
    invalid.invalid = true;
    invalid.invalidText = `Invalid value for type ${type}. Cannot be empty string.`;
  } else if (type === "ipAddress") {
    if (!isIpv4CidrOrAddress(value) || value.includes("/")) {
      invalid.invalid = true;
      invalid.invalidText = `Invalid value for type ${type}. Value must be a valid IPV4 Address.`;
    }
  } else if (type === "ipRange") {
    if (value.match(ipRangeExpression) === null) {
      invalid.invalid = true;
      invalid.invalidText = `Invalid value for type ${type}. Value must be a range of IPV4 Addresses.`;
    }
  } else {
    invalid = cbrInvalid(type, value);
  }

  return invalid;
}

const cbrTypeNameMap = {
  ipAddress: "IP Address",
  ipRange: "IP Range",
  subnet: "Subnet",
  vpc: "VPC",
  serviceRef: "Service Ref",
};

const cbrNameTypeMap = {
  "IP Address": "ipAddress",
  "IP Range": "ipRange",
  Subnet: "subnet",
  VPC: "vpc",
  "Service Ref": "serviceRef",
};

/**
 * return a placeholder for value on exclusion/address form
 * @param {string} type
 * @returns
 */
function cbrValuePlaceholder(type) {
  return type === "ipAddress"
    ? "x.x.x.x"
    : type === "ipRange"
    ? "x.x.x.x-x.x.x.x"
    : `my-cbr-zone-${type}`;
}

/**
 * handle input change for cbr rules
 * @param {*} event
 * @param {Object} stateData
 * @returns object
 */
function handleRuleInputChange(stateData, event) {
  let { name, value } = event.target;
  let state = { ...stateData };
  if (name === "enforcement_mode") {
    state[name] = value.toLowerCase();
  } else {
    state[name] = value;
  }
  return state;
}

/**
 * handle exclusion and address input change
 * @param {*} event
 * @param {Object} stateData
 */
function handleExclusionAddressInputChange(stateData, event) {
  let { name, value } = event.target;
  let state = { ...stateData };
  if (name === "type") state[name] = cbrNameTypeMap[value];
  else state[name] = value;
  return state;
}

module.exports = {
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  cbrTypeNameMap,
  handleExclusionAddressInputChange,
};
