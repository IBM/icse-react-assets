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
      type: { required: true }, // required prop or not
    },
    ["data.connections"]: {
      description:
        "An array of objects containing the VPCs that connect to the transit gateway",
      control: "none",
      type: { required: true }, // required prop or not
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
    invalidCrns: {
      description:
        "A function to determine if the crns are invalid and returns a booleam",
      type: { required: true },
      control: "none",
    },
    invalidCrnText: {
      description:
        "A function that determines the invalid text for crn field if invalid",
      type: { required: true },
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

  function invalidCrns(stateData, componentProps) {
    return false;
  }

  function invalidCrnText(stateData, componentProps) {
    return `One or more CRNs is invalid.`;
  }

  return (
    <TransitGatewayForm
      data={{
        global: true,
        connections: [{ tgw: "transit-gateway", vpc: "management" }],
        resource_group: "service-rg",
        name: "transit-gateway",
        // crns: [
        //   "crn:v1:bluemix:public:containers-kubernetes:us-south:a/59bcbfa6ea2f006b4ed7094c1a08dcdd:8042b2a8af6a4a5cbf6dbe09e07311d2:worker:kube-hou02-pa8042b2a8af6a4a5cbf6dbe09e07311d2-w1",
        //   "crn:v1:bluemix:public:resource-controller:global:a/59bcbfa6ea2f006b4ed7094c1a08dcdd:resource-group:59bcbfa6ea2f006b4ed7094c1a08dcdd",
        // ],
      }}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidCrns={invalidCrns}
      invalidCrnText={invalidCrnText}
    />
  );
};

const TransitGatewayFormStoryPowerEdgeRouter = () => {
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

  function invalidCrns(stateData, componentProps) {
    return false;
  }

  function invalidCrnText(stateData, componentProps) {
    return `One or more CRNs is invalid.`;
  }

  return (
    <TransitGatewayForm
      data={{
        global: true,
        connections: [{ tgw: "transit-gateway", vpc: "management" }],
        resource_group: "service-rg",
        name: "transit-gateway",
        // crns: [
        //   "crn:v1:bluemix:public:containers-kubernetes:us-south:a/59bcbfa6ea2f006b4ed7094c1a08dcdd:8042b2a8af6a4a5cbf6dbe09e07311d2:worker:kube-hou02-pa8042b2a8af6a4a5cbf6dbe09e07311d2-w1",
        //   "crn:v1:bluemix:public:resource-controller:global:a/59bcbfa6ea2f006b4ed7094c1a08dcdd:resource-group:59bcbfa6ea2f006b4ed7094c1a08dcdd",
        // ],
      }}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidCrns={invalidCrns}
      invalidCrnText={invalidCrnText}
      power={[
        {
          name: "dev",
          zone: "dal10",
        },
        {
          name: "do-not-display",
          zone: "dal12",
        },
      ]}
    />
  );
};

export const Default = TransitGatewayFormStory.bind({});
export const PowerEdgeRouter = TransitGatewayFormStoryPowerEdgeRouter.bind({});
