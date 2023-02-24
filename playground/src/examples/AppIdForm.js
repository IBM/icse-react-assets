import { AppIdForm } from "icse-react-assets";
import { contains } from "lazy-z";

function componentDidUpdateCallback(stateData, componentProps) {
  if (stateData.name !== componentProps.name) {
    // add logic here to force parent component to update state
    // when AppID form is a child component
  }
}

function saveCallback(saveType) {
  let saveStatus = `State updated. `;
  saveType === `add`
    ? (saveStatus = saveStatus + `Key added.`)
    : saveType === `edit`
    ? (saveStatus = saveStatus + `Key edited.`)
    : (saveStatus = saveStatus + `Key deleted.`);
  console.log(saveStatus);
}

function validName(str) {
  // regex name validation that only allows alphanumerical characters and "-", string cannot end with "-"
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function shouldDisableSubmitCallback(stateData, componentProps) {
  if (stateData.open === true) {
    if (
      !validName(stateData.key_name) ||
      contains(["key1", "key2"], stateData.key_name) ||
      (Array.isArray(stateData.keys) &&
        contains(stateData.keys, stateData.key_name))
    ) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}

function invalidCallback(field, stateData, componentProps) {
  let invalid = false;
  if (
    field === "name" &&
    (!validName(stateData[field]) || contains(["foo", "bar"], stateData.name))
  ) {
    invalid = true;
  } else {
    invalid =
      !validName(stateData[field]) ||
      contains(["key1", "key2"], stateData.key_name) ||
      (Array.isArray(stateData.keys) &&
        contains(stateData.keys, stateData.key_name));
  }
  return invalid;
}

function invalidTextCallback(field, stateData, componentProps) {
  let invalidText = ``;
  if (
    contains(["foo", "bar"], stateData[field]) ||
    contains(["key1", "key2"], stateData[field]) ||
    (Array.isArray(stateData.keys) &&
      contains(stateData.keys, stateData.key_name))
  ) {
    invalidText = `Name ${stateData[field]} already in use.`;
  } else {
    invalidText = `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }
  return invalidText;
}

export const AppIdFormExample = () => {
  return (
    <AppIdForm
      data={{
        use_appid: true,
        name: "",
        resource_group: "",
        use_data: false,
        keys: [],
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      componentDidUpdateCallback={componentDidUpdateCallback}
      saveCallback={saveCallback}
      shouldDisableSubmitCallback={shouldDisableSubmitCallback}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
