import { ObjectStorageKeyForm } from "icse-react-assets";
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
    : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function composedNameCallback(stateData) {
  return `${stateData.name}-<random suffix>`;
}

export const ObjectStorageKeyFormExample = () => {
  return (
    <ObjectStorageKeyForm
      data={{
        name: "test-encryption-key",
        enable_hmac: false,
        role: "Reader"
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      composedNameCallback={composedNameCallback}
    />
  );
};
