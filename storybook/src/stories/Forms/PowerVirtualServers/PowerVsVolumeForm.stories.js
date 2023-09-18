import { PowerVsVolumeForm } from "icse-react-assets";
import { contains } from "lazy-z";
import React from "react";

export default {
    component: PowerVsVolumeForm,
    title: "Components/Forms/PowerVs/PowerVsVolumeForm",
    argTypes: {
        data: {
            summary: "An object that contains the data for the form.",
            type: { required: false }, // required prop or not
            control: "none",
        },
        ["data.name"]: {
            description: "A string value for the name of the volume",
            type: { required: true },
            control: "none",
        },
        ["data.workspace"]: {
            description: "A string value for the name of the selected workspace",
            type: { required: false },
            control: "none",
        },
        ["data.pi_volume_shareable"]: {
            description: "A boolean determining whether the volume is shareable",
            type: { required: false },
            control: "none",
        },
        ["data.pi_replication_enabled"]: {
            description: "A boolean determining whether replication is enabled",
            type: { required: false },
            control: "none",
        },
        ["data.pi_volume_type"]: {
            description: "A string value indicating the volume type",
            type: { required: false },
            control: "none",
        },
        ["data.attachments"]: {
            description: "An array of attached Power Instances",
            type: { required: false },
            control: "none",
        },
        power: {
            description: "An array of available Power workspaces",
            type: {required: true},
            control: "none",
        },
        power_instances: {
            description: "An array of available Power instances",
            type: {required: true},
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
          parameters: {
            docs: {
              description: {
                component:
                  "PowerVsVolumeForm allows users to create volumes for Power Virtual Servers",
              },
            },
          },        

    }

}

const PowerVsVolumeFormStory = () => {
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
        <PowerVsVolumeForm
            data={{
                name: "frog",
                workspace: "example",
                pi_volume_shareable: true,
                pi_replication_enabled: true,
                pi_volume_type: "tier1",
                attachments: [],
            }}
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
              power_instances={[
                {
                  zone: "dal12",
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
              ]}
            invalidCallback={invalidCallback}
            invalidTextCallback={invalidTextCallback}
        />
      );
};

export const Default = PowerVsVolumeFormStory.bind({});