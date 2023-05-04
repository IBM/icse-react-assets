import React from "react";
import { CbrZoneForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrZoneForm,
  title: "Components/Forms/ContextBasedRestrictions/CbrZoneForm",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "CbrZoneForm is a form component that provides functionality for editing a zone for context based restrictions",
      },
    },
  },
};

const CbrZoneFormStory = ({ ...args }) => {
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
    <CbrZoneForm
      {...args}
      data={{
        name: "zone",
        description: "",
        account_id: "",
        addresses: [
          {
            name: "address",
            account_id: "",
            location: "",
            service_name: "",
            service_type: "",
            type: "ipAddress",
            value: "",
          },
        ],
        exclusions: [
          {
            name: "exclusion",
            account_id: "",
            location: "",
            service_name: "",
            service_type: "",
            type: "ipAddress",
            value: "",
          },
        ],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      propsMatchState={() => {}}
      invalidAddressCallback={invalidCallback}
      invalidAddressTextCallback={invalidTextCallback}
      addressProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      invalidExclusionCallback={invalidCallback}
      invalidExclusionTextCallback={invalidTextCallback}
      exclusionProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};

export const Default = CbrZoneFormStory.bind({});
