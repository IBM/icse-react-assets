import React from "react";

import "./App.css";
import {
  capitalize,
  contains,
  getObjectFromArray,
  isNullOrEmptyString,
  snakeCase,
  splat,
  splatContains,
  isIpv4CidrOrAddress,
  isInRange,
} from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";
import { IcseFormGroup, IcseHeading } from "icse-react-assets";
import { IcseNameInput, IcseTextInput, IcseToggle } from "icse-react-assets";
import { IcseSelect } from "icse-react-assets";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "icse-react-assets";
import { ClassicGatewayForm } from "icse-react-assets";

const App = () => {
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
  function invalidIpCallback(ip) {
    if (isNullOrEmptyString(ip)) {
      return false;
    } else return contains(ip, "/") || !isIpv4CidrOrAddress(ip);
  }
  function invalidPiProcessorsCallback(stateData) {
    // weird is in range error with decimal numbers and is in range
    return (
      parseFloat(stateData.pi_processors) < 0.25 ||
      parseFloat(stateData.pi_processors) > 7
    );
  }
  function invalidPiMemoryCallback(stateData) {
    return !isInRange(parseFloat(stateData.pi_memory), 0, 918);
  }
  function invalidPiProcessorsTextCallback() {
    return "Must be a number between 0.25 and 7.";
  }
  function invalidPiMemoryTextCallback() {
    return "Must be a whole number less than 918.";
  }
  return (
    <div style={{ maxWidth: "66vw" }}>
      <ClassicGatewayForm
        data={{
          name: "gw",
          hostname: "gw-host",
          datacenter: "dal10",
          network_speed: "1000",
          private_network_only: false,
          tcp_monitoring: false,
          redundant_network: true,
          public_bandwidth: 5000,
          memory: 64,
          notes: "Notes",
          ipv6_enabled: false,
          package_key_name: "VIRTUAL_ROUTER_APPLIANCE_1_GPBS",
          os_key_name: "OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV",
          process_key_name: "INTEL_XEON_4210_2_20",
          private_vlan: "example-classic-private",
          public_vlan: "example-classic-public",
          ssh_key: "example-classic",
          disk_key_names: ["HARD_DRIVE_2_00_TB_SATA_2"],
          hadr: false,
        }}
        invalidCallback={() => {
          return true;
        }}
        invalidTextCallback={() => {
          return "uh oh";
        }}
        classic_vlans={[
          {
            name: "example-classic-public",
            type: "PUBLIC",
            datacenter: "dal10",
          },
          {
            name: "hidden-classic-public",
            type: "PUBLIC",
            datacenter: "dal11",
          },
          {
            name: "example-classic-private",
            type: "PRIVATE",
            datacenter: "dal10",
          },
          {
            name: "hidden-classic-private",
            type: "PRIVATE",
            datacenter: "dal11",
          },
        ]}
        composedNameCallback={() => {
          return "uh oh";
        }}
        datacenterList={["dal10", "dal11"]}
        classicSshKeyList={["example-classic"]}
        packageNameList={["VIRTUAL_ROUTER_APPLIANCE_1_GPBS"]}
        osKeyNameList={["OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV"]}
        processKeyNameList={["INTEL_XEON_4210_2_20"]}
        diskKeyNameList={["HARD_DRIVE_2_00_TB_SATA_2"]}
        invalidNetworkSpeedCallback={() => {
          return false;
        }}
        invalidNetworkSpeedTextCallback={() => {
          return "uh oh";
        }}
        invalidPublicBandwidthCallback={() => {
          return false;
        }}
        invalidPublicBandwidthTextCallback={() => {
          return "uh oh";
        }}
        invalidMemoryCallback={() => {
          return false;
        }}
        invalidMemoryTextCallback={() => {
          return "uh oh";
        }}
      />
    </div>
  );
};
export default App;
