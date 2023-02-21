import { SubnetForm } from "icse-react-assets";

function disableSaveCallback(stateData, componentProps) {
  return stateData.acl_name === "";
}

function shouldDisableGatewayToggle(stateData, componentProps) {
  return stateData.name.replace(/[^]*(?=\d$)/g, "") === 1;
}

function componentDidUpdateCallback(stateData, componentProps) {
  if (stateData.name !== componentProps.name) {
    // add logic here to force parent component to update state
    // when subnet form is a child component
  }
}

export const SubnetFormExample = () => {
  return (
    <SubnetForm
      vpc_name="example"
      data={{
        name: "example-subnet-zone-1",
        cidr: "10.10.10.10/24",
        public_gateway: false,
        acl_name: "example-acl",
      }}
      disableSaveCallback={disableSaveCallback}
      networkAcls={["example-acl", "example-acl-2"]}
      shouldDisableGatewayToggle={shouldDisableGatewayToggle}
      componentDidUpdateCallback={componentDidUpdateCallback}
    />
  );
};
