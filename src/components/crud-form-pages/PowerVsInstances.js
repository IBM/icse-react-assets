import React from "react";
import { PowerVsInstanceForm } from "../forms/power-vs";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const PowerVsInstances = (props) => {
  return (
    <IcseFormTemplate
      name="Power VS Instances"
      addText="Create an Instance"
      docs={props.docs}
      arrayData={props.power_instances}
      innerForm={PowerVsInstanceForm}
      disableSave={props.disableSave}
      propsMatchState={props.propsMatchState}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      onDelete={props.onDelete}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        power: props.power,
        invalidIpCallback: props.invalidIpCallback,
        invalidPiProcessorsCallback: props.invalidPiProcessorsCallback,
        invalidPiProcessorsTextCallback: props.invalidPiProcessorsTextCallback,
        invalidPiMemoryCallback: props.invalidPiMemoryCallback,
        invalidPiMemoryTextCallback: props.invalidPiMemoryTextCallback,
        storage_pool_map: props.storage_pool_map,
        power_instances: props.power_instances,
        power_volumes: props.power_volumes,
        storageChangesDisabledCallback: props.storageChangesDisabledCallback,
      }}
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "power_instances",
        disableSave: props.disableSave,
      }}
    />
  );
};

PowerVsInstances.propTypes = {
  power_instances: PropTypes.arrayOf(PropTypes.shape).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidIpCallback: PropTypes.func.isRequired,
  invalidPiProcessorsCallback: PropTypes.func.isRequired,
  invalidPiProcessorsTextCallback: PropTypes.func.isRequired,
  invalidPiMemoryCallback: PropTypes.func.isRequired,
  invalidPiMemoryTextCallback: PropTypes.func.isRequired,
  docs: PropTypes.func.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  forceOpen: PropTypes.func.isRequired,
  storageChangesDisabledCallback: PropTypes.func.isRequired,
};
