const { assert } = require("chai");
const {
  workerPoolInit,
  workerPoolInputChange,
  workerPoolSubnetChange,
} = require("../../src/lib/forms/worker-pools");

describe("worker pool functions", () => {
  describe("workerPoolInit", () => {
    it("should create correct data when modal", () => {
      let actualData = workerPoolInit({
        isModal: true,
        cluster: {
          flavor: "foo",
          subnets: "bar",
          vpc: "baz",
          workers_per_subnet: "frog",
          entitlement: "toad",
        },
      });
      let expectedData = {
        name: "",
        flavor: "foo",
        subnets: "bar",
        vpc: "baz",
        workers_per_subnet: "frog",
        entitlement: "toad",
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should create correct data when modal and no subnets", () => {
      let actualData = workerPoolInit({
        isModal: true,
        cluster: {
          flavor: "foo",
          vpc: "baz",
          workers_per_subnet: "frog",
          entitlement: "toad",
        },
      });
      let expectedData = {
        name: "",
        flavor: "foo",
        subnets: [],
        vpc: "baz",
        workers_per_subnet: "frog",
        entitlement: "toad",
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should create correct data when not modal", () => {
      let actualData = workerPoolInit({ data: { hi: "mom" } });
      let expectedData = { hi: "mom" };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
  });
  describe("workerPoolInputChange", () => {
    it("should return correct value when changing workers per subnet", () => {
      let actualData = workerPoolInputChange(
        {
          target: {
            name: "workers_per_subnet",
            value: "12",
          },
        },
        {}
      );
      let expectedData = { workers_per_subnet: 12 };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should return correct value when changing null value", () => {
      let actualData = workerPoolInputChange(
        {
          target: {
            name: "frog",
            value: "null",
          },
        },
        {}
      );
      let expectedData = { frog: null };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
    it("should return correct value when changing non null value", () => {
      let actualData = workerPoolInputChange(
        {
          target: {
            name: "frog",
            value: "not-null",
          },
        },
        {}
      );
      let expectedData = { frog: "not-null" };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
  });
  describe("workerPoolSubnetChange", () => {
    it("should set subnets", () => {
      let actualData = workerPoolSubnetChange("frog", {});
      let expectedData = { subnets: "frog" };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data"
      );
    });
  });
});
