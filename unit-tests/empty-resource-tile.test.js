const { assert } = require("chai");
const { emptyResourceTileParams } = require("../src/lib/empty-resource-tile");

describe("emptyResourceTileParams", () => {
  it("should pass back correct params", () => {
    let expectedData = {
      show: true,
      className: "tileBackground displayFlex alignItemsCenter wrap marginTop",
    };
    let actualData = emptyResourceTileParams({ showIfEmpty: [] });
    assert.deepEqual(actualData, expectedData, "they should be equal");
  });
  it("should not have marginTop when no margin top", () => {
    let expectedData = {
      show: false,
      className: "tileBackground displayFlex alignItemsCenter wrap",
    };
    let actualData = emptyResourceTileParams({
      showIfEmpty: true,
      noMarginTop: true,
    });
    assert.deepEqual(actualData, expectedData, "they should be the same");
  });
});
