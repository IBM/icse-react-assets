import { VsiForm } from "icse-react-assets";
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
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const VsiFormExample = () => {
  let resourceGroupList = ["rg1", "rg2", "rg3"];
  let vpcList = ["vpc1", "vpc2"];
  let subnetList = ["sub1", "sub2"];
  let sshKeyList = ["key1", "key2", "key3"];
  let encryptionKeyList = ["ekey1", "ekey2", "ekey3"];

  return (
    <VsiForm
      data={{
        name: "vsi1",
        ssh_keys: sshKeyList,
        subnet_names: subnetList,
        enable_floating_ip: true,
        vpc_name: vpcList[0],
        resource_group: resourceGroupList[0],
        boot_volume_encryption_key_name: encryptionKeyList[0],
        vsi_per_subnet: "2",
      }}
      isModal={false}
      isTeleport={false}
      resourceGroupList={resourceGroupList}
      vpcList={vpcList}
      subnetList={subnetList}
      sshKeyList={sshKeyList}
      encryptionKeyList={encryptionKeyList}
      apiEndpointImages={"/mock/api/images"}
      apiEndpointFlavors={"/mock/api/flavors"}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
