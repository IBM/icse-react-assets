import React from "react";
import { CloudDatabaseForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CloudDatabaseForm,
  title: "Components/Forms/CloudDatabaseForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description:
        "A string specifying the name of the Cloud Database instance",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.use_data"]: {
      description:
        "A boolean specifying if an existing Cloud Database instance should be used",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string value of the resource group selected",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.encryption_key"]: {
      description: "A string value of the encryption key",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.service"]: {
      description: "A string value of the Cloud Database Service selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.group_id"]: {
      description: "A string value of the scaling group ID selected",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.memory"]: {
      description: "A number value of the allocated memory per member",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.disk"]: {
      description: "A number value of the allocated disk per member",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.cpu"]: {
      description: "A number value of the allocated dedicated CPU per member",
      control: "none",
      type: { required: false }, // required prop or not
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description: "An array of string encryption key names",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines invalid state and invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCpuCallback: {
      description:
        "Function that determines invalid state and invalid text for `cpu` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCpuTextCallback: {
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
          "Cloud Database Form is a form component that provides functionality for editing a Cloud Database instance.",
      },
    },
  },
};

const CloudDatabaseFormStory = () => {
  function validName(str) {
    // regex name validation that only allows alphanumerical characters and "-", string cannot end with "-"
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
    return `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <CloudDatabaseForm
      data={{
        name: "dev",
        resource_group: "service-rg",
        use_data: false,
        plan: "standard",
        encryption_key: "",
        service: "",
        group_id: "member",
        memory: "",
        disk: "",
        cpu: "",
        memoryMin: 1,
        memoryMax: 112,
        diskMin: 5,
        diskMax: 4096,
        cpuMin: 0,
        cpuMax: 28,
      }}
      propsMatchState={function () {
        return false;
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      encryptionKeys={["ekey1", "ekey2", "ekey3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = CloudDatabaseFormStory.bind({});
