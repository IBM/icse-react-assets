import React from "react";
import { PowerVsVolumeForm } from "../..";
import { IcseFormTemplate } from "../..";
import PropTypes from "prop-types";

export const PowerVsVolume = (props) => {
  return (
    <IcseFormTemplate
      name="Power VS Storage Volumes"
      addText="Create a Volume"
      arrayData={props.power_volumes}
      innerForm={PowerVsVolumeForm}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      docs={props.docs}
      innerFormProps={{
        craig: props.craig,
        power: props.power,
        power_instances: props.power_instances,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "power_volumes",
        hideName: true,
      }}
    />
  );
};

PowerVsVolume.propTypes = {
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  docs: PropTypes.func,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default PowerVsVolume;
