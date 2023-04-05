import React from "react";
import { VsiVolumeForm } from "icse-react-assets";
import { contains } from "lazy-z";
import "./App.css";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function encryptionKeyFilter(stateData, componentProps) {
  // add filter here
  return componentProps.encryptionKeys;
}

function composedNameCallback(stateData, componentProps) {
  return `${stateData.name}-<random suffix>`;
}

function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  return contains(["foo", "bar"], stateData.name)
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function invalidIopsCallback(stateData, componentProps) {
  let iopsRange;
  if (stateData.capacity >= 0 && stateData.capacity <= 39) {
    iopsRange = { start: 100, end: 1000 };
  } else if (stateData.capacity >= 40 && stateData.capacity <= 79) {
    iopsRange = { start: 100, end: 2000 };
  } else if (stateData.capacity >= 80 && stateData.capacity <= 99) {
    iopsRange = { start: 100, end: 4000 };
  } else if (stateData.capacity >= 100 && stateData.capacity <= 499) {
    iopsRange = { start: 100, end: 6000 };
  } else if (stateData.capacity >= 500 && stateData.capacity <= 999) {
    iopsRange = { start: 100, end: 10000 };
  } else if (stateData.capacity >= 1000 && stateData.capacity <= 1999) {
    iopsRange = { start: 100, end: 20000 };
  } else if (stateData.capacity >= 2000 && stateData.capacity <= 3999) {
    iopsRange = { start: 100, end: 40000 };
  } else if (stateData.capacity >= 4000 && stateData.capacity <= 7999) {
    iopsRange = { start: 100, end: 40000 };
  } else if (stateData.capacity >= 8000 && stateData.capacity <= 9999) {
    iopsRange = { start: 100, end: 48000 };
  } else if (stateData.capacity >= 10000 && stateData.capacity <= 16000) {
    iopsRange = { start: 100, end: 48000 };
  }
  if (stateData.iops < iopsRange.start || stateData.iops > iopsRange.end)
    return true;
}

function invalidIopsTextCallback(stateData, componentProps) {
  let iopsRange;
  if (stateData.capacity >= 0 && stateData.capacity <= 39) {
    iopsRange = { start: 100, end: 1000 };
  } else if (stateData.capacity >= 40 && stateData.capacity <= 79) {
    iopsRange = { start: 100, end: 2000 };
  } else if (stateData.capacity >= 80 && stateData.capacity <= 99) {
    iopsRange = { start: 100, end: 4000 };
  } else if (stateData.capacity >= 100 && stateData.capacity <= 499) {
    iopsRange = { start: 100, end: 6000 };
  } else if (stateData.capacity >= 500 && stateData.capacity <= 999) {
    iopsRange = { start: 100, end: 10000 };
  } else if (stateData.capacity >= 1000 && stateData.capacity <= 1999) {
    iopsRange = { start: 100, end: 20000 };
  } else if (stateData.capacity >= 2000 && stateData.capacity <= 3999) {
    iopsRange = { start: 100, end: 40000 };
  } else if (stateData.capacity >= 4000 && stateData.capacity <= 7999) {
    iopsRange = { start: 100, end: 40000 };
  } else if (stateData.capacity >= 8000 && stateData.capacity <= 9999) {
    iopsRange = { start: 100, end: 48000 };
  } else if (stateData.capacity >= 10000 && stateData.capacity <= 16000) {
    iopsRange = { start: 100, end: 48000 };
  }
  if (stateData.iops < iopsRange.start || stateData.iops > iopsRange.end) {
    return `IOPS value is not within the valid range for the vsi volume capacity currently selected (Available IOPS Range for current capacity: [${iopsRange.start}, ${iopsRange.end}]).`;
  }
}

function App() {
  return (
    <VsiVolumeForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidIopsCallback={invalidIopsCallback}
      invalidIopsTextCallback={invalidIopsTextCallback}
      composedNameCallback={composedNameCallback}
      encryptionKeyFilter={encryptionKeyFilter}
      encryptionKeys={["key1", "key2"]}
      data={{
        name: "",
        profile: "general-purpose",
        kms_key: "key1",
        capacity: 100,
      }}
    />
  );
}

export default App;
