import { VpnGatewayForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
  return contains(["foo", "bar"], stateData.name)
    ? `Key name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const VpnGatewayFormExample = () => {
  return (
    <VpnGatewayForm
      data={{
        name: "",
        resource_group: "",
        vpc_name: "",
        subnet_name: null,
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      vpcList={["management", "workload"]}
      subnetList={[
        "vsi-zone-1",
        "vsi-zone-2",
        "vsi-zone-3",
        "vpe-zone-1",
        "vpe-zone-2",
        "vpe-zone-3",
        "vpn-zone-1",
        "vpn-zone-2",
        "vpn-zone-3",
      ]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
