import { ObjectStorageForm } from "icse-react-assets";
import { ObjectStorageBucketFormExample } from "./ObjectStorageBucketForm";
import { ObjectStorageKeyFormExample } from "./ObjectStorageKeyForm";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  return contains(["foo", "bar"], stateData.name)
    ? `Name ${stateData.name} already in use.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function composedNameCallback(stateData, componentProps) {
  return `${stateData.name}-<random suffix>`;
}

export const ObjectStorageFormExample = () => {
  return (
    <ObjectStorageForm
      data={{
        name: "cos",
        use_data: false,
        resource_group: "rg1",
        random_suffix: true,
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      composedNameCallback={composedNameCallback}
      resourceGroups={["rg1", "rg2", "rg3"]}
      subForms={[
        <ObjectStorageKeyFormExample />,
        <ObjectStorageBucketFormExample />,
      ]}
    />
  );
};
