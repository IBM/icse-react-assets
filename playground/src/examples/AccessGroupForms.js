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

function invalidCallback(field, stateData, componentProps) {
  if (field === "identity_provider")
    return !(stateData.identity_provider.length >= 6);
  else return !validName(stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  return !validName(stateData.name)
    ? `Name ${stateData.name} is invalid.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function composedNameCallback(stateData, componentProps) {
  return `${stateData.name}-<random suffix>`;
}

export const AccessGroupPolicyFormExample = () => {
  return (
    <AccessGroupPolicyForm
      data={{
        name: "test-policy",
        resources: {
          resource_group: "rg1",
          resource_type: "resource-group",
          resource: "test-resource",
          service: "cloud-object-storage",
          resource_instance_id: "fake-id-12345",
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
    />
  );
};

export const AccessGroupFormExample = () => {
  return (
    <AccessGroupForm
      data={{ name: "test", description: "foo" }}
      subForms={[
        <AccessGroupPolicyFormExample />,
        <AccessGroupDynamicPolicyFormExample />,
      ]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
