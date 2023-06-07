const { assert } = require("chai");
const { docTextFieldParams } = require("../src/lib/doc-utils");

describe("doc-utils", () => {
  describe("docTextFieldParams", () => {
    it("should return correct params when text is default includes", () => {
      let expectedData = {
        className: "marginBottomSmall",
        text: "The default configuration includes:",
      };
      let actualData = docTextFieldParams({ text: "_default_includes" });
      assert.deepEqual(actualData, expectedData);
    });
    it("should pass through text and className when not default includes", () => {
      let expectedData = {
        className: "marginBottom",
        text: "hi",
      };
      let actualData = docTextFieldParams({
        text: "hi",
        className: "marginBottom",
      });
      assert.deepEqual(actualData, expectedData);
    });
  });
});
