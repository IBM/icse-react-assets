import { PowerVsWorkspaceForm } from "icse-react-assets";
import { contains } from "lazy-z";
import React from "react";

export default {
  component: PowerVsWorkspaceForm,
  title: "Components/Forms/PowerVs/PowerVsWorkspaceForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value for the name of the workspace",
      type: { required: true },
      control: "none",
    },
    ["data.resource_group"]: {
      description: "A string value of the resource group of the workspace",
      type: { required: true },
      control: "none",
    },
    isModal: {
      description:
        "A boolean value that specifies if the Worker Pools form is a component within a modal",
      type: { required: false }, // required prop or not
      control: "none",
      table: { defaultValue: false },
    },
    invalidCallback: {
      description:
        "Function that determines the invalid state for the `name` field",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Function that determines the invalid text for the `name` field",
      type: { required: true },
      control: "none",
    },
    helperTextCallback: {
      description:
        "A function to display helperText for the specified workspace name",
      type: { required: true }, // required prop or not
      control: "none",
    },
    resourceGroups: {
      description: "A list of strings for each resource group",
      type: { required: true },
      control: "none",
    },
    zones: {
      description: "A list of strings for each availability zone",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "PowerVsWorkSpaceForm allows users to create infrastructure components for Power Systems Virtual Servers",
      },
    },
  },
};

const PowerVsWorkSpaceFormStory = () => {
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
    <PowerVsWorkspaceForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={invalidTextCallback}
      data={{
        name: "frog",
        resource_group: "dev-2",
        zone: "az-1",
        ssh_keys: [
          {
            workspace: "example",
            name: "keyname",
            zone: "dal10",
          },
        ],
        network: [
          {
            workspace: "example",
            name: "dev-nw",
            pi_cidr: "1.2.3.4/5",
            pi_dns: ["127.0.0.1"],
            pi_network_type: "vlan",
            pi_network_jumbo: true,
            zone: "dal10",
          },
        ],
        cloud_connections: [
          {
            name: "dev-connection",
            workspace: "example",
            pi_cloud_connection_speed: "50",
            pi_cloud_connection_global_routing: false,
            pi_cloud_connection_metered: false,
            pi_cloud_connection_transit_enabled: true,
            transit_gateways: ["tgw", "tgw2"],
            zone: "dal10",
          },
        ],
        attachments: [
          {
            connections: ["dev-connection"],
            workspace: "example",
            network: "dev-nw",
            zone: "dal10",
          },
        ],
      }}
      resourceGroups={["dev-1", "dev-2"]}
      zones={["az-1", "az-2"]}
      disableSave={() => {
        return true;
      }}
      propsMatchState={() => {
        return true;
      }}
      onNetworkDelete={() => {}}
      onNetworkSave={() => {}}
      onNetworkSubmit={() => {}}
      craig={{}}
      invalidNetworkNameCallbackText={invalidTextCallback}
      invalidCidrCallbackText={invalidTextCallback}
      invalidDnsCallbackText={invalidTextCallback}
      invalidNetworkNameCallback={invalidCallback}
      invalidCidrCallback={invalidCallback}
      invalidDnsCallback={invalidCallback}
      onConnectionDelete={() => {}}
      onConnectionSave={() => {}}
      onConnectionSubmit={() => {}}
      invalidConnectionNameCallback={invalidCallback}
      invalidConnectionNameTextCallback={invalidTextCallback}
      transitGatewayList={["tgw", "tgw-2"]}
      onAttachmentSave={() => {}}
      sshKeyDeleteDisabled={() => {}}
      onSshKeyDelete={() => {}}
      onSshKeySave={() => {}}
      onSshKeySubmit={() => {}}
      forceOpen={() => {
        return false;
      }}
      invalidSshKeyCallback={() => {
        return true;
      }}
      invalidSshKeyCallbackText={() => {
        return "uh oh";
      }}
      invalidKeyCallback={() => {
        return false;
      }}
    />
  );
};

