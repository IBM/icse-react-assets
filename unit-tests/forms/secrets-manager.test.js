const { assert } = require("chai");
const { onCheckClick } = require("../../src/lib/forms");

describe("secrets manager", () => {
  describe("onCheckClick", () => {
    it("should return empty array when ref is select all", () => {
      assert.deepEqual(
        onCheckClick(["Select All"], "Select All"),
        [],
        "it should return correct selected"
      );
    });
    it("should return all items when clicking select all", () => {
      assert.deepEqual(
        onCheckClick([], "Select All", [
          {
            ref: "hello",
          },
          {
            ref: "world",
          },
        ]),
        ["Select All", "hello", "world"],
        "it should return correct selected"
      );
    });
    it("should remove an item when clicked", () => {
      assert.deepEqual(
        onCheckClick(["hello", "world"], "hello", [
          {
            ref: "hello",
          },
          {
            ref: "world",
          },
        ]),
        ["world"],
        "it should return correct selected"
      );
    });
    it("should add an item when clicked", () => {
      assert.deepEqual(
        onCheckClick(["world"], "hello", [
          {
            ref: "hello",
          },
          {
            ref: "world",
          },
        ]),
        ["world", "hello"],
        "it should return correct selected"
      );
    });
  });
});
