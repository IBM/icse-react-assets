import React from "react";
import { CbrRuleForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: CbrRuleForm,
  title: "Components/Forms/ContextBasedRestrictions/CbrRuleForm",
  args: {
    isModal: false,
  },
  argTypes: {
    isModal: {
      description:
        "A boolean value that specifies if the CbrRuleForm is a component within a modal",
      type: { required: false },
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    "data.name": {
      description: "String, name of the CBR rule",
      control: "none",
      type: { required: true },
    },
    "data.description": {
      description: "String, optional description of the CBR rule",
      control: "none",
      type: { required: true },
    },
    "data.enforcement_mode": {
      description:
        "String, can be `enabled`: restrictions are enforced and reported, `disabled`: restrictions are not enforced nor reported, or `report`: restrictions are not enforced but are reported",
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
        "Callback function that determines invalid state for the CBR rule fields, must return a boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Callback function that returns invalid text string for CBR rule fields",
      type: { required: true },
      control: "none",
    },
    invalidNameCallback: {
      description:
        "Callback function that returns invalid state for CBR rule name, must return a boolean",
      type: { required: true },
      control: "none",
    },
    invalidNameTextCallback: {
      description:
        "Callback function that returns invalid text string for CBR rule name",
      type: { required: true },
      control: "none",
    },
    contextProps: {
      description: "An object containing callback functions for CBRContextForm",
      type: { required: true },
      control: "none",
    },
    "contextProps.onSave": {
      description: "Callback function for when a context is saved",
      type: { required: true },
      control: "none",
    },
    "contextProps.onDelete": {
      description: "Callback function for when a context is deleted",
      type: { required: true },
      control: "none",
    },
    "contextProps.onSubmit": {
      description: "Callback function for when a context is created",
      type: { required: true },
      control: "none",
    },
    "contextProps.disableSave": {
      description:
        "Callback function that determines if the form can be saved, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "contextProps.invalidCallback": {
      description:
        "Callback function that determines invalid state for the context fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "contextProps.invalidTextCallback": {
      description:
        "Callback function that returns invalid text string for context fields",
      type: { required: true },
      control: "none",
    },
    "contextProps.invalidNameCallback": {
      description:
        "Callback function that determines invalid state for the context's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "contextProps.invalidNameTextCallback": {
      description:
        "Callback function that returns invalid text string for the context's name field",
      type: { required: true },
      control: "none",
    },
    resourceAttributeProps: {
      description:
        "An object containing callback functions for CBRResourceAttributeForm",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.onSave": {
      description: "Callback function for when a resource attribute is saved",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.onDelete": {
      description: "Callback function for when a resource attribute is deleted",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.onSubmit": {
      description: "Callback function for when a resource attribute is created",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.disableSave": {
      description:
        "Callback function that determines if the form can be saved, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.invalidCallback": {
      description:
        "Callback function that determines invalid state for the attribute fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.invalidTextCallback": {
      description:
        "Callback function that returns invalid text string for attribute fields",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.invalidNameCallback": {
      description:
        "Callback function that determines invalid state for the attribute's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "resourceAttributeProps.invalidNameTextCallback": {
      description:
        "Callback function that returns invalid text string for the attribute's name field",
      type: { required: true },
      control: "none",
    },
    tagProps: {
      description: "An object containing callback functions for CbrTagForm",
      type: { required: true },
      control: "none",
    },
    "tagProps.onSave": {
      description: "Callback function for when a tag is saved",
      type: { required: true },
      control: "none",
    },
    "tagProps.onDelete": {
      description: "Callback function for when a tag is deleted",
      type: { required: true },
      control: "none",
    },
    "tagProps.onSubmit": {
      description: "Callback function for when a tag is created",
      type: { required: true },
      control: "none",
    },
    "tagProps.disableSave": {
      description:
        "Callback function that determines if the form can be saved, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "tagProps.invalidCallback": {
      description:
        "Callback function that determines invalid state for the tag fields, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "tagProps.invalidTextCallback": {
      description:
        "Callback function that returns invalid text string for tag fields",
      type: { required: true },
      control: "none",
    },
    "tagProps.invalidNameCallback": {
      description:
        "Callback function that determines invalid state for the tag's name field, returns a boolean",
      type: { required: true },
      control: "none",
    },
    "tagProps.invalidNameTextCallback": {
      description:
        "Callback function that returns invalid text string for the tag's name field",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "CbrRuleForm allows the user to create and edit Context-Based Restriction rules.",
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
    switch (field) {
      case "api_type_id":
        return (
          stateData.api_type_id.length > 128 ||
          (stateData.api_type_id.length > 0 &&
            stateData.api_type_id.match(/^[a-zA-Z0-9_.\-:]+$/i) === null)
        );
      case "description":
        return (
          stateData.description.length > 300 ||
          (stateData.description.length > 0 &&
            stateData.description.match(/^[\x20-\xFE]*$/i) === null)
        );

      default:
        return false;
    }
  }

  function invalidTextCallback(field, stateData, componentProps) {
    return `Invalid ${field}`;
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
        resource_attributes: [{ name: "attribute1", value: "" }],
        tags: [{ name: "tag1", value: "value", operator: "equals" }],
      }}
      propsMatchState={() => {}}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidNameCallback={invalidNameCallback}
      invalidNameTextCallback={invalidNameTextCallback}
      contextProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
      resourceAttributeProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
      tagProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
        invalidNameCallback: invalidNameCallback,
        invalidNameTextCallback: invalidNameTextCallback,
        invalidCallback: invalidCallback,
        invalidTextCallback: invalidTextCallback,
      }}
    />
  );
};

export const Default = CbrRuleFormStory.bind({});
