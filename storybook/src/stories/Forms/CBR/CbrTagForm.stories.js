import React from "react";
import { CbrTagForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrTagForm,
  title: "Components/Forms/CBR/CbrTagForm",
  args: {
    isModal: false,
  },
  argTypes: {
    isModal: {
      description:
        "A boolean value that specifies if the CbrTagForm is a component within a modal",
      type: { required: false },
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "data.name": {
      description: "String, the name of the tag",
      control: "none",
      type: { required: true },
    },
    "data.value": {
      description: "String, the value for the tag",
      control: "none",
      type: { required: true },
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for the CBR tag fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Function that returns invalid text string for CBR tag fields",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "CbrTagForm",
      },
    },
    source: {
      type: "code",
    },
  },
};

const CbrTagFormStory = ({ ...args }) => {
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
    <CbrTagForm
      {...args}
      data={{
        name: "tag",
        value: "example",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = CbrTagFormStory.bind({});
