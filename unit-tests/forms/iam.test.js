const { assert } = require("chai");
const {
  iamItems,
  handleNumberInputChange,
  handleAllowedIps,
  handleSelectChange,
} = require("../../src/lib/forms/iam");

describe("iam", () => {
  describe("handleNumberInputChange", () => {
    it("should parse integer and return correct value", () => {
      let event = {
        target: {
          name: "max_sessions_per_identity",
          value: 10,
        },
      };
      let actualValue = handleNumberInputChange(event);
      let expectedValue = { max_sessions_per_identity: 10 };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should parse decimal to integer and return correct value", () => {
      let event = {
        target: {
          name: "max_sessions_per_identity",
          value: 10.5,
        },
      };
      let actualValue = handleNumberInputChange(event);
      let expectedValue = { max_sessions_per_identity: 10 };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should fail to parse and return null", () => {
      let event = {
        target: {
          name: "max_sessions_per_identity",
          value: "",
        },
      };
      let actualValue = handleNumberInputChange(event);
      let expectedValue = { max_sessions_per_identity: null };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should fail to parse null and return null", () => {
      let event = {
        target: {
          name: "max_sessions_per_identity",
          value: null,
        },
      };
      let actualValue = handleNumberInputChange(event);
      let expectedValue = null;
      assert.equal(actualValue, expectedValue);
    });
  });
  describe("handleAllowedIps", () => {
    it("should cleanup value and return correct value", () => {
      let event = {
        target: {
          value: "10.0.0.1   ",
        },
      };
      let actualValue = handleAllowedIps(event);
      let expectedValue = { allowed_ip_addresses: "10.0.0.1" };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should handle multiple ips and return correct value", () => {
      let event = {
        target: {
          value: "10.0.0.1, 10.0.0.2  ",
        },
      };
      let actualValue = handleAllowedIps(event);
      let expectedValue = { allowed_ip_addresses: "10.0.0.1,10.0.0.2" };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should handle empty whitespace value and return correct value", () => {
      let event = {
        target: {
          value: "   ",
        },
      };
      let actualValue = handleAllowedIps(event);
      let expectedValue = { allowed_ip_addresses: null };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should handle empty value and return correct value", () => {
      let event = {
        target: {
          value: "",
        },
      };
      let actualValue = handleAllowedIps(event);
      let expectedValue = { allowed_ip_addresses: null };
      assert.deepEqual(actualValue, expectedValue);
    });
  });
  describe("handleSelectChange", () => {
    it("should handle null case", () => {
      let event = {
        target: {
          name: "null",
          value: "null",
        },
      };
      let actualValue = handleSelectChange(event);
      let expectedValue = { null: iamItems[null].value };
      assert.deepEqual(actualValue, expectedValue);
    });
    it("should return correct value", () => {
      let event = {
        target: {
          name: "Email-Based MFA",
          value: "LEVEL1",
        },
      };
      let actualValue = handleSelectChange(event);
      let expectedValue = {
        "Email-Based MFA": iamItems["Email-Based MFA"].value,
      };
      assert.deepEqual(actualValue, expectedValue);
    });
  });
});
