import React from "react";
import KeyManagementForm from "../forms/KeyManagementForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const KeyManagement = (props) => {
  return (
    <IcseFormTemplate
      name="Key Management"
      addText="Create a Key Management Service"
      docs={props.docs}
      innerForm={KeyManagementForm}
      arrayData={props.key_management}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      deleteDisabled={props.deleteDisabled}
      deleteDisabledMessage={"Cannot delete only key management instance"}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        selectEndpoint: props.selectEndpoint,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidKeyCallback: props.invalidKeyCallback,
        invalidKeyTextCallback: props.invalidKeyTextCallback,
        invalidRingCallback: props.invalidRingCallback,
        invalidRingText: props.invalidRingText,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        encryptionKeyProps: {
          craig: props.craig,
          onSave: props.onKeySave,
          onDelete: props.onKeyDelete,
          onSubmit: props.onKeySubmit,
          disableSave: props.disableSave,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "key_management",
        hide: true,
        hideName: true,
      }}
    ></IcseFormTemplate>
  );
};

KeyManagement.propTypes = {
  key_management: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  deleteDisabled: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  selectEndpoint: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  invalidRingCallback: PropTypes.func.isRequired,
  invalidRingText: PropTypes.string.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
};
