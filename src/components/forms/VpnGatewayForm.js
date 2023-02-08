import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";
import { checkNullorEmptyString } from "../../lib";

/**
 * vpn gateway form
 */
class VpnGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    if (event.target.name === "vpc_name") {
      this.setState({
        vpc_name: event.target.value,
        subnet_name: "",
      });
    } else if (
      event.target.name === "subnet_name" &&
      checkNullorEmptyString(this.state.vpc_name)
    ) {
      this.setState({
        subnet_name: "",
      });
    } else {
      this.setState(this.eventTargetToNameAndValue(event));
    }
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
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            formName="resource_group"
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
            formName="vpc_name"
            name="vpc_name"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc_name}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.vpc_name)}
            invalidText="Select a VPC."
            className="fieldWidth"
          />
          <IcseSelect
            id={composedId}
            formName="subnet_name"
            name="subnet_name"
            labelText="Subnet"
            groups={this.props.subnetList}
            value={this.state.subnet_name}
            handleInputChange={this.handleInputChange}
            invalid={
              checkNullorEmptyString(this.state.vpc_name) ||
              checkNullorEmptyString(this.state.subnet_name)
            }
            invalidText={
              checkNullorEmptyString(this.state.vpc_name)
                ? `No VPC Selected.`
                : `Select a Subnet.`
            }
            className="fieldWidth"
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
    vpc_name: "",
    subnet_name: null,
  },
  isModal: false,
};

VpnGatewayForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string, // can be null
    vpc_name: PropTypes.string, // can be null
    subnet_name: PropTypes.string, // can be null
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default VpnGatewayForm;
