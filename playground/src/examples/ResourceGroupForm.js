import { ResourceGroupForm } from "icse-react-assets";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  if (stateData.name === "") return "Cannot be an empty string";
  else
    return "String must follow the regex pattern: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i";
}

function helperTextCallback(stateData, componentProps) {
  return "<prefix>-" + stateData.name;
}

export const ResourceGroupFormExample = () => {
  return (
    <ResourceGroupForm
      data={{
        name: "example-form",
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      helperTextCallback={helperTextCallback}
    />
  );
};
