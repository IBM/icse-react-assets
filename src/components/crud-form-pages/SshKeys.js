import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import { SshKeyForm } from "../..";

export const SshKeys = (props) => {
  return (
    <IcseFormTemplate
      name={props.classic ? "Classic SSH Keys" : "SSH Keys"}
      addText="Create an SSH Key"
      docs={props.powerVs ? undefined : props.docs}
      subHeading={props.powerVs}
      innerForm={SshKeyForm}
      arrayData={props.ssh_keys}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      hideFormTitleButton={props.overrideTile ? true : false}
      overrideTile={props.overrideTile}
      deleteDisabled={props.deleteDisabled}
      deleteDisabledMessage="SSH Key currently in use"
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        invalidKeyCallback: props.invalidKeyCallback,
        powerVs: props.powerVs,
        arrayParentName: props.powerVs ? props.arrayParentName : undefined,
        classic: props.classic,
      }}
      hideAbout={props.powerVs}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "ssh_keys",
        hide: true,
        hideName: true,
        type: props.powerVs ? "formInSubForm" : undefined,
      }}
    />
  );
};

SshKeys.defaultProps = {
  powerVs: false,
  classic: false,
};

SshKeys.propTypes = {
  ssh_keys: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array, //not required for classic
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func, // not required for power vs
  deleteDisabled: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  powerVs: PropTypes.bool.isRequired,
  arrayParentName: PropTypes.string,
  classic: PropTypes.bool,
  overrideTile: PropTypes.node,
};
