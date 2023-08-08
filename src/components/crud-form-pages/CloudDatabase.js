import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import CloudDatabaseForm from "../forms/CloudDatabaseForm";
import PropTypes from "prop-types";

export const CloudDatabase = (props) => {
  return (
    <IcseFormTemplate
      name="Cloud Databases"
      addText="Create a Cloud Database"
      docs={props.docs}
      innerForm={CloudDatabaseForm}
      arrayData={props.databases}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidCpuCallback: props.invalidCpuCallback,
        invalidCpuTextCallback: props.invalidCpuTextCallback,
        resourceGroups: props.resourceGroups,
        encryptionKeys: props.encryptionKeys,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "databases",
        hide: true,
        hideName: true,
      }}
    />
  );
};

CloudDatabase.propTypes = {
  docs: PropTypes.func.isRequired,
  databases: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCpuCallback: PropTypes.func.isRequired,
  invalidCpuTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};