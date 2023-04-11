import React from "react";
import { SubnetTierForm } from "icse-react-assets";
import { contains } from "lazy-z";
import "./App.css";

const SubnetTierFormStory = () => {
  function invalidCallback(stateData, componentProps) {
    return false;
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Subnet tier name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function shouldDisableSave(stateData, componentProps) {
    return true;
  }

  function disableSubnetSaveCallback(stateData, componentProps) {
    return true;
  }

  function propsMatchState(stateData, componentProps) {
    return true;
  }

  function subnetListCallback(stateData, componentProps) {
    let tierSubnets = [
      {
        name: stateData.name + "-subnet-zone-1",
        cidr: "10.10.10.10/24",
        public_gateway: stateData.addPublicGateway,
        network_acl: stateData.networkAcl,
      },
      {
        name: stateData.name + "-subnet-zone-2",
        cidr: "10.20.10.10/24",
        public_gateway: stateData.addPublicGateway,
        network_acl: stateData.networkAcl,
      },
      {
        name: stateData.name + "-subnet-zone-3",
        cidr: "10.30.10.10/24",
        public_gateway: stateData.addPublicGateway,
        network_acl: stateData.networkAcl,
      },
    ];
    while (tierSubnets.length > stateData.zones) {
      tierSubnets.pop();
    }
    return tierSubnets;
  }

  return (
    <SubnetTierForm
      vpc_name="example-vpc"
      data={{
        hide: false,
        name: "vsi",
        zones: 3,
        networkAcl: "example-acl-1",
        addPublicGateway: false,
      }}
      shouldDisableSave={shouldDisableSave}
      disableSubnetSaveCallback={disableSubnetSaveCallback}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      networkAcls={["example-acl-1", "example-acl-2"]}
      enabledPublicGateways={[1, 2, 3]}
      subnetListCallback={subnetListCallback}
      propsMatchState={propsMatchState}
    />
  );
};

function App() {
  return <SubnetTierFormStory />;
}

export default App;
