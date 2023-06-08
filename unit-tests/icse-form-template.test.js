const { assert } = require("chai");
const { icseFormTemplateParams } = require("../src/lib/icse-form-template");

describe("icseFormTemplateParams", () => {
  it("should receive array is empty and tabpanelclass", () => {
    let expectedData = {
      arrayIsEmpty: false,
      tabPanelClassName: "subHeading marginBottomSmall",
    };
    let actualData = icseFormTemplateParams({
      arrayData: [],
      overrideTile: false,
      subHeading: true,
    });
    assert.deepEqual(actualData, expectedData);
  });
  it("should say array is empty when array is not empty and override tile", () => {
    let expectedData = {
      arrayIsEmpty: true,
      tabPanelClassName: "",
    };
    let actualData = icseFormTemplateParams({
      arrayData: [],
      overrideTile: true,
      subHeading: false,
    });
    assert.deepEqual(actualData, expectedData);
  });
});
