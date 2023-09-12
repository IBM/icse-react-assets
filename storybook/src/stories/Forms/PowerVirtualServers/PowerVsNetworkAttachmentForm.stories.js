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
    cloud_connections: {
      description: "An array of plaintext strings for each cloud connection",
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
  function onSave(stateData, componentProps) {
    // handle save here
  }

  function propsMatchState(stateData, componentProps) {
    return true;
  }

  return (
    <div style={{ minWidth: "30vw" }}>
      <PowerVsNetworkAttachmentForm
        cloud_connections={["a", "b", "c"]}
        data={{
          network: "test",
          connections: ["b"],
        }}
      />
    </div>
  );
};

export const Default = PowerVsNetworkFormStory.bind({});
