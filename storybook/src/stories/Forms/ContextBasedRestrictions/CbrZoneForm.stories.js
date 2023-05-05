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
      description: "A string specifying the name of the CBR Zone",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.account_id"]: {
      description: "A string specifying an account id",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.description"]: {
      description: "A string of 0-300 characters specifying a zone description",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.addresses"]: {
      description:
        "An array of objects containing cbr zone addresses, view the CbrZoneExclusionAddressForm story for more information",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.exclusions"]: {
      description:
        "An array of objects containing cbr zone addresses, view the CbrZoneExclusionAddressForm story for more information",
      control: "none",
      type: { required: false }, // required prop or not
    },
    exclusionProps: {
      description:
        "An object containing props to pass to the CbrZoneExclusionAddressForm",
      type: { required: true }, // required prop or not
      control: "none",
    },
    ["exclusionProps.disableSave"]: {
      description:
        "A function that determines if the save button should be disabled",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["exclusionProps.onDelete"]: {
      description:
        "A function that determines what should happen when delete is pressed",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["exclusionProps.onSave"]: {
      description:
        "A function that determines what should occur when the form is saved",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["exclusionProps.onSubmit"]: {
      description:
        "A function that determines what occurs when a modal is submitted",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["addressProps.disableSave"]: {
      description:
        "A function that determines if the save button should be disabled",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["addressProps.onDelete"]: {
      description:
        "A function that determines what should happen when delete is pressed",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["addressProps.onSave"]: {
      description:
        "A function that determines what should occur when the form is saved",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["addressProps.onSubmit"]: {
      description:
        "A function that determines what occurs when a modal is submitted",
      control: "none",
      type: { required: true }, // required prop or not
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
    invalidAddressCallback: {
      description:
        "Function that determines invalid state for child form's `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidAddressTextCallback: {
      description:
        "Function that determines invalid text child form's `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidExclusionCallback: {
      description:
        "Function that determines invalid state for child form's `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidExclusionTextCallback: {
      description:
        "Function that determines invalid text child form's `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    isModal: {
      description: "A boolean that describes if the form is in a modal or not",
      type: { required: true },
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    propsMatchState: {
      description: "A function that determines if props are the same as state",
      type: { required: true },
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
            service_instance: "",
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
            service_instance: "",
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
