import React, { useState } from "react";
import { contains } from "lazy-z";
import { AppIdForm } from "icse-react-assets";
import "./App.css";

const AppIdFormStory = () => {
  function validName(str) {
    // regex name validation that only allows alphanumerical characters and "-", string cannot end with "-"
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
    return `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <AppIdForm
      data={{
        name: "dev",
        resource_group: "service-rg",
        use_data: false,
        keys: [
          {
            appid: "dev",
            name: "frog",
          },
          {
            appid: "dev",
            name: "toad",
          },
        ],
      }}
      propsMatchState={function () {
        return false;
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidCallback}
      invalidKeyTextCallback={invalidTextCallback}
      keyProps={{
        disableSave: function () {
          return false;
        },
        onDelete: () => {},
        onSave: () => {},
        onCreate: () => {},
      }}
    />
  );
};
function App() {
  return (
    <div className="App">
      <AppIdFormStory />
    </div>
  );
}

export default App;
