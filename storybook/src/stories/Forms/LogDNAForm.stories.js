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
    enabled: false,
    plan: "7-day",
    endpoint: "private",
    resource_group: "",
    bucket: "",
    archive: "",
    platform_logs: false,
    ["data.enabled"]: {
      description: "A boolean of whether or not a Log DNA instance is enabled",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.plan"]: {
      description:
        "A string representing the plan. Options are `lite`, `7-day`, `14-day`, and `30-day`",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.endpoint"]: {
      description:
        "A string representing the endpoint type. Options are `public`, `private`, and `public-and-private`",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string determining the resource group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.bucket"]: {
      description: "A string determining the bucket",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.archive"]: {
      description: "A string for the archive location", // ?
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.platform_logs"]: {
      description: "A boolean describing if platform logs are enabled or not",
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
    resourceGroups: {
      description: "An array of string resource groups to choose from",
      type: { required: true },
      control: "none",
    },
    cosBuckets: {
      description: "An array of string of buckets to choose from",
      type: { required: true },
      control: "none",
    },
    prefix: {
      description: "A string for the environment prefix",
      type: { required: true },
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
