const { assert } = require("chai");
const { handleNumberDropdownEvent } = require("../src/lib/utils");

describe("utils", () => {
  describe("handleNumberDropdownEvent", () => {
    it("should return correct value from returned function", () => {
      let testData;
      let eventHandler = handleNumberDropdownEvent({
        handleInputChange: (data) => {
          testData = data;
        },
      });
      eventHandler({
        target: {
          name: "frog",
          value: "1",
        },
      });
      assert.deepEqual(
        testData,
        {
          target: {
            name: "frog",
            value: 1,
          },
        },
        "it should return correct value"
      );
    });
  });
});
