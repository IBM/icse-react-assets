const { assert } = require("chai");
const { handleVpnGatewayChange } = require("../../src/lib/forms");

describe("vpn gateways", () => {
  it("should return correct object on vpc change", () => {
    let actualData = handleVpnGatewayChange({
      target: {
        name: "vpc",
        value: "frog",
      },
    });
    assert.deepEqual(
      actualData,
      {
        vpc: "frog",
        subnet: "",
      },
      "it should return correct data",
    );
  });
  it("should return correct object for other cases", () => {
    let actualData = handleVpnGatewayChange({
      target: {
        name: "x",
        value: "frog",
      },
    });
    assert.deepEqual(
      actualData,
      {
        x: "frog",
      },
      "it should return correct data",
    );
  });
});
