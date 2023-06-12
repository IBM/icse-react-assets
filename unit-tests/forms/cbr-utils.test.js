const { assert, expect } = require("chai");
const {
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  handleExclusionAddressInputChange,
} = require("../../src/lib/forms/cbr-utils");

describe("cbr-utils", () => {
  describe("cbrInvalid", () => {
    it("should return invalid false if valid", () => {
      assert.isFalse(
        cbrInvalid("account_id", "hoidfiasfjoasfd").invalid,
        "it should be valid"
      );
    });
    it("should return invalid false if empty string", () => {
      assert.isFalse(
        cbrInvalid("account_id", "").invalid,
        "it should be invalid"
      );
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
        },
        "it should return correct data"
      );
    });
  });
  describe("cbrValueInvalid", () => {
    it("should return an invalid object with a message when value is an empty string", () => {
      let result = cbrValueInvalid("ipAddress", "");
      assert.deepEqual(
        result,
        {
          invalid: true,
          invalidText:
            "Invalid value for type ipAddress. Cannot be empty string.",
        },
        "it should return correct data"
      );
    });

    it("should return an invalid object with a message when value is not a valid IPV4 address for ipAddress type", () => {
      let result = cbrValueInvalid("ipAddress", "not a valid IPV4 address");
      assert.deepEqual(
        result,
        {
          invalid: true,
          invalidText:
            "Invalid value for type ipAddress. Value must be a valid IPV4 Address.",
        },
        "it should return correct data"
      );
    });

    it("should return an invalid object with a message when value is not a range of valid IPV4 addresses for ipRange type", () => {
      let result = cbrValueInvalid(
        "ipRange",
        "2.2.2.2" // not range
      );
      assert.deepEqual(
        result,
        {
          invalid: true,
          invalidText:
            "Invalid value for type ipRange. Value must be a range of IPV4 Addresses.",
        },
        "it should return correct data"
      );
    });
    it("should return a valid object when valid ipRange", () => {
      let result = cbrValueInvalid(
        "ipRange",
        "2.2.2.2-3.3.3.3" // not range
      );
      assert.deepEqual(result, {
        invalid: false,
        invalidText: "",
      });
    });
    it("should return a valid object when type is valid and value is valid", () => {
      let result = cbrValueInvalid("ipAddress", "192.168.0.1");
      assert.deepEqual(
        result,
        {
          invalid: false,
          invalidText: "",
        },
        "it should return correct data"
      );
    });
    it("should use cbrInvalid when type is not ipAddress or ipRange", () => {
      let result = cbrValueInvalid("vpc", "hiiiii");
      assert.deepEqual(
        result,
        {
          invalid: false,
          invalidText: "",
        },
        "it should return correct data"
      );
    });
  });
  describe("cbrValuePlaceholder", () => {
    it("should return ip address when ipAddress", () => {
      assert.deepEqual(cbrValuePlaceholder("ipAddress"), "x.x.x.x");
    });
    it("should return range when ipRange", () => {
      assert.deepEqual(cbrValuePlaceholder("ipRange"), "x.x.x.x-x.x.x.x");
    });
    it("should return type otherwise", () => {
      assert.deepEqual(cbrValuePlaceholder("frog"), "my-cbr-zone-frog");
    });
  });
  describe("handleRuleInputChange", () => {
    it("should lowercase enforcement mode", () => {
      let event = { target: { name: "enforcement_mode", value: "Disabled" } };
      let expectedData = { enforcement_mode: "disabled" };
      assert.deepEqual(handleRuleInputChange({}, event), expectedData);
    });
    it("should pass through other values", () => {
      let event = {
        target: { name: "name", value: "name" },
      };
      let expectedData = { name: "name" };
      assert.deepEqual(handleRuleInputChange({}, event), expectedData);
    });
  });
  describe("handleExclusionAddressInputChange", () => {
    it("should correctly map type", () => {
      let event = {
        target: { name: "type", value: "IP Address" },
      };
      let expectedData = { type: "ipAddress" };
      assert.deepEqual(
        handleExclusionAddressInputChange({}, event),
        expectedData
      );
    });
    it("should pass through other values", () => {
      let event = {
        target: { name: "blah", value: "hey" },
      };
      let expectedData = { blah: "hey" };
      assert.deepEqual(
        handleExclusionAddressInputChange({}, event),
        expectedData
      );
    });
  });
});
