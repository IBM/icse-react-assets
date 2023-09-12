import React from "react";

import "./App.css";
import { PowerVsWorkspaceForm } from "icse-react-assets";
import { getObjectFromArray, splat } from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";

let images = [
  {
    imageID: "e94dc1b3-b108-4fc5-b7d5-47d3bd686b6f",
    name: "7100-05-09",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "aix",
    },
    storageType: "tier3",
  },
  {
    imageID: "1e5d7040-304c-4e95-b7a7-9cfcc3637503",
    name: "7200-05-03",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "aix",
    },
    storageType: "tier3",
  },
  {
    imageID: "7a8fade6-da82-4fbd-a841-1940d0a8362e",
    name: "7200-05-05",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      imageType: "stock",
      operatingSystem: "aix",
    },
    state: "active",
    storageType: "tier3",
  },
  {
    imageID: "e204ca07-921e-4599-a2b3-6ad81783d8d6",
    name: "7300-00-01",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "aix",
    },
    state: "active",
    storageType: "tier3",
  },
  {
    imageID: "7a8327e7-9a65-48f2-8550-da411ded21ef",
    name: "7300-01-01",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      imageType: "stock",
      operatingSystem: "aix",
    },
    storageType: "tier3",
  },
  {
    imageID: "0328462c-f33b-406f-a665-0fe33eda2f78",
    name: "CentOS-Stream-8",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "d027edbb-9834-4dbd-814a-df36d3c42f59",
    name: "IBMi-71-11-2924-6",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "80a9d362-46c9-4ba1-8945-5c7dfb1aec03",
    name: "IBMi-71-11-2984-6",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "ba73dd98-9e30-4ddb-b18e-7c1dda9280c4",
    name: "IBMi-72-09-2924-8",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "f5e3bdda-c76d-404e-b231-a2704c6f830e",
    name: "IBMi-72-09-2984-8",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "462fcb2c-e61e-4b82-a2a4-5dba68b0ddea",
    name: "IBMi-73-13-2924-1",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "2d0ee7e5-36c3-457c-897b-7e129bca275f",
    name: "IBMi-73-13-2984-1",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "64d26e0a-59ad-4f69-a1fb-b108d6b5c9cc",
    name: "IBMi-74-07-2924-1",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "05d390f0-61b9-46a2-95b8-79fce27a8e0c",
    name: "IBMi-74-07-2984-1",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "42fbebc6-38ca-45c7-82d3-7b9a751b6858",
    name: "IBMi-75-01-2924-2",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "7e20025d-9454-4852-ac17-9b385cde695e",
    name: "IBMi-75-01-2984-2",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "a65dbc60-8e98-4fc5-9602-c94a756f0018",
    name: "IBMi_COR-74-07-2",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "big-endian",
      hypervisorType: "phyp",
      operatingSystem: "ibmi",
    },
    storageType: "tier3",
  },
  {
    imageID: "33c63db1-60fa-4535-af81-cab90497b87f",
    name: "Linux-CentOS-8-3",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "ca7ae3fb-296f-4612-8621-bd3655e7860d",
    name: "RHEL8-SP4",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "3c9d68dc-c610-4090-9850-b02725cef4aa",
    name: "RHEL8-SP4-SAP",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "372e775f-ac93-4ebe-bc52-3fcf9c99f636",
    name: "RHEL8-SP4-SAP-NETWEAVER",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-netweaver-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "ea4ab5d0-2017-46a9-a1d7-f4435f8482bd",
    name: "RHEL8-SP6",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "09c610f9-ef2b-42db-94ef-b946a2dc98ea",
    name: "RHEL8-SP6-SAP",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "90573cfa-110f-488d-bf3f-0da166da4769",
    name: "RHEL8-SP6-SAP-NETWEAVER",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-netweaver-fls",
      operatingSystem: "rhel",
    },
    storageType: "tier3",
  },
  {
    imageID: "e4de6683-2a42-4993-b702-c8613f132d39",
    name: "SLES15-SP2-SAP",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "f8f6bd01-6cb7-4084-b7d2-bf8739c3192d",
    name: "SLES15-SP2-SAP-NETWEAVER",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-netweaver-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "6e52d19e-0cce-40ec-ac6c-336ac9009b8d",
    name: "SLES15-SP3",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "4a45428b-4520-469a-862c-c92c4943c002",
    name: "SLES15-SP3-SAP",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "3fcfa24b-f6ea-4a46-a2f8-5afec46a2a51",
    name: "SLES15-SP3-SAP-NETWEAVER",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-netweaver-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "58c4ca14-67d7-41a9-9ccb-b48e8dd8bee5",
    name: "SLES15-SP4",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "3d9ff8ff-c228-4b78-8e17-f59ba56ef586",
    name: "SLES15-SP4-SAP",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
  {
    imageID: "7412c3db-500e-4c2b-b503-5809ea764fdb",
    name: "SLES15-SP4-SAP-NETWEAVER",
    specifications: {
      architecture: "ppc64",
      containerFormat: "bare",
      diskFormat: "raw",
      endianness: "little-endian",
      hypervisorType: "phyp",
      imageType: "stock-sap-netweaver-fls",
      operatingSystem: "sles",
    },
    storageType: "tier3",
  },
];

const App = () => {
  return (
    <div style={{ maxWidth: "50vw" }}>
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
        imageList={images}
        data={{
          name: "frog",
          resource_group: "dev-2",
          zone: "az-1",
          imageNames: ["SLES15-SP4-SAP-NETWEAVER"],
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
        disableAttachmentSave={() => {
          return true;
        }}
      />
    </div>
  );
};
export default App;
