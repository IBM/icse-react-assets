import React from "react";
import { VsiVolumeForm } from "icse-react-assets";
import { contains } from "lazy-z";
import "./App.css";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function encryptionKeyFilter(stateData, componentProps) {
  // add filter here
  return componentProps.encryptionKeys;
}

function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  return contains(["foo", "bar"], stateData.name)
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function App() {
  return (
    <VsiVolumeForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      encryptionKeyFilter={encryptionKeyFilter}
      encryptionKeys={["key1", "key2"]}
      data={{
        name: "",
        profile: "3iops-tier",
        encryption_key: "key1",
        capacity: "",
      }}
    />
  );
}

export default App;
