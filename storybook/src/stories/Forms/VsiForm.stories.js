import React from "react";
import { contains } from "lazy-z";
import { IcseModal, VsiForm } from "icse-react-assets";

export default {
  component: VsiForm,
  title: "Components/Forms/VsiForm",
  argTypes: {
    data: {
      summary: "An optional object describing the tooltip for a title",
      type: { required: false }, // required prop or not
      control: "none",
    },
    "data.name": {
      description: "A string value of the name of the vsi",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.resource_group": {
      description: "A string value representing the resource group for the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.vpc": {
      description:
        "A string value representing the VPC where the VSI will be deployed to",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.subnet": {
      description:
        "A string value representing the VSI subnet (required for Teleport VSIs)",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.security_groups": {
      description:
        "An array of string values representing the security groups for the VSI",
      control: "none",
      type: { required: false },
    },
    "data.ssh_keys": {
      description: "An array of ssh key names (optional)",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.encryption_key": {
      description:
        "A string value representing the boot volume encryption key name for the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.enable_floating_ip": {
      description:
        "A boolean which specifying whether or not a floating IP is attached to the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.image_name": {
      description:
        "A string value representing the virtual server image deployed on the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.profile": {
      description:
        "A string value representing the type of machine requested for the VSI",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.vsi_per_subnet": {
      description:
        "A number corresponding to the amount of VSIs to deploy in each subnet. Must be a number 1-10.",
      control: "none",
      type: { required: false }, // required prop or not
    },
    isModal: {
      description: "Boolean value determining if the form is a modal",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    isTeleport: {
      description:
        "A boolean specifying whether or not the form is for a Teleport VSI",
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: false } },
      control: "none",
    },
    subForms: {
      description:
        "An array react nodes containing forms to render beneath this form",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidCallback: {
      description: "Function that determines invalid state for `name` field",
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
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    vpcList: {
      description: "An array of strings containing the names of VPCs to select",
      type: { required: true }, // required prop or not
      control: "none",
    },
    subnetList: {
      description:
        "An array of strings containing the names of subnet names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    sshKeys: {
      description: "An array of ssh key names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    encryptionKeys: {
      description: "An array of available encryption key names to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    apiEndpointImages: {
      description:
        "A string representing the api endpoint to fetch valid VSI images to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
    apiEndpointInstanceProfiles: {
      description:
        "A string representing the api endpoint to fetch valid VSI profiles to choose from",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "VsiForm is a form component that provides functionality for adding or editing a Virtual Server Instance (VSI).",
      },
    },
  },
};

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function composedNameCallback(stateData, componentProps) {
  return `${stateData.name}-<random suffix>`;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
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

const formProps = {
  data: {
    vsiVolumes: [
      {
        name: "",
        profile: "general-purpose",
        kms_key: "key1",
        capacity: "",
        iops: "",
      },
    ],
    name: "vsi",
  },
  resourceGroups: ["rg1", "rg2", "rg3"],
  vpcList: ["management", "workload"],
  subnetList: [
    {
      vpc: "management",
      zone: 1,
      cidr: "10.10.10.0/24",
      name: "vsi-zone-1",
      network_acl: "management",
      resource_group: "management-rg",
      public_gateway: false,
      has_prefix: true,
    },
    {
      vpc: "management",
      zone: 1,
      cidr: "10.20.10.0/24",
      name: "vpe-zone-1",
      resource_group: "management-rg",
      network_acl: "management",
      public_gateway: false,
      has_prefix: true,
    },

    {
      vpc: "workload",
      zone: 1,
      cidr: "10.40.10.0/24",
      name: "vsi-zone-1",
      network_acl: "workload",
      resource_group: "workload-rg",
      public_gateway: false,
      has_prefix: true,
    },
  ],
  securityGroups: [
    {
      vpc: "management",
      name: "management-vpe",
      resource_group: "management-rg",
      rules: [],
    },
    {
      vpc: "workload",
      name: "workload-vpe",
      resource_group: "workload-rg",
      rules: [],
    },
    {
      vpc: "management",
      name: "management-vsi",
      resource_group: "management-rg",
      rules: [],
    },
  ],
  sshKeys: ["key1", "key2", "key3"],
  encryptionKeys: ["ekey1", "ekey2", "ekey3"],
  apiEndpointImages: "/mock/api/images",
  apiEndpointInstanceProfiles: "/mock/api/flavors",
  invalidCallback: invalidCallback,
  invalidTextCallback: invalidTextCallback,
  composedNameCallback: composedNameCallback,
  propsMatchState: () => {},
  invalidVsiVolumeCallback: invalidCallback,
  invalidVsiVolumeTextCallback: invalidTextCallback,
  vsiVolumeProps: {
    onSave: () => {},
    onDelete: () => {},
    onSubmit: () => {},
    disableSave: () => {},
  },
};

const VsiFormStory = () => {
  return <VsiForm {...formProps} />;
};

const VsiFormModalStory = () => {
  return (
    <IcseModal
      heading={"VSI Modal"}
      open={true}
      primaryButtonText={"Create"}
      onRequestSubmit={() => {}}
      onRequestClose={() => {}}
    >
      <VsiForm {...formProps} isModal={true} />
    </IcseModal>
  );
};

export const Default = VsiFormStory.bind({});
export const Modal = VsiFormModalStory.bind({});
