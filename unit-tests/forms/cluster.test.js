const { assert } = require("chai");
const { filterKubeVersion } = require("../../src/lib");

describe("cluster", () => {
  describe("filterKubeVersion", () => {
    it("should return default version string", () => {
      let actualValue = filterKubeVersion("default", "openshift");
      let expectedValue = "default";
      assert.equal(actualValue, expectedValue);
    });
    it("should remove default from openshift version string", () => {
      let actualValue = filterKubeVersion(
        "4.11.39_openshift (Default)",
        "openshift"
      );
      let expectedValue = "4.11.39_openshift";
      assert.equal(actualValue, expectedValue);
    });
    it("should remove default from openshift version string if present", () => {
      let actualValue = filterKubeVersion("4.9.59_openshift", "openshift");
      let expectedValue = "4.9.59_openshift";
      assert.equal(actualValue, expectedValue);
    });
    it("should return undefined if openshift version string provided but kube type is iks", () => {
      let actualValue = filterKubeVersion("4.9.59_openshift", "iks");
      let expectedValue = undefined;
      assert.equal(actualValue, expectedValue);
    });
    it("should remove default from kube version string", () => {
      let actualValue = filterKubeVersion(
        "1.25.10_kubernetes (Default)",
        "iks"
      );
      let expectedValue = "1.25.10_kubernetes";
      assert.equal(actualValue, expectedValue);
    });
    it("should remove default from kube version string if present", () => {
      let actualValue = filterKubeVersion("1.25.10_kubernetes", "iks");
      let expectedValue = "1.25.10_kubernetes";
      assert.equal(actualValue, expectedValue);
    });
  });
});
