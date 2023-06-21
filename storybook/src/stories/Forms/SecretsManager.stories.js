import React from "react";
import { SecretsManagerForm } from "icse-react-assets";

export default {
  component: SecretsManagerForm,
  title: "Components/Forms/SecretsManagerForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description:
        "A string specifying the name of the secrets manager instance",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description:
        "A string specifying the name of the resource group selected",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.encryption_key"]: {
      description: "A string value of the KMS Key",
      control: "none",
      type: { required: false }, // required prop or not
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description:
        "An array of strings containing the names of KMS keys to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SecretsManagerForm is a form component that provides functionality for editing an Secrets Manager instance.",
      },
    },
  },
};

const SecretsManagerFormStory = () => {
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

  return (
    <SecretsManagerForm
      data={{
        name: "Example",
        resource_group: "default",
        encryption_key: "key1",
        secrets: [
          {
            cos: "atracker-cos",
            key: "cos-bind-key",
            ref: "ibm_resource_key.atracker_cos_object_storage_key_cos_bind_key",
          },
          {
            appid: "default",
            key: "test",
            ref: "ibm_resource_key.default_key_test",
          },
          {
            ref: "ibm_resource_key.logdna_key",
            key: "logdna-key",
          },
          {
            ref: "ibm_resource_key.sysdig_key",
            key: "sysdig-key",
          },
        ],
      }}
      resourceGroups={["default_group", "foo", "bar"]}
      encryptionKeys={["default_key", "foo"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      secrets={[
        {
          cos: "atracker-cos",
          key: "cos-bind-key",
          ref: "ibm_resource_key.atracker_cos_object_storage_key_cos_bind_key",
        },
        {
          appid: "default",
          key: "test",
          ref: "ibm_resource_key.default_key_test",
        },
        {
          ref: "ibm_resource_key.logdna_key",
          key: "logdna-key",
        },
        {
          ref: "ibm_resource_key.sysdig_key",
          key: "sysdig-key",
        },
      ]}
    />
  );
};

export const Default = SecretsManagerFormStory.bind({});
