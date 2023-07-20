const { assert } = require("chai");
const { icseSelectParams } = require("../src/lib/dropdowns");

describe("dropdown functions", () => {
  describe("icseSelectParams", () => {
    it("should return correct props when value is not null or empty string", () => {
      let expectedData = {
        invalid: "frog, also",
        groups: ["frog"],
        popoverClassName: " select",
        wrapperId: "select-dropdown-tooltip",
        selectId: "select-select",
        labelText: "hi",
        selectClassName: "leftTextAlign",
      };
      let actualData = icseSelectParams({
        value: "toad",
        invalid: "frog, also",
        groups: ["frog"],
        name: "select",
        formName: "select",
        labelText: "hi",
      });

      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return correct props when value is not null or empty string with no groups", () => {
      let expectedData = {
        invalid: "frog, also",
        groups: [],
        popoverClassName: " select",
        wrapperId: "select-dropdown-tooltip",
        selectId: "select-select",
        labelText: "hi",
        selectClassName: "leftTextAlign",
      };
      let actualData = icseSelectParams({
        value: "toad",
        invalid: "frog, also",
        groups: [],
        name: "select",
        formName: "select",
        labelText: "hi",
      });

      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return correct props when value is not null or empty string with no groups with tooltip", () => {
      let expectedData = {
        invalid: "frog, also",
        groups: [],
        popoverClassName: "tooltip select",
        wrapperId: "select-dropdown-tooltip",
        selectId: "select-select",
        labelText: null,
        selectClassName: "leftTextAlign tooltip",
      };
      let actualData = icseSelectParams({
        value: "toad",
        invalid: "frog, also",
        groups: [],
        name: "select",
        formName: "select",
        labelText: "hi",
        tooltip: {
          content: "content",
        },
      });

      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return correct props when value is null or empty string", () => {
      let expectedData = {
        invalid: true,
        groups: ["", "frog"],
        popoverClassName: " select",
        wrapperId: "select-dropdown-tooltip",
        selectId: "select-select",
        labelText: "hi",
        selectClassName: "leftTextAlign",
      };
      let actualData = icseSelectParams({
        value: null,
        invalid: "frog, also",
        groups: ["frog"],
        name: "select",
        formName: "select",
        labelText: "hi",
      });

      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return correct props when value is null or empty string and invalid is disabled", () => {
      let expectedData = {
        invalid: false,
        groups: ["", "frog"],
        popoverClassName: " select",
        wrapperId: "select-dropdown-tooltip",
        selectId: "select-select",
        labelText: "hi",
        selectClassName: "leftTextAlign",
      };
      let actualData = icseSelectParams({
        value: null,
        invalid: false,
        groups: ["frog"],
        name: "select",
        formName: "select",
        labelText: "hi",
        disableInvalid: true,
      });

      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
  });
});
