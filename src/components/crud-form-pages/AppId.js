import React from "react";
import AppIdForm from "../forms/AppIdForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const AppId = (props) => {
  return (
    <IcseFormTemplate
      name="AppID"
      addText="Create an App ID Instance"
      docs={props.docs}
      innerForm={AppIdForm}
      arrayData={props.appid}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      craig={props.craig}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidKeyCallback: props.invalidKeyCallback,
        invalidKeyTextCallback: props.invalidKeyTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        encryptionKeys: props.encryptionKeys,
        keyProps: {
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
        submissionFieldName: "appid",
        hide: true,
        hideName: true,
      }}
    />
  );
};

AppId.propTypes = {
  appid: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  docs: PropTypes.func.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
};
