import React, { useState } from "react";
import { contains } from "lazy-z";
import { KeyManagementForm } from "icse-react-assets";
import "./App.css";

const KeyManagementFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidTextCallback(stateData) {
    return contains(["foo", "bar"], stateData.name)
      ? `Key name ${stateData.name} already in use.`
      : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidKeyCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidKeyTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Key name ${stateData.name} already in use.`
      : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])*$/s`;
  }

  function invalidRingCallback(stateData, componentProps) {
    return stateData.key_ring === "" ? false : !validName(stateData.key_ring);
  }

  let invalidRingText = `Invalid Key Ring Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])*$/s`;

  return (
    <KeyManagementForm
      data={{
        use_hs_crypto: false,
        use_data: false,
        name: "test-key-protect",
        resource_group: "service-rg",
        authorize_vpc_reader_role: false,
        keys: [
          {
            key_ring: "slz-slz-ring",
            name: "slz-slz-key",
            root_key: true,
            force_delete: true,
            endpoint: "public",
            rotation: 12,
            dual_auth_delete: false,
          },
          {
            key_ring: "slz-slz-ring",
            name: "slz-atracker-key",
            root_key: true,
            force_delete: true,
            endpoint: "public",
            rotation: 12,
            dual_auth_delete: false,
          },
          {
            key_ring: "slz-slz-ring",
            name: "slz-vsi-volume-key",
            root_key: true,
            force_delete: true,
            endpoint: "public",
            rotation: 12,
            dual_auth_delete: false,
          },
        ],
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidKeyCallback}
      invalidKeyTextCallback={invalidKeyTextCallback}
      invalidRingCallback={invalidRingCallback}
      invalidRingText={invalidRingText}
      propsMatchState={()=>{}}
      encryptionKeyProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <KeyManagementFormStory />
    </div>
  );
}

export default App;
