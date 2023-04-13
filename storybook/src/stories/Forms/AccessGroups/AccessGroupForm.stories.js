import { AccessGroupForm } from "icse-react-assets";
import React from "react";

export default {
  component: AccessGroupForm,
  title: "Components/Forms/AccessGroups/AccessGroupForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the access group name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.description"]: {
      description: "A string value of the access group description",
      control: "none",
      type: { required: true }, // required prop or not
    },
    isModal: {
      description: "Boolean value determining if the form is a modal",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for specified field (defaults to `name`) field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "AccessGroupForm is a form component that provides functionality for adding or editing an access group.",
      },
    },
  },
};

const AccessGroupFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(field, stateData, componentProps) {
    if (field === "identity_provider")
      return !(stateData.identity_provider.length >= 6);
    else return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function composedNameCallback(stateData, componentProps) {
    return `${stateData.name}-<random suffix>`;
  }

  return (
    <AccessGroupForm
      data={{
        name: "test",
        description: "foo",
        policies: [],
        dynamic_policies: [],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidPolicyCallback={invalidCallback}
      invalidPolicyTextCallback={invalidTextCallback}
      invalidDynamicPolicyCallback={invalidCallback}
      invalidDynamicPolicyTextCallback={invalidTextCallback}
      policyHelperTextCallback={composedNameCallback}
      dynamicPolicyHelperTextCallback={composedNameCallback}
      policyProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
      dynamicPolicyProps={{
        onSave: () => {},
        onDelete: () => {},
        onSubmit: () => {},
        disableSave: () => {},
      }}
    />
  );
};

export const Default = AccessGroupFormStory.bind({});
