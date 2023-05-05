const { assert } = require("chai");
const { cbrInvalid, cbrValueInvalid } = require("../src/lib/cbr-utils");

describe("cbr-utils", () => {
  describe("cbrInvalid", () => {
    it("should return invalid false if valid", () => {
      assert.isFalse(cbrInvalid("account_id", "hoidfiasfjoasfd").invalid);
    });
    it("should return invalid false if empty string", () => {
      assert.isFalse(cbrInvalid("account_id", "").invalid);
    });
    it("should return invalid true if too long", () => {
      assert.deepEqual(
        cbrInvalid(
          "account_id",
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ),
        {
          invalid: true,
          invalidText: `Invalid account_id. Value must match regex expression /^[0-9a-z-]+$/.`,
        }
      );
    });
  });
  describe("cbrValueInvalid", () => {
    it("should return an invalid object with a message when value is an empty string", () => {
      const result = cbrValueInvalid("ipAddress", "");
      assert.deepEqual(result, {
        invalid: true,
        invalidText:
          "Invalid value for type ipAddress. Cannot be empty string.",
      });
    });

    it("should return an invalid object with a message when value is not a valid IPV4 address for ipAddress type", () => {
      const result = cbrValueInvalid("ipAddress", "not a valid IPV4 address");
      assert.deepEqual(result, {
        invalid: true,
        invalidText:
          "Invalid value for type ipAddress. Value must be a valid IPV4 Address.",
      });
    });

    it("should return an invalid object with a message when value is not a range of valid IPV4 addresses for ipRange type", () => {
      const result = cbrValueInvalid(
        "ipRange",
        "2.2.2.2" // not range
      );
      assert.deepEqual(result, {
        invalid: true,
        invalidText:
          "Invalid value for type ipRange. Value must be a range of IPV4 Addresses.",
      });
    });
    it("should return a valid object when valid ipRange", () => {
      const result = cbrValueInvalid(
        "ipRange",
        "2.2.2.2-3.3.3.3" // not range
      );
      assert.deepEqual(result, {
        invalid: false,
        invalidText: "",
      });
    });
    it("should return a valid object when type is valid and value is valid", () => {
      const result = cbrValueInvalid("ipAddress", "192.168.0.1");
      assert.deepEqual(result, {
        invalid: false,
        invalidText: "",
      });
    });
    it("should use cbrInvalid when type is not ipAddress or ipRange", () => {
      const result = cbrValueInvalid("vpc", "hiiiii");
      assert.deepEqual(result, {
        invalid: false,
        invalidText: "",
      });
    });
  });
});
