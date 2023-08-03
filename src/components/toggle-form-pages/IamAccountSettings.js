import PropTypes from "prop-types";
import React from "react";
import { IamAccountSettingsForm, ToggleForm } from "../..";

export const IamAccountSettings = (props) => {
  return (
    <ToggleForm
      name="IAM Account Settings"
      about={props.docs}
      propsMatchState={props.propsMatchState}
      disableSave={props.disableSave}
      innerForm={IamAccountSettingsForm}
      hideName
      tabPanel={{
        name: "IAM Account Settings",
      }}
      hide
      submissionFieldName="iam_account_settings"
      noDeleteButton={props.noDeleteButton}
      onSave={props.onSave}
      onDelete={props.onDelete}
      useAddButton={props.useAddButton}
      onShowToggle={() => {}}
      innerFormProps={{
        craig: props.craig,
        data: props.data,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
      }}
    />
  );
};

IamAccountSettings.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  noDeleteButton: PropTypes.bool.isRequired,
};
