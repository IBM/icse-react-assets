const { saveChangeButtonClass } = require("../src/lib/button-utils");

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
