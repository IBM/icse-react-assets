const { assert } = require("chai");
const {
  parseZoneStrings,
  handleSelectZones,
  handleSubnetTierToggle,
  handleSubnetShowToggle,
} = require("../../src/lib/forms/subnets");

describe("subnets", () => {
  describe("parseZoneStrings", () => {
    it("should return an array of stringified zones", () => {
      const stateData = {
        select_zones: [1, 2, 3],
      };
      const componentProps = {};
      const result = parseZoneStrings(stateData, componentProps);
      assert.deepStrictEqual(result, ["1", "2", "3"]);
    });

    it("should return an empty array when select_zones is empty", () => {
      const stateData = {
        select_zones: [],
      };
      const componentProps = {};
      const result = parseZoneStrings(stateData, componentProps);
      assert.deepStrictEqual(result, []);
    });
  });
  describe("handleSelectZones", () => {
    it("should update select_zones in stateData with the selected items", () => {
      const event = {
        selectedItems: [1, 2, 3],
      };
      const stateData = {
        select_zones: [],
      };
      const result = handleSelectZones(event, stateData);
      assert.deepStrictEqual(result.select_zones, [1, 2, 3]);
    });

    it("should set select_zones to an empty array when no items are selected", () => {
      const event = {
        selectedItems: [],
      };
      const stateData = {
        select_zones: [1, 2, 3],
      };
      const result = handleSelectZones(event, stateData);
      assert.deepStrictEqual(result.select_zones, []);
    });
  });
  describe("handleSubnetTierToggle", () => {
    it("should toggle the value of the specified property in stateData", () => {
      const name = "advanced";
      const stateData = {
        advanced: false,
      };
      const result = handleSubnetTierToggle(name, stateData);
      assert.strictEqual(result.advanced, true);
    });

    it("should set select_zones based on zones when advanced is set to true", () => {
      const name = "advanced";
      const stateData = {
        advanced: false,
        zones: 3,
      };
      const result = handleSubnetTierToggle(name, stateData);
      assert.deepStrictEqual(result.select_zones, [1, 2, 3]);
    });

    it("should update zones and set select_zones to null when advanced is set to false", () => {
      const name = "advanced";
      const stateData = {
        advanced: true,
        select_zones: [1, 2, 3],
      };
      const result = handleSubnetTierToggle(name, stateData);
      assert.strictEqual(result.zones, 3);
      assert.strictEqual(result.select_zones, null);
    });
    it("should just toggle when not advanced", () => {
      let name = "bleh";
      let stateData = { hi: "hey", bleh: false };
      let result = handleSubnetTierToggle(name, stateData);
      assert.deepEqual(result, { hi: "hey", bleh: true });
    });
  });
  describe("handleSubnetShowToggle", () => {
    it("should set showUnsavedChangesModal to true when propsMatchState is false and hide and showUnsavedChangesModal are false", () => {
      const stateData = {
        hide: false,
        showUnsavedChangesModal: false,
      };
      const componentProps = {
        propsMatchState: () => false,
      };
      const result = handleSubnetShowToggle(stateData, componentProps);
      assert.strictEqual(result.showUnsavedChangesModal, true);
    });

    it("should toggle hide and set showUnsavedChangesModal to false when propsMatchState is true or hide and showUnsavedChangesModal are true", () => {
      const stateData = {
        hide: false,
        showUnsavedChangesModal: false,
      };
      const componentProps = {
        propsMatchState: () => {
          return true;
        },
      };
      let result = handleSubnetShowToggle(stateData, componentProps);
      assert.strictEqual(result.hide, true);
      assert.strictEqual(result.showUnsavedChangesModal, false);
    });
    it("should toggle both to false when true", () => {
      const stateData = {
        hide: true,
        showUnsavedChangesModal: true,
      };
      const componentProps = {
        propsMatchState: () => {
          return true;
        },
      };
      let result = handleSubnetShowToggle(stateData, componentProps);
      assert.strictEqual(result.hide, false);
      assert.strictEqual(result.showUnsavedChangesModal, false);
    });
  });
});
