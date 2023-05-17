import React from "react";
import { contains, isNullOrEmptyString } from "lazy-z";
import { DnsRecordForm } from "icse-react-assets";

export default {
  component: DnsRecordForm,
  title: "Components/Forms/DNS/DnsRecordForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: true },
      control: "none",
    },
    "data.name": {
      description: "A string value for the name of the DNS Record",
      control: "none",
      type: { required: false }, // required prop or not
    },
    "data.dns_zone": {
      description: "A string value for the DNS zone",
      control: "none",
      type: { required: false },
    },
    "data.type": {
      description: "A string value for DNS record type",
      control: "none",
      type: { required: false },
    },
    "data.rdata": {
      description: "A string value for DNS record resource data",
      control: "none",
      type: { required: false },
    },
    "data.ttl": {
      description: "A number value for DNS record time to live (ttl)",
      control: "none",
      type: { required: false },
    },
    "data.protocol": {
      description: "A string value for DNS record protocol",
      control: "none",
      type: { required: false },
    },
    "data.priority": {
      description: "A number value for DNS record priority",
      control: "none",
      type: { required: false },
    },
    "data.service": {
      description: "A string value for DNS record service",
      control: "none",
      type: { required: false },
    },
    "data.weight": {
      description: "A number value for DNS record weight",
      control: "none",
      type: { required: false },
    },
    "data.preference": {
      description: "A number value for DNS record preference",
      control: "none",
      type: { required: false },
    },
    invalidCallback: {
      description:
        "A function to determine if the value supplied is invalid and returns a single boolean",
      type: { required: true },
      control: "none",
    },
    invalidTextCallback: {
      description:
        "A function to determine the invalid text displayed to the user and returns the string to display",
      type: { required: true },
      control: "none",
    },
    helperTextCallback: {
      description:
        "A function to display helperText for the specified DNS record name",
      type: { required: true },
      control: "none",
    },
    dnsZones: {
      description: "An array (string) of DNS zones",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "DnsRecordForm is a form component that provides functionality for creating DNS records.",
      },
    },
  },
};

const DnsRecordFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/s;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function helperTextCallback(stateData, componentProps) {
    return "<prefix>-" + stateData.name;
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Cluster name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidRdata(stateData, componentProps) {
    return isNullOrEmptyString(stateData.rdata);
  }

  function invalidRdataText(stateData, componentProps) {
    return "Resource Data text callback";
  }

  return (
    <DnsRecordForm
      data={{
        name: "foo-dns-name",
        dns_zone: "zone1",
        type: "A",
        rdata: "fake resource data",
        ttl: 300,
        port: 8080,
        protocol: "TCP",
        priority: 10,
        service: "_fake-service",
        weight: 10,
        preference: 15,
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={helperTextCallback}
      invalidRdata={invalidRdata}
      invalidRdataText={invalidRdataText}
      dnsZones={["zone1", "zone2", "zone3"]}
    />
  );
};

export const Default = DnsRecordFormStory.bind({});
