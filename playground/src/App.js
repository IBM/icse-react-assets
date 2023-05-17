import React from "react";
import { DnsRecordForm } from "icse-react-assets";
import { contains } from "lazy-z";

import "./App.css";

const DnsRecordFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/s;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function helperTextCallback(stateData, componentProps) {
    return "<prefix>-" + stateData.name;
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Cluster name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <DnsRecordForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={helperTextCallback}
      dnsZones={["zone1", "zone2", "zone3"]}
    />
  );
};

function App() {
  return <DnsRecordFormStory />;
}

export default App;
