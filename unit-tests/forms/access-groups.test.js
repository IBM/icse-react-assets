const { assert } = require("chai");
const {
  handleInputResource,
  handleInputCondition,
} = require("../../src/lib/forms/access-groups");

describe("access-groups", () => {
  describe("handleInputResource", () => {
    it("should take resource state and apply the correct value", () => {
      let event = {
        target: { name: "resource", value: "resource" },
      };
      let expectedData = {
        resources: { resource_group: "hi", resource: "resource" },
      };
      assert.deepEqual(
        handleInputResource(
          {
            resources: { resource_group: "hi", resource: "resource" },
          },
          event
        ),
        expectedData
      );
    });
  });
  describe("handleInputCondition", () => {
    let expectedData = {
      conditions: { claim: "one", operator: "EQUALS", value: "1" },
    };
    it("should change operator", () => {
      let event = {
        target: { name: "operator", value: "EQUALS" },
      };
      assert.deepEqual(
        handleInputCondition(
          {
            conditions: { claim: "one", operator: "IN", value: "1" },
          },
          event
        ),
        expectedData
      );
    });
    it("should change value", () => {
      let event = { target: { name: "value", value: "1" } };
      assert.deepEqual(
        handleInputCondition(
          {
            conditions: { claim: "one", operator: "EQUALS", value: "frog" },
          },
          event
        ),
        expectedData
      );
    });
  });
});
