const { assert } = require("chai");
const {
  handleNumberDropdownEvent,
  titleGroupParams,
  formGroupParams,
} = require("../src/lib/utils");

describe("utils", () => {
  describe("handleNumberDropdownEvent", () => {
    it("should return correct value from returned function", () => {
      let testData;
      let eventHandler = handleNumberDropdownEvent({
        handleInputChange: (data) => {
          testData = data;
        },
      });
      eventHandler({
        target: {
          name: "frog",
          value: "1",
        },
      });
      assert.deepEqual(
        testData,
        {
          target: {
            name: "frog",
            value: 1,
          },
        },
        "it should return correct value"
      );
    });
  });
  describe("titleGroupParams", () => {
    it("should add a className", () => {
      let expectedData =
        "displayFlex alignItemsCenter widthOneHundredPercent  marginBottomSmall hi";
      let actualData = titleGroupParams({ hide: false, className: "hi" });
      assert.deepEqual(actualData, expectedData);
    });
  });
  describe("formGroupParams", () => {
    it("should remove marginBottom if noMarginBottom passed and add classNames", () => {
      let expectedData = "displayFlex evenSpacing wrap alignItemsTop hi";
      let actualData = formGroupParams({
        noMarginBottom: true,
        className: "hi",
      });
      assert.deepEqual(actualData, expectedData);
    });
  });
});
