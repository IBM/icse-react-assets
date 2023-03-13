import React, { useState } from "react";
import { contains } from "lazy-z";
import { ObjectStorageForm } from "icse-react-assets";
import "./App.css";

const ObjectStorageFormStory = () => {
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

  function composedNameCallback(stateData, componentProps) {
    return `${stateData.name}-<random suffix>`;
  }
  return (
    <ObjectStorageForm
      data={{
        buckets: [
          {
            endpoint: "public",
            force_delete: true,
            kms_key: "slz-atracker-key",
            name: "atracker-bucket",
            storage_class: "standard",
          },
        ],
        keys: [
          {
            name: "cos-bind-key",
            role: "Writer",
            enable_hmac: false,
          },
        ],
        name: "atracker-cos",
        plan: "standard",
        resource_group: "slz-service-rg",
        use_data: false,
        use_random_suffix: false,
        kms: "slz-kms",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      composedNameCallback={composedNameCallback}
      resourceGroups={["rg1", "rg2", "rg3"]}
      kmsList={["kms-1", "kms-2"]}
    />
  );
};

function App() {
  return (
    <div className="App">
      <ObjectStorageFormStory />
    </div>
  );
}

export default App;
