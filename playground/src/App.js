import React from "react";
import { contains } from "lazy-z";
import {
  VpcForm,
  NetworkAclForm,
  IcseFormTemplate,
  SshKeyForm,
  TransitGatewayForm,
} from "icse-react-assets";
import "./App.css";
import { FaceSatisfied } from "@carbon/icons-react";

function App() {
  return (
    <TransitGatewayForm
      data={{
        global: true,
        connections: [{ tgw: "transit-gateway", vpc: "management" }],
        resource_group: "service-rg",
        name: "transit-gateway",
      }}
      readOnlyName={true}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={() => {
        return false;
      }}
      invalidTextCallback={() => {
        return "";
      }}
    />
  );
}

export default App;
