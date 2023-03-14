import React, { useState } from "react";
import { contains } from "lazy-z";
import { AccessGroupForm } from "icse-react-assets";
import "./App.css";

const AccessGroupFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(field, stateData, componentProps) {
    if (field === "identity_provider")
      return !(stateData.identity_provider.length >= 6);
    else return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function composedNameCallback(stateData, componentProps) {
    return `${stateData.name}-<random suffix>`;
  }

  return (
    <AccessGroupForm
      data={{
        name: "test",
        description: "foo",
        policies: [],
        dynamic_policies: [],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidPolicyCallback={invalidCallback}
      invalidPolicyTextCallback={invalidTextCallback}
      invalidDynamicPolicyCallback={invalidCallback}
      invalidDynamicPolicyTextCallback={invalidTextCallback}
      policyHelperTextCallback={composedNameCallback}
      dynamicPolicyHelperTextCallback={composedNameCallback}
      policyProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      dynamicPolicyProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};
function App() {
  return (
    <div className="App">
      <AccessGroupFormStory />
    </div>
  );
}

export default App;
