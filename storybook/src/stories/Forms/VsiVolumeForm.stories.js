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
      type: { required: true }, // required prop or not
    },
    ["data.kms_key"]: {
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
    ["data.iops"]: {
      description:
        "A string value of the total input/ output operations per second (IOPS) for your storage. This value is required for `custom` storage profiles only.",
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
    invalidIopsCallback: {
      description:
        "Function that determines invalid state for the `iops` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidIopsTextCallback: {
      description: "Function that determines invalid text for `iops` field",
      type: { required: true }, // required prop or not
      control: "none",
    },
    composedNameCallback: {
      description:
        "A function to return a string value as helper text for the composed vsi volume name",
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
          "VsiVolumeForm allows users to create and edit Object Storage bucket",
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

  function composedNameCallback(stateData, componentProps) {
    return `${stateData.name}-<random suffix>`;
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

  function invalidIopsCallback(stateData, componentProps) {
    let iopsRange;
    if (stateData.capacity >= 0 && stateData.capacity <= 39) {
      iopsRange = { start: 100, end: 1000 };
    } else if (stateData.capacity >= 40 && stateData.capacity <= 79) {
      iopsRange = { start: 100, end: 2000 };
    } else if (stateData.capacity >= 80 && stateData.capacity <= 99) {
      iopsRange = { start: 100, end: 4000 };
    } else if (stateData.capacity >= 100 && stateData.capacity <= 499) {
      iopsRange = { start: 100, end: 6000 };
    } else if (stateData.capacity >= 500 && stateData.capacity <= 999) {
      iopsRange = { start: 100, end: 10000 };
    } else if (stateData.capacity >= 1000 && stateData.capacity <= 1999) {
      iopsRange = { start: 100, end: 20000 };
    } else if (stateData.capacity >= 2000 && stateData.capacity <= 3999) {
      iopsRange = { start: 100, end: 40000 };
    } else if (stateData.capacity >= 4000 && stateData.capacity <= 7999) {
      iopsRange = { start: 100, end: 40000 };
    } else if (stateData.capacity >= 8000 && stateData.capacity <= 9999) {
      iopsRange = { start: 100, end: 48000 };
    } else if (stateData.capacity >= 10000 && stateData.capacity <= 16000) {
      iopsRange = { start: 100, end: 48000 };
    } else iopsRange = `invalid capacity value`;
    if (
      stateData.capacity === "" ||
      typeof iopsRange === "string" ||
      stateData.iops < iopsRange.start ||
      stateData.iops > iopsRange.end
    )
      return true;
  }

  function invalidIopsTextCallback(stateData, componentProps) {
    let invalidText = ``;
    let iopsRange;
    if (stateData.capacity >= 0 && stateData.capacity <= 39) {
      iopsRange = { start: 100, end: 1000 };
    } else if (stateData.capacity >= 40 && stateData.capacity <= 79) {
      iopsRange = { start: 100, end: 2000 };
    } else if (stateData.capacity >= 80 && stateData.capacity <= 99) {
      iopsRange = { start: 100, end: 4000 };
    } else if (stateData.capacity >= 100 && stateData.capacity <= 499) {
      iopsRange = { start: 100, end: 6000 };
    } else if (stateData.capacity >= 500 && stateData.capacity <= 999) {
      iopsRange = { start: 100, end: 10000 };
    } else if (stateData.capacity >= 1000 && stateData.capacity <= 1999) {
      iopsRange = { start: 100, end: 20000 };
    } else if (stateData.capacity >= 2000 && stateData.capacity <= 3999) {
      iopsRange = { start: 100, end: 40000 };
    } else if (stateData.capacity >= 4000 && stateData.capacity <= 7999) {
      iopsRange = { start: 100, end: 40000 };
    } else if (stateData.capacity >= 8000 && stateData.capacity <= 9999) {
      iopsRange = { start: 100, end: 48000 };
    } else if (stateData.capacity >= 10000 && stateData.capacity <= 16000) {
      iopsRange = { start: 100, end: 48000 };
    } else iopsRange = `invalid capacity value`;
    if (stateData.capacity === "" || typeof iopsRange === "string") {
      invalidText = `Invalid capacity value.`;
    } else if (
      stateData.iops < iopsRange.start ||
      stateData.iops > iopsRange.end
    ) {
      invalidText = `IOPS value is not within the valid range for the vsi volume capacity currently selected (Available IOPS Range for current capacity: [${iopsRange.start}, ${iopsRange.end}]).`;
    }
    return invalidText;
  }

  return (
    <VsiVolumeForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidIopsCallback={invalidIopsCallback}
      invalidIopsTextCallback={invalidIopsTextCallback}
      composedNameCallback={composedNameCallback}
      encryptionKeyFilter={encryptionKeyFilter}
      encryptionKeys={["key1", "key2"]}
      data={{
        name: "",
        profile: "general-purpose",
        kms_key: "key1",
        capacity: "",
        iops: "",
      }}
    />
  );
};
