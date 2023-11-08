import React from "react";
import { SshKeyForm } from "icse-react-assets";

export default {
  component: SshKeyForm,
  title: "Components/Forms/SshKeyForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string specifying the name of the SSH Key",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.use_data"]: {
      description:
        "A boolean describing whether or not to use an existing instance",
      control: "none",
    },
    ["data.resource_group"]: {
      description: "A string specifying the name of the resource group, not required for classic infrastructure",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.public_key"]: {
      description: "A string value of the SSH Public Key Value",
      control: "none",
      type: { required: false }, // required prop or not
    },
    powerVs: {
      description: "A boolean indicating whether or not PowerVS is used",
      control: "none",
      type: { required: false },
    },
    classic: {
      description: "A boolean indicating whether or not classic is used",
      control: "none",
      type: { required: false },
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidKeyCallback: {
      description:
        "Callback function that takes in stateData and componentProps and returns an object of invalid status and invalid text",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines invalid state and invalid text for `public_key` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
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
          "SshKeyForm is a form component that provides functionality for editing an SSH Key",
      },
    },
  },
};

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

function invalidKeyCallback(stateData, componentProps) {
  const regex = /^ssh-rsa AAAA[0-9A-Za-z+\/]+([=]{0,3}([^@]+@[^@]+))?$/g;
  return {
    invalid: stateData.public_key.match(regex) === null,
    invalidText: `Provide a unique SSH public key that matches ${regex} and does not exist in the IBM Cloud account in your region`,
  };
}

const SshKeyFormStory = () => {
  return (
    <SshKeyForm
      data={{
        name: "SshKeyFormTest",
        resource_group: "rg1",
        public_key: "test-key",
        use_data: false,
      }}
      resourceGroups={["rg1", "rg2", "rg3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidKeyCallback}
    />
  );
};

const PowerVsSshKeyStory = () => {
  return (
    <SshKeyForm
      data={{
        name: "PowerVsSshKeyFormTest",
        resource_group: "rg1",
        public_key: "test-key",
        use_data: false,
      }}
      powerVs
      resourceGroups={["rg1", "rg2", "rg3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidKeyCallback}
    />
  );
};

const ClassicSshKeyStory = () => {
  return (
    <SshKeyForm
      data={{
        name: "ClassicSshKeyFormTest",
        public_key: "test-key",
      }}
      classic
      resourceGroups={["rg1", "rg2", "rg3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidKeyCallback}
    />
  );
};

export const Default = SshKeyFormStory.bind({});
export const PowerVS = PowerVsSshKeyStory.bind({});
export const ClassicInfrastructure = ClassicSshKeyStory.bind({});
