import React from "react";
import SecretsManagerForm from "../forms/SecretsManagerForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const SecretsManager = (props) => {
  console.log(props);
  return (
    <IcseFormTemplate
      name="Secrets Manager"
      addText="Create a Secrets Manager"
      docs={props.docs}
      innerForm={SecretsManagerForm}
      arrayData={props.secrets_managers}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        encryptionKeys: props.encryptionKeys,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        secrets: props.secrets,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "secrets_manager",
        hide: true,
        hideName: true,
      }}
    ></IcseFormTemplate>
  );
};

SecretsManager.propTypes = {
  secrets_managers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  secrets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
};
