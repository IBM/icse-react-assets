import React from "react";

import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import VpcNetworkForm from "../forms/VpcForm";

export const Vpcs = (props) => {
  return (
    <IcseFormTemplate
      name="Virtual Private Clouds"
      addText="Create a VPC"
      docs={props.docs}
      innerForm={VpcNetworkForm}
      arrayData={props.vpcs}
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
        resourceGroups: props.resourceGroups,
        cosBuckets: props.cosBuckets,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "vpcs",
        hide: true,
        hideName: true,
      }}
    />
  );
};

Vpcs.propTypes = {
  docs: PropTypes.func.isRequired,
  vpcs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};
