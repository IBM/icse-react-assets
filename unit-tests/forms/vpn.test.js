const { assert } = require("chai");
const { vpnRouteInputChange } = require("../../src/lib/forms");

describe("vpn_server_routes", () => {
  describe("vpnRouteInputChange", () => {
    let state = {};
    let event = {
      target: {
        name: "action",
        value: "Drop",
      },
    };
    assert.deepEqual(vpnRouteInputChange(event, state), { action: "drop" });
  });
});
