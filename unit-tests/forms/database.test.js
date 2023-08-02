const { assert } = require("chai");
const { databaseInputChange } = require("../../src/lib/forms");

describe("databaseInputChange", () => {
  it("should change service to kebab case", () => {
    let event = {
      target: { name: "service", value: "Databases for Mongodb" },
    };
    let expectedData = {
      resource_group: "hi",
      service: "databases-for-mongodb",
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        service: "",
      },
      event,
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should change plan to kebab case", () => {
    let event = {
      target: { name: "plan", value: "Standard" },
    };
    let expectedData = {
      resource_group: "hi",
      plan: "standard",
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        plan: "",
      },
      event,
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should set other values", () => {
    let event = {
      target: { name: "resource_group", value: "management" },
    };
    let expectedData = {
      resource_group: "management",
      plan: "standard",
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        plan: "standard",
      },
      event,
    );
    assert.deepEqual(expectedData, actualData);
  });
});
