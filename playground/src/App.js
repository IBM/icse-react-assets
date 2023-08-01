import React from "react";
import { contains } from "lazy-z";

import "./App.css";
import { CloudDatabaseForm } from "icse-react-assets";

const App = () => {
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

  function invalidCpuCallback(stateData, componentProps) {
    return (
        !isWholeNumber(Number(stateData.cpu)) || 
        (Number(stateData.cpu) !== 0 && Number(stateData.cpu) < 3) ||
        Number(stateData.cpu) > 28
    );
  }

  function invalidCpuTextCallback(stateData, componentProps) {
    return `Using dedicated cores requires a minimum of 3 cores and a maximum of 28 cores per member. For shared CPU, select 0 cores.`;
  }

  return (
    <CloudDatabaseForm
      data={{
        name: "dev",
        resource_group: "service-rg",
        use_data: false,
        plan: "standard",
        encryption_key: "",
        service: "",
        group_id: "",
        memory: 0,
        disk: 0,
        cpu: 0,
      }}
      propsMatchState={function () {
        return false;
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      encryptionKeys={["ekey1", "ekey2", "ekey3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidCpuCallback={invalidCpuCallback}
      invalidCpuTextCallback={invalidCpuTextCallback}
    />
  );
};
export default App;
