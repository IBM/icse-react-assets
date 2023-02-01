import { KeyManagementForm } from "icse-react-assets";
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

export const KeyManagementFormExample = () => {
  return (
    <KeyManagementForm
      data={{
        use_hs_crypto: false,
        use_data: false,
        name: "test-key-protect",
        resource_group: "service-rg",
        resourceGroups: ["service-rg", "management-rg", "workload-rg"],
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
