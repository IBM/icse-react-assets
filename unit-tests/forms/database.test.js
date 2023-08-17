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
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should change plan and group_id to `standard` and `member` if service is changed from mongodb", () => {
    let event = {
      target: { name: "service", value: "Databases for Etcd" },
    };
    let expectedData = {
      resource_group: "hi",
      service: "databases-for-etcd",
      plan: "standard",
      group_id: "member",
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        service: "databases-for-mongodb",
        plan: "enterprise",
        group_id: "bi_connector",
      },
      event
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
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should change memory to number value", () => {
    let event = {
      target: { name: "memory", value: "100" },
    };
    let expectedData = {
      resource_group: "hi",
      memory: 100,
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        memory: "",
      },
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should change disk to number value", () => {
    let event = {
      target: { name: "disk", value: "100" },
    };
    let expectedData = {
      resource_group: "hi",
      disk: 100,
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        disk: "",
      },
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
  it("should change cpu to number value", () => {
    let event = {
      target: { name: "cpu", value: "5" },
    };
    let expectedData = {
      resource_group: "hi",
      cpu: 5,
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        cpu: "",
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
      plan: "standard",
    };
    let actualData = databaseInputChange(
      {
        resource_group: "hi",
        plan: "standard",
      },
      event
    );
    assert.deepEqual(expectedData, actualData);
  });
});
