const {
  saveChangeButtonClass,
  saveAddParams,
} = require("../src/lib/button-utils");
const { assert } = require("chai");

describe("button utils", () => {
  describe("saveChangeButtonClass", () => {
    it("should return default styles with no params", () => {
      assert.deepEqual(
        saveChangeButtonClass({}),
        "forceTertiaryButtonStyles marginRightSmall tertiaryButtonColors",
        "it should return button styles"
      );
    });
    it("should return default styles with topLevelToggleForm params", () => {
      assert.deepEqual(
        saveChangeButtonClass({ topLevelToggleForm: true }),
        "forceTertiaryButtonStyles marginRightSmall tertiaryButtonColors",
        "it should return button styles"
      );
    });
    it("should return default styles when not hiding delete", () => {
      assert.deepEqual(
        saveChangeButtonClass({ noDeleteButton: true }),
        "forceTertiaryButtonStyles tertiaryButtonColors",
        "it should return button styles"
      );
    });
    it("should return default styles when save is disabled", () => {
      assert.deepEqual(
        saveChangeButtonClass({ disabled: true }),
        "forceTertiaryButtonStyles marginRightSmall",
        "it should return button styles"
      );
    });
  });
  describe("saveAddParams", () => {
    it("should return the correct class when disabled, inline, add, and has default hover text", () => {
      let expectedData = {
        hoverText: "Add Resource",
        wrapperClassDisabled: "inlineBlock cursorNotAllowed",
        wrapperClassInline: " alignItemsCenter marginTopLarge inLineFormButton",
        buttonKind: "tertiary",
        buttonClass:
          "forceTertiaryButtonStyles marginRightSmall pointerEventsNone ",
      };
      let actualData = saveAddParams({
        type: "add",
        hoverText: "Save Changes",
        disabled: true,
        inline: true,
      });
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should return the correct class when not disabled, not inline, add, and does not have default hover text", () => {
      let expectedData = {
        hoverText: "Save changes",
        wrapperClassDisabled: "",
        wrapperClassInline: "",
        buttonKind: "primary",
        buttonClass:
          "forceTertiaryButtonStyles marginRightSmall tertiaryButtonColors ",
      };
      let actualData = saveAddParams({
        type: "save",
        hoverText: "Save changes",
      });
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should return the correct class when not disabled, not inline, save, and has default hover text", () => {
      let expectedData = {
        hoverText: "Save changes",
        wrapperClassDisabled: "",
        wrapperClassInline: "",
        buttonKind: "primary",
        buttonClass:
          "forceTertiaryButtonStyles marginRightSmall tertiaryButtonColors ",
      };
      let actualData = saveAddParams({
        type: "save",
        hoverText: "Save changes",
      });
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
  });
});
