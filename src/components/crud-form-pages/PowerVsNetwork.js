import React from "react";
import { PowerVsNetworkForm } from "../forms/power-vs";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const PowerVsNetwork = (props) => {
  return props.isModal ? (
    ""
  ) : (
    <IcseFormTemplate
      name="Network Interfaces"
      subHeading
      addText="Create a Network Interface"
      arrayData={props.networks}
      innerForm={PowerVsNetworkForm}
      disableSave={props.disableSave}
      propsMatchState={props.propsMatchState}
      onDelete={props.onNetworkDelete}
      onSave={props.onNetworkSave}
      onSubmit={props.onNetworkSubmit}
      innerFormProps={{
        craig: props.craig,
        isModal: props.isModal,
        invalidNetworkNameCallback: props.invalidNetworkNameCallback,
        invalidNetworkNameCallbackText: props.invalidNetworkNameCallbackText,
        invalidCidrCallback: props.invalidCidrCallback,
        invalidCidrCallbackText: props.invalidCidrCallbackText,
        invalidDnsCallback: props.invalidDnsCallback,
        invalidDnsCallbackText: props.invalidDnsCallbackText,
        arrayParentName: props.workspace,
      }}
      hideAbout
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "network",
        disableSave: props.disableSave,
        type: "formInSubForm",
      }}
    />
  );
};

PowerVsNetwork.defaultProps = {
  isModal: false,
};

PowerVsNetwork.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  workspace: PropTypes.string.isRequired,
};
