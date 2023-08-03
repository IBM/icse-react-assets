const { assert } = require("chai");
const {
  handleDnsResolverInputChange,
  dnsFormInputChange,
} = require("../../src/lib/forms");

describe("dns", () => {
  describe("handleDnsResolverInputChange", () => {
    it("should set subnets to [] when vpc changes", () => {
      let event = {
        target: { name: "vpc", value: "management" },
      };
      let expectedData = {
        resource_group: "hi",
        vpc: "management",
        subnets: [],
      };
      let actualData = handleDnsResolverInputChange(
        {
          resource_group: "hi",
          vpc: "",
          subnets: ["hi"],
        },
        event
      );
      assert.deepEqual(expectedData, actualData);
    });
    it("should set any other param", () => {
      let event = {
        target: { name: "resource_group", value: "management" },
      };
      let expectedData = {
        resource_group: "management",
        vpc: "management",
      };
      let actualData = handleDnsResolverInputChange(
        {
          resource_group: "hi",
          vpc: "management",
        },
        event
      );
      assert.deepEqual(expectedData, actualData);
    });
  });
  describe("dnsFormInputChange", () => {
    it("should return value when name is plan", () => {
      assert.deepEqual(
        dnsFormInputChange({
          target: {
            name: "plan",
            value: "PLAN",
          },
        }),
        { plan: "plan" },
        "it should return correct value"
      );
    });
    it("should return value", () => {
      assert.deepEqual(
        dnsFormInputChange({
          target: {
            name: "name",
            value: "PLAN",
          },
        }),
        { name: "PLAN" },
        "it should return correct value"
      );
    });
  });
});
