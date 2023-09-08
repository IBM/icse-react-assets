import React from "react";
import { PowerVsWorkspaceForm } from "../..";
import { IcseFormTemplate } from "../..";
import PropTypes from "prop-types";

export const PowerVsWorkspace = (props) => {
  return (
    <IcseFormTemplate
      name="Power VS Workspaces"
      addText="Create a Workspace"
      innerForm={PowerVsWorkspaceForm}
      arrayData={props.power}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      docs={props.docs}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        propsMatchState: props.propsMatchState,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        helperTextCallback: props.helperTextCallback,
        resourceGroups: props.resourceGroups,
        zones: props.zones,
        onNetworkDelete: props.onNetworkDelete,
        onNetworkSave: props.onNetworkSave,
        onNetworkSubmit: props.onNetworkSubmit,
        invalidNetworkNameCallback: props.invalidNetworkNameCallback,
        invalidNetworkNameCallbackText: props.invalidNetworkNameCallbackText,
        invalidCidrCallback: props.invalidCidrCallback,
        invalidCidrCallbackText: props.invalidCidrCallbackText,
        invalidDnsCallback: props.invalidDnsCallback,
        invalidDnsCallbackText: props.invalidDnsCallbackText,
        onConnectionDelete: props.onConnectionDelete,
        onConnectionSave: props.onConnectionSave,
        onConnectionSubmit: props.onConnectionSubmit,
        onAttachmentSave: props.onAttachmentSave,
        invalidConnectionNameCallback: props.invalidConnectionNameCallback,
        invalidConnectionNameTextCallback:
          props.invalidConnectionNameTextCallback,
        transitGatewayList: props.transitGatewayList,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "power",
        hideName: true,
      }}
    />
  );
};

PowerVsWorkspace.propTypes = {
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  docs: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  zones: PropTypes.arrayOf(PropTypes.string).isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
