import React, { useState } from "react";
import { contains } from "lazy-z";
import { SccForm } from "icse-react-assets";
import "./App.css";

const SccFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <SccForm
      data={{
        enable: true,
        collector_description: "test collector description",
        is_public: true,
        scope_description: "test scope description",
        passphrase: "test-passphrase",
        location: "us",
        credential_description: "my credential description",
        name: "collector",
        id: "my-group-id",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      descriptionRegex={/^[A-z][a-zA-Z0-9-._,\s]*$/i}
    />
  );
};
function App() {
  return (
    <div className="App">
      <SccFormStory />
    </div>
  );
}

export default App;
