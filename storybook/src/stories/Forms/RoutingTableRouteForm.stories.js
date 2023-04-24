import React from "react";
import { RoutingTableRouteForm } from "icse-react-assets";
import { contains } from "lazy-z";

export default {
  component: RoutingTableRouteForm,
  title: "Components/Forms/RoutingTableRouteForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value des",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.zone"]: {
      description: "A number for the availability zone for the route",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.destination"]: {
      description:
        "A string that describes the IP or CIDR block for the destination",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.action"]: {
      description: "A string determining the action for the route",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.next_hop"]: {
      description: "A string with the IP address for the next hop on the route",
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
  },
  parameters: {
    docs: {
      description: {
        component:
          "SccForm is a form component that provides functionality for enabling/editing an Security Compliance Center instance.",
      },
    },
    decorators: [(Story) => <div style={{ padding: "4.5rem" }}>{Story()}</div>],
  },
};

const RoutingTableRouteFormStory = () => {
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
    <RoutingTableRouteForm
      data={{
        name: "route",
        zone: 1,
        destination: "8.8.8.8",
        action: "drop",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};

export const Default = RoutingTableRouteFormStory.bind({});
