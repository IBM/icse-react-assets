const { assert } = require("chai");
const { cbrInvalid } = require("../src/lib/cbr-utils");

describe("cbr-utils", () => {
  describe("cbrInvalid", () => {
    it("should return invalid false if valid", () => {
      assert.isFalse(cbrInvalid("account_id", "hoidfiasfjoasfd").invalid);
    });
    it("should return invalid false if empty string", () => {
      assert.isFalse(cbrInvalid("account_id", "").invalid);
    });
    it("should return invalid true if too long", () => {
      assert.deepEqual(
        cbrInvalid(
          "account_id",
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ),
        {
          invalid: true,
          invalidText: `Invalid account_id. Value must match regex expression /^[0-9a-z-]+$/.`,
        }
      );
    });
  });
});
