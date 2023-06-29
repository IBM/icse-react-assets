const { assert } = require("chai");
const { handleInputResource } = require("../../src/lib/forms/access-groups");

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
});
