const { assert } = require("chai");
const {
  toggleMarginBottom,
  addClassName,
  checkNullorEmptyString,
  prependEmptyStringWhenNull,
  invalidRegex,
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
  describe("checkNullorEmptyString", () => {
    it("should return true if string input is empty", () => {
      assert.isTrue(checkNullorEmptyString(""), "it should be true");
    });
    it("should return true if input is null", () => {
      assert.isTrue(checkNullorEmptyString(null), "it should be true");
    });
    it("should return false otherwise", () => {
      assert.isFalse(checkNullorEmptyString("test"), "it should be false");
    });
  });
  describe("prependEmptyStringWhenNull", () => {
    it("should return array with empty string prepended if value is null", () => {
      assert.deepEqual(
        prependEmptyStringWhenNull(null, ["hi"]),
        ["", "hi"],
        "it should prepend empty string"
      );
    });
    it("should return array if value is not null", () => {
      assert.deepEqual(
        prependEmptyStringWhenNull("hm", ["hi"]),
        ["hi"],
        "it should not prepend empty string"
      );
    });
  });
  describe("invalidRegex", () => {
    it("should return false and with correct error text", () => {
      assert.deepEqual(
        invalidRegex(
          "scope_name",
          "test-name",
          /^[A-z]([a-z0-9-]*[a-z0-9])?$/i
        ),
        {
          invalid: false,
          invalidText: `Invalid scope_name. Must match regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`,
        }
      );
    });
    it("should return true and with correct error text", () => {
      assert.deepEqual(
        invalidRegex(
          "scope_name",
          "test name wrong",
          /^[A-z]([a-z0-9-]*[a-z0-9])?$/i
        ),
        {
          invalid: true,
          invalidText: `Invalid scope_name. Must match regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`,
        }
      );
    });
  });
});
