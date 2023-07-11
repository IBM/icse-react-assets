import React from "react";
import ResourceGroupForm from "../forms/ResourceGroupForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const ResourceGroups = (props) => {
  return (
    <IcseFormTemplate
      name="Resource Groups"
      addText="Create a Resource Group"
      docs={props.docs}
      innerForm={ResourceGroupForm}
      arrayData={props.resource_groups}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      craig={props.craig}
      deleteDisabled={props.deleteDisabled}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        helperTextCallback: props.helperTextCallback,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "resource_groups",
        hideName: true,
      }}
    />
  );
};

ResourceGroups.propTypes = {
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  deleteDisabled: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  docs: PropTypes.func,
};
