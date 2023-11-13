import { ClassicGatewayForm } from "icse-react-assets";

export default {
  component: ClassicGatewayForm,
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false },
      control: "none",
    },
    ["data.name"]: {
      description: "A string value for the gateway name",
      control: "none",
      type: { required: false },
    },
    ["data.hadr"]: {
      description:
        "A boolean value determining number of gateways to provision",
      control: "none",
      type: { required: false },
    },
    ["data.datacenter"]: {
      description: "A string value for the gateway datacenter name",
      control: "none",
      type: { required: false },
    },
    ["data.ssh_key"]: {
      description: "A string value for the gateway ssh key name",
      control: "none",
      type: { required: false },
    },
    ["data.disk_key_names"]: {
      description:
        "An array of string string value for the gateway disk key name",
      control: "none",
      type: { required: false },
    },
    ["data.private_network_only"]: {
      description:
        "A boolean value that is true when only using private network",
      control: "none",
      type: { required: false },
    },
    ["data.private_vlan"]: {
      description: "A string value for the gateway private vlan name",
      control: "none",
      type: { required: false },
    },
    ["data.public_vlan"]: {
      description: "A string value for the gateway public vlan name",
      control: "none",
      type: { required: false },
    },
    ["data.package_key_name"]: {
      description: "A string value for the gateway package key name",
      control: "none",
      type: { required: false },
    },
    ["data.os_key_name"]: {
      description: "A string value for the gateway os key name",
      control: "none",
      type: { required: false },
    },
    ["data.process_key_name"]: {
      description: "A string value for the gateway process key name",
      control: "none",
      type: { required: false },
    },
    ["data.network_speed"]: {
      description: "A string value for the gateway network speed",
      control: "none",
      type: { required: false },
    },
    ["data.public_bandwidth"]: {
      description: "A string value for the gateway public_bandwidth",
      control: "none",
      type: { required: false },
    },
    ["data.memory"]: {
      description: "A string value for the gateway memory",
      control: "none",
      type: { required: false },
    },
    ["data.tcp_monitoring"]: {
      description: "A boolean value to enable tcp monitoring",
      control: "none",
      type: { required: false },
    },
    ["data.redundant_network"]: {
      description: "A boolean value to enable redundant_network",
      control: "none",
      type: { required: false },
    },
    ["data.ipv6_enabled"]: {
      description: "A boolean value to enable ipv6_enabled",
      control: "none",
      type: { required: false },
    },
    composedNameCallback: {
      summary: "A function to create the composed name of the gateway",
      type: { required: true },
      control: "none",
    },
    invalidCallback: {
      summary:
        "A function that returns true when the name for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      summary:
        "A function that returns text when the name for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    datacenterList: {
      summary: "An array of strings with a list of datacenters",
      type: { required: true },
      control: "none",
    },
    packageNameList: {
      summary: "An array of strings with a list of package key names",
      type: { required: true },
      control: "none",
    },
    osKeyNameList: {
      summary: "An array of strings with a list of os key names",
      type: { required: true },
      control: "none",
    },
    processKeyNameList: {
      summary: "An array of strings with a list of process key names",
      type: { required: true },
      control: "none",
    },
    classicSshKeyList: {
      summary: "An array of strings with a list of classic SSH key names",
      type: { required: true },
      control: "none",
    },
    diskKeyNameList: {
      summary: "An array of strings with a list of disk key names",
      type: { required: true },
      control: "none",
    },
    classic_vlans: {
      summary: "A list of objects describing classic VLANS",
      type: { required: true },
      control: "none",
    },
    invalidNetworkSpeedCallback: {
      summary:
        "A function that returns true when the network speed for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidNetworkSpeedTextCallback: {
      summary:
        "A function that returns text when the network speed for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidPublicBandwidthCallback: {
      summary:
        "A function that returns true when the public bandwidth for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidPublicBandwidthTextCallback: {
      summary:
        "A function that returns text when the public bandwidth for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidMemoryCallback: {
      summary:
        "A function that returns true when the memory for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidMemoryTextCallback: {
      summary:
        "A function that returns text when the memory for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidDomainCallback: {
      summary:
        "A function that returns true when the memory for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
    invalidDomainTextCallback: {
      summary:
        "A function that returns text when the memory for the gateway is invalid",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "ClassicGatewayForm is a component that provides functionaility for editing a Classic Gateway appliance",
      },
    },
  },
};

const ClassicGatewayStory = () => {
  return (
    <ClassicGatewayForm
      data={{
        name: "gw",
        hostname: "gw-host",
        datacenter: "dal10",
        network_speed: "1000",
        private_network_only: false,
        tcp_monitoring: false,
        redundant_network: true,
        public_bandwidth: 5000,
        memory: 64,
        notes: "Notes",
        ipv6_enabled: false,
        package_key_name: "VIRTUAL_ROUTER_APPLIANCE_1_GPBS",
        os_key_name: "OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV",
        process_key_name: "INTEL_XEON_4210_2_20",
        private_vlan: "example-classic-private",
        public_vlan: "example-classic-public",
        ssh_key: "example-classic",
        disk_key_names: ["HARD_DRIVE_2_00_TB_SATA_2"],
        hadr: false,
      }}
      invalidCallback={() => {
        return true;
      }}
      invalidTextCallback={() => {
        return "uh oh";
      }}
      classic_vlans={[
        {
          name: "example-classic-public",
          type: "PUBLIC",
          datacenter: "dal10",
        },
        {
          name: "hidden-classic-public",
          type: "PUBLIC",
          datacenter: "dal11",
        },
        {
          name: "example-classic-private",
          type: "PRIVATE",
          datacenter: "dal10",
        },
        {
          name: "hidden-classic-private",
          type: "PRIVATE",
          datacenter: "dal11",
        },
      ]}
      composedNameCallback={() => {
        return "uh oh";
      }}
      datacenterList={["dal10", "dal11"]}
      classicSshKeyList={["example-classic"]}
      packageNameList={["VIRTUAL_ROUTER_APPLIANCE_1_GPBS"]}
      osKeyNameList={["OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV"]}
      processKeyNameList={["INTEL_XEON_4210_2_20"]}
      diskKeyNameList={["HARD_DRIVE_2_00_TB_SATA_2"]}
      invalidNetworkSpeedCallback={() => {
        return false;
      }}
      invalidNetworkSpeedTextCallback={() => {
        return "uh oh";
      }}
      invalidPublicBandwidthCallback={() => {
        return false;
      }}
      invalidPublicBandwidthTextCallback={() => {
        return "uh oh";
      }}
      invalidMemoryCallback={() => {
        return false;
      }}
      invalidMemoryTextCallback={() => {
        return "uh oh";
      }}
      invalidDomainCallback={() => {
        return false;
      }}
      invalidDomainTextCallback={() => {
        return "uh oh";
      }}
    />
  );
};

export const Default = ClassicGatewayStory.bind({});
