import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import VpnServerForm from "../forms/VpnServerForm";
import { CloudAlerting } from "@carbon/icons-react";
import { Tile } from "@carbon/react";
import "./no-secrets-manager-tile.css";

export const NoSecretsManagerTile = () => {
  return (
    <Tile className="tileBackground displayFlex alignItemsCenter wrap marginTop">
      <CloudAlerting size="24" className="iconMargin" /> No Secrets Manager
      instances have been created. Create one from the{" "}
      <a className="no-secrets-link" href="/form/secretsManager">
        Secrets Manager Page
      </a>{" "}
      to enable VPN Servers.
    </Tile>
  );
};

export const VpnServers = (props) => {
  return (
    <IcseFormTemplate
      name="VPN Servers"
      addText="Create a VPN Server"
      docs={props.docs}
      innerForm={VpnServerForm}
      arrayData={props.vpn_servers}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      hideFormTitleButton={props.noSecretsManager}
      overrideTile={props.noSecretsManager ? <NoSecretsManagerTile /> : null}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        invalidClientIpPoolTextCallback: function (stateData) {
          return props.invalidCidrBlock(stateData.client_ip_pool)
            ? "Invalid CIDR block"
            : "";
        },
        invalidClientIpPoolCallback: function (stateData) {
          return props.invalidCidrBlock(stateData.client_ip_pool);
        },
        invalidCrns: function (stateData, componentProps, field) {
          return props.invalidCrnList([stateData[field]]);
        },
        invalidCrnText: function (stateData, componentProps, field) {
          return props.invalidCrnList([stateData[field]])
            ? "Enter a valid resource CRN"
            : "";
        },
        subnetList: props.subnetList,
        securityGroups: props.securityGroups,
        vpcList: props.vpcList,
        vpnServerRouteProps: {
          onSave: props.onRouteSave,
          onDelete: props.onRouteDelete,
          onSubmit: props.onRouteSubmit,
          disableSave: function (field, stateData, componentProps) {
            // pass through function to change field name
            return props.disableSave(
              "vpn_server_routes",
              stateData,
              componentProps,
            );
          },
          invalidCallback: props.invalidRouteCallback,
          invalidTextCallback: props.invalidRouteTextCallback,
          craig: props.craig,
          propsMatchState: props.propsMatchState,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "vpn_servers",
        hide: true,
        hideName: true,
      }}
    />
  );
};

VpnServers.defaultProps = {
  noSecretsManager: false,
};

VpnServers.propTypes = {
  noSecretsManager: PropTypes.bool.isRequired,
  vpn_servers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  invalidCidrBlock: PropTypes.func.isRequired,
  invalidCrnList: PropTypes.func.isRequired,
  onRouteSave: PropTypes.func.isRequired,
  onRouteDelete: PropTypes.func.isRequired,
  onRouteSubmit: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  subnetList: PropTypes.array.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string),
};
