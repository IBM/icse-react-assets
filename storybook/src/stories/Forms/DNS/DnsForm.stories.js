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
      description: "A string value for the name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.plan": {
      description: "A string of the plan, options are free and standard",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.resource_group": {
      description: "A string of the resource group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.zones": {
      description: "The permitted networks for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.records": {
      description: "The permitted networks for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.custom_resolvers": {
      description: "The permitted networks for the zone",
      control: "none",
      type: { required: false }, // required prop or not
    },
    zoneProps: {
      summary: "An object for props for the zone form",
      control: "none",
      type: { required: true },
    },
    "zoneProps.onSave": {
      description: "Callback function for when a zone is saved",
      type: { required: true },
      control: "none",
    },
    "zoneProps.onDelete": {
      description: "Callback function for when a zone is deleted",
      type: { required: true },
      control: "none",
    },
    "zoneProps.onSubmit": {
      description: "Callback function for when a zone is created",
      type: { required: true },
      control: "none",
    },
    "zoneProps.disableSave": {
      description:
        "Callback function that determines if the form can be saved, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidLabelCallback": {
      description:
        "Callback function that determines invalid state for the label field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidLabelTextCallback": {
      description:
        "Callback function that determines invalid text for the label field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidDescriptionCallback": {
      description:
        "Callback function that determines invalid state for the description field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidDescriptionTextCallback": {
      description:
        "Callback function that determines invalid text for the description field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidNameCallback": {
      description:
        "Callback function that determines invalid state for the zone's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "zoneProps.invalidNameTextCallback": {
      description:
        "Callback function that returns invalid text string for the zone's name field",
      type: { required: true },
      control: "none",
    },
    resolverProps: {
      summary: "An object for props to be passed to the resolver form",
      type: { required: true },
      control: "none",
    },
    "resolverProps.onSave": {
      description: "Callback function for when a resolver is saved",
      type: { required: true },
      control: "none",
    },
    "resolverProps.onDelete": {
      description: "Callback function for when a resolver is deleted",
      type: { required: true },
      control: "none",
    },
    "resolverProps.onSubmit": {
      description: "Callback function for when a resolver is created",
      type: { required: true },
      control: "none",
    },
    "resolverProps.disableSave": {
      description:
        "Callback function that determines if the form can be saved, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "resolverProps.subnetList": {
      description: "An array (string) of all subnets",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidCallback": {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidTextCallback": {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidNameCallback": {
      description:
        "A function to determine if the name field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidNameTextCallback": {
      description:
        "A function to determine the invalid text displayed to the user when name is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidDescriptionCallback": {
      description:
        "A function to determine if the description field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "resolverProps.invalidDescriptionTextCallback": {
      description:
        "A function to determine the invalid text displayed to the user when description is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
    recordProps: {
      summary: "An object for props for the record form",
      control: "none",
      type: { required: true },
    },
    isModal: {
      description:
        "A boolean value that specifies if the form is within a modal",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "false" } },
    },
    resourceGroups: {
      description: "An array (string) of all resource groups",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidNameCallback: {
      description:
        "A function to determine if the name field is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidNameTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user when name is invalid",
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
