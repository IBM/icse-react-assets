import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import DnsForm from "../forms/dns/DnsForm";

export const Dns = (props) => {
  return (
    <IcseFormTemplate
      name="DNS Service"
      addText="Create a DNS service"
      innerForm={DnsForm}
      craig={props.craig}
      arrayData={props.dns}
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
        invalidNameCallback: props.invalidCallback,
        invalidNameTextCallback: props.invalidTextCallback,
        vpcList: props.vpcList,
        subnetList: props.subnetList,
        resourceGroups: props.resourceGroups,
        propsMatchState: props.propsMatchState,
        zoneProps: {
          craig: props.craig,
          onSave: props.onZoneSave,
          onDelete: props.onZoneDelete,
          onSubmit: props.onZoneSubmit,
          disableSave: props.disableSave,
          invalidNameCallback: props.invalidZoneNameCallback,
          invalidNameTextCallback: props.invalidZoneNameTextCallback,
          invalidLabelCallback: props.invalidLabelCallback,
          invalidLabelTextCallback: () => {
            return "Label cannot be null or empty string.";
          },
          invalidDescriptionCallback: props.invalidDescriptionCallback,
          invalidDescriptionTextCallback: props.invalidDescriptionTextCallback,
          vpcList: props.vpcList,
          propsMatchState: props.propsMatchState,
        },
        recordProps: {
          craig: props.craig,
          disableSave: props.disableSave,
          onSave: props.onRecordSave,
          onDelete: props.onRecordDelete,
          onSubmit: props.onRecordSubmit,
          invalidCallback: props.invalidRecordCallback,
          invalidTextCallback: props.invalidRecordTextCallback,
          invalidRdata: props.invalidRdataCallback,
          dnsZones: props.dnsZones,
          invalidRdataText: () => {
            return "Resource Data cannot be null or empty string.";
          },
          propsMatchState: props.propsMatchState,
        },
        resolverProps: {
          craig: props.craig,
          onSave: props.onResolverSave,
          onSubmit: props.onResolverSubmit,
          onDelete: props.onResolverDelete,
          disableSave: props.disableSave,
          invalidNameCallback: props.invalidResolverNameCallback,
          invalidNameTextCallback: props.invalidResolverNameTextCallback,
          invalidCallback: () => {}, // these are only used on a select which handles its own invalid state
          invalidTextCallback: () => {},
          invalidDescriptionCallback: props.invalidResolverDescriptionCallback,
          invalidDescriptionTextCallback:
            props.invalidResolverDescriptionTextCallback,
          subnetList: props.subnetList,
          vpcList: props.vpcList,
          propsMatchState: props.propsMatchState,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "dns",
        hideName: true,
      }}
    />
  );
};

Dns.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  dns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  onZoneSave: PropTypes.func.isRequired,
  onZoneDelete: PropTypes.func.isRequired,
  onZoneSubmit: PropTypes.func.isRequired,
  invalidZoneNameCallback: PropTypes.func.isRequired,
  invalidZoneNameTextCallback: PropTypes.func.isRequired,
  invalidLabelCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
  onRecordSave: PropTypes.func.isRequired,
  onRecordDelete: PropTypes.func.isRequired,
  onRecordSubmit: PropTypes.func.isRequired,
  invalidRecordCallback: PropTypes.func.isRequired,
  invalidRecordTextCallback: PropTypes.func.isRequired,
  invalidRdataCallback: PropTypes.func.isRequired,
  dnsZones: PropTypes.array,
  onResolverSave: PropTypes.func.isRequired,
  onResolverSubmit: PropTypes.func.isRequired,
  onResolverDelete: PropTypes.func.isRequired,
  invalidResolverNameCallback: PropTypes.func.isRequired,
  invalidResolverNameTextCallback: PropTypes.func.isRequired,
  invalidResolverDescriptionCallback: PropTypes.func.isRequired,
  invalidResolverDescriptionTextCallback: PropTypes.func.isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};
