import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import AccessGroupForm from "../forms/access-groups/AccessGroupForm";

export const AccessGroups = (props) => {
  return (
    <IcseFormTemplate
      name="Access Groups"
      addText="Create Access Groups"
      docs={props.docs}
      innerForm={AccessGroupForm}
      arrayData={props.access_groups}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      forceOpen={props.forceOpen}
      propsMatchState={props.propsMatchState}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
        invalidPolicyCallback: props.invalidPolicyCallback,
        invalidPolicyTextCallback: props.invalidDynamicPolicyTextCallback,
        policyHelperTextCallback: props.policyHelperTextCallback,
        policyProps: {
          onSave: props.onPolicySave,
          onDelete: props.onPolicyDelete,
          onSubmit: props.onPolicySubmit,
          disableSave: props.disableSave,
          craig: props.craig,
          resourceGroups: props.resourceGroups,
        },
        invalidDynamicPolicyCallback: props.invalidDynamicPolicyCallback,
        invalidDynamicPolicyTextCallback:
          props.invalidDynamicPolicyTextCallback,
        dynamicPolicyHelperTextCallback: props.dynamicPolicyHelperTextCallback,
        invalidIdentityProviderCallback: props.invalidIdentityProviderCallback,
        dynamicPolicyProps: {
          onSave: props.onDynamicPolicySave,
          onDelete: props.onDynamicPolicyDelete,
          onSubmit: props.onDynamicPolicySubmit,
          disableSave: props.disableSave,
          craig: props.craig,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "access_groups",
        hide: true,
        hideName: true,
      }}
    />
  );
};

AccessGroups.propTypes = {
  docs: PropTypes.func.isRequired,
  access_groups: PropTypes.array.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidPolicyCallback: PropTypes.func.isRequired,
  invalidPolicyTextCallback: PropTypes.func.isRequired,
  policyHelperTextCallback: PropTypes.func.isRequired,
  onPolicyDelete: PropTypes.func.isRequired,
  onPolicySave: PropTypes.func.isRequired,
  onPolicySubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidDynamicPolicyCallback: PropTypes.func.isRequired,
  invalidDynamicPolicyTextCallback: PropTypes.func.isRequired,
  dynamicPolicyHelperTextCallback: PropTypes.func.isRequired,
  invalidIdentityProviderCallback: PropTypes.func.isRequired,
  onDynamicPolicyDelete: PropTypes.func.isRequired,
  onDynamicPolicySave: PropTypes.func.isRequired,
  onDynamicPolicySubmit: PropTypes.func.isRequired,
};
