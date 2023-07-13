import React from "react";
import ResourceGroupForm from "../forms/ResourceGroupForm";
import AppIdForm from "../forms/AppIdForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const AppId = (props) => {
  return (
    <IcseFormTemplate
      name="App Id"
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
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        helperTextCallback: props.helperTextCallback,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "appID",
        hide: true,
        hideName: true,
      }}
    />
  );
};

AppId.propTypes = {
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  docs: PropTypes.func,
};
