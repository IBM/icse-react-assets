import React from "react";
import { CbrContextForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrContextForm,
  title: "Components/Forms/CBR/CbrContextForm",
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
        "Function that determines invalid state for the context's name and value, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Function that returns invalid text string for the context's name and value",
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

  function invalidCallback(field, stateData, componentProps) {
    if (field === "name")
      return (
        !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
      );
    else return false;
  }

  function invalidTextCallback(field, stateData, componentProps) {
    if (field === "name")
      return contains(["foo", "bar"], stateData.name)
        ? `Name ${stateData.name} already in use.`
        : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
    else return `Invalid ${field}`;
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
    />
  );
};

export const Default = CbrContextFormStory.bind({});
