import React from "react";
import { RoutingTableForm, IcseModal } from "icse-react-assets";

export default {
  component: RoutingTableForm,
  title: "Components/Forms/RoutingTableForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false }, // required prop or not
      control: "none",
    },
    ["data.name"]: {
      description: "A string value describing the name",
      control: "none",
      type: { required: true }, // required prop or not
    },
    ["data.vpc"]: {
      description: "A number for the availability zone for the route",
      control: "none",
      type: { required: false }, // required prop or not
    },
    ["data.routes"]: {
      description: "An array of routes",
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
    invalidRouteCallback: {
      description:
        "Function that determines invalid state for the `name` field for routes",
      type: { required: true }, // required prop or not
      control: "none",
    },
    invalidRouteTextCallback: {
      description:
        "Function that determines invalid text for `name` field for routes",
      type: { required: true }, // required prop or not
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "RoutingTableForm is a form component that provides functionality for enabling/editing a Routing Table instance.",
      },
    },
    decorators: [(Story) => <div style={{ padding: "4.5rem" }}>{Story()}</div>],
  },
};

const RoutingTableRouteFormStory = () => {
  return (
    <RoutingTableForm
      invalidCallback={(stateData, componentProps) => {
        return true;
      }}
      invalidTextCallback={(stateData, componentProps) => {
        return "Invalid Text";
      }}
      invalidRouteCallback={(stateData, componentProps) => {
        return true;
      }}
      invalidRouteTextCallback={(stateData, componentProps) => {
        return "Invalid Text";
      }}
      data={{
        name: "table",
        vpc: "management",
        routes: [
          {
            name: "route",
            zone: 1,
            destination: "8.8.8.8",
            action: "drop",
          },
        ],
      }}
      propsMatchState={() => {
        return false;
      }}
      isModal={false}
      vpcList={["management", "workload"]}
      routeProps={{
        disableSave: function () {
          return false;
        },
        onDelete: function () {
          return false;
        },
        onSave: function () {
          return false;
        },
        onSubmit: function () {
          return false;
        },
        propsMatchState: function () {
          return false;
        },
      }}
    />
  );
};

const RoutingTableFormModalStory = () => {
  return (
    <IcseModal
      heading="Routing Table Modal"
      open={true}
      primaryButtonText="Create"
      onRequestSubmit={() => {}}
      onRequestClose={() => {}}
    >
      <RoutingTableForm
        invalidCallback={(stateData, componentProps) => {
          return true;
        }}
        invalidTextCallback={(stateData, componentProps) => {
          return "Invalid Text";
        }}
        invalidRouteCallback={(stateData, componentProps) => {
          return true;
        }}
        invalidRouteTextCallback={(stateData, componentProps) => {
          return "Invalid Text";
        }}
        data={{
          name: "table",
          vpc: "management",
          routes: [
            {
              name: "route",
              zone: 1,
              destination: "8.8.8.8",
              action: "drop",
            },
          ],
        }}
        propsMatchState={() => {
          return false;
        }}
        isModal={true}
        vpcList={["management", "workload"]}
        routeProps={{
          disableSave: function () {
            return false;
          },
          onDelete: function () {
            return false;
          },
          onSave: function () {
            return false;
          },
          onSubmit: function () {
            return false;
          },
          propsMatchState: function () {
            return false;
          },
        }}
      />
    </IcseModal>
  );
};

export const Default = RoutingTableRouteFormStory.bind({});
export const Modal = RoutingTableFormModalStory.bind({});
