import React from "react";
import { CbrContextForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrContextForm,
  title: "Components/Forms/ContextBasedRestrictions/CbrContextForm",
  args: {
    isModal: false,
  },
  argTypes: {
    isModal: {
      description:
        "A boolean value that specifies if the CbrContextForm is a component within a modal",
      type: { required: false },
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "data.name": {
      description: "String, the name of the context",
      control: "none",
      type: { required: true },
    },
    "data.value": {
      description: "String, the value for the context",
      control: "none",
      type: { required: true },
    },
    invalidCallback: {
      description:
        "Callback function that determines invalid state for the context fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Callback function that returns invalid text string for context fields",
      type: { required: true },
      control: "none",
    },
    invalidNameCallback: {
      description:
        "Callback function that determines invalid state for the context's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidNameTextCallback: {
      description:
        "Callback function that returns invalid text string for the context's name field",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "CbrContextForm",
      },
    },
    source: {
      type: "code",
    },
  },
};

const CbrContextFormStory = ({ ...args }) => {
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
    <CbrContextForm
      {...args}
      data={{
        name: "context",
        value: "example",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
    />
  );
};

export const Default = CbrContextFormStory.bind({});
