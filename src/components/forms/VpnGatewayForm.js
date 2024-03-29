import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";
import { checkNullorEmptyString } from "../../lib";
import { handleVpnGatewayChange } from "../../lib/forms";

/**
 * vpn gateway form
 */
class VpnGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePolicyToggle = this.handlePolicyToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(handleVpnGatewayChange(event));
  }

  handlePolicyToggle() {
    this.setState({ policy_mode: !this.state.policy_mode });
  }

  render() {
    let composedId = `vpn-gateway-form-${this.props.data.name}-`;
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId}
            component="vpn_gateways"
            componentName={this.props.data.name}
            componentProps={this.props}
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="my-vpn-gateway-name"
            hideHelperText
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            formName={this.props.data.name + "-resource_group"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.resource_group)}
            invalidText="Select a Resource Group."
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            id={composedId}
            formName={this.props.data.name + "-vpn-" + this.state.vpc}
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
            className="fieldWidth"
          />
          <IcseSelect
            id={composedId}
            formName="subnet"
            name="subnet"
            labelText="Subnet"
            groups={this.getSubnetList()}
            value={this.state.subnet}
            handleInputChange={this.handleInputChange}
            invalid={
              checkNullorEmptyString(this.state.vpc) ||
              checkNullorEmptyString(this.state.subnet)
            }
            invalidText={
              checkNullorEmptyString(this.state.vpc)
                ? `No VPC Selected.`
                : `Select a Subnet.`
            }
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "-policy-mode"}
            labelText="Enable Policy Mode"
            defaultToggled={this.state.policy_mode || false}
            onToggle={this.handlePolicyToggle}
            className="fieldWidth"
            tooltip={{
              content:
                "A policy-based VPN operates in Active-Standby mode with a single VPN gateway IP shared between the members. The default is a route-based VPN which offers Active-Active redundancy with two VPN gateway IPs.",
              link: "https://cloud.ibm.com/docs/vpc?topic=vpc-using-vpn",
            }}
          />
        </IcseFormGroup>
      </>
    );
  }
}

VpnGatewayForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    vpc: "",
    subnet: null,
  },
  isModal: false,
};

VpnGatewayForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string, // can be null
    vpc: PropTypes.string, // can be null
    subnet: PropTypes.string, // can be null
    policy_mode: PropTypes.bool, // can be null
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default VpnGatewayForm;
