const { assert } = require("chai");
const {
  toggleParams,
  onToggleEvent,
  textInputParams,
} = require("../src/lib/input-utils");

describe("input utils", () => {
  describe("toggleParams", () => {
    it("should return correct params when using on off", () => {
      let actualData = toggleParams({
        toggleFieldName: "test",
        useOnOff: true,
        labelText: "label",
      });
      delete actualData.onToggle;
      let expectedData = {
        toggleName: "test",
        labelA: "Off",
        labelB: "On",
        labelText: "label",
        id: "test-icse-toggle-undefined",
        className: "leftTextAlign fitContent cds--form-item",
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return correct params when using tooltip and no toggleFieldName", () => {
      let actualData = toggleParams({
        tooltip: {
          content: "tooltip",
        },
        useOnOff: false,
        labelText: "label",
      });
      delete actualData.onToggle;
      let expectedData = {
        toggleName: "label",
        labelA: "False",
        labelB: "True",
        labelText: " ",
        id: "label-icse-toggle-undefined",
        className: "leftTextAlign fitContent cds--form-item tooltip",
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
  });
  describe("onToggleEvent", () => {
    it("should return correct data on toggle", () => {
      let data;
      let handler = function (toggleName, event) {
        data = {
          name: toggleName,
          event: event,
        };
      };
      onToggleEvent({ onToggle: handler }, "test")("frog");
      assert.deepEqual(
        data,
        {
          name: "test",
          event: "frog",
        },
        "it should return data",
      );
    });
  });
  describe("textInputParams", () => {
    it("should return the correct params when invalidText, invalid, optional, placeholder, and labelText", () => {
      let actualData = textInputParams({
        field: "test",
        invalidText: "invalid text",
        invalid: false,
        optional: true,
        placeholder: "test placeholder",
        componentName: "component",
        labelText: "test",
        onInputChange: "hi",
      });
      let expectedData = {
        invalid: false,
        invalidText: "invalid text",
        placeholder: "(Optional) test placeholder",
        labelText: "test",
        onInputChange: undefined,
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return the correct params when no invalidText, invalidCallback, not optional, no placeholder, and no labelText", () => {
      let actualData = textInputParams({
        field: "test",
        invalidCallback: () => {
          return false;
        },
        componentName: "component",
        onInputChange: "hi",
      });
      let expectedData = {
        invalid: false,
        invalidText: "Invalid test value.",
        placeholder: "my-component-test",
        labelText: "Test",
        onInputChange: undefined,
      };
      assert.deepEqual(
        actualData,
        expectedData,
        "it should return correct data",
      );
    });
    it("should return force kebab case data", () => {
      let data;
      let actualData = textInputParams({
        field: "test",
        invalidText: "invalid text",
        invalid: false,
        optional: true,
        placeholder: "test placeholder",
        componentName: "component",
        labelText: "test",
        forceKebabCase: true,
        onChange: (event) => {
          data = event;
        },
      });
      actualData.onInputChange({
        target: {
          value: "hello world",
        },
      });
      assert.deepEqual(
        data,
        {
          target: {
            value: "hello-world",
          },
        },
        "it should return the correct data",
      );
    });
  });
});
