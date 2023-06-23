const { assert } = require("chai");
const { handleNumberInputChange } = require("../../src/lib/forms/iam");

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
});
