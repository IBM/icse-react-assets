import React from "react";
import { contains } from "lazy-z";
import { VpnGatewayForm } from "icse-react-assets";

export default {
  component: VpnGatewayForm,
  title: "Components/Forms/VpnGatewayForm",
  argTypes: {
    data: {
      summary: "An optional object describing the tooltip for a title",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string specifying the name of the VPN Gateway service",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.resource_group"]: {
      description:
        "A string specifying the name of the resource group selected",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.vpc"]: {
      description:
        "A string specifying the VPC the VPN Gateway service is attached to",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.subnet"]: {
      description:
        "A string specifying the subnet of the selected VPC the VPN Gateway service is attached to",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.policy_mode"]: {
      description:
        "A boolean specifying to use the mode policy instead of the default mode, route",
      control: "none",
      type: { required: false }, // required prop or not
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    vpcList: {
      description: "An array of strings containing the names of VPCs to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    subnetList: {
      description:
        "An array of strings containing the names of subnets to select",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "VpnGatewayForm is a form that provides functionality for adding a VPN Gateway service for VPC used to provide secure, encrypted connectivity from a user's on-premise network to the IBM Cloud VPC network.",
      },
    },
  },
};

const VpnGatewayFormStory = () => {
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
    <VpnGatewayForm
      data={{
        name: "",
        resource_group: "",
        vpc: "management",
        subnet: null,
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      vpcList={["management", "workload"]}
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
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = VpnGatewayFormStory.bind({});
