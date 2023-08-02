const { assert } = require("chai");
const {
  routingTableRouteInputChange,
} = require("../../src/lib/forms/routing-table");

describe("routing table routes", () => {
  describe("routingTableRouteInputChange", () => {
    it("set next hop if not deliver", () => {
      let event = {
        target: { name: "action", value: "drop" },
      };
      let expectedData = {
        name: "route",
        action: "drop",
        next_hop: "0.0.0.0",
      };
      assert.deepEqual(
        routingTableRouteInputChange(
          {
            name: "route",
          },
          event,
        ),
        expectedData,
      );
    });
    it("set next hop to null when deliver", () => {
      let event = {
        target: { name: "action", value: "deliver" },
      };
      let expectedData = {
        name: "route",
        action: "deliver",
        next_hop: null,
      };
      assert.deepEqual(
        routingTableRouteInputChange(
          {
            name: "route",
          },
          event,
        ),
        expectedData,
      );
    });
    it("should pass through other values", () => {
      let event = {
        target: { name: "destination", value: "2.2.2.2" },
      };
      let expectedData = {
        name: "route",
        destination: "2.2.2.2",
      };
      assert.deepEqual(
        routingTableRouteInputChange(
          {
            name: "route",
          },
          event,
        ),
        expectedData,
      );
    });
  });
});
