import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import VpeForm from "../forms/VpeForm";

export const Vpe = (props) => {
  return (
    <IcseFormTemplate
      name="Virtual Private Endpoints"
      addText="Create a VPE"
      docs={props.docs}
      arrayData={props.vpe}
      innerForm={VpeForm}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        resourceGroups: props.resourceGroups,
        subnetList: props.subnetList,
        securityGroups: props.securityGroups,
        vpcList: props.vpcList,
        secretsManagerInstances: props.secretsManagerInstances,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "virtual_private_endpoints",
        hide: true,
        hideName: true,
      }}
    />
  );
};

Vpe.propTypes = {
  docs: PropTypes.func.isRequired,
  vpe: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  secretsManagerInstances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};
