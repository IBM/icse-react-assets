import React from "react";
import { CbrRuleForm } from "icse-react-assets";
import { contains } from "lazy-z";

import "./App.css";

const CbrRuleFormStory = ({ ...args }) => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidNameCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidNameTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidCallback(field, stateData, componentProps) {
    switch (field) {
      case "api_type_id":
        return (
          stateData.api_type_id.length > 128 ||
          (stateData.api_type_id.length > 0 &&
            stateData.api_type_id.match(/^[a-zA-Z0-9_.\-:]+$/i) === null)
        );
      case "description":
        return (
          stateData.description.length > 300 ||
          (stateData.description.length > 0 &&
            stateData.description.match(/^[\x20-\xFE]*$/i) === null)
        );

      default:
        return false;
    }
  }

  function invalidTextCallback(field, stateData, componentProps) {
    return `Invalid ${field}`;
  }

  return (
    <CbrRuleForm
      {...args}
      data={{
        name: "example",
        description: "",
        enforcement_mode: "Disabled",
        api_type_id: "",
        contexts: [{ name: "context1", value: "" }],
        resource_attributes: [{ name: "attribute1", value: "" }],
        tags: [{ name: "tag1", value: "value", operator: "equals" }],
      }}
      propsMatchState={() => {}}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
      contextProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
      resourceAttributeProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
      tagProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
    />
  );
};

function App() {
  return <CbrRuleFormStory />;
}

export default App;
