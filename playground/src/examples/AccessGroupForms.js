import {
  AccessGroupForm,
  AccessGroupPolicyForm,
  AccessGroupDynamicPolicyForm,
} from "icse-react-assets";
import React from "react";

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

function composedNameCallback(stateData) {
  return `${stateData.name}-<random suffix>`;
}

export const AccessGroupFormExample = () => {
  return (
    <AccessGroupForm
      data={{ name: "test", description: "foo" }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const AccessGroupPolicyFormExample = () => {
  return (
    <AccessGroupPolicyForm
      data={{
        name: "test-policy",
        resources: {
          resource_group: "rg1",
          resource_type: "",
          resource: "",
          service: "",
          resource_instance_id: "",
        },
      }}
      resourceGroups={["rg1", "rg2", "rg3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={composedNameCallback}
    />
  );
};

export const AccessGroupDynamicPolicyFormExample = () => {
  return (
    <AccessGroupDynamicPolicyForm
      data={{
        name: "test-dynamic-policy",
        identity_provider: "",
        expiration: 1,
        conditions: {
          claim: "",
          operator: "",
          value: "",
        },
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={composedNameCallback}
    />
  );
};
