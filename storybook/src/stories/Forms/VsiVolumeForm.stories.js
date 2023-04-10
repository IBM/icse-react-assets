import { VsiVolumeForm } from "icse-react-assets";
import { contains } from "lazy-z";
import React from "react";

export default {
  component: VsiVolumeForm,
  title: "Components/Forms/VsiVolumeForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value of the vsi volume name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.profile"]: {
      description:
        "A string value of the profile used for this volume. Can be `general-purpose`, `5iops-tier`, `10iops-tier`, or `custom`",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.encryption_key"]: {
      description: "A string value of the encryption key",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.capacity"]: {
      description:
        "A string value of the capacity of the volume in gigabytes. This defaults to `100`, minimum to `10` and maximum to `16000`",
      control: "none",
      type: { required: false }, // required prop or not
    },
    invalidCallback: {
      description:
        "Function that determines invalid state for the `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description: "Function that determines invalid text for `name` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description: "An array of string encryption key names",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeyFilter: {
      description: "Function that filters the encryption keys",
      type: { required: false }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "VsiVolumeForm allows users to create and edit Block Storage for VSI Volumes",
      },
    },
  },
};

export const VsiVolumeFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function encryptionKeyFilter(stateData, componentProps) {
    // add filter here
    return componentProps.encryptionKeys;
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
    <VsiVolumeForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      encryptionKeyFilter={encryptionKeyFilter}
      encryptionKeys={["key1", "key2"]}
      data={{
        name: "",
        profile: "3iops-tier",
        encryption_key: "key1",
        capacity: "",
      }}
    />
  );
};
