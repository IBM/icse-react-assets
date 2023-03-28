import React from "react";
import { EventStreamsForm } from "icse-react-assets";
import "./App.css";

function App() {
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
    <EventStreamsForm
      resourceGroups={["test", "foo", "bar"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
}

export default App;
