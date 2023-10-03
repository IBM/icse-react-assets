import { PowerVsInstanceForm } from "icse-react-assets";
import {
  contains,
  isNullOrEmptyString,
  isIpv4CidrOrAddress,
  isInRange,
} from "lazy-z";
import React from "react";

export default {
  component: PowerVsInstanceForm,
  title: "Components/Forms/PowerVs/PowerVsInstanceForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value for the name of the Power instance",
      type: { required: false },
      control: "none",
    },
    ["data.workspace"]: {
      description:
        "A string value for the name of the selected Power workspace",
      type: { required: false },
      control: "none",
    },
    ["data.image"]: {
      description: "A string value for the name of the selected image",
      type: { required: false },
      control: "none",
    },
    ["data.network"]: {
      description: "An array of selected network interfaces",
      type: { required: false },
      control: "none",
    },
    ["data.zone"]: {
      description: "A string indicating the instance's zone",
      type: { required: false },
      control: "none",
    },
    ["data.pi_health_status"]: {
      description: "A string describing the health status of the instance",
      type: { required: false },
      control: "none",
    },
    ["data.pi_proc_type"]: {
      description: "A string describing the proc type of the instance",
      type: { required: false },
      control: "none",
    },
    ["data.pi_storage_type"]: {
      description: "A string indicating the storage type of the instance",
      type: { required: false },
      control: "none",
    },
    power: {
      description: "An array of available Power workspaces",
      type: { required: true },
      control: "none",
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
    invalidIpCallback: {
      description: "Function that determines an invalid IP address",
      type: { required: true },
      control: "none",
    },
    invalidPiProcessorsCallback: {
      description:
        "Function that determines the invalid state for the `pi_processor` field",
      type: { required: true },
      control: "none",
    },
    invalidPiProcessorsTextCallback: {
      description:
        "Function that determines the invalid text for the `pi_processor` field",
      type: { required: true },
      control: "none",
    },
    invalidPiMemoryCallback: {
      description:
        "Function that determines the invalid state for the `pi_memory` field",
      type: { required: true },
      control: "none",
    },
    invalidPiMemoryTextCallback: {
      description:
        "Function that determines the invalid text for the `pi_memory` field",
      type: { required: true },
      control: "none",
    },
    power_volumes: {
      description: "An array of available Power volumes",
      type: { required: true },
      control: "none",
    },
    storage_pool_map: {
      description:
        "A map of power storage pools where each key is a zone and the value is a list of storage pools allowed",
      type: { required: true },
      control: "none",
    },
  },
};

