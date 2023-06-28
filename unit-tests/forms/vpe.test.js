const { assert } = require("chai");
const { vpeVpcDropdown, vpeServiceDropdown } = require("../../src/lib/forms");

describe("vpe", () => {
  describe("vpeVpcDropdown", () => {
    it("should set vpc and reset sec group and subnets", () => {
      let stateData = {};
      let event = { target: { value: "management" } };
      assert.deepEqual(vpeVpcDropdown(event, stateData), {
        vpc: "management",
        security_groups: [],
        subnets: [],
      });
    });
  });
  describe("vpeServiceDropdown", () => {
    it("should set service to a service in the map", () => {
      let stateData = {};
      let event = { target: { value: "Hyper Protect Crypto Services" } };
      assert.deepEqual(vpeServiceDropdown(event, stateData), {
        service: "hpcs",
      });
    });
  });
});
