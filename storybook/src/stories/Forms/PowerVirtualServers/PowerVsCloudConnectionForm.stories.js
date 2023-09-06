import {PowerVsCloudConnectionForm} from "icse-react-assets";
import React from "react";
import {contains} from "lazy-z";

export default {
    component: PowerVsCloudConnectionForm,
    title: "Components/Forms/PowerVs/PowerVsCloudConnectionForm",
    argTypes: {
        data: {
            summary: "An object that contains the data for the form.",
            type: { required: false }, // required prop or not
            control: "none",
        },
        ["data.name"]: {
            description: "A string value for the name of the cloud connection",
            type: { required: true },
            control: "none",
        },
        ["data.pi_cloud_connection_speed"]: {
            description: "A number indicating the connection speed",
            type: { required: true },
            control: "none",
        },
        ["data.pi_cloud_connection_global_routing"]: {
            description: "A boolean indicating whether global routing is enabled",
            type: { required: true },
            control: "none",
        },
        ["data.pi_cloud_connection_metered"]: {
            description: "A boolean indicating whether metered connection is enabled",
            type: { required: true },
            control: "none",
        },
        ["data.pi_cloud_connection_transit_enabled"]: {
            description: "A boolean determining whether to enable transit gateways",
            type: { required: true },
            control: "none",
        },
        ["data.transit_gateways"]: {
            description: "A list of string values of selected transit gateways",
            type: { required: false },
            control: "none",
        },
        transitGatewayList: {
            description: "A list of string values of available transit gateways",
            type: { required: true },
            control: "none",
        },
        invalidCallback: {
            description: "Function that determines the invalid state for the `name` field",
            type: { required: true },
            control: "none",
        },
        invalidTextCallback: {
            description: "Function that determines the invalid text for the `name` field",
            type: { required: true },
            control: "none",
        },
    },
    parameters: {
        docs: {
            description: {
                component: 
                    "PowerVsCloudConnectionForm allows users to create cloud connections for Power Virtual Servers"
            },
        },
    },
};

const PowerVsCloudConnectionFormStory = () => {
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
        <PowerVsCloudConnectionForm
            data={{
                name: "frog",
                pi_cloud_connection_speed: 50,
                pi_cloud_connection_global_routing: true,
                pi_cloud_connection_metered: true,
                pi_cloud_connection_transit_enabled: true,
                transit_gateways: ["transit_gateway_1", "transit_gateway_3"],
            }}
            transitGatewayList={["transit_gateway_1", "transit_gateway_2", "transit_gateway_3"]}
            invalidCallback={invalidCallback}
            invalidTextCallback={invalidTextCallback}
        />
    );
};

export const Default = PowerVsCloudConnectionFormStory.bind({});