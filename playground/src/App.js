import React from "react";

import "./App.css";
import { PowerVsWorkspaceForm } from "icse-react-assets";
import { getObjectFromArray, splat } from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";

const App = () => {
  return (
    <PowerVsWorkspaceForm
      invalidCallback={() => {
        return true;
      }}
      invalidTextCallback={() => {
        return "oops";
      }}
      helperTextCallback={() => {
        return "help";
      }}
      data={{
        name: "frog",
        resource_group: "dev-2",
        zone: "az-1",
        ssh_keys: [
          {
            workspace: "example",
            name: "keyname",
            zone: "dal10",
          },
        ],
        network: [
          {
            workspace: "example",
            name: "dev-nw",
            pi_cidr: "1.2.3.4/5",
            pi_dns: ["127.0.0.1"],
            pi_network_type: "vlan",
            pi_network_jumbo: true,
            zone: "dal10",
          },
        ],
        cloud_connections: [
          {
            name: "dev-connection",
            workspace: "example",
            pi_cloud_connection_speed: "50",
            pi_cloud_connection_global_routing: false,
            pi_cloud_connection_metered: false,
            pi_cloud_connection_transit_enabled: true,
            transit_gateways: ["tgw", "tgw2"],
            zone: "dal10",
          },
        ],
        attachments: [
          {
            connections: ["dev-connection"],
            workspace: "example",
            network: "dev-nw",
            zone: "dal10",
          },
        ],
      }}
      resourceGroups={["dev-1", "dev-2"]}
      zones={["az-1", "az-2"]}
      disableSave={() => {
        return true;
      }}
      propsMatchState={() => {
        return true;
      }}
      onNetworkDelete={() => {}}
      onNetworkSave={() => {}}
      onNetworkSubmit={() => {}}
      craig={{}}
      invalidNetworkNameCallbackText={() => {
        return "uh oh";
      }}
      invalidCidrCallbackText={() => {
        return "uh oh";
      }}
      invalidDnsCallbackText={() => {
        return "uh oh";
      }}
      invalidNetworkNameCallback={() => {
        return true;
      }}
      invalidCidrCallback={() => {
        return true;
      }}
      invalidDnsCallback={() => {
        return true;
      }}
      onConnectionDelete={() => {}}
      onConnectionSave={() => {}}
      onConnectionSubmit={() => {}}
      invalidConnectionNameCallback={() => {
        return true;
      }}
      invalidConnectionNameTextCallback={() => {
        return "uh oh";
      }}
      transitGatewayList={["tgw", "tgw-2"]}
      onAttachmentSave={() => {}}
      onSshKeyDelete={() => {}}
      onSshKeySave={() => {}}
      onSshKeySubmit={() => {}}
      forceOpen={() => {
        return false;
      }}
      invalidSshKeyCallback={() => {
        return true;
      }}
      invalidSshKeyCallbackText={() => {
        return "uh oh";
      }}
      invalidKeyCallback={() => {
        return false;
      }}
    />
  );
};
export default App;
