import React from "react";
import { VpeForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: VpeForm,
  title: "Components/Forms/VpeForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false },
      control: "none",
    },
    ["data.name"]: {
      description:
        "A string specifying the name of the Virtual Private Endpoint",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string value of the Resource Group selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.vpc"]: {
      description: "A string specifying the VPC name",
      control: "none",
      type: { required: true },
    },
    ["data.service"]: {
      description:
        "A string specifying the type of the service attached to the VPE",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.security_groups"]: {
      description: "An array of security groups that are selected",
      control: "none",
      type: { required: true },
    },
    ["data.subnets"]: {
      description: "An array of subnets that are selected",
      control: "none",
      type: { required: true },
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true },
      control: "none",
    },
    subnetList: {
      description: "An array of strings containing the names of subnets",
      type: { required: true },
      control: "none",
    },
    securityGroups: {
      description: "An array of all security groups",
      type: { required: true },
      control: "none",
    },
    isModal: {
      description:
        "A boolean value that specifies if the VpeForm is a component within a modal",
      type: { required: false },
      control: "none",
      table: { defaultValue: { summary: "false" } },
    },
    invalidCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "VpeForm is a component that allows the user to create and edit Virtual Private Endpoint instances",
      },
    },
  },
};

const VpeFormStory = () => {
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
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <VpeForm
      data={{
        name: "workload-vpe",
        vpc: "workload",
        service: "kms",
        resource_group: "test",
        security_groups: ["1", "2", "3"],
        subnets: ["vsi-zone-1"],
      }}
      resourceGroups={["test", "foo", "bar"]}
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
      securityGroups={["1", "2", "3", "4", "5"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = VpeFormStory.bind({});
