import React from "react";
import { CbrRuleForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrRuleForm,
  title: "Components/Forms/CBR/CbrRuleForm",
  args: {
    isModal: false,
  },
  argTypes: {
    isModal: {
      description:
        "A boolean value that specifies if the CbrRuleForm is a component within a modal",
      type: { required: false }, // required prop or not
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "data.name": {
      description: "String, name of the CBR rule",
      control: "none",
      type: { required: true }, // required prop or not
    },
    "data.description": {
      description: "String, optional description of the CBR rule",
      control: "none",
      type: { required: true },
    },
    "data.enforcement_mode": {
      description: "String, can be 'enabled', 'disabled', or 'report'",
      control: "none",
      type: { required: true },
    },
    "data.api_type_id": {
      description: "String, an id of the api type",
      control: "none",
      type: { required: true },
    },
    "data.contexts": {
      description: "Array",
      control: "none",
      type: { required: true },
    },
    "data.resource_attributes": {
      description: "Array",
      control: "none",
      type: { required: true },
    },
    "data.tags": {
      description: "Array",
      control: "none",
      type: { required: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component: "CbrRuleForm",
      },
    },
    source: {
      type: "code",
    },
  },
};

const CbrRuleFormStory = ({ ...args }) => {
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
    <CbrRuleForm
      {...args}
      data={{
        name: "example",
        description: "",
        enforcement_mode: "Disabled",
        api_type_id: "",
        contexts: [{ name: "context1", value: "" }],
        resource_attributes: [{ name: "ra1", value: "" }],
        tags: [{ name: "tag1", value: "", operator: "foo" }],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      propsMatchState={() => {}}
      invalidContextCallback={invalidCallback}
      invalidContextTextCallback={invalidTextCallback}
      contextProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      invalidResourceAttributeCallback={invalidCallback}
      invalidResourceAttributeTextCallback={invalidTextCallback}
      resourceAttributeProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      invalidTagCallback={invalidCallback}
      invalidTagTextCallback={invalidTextCallback}
      tagProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};

export const Default = CbrRuleFormStory.bind({});
