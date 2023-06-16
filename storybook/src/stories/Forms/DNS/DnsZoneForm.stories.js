import React from "react";
import { DnsZoneForm } from "icse-react-assets";

export default {
  component: DnsZoneForm,
  title: "Components/Forms/DNS/DnsZoneForm",
  argTypes: {
    data: {
      summary: "An object for data",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "data.name": {
      description: "A string value for the name of zone",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.description": {
      description: "A string description for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.label": {
      description: "A string label for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.vpcs": {
      description: "The permitted networks for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    isModal: {
      description:
        "A boolean value that specifies if the form is within a modal",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "false" } },
    },
    vpcList: {
      description: "An array (string) of all VPCs",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidLabelCallback: {
      description:
        "A function to determine if the label field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidLabelTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user when label is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidNameCallback: {
      description:
        "A function to determine if the name field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidNameTextCallabck: {
      description:
        "A function to determine the invalid text displayed to the user when name is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidDescriptionCallback: {
      description:
        "A function to determine if the description field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidDescriptionTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user when description is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "DnsZoneForm is a form component that provides functionality for creating/editing custom DNS zones.",
      },
    },
  },
};

const DnsZoneStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidNameCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidNameTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidCallback(stateData, componentProps) {
    return false;
  }

  function invalidTextCallback(stateData, componentProps) {
    return "";
  }

  return (
    <DnsZoneForm
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
      invalidDescriptionCallback={invalidCallback}
      invalidDescriptionTextCallback={invalidTextCallback}
      invalidLabelCallback={invalidCallback}
      invalidLabelTextCallback={invalidTextCallback}
      vpcList={["management", "workload"]}
      data={{
        name: "dns-zone",
        description: "This is a description!",
        label: "label",
        vpcs: ["management"],
      }}
    />
  );
};

export const Default = DnsZoneStory.bind({});
