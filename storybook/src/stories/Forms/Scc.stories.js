import React from "react";
import { SccForm } from "icse-react-assets";

export default {
  component: SccForm,
  title: "Components/Forms/SecurityComplianceForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.enable_scc"]: {
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
    ["data.location_id"]: {
      description: "A string determining the location (`us`, `eu`, or `uk`)",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.scope_description"]: {
      description: "A string description of the scope",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.scope_name"]: {
      description: "A string for your scope name",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.collector_passphrase"]: {
      description: "A string passphrase for the collector",
      control: "none",
      type: { required: false }, // required prop or not
    },
    scopeNameRegex: {
      description:
        "A regular expression to determine invalid status for `scope_name`",
      type: { required: true }, // required prop or not
      control: "none",
    },
    descriptionRegex: {
      description:
        "A regular expression to determine invalid status for descriptions",
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
  return (
    <SccForm
      data={{
        enable_scc: true,
        collector_description: "test collector description",
        is_public: true,
        scope_description: "test scope description",
        scope_name: "test-scope-name",
        collector_passphrase: "test-passphrase",
        location_id: "us",
      }}
      scopeNameRegex={/^[A-z]([a-z0-9-]*[a-z0-9])?$/i}
      descriptionRegex={/^[A-z][a-zA-Z0-9-\._,\s]*$/i}
    />
  );
};

export const Default = SccFormStory.bind({});
