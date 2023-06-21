const { assert } = require("chai");
const { handleRgToggle } = require("../../src/lib/forms");

describe("handleRgToggle", () => {
  it("should turn off the use_prefix toggle when not using data.", () => {
    let currentState = {
      use_prefix: true,
      name: "service-rg",
      use_data: false,
    };
    let expectedData = {
      use_prefix: false,
      name: "service-rg",
      use_data: true,
    };
    let actualData = handleRgToggle(currentState, "use_data");
    assert.deepEqual(expectedData, actualData);
  });
  it("should toggle use_prefix without affecting use_data", () => {
    let currentState = {
      use_prefix: false,
      name: "service-rg",
      use_data: false,
    };
    let expectedData = {
      use_prefix: true,
      name: "service-rg",
      use_data: false,
    };
    let actualData = handleRgToggle(currentState, "use_prefix");
    assert.deepEqual(expectedData, actualData);
  });
});
