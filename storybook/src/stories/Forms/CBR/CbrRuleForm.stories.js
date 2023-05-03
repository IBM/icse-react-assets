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
      description:
        "String, can be 'enabled': restrictions are enforced and reported, 'disabled': restrictions are not enforced nor reported, or 'report': restrictions are not enforced but are reported",
      control: "none",
      type: { required: true },
    },
    "data.api_type_id": {
      description: "String, the id of the API type this rule applies to",
      control: "none",
      type: { required: true },
    },
    "data.contexts": {
      description: "Array, the contexts this rule applies to",
      control: "none",
      type: { required: true },
    },
    "data.context.name": {
      description: "String, the name of the context",
      control: "none",
      type: { required: true },
    },
    "data.context.value": {
      description: "String, the value for the context",
      control: "none",
      type: { required: true },
    },
    "data.resource_attributes": {
      description: "Array, the resource attributes",
      control: "none",
      type: { required: true },
    },
    "data.resource_attributes.name": {
      description: "String, the name of the attribute",
      control: "none",
      type: { required: true },
    },
    "data.resource_attributes.value": {
      description: "String, the value for the resource attribute",
      control: "none",
      type: { required: true },
    },
    "data.tags": {
      description: "Array, the resource tags",
      control: "none",
      type: { required: true },
    },
    "data.tags.name": {
      description: "String, the name of the tag",
      control: "none",
      type: { required: true },
    },
    "data.tags.value": {
      description: "String, the value for the tag",
      control: "none",
      type: { required: true },
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for the CBR rule fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Function that returns invalid text string for CBR rule fields",
      type: { required: true },
      control: "none",
    },
    contextProps: {
      description: "An object containing props for contexts",
      type: { required: true },
      control: "none",
    },
    "contextProps.isModal": {
      description:
        "Boolean, specifies if the CBR context form is within a modal",
      type: { required: false },
      control: "none",
    },
    "contextProps.data": {
      description: "An object containing data for CBR rule contexts",
      type: { required: true },
      control: "none",
    },
    "contextProps.data.name": {
      description: "String, the name of the context",
      type: { required: true },
      control: "none",
    },
    "contextProps.data.value": {
      description: "String, the value for the context",
      type: { required: true },
      control: "none",
    },
    resourceAttributeProps: {
      description: "An object containing props for resource attributes",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.isModal": {
      description:
        "Boolean, specifies if the CBR resource attribute form is within a modal",
      type: { required: false },
      control: "none",
    },
    "resourceAttributeProps.data": {
      description: "An object containing data for CBR rule resource attributes",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.data.name": {
      description: "String, the name of the resource attribute",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.data.value": {
      description: "String, the value for the resource attribute",
      type: { required: true },
      control: "none",
    },
    tagProps: {
      description: "An object containing props for tags",
      type: { required: true },
      control: "none",
    },
    "tagProps.isModal": {
      description: "Boolean, specifies if the CBR tag form is within a modal",
      type: { required: false },
      control: "none",
    },
    "tagProps.data": {
      description: "An object containing data for CBR rule tags",
      type: { required: true },
      control: "none",
    },
    "tagProps.data.name": {
      description: "String, the name of the tag",
      type: { required: true },
      control: "none",
    },
    "tagProps.data.operator": {
      description: "String, the attribute operator",
      type: { required: true },
      control: "none",
    },
    "tagProps.data.value": {
      description: "String, the value for the tag",
      type: { required: true },
      control: "none",
    },
    invalidContextCallback: {
      description:
        "Function that determines invalid state for the CBR rule's context fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidContextTextCallback: {
      description:
        "Function that returns invalid text string for CBR rule's context fields",
      type: { required: true },
      control: "none",
    },
    invalidResourceAttributeCallback: {
      description:
        "Function that determines invalid state for the CBR rule's resource attribute fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidResourceAttributeTextCallback: {
      description:
        "Function that returns invalid text string for CBR rule's resource attribute fields",
      type: { required: true },
      control: "none",
    },
    invalidTagCallback: {
      description:
        "Function that determines invalid state for the CBR rule's tag fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTagTextCallback: {
      description:
        "Function that returns invalid text string for CBR rule's tag fields",
      type: { required: true },
      control: "none",
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
