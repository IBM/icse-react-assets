const { isWholeNumber, isInRange } = require("lazy-z");
const { RegexButWithWords } = require("regex-but-with-words");

const commaSeparatedCidrListExp = new RegexButWithWords()
  .stringBegin()
  .group((exp) => {
    exp.group((exp) => {
      exp
        .wordBoundary()
        .group((exp) => {
          exp
            .group((exp) => {
              exp
                .literal("25")
                .set("0-5")
                .or()
                .literal("2")
                .set("0-4")
                .digit()
                .or()
                .set("01")
                .lazy()
                .digit(1, 2);
            })
            .literal(".");
        }, 3)
        .group((exp) => {
          exp
            .literal("25")
            .set("0-5")
            .or()
            .literal("2")
            .set("0-4")
            .digit()
            .or()
            .set("01")
            .lazy()
            .digit(1, 2);
        })
        .wordBoundary()
        .group((exp) => {
          exp.group((exp) => {
            exp.literal("/").group((exp) => {
              exp.literal("3").set("0-2").or().set("012").lazy().digit();
            });
          });
        });
    });
  })
  .anyNumber()
  .group((exp) => {
    exp
      .literal(",")
      .whitespace()
      .anyNumber()
      .wordBoundary()
      .group((exp) => {
        exp
          .group((exp) => {
            exp
              .literal("25")
              .set("0-5")
              .or()
              .literal("2")
              .set("0-4")
              .digit()
              .or()
              .set("01")
              .lazy()
              .digit(1, 2);
          })
          .literal(".");
      }, 3)
      .group((exp) => {
        exp
          .literal("25")
          .set("0-5")
          .or()
          .literal("2")
          .set("0-4")
          .digit()
          .or()
          .set("01")
          .lazy()
          .digit(1, 2);
      })
      .wordBoundary()
      .group((exp) => {
        exp.group((exp) => {
          exp.literal("/").group((exp) => {
            exp.literal("3").set("0-2").or().set("012").lazy().digit();
          });
        });
      });
  })
  .anyNumber()
  .stringEnd()
  .done("gm");

const commaSeparatedIpListExp = new RegexButWithWords()
  .stringBegin()
  .group((exp) => {
    exp.group((exp) => {
      exp
        .wordBoundary()
        .group((exp) => {
          exp
            .group((exp) => {
              exp
                .literal("25")
                .set("0-5")
                .or()
                .literal("2")
                .set("0-4")
                .digit()
                .or()
                .set("01")
                .lazy()
                .digit(1, 2);
            })
            .literal(".");
        }, 3)
        .group((exp) => {
          exp
            .literal("25")
            .set("0-5")
            .or()
            .literal("2")
            .set("0-4")
            .digit()
            .or()
            .set("01")
            .lazy()
            .digit(1, 2);
        })
        .wordBoundary()
        .group((exp) => {
          exp.group((exp) => {
            exp.literal("/").group((exp) => {
              exp.literal("3").set("0-2").or().set("012").lazy().digit();
            });
          });
        })
        .lazy();
    });
  })
  .anyNumber()
  .group((exp) => {
    exp
      .literal(",")
      .whitespace()
      .anyNumber()
      .wordBoundary()
      .group((exp) => {
        exp
          .group((exp) => {
            exp
              .literal("25")
              .set("0-5")
              .or()
              .literal("2")
              .set("0-4")
              .digit()
              .or()
              .set("01")
              .lazy()
              .digit(1, 2);
          })
          .literal(".");
      }, 3)
      .group((exp) => {
        exp
          .literal("25")
          .set("0-5")
          .or()
          .literal("2")
          .set("0-4")
          .digit()
          .or()
          .set("01")
          .lazy()
          .digit(1, 2);
      })
      .wordBoundary()
      .group((exp) => {
        exp.group((exp) => {
          exp.literal("/").group((exp) => {
            exp.literal("3").set("0-2").or().set("012").lazy().digit();
          });
        });
      })
      .lazy();
  })
  .anyNumber()
  .stringEnd()
  .done("gm");

const commaSeparatedIpListExpNoCidr = new RegexButWithWords()
  .stringBegin()
  .group((exp) => {
    exp.group((exp) => {
      exp
        .wordBoundary()
        .group((exp) => {
          exp
            .group((exp) => {
              exp
                .literal("25")
                .set("0-5")
                .or()
                .literal("2")
                .set("0-4")
                .digit()
                .or()
                .set("01")
                .lazy()
                .digit(1, 2);
            })
            .literal(".");
        }, 3)
        .group((exp) => {
          exp
            .literal("25")
            .set("0-5")
            .or()
            .literal("2")
            .set("0-4")
            .digit()
            .or()
            .set("01")
            .lazy()
            .digit(1, 2);
        })
        .lazy();
    });
  })
  .anyNumber()
  .group((exp) => {
    exp
      .literal(",")
      .whitespace()
      .anyNumber()
      .wordBoundary()
      .group((exp) => {
        exp
          .group((exp) => {
            exp
              .literal("25")
              .set("0-5")
              .or()
              .literal("2")
              .set("0-4")
              .digit()
              .or()
              .set("01")
              .lazy()
              .digit(1, 2);
          })
          .literal(".");
      }, 3)
      .group((exp) => {
        exp
          .literal("25")
          .set("0-5")
          .or()
          .literal("2")
          .set("0-4")
          .digit()
          .or()
          .set("01")
          .lazy()
          .digit(1, 2);
      })
      .lazy();
  })
  .anyNumber()
  .stringEnd()
  .done("gm");

/**
 * return true if value is null or empty string
 * @param {*} value
 * @returns {boolean} true if null or empty string
 */
function isNullOrEmptyString(value) {
  return value === null || value === "";
}

/**
 * test for invalid range
 * @param {*} value
 * @param {number} min
 * @param {number} max
 * @returns {boolean} true if invalid
 */
function isRangeInvalid(value, min, max) {
  if (isNullOrEmptyString(value)) return false;

  value = parseFloat(value);
  if (!isWholeNumber(value) || !isInRange(value, min, max)) {
    return true;
  }
  return false;
}

/**
 * test for invalid IP string/CIDR
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isIpStringInvalid(value) {
  if (
    !isNullOrEmptyString(value) &&
    value.match(commaSeparatedIpListExp) === null
  ) {
    return true;
  }
  return false;
}

/**
 * test for invalid IP string no CIDR
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isIpStringInvalidNoCidr(value) {
  if (
    !isNullOrEmptyString(value) &&
    value.match(commaSeparatedIpListExpNoCidr) === null
  ) {
    return true;
  }
  return false;
}

/**
 * test for invalid list of cidr string
 * @param {string} value
 * @returns {boolean} true if invalid
 */
function isCidrStringInvalid(value) {
  if (
    !isNullOrEmptyString(value) &&
    value.match(commaSeparatedCidrListExp) === null
  ) {
    return true;
  } else return false;
}

module.exports = {
  isIpStringInvalid,
  isIpStringInvalidNoCidr,
  isRangeInvalid,
  isCidrStringInvalid,
};
