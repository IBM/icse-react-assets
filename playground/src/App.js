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
      data={{
        name: "foo-dns-name",
        dns_zone: "zone1",
        type: "A",
        rdata: "dasdasdas",
        ttl: 300,
        port: 8080,
        protocol: "TCP",
        priority: 10,
        service: "_fake-service",
        weight: 15,
        preference: 5,
      }}
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
