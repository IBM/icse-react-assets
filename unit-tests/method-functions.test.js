const { assert } = require("chai");
const { eventTargetToNameAndValue, toggleStateBoolean } = require("../src/lib");

describe("method-functions", () => {
  describe("eventTargetToNameAndValue", () => {
    it("should set name to value", () => {
      let event = {
        target: {
          name: "color",
          value: "blue",
        },
      };
      let actualValue = eventTargetToNameAndValue(event);
      let expectedValue = { color: "blue" };
      assert.deepEqual(actualValue, expectedValue);
    });
  });
  describe("toggleStateBoolean", () => {
    it("should toggle boolean value", () => {
      let actualValue = toggleStateBoolean("enable_x", { enable_x: false });
      let expectedValue = { enable_x: true };
      assert.deepEqual(actualValue, expectedValue);
    });
  });
});
