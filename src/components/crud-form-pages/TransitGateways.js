import React from "react";
import TransitGatewayForm from "../forms/TransitGatewayForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const TransitGateways = (props) => {
  return (
    <IcseFormTemplate
      name="Transit Gateways"
      addText="Create a Transit Gateway"
      docs={props.docs}
      innerForm={TransitGatewayForm}
      arrayData={props.transit_gateways}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        vpcList: props.vpcList,
        readOnlyName: false,
        invalidCrns: props.invalidCrns,
        invalidCrnText: props.invalidCrnText,
        resourceGroups: props.resourceGroups,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "transit_gateways",
        hide: true,
        hideName: true,
      }}
    />
  );
};

TransitGateways.propTypes = {
  docs: PropTypes.func.isRequired,
  transit_gateways: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};
