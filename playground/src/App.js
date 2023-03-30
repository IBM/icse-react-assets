import React from "react";
import { ClusterForm, VpeForm } from "icse-react-assets";

import "./App.css";

function App() {
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

  function helperTextCallback(stateData, componentProps) {
    return "<prefix>-" + stateData.name;
  }

  return (
    <VpeForm
      data={{
        name: "workload-vpe",
        vpc: "workload",
        service: "kms",
        resource_group: "test",
        security_groups: ["1", "2"],
        subnets: ["vsi-zone-1"],
      }}
      vpcList={["management", "workload"]}
      resourceGroups={["test", "foo", "bar"]}
      subnetList={[
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
      ]}
      securityGroups={[
        {
          name: "1",
          vpc: "workload",
        },
        {
          name: "2",
          vpc: "workload",
        },
        {
          name: "3",
          vpc: "management",
        },
      ]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
    // <ClusterForm
    //   data={{
    //     name: "",
    //     resource_group: "",
    //     kube_type: "openshift",
    //     entitlement: "null",
    //     encryption_key: "",
    //     cos: "",
    //     vpc: "management",
    //     subnets: [],
    //     workers_per_subnet: 2,
    //     flavor: "bx2.16x64",
    //     kube_version: "4.10.52_openshift (Default)",
    //     update_all_workers: false,
    //     worker_pools: [
    //       {
    //         entitlement: "cloud_pak",
    //         cluster: "workload",
    //         flavor: "bx2.16x64",
    //         name: "logging-pool",
    //         resource_group: "workload-rg",
    //         subnets: ["vsi-zone-1", "vsi-zone-2", "vsi-zone-3"],
    //         vpc: "workload",
    //         workers_per_subnet: 2,
    //       },
    //     ],
    //   }}
    //   invalidCallback={invalidCallback}
    //   invalidTextCallback={invalidTextCallback}
    //   helperTextCallback={helperTextCallback}
    //   resourceGroups={["service-rg", "management-rg", "workload-rg"]}
    //   encryptionKeys={["atracker-key", "key", "roks-key"]}
    //   cosNames={["atracker-cos", "cos"]}
    //   vpcList={["management", "workload"]}
    //   subnetList={[
    //     {
    //       vpc: "management",
    //       zone: 1,
    //       cidr: "10.10.10.0/24",
    //       name: "vsi-zone-1",
    //       network_acl: "management",
    //       resource_group: "management-rg",
    //       public_gateway: false,
    //       has_prefix: true,
    //     },
    //     {
    //       vpc: "management",
    //       zone: 1,
    //       cidr: "10.20.10.0/24",
    //       name: "vpe-zone-1",
    //       resource_group: "management-rg",
    //       network_acl: "management",
    //       public_gateway: false,
    //       has_prefix: true,
    //     },

    //     {
    //       vpc: "workload",
    //       zone: 1,
    //       cidr: "10.40.10.0/24",
    //       name: "vsi-zone-1",
    //       network_acl: "workload",
    //       resource_group: "workload-rg",
    //       public_gateway: false,
    //       has_prefix: true,
    //     },
    //   ]}
    //   kubeVersionApiEndpoint={"/mock/api/kubeVersions"}
    //   flavorApiEndpoint={"/mock/api/machineTypes"}
    //   propsMatchState={() => {}}
    //   workerPoolProps={{
    //     onSave: () => {},
    //     onDelete: () => {},
    //     onSubmit: () => {},
    //     disableSave: () => {},
    //   }}
    //   invalidPoolCallback={invalidCallback}
    //   invalidPoolTextCallback={invalidTextCallback}
    // />
  );
}

export default App;
