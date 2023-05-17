import React from "react";
import { DnsCustomResolverForm } from "icse-react-assets";

export default {
  component: DnsCustomResolverForm,
  title: "Components/Forms/DNS/DnsCustomResolverForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "data.name": {
      description: "A string value for the name of the custom resolver",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.description": {
      description: "A string description for the resolver",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.enabled": {
      description: "A boolean that enables or disables a custom resolver",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.high_availability": {
      description:
        "A boolean if the custom resolver is highly available or not",
      control: "none",
      type: { required: false }, // required prop or not
      table: { defaultValue: { summary: "true" } },
    },
    "data.vpc": {
      description: "A string of the VPC the custom resolver is attached to",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.subnets": {
      description: "The subnets where the custom resolver is deployed",
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
    subnetList: {
      description: "An array (string) of all subnets",
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
          "DnsCustomResolverForm is a form component that provides functionality for creating/editing custom DNS resolvers.",
      },
    },
  },
};

const DnsCustomResolverStory = () => {
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
    <DnsCustomResolverForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
      invalidDescriptionCallback={invalidCallback}
      invalidDescriptionTextCallback={invalidTextCallback}
      subnetList={[
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
      ]}
      vpcList={["management", "workload"]}
      data={{
        name: "custom-resolver",
        description: "This is a description!",
        high_availability: true,
        enabled: false,
        vpc: "management",
        subnets: [],
      }}
    />
  );
};

export const Default = DnsCustomResolverStory.bind({});
