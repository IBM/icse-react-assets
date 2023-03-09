import React, { useState } from "react";
import { contains } from "lazy-z";
import { EncryptionKeyForm } from "icse-react-assets";
import "./App.css";

const EncryptionKeyFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/s;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidRingCallback(stateData, componentProps) {
    return stateData.key_ring === "" ? false : !validName(stateData.key_ring);
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Key name ${stateData.name} already in use.`
      : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])*$/s`;
  }

  let invalidRingText = `Invalid Key Ring Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])*$/s`;

  return (
    <EncryptionKeyForm
      data={{
        name: "test-encryption-key",
        rotation: 12,
        root_key: false,
        force_delete: false,
        dual_auth_delete: true,
        key_ring: "",
        endpoint: "private"
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidRingCallback={invalidRingCallback}
      invalidRingText={invalidRingText}
    />
  );
};

function App() {
  return (
    <div className="App">
      <EncryptionKeyFormStory />
    </div>
  );
}

export default App;
