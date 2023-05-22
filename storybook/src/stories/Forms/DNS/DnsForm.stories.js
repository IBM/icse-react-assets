import React from "react";
import { DnsForm } from "icse-react-assets";

export default {
  component: DnsForm,
  title: "Components/Forms/DNS/DnsForm",
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

const DnsStory = () => {
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
    <DnsForm
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      data={{
        name: "dns-service",
        plan: "free",
        resource_group: "service-rg",
        zones: [],
        records: [],
        custom_resolvers: [],
      }}
      zoneProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidLabelCallback: invalidCallback,
        invalidLabelTextCallback: invalidCallback,
        invalidDescriptionCallback: invalidCallback,
        invalidDescriptionTextCallback: invalidCallback,
        vpcList: ["management", "workload"],
      }}
      recordProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
      resolverProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
        invalidDescriptionCallback: invalidCallback,
        invalidDescriptionTextCallback: invalidCallback,
        subnetList: [
          {
            vpc: "management",
            zone: 1,
            cidr: "10.10.10.0/24",
            name: "vsi-zone-1",
            network_acl: "management",
            resource_group: "management-rg",
            public_gateway: false,
            has_prefix: true,
          },
          {
            vpc: "management",
            zone: 1,
            cidr: "10.20.10.0/24",
            name: "vpe-zone-1",
            resource_group: "management-rg",
            network_acl: "management",
            public_gateway: false,
            has_prefix: true,
          },
          {
            vpc: "workload",
            zone: 1,
            cidr: "10.40.10.0/24",
            name: "vsi-zone-1",
            network_acl: "workload",
            resource_group: "workload-rg",
            public_gateway: false,
            has_prefix: true,
          },
        ],
        vpcList: ["management", "workload"],
      }}
    />
  );
};

export const Default = DnsStory.bind({});
