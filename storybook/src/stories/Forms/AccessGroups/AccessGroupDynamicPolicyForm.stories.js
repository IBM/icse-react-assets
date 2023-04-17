import { AccessGroupDynamicPolicyForm } from "icse-react-assets";
import React from "react";

export default {
  component: AccessGroupDynamicPolicyForm,
  title: "Components/Forms/AccessGroups/AccessGroupDynamicPolicyForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the dynamic policy name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.identity_provider"]: {
      description: "A string value for the URI of the identity provider",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.expiration"]: {
      description:
        "Number value describing how many hours authenticated users can work before refresh",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.conditions"]: {
      description:
        "An object containing the conditions required for the dynamic policy",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.conditions.claim"]: {
      description: "String value for the key to evaluate the condition against",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.conditions.operator"]: {
      description: "String value of the operation to perform on the claim.",
      control: "select",
      options: [
        "EQUALS",
        "EQUALS_IGNORE_CASE",
        "IN",
        "NOT_EQUALS_IGNORE_CASE",
        "NOT_EQUALS",
        "CONTAINS",
      ],
      type: { required: true }, // required prop or not
    },
    ["data.conditions.value"]: {
      description: "String value to be compared against",
      control: "none",
      type: { required: true }, // required prop or not
    },
    isModal: {
      description: "Boolean value determining if the form is a modal",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for specified field (defaults to `name`) field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    helperTextCallback: {
      description: "Function that determines helperText text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidIdentityProviderCallback: {
      description:
        "Function that determines whether or not identity provider value is valid",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "AccessGroupDynamicPolicyForm is a form component that provides functionality for adding or editing an Access Group dynamic policy.",
      },
    },
  },
};

export const AccessGroupDynamicPolicyStory = () => {
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
};
