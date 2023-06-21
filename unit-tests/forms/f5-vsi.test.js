const { assert } = require("chai");
const { f5VsiInputChange, f5Vsis } = require("../../src/lib/forms");

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
  describe("f5Vsis", () => {
    it("should return an array of f5 vsis", () => {
      const stateData = {
        zones: 3,
        image: "f5-image",
        resource_group: "resource-group",
        ssh_keys: ["ssh-key"],
        profile: "profile",
      };

      const componentProps = {
        vsis: [],
        edge_pattern: "edge-pattern",
        f5_on_management: true,
        initVsiCallback: (pattern, zone, useManagementVpc, params) => {
          return {
            pattern,
            zone,
            useManagementVpc,
            params,
          };
        },
      };

      const expectedVsis = [
        {
          pattern: "edge-pattern",
          zone: "zone-1",
          useManagementVpc: true,
          params: {
            image: "f5-image",
            resource_group: "resource-group",
            ssh_keys: ["ssh-key"],
            profile: "profile",
          },
        },
        {
          pattern: "edge-pattern",
          zone: "zone-2",
          useManagementVpc: true,
          params: {
            image: "f5-image",
            resource_group: "resource-group",
            ssh_keys: ["ssh-key"],
            profile: "profile",
          },
        },
        {
          pattern: "edge-pattern",
          zone: "zone-3",
          useManagementVpc: true,
          params: {
            image: "f5-image",
            resource_group: "resource-group",
            ssh_keys: ["ssh-key"],
            profile: "profile",
          },
        },
      ];

      const result = f5Vsis(stateData, componentProps);
      assert.deepStrictEqual(result, expectedVsis);
    });
  });
});
