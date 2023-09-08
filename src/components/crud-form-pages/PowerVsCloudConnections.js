import React from "react";
import { PowerVsCloudConnectionForm } from "../forms/power-vs";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const PowerVsCloudConnections = (props) => {
  return props.isModal ? (
    ""
  ) : (
    <IcseFormTemplate
      name="Cloud Connections"
      subHeading
      addText="Create a Cloud Connection"
      arrayData={props.cloud_connections}
      innerForm={PowerVsCloudConnectionForm}
      disableSave={props.disableSave}
      propsMatchState={props.propsMatchState}
      onDelete={props.onConnectionDelete}
      onSave={props.onConnectionSave}
      onSubmit={props.onConnectionSubmit}
      innerFormProps={{
        craig: props.craig,
        isModal: props.isModal,
        invalidCallback: props.invalidConnectionNameCallback,
        invalidTextCallback: props.invalidConnectionNameTextCallback,
        arrayParentName: props.workspace,
        transitGatewayList: props.transitGatewayList,
      }}
      hideAbout
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "cloud_connections",
        disableSave: props.disableSave,
        type: "formInSubForm",
      }}
    />
  );
};

PowerVsCloudConnections.defaultProps = {
  isModal: false,
};

PowerVsCloudConnections.propTypes = {
  cloud_connections: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  isModal: PropTypes.bool.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
  workspace: PropTypes.string.isRequired,
};
