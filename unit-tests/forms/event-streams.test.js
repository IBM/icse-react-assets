const { assert } = require("chai");
const {
  handleAllowedIps,
  handlePlanChange,
} = require("../../src/lib/forms/event-streams");

describe("event-streams", () => {
  describe("handleAllowedIps", () => {
    it("should replace whitespace with empty string", () => {
      let event = {
        target: { name: "private_ip_allowlist", value: "12.12.12.12/24 " },
      };
      let expectedData = { private_ip_allowlist: "12.12.12.12/24" };
      assert.deepEqual(handleAllowedIps(event, {}), expectedData);
    });
    describe("handlePlanChange", () => {
      it("should empty string certain values when plan is not enterprise", () => {
        let event = {
          target: {
            name: "plan",
            value: "standard",
          },
        };
        let expectedData = {
          plan: "standard",
          throughput: "",
          storage_size: "",
          private_ip_allowlist: "",
        };
        assert.deepEqual(
          handlePlanChange(event, {
            plan: "enterprise",
            private_ip_allowlist: "0.0.0.0/16",
          }),
          expectedData,
        );
      });
    });
    it("should pass through if plan is enterprise", () => {
      let event = {
        target: {
          name: "plan",
          value: "enterprise",
        },
      };
      let expectedData = {
        plan: "enterprise",
        private_ip_allowlist: "0.0.0.0/16",
      };
      assert.deepEqual(
        handlePlanChange(event, {
          plan: "enterprise",
          private_ip_allowlist: "0.0.0.0/16",
        }),
        expectedData,
      );
    });
  });
});
