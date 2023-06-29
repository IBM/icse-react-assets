import React from "react";
import { OrderCardDataTable } from "icse-react-assets";

export default {
  component: OrderCardDataTable,
  title: "Components/Forms/NetworkRules/OrderCardDataTable",
  argTypes: {
    isSecurityGroup: {
      description:
        "Boolean value for if the rule is a security group rule. When false, the form will render for Network ACL rule configuration.",
      type: { required: true }, // required prop or not
      control: "none",
      table: { defaultValue: { summary: "false" } }, // default value
    },
    rules: {
      description: "An array of objects describing the networking rules",
      type: { required: true },
      control: "none",
      table: { defaultValue: { summary: "[]" } }, // default value
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Order Card Data Table allows for a quick glance at networking rule configuration without edit capabilities",
      },
    },
  },
};

const OrderCardDataTableAclStory = () => {
  return (
    <OrderCardDataTable
      rules={[
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-all-network-inbound",
          source: "10.0.0.0/8",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "0.0.0.0/0",
          direction: "outbound",
          name: "allow-all-outbound",
          source: "0.0.0.0/0",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
      ]}
    />
  );
};

const OrderCardDataTableSgStory = () => {
  return (
    <OrderCardDataTable
      isSecurityGroup
      rules={[
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-all-network-inbound",
          source: "10.0.0.0/8",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "0.0.0.0/0",
          direction: "outbound",
          name: "allow-all-outbound",
          source: "0.0.0.0/0",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
      ]}
    />
  );
};

export const Default = OrderCardDataTableAclStory.bind({});
export const SecurityGroup = OrderCardDataTableSgStory.bind({});
