const { assert } = require("chai");
const { vsiHandleInputChange } = require("../../src/lib/forms");

describe("vsi", () => {
  describe("vsiHandleInputChange", () => {
    it('should update stateChangeParams with the correct values when name is "vsi_per_subnet" and value is not empty', () => {
      const event = {
        target: {
          name: "vsi_per_subnet",
          value: "5",
        },
      };
      const stateData = {};
      const componentProps = {};
      const expectedStateChangeParams = {
        vsi_per_subnet: 5,
      };
      const result = vsiHandleInputChange(event, stateData, componentProps);
      assert.deepEqual(result, expectedStateChangeParams);
    });
    it('should update stateChangeParams with the correct values when name is "vpc" and isTeleport is true', () => {
      const event = {
        target: {
          name: "vpc",
          value: "some-vpc-value",
        },
      };
      const stateData = {};
      const componentProps = {
        isTeleport: true,
      };
      const expectedStateChangeParams = {
        subnet: "",
        security_groups: [],
        vpc: "some-vpc-value",
      };
      const result = vsiHandleInputChange(event, stateData, componentProps);
      assert.deepEqual(result, expectedStateChangeParams);
    });
    it('should update stateChangeParams with the correct values when name is "vpc" and isTeleport is false', () => {
      const event = {
        target: {
          name: "vpc",
          value: "some-vpc-value",
        },
      };
      const stateData = {};
      const componentProps = {
        isTeleport: false,
      };
      const expectedStateChangeParams = {
        subnets: [],
        security_groups: [],
        vpc: "some-vpc-value",
      };
      const result = vsiHandleInputChange(event, stateData, componentProps);
      assert.deepEqual(result, expectedStateChangeParams);
    });
  });
});
