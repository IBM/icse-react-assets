import React from "react";
import { contains } from "lazy-z";
import { IcseModal, VpnServerForm } from "icse-react-assets";

export default {
  component: VpnServerForm,
  title: "Components/Forms/VpnServerForm",
  argTypes: {
    data: {
      summary: "An optional object describing the tooltip for a title",
      type: { required: false }, // required prop or not
      control: "none",
    },
    "data.name": {
      description: "A string value of the name of the VPN server",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.certificate_crn": {
      description:
        "The certificate CRN of secret from Secrets Manager for this VPN server.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.method": {
      description: "The type of authentication (certificate or username).",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.client_ca_crn": {
      description:
        "The CRN of the certificate instance or CRN of the secret from secrets manager to use for the VPN client certificate authority (CA). `identity_provider` and `client_ca_crn` are mutually exclusive, which means either one must be provided.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.identity_provider": {
      description:
        "The type of identity provider to be used by VPN client. `identity_provider` and `client_ca_crn` are mutually exclusive, which means either one must be provided.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.client_ip_pool": {
      description:
        "The VPN client IPv4 address pool, expressed in CIDR format. A CIDR block that contains twice the number of IP addresses that are required to enable the maximum number of concurrent connections is recommended.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.enable_split_tunneling": {
      description:
        "A boolean value indicating whether the split tunneling is enabled on this VPN server.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.client_idle_timeout": {
      description:
        "An integer value representing the seconds a VPN client can be idle before this VPN server will disconnect it. Specify `0` to prevent the server from disconnecting idle clients.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.port": {
      description:
        "An integer value representing the port number to use for this VPN server.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.protocol": {
      description:
        "A string value representing the transport protocol to use for this VPN server.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.resource_group": {
      description: "A string value representing the resource group for the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.vpc": {
      description:
        "A string value representing the VPC where the VPN Server will be deployed to.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.subnets": {
      description:
        "A string value representing the subnets for the VPN Server.",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.security_groups": {
      description:
        "An array of string values representing the security groups for the VPN Server.",
      control: "none",
      type: { required: true },
    },
    "data.client_dns_server_ips": {
      description:
        "A comma separated list (string) of the DNS server addresses that will be provided to VPN clients connected to this VPN server.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    isModal: {
      description: "Boolean value determining if the form is a modal",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    vpnServerRouteProps: {
      description:
        "Passes through props from the VpnServerRouteForm, look at the VpnServerRouteForm story for its required props",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "vpnServerRouteProps.onSubmit": {
      description:
        "A function that defines what occurs when a modal is submitted",
      type: { required: true },
    },
    "vpnServerRouteProps.onSave": {
      description: "A function that defines what occurs when the form is saved",
      type: { required: true },
    },
    "vpnServerRouteProps.onDelete": {
      description:
        "A function that defines what occurs when the resource is deleted",
      type: { required: true },
    },
    "vpnServerRouteProps.disableSave": {
      description:
        "A function that returns a single boolean describing whether the save button should be disabled",
      type: { required: true },
      control: "none",
    },
    invalidCallback: {
      description: "Function that determines invalid state for `name` field",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "VpnServerForm is a form component that provides functionality for adding or editing a VPN Server.",
      },
    },
  },
};

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
  return contains(["foo", "bar"], stateData.name)
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

const formProps = {
  data: {
    name: "vpn-server",
    certificate_crn: "",
    method: "",
    client_ca_crn: "",
    identiy_provider: "",
    client_ip_pool: "",
    enable_split_tunneling: false,
    client_idle_timeout: "",
    port: "",
    protocol: "UDP",
    resource_group: "",
    vpc: "",
    subnets: [],
    security_groups: [],
    client_dns_server_ips: "",
    routes: [
      {
        name: "vpn-server-route",
        destination: "2.2.2.2/16",
        action: "Deliver",
      },
    ],
  },
  resourceGroups: ["rg1", "rg2", "rg3"],
  vpcList: ["management", "workload"],
  subnetList: [
    {
      vpc: "management",
      zone: 1,
      cidr: "10.10.10.0/24",
      name: "vsi-zone-1",
      network_acl: "management",
      resource_group: "management-rg",
      public_gateway: false,
      has_prefix: true,
    },
    {
      vpc: "management",
      zone: 1,
      cidr: "10.20.10.0/24",
      name: "vpe-zone-1",
      resource_group: "management-rg",
      network_acl: "management",
      public_gateway: false,
      has_prefix: true,
    },

    {
      vpc: "workload",
      zone: 1,
      cidr: "10.40.10.0/24",
      name: "vsi-zone-1",
      network_acl: "workload",
      resource_group: "workload-rg",
      public_gateway: false,
      has_prefix: true,
    },
  ],
  securityGroups: [
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
  ],
  invalidCallback: invalidCallback,
  invalidTextCallback: invalidTextCallback,
  propsMatchState: () => {},
  invalidVpnServerRouteCallback: invalidCallback,
  invalidVpnServerRouteTextCallback: invalidTextCallback,
  vpnServerRouteProps: {
    onSave: () => {},
    onDelete: () => {},
    onSubmit: () => {},
    disableSave: () => {},
  },
};

const VpnServerFormStory = () => {
  return <VpnServerForm {...formProps} />;
};

const VpnServerFormModalStory = () => {
  return (
    <IcseModal
      heading={"VPN Server Modal"}
      open={true}
      primaryButtonText={"Create"}
      onRequestSubmit={() => {}}
      onRequestClose={() => {}}
    >
      <VpnServerForm {...formProps} isModal={true} />
    </IcseModal>
  );
};

export const Default = VpnServerFormStory.bind({});
export const Modal = VpnServerFormModalStory.bind({});
