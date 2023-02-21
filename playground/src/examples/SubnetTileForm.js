import { SubnetTileForm } from "icse-react-assets";
import { deepEqual } from "lazy-z";

function disableSaveCallback(stateData, componentProps) {
  return stateData.acl_name === "" || deepEqual(stateData, componentProps.data);
}

export const SubnetTileFormExample = () => {
  return (
    <SubnetTileForm
      vpc_name="example"
      tier="example"
      disableSaveCallback={disableSaveCallback}
      networkAcls={["example-acl", "example-acl-1"]}
      data={[
        {
          name: "example-subnet-zone-1",
          cidr: "10.10.10.10/24",
          public_gateway: false,
          acl_name: "example-acl",
        },
        {
          name: "example-subnet-zone-2",
          cidr: "10.20.10.10/24",
          public_gateway: false,
          acl_name: "example-acl",
        },
        {
          name: "example-subnet-zone-3",
          cidr: "10.30.10.10/24",
          public_gateway: false,
          acl_name: "example-acl",
        },
      ]}
      enabledPublicGateways={[1, 2]}
    />
  );
};
