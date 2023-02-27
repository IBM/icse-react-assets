import React from "react";
import { contains } from "lazy-z";
import { EncryptionKeyForm } from "icse-react-assets";

export default {
  component: EncryptionKeyForm,
  title: "Components/Forms/EncryptionKeyForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description:
        "A string specifying the name of the Encryption Key instance",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.interval_month"]: {
      description:
        "An integer specifying the rotation interval in months, can be 1-12",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.root_key"]: {
      description: "A boolean for setting the Encryption key as a Root key",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.force_delete"]: {
      description: "A boolean for allowing the forced deletion of a KMS key",
      control: "none",
      type: { required: false }, // required prop or not
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
          "EncryptionKeyForm is a form that provides functionality for creating new Encryption Keys as well as editing existing keys.",
      },
    },
  },
};

const EncryptionKeyFormStory = () => {
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
      ? `Key name ${stateData.name} already in use.`
      : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <EncryptionKeyForm
      data={{
        name: "test-encryption-key",
        interval_month: 12,
        root_key: false,
        force_delete: false,
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = EncryptionKeyFormStory.bind({});
