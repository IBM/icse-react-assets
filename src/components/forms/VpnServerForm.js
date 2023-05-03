import React, { Component } from "react";
import { NumberInput, TextArea } from "@carbon/react";
import { isIpv4CidrOrAddress, transpose } from "lazy-z";
import PropTypes from "prop-types";
import { checkNullorEmptyString } from "../../lib";
import { isIpStringInvalid, isRangeInvalid } from "../../lib/iam-utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseSelect } from "../Dropdowns";
import { IcseTextInput, IcseNameInput, IcseToggle } from "../Inputs";
import { SecurityGroupMultiSelect, SubnetMultiSelect } from "../MultiSelects";
import { IcseFormGroup } from "../Utils";
import { ToolTipWrapper } from "../Tooltips";
import IcseFormTemplate from "../IcseFormTemplate";
import VpnServerRouteForm from "./VpnServerRouteForm";

class VpnServerForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);

    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  handleInputChange(event) {
    let { name, value } = event.target;
    let stateChangeParams = { [name]: value };
    if (name === "method")
      // Clear client_ca_crn and identity_provider when method changes
      transpose(
        { client_ca_crn: "", identity_provider: "" },
        stateChangeParams
      );
    if (name === "vpc")
      // Clear subnets and security groups when vpc changes
      transpose({ subnets: [], security_groups: [] }, stateChangeParams);
    this.setState(stateChangeParams);
  }

  /**
   * handle input change of number-only fields
   * @param {event} event
   */
  handleNumberInputChange(event) {
    let value = parseInt(event.target.value) || null;
    if (value || event.target.value === "") {
      this.setState({ [event.target.name]: value });
    }
  }

  /**
   * Handle input change for  client_dns_server_ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    // removing white space and checking for empty value
    let value = event.target.value.replace(/\s*/g, "");
    if (value === "") value = null;
    this.setState({ client_dns_server_ips: value });
  }

  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }

  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  render() {
    let composedId = `vpn-server-form-${this.props.data.name}`;
    let classNameModalCheck = this.props.isModal
      ? "fieldWidthSmaller"
      : "fieldWidth";
    let routeProps = {
      invalidCallback: this.props.invalidVpnServerRouteCallback,
      invalidTextCallback: this.props.invalidVpnServerRouteTextCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name,
    };
    transpose({ ...this.props.vpnServerRouteProps }, routeProps);
    return (
      <>
        <IcseFormGroup>
          {/* vpn server name */}
          <IcseNameInput
            id={composedId}
            className={classNameModalCheck}
            componentName="vpn-server-name"
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText
          />
          {/* certificate_crn */}
          <IcseTextInput
            componentName="vpn-server-certificate-crn"
            className={classNameModalCheck}
            tooltip={{
              content:
                "Must use Secrets Manager to generate certificate_crn of secret for this VPN server.",
              align: "top-left",
            }}
            id="certificate_crn"
            labelText="Certificate CRN"
            value={this.state.certificate_crn}
            onChange={this.handleInputChange}
            field="certificate_crn"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* method toggle */}
          <IcseSelect
            formName="vpn-server-method"
            className={classNameModalCheck}
            name="method"
            labelText="Method"
            groups={["certificate", "username"]}
            value={this.state.method}
            handleInputChange={this.handleInputChange}
          />
          {/* client_ca_crn or identity_provider */}
          {this.state.method === "certificate" ? (
            <IcseTextInput
              componentName="vpn-server-client-ca-crn"
              className={classNameModalCheck}
              id="client_ca_crn"
              labelText="Client CA CRN"
              value={this.state.client_ca_crn}
              onChange={this.handleInputChange}
              field="client_ca_crn"
            />
          ) : (
            <IcseTextInput
              componentName="vpn-server-identity-provider"
              className={classNameModalCheck}
              id="identity_provider"
              labelText="Identity Provider"
              value={this.state.identity_provider}
              onChange={this.handleInputChange}
              field="identity_provider"
            />
          )}
          {/* client_ip_pool */}
          <IcseTextInput
            id={this.props.data.name + "-client-ip-pool"}
            componentName="vpn-server-client-ip-pool"
            className={classNameModalCheck}
            name="client_ip_pool"
            field="client_ip_pool"
            value={this.state.client_ip_pool}
            placeholder="x.x.x.x"
            labelText="Client IP Pool CIDR"
            invalidCallback={() =>
              isIpv4CidrOrAddress(this.state.client_ip_pool) === false
            }
            invalidText="Client IP Pool CIDR must be a PV4 CIDR block."
            onChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* enable_split_tunneling toggle */}
          <IcseToggle
            labelText="Enable Split Tunneling"
            defaultToggled={this.state.enable_split_tunneling}
            onToggle={() => this.handleToggle("enable_split_tunneling")}
            id="vpn-server-enable-split-tunneling"
            className="fieldWidthSmaller"
          />
          {/* client_idle_timeout input */}
          <NumberInput
            placeholder="600"
            label="Client Idle Timeout (sec)"
            id="vpn-serrver-client-idle-timeout-seconds"
            allowEmpty={true}
            value={this.state.client_idle_timeout || ""}
            step={1}
            onChange={this.handleNumberInputChange}
            name="client_idle_timeout"
            hideSteppers={true}
            min={0}
            max={28800}
            invalid={isRangeInvalid(this.state.client_idle_timeout, 0, 28800)}
            invalidText="Must be a whole number between 0 and 28800."
            className="fieldWidth leftTextAlign"
          />
          {/* port input */}
          <NumberInput
            label="Port"
            id="vpn-serrver-port"
            allowEmpty={true}
            value={this.state.port || ""}
            step={1}
            onChange={this.handleNumberInputChange}
            name="port"
            hideSteppers={true}
            min={1}
            max={65535}
            invalid={isRangeInvalid(this.state.client_idle_timeout, 1, 65535)}
            invalidText="Must be a whole number between 1 and 65535."
            className="fieldWidth leftTextAlign"
          />
          {/* protocol */}
          <IcseSelect
            formName="vpn-server-protocol"
            groups={["TCP", "UDP"]}
            value={this.state.protocol.toUpperCase()}
            labelText="Protocol"
            name="protocol"
            handleInputChange={(event) =>
              this.handleInput("protocol", event, true)
            }
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* resource group */}
          <IcseSelect
            formName="vsi_form"
            name="resource_group"
            className={classNameModalCheck}
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
          />
          {/* vpc */}
          <IcseSelect
            formName="vpn_server"
            name="vpc"
            className={classNameModalCheck}
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* subnets and security groups */}
          <SubnetMultiSelect
            key={this.state.vpc + "-subnet"}
            id="vsi-subnets"
            className={classNameModalCheck}
            initialSelectedItems={this.state.subnets}
            vpc_name={this.state.vpc}
            subnets={this.getSubnetList()}
            onChange={(value) => this.handleMultiSelectChange("subnets", value)}
          />
          <SecurityGroupMultiSelect
            key={this.state.vpc + "-sg"}
            id="vsi-security-groups"
            className={classNameModalCheck}
            initialSelectedItems={this.state.security_groups || []}
            vpc_name={this.state.vpc}
            onChange={(value) =>
              this.handleMultiSelectChange("security_groups", value)
            }
            securityGroups={this.getSecurityGroupList()}
            invalid={!(this.state.security_groups?.length > 0)}
            invalidText={
              !this.state.vpc || checkNullorEmptyString(this.state.vpc)
                ? `Select a VPC.`
                : `Select at least one security group.`
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* text area for client dns server IPs */}
          <TextArea
            className="textInputMedium"
            id="client-dns-server-ips"
            labelText="Client DNS Server IPs"
            placeholder={
              this.state.client_dns_server_ips || "X.X.X.X, X.X.X.X/X, ..."
            }
            value={String(this.state.client_dns_server_ips)}
            onChange={this.handleAllowedIps}
            invalid={isIpStringInvalid(this.state.client_dns_server_ips)}
            invalidText="Please enter a comma separated list of IP addresses."
            helperText="Enter a comma separated list of IP addresses."
          />
        </IcseFormGroup>
        {/* show routes if not modal */}
        {this.props.isModal === false && (
          <IcseFormTemplate
            name="Routes"
            subHeading
            addText="Create a Route"
            arrayData={this.props.data.routes}
            innerForm={VpnServerRouteForm}
            disableSave={this.props.vpnServerRouteProps.disableSave}
            onDelete={this.props.vpnServerRouteProps.onDelete}
            onSave={this.props.vpnServerRouteProps.onSave}
            onSubmit={this.props.vpnServerRouteProps.onSubmit}
            propsMatchState={this.props.propsMatchState}
            innerFormProps={{ ...routeProps }}
            hideAbout
            toggleFormProps={{
              hideName: true,
              submissionFieldName: "routes",
              disableSave: this.props.vpnServerRouteProps.disableSave,
              type: "formInSubForm",
            }}
          />
        )}
      </>
    );
  }
}

