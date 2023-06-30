import React from "react";

import "./App.css";
import { AccessGroupDynamicPolicyForm } from "icse-react-assets";
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

function composedNameCallback(stateData, componentProps) {
  return `${stateData.name}-<random suffix>`;
}

function invalidIdentityProviderCallback(stateData, componentProps) {
  return !(stateData.identity_provider.length >= 6);
}

function App() {
  return (
    <AccessGroupDynamicPolicyForm
      data={{
        name: "test-dynamic-policy",
        identity_provider: "test-uri-123-foo345.netweb.cloud123",
        expiration: 1,
        conditions: {
          claim: "test-123",
          operator: "EQUALS",
          value: "test-123",
        },
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={composedNameCallback}
      invalidIdentityProviderCallback={invalidIdentityProviderCallback}
    />
  );
}

export default App;
