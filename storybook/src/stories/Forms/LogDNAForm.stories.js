import React from "react";
import { contains } from "lazy-z";
import { LogDNAForm } from "icse-react-assets";

export default {
  component: LogDNAForm,
  title: "Components/Forms/LogDNAForm",
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
          "LogDNAForm is a component that allows creation/editing of a Log DNA Instance.",
      },
    },
    decorators: [(Story) => <div style={{ padding: "4.5rem" }}>{Story()}</div>],
  },
};

const LogDNAFormStory = () => {
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
    <LogDNAForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      prefix="iac"
      resourceGroups={["rg1", "rg2", "rg3"]}
      cosBuckets={["bucket1", "bucket2"]}
    />
  );
};

export const Default = LogDNAFormStory.bind({});
