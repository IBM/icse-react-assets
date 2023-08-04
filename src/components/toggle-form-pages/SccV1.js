import PropTypes from "prop-types";
import React from "react";
import { SccForm, ToggleForm } from "../..";

export const SccV1 = (props) => {
  return (
    <ToggleForm
      name="Security and Compliance Center V1"
      about={props.docs}
      propsMatchState={props.propsMatchState}
      disableSave={props.disableSave}
      innerForm={SccForm}
      hideName
      noDeleteButton={props.noDeleteButton}
      onDelete={props.onDelete}
      useAddButton={props.useAddButton}
      tabPanel={{
        name: "Security and Compliance Center V1",
      }}
      hide
      onShowToggle={() => {}}
      submissionFieldName="scc"
      onSave={props.onSave}
      innerFormProps={{
        craig: props.craig,
        data: props.data,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
      }}
    />
  );
};

SccV1.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}).isRequired,
  onSave: PropTypes.func.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  noDeleteButton: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
