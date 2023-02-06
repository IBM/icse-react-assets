import { AtrackerForm, ToggleForm } from "icse-react-assets";
import { deepEqual } from "lazy-z";
import React from "react";

function onSave(stateData, componentProps) {
  console.log(stateData, componentProps);
}

function propsMatchState(stateData, componentProps) {
  return deepEqual(stateData, componentProps?.data); // dummy example, will not work as stateData is not saved
}

function disableSave(stateData, componentProps) {
  return propsMatchState(stateData, componentProps); // dummy example: disable save if no changes - returns false in this example
}

export const ToggleFormExample = () => {
  return (
    <ToggleForm
      name={"icse-atracker"}
      hideName
      submissionFieldName="atracker"
      innerForm={AtrackerForm}
      innerFormProps={{
        prefix: "icse",
        data: {
          resource_group: "default",
          collector_bucket_name: "default_bucket",
          atracker_key: "default_key",
          add_route: false,
        },
        resourceGroups: ["default", "foo", "bar"],
        cosKeys: ["default_key", "foo", "bar"],
        cosBuckets: ["default_bucket", "foo", "bar"],
      }}
      onSave={onSave}
      propsMatchState={propsMatchState}
      disableSave={disableSave}
      noDeleteButton
      tabPanel={{
        name: "Activity Tracker",
      }}
    />
  );
};
