const { assert } = require("chai");
const { throughputAndStorageOptions } = require("../src/lib/es-utils");

describe("es-utils", () => {
  describe("throughputAndStorageOptions", () => {
    it("should return enterprise options", () => {
      assert.deepEqual(
        throughputAndStorageOptions("enterprise"),
        {
          throughput: ["150MB/s", "300MB/s", "450MB/s"],
          storage: ["2TB", "4TB", "6TB", "8TB", "10TB", "12TB"],
        },
        "it should return true"
      );
    });
    it("should return non-enterprise options (empty)", () => {
      assert.deepEqual(
        throughputAndStorageOptions("lite"),
        {
          throughput: "",
          storage: "",
        },
        "it should return true"
      );
    });
  });
});
