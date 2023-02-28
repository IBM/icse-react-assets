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
    ["data.enable_transit_gateway"]: {
      description: "A boolean to indicate whether to enable transit gateway",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.transit_gateway_connections"]: {
      description:
        "An array (string) of VPCs that connect to the transit gateway",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.transit_gateway_resource_group"]: {
      description: "A string value of the resource group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.name"]: {
      description: "A string value of the Transit Gateway name",
      control: "none",
      type: { required: false }, // required prop or not
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    readOnlyName: {
      description:
        " boolean to indicate whether the transit gateway name is read only",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "true" } },
    },
    vpcList: {
      description: "An array of strings containing the names of VPCs to select",
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
          "TransitGatewayForm is a form component that provides functionality for editing a Transit Gateway instance",
      },
    },
  },
};

const TransitGatewayFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <TransitGatewayForm
      data={{
        enable_transit_gateway: true,
        transit_gateway_connections: ["management"],
        transit_gateway_resource_group: "service-rg",
        name: "transit-gateway",
      }}
      readOnlyName={true}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = TransitGatewayFormStory.bind({});
