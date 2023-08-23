const { assert, expect } = require("chai");
const {
  handleNumberDropdownEvent,
  titleGroupParams,
  formGroupParams,
  icseSubFormParams,
  icseHeadingParams,
  statelessToggleFormParams,
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
        "it should return correct value",
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
    it("should have marginBottom", () => {
      let expectedData =
        "displayFlex marginBottom evenSpacing wrap alignItemsTop";
      let actualData = formGroupParams({});
      assert.deepEqual(actualData, expectedData);
    });
  });
  describe("icseSubFormParams", () => {
    it("should pass correct className when formInSubForm", () => {
      let expectedData = "formInSubForm positionRelative";
      let actualData = icseSubFormParams({ formInSubForm: true });
      assert.deepEqual(expectedData, actualData);
    });
    it("should pass correct className when subForm", () => {
      let expectedData = "subForm marginBottomSmall";
      let actualData = icseSubFormParams({ formInSubForm: false });
      assert.deepEqual(expectedData, actualData);
    });
  });
  describe("icseHeadingParams", () => {
    it("should pass minHeight when there is a name and not toggleFormTitle", () => {
      let expectedData =
        "displayFlex spaceBetween widthOneHundredPercent alignItemsCenter icseFormTitleMinHeight";
      let actualData = icseHeadingParams({ name: "hi" });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass className otherwise", () => {
      let expectedData =
        "displayFlex spaceBetween widthOneHundredPercent alignItemsCenter hey";
      let actualData = icseHeadingParams({
        name: "",
        className: "hey",
      });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass nothing when toggleFormTitle", () => {
      let expectedData =
        "displayFlex spaceBetween widthOneHundredPercent alignItemsCenter";
      let actualData = icseHeadingParams({
        name: "",
        toggleFormTitle: true,
      });
      assert.deepEqual(actualData, expectedData);
    });
  });
  describe("statelessToggleFormParams", () => {
    it("should pass p when type p", () => {
      let expectedData = { type: "p", dynamicRenderHide: true };
      let actualData = statelessToggleFormParams({
        toggleFormTitle: true,
        hide: true,
        alwaysShowButtons: false,
      });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass subHeading when type subHeading", () => {
      let expectedData = { type: "subHeading", dynamicRenderHide: false };
      let actualData = statelessToggleFormParams({
        toggleFormTitle: false,
        subHeading: true,
        hide: true,
        alwaysShowButtons: true,
      });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass heading when type heading", () => {
      let expectedData = {
        type: "heading",
        dynamicRenderHide: false,
      };
      let actualData = statelessToggleFormParams({
        toggleFormTitle: false,
        hide: false,
        alwaysShowButtons: true,
      });
      assert.deepEqual(actualData, expectedData);
    });
  });
});