VpnServerForm.defaultProps = {
  data: {
    name: "",
    certificate_crn: "",
    method: "",
    client_ca_crn: "",
    identiy_provider: "",
    client_ip_pool: "",
    enable_split_tunneling: false,
    client_idle_timeout: "",
    port: "",
    protocol: "UDP",
    resource_group: "",
    vpc: "",
    subnets: [],
    security_groups: [],
    client_dns_server_ips: "",
    routes: [],
  },
  isModal: false,
  resourceGroups: [],
  securityGroups: [],
  subnetList: [],
  vpcList: [],
};

VpnServerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    certificate_crn: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    client_ca_crn: PropTypes.string.isRequired,
    identiy_provider: PropTypes.string.isRequired,
    client_ip_pool: PropTypes.string.isRequired,
    enable_split_tunneling: PropTypes.bool,
    client_idle_timeout: PropTypes.number,
    port: PropTypes.number,
    protocol: PropTypes.string,
    resource_group: PropTypes.string,
    vpc: PropTypes.string.isRequired,
    subnets: PropTypes.array.isRequired,
    security_groups: PropTypes.array.isRequired,
    routes: PropTypes.array,
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  /* lists */
  resourceGroups: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  securityGroups: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  /* forms */
  vpnServerRouteProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
  }).isRequired,
};

export default VpnServerForm;
