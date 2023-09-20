const { assert } = require("chai");
const { handleCRNs, handleVpcSelect } = require("../../src/lib/forms");

describe("transit-gateway", () => {
  describe("handleCRNs", () => {
    it("should return cleaned up crn value", () => {
      let event = {
        target: { value: "10.0.1.0, 10.0.1.1 " },
      };
      let expectedValue = { crns: ["10.0.1.0", "10.0.1.1"] };
      let actualValue = handleCRNs(event);

      assert.deepEqual(actualValue, expectedValue);
    });
    it("should return an empty crn if value is empty", () => {
      let event = {
        target: {},
      };
      let expectedValue = { crns: [] };
      let actualValue = handleCRNs(event);

      assert.deepEqual(actualValue, expectedValue);
    });
  });
  describe("handleVpcSelect", () => {
    it("should return connections object from selected vpcs", () => {
      let tgw = "tgw1";
      let selectedItems = ["vpc1", "vpc2"];
      let expectedValue = {
        connections: [
          { tgw, vpc: "vpc1" },
          { tgw, vpc: "vpc2" },
        ],
      };
      let actualValue = handleVpcSelect(selectedItems, tgw);

      assert.deepEqual(actualValue, expectedValue);
    });
    it("should return connections object from selected vpcs with power already selected", () => {
      let tgw = "tgw1";
      let selectedItems = ["vpc1", "vpc2"];
      let expectedValue = {
        connections: [
          { tgw, vpc: "vpc1" },
          { tgw, vpc: "vpc2" },
          { tgw, power: "dev" },
        ],
      };
      let actualValue = handleVpcSelect(selectedItems, tgw, [
        {
          tgw,
          power: "dev",
        },
        {
          vpc: "ugh",
          tgw,
        },
      ]);

      assert.deepEqual(actualValue, expectedValue);
    });
  });
});
