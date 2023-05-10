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
        if (value.match(ipRangeExpression) === null) {
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
