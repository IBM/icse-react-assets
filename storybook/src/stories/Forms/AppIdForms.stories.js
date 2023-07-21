import React from "react";
import { AppIdForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: AppIdForm,
  title: "Components/Forms/AppIdForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string specifying the name of the AppID instance",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.use_data"]: {
      description:
        "A string specifying the name of the resource group selected",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.resource_group"]: {
      description: "A string value of the Resource Group",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.encryption_key"]: {
      description: "A string value of the encryption key",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.keys"]: {
      description: "An array of strings containing the list of AppID keys",
      control: "none",
      type: { required: true }, // required prop or not
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
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
    invalidKeyCallback: {
      description:
        "Function that determines invalid state for child key forms `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidKeyTextCallback: {
      description:
        "Function that determines invalid text child key forms `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description: "An array of string encryption key names",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "AppIdForm is a form component that provides functionality for editing an AppID instance",
      },
    },
  },
};

const AppIdFormStory = () => {
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
    <AppIdForm
      data={{
        name: "dev",
        resource_group: "service-rg",
        use_data: false,
        keys: [
          {
            appid: "dev",
            name: "frog",
          },
          {
            appid: "dev",
            name: "toad",
          },
        ],
      }}
      propsMatchState={function () {
        return false;
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidCallback}
      invalidKeyTextCallback={invalidTextCallback}
      keyProps={{
        disableSave: function () {
          return false;
        },
        onDelete: () => {},
        onSave: () => {},
        onSubmit: () => {},
      }}
    />
  );
};

export const Default = AppIdFormStory.bind({});
