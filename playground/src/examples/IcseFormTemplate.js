import { IcseFormTemplate } from "icse-react-assets";
import { deepEqual } from "lazy-z";
import React from "react";
import { SshKeyFormExample } from "./SshKeyForm";

// dummy function for onSave, onDelete, onSubmit
function onX(stateData, componentProps) {
  console.log(stateData, componentProps);
}

function propsMatchState(stateData, componentProps) {
  return deepEqual(stateData, componentProps?.data); // dummy example, will not work as stateData is not saved
}

function disableSave(stateData, componentProps) {
  return propsMatchState(stateData, componentProps); // dummy example: disable save if no changes - returns false in this example
}

export const IcseFormTemplateExample = () => {
  return (
    <IcseFormTemplate
      name="SSH Keys"
      hideName
      arrayData={[
        {
          name: "SshKeyFormTest",
          resource_group: "rg1",
          public_key: "test-key",
        },
      ]}
      innerForm={SshKeyFormExample}
      innerFormProps={{
        resourceGroups: ["rg1", "rg2", "rg3"],
        disableSave: disableSave,
      }}
      toggleFormProps={{
        propsMatchState: propsMatchState,
        disableSave: disableSave,
        hideName: true,
        name: "SshKeyFormTest",
        submissionFieldName: "ssh_keys",
      }}
      onSave={onX}
      onSubmit={onX}
      onDelete={onX}
      addText="Create an SSH Key"
    />
  );
};
