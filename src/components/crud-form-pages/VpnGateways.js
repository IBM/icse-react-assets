import React from "react";
import VpnGatewayForm from "../forms/VpnGatewayForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import { NoVpcTile } from "./NoVpcTile";
import { isEmpty } from "lazy-z";

export const VpnGateways = (props) => {
  return (
    <IcseFormTemplate
      name="VPN Gateways"
      addText="Create a VPN Gateway"
      docs={props.docs}
      innerForm={VpnGatewayForm}
      arrayData={props.vpn_gateways}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      hideFormTitleButton={isEmpty(props.vpcList)}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        vpcList: props.vpcList,
        subnetList: props.subnetList,
        resourceGroups: props.resourceGroups,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "vpn_gateways",
        hide: true,
        hideName: true,
      }}
      overrideTile={props.vpcList.length === 0 ? NoVpcTile() : null}
    />
  );
};

VpnGateways.propTypes = {
  docs: PropTypes.func.isRequired,
  vpn_gateways: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  overrideTile: PropTypes.node,
};
