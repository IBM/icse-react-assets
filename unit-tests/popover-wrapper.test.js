const { assert } = require("chai");
const { popoverWrapperParams } = require("../src/lib/popover-wrapper");

describe("popoverWrapperParams", () => {
  it("should pass the correct params", () => {
    let expectedData = {
      noPopover: true,
      autoAlign: true,
      contentClassName: "popover-box hi",
    };
    let actualData = popoverWrapperParams({
      noPopover: true,
      contentClassName: "hi",
    });
    assert.deepEqual(actualData, expectedData);
  });
  it("should pass correct params when there is a popover", () => {
    let expectedData = {
      noPopover: false,
      autoAlign: false,
      contentClassName: "popover-box",
    };
    let actualData = popoverWrapperParams({
      align: "bottom",
    });
    assert.deepEqual(actualData, expectedData);
  });
});
