import { ObjectStorageBucketForm } from "icse-react-assets";
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
    ? `Bucket name ${stateData.name} already in use.`
    : `Invalid Bucket Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function composedNameCallback(stateData) {
  return `${stateData.name}-<random suffix>`;
}

export const ObjectStorageBucketFormExample = () => {
  return (
    <ObjectStorageBucketForm
      data={{
        force_delete: false,
        name: "test-bucket",
        storage_class: "Standard",
        kms_key: "key1",
      }}
      encryptionKeys={["key1", "key2"]}
      parentHasRandomSuffix={true}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      composedNameCallback={composedNameCallback}
    />
  );
};
