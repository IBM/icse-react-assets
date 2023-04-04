import React from "react";
import {
  VsiLoadBalancerForm
} from "icse-react-assets";
import "./App.css";

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

function App() {
  return (
    <VsiLoadBalancerForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      resourceGroups={["a", "b"]}
      vpcList={["management", "edge-vpc"]}
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
}

export default App;
