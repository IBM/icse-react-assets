const { assert } = require("chai");
const { atrackerInputChange } = require("../../src/lib/forms");

describe("atrackerInputChange", () => {
  it("should change plan to kebab case", () => {
    let event = {
      target: { name: "plan", value: "14 Day" },
    };
    let expectedData = {
      resource_group: "hi",
      plan: "14-day",
    };
    let actualData = atrackerInputChange(
      {
        resource_group: "hi",
        plan: "7-day",
      },
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should set other values", () => {
    let event = {
      target: { name: "resource_group", value: "management" },
    };
    let expectedData = {
      resource_group: "management",
      plan: "14-day",
    };
    let actualData = atrackerInputChange(
      {
        resource_group: "hi",
        plan: "14-day",
      },
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
});
