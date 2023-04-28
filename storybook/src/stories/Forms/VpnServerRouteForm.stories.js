import React from "react";
import { VpnServerRouteForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: VpnServerRouteForm,
  title: "Components/Forms/VpnServerRouteForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the route name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.action"]: {
      description:
        "A string value of the action to be taken, can be `translate`, `deliver`, or `drop`",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.destination"]: {
      description: "A string value of the key name",
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
        "A function that returns a string of invalid text to display when the `name` field is invalid",
      type: { required: true }, // required prop or not
      control: "none",
    },
    isModal: {
      description: "A boolean describing whether the form is in a modal or not",
      type: { required: true },
      table: { defaultValue: { summary: false } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "VpnServerRouteForm is a form component that provides functionality for creating and editing VPN Server Routes",
      },
    },
  },
};

const VpnServerRouteFormStory = () => {
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
      ? `Key name ${stateData.name} already in use.`
      : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }
  return (
    <VpnServerRouteForm
      data={{ name: "route", destination: "2.2.2.2/16", action: "deliver" }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = VpnServerRouteFormStory.bind({});
