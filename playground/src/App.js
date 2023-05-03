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

  function invalidCallback(field, stateData, componentProps) {
    if (field === "name")
      return (
        !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
      );
    else return false;
  }

  function invalidTextCallback(field, stateData, componentProps) {
    if (field === "name")
      return contains(["foo", "bar"], stateData.name)
        ? `Name ${stateData.name} already in use.`
        : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
    else return `Invalid ${field}`;
  }

  return (
    <CbrRuleForm
      {...args}
      data={{
        name: "rule",
        description: "",
        enforcement_mode: "",
        api_type_id: "",
        contexts: [{ name: "context1", value: "" }],
        resource_attributes: [{ name: "ra1", value: "" }],
        tags: [{ name: "tag1", value: "", operator: "hmm" }],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      propsMatchState={() => {}}
      invalidContextCallback={invalidCallback}
      invalidContextTextCallback={invalidTextCallback}
      contextProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      invalidResourceAttributeCallback={invalidCallback}
      invalidResourceAttributeTextCallback={invalidTextCallback}
      resourceAttributeProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      invalidTagCallback={invalidCallback}
      invalidTagTextCallback={invalidTextCallback}
      tagProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};

function App() {
  return <CbrRuleFormStory />;
}

export default App;
