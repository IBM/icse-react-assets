import { PowerVsNetworkForm } from "icse-react-assets";
import React from "react";
import { contains } from "lazy-z";

export default {
  component: PowerVsNetworkForm,
  title: "Components/Forms/PowerVs/PowerVsNetworkForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the object storage bucket name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.pi_network_type"]: {
      description: "A string describing the network type",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.pi_cidr"]: {
      description: "A string value of the network CIDR block",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.pi_dns"]: {
      description: "A string value of the DNS server IP address",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.pi_network_jumbo"]: {
      description: "A boolean to handle MTU jumbo option for Power networks",
      control: "none",
      type: { required: true }, // required prop or not
    },
    invalidNetworkNameCallback: {
      description:
        "Function that determines invalid state for the `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidNetworkNameCallbackText: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCidrCallback: {
      description:
        "Function that determines invalid state for the `pi_cidr` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCidrCallbackText: {
      description: "Function that determines invalid text for `pi_cidr` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidDnsCallback: {
      description:
        "Function that determines invalid state for the `pi_dns` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidDnsCallbackText: {
      description: "Function that determines invalid text for `pi_dns` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "PowerVsNetworkForm allows users to create networking subnets for Power Virtual Servers",
      },
    },
  },
};

const PowerVsNetworkFormStory = () => {
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
      ? `Name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }
  return (
    <PowerVsNetworkForm
      data={{
        name: "frog",
        pi_cidr: "1.2.3.4/5",
        pi_network_type: "vlan",
        pi_dns: "1.2.3.4",
      }}
      invalidNetworkNameCallback={invalidCallback}
      invalidNetworkNameCallbackText={invalidTextCallback}
      invalidCidrCallback={invalidCallback}
      invalidCidrCallbackText={invalidTextCallback}
      invalidDnsCallback={invalidCallback}
      invalidDnsCallbackText={invalidTextCallback}
    />
  );
};
