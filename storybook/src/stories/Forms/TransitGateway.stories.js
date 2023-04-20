import React from "react";
import { TransitGatewayForm } from "icse-react-assets";

export default {
  component: TransitGatewayForm,
  title: "Components/Forms/TransitGatewayForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.global"]: {
      description:
        "A boolean to indicate whether the gateway has global route to connect to the networks outside their associated region.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.connections"]: {
      description:
        "An array of objects containing the VPCs that connect to the transit gateway",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string value of the resource group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.name"]: {
      description: "A string value of the Transit Gateway name",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.crns"]: {
      description:
        "An array of strings containing VPC CRNs to connect to the transit gateway",
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
    region: {
      description: "A string representing the region being deployed to",
      type: { required: true }, // required prop or not
      control: "none",
    },
    crnRegex: {
      description: "A regular expression for validating CRN connection",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "TransitGatewayForm is a form component that provides functionality for editing a Transit Gateway instance",
      },
    },
  },
};

const TransitGatewayFormStory = () => {
  return (
    <TransitGatewayForm
      data={{
        global: true,
        connections: [{ tgw: "transit-gateway", vpc: "management" }],
        resource_group: "service-rg",
        name: "transit-gateway",
        crns: [],
      }}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      region={"us-south"}
    />
  );
};

export const Default = TransitGatewayFormStory.bind({});
