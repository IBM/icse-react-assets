import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import VsiForm from "../forms/VsiForm";
import { NoVpcTile } from "./Vpc";

export const Vsi = (props) => {
  return (
    <IcseFormTemplate
      name="Virtual Server Instances"
      addText="Create a VSI"
      docs={props.docs}
      arrayData={props.vsi}
      innerForm={VsiForm}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        readOnlyName: false,
        resourceGroups: props.resourceGroups,
        encryptionKeys: props.encryptionKeys,
        subnetList: props.subnetList,
        securityGroups: props.securityGroups,
        vpcList: props.vpcList,
        sshKeys: props.sshKeys,
        apiEndpointImages: props.apiEndpointImages,
        apiEndpointInstanceProfiles: props.apiEndpointInstanceProfiles,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidVsiVolumeCallback: props.invalidVolumeCallback,
        invalidVsiVolumeTextCallback: props.invalidVolumeTextCallback,
        propsMatchState: props.propsMatchState,
        vsiVolumeProps: {
          disableSave: props.disableSave,
          encryptionKeys: props.encryptionKeys,
          craig: props.craig,
          onSave: props.onVolumeSave,
          onDelete: props.onVolumeDelete,
          onSubmit: props.onVolumeCreate,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "vsi",
        hide: true,
        hideName: true,
      }}
      overrideTile={
        props.craig.store.json.vpcs.length === 0
          ? NoVpcTile("Virtual Server Instances")
          : null
      }
    />
  );
};

Vsi.propTypes = {
  docs: PropTypes.func.isRequired,
  vsi: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  sshKeys: PropTypes.array,
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidVolumeCallback: PropTypes.func.isRequired,
  invalidVolumeTextCallback: PropTypes.func.isRequired,
  onVolumeSave: PropTypes.func.isRequired,
  onVolumeDelete: PropTypes.func.isRequired,
  onVolumeCreate: PropTypes.func.isRequired,
  overrideTile: PropTypes.node,
};
