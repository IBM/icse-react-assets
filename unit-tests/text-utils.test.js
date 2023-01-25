const { assert } = require("chai");
const {
  formatInputPlaceholder,
  hasInvalidName,
  validName,
} = require("../src/lib/text-utils");

describe("text-utils", () => {
  describe("formatInputPlaceholder", () => {
    it("should return a formatted placeholder", () => {
      assert.deepEqual(
        "my-component-name-field-name",
        formatInputPlaceholder("component name", "field name"),
        "it should return true"
      );
    });
  });
  describe("hasInvalidName", () => {
    it("should return the error text and validation", () => {
      let expectedData = {
        invalid: true,
        invalidText: `Invalid Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]/`,
      };
      let actualData = hasInvalidName("resource_groups", "44444");
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct text"
      );
    });
    it("should return the error text and validation when use data and illegal characters", () => {
      let expectedData = {
        invalid: true,
        invalidText: `Invalid name`,
      };
      let actualData = hasInvalidName("resource_groups", "$$$$", {}, true);
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct text"
      );
    });
    it("should return the error text and validation when use data and ends in hyphen", () => {
      let expectedData = {
        invalid: false,
        invalidText: `Invalid Name. No name provided.`,
      };
      let actualData = hasInvalidName(
        "resource_groups",
        "service-rg-",
        {},
        true
      );
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct text"
      );
    });
    it("should return the error text and validation when all caps name", () => {
      let expectedData = {
        invalid: true,
        invalidText: `Invalid Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]/`,
      };
      let actualData = hasInvalidName("resource_groups", "MMMMMM");
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct text"
      );
    });
  });
  describe("validName", () => {
    it("should return true if name matches", () => {
      assert.isTrue(validName("good-name"), "it should be true");
    });
    it("should return false if name does not match", () => {
      assert.isFalse(validName("55555good-name"), "it should be false");
    });
    it("should return false if no arguments passed", () => {
      assert.isFalse(validName(), "it should be false");
    });
  });
});
