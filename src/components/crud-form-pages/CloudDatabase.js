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
      arrayData={props.icd}
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
        memoryMin: props.memoryMin,
        memoryMax: props.memoryMax,
        diskMin: props.diskMin,
        diskMax: props.diskMax,
        cpuMin: props.cpuMin,
        cpuMax: props.cpuMax,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "icd",
        hide: true,
        hideName: true,
      }}
    />
  );
};

CloudDatabase.propTypes = {
  docs: PropTypes.func.isRequired,
  icd: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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