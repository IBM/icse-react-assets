import React from "react";
import "./App.css";
import { SecretsManagerForm } from "icse-react-assets";

const exampleData = [
  {
    cos: "atracker-cos",
    key: "cos-bind-key",
    ref: "ibm_resource_key.atracker_cos_object_storage_key_cos_bind_key",
  },
  {
    appid: "default",
    key: "test",
    ref: "ibm_resource_key.default_key_test",
  },
  {
    ref: "ibm_resource_key.logdna_key",
    key: "logdna-key",
  },
  {
    ref: "ibm_resource_key.sysdig_key",
    key: "sysdig-key",
  },
];

const SecretsManagerFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <SecretsManagerForm
      data={{
        name: "Example",
        resource_group: "default",
        encryption_key: "key1",
        secrets: exampleData
      }}
      secrets={exampleData}
      resourceGroups={["default_group", "foo", "bar"]}
      encryptionKeys={["default_key", "foo"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

function App() {
  return <SecretsManagerFormStory />;
}

export default App;
