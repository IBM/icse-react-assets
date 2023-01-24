const { assert } = require("chai");
const {
  toggleMarginBottom,
  addClassName,
  formatInputPlaceholder,
} = require("../src/lib/form-utils");

describe("form-utils", () => {
  describe("addClassName", () => {
    it("should add classname if found", () => {
      assert.deepEqual(
        addClassName("hi", { className: "mom" }),
        "hi mom",
        "it should return class"
      );
    });
    it("should return classname if not found", () => {
      assert.deepEqual(addClassName("hi"), "hi", "it should return class");
    });
    it("should remove marginRight and not marginRightSmall if noMarginRight is passed as a param", () => {
      assert.deepEqual(
        addClassName("hi", {
          className: "mom marginRight marginRightSmall frog",
          noMarginRight: true,
        }),
        "hi mom marginRightSmall frog",
        "it should return class"
      );
    });
  });
  describe("toggleMarginBottom", () => {
    it("should return margin bottom small when adding margin bottom", () => {
      assert.deepEqual(
        toggleMarginBottom(true),
        "",
        "it should return className"
      );
    });
    it("should return empty string when not shown or toggle form", () => {
      assert.deepEqual(
        toggleMarginBottom(false),
        " marginBottomSmall",
        "it should return className"
      );
    });
  });
  describe("formatInputPlaceholder", () => {
    it("should return a formatted placeholder", () => {
      assert.deepEqual(
        "my-component-name-field-name",
        formatInputPlaceholder("component name", "field name"),
        "it should return true"
      );
    });
  });
});
