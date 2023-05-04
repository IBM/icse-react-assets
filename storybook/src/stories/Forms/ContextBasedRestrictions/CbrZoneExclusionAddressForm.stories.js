import React from "react";
import { CbrZoneExclusionAddressForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrZoneExclusionAddressForm,
  title:
    "Components/Forms/ContextBasedRestrictions/CbrZoneExclusionAddressForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string specifying the name of the CBR Zone",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.account_id"]: {
      description: "A string specifying an account id",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.location"]: {
      description: "A string describing the location of the exclusion/address",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.service_name"]: {
      description: "A string describing the service name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.service_type"]: {
      description: "A string describing the service type",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.type"]: {
      description:
        "A string describing the type, can be `ipAddress`, `ipRange`, `subnet`, `vpc`, or `serviceRef`",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.value"]: {
      description: "A string value corresponding to the type",
      control: "none",
      type: { required: true }, // required prop or not
    },
    isModal: {
      description: "A boolean that describes if the form is in a modal or not",
      type: { required: true },
      table: { defaultValue: { summary: false } },
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

const CbrZoneExclusionAddressFormStory = ({ ...args }) => {
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
    <CbrZoneExclusionAddressForm
      {...args}
      data={{
        name: "address",
        account_id: "",
        location: "",
        service_name: "",
        service_type: "",
        type: "ipAddress",
        value: "",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = CbrZoneExclusionAddressFormStory.bind({});
