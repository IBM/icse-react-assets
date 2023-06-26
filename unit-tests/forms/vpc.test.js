let { assert } = require("chai");
let { handlePgwToggle } = require("../../src/lib/forms");

describe("vpcs", () => {
  describe("handlePgwToggle", () => {
    it("should add a zone number to publicGateways if it is not present", () => {
      let zone = "zone-1";
      let stateData = {
        publicGateways: [2, 3],
      };
      let expectedData = {
        publicGateways: [2, 3, 1],
      };
      let actualData = handlePgwToggle(zone, stateData);
      assert.deepEqual(actualData, expectedData);
    });
    it("should remove a zone number from publicGateways if it is already present", () => {
      let zone = "zone-2";
      let stateData = {
        publicGateways: [2, 3],
      };
      let expectedData = {
        publicGateways: [3],
      };
      let actualData = handlePgwToggle(zone, stateData);
      assert.deepEqual(actualData, expectedData);
    });
  });
});
