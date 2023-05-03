import React from "react";
import { CbrZoneForm } from "icse-react-assets";
import { contains } from "lazy-z";

import "./App.css";

const CbrRuleFormStory = ({ ...args }) => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(field, stateData, componentProps) {
    if (field === "name")
      return (
        !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
      );
    else return false;
  }

  function invalidTextCallback(field, stateData, componentProps) {
    if (field === "name")
      return contains(["foo", "bar"], stateData.name)
        ? `Name ${stateData.name} already in use.`
        : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
    else return `Invalid ${field}`;
  }

  return (
    <div className="dark">
      <CbrZoneForm
        {...args}
        data={{
          name: "zone",
          description: "",
          account_id: "",
          addresses: [
            {
              name: "address",
              account_id: "",
              location: "",
              service_name: "",
              service_type: "",
              type: "ipAddress",
              value: "",
            },
          ],
          exclusions: [
            {
              name: "exclusion",
              account_id: "",
              location: "",
              service_name: "",
              service_type: "",
              type: "ipAddress",
              value: "",
            },
          ],
        }}
        invalidCallback={invalidCallback}
        invalidTextCallback={invalidTextCallback}
        propsMatchState={() => {}}
        invalidAddressCallback={invalidCallback}
        invalidAddressTextCallback={invalidTextCallback}
        addressProps={{
          onSave: () => {},
          onDelete: () => {},
          onSubmit: () => {},
          disableSave: () => {},
        }}
        invalidExclusionCallback={invalidCallback}
        invalidExclusionTextCallback={invalidTextCallback}
        exclusionProps={{
          onSave: () => {},
          onDelete: () => {},
          onSubmit: () => {},
          disableSave: () => {},
        }}
      />
    </div>
  );
};

function App() {
  return <CbrRuleFormStory />;
}

export default App;
