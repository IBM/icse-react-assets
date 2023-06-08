import React, { Component } from "react";
import { NumberInput, TextArea } from "@carbon/react";
import {
  titleCase,
  transpose,
  isNullOrEmptyString,
  isWholeNumber,
} from "lazy-z";
import PropTypes from "prop-types";
import { isIpStringInvalidNoCidr } from "../../lib/iam-utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseSelect } from "../Dropdowns";
import { IcseTextInput, IcseNameInput, IcseToggle } from "../Inputs";
import { SecurityGroupMultiSelect, SubnetMultiSelect } from "../MultiSelects";
import { IcseFormGroup } from "../Utils";
import IcseFormTemplate from "../IcseFormTemplate";
import VpnServerRouteForm from "./VpnServerRouteForm";

class VpnServerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  handleInputChange(event) {
    let { name, value } = event.target;
    let newState = { ...this.state };
    //handle crn inputs
    let crnList = value
      ? value
          .replace(/\s\s+/g, "") // replace extra spaces
          .replace(/,(?=,)/g, "") // prevent null tags from
          .replace(/[^\w,-:]/g, "")
      : [];
    if (name === "method") {
      // Clear client_ca_crn when method changes
      newState.method = value.toLowerCase();
      newState.client_ca_crn = "";
    } else if (name === "vpc") {
      // Clear subnet and security groups when vpc changes
      newState.vpc = value;
      newState.subnets = [];
      newState.security_groups = [];
    } else if (name === "certificate_crn") {
      newState.certificate_crn = crnList;
    } else if (name === "client_ca_crn") {
      newState.client_ca_crn = crnList;
    } else if (name === "protocol") {
      newState.protocol = value.toLowerCase();
    } else {
      newState = { [name]: value };
    }
    this.setState(newState);
  }

  /**
   * handle multiselects
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({ [name]: event });
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
            componentName={composedId}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText
            className="fieldWidthSmaller"
          />
          {/* resource group */}
          <IcseSelect
            formName={this.props.data.name + "-vpn-server-resource-group"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* vpc */}
          <IcseSelect
            formName={this.props.data.name + "-vpn-server-vpc"}
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={isNullOrEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* subnet and security groups */}
          <SubnetMultiSelect
            key={this.state.vpc + "-subnets"}
            id={this.props.data.name + "-vpe-subnets"}
            initialSelectedItems={this.state.subnets || []}
            vpc_name={this.state.vpc}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            subnets={[...this.getSubnetList()]}
            className="fieldWidthSmaller"
          />
          <SecurityGroupMultiSelect
            key={this.state.vpc + "-sg"}
            id={this.props.data.name + "-vpn-server-security-groups"}
            initialSelectedItems={this.state.security_groups || []}
            vpc_name={this.state.vpc}
            onChange={(value) =>
              this.handleMultiSelectChange("security_groups", value)
            }
            securityGroups={this.getSecurityGroupList()}
            invalid={!(this.state.security_groups?.length > 0)}
            invalidText={
              !this.state.vpc || isNullOrEmptyString(this.state.vpc)
                ? `Select a VPC.`
                : `Select at least one security group.`
            }
            className="fieldWidthSmaller"
          />
          {/* certificate_crn */}
          <IcseTextInput
            id={this.props.data.name + "-vpn-server-certificate-crn"}
            field="certificate_crn"
            componentName="certificate_crn"
            tooltip={{
              content:
                "Secrets Manager certificate unique identifier for VPN server",
              align: "top-left",
            }}
            labelText="Secrets Manager Certificate CRN"
            value={this.state.certificate_crn || ""}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCrns(
              this.state,
              this.props,
              "certificate_crn"
            )}
            invalidText={this.props.invalidCrnText(
              this.state,
              this.props,
              "certificate_crn"
            )}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* method toggle */}
          <IcseSelect
            formName={this.props.data.name + "-vpn-server-method"}
            name="method"
            labelText="Authentication Method"
            groups={["Certificate", "Username"]}
            value={titleCase(this.state.method)}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* client_ca_crn */}
          {this.state.method === "certificate" && (
            <IcseTextInput
              id={this.props.data.name + "-vpn-server-client-ca-crn"}
              field="client_ca_crn"
              componentName="client_ca_crn"
              labelText="Client CA CRN"
              tooltip={{
                content: "Client Secrets Manager Certificate CRN",
                align: "top-left",
              }}
              value={this.state.client_ca_crn || ""}
              onChange={this.handleInputChange}
              invalid={this.props.invalidCrns(
                this.state,
                this.props,
                "client_ca_crn"
              )}
              invalidText={() =>
                this.props.invalidCrnText(
                  this.state,
                  this.props,
                  "client_ca_crn"
                )
              }
              className="fieldWidthSmaller"
            />
          )}
          {/* client_ip_pool */}
          <IcseTextInput
            id={this.props.data.name + "-vpn-server-client-ip-pool"}
            componentName="client_ip_pool"
            name="client_ip_pool"
            field="client_ip_pool"
            tooltip={{
              content:
                "VPN client IPv4 address pool, expressed in CIDR format. The request must not overlap with any existing address prefixes in the VPC or any reserved address ranges.",
              link: "https://cloud.ibm.com/docs/vpc?topic=vpc-vpn-client-to-site-overview",
              align: "top-left",
            }}
            value={this.state.client_ip_pool}
            placeholder="x.x.x.x/x"
            labelText="Client CIDR Pool"
            invalidCallback={() =>
              this.props.invalidClientIpPoolCallback(this.state, this.props)
            }
            invalidText={this.props.invalidClientIpPoolTextCallback(
              this.state,
              this.props
            )}
            onChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* port input */}
          <NumberInput
            id={this.props.data.name + "-vpn-server-port"}
            label="Port"
            allowEmpty={true}
            value={this.state.port || ""}
            step={1}
            onChange={this.handleInputChange}
            name="port"
            hideSteppers={true}
            min={1}
            max={65535}
            invalid={
              !isNullOrEmptyString(this.state.port) &&
              (!isWholeNumber(Number(this.state.port)) ||
                this.state.port < 1 ||
                this.state.port > 65535)
            }
            invalidText="Must be a whole number between 1 and 65535."
            className="fieldWidthSmaller leftTextAlign"
          />
          {/* protocol */}
          <IcseSelect
            formName={this.props.data.name + "-vpn-server-protocol"}
            groups={["TCP", "UDP"]}
            value={this.state.protocol.toUpperCase()}
            labelText="Protocol"
            name="protocol"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* enable_split_tunneling toggle */}
          <IcseToggle
            id={this.props.data.name + "-vpn-server-enable-split-tunneling"}
            labelText="Enable Split Tunneling"
            defaultToggled={this.state.enable_split_tunneling}
            onToggle={() => this.handleToggle("enable_split_tunneling")}
            className="fieldWidthSmaller"
          />
          {/* client_idle_timeout input */}
          <NumberInput
            id={
              this.props.data.name + "-vpn-server-client-idle-timeout-seconds"
            }
            name="client_idle_timeout"
            placeholder="600"
            label="Client Idle Timeout (s)"
            allowEmpty={true}
            value={this.state.client_idle_timeout || ""}
            step={1}
            onChange={this.handleInputChange}
            hideSteppers={true}
            min={0}
            max={28800}
            invalid={
              !isNullOrEmptyString(this.state.client_idle_timeout) &&
              (!isWholeNumber(Number(this.state.client_idle_timeout)) ||
                this.state.client_idle_timeout < 0 ||
                this.state.client_idle_timeout > 28800)
            }
            invalidText="Must be a whole number between 0 and 28800."
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* text area for client dns server IPs */}
          <TextArea
            className="textInputMedium"
            id={this.props.data.name + "-vpn-server-client-dns-server-ips"}
            labelText="Client DNS Server IPs"
            placeholder={"X.X.X.X, X.X.X.X, ..."}
            value={this.state.client_dns_server_ips || ""}
            onChange={this.handleAllowedIps}
            invalid={isIpStringInvalidNoCidr(this.state.client_dns_server_ips)}
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
    client_ip_pool: "",
    enable_split_tunneling: false,
    client_idle_timeout: "",
    port: "",
    protocol: "udp",
    resource_group: "",
    vpc: "",
    subnet: "",
    security_groups: [],
    client_dns_server_ips: "",
    routes: [],
    subnets: [],
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
    client_ip_pool: PropTypes.string.isRequired,
    enable_split_tunneling: PropTypes.bool,
    client_idle_timeout: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    port: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    protocol: PropTypes.string,
    resource_group: PropTypes.string,
    vpc: PropTypes.string.isRequired,
    subnets: PropTypes.array,
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
  invalidClientIpPoolCallback: PropTypes.func.isRequired,
  invalidClientIpPoolTextCallback: PropTypes.func.isRequired,
  /* forms */
  vpnServerRouteProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
  }).isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired,
};

export default VpnServerForm;
