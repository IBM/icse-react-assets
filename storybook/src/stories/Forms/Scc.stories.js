import React from "react";
import { SccForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: SccForm,
  title: "Components/Forms/SecurityComplianceForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.enable"]: {
      description: "A boolean of whether or not an SCC instance is created",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.collector_description"]: {
      description: "A string description of the SCC collector",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.is_public"]: {
      description:
        "A boolean determining if the collector endpoint is accessible on a public network",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.location"]: {
      description: "A string determining the location (`us`, `eu`, or `uk`)",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.scope_description"]: {
      description: "A string description of the scope",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.passphrase"]: {
      description: "A string passphrase for the collector",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.credential_description"]: {
      description: "A string description of the credential",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.name"]: {
      description: "Name of the SCC Collector",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.id"]: {
      description: "Group ID for SCC",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.passphrase"]: {
      description: "Group Passphrase",
      control: "none",
      type: { required: false }, // required prop or not
    },
    descriptionRegex: {
      description:
        "A regular expression to determine invalid status for descriptions",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "/^[A-z][a-zA-Z0-9-._,s]*$/i" } },
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for the `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SccForm is a form component that provides functionality for enabling/editing an Security Compliance Center instance.",
      },
    },
  },
};

const SccFormStory = () => {
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

  return (
    <SccForm
      data={{
        enable: true,
        collector_description: "test collector description",
        is_public: true,
        scope_description: "test scope description",
        passphrase: "test-passphrase",
        location: "us",
        credential_description: "my credential description",
        name: "collector",
        id: "my-group-id",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      descriptionRegex={/^[A-z][a-zA-Z0-9-._,\s]*$/i}
    />
  );
};

export const Default = SccFormStory.bind({});
