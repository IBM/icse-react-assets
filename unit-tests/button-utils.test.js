const {
  saveChangeButtonClass,
  saveAddParams,
  editCloseParams,
  deleteButtonParams,
} = require("../src/lib/button-utils");
const { assert, expect } = require("chai");

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
  describe("editCloseParams", () => {
    it("should pass hoverText only when hoverText is a prop", () => {
      let expectedData = {
        hoverText: "frog",
      };
      let actualData = editCloseParams({ hoverText: "frog" });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass `Open` when open false and type not add", () => {
      let expectedData = { hoverText: "Open" };
      let actualData = editCloseParams({ open: false, type: "" });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass `Close` when open true and type not add", () => {
      let expectedData = { hoverText: "Close" };
      let actualData = editCloseParams({ open: true, type: "" });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass `Configure Resource` when open false and type add", () => {
      let expectedData = { hoverText: "Configure Resource" };
      let actualData = editCloseParams({ open: false, type: "add" });
      assert.deepEqual(actualData, expectedData);
    });
  });
  describe("deleteButtonParams", () => {
    it("should pass different classes when disabled", () => {
      let expectedData = {
        hoverText: "custom delete",
        popoverClassName: "inlineBlock cursorNotAllowed",
        buttonClassName:
          "cds--btn--danger--tertiary forceTertiaryButtonStyles pointerEventsNone",
        iconClassName: "",
      };
      let actualData = deleteButtonParams({
        disabled: true,
        disableDeleteMessage: "custom delete",
      });
      assert.deepEqual(expectedData, actualData);
    });
    it("should pass correct classes when not disabled", () => {
      let expectedData = {
        hoverText: "Delete Resource",
        popoverClassName: "",
        buttonClassName: "cds--btn--danger--tertiary forceTertiaryButtonStyles",
        iconClassName: "redFill",
      };
      let actualData = deleteButtonParams({ disabled: false });
      assert.deepEqual(expectedData, actualData);
    });
  });
});
