import { SecretsManagerForm } from "icse-react-assets";

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

export const SecretsManagerExample = () => {
  return (
    <SecretsManagerForm
      data={{
        name: "Example",
        resource_group: "default",
        kms_key_name: "key1",
      }}
      resourceGroups={["default_group", "foo", "bar"]}
      encryptionKeys={["default_key", "foo"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
