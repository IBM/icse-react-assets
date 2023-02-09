import { TransitGatewayForm } from "icse-react-assets";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name);
}

function invalidTextCallback(stateData) {
  return !validName(stateData.name)
    ? `Name ${stateData.name} is invalid.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const TransitGatewayFormExample = () => {
  return (
    <TransitGatewayForm
      data={{
        enable_transit_gateway: true,
        transit_gateway_connections: ["management"],
        transit_gateway_resource_group: "service-rg",
        name: "transit-gateway",
      }}
      readOnlyName={true}
      vpcList={["management", "workload"]}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
