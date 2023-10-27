import { ClassicVlanForm } from "icse-react-assets";
import { contains } from "lazy-z";
import React from "react";

export default {
  component: ClassicVlanForm,
  title: "Components/Forms/ClassicVlanForm",
  argTypes: {
    data: {
      summary: "An object that contains the data for the form.",
      type: { required: true }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value for the name of the VLAN",
      type: { required: true },
      control: "none",
    },
    ["data.type"]: {
      description: "A string value for the Vlan type, public or private",
      type: { required: true },
      control: "none",
    },
    ["data.datacenter"]: {
      description: "A string value for the VLAN datacenter",
      type: { required: true },
      control: "none",
    },
    vlanTypes: {
      description:
        "An array of string values denoting the available VLAN types",
      type: { required: true },
      control: "none",
    },
    datacenters: {
      description:
        "An array of string values denoting the available datacenters",
      type: { required: true },
      control: "none",
    },
    invalidCallback: {
      description:
        "Function that determines the invalid state for the `name` field",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "Function that determines the invalid text for the `name` field",
      type: { required: true },
      control: "none",
    },
  },
};

const ClassicVlanFormStory = () => {
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
    <ClassicVlanForm
      data={{
        name: "frog",
        type: "public",
        datacenter: "dal09",
      }}
      vlanTypes={["public", "private"]}
      datacenters={["dal09", "dal10", "dal12", "dal13"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = ClassicVlanFormStory.bind({});
