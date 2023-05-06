import React from "react";
import { CbrResourceAttributeForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrResourceAttributeForm,
  title: "Components/Forms/ContextBasedRestrictions/CbrResourceAttributeForm",
  args: {
    isModal: false,
  },
  argTypes: {
    isModal: {
      description:
        "A boolean value that specifies if the CbrResourceAttributeForm is a component within a modal",
      type: { required: false },
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "data.name": {
      description: "String, the name of the resource attribute",
      control: "none",
      type: { required: true },
    },
    "data.value": {
      description: "String, the value for the resource attribute",
      control: "none",
      type: { required: true },
    },
    invalidCallback: {
      description:
        "Callback function that determines invalid state for the attribute fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Callback function that returns invalid text string for attribute fields",
      type: { required: true },
      control: "none",
    },
    invalidNameCallback: {
      description:
        "Callback function that determines invalid state for the attribute's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidNameTextCallback: {
      description:
        "Callback function that returns invalid text string for the attribute's name field",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "CbrResourceAttributeForm",
      },
    },
    source: {
      type: "code",
    },
  },
};

const CbrResourceAttributeFormStory = ({ ...args }) => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidNameCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidNameTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }
  function invalidCallback(field, stateData, componentProps) {
    return false;
  }
  function invalidTextCallback(field, stateData, componentProps) {
    return `Invalid ${field}`;
  }
  return (
    <CbrResourceAttributeForm
      {...args}
      data={{
        name: "resource-attribute",
        value: "example",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
    />
  );
};

export const Default = CbrResourceAttributeFormStory.bind({});
