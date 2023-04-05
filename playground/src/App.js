import React from "react";
import { VsiVolumeForm } from "icse-react-assets";
import "./App.css";

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

function App() {
  return (
    <VsiVolumeForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidIopsCallback={invalidIopsCallback}
      invalidIopsTextCallback={invalidIopsTextCallback}
      encryptionKeys={["key1", "key2"]}
      data={[
        {
          name: "",
          profile: "general-purpose",
          kms_key: "",
          capacity: 100,
          iops: null,
        },
      ]}
    />
  );
}

export default App;
