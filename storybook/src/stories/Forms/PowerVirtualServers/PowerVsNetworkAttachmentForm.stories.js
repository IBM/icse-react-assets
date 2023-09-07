import { PowerVsNetworkAttachmentForm } from "icse-react-assets";
import React from "react";
import { contains } from "lazy-z";

export default {
  component: PowerVsNetworkAttachmentForm,
  title: "Components/Forms/PowerVs/PowerVsNetworkAttachmentForm",
  argTypes: {
    data: {
      summary:
        "An array of objects describing the network connections for Powrer VS.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.network"]: {
      description: "A string value of the plaintext network interface name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.connections"]: {
      description:
        "An array of strings with the plaintext name for each cloud connection the interface is attached to",
      control: "none",
      type: { required: true }, // required prop or not
    },
    networks: {
      description: "An array of plaintext strings for each network",
      type: { required: true }, // required prop or not
      control: "none",
    },
    cloudConnections: {
      description: "An array of plaintext strings for each cloud connection",
      type: { required: true }, // required prop or not
      control: "none",
    },
    propsMatchState: {
      description:
        "Function to tell if the props match state. This is used to manage if a form is disabled",
      type: { required: true }, // required prop or not
      control: "none",
    },
    onSave: {
      description: "Function to save network attachments",
      type: { required: true }, // required prop or not
      control: "none",
    },
    workspace: {
      description:
        "A string value of the workspace where connections are created. This is used to identify connection workspace when connecting with an application",
      control: "none",
      type: { required: true }, // required prop or not
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
  function onSave(stateData, componentProps) {
    // handle save here
  }

  function propsMatchState(stateData, componentProps) {
    return true;
  }

  return (
    <div style={{ minWidth: "30vw" }}>
      <PowerVsNetworkAttachmentForm
        networks={["example-1", "example-2", "example-3"]}
        cloudConnections={["connection-1", "connection-2", "connection-3"]}
        data={[
          {
            network: "example-1",
            connections: ["connection-1"],
          },
          {
            network: "example-2",
            connections: ["connection-1", "connection-3"],
          },
          {
            network: "example-3",
            connections: ["connection-1", "connection-2", "connection-3"],
          },
        ]}
        propsMatchState={propsMatchState}
        onSave={onSave}
        workspace="example"
      />
    </div>
  );
};

export const Default = PowerVsNetworkFormStory.bind({});
