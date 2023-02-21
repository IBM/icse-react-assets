import { VsiForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

<<<<<<< HEAD
<<<<<<< HEAD
function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
=======
function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
>>>>>>> a8d076e (merge)
=======
function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
  return contains(["foo", "bar"], stateData.name)
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const VsiFormExample = () => {
  return (
    <VsiForm
      data={{
<<<<<<< HEAD
        name: "vsi",
      }}
=======
        name: "vsi1",
      }}
      isModal={false}
      isTeleport={false}
>>>>>>> a8d076e (merge)
      resourceGroupList={["rg1", "rg2", "rg3"]}
      vpcList={["vpc1", "vpc2"]}
      subnetList={["sub1", "sub2"]}
      sshKeyList={["key1", "key2", "key3"]}
      encryptionKeyList={["ekey1", "ekey2", "ekey3"]}
<<<<<<< HEAD
      apiEndpointImages={"/mock/api/images"}
      apiEndpointFlavors={"/mock/api/flavors"}
=======
      imageList={["image1", "image2", "image3"]}
      flavorList={["flav1", "flav2"]}
>>>>>>> a8d076e (merge)
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
