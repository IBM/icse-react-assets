import { AppIdKeyForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(componentProps, stateData) {
  return (
    !validName(stateData.key_name) ||
    contains(
      componentProps.icse.store.configDotJson.appid.keys,
      stateData.key_name
    )
  );
}

function invalidTextCallback(componentProps, stateData) {
  return contains(
    componentProps.icse.store.configDotJson.appid.keys,
    stateData.key_name
  )
    ? `Key name ${stateData.key_name} already in use.`
    : `Invalid Key Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]`;
}

export const AppIdKeyFormExample = () => {
  return (
    <AppIdKeyForm
      icse={{ store: { configDotJson: { appid: { keys: ["foo"] } } } }}
      data={{ key_name: "test-key" }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
