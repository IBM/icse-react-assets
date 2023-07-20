const { assert } = require("chai");
const { statefulTabPanelParams } = require("../src/lib/stateful-tab-panel");

describe("statefulTabPanelParams", () => {
  it("should pass subheading when subheading true", () => {
    let expectedData = {
      headingType: "subHeading",
      dynamicRenderHide: true,
      headingHide: true,
      buttonIsDisabled: false,
    };
    let actualData = statefulTabPanelParams(
      {
        subHeading: true,
        hideFormTitleButton: true,
        hasBuiltInHeading: false,
        name: "hi",
      },
      { tabIndex: 1 },
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should pass heading when not subheading", () => {
    let expectedData = {
      headingType: "heading",
      dynamicRenderHide: false,
      headingHide: true,
      buttonIsDisabled: true,
    };
    let actualData = statefulTabPanelParams(
      {
        subHeading: false,
        hideFormTitleButton: false,
        hasBuiltInHeading: false,
        name: "hi",
        onClick: () => {},
        shouldDisableSave: () => {
          return true;
        },
      },
      { tabIndex: 0 },
    );
    assert.deepEqual(expectedData, actualData);
  });
});
