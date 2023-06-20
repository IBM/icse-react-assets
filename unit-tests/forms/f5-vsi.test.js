const { assert } = require("chai");
const { f5VsiInputChange } = require("../../src/lib/forms");

describe("f5_vsi", () => {
  describe("f5vsiInputChange", () => {
    it("should convert zones to number", () => {
      let event = {
        target: { name: "zones", value: "3" },
      };
      let expectedData = {
        resource_group: "hi",
        zones: 3,
      };
      let actualData = f5VsiInputChange(
        {
          resource_group: "hi",
        },
        event
      );
      assert.deepEqual(expectedData, actualData);
    });
    it("should pass through other values", () => {
      let event = {
        target: { name: "profile", value: "blah" },
      };
      let expectedData = {
        resource_group: "hi",
        profile: "blah",
      };
      let actualData = f5VsiInputChange(
        {
          resource_group: "hi",
          profile: "blah",
        },
        event
      );
      assert.deepEqual(expectedData, actualData);
    });
  });
});
