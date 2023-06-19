import React from "react";
import { EventStreamsForm, IcseModal } from "icse-react-assets";

export default {
  component: EventStreamsForm,
  title: "Components/Forms/EventStreamsForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: true },
      control: "none",
    },
    ["data.name"]: {
      description:
        "A string specifying the name of the secrets manager instance",
      control: "none",
      type: { required: true },
    },
    ["data.resource_group"]: {
      description:
        "A string specifying the name of the resource group selected",
      control: "none",
      type: { required: false },
    },
    ["data.plan"]: {
      description: "A string value that specifies the Event Streams plan type",
      control: "none",
      type: { required: false },
      table: { defaultValue: { summary: "Lite" } },
    },
    ["data.throughput"]: {
      description: "A string value that specifies the max throughput",
      control: "none",
      type: { required: false },
    },
    ["data.storage_size"]: {
      description: "A string value that specifies the storage size amount",
      control: "none",
      type: { required: false },
    },
    ["data.private_ip_allowlist"]: {
      description:
        "A string value that specifies a comma separated list of ip addresses",
      control: "none",
      type: { required: false },
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true },
      control: "none",
    },
    invalidCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
};

const EventStreamsFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <EventStreamsForm
      resourceGroups={["test", "foo", "bar"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

const EventStreamsModalStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return !validName(stateData.name)
      ? `Name ${stateData.name} is invalid.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  return (
    <IcseModal
      heading={"Event Streams Modal"}
      open={true}
      primaryButtonText={"Create"}
      onRequestSubmit={() => {}}
      onRequestClose={() => {}}
    >
      <EventStreamsForm
        resourceGroups={["test", "foo", "bar"]}
        invalidCallback={invalidCallback}
        invalidTextCallback={invalidTextCallback}
        isModal
      />
    </IcseModal>
  );
};

export const Default = EventStreamsFormStory.bind({});
export const Modal = EventStreamsModalStory.bind({});
