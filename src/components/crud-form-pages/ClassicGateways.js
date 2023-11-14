import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import { ClassicGatewayForm } from "../..";

export const ClassicGateways = (props) => {
  return (
    <IcseFormTemplate
      name="Classic Gateways"
      addText="Create a Gateway"
      docs={props.docs}
      arrayData={props.classic_gateways}
      innerForm={ClassicGatewayForm}
      disableSave={props.disableSave}
      propsMatchState={props.propsMatchState}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      onDelete={props.onDelete}
      forceOpen={props.forceOpen}
      hideFormTitleButton={props.overrideTile ? true : false}
      overrideTile={props.overrideTile}
      innerFormProps={{
        craig: props.craig,
        composedNameCallback: props.composedNameCallback,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        datacenterList: props.datacenterList,
        packageNameList: props.packageNameList,
        osKeyNameList: props.osKeyNameList,
        processKeyNameList: props.processKeyNameList,
        classicSshKeyList: props.classicSshKeyList,
        diskKeyNameList: props.diskKeyNameList,
        classic_vlans: props.classic_vlans,
        publicBandWidthList: props.publicBandWidthList,
        invalidMemoryCallback: props.invalidMemoryCallback,
        invalidMemoryTextCallback: props.invalidMemoryTextCallback,
        invalidDomainCallback: props.invalidDomainCallback,
        invalidDomainTextCallback: props.invalidDomainTextCallback,
        networkSpeedList: props.networkSpeedList,
      }}
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "classic_gateways",
        disableSave: props.disableSave,
      }}
    />
  );
};

ClassicGateways.defaultProps = {
  packageNameList: ["VIRTUAL_ROUTER_APPLIANCE_1_GPBS"],
  osKeyNameList: ["OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV"],
  processKeyNameList: ["INTEL_XEON_4210_2_20"],
  diskKeyNameList: ["HARD_DRIVE_2_00_TB_SATA_2"],
  networkSpeedList: ["1000", "10000"],
  publicBandWidthList: ["500", "1000", "5000", "10000", "20000"],
};

ClassicGateways.propTypes = {
  classic_gateways: PropTypes.arrayOf(PropTypes.shape).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  docs: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  datacenterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  packageNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  osKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  processKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  classicSshKeyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  diskKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  classic_vlans: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  networkSpeedList: PropTypes.arrayOf(PropTypes.string).isRequired,
  publicBandWidthList: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidMemoryCallback: PropTypes.func.isRequired,
  invalidMemoryTextCallback: PropTypes.func.isRequired,
  invalidDomainCallback: PropTypes.func.isRequired,
  invalidDomainTextCallback: PropTypes.func.isRequired,
};