const PowerVsWorkSpaceModalFormStory = () => {
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
    <PowerVsWorkspaceForm
      isModal
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={invalidTextCallback}
      data={{
        name: "frog",
        resource_group: "dev-2",
        zone: "dal10",
        network: [
          {
            workspace: "example",
            name: "dev-nw",
            pi_cidr: "1.2.3.4/5",
            pi_dns: ["127.0.0.1"],
            pi_network_type: "vlan",
            pi_network_jumbo: true,
            zone: "dal10",
          },
        ],
        cloud_connections: [
          {
            name: "dev-connection",
            workspace: "example",
            pi_cloud_connection_speed: "50",
            pi_cloud_connection_global_routing: false,
            pi_cloud_connection_metered: false,
            pi_cloud_connection_transit_enabled: true,
            transit_gateways: ["tgw", "tgw2"],
            zone: "dal10",
          },
        ],
        attachments: [
          {
            connections: ["dev-connection"],
            workspace: "example",
            network: "dev-nw",
            zone: "dal10",
          },
        ],
      }}
      resourceGroups={["dev-1", "dev-2"]}
      zones={["az-1", "az-2"]}
      disableSave={() => {
        return true;
      }}
      propsMatchState={() => {
        return true;
      }}
      onNetworkDelete={() => {}}
      onNetworkSave={() => {}}
      onNetworkSubmit={() => {}}
      craig={{}}
      invalidNetworkNameCallbackText={invalidTextCallback}
      invalidCidrCallbackText={invalidTextCallback}
      invalidDnsCallbackText={invalidTextCallback}
      invalidNetworkNameCallback={invalidCallback}
      invalidCidrCallback={invalidCallback}
      invalidDnsCallback={invalidCallback}
      onConnectionDelete={() => {}}
      onConnectionSave={() => {}}
      onConnectionSubmit={() => {}}
      invalidConnectionNameCallback={invalidCallback}
      invalidConnectionNameTextCallback={invalidTextCallback}
      transitGatewayList={["tgw", "tgw-2"]}
      onAttachmentSave={() => {}}
      onSshKeyDelete={() => {}}
      onSshKeySave={() => {}}
      onSshKeySubmit={() => {}}
      forceOpen={() => {
        return false;
      }}
      invalidSshKeyCallback={() => {
        return true;
      }}
      invalidSshKeyCallbackText={() => {
        return "uh oh";
      }}
      invalidKeyCallback={() => {
        return false;
      }}
      sshKeyDeleteDisabled={() => {}}
      imageMap={{
        dal10: [],
      }}
    />
  );
};

const PowerVsWorkSpaceFormStoryEdgeRouter = () => {
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
    <PowerVsWorkspaceForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={invalidTextCallback}
      data={{
        name: "frog",
        resource_group: "dev-2",
        zone: "dal10",
        ssh_keys: [
          {
            workspace: "example",
            name: "keyname",
            zone: "dal10",
          },
        ],
        network: [
          {
            workspace: "example",
            name: "dev-nw",
            pi_cidr: "1.2.3.4/5",
            pi_dns: ["127.0.0.1"],
            pi_network_type: "vlan",
            pi_network_jumbo: true,
            zone: "dal10",
          },
        ],
        cloud_connections: [
          {
            name: "dev-connection",
            workspace: "example",
            pi_cloud_connection_speed: "50",
            pi_cloud_connection_global_routing: false,
            pi_cloud_connection_metered: false,
            pi_cloud_connection_transit_enabled: true,
            transit_gateways: ["tgw", "tgw2"],
            zone: "dal10",
          },
        ],
        attachments: [
          {
            connections: ["dev-connection"],
            workspace: "example",
            network: "dev-nw",
            zone: "dal10",
          },
        ],
      }}
      resourceGroups={["dev-1", "dev-2"]}
      zones={["az-1", "az-2"]}
      disableSave={() => {
        return true;
      }}
      propsMatchState={() => {
        return true;
      }}
      onNetworkDelete={() => {}}
      onNetworkSave={() => {}}
      onNetworkSubmit={() => {}}
      craig={{}}
      invalidNetworkNameCallbackText={invalidTextCallback}
      invalidCidrCallbackText={invalidTextCallback}
      invalidDnsCallbackText={invalidTextCallback}
      invalidNetworkNameCallback={invalidCallback}
      invalidCidrCallback={invalidCallback}
      invalidDnsCallback={invalidCallback}
      onConnectionDelete={() => {}}
      onConnectionSave={() => {}}
      onConnectionSubmit={() => {}}
      invalidConnectionNameCallback={invalidCallback}
      invalidConnectionNameTextCallback={invalidTextCallback}
      transitGatewayList={["tgw", "tgw-2"]}
      onAttachmentSave={() => {}}
      sshKeyDeleteDisabled={() => {}}
      onSshKeyDelete={() => {}}
      onSshKeySave={() => {}}
      onSshKeySubmit={() => {}}
      forceOpen={() => {
        return false;
      }}
      invalidSshKeyCallback={() => {
        return true;
      }}
      invalidSshKeyCallbackText={() => {
        return "uh oh";
      }}
      invalidKeyCallback={() => {
        return false;
      }}
    />
  );
};

export const Default = PowerVsWorkSpaceFormStory.bind({});
export const Modal = PowerVsWorkSpaceModalFormStory.bind({});
export const PowerEdgeRouter = PowerVsWorkSpaceFormStoryEdgeRouter.bind({});
