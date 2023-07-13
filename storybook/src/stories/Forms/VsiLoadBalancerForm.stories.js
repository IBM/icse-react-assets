import React from "react";
import { VsiLoadBalancerForm } from "icse-react-assets";

export default {
  component: VsiLoadBalancerForm,
  title: "Components/Forms/VsiLoadBalancerForm",
  argTypes: {
    data: {
      summary: "An optional object describing the tooltip for a title",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the name of the Load Balancer",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description:
        "A string value representing the resource group for the Load Balancer",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.vpc"]: {
      description:
        "A string value representing the VPC where the Load Balancer will be deployed",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.subnets"]: {
      description:
        "A list of subnets where VSI attached to the Load Balancer are provisioned",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.algorithm"]: {
      description: "Algorithm for Load Balancer pool",
      control: "none",
      type: { required: false },
    },
    ["data.protocol"]: {
      description: "Protocol for Load Balancer pool",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.proxy_protocol"]: {
      description:
        "A string value representing the proxy protocol for the load balancer",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.health_type"]: {
      description:
        "A string value for the health protocol for Load Balancer pool members",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.health_retries"]: {
      description:
        "An integer value for the number of health check retries for load balancer",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.health_timeout"]: {
      description:
        "An integer value for the health timeout for Load Balancer pool members",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.health_delay"]: {
      description:
        "An integer value for the health delay for Load Balancer pool members",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.session_persistence_app_cookie_name"]: {
      description:
        "An optional string value for session app cookie name, used only when Session Persistence Type is app_cookie",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.target_vsi"]: {
      description:
        "An array of VSI deployment strings to be attached to the load balancer",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.port"]: {
      description:
        "An integer value for the application port for Load Balancer pool members",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.listener_port"]: {
      description: "An integer value for the Load Balancer listener port",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.listener_protocol"]: {
      description: "Protocol for Load Balancer listener",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.connection_limit"]: {
      description:
        "Optional integer value, number of connections for Load Balancer listener",
      control: "none",
      type: { required: false }, // required prop or not
    },
    isModal: {
      description: "Boolean value determining if the form is a modal",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    isTeleport: {
      description:
        "A boolean specifying whether or not the form is for a Teleport VSI",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for specified field (defaults to `name`) field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
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
        "An array of strings containing the names of subnet names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    sshKeys: {
      description: "An array of ssh key names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description: "An array of available encryption key names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    apiEndpointImages: {
      description:
        "A string representing the api endpoint to fetch valid VSI images to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    apiEndpointInstanceProfiles: {
      description:
        "A string representing the api endpoint to fetch valid VSI profiles to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "VsiLoadBalancerForm is a form component that provides functionality for adding or editing a Virtual Server Instance (VSI).",
      },
    },
  },
};

const VsiLoadBalancerFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <VsiLoadBalancerForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      resourceGroups={["a", "b"]}
      vpcList={["management", "edge-vpc"]}
      data={{
        name: "test-lb",
        resource_group: "a",
        subnets: ["vsi-zone-1", "vsi-zone-2", "vsi-zone-3"],
        vpc: "management",
        type: "public",
        security_groups: ["management-vpe"],
        algorithm: "round_robin",
        proxy_protocol: "v1",
        health_delay: 31,
        health_timeout: 30,
        health_retries: 5,
        session_persistence_app_cookie_name: "",
        target_vsi: ["management-server"],
        port: 8080,
        listener_port: 443,
        listener_protocol: "https",
        connection_limit: null,
      }}
      securityGroups={[
        {
          vpc: "management",
          name: "management-vpe",
          resource_group: "management-rg",
          rules: [],
        },
        {
          vpc: "workload",
          name: "workload-vpe",
          resource_group: "workload-rg",
          rules: [],
        },
        {
          vpc: "management",
          name: "management-vsi",
          resource_group: "management-rg",
          rules: [],
        },
      ]}
      vsiDeployments={[
        {
          kms: "slz-kms",
          encryption_key: "slz-vsi-volume-key",
          image: "ibm-ubuntu-18-04-6-minimal-amd64-2",
          profile: "cx2-4x8",
          name: "management-server",
          security_groups: ["management-vpe-sg"],
          ssh_keys: ["slz-ssh-key"],
          subnets: ["vsi-zone-1", "vsi-zone-2", "vsi-zone-3"],
          vpc: "management",
          vsi_per_subnet: 2,
          resource_group: "slz-management-rg",
        },
      ]}
    />
  );
};

export const Default = VsiLoadBalancerFormStory.bind({});
