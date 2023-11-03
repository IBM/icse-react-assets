import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import ClassicVlanForm from "../forms/ClassicVlanForm";
import PropTypes from "prop-types";

export const ClassicVlan = (props) => {
  return (
    <IcseFormTemplate
      name="Classic VLANs"
      addText="Create a VLAN"
      docs={props.docs}
      innerForm={ClassicVlanForm}
      arrayData={props.vlans}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      hideFormTitleButton={props.overrideTile ? true : false}
      overrideTile={props.overrideTile}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        datacenters: props.datacenters,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "classic_vlans",
        hideName: true,
      }}
    />
  );
};

ClassicVlan.propTypes = {
  docs: PropTypes.func.isRequired,
  vlans: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  datacenters: PropTypes.arrayOf(PropTypes.string),
  overrideTile: PropTypes.node,
};
