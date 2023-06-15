import React from "react";
import { SysdigForm } from "icse-react-assets";

export default {
  component: SysdigForm,
  title: "Components/Forms/SysdigForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.enabled"]: {
      description: "A boolean of whether or not a Sysdig instance is enabled",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.plan"]: {
      description:
        "A string representing the plan. Options are `lite`, `7-day`, `14-day`, and `30-day`",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string determining the resource group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.platform_logs"]: {
      description: "A boolean describing if platform logs are enabled or not",
      control: "none",
      type: { required: false }, // required prop or not
    },
    resourceGroups: {
      description: "An array of string resource groups to choose from",
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
          "SysdigForm is a component that allows creation/editing of a Sysdig Instance.",
      },
    },
    decorators: [(Story) => <div style={{ padding: "4.5rem" }}>{Story()}</div>],
  },
};

const SysdigFormStory = () => {
  return (
    <SysdigForm
      prefix="iac"
      resourceGroups={["rg1", "rg2", "rg3"]}
      cosBuckets={["bucket1", "bucket2"]}
    />
  );
};

export const Default = SysdigFormStory.bind({});
