import React from "react";
import { contains } from "lazy-z";
import { OpaqueIngressSecretForm } from "icse-react-assets";

export default {
  component: OpaqueIngressSecretForm,
  title: "Components/Forms/OpaqueIngressSecretForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: true }, // required prop or not
      control: "none",
    },
    "data.cluster": {
      description: "A string value for the name of the Cluster instance",
      control: "none",
      type: { required: false },
    },
    "data.name": {
      description: "A string value for the name of opaque secret",
      control: "none",
      type: { required: true },
    },
    "data.namespace": {
      description: "A string value for the namespace",
      control: "none",
      type: { required: false },
    },
    "data.persistence": {
      description: "A bool value defining if secret persistence is enabled",
      control: "none",
      type: { required: false },
    },
    "data.secrets_manager": {
      description:
        "A string value defining which secrets manager instance is selected",
      control: "none",
      type: { required: false },
    },
    "data.secrets_group": {
      description: "A string value defining which secret group is used",
      control: "none",
      type: { required: false },
    },
    "data.expiration_date": {
      description: "A string value determining when a secret will expire",
      control: "none",
      type: { required: false },
    },
    "data.labels": {
      description:
        "A array of string values that correspond to labels for the secrets",
      control: "none",
      type: { required: true },
    },
    "data.arbitrary_secret_name": {
      description: "A string value determining an arbitrary secrets name",
      control: "none",
      type: { required: false },
    },
    "data.arbitrary_secret_description": {
      description:
        "A string value determining an arbitrary secrets description",
      control: "none",
      type: { required: false },
    },
    "data.arbitrary_secret_data": {
      description: "A string value determining an arbitrary secrets data",
      control: "none",
      type: { required: false },
    },
    "data.username_password_secret_name": {
      description:
        "A string value determining a username password secrets name",
      control: "none",
      type: { required: false },
    },
    "data.username_password_secret_description": {
      description:
        "A string value determining a username password secrets description",
      control: "none",
      type: { required: false },
    },
    "data.username_password_secret_username": {
      description:
        "A string value determining a username password secrets username",
      control: "none",
      type: { required: false },
    },
    "data.username_password_secret_password": {
      description:
        "A string value determining a username password secrets password",
      control: "none",
      type: { required: false },
    },
    "data.interval": {
      description:
        "A number 1 or greater that determines the rotation interval for a username password secret",
      control: "none",
      type: { required: true },
    },
    "data.auto_rotate": {
      description:
        "A boolean determining if auto rotation for a username password secret is enabled",
      control: "none",
      type: { required: true },
    },
    "data.unit": {
      description:
        "A string value determined from a drop down used in username password secret rotation; can either be 'day' or 'month'",
      control: "none",
      type: { required: true },
    },
    secretsManagerList: {
      description:
        "An array of strings representing secrets manager instance names",
      type: { required: true },
      control: "none",
    },
    secretsManagerGroupCallback: {
      description:
        "A function to determine if the value supplied to group name is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    secretsManagerGroupCallbackText: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    secretCallback: {
      description:
        "A function to determine if the value supplied to secret name is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    secretCallbackText: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    descriptionInvalid: {
      description:
        "A function to determine if the value supplied to description is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    descriptionInvalidText: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    labelInvalid: {
      description:
        "A function to determine if the value supplied to labels is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    labelsInvalidText: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
    descriptionRegex: {
      description:
        "A regular expression to determine invalid status for descriptions",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "/^[A-z][a-zA-Z0-9-._,s]*$/i" } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "OpaqueIngressSecretForm is a form component that provides functionality for creating Opaque Ingress Secrets for a cluster.",
      },
    },
  },
};

const OpaqueIngressSecretFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/s;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps, field) {
    field = field || "name"
    return !validName(stateData[field]) || contains(["foo", "bar"], stateData[field]);
  }

  function invalidDescription(description, componentProps) {
    if (description) return description.match(this.descriptionRegex) == null;
    else return false;
  }

  function invalidDescriptionText(stateData) {
    return `Invalid Description. Must match the regular expression: /^[A-z][a-zA-Z0-9-._,\s]`
  }

  function invalidLabels(stateData) {
    if(stateData.length == 0) {
      return false;
    }
    let invalid = false;
    stateData.forEach((label) => {
      if (!validName(label)) {
        invalid = true;
      }
    });
    return invalid;
  }

  function invalidLabelsText(stateData) {
    return "One or more labels are invalid"
  }

  function invalidTextCallback(stateData, componentProps, field) {
    return contains(["foo", "bar"], stateData[field])
      ? `Name ${stateData[field]} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <OpaqueIngressSecretForm
      data={{ labels: ["hello", "world"], interval: 1, name: "test-name" ,arbitrary_secret_data: "", namespace: "", username_password_secret_username: "", username_password_secret_password: ""}}
      secretsManagerList={["sm1", "sm2", "sm3"]}
      secretsManagerGroupCallback={invalidCallback}
      secretsManagerGroupCallbackText={invalidTextCallback}
      secretCallback={invalidCallback}
      secretCallbackText={invalidTextCallback}
      descriptionInvalid={invalidDescription}
      descriptionInvalidText={invalidDescriptionText}
      labelsInvalid={invalidLabels}
      labelsInvalidText={invalidLabelsText}
      descriptionRegex={/^[A-z][a-zA-Z0-9-._,\s]*$/i}
    />
  );
};

const OpaqueIngressModalSecretFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/s;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Cluster name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <OpaqueIngressSecretForm
      data={{ labels: ["hello", "world"], interval: 1, name: "test-name" }}
      secretsManagerList={["sm1", "sm2", "sm3"]}
      secretsManagerGroupCallback={invalidCallback}
      secretsManagerGroupCallbackText={invalidTextCallback}
      secretCallback={invalidCallback}
      secretCallbackText={invalidTextCallback}
      descriptionInvalid={invalidCallback}
      descriptionInvalidText={invalidTextCallback}
      labelsInvalid={invalidCallback}
      labelsInvalidText={invalidTextCallback}
      isModal
    />
  );
};

export const Default = OpaqueIngressSecretFormStory.bind({});
export const Modal = OpaqueIngressModalSecretFormStory.bind({});