const PowerVsInstanceFormStory = () => {
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
  function invalidIpCallback(ip) {
    if (isNullOrEmptyString(ip)) {
      return false;
    } else return contains(ip, "/") || !isIpv4CidrOrAddress(ip);
  }
  function invalidPiProcessorsCallback(stateData) {
    // weird is in range error with decimal numbers and is in range
    return (
      parseFloat(stateData.pi_processors) < 0.25 ||
      parseFloat(stateData.pi_processors) > 7
    );
  }
  function invalidPiMemoryCallback(stateData) {
    return !isInRange(parseFloat(stateData.pi_memory), 0, 918);
  }
  function invalidPiProcessorsTextCallback() {
    return "Must be a number between 0.25 and 7.";
  }
  function invalidPiMemoryTextCallback() {
    return "Must be a whole number less than 918.";
  }
  return (
    <PowerVsInstanceForm
      data={{
        name: "frog",
        workspace: "example",
        image: "SLES15-SP3-SAP",
        network: [],
        zone: "dal10",
        pi_health_status: "OK",
        pi_proc_type: "shared",
        pi_storage_type: "tier1",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidIpCallback={invalidIpCallback}
      invalidPiProcessorsCallback={invalidPiProcessorsCallback}
      invalidPiProcessorsTextCallback={invalidPiProcessorsTextCallback}
      invalidPiMemoryCallback={invalidPiMemoryCallback}
      invalidPiMemoryTextCallback={invalidPiMemoryTextCallback}
      power_instances={[
        {
          zone: "dal10",
          workspace: "example",
          name: "test",
          image: "SLES15-SP3-SAP",
          ssh_key: "keyname",
          network: [
            {
              name: "dev-nw",
            },
          ],
          pi_memory: "4",
          pi_processors: "2",
          pi_proc_type: "shared",
          pi_sys_type: "s922",
          pi_pin_policy: "none",
          pi_health_status: "WARNING",
          pi_storage_type: "tier1",
        },
        {
          zone: "dal10",
          workspace: "example",
          name: "affinity",
          pi_affinity_policy: "anti-affinity",
          image: "SLES15-SP3-SAP",
          ssh_key: "keyname",
          network: [
            {
              name: "dev-nw",
            },
          ],
          pi_memory: "4",
          pi_processors: "2",
          pi_proc_type: "shared",
          pi_sys_type: "s922",
          pi_pin_policy: "none",
          pi_health_status: "WARNING",
          pi_storage_type: "tier1",
        },
      ]}
      power_volumes={[
        {
          name: "oracle-1-db-1",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1"],
          zone: "dal10",
          pi_volume_size: "90",
        },
        {
          name: "oracle-1-db-2",
          workspace: "example",
          pi_volume_shareable: false,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1"],
          zone: "dal10",
          pi_volume_size: "90",
        },
        {
          name: "oracle-2-db-1",
          workspace: "example",
          pi_volume_shareable: false,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-2"],
          zone: "dal10",
          pi_volume_size: "90",
        },
        {
          name: "oracle-2-db-2",
          workspace: "example",
          pi_volume_shareable: false,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-2"],
          zone: "dal10",
          pi_volume_size: "90",
        },
        {
          name: "redo-1",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "50",
        },
        {
          name: "redo-2",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "50",
        },
        {
          name: "asm-data-1",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "100",
        },
        {
          name: "asm-data-2",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "100",
        },
        {
          name: "management",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "80",
        },
        {
          name: "vote-1",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "50",
        },
        {
          name: "vote-2",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "20",
        },
        {
          name: "vote-3",
          workspace: "example",
          pi_volume_shareable: true,
          pi_replication_enabled: false,
          pi_volume_type: "tier1",
          attachments: ["oracle-1", "oracle-2"],
          zone: "dal10",
          pi_volume_size: "20",
        },
      ]}
      power={[
        {
          name: "example",
          resource_group: "example",
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
              pi_cloud_connection_speed: 50,
              pi_cloud_connection_global_routing: false,
              pi_cloud_connection_metered: false,
              pi_cloud_connection_transit_enabled: true,
              transit_gateways: [],
              zone: "dal10",
            },
          ],
          images: [
            {
              workspace: "example",
              pi_image_id: "e4de6683-2a42-4993-b702-c8613f132d39",
              name: "SLES15-SP3-SAP",
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
        },
        {
          name: "2example",
          resource_group: "example",
          zone: "dal10",
          ssh_keys: [
            {
              workspace: "example",
              name: "2keyname",
              zone: "dal10",
            },
          ],
          network: [
            {
              workspace: "example",
              name: "2dev-nw",
              pi_cidr: "1.2.3.4/5",
              pi_dns: ["127.0.0.1"],
              pi_network_type: "vlan",
              pi_network_jumbo: true,
              zone: "dal10",
            },
          ],
          cloud_connections: [
            {
              name: "2dev-connection",
              workspace: "example",
              pi_cloud_connection_speed: 50,
              pi_cloud_connection_global_routing: false,
              pi_cloud_connection_metered: false,
              pi_cloud_connection_transit_enabled: true,
              transit_gateways: [],
              zone: "dal10",
            },
          ],
          images: [
            {
              workspace: "example",
              pi_image_id: "e4de6683-2a42-4993-b702-c8613f132d39",
              name: "SLES15-SP3-SAP",
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
        },
      ]}
      storage_pool_map={{
        syd04: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
        ],
        syd05: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-3",
        ],
        "eu-de-1": [
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-3",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
        ],
        "eu-de-2": [
          "Tier1-Flash-4",
          "Tier1-Flash-3",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
        ],
        lon04: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
        ],
        lon06: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-3",
        ],
        "us-east": [
          "Tier1-Flash-8",
          "Tier1-Flash-7",
          "Tier1-Flash-6",
          "Tier1-Flash-5",
          "Tier1-Flash-4",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-5",
          "Tier3-Flash-2",
          "Tier3-Flash-4",
          "Tier3-Flash-3",
          "Tier3-Flash-1",
        ],
        wdc06: [
          "Tier1-Flash-1",
          "Tier1-Flash-3",
          "Tier1-Flash-2",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier3-Flash-3",
        ],
        "us-south": [
          "Tier1-Flash-6",
          "Tier1-Flash-5",
          "Tier1-Flash-4",
          "Tier1-Flash-3",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-5",
          "Tier3-Flash-4",
          "Tier3-Flash-3",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
        ],
        dal10: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
        ],
        dal10: [
          "Tier1-Flash-6",
          "Tier1-Flash-5",
          "Tier1-Flash-3",
          "Tier1-Flash-4",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier3-Flash-5",
          "Tier3-Flash-4",
          "Tier3-Flash-3",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
        ],
        tok04: [
          "Tier3-Flash-3",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
        ],
        sao01: [
          "Tier3-Flash-4",
          "Tier3-Flash-3",
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
          "Tier1-Flash-3",
        ],
        tor01: [
          "Tier3-Flash-2",
          "Tier3-Flash-1",
          "Tier1-Flash-2",
          "Tier1-Flash-1",
        ],
      }}
      storageChangesDisabledCallback={() => {
        return false;
      }}
    />
  );
};

export const Default = PowerVsInstanceFormStory.bind({});
