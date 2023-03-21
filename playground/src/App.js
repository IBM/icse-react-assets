import React from "react";
import {
  IcseFormTemplate,
  VpnGatewayForm,
  SaveAddButton,
} from "icse-react-assets";

import "./App.css";
import { Copy } from "@carbon/icons-react";

function none() {}

function App() {
  let args = {
    disabled: false,
    hoverText: "Example hover text",
    onClick: () => {},
    inline: false,
    type: "save",
  };
  let props = {
    name: "VPN Gateways",
    addText: "Create a VPN Gateway",
    arrayData: [
      {
        name: "",
        resource_group: "",
        vpc: "management",
        subnet: null,
      },
    ],
    innerForm: VpnGatewayForm,
    disableSave: none,
    onDelete: none,
    onSave: none,
    onSubmit: none,
    propsMatchState: none,
    innerFormProps: {
      craig: {
        store: {
          vpcs: ["management", "workload"],
          subnets: {
            management: [
              "vsi-zone-1",
              "vsi-zone-2",
              "vsi-zone-3",
              "vpe-zone-1",
              "vpe-zone-2",
              "vpe-zone-3",
              "vpn-zone-1",
              "vpn-zone-2",
              "vpn-zone-3",
            ],
            workload: [
              "vsi-zone-1",
              "vsi-zone-2",
              "vsi-zone-3",
              "vpe-zone-1",
              "vpe-zone-2",
              "vpn-zone-3",
            ],
          },
        },
      },
      resourceGroups: ["service-rg", "management-rg", "workload-rg"],
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
          cidr: "10.10.30.0/24",
          name: "vpn-zone-1",
          network_acl: "management",
          resource_group: "management-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "management",
          zone: 2,
          cidr: "10.10.20.0/24",
          name: "vsi-zone-2",
          network_acl: "management",
          resource_group: "management-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "management",
          zone: 3,
          cidr: "10.10.30.0/24",
          name: "vsi-zone-3",
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
          vpc: "management",
          zone: 2,
          cidr: "10.20.20.0/24",
          name: "vpe-zone-2",
          network_acl: "management",
          resource_group: "management-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "management",
          zone: 3,
          cidr: "10.20.30.0/24",
          name: "vpe-zone-3",
          network_acl: "management",
          resource_group: "management-rg",
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
        {
          vpc: "workload",
          zone: 2,
          cidr: "10.50.20.0/24",
          name: "vsi-zone-2",
          network_acl: "workload",
          resource_group: "workload-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "workload",
          zone: 3,
          cidr: "10.60.30.0/24",
          name: "vsi-zone-3",
          network_acl: "workload",
          resource_group: "workload-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "workload",
          zone: 1,
          cidr: "10.20.10.0/24",
          name: "vpe-zone-1",
          network_acl: "workload",
          resource_group: "workload-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "workload",
          zone: 2,
          cidr: "10.20.20.0/24",
          name: "vpe-zone-2",
          network_acl: "workload",
          resource_group: "workload-rg",
          public_gateway: false,
          has_prefix: true,
        },
        {
          vpc: "workload",
          zone: 3,
          cidr: "10.20.30.0/24",
          name: "vpe-zone-3",
          network_acl: "workload",
          resource_group: "workload-rg",
          public_gateway: false,
          has_prefix: true,
        },
      ], // initial
      disableSave: none,
      invalidCallback: none,
      invalidTextCallback: none,
      propsMatchState: none,
    },
    toggleFormProps: {
      hideName: true,
      submissionFieldName: "vpn_gateways",
    },
  };
  return (
    <>
      <SaveAddButton
        {...args}
        onClick={() => console.log("Save action")}
        customIcon={Copy}
        type="custom"
      />
      <IcseFormTemplate {...props} />
    </>
  );
}

export default App;
