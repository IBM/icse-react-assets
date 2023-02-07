import { SshKeyForm } from "icse-react-assets";

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

function invalidKeyCallback(str) {
  const regex = /^ssh-rsa AAAA[0-9A-Za-z+\/]+([=]{0,3}([^@]+@[^@]+))?$/g;
  return {
    invalid: str.match(regex) === null,
    invalidText: `Provide a unique SSH public key that matches ${regex} and does not exist in the IBM Cloud account in your region`,
  };
}

export const SshKeyFormExample = () => {
  return (
    <SshKeyForm
      data={{
        name: "SshKeyFormTest",
        resource_group: "rg1",
        public_key: "test-key",
      }}
      resourceGroups={["rg1", "rg2", "rg3"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      invalidKeyCallback={invalidKeyCallback}
    />
  );
};
