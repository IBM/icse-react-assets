import React from "react";
import { contains } from "lazy-z";
import { ClusterForm, WorkerPoolForm } from "icse-react-assets";

export default {
  component: ClusterForm,
  title: "Components/Forms/ClusterForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "data.name": {
      description: "A string value for the name of the Cluster Instance",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.resource_group": {
      description: "A string value of the Resource Group selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.kube_type": {
      description:
        "A string value of the kubernetes type selected, (OpenShift or IBM Kubernetes Service)",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.entitlement": {
      description:
        "A string value for selecting entitlements related to the IBM Cloud Pak for Data platform",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.kms_config.crk_name": {
      description: "A string value of the Encryption Key selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.cos_name": {
      description:
        "A string value of the Cloud Object Storage Instance selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.vpc_name": {
      description: "A string for the VPC where your cluster is provisioned",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.subnets": {
      description: "An array of subnets that are selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.workers_per_subnet": {
      description: "An integer for the number of worker nodes per subnet",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.machine_type": {
      description:
        "A string for selecting the flavor (machine type) of the worker nodes",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.kube_version": {
      description: "A string for the Kubernetes version selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.update_all_workers": {
      description:
        "A boolean specifying whether or not all workers should be updated",
      control: "none",
      type: { required: true }, // required prop or not
    },
    isModal: {
      description:
        "A boolean value that specifies if the Worker Pools form is a component within a modal",
      type: { required: false }, // required prop or not
      control: "none",
      table: { defaultValue: false },
    },
    subnetList: {
      description: "An array (string) of all subnets",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    helperTextCallback: {
      description:
        "A function to display helperText for the specified Cluster name",
      type: { required: true }, // required prop or not
      control: "none",
    },
    kubeVersionApiEndpoint: {
      description:
        "A string representing the api endpoint to fetch valid Kubernetes versions to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    flavorApiEndpoint: {
      description:
        "A string representing the api endpoint to fetch valid Machine Instance types (flavors) to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    workerPoolForms: {
      description: "A React Node to render the cluster's worker pools",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidWorkerPoolsCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidWorkerPoolsTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "ClusterForm is a form component that provides functionality for creating highly available, containerized apps on Red Hat OpenShift clusters and Kubernetes clusters.",
      },
    },
  },
};

const ClusterFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function helperTextCallback(stateData, componentProps) {
    return "<prefix>-" + stateData.name;
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Cluster name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidWorkerPoolsCallback(stateData, componentProps) {
    return !validName(stateData.pool.name);
  }

  function invalidWorkerPoolsTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.pool.name)
      ? `Cluster name ${stateData.pool.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <ClusterForm
      data={{
        name: "",
        resource_group: "",
        kube_type: "openshift",
        entitlement: "null",
        kms_config: { crk_name: "" },
        cos_name: "",
        vpc_name: "",
        subnets: [],
        workers_per_subnet: 2,
        machine_type: "bx2.16x64",
        kube_version: "4.10.52_openshift (Default)",
        update_all_workers: false,
        worker_pools: [],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={helperTextCallback}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      encryptionKeys={["slz-atracker-key", "slz-slz-key", "slz-roks-key"]}
      cosNames={["atracker-cos", "cos"]}
      vpcList={["management", "workload"]}
      subnetList={[
        "vpe-zone-1",
        "vpe-zone-2",
        "vpe-zone-3",
        "vsi-zone-1",
        "vsi-zone-2",
        "vsi-zone-3",
      ]}
      kubeVersionApiEndpoint={"/mock/api/kubeVersions"}
      flavorApiEndpoint={"/mock/api/machineTypes"}
      workerPoolForms={WorkerPoolForm}
      invalidWorkerPoolsCallback={invalidWorkerPoolsCallback}
      invalidWorkerPoolsTextCallback={invalidWorkerPoolsTextCallback}
    />
  );
};

export const Default = ClusterFormStory.bind({});
