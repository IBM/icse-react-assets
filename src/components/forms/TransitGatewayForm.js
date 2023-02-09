import React, { Component } from "react";
import { IcseTextInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import { VpcListMultiSelect } from "../MultiSelects";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} from "../component-utils";
import PropTypes from "prop-types";

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  /**
   * handle vpc selection
   * @param {event} event
   */
  handleVpcSelect(event) {
    this.setState({ transit_gateway_connections: event });
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseToggle
            labelText="Use Transit Gateway"
            toggleFieldName="enable_transit_gateway"
            id="tg-enable"
            onToggle={this.handleToggle}
            defaultToggled={this.state.enable_transit_gateway}
          />
          <IcseTextInput
            onChange={this.handleInputChange}
            componentName="Transit Gateway"
            field="name"
            value={this.state.name}
            readOnly={this.state.readOnlyName}
            id="tg-name"
            invalid={this.props.invalidCallback(this.state)}
            invalidText={this.props.invalidTextCallback(this.state)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="Transit Gateway"
            value={this.state.transit_gateway_resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            name="transit_gateway_resource_group"
            labelText="Resource Group"
          />
          <VpcListMultiSelect
            id="tg-vpc-multiselect"
            titleText="Connected VPCs"
            initialSelectedItems={this.state.transit_gateway_connections}
            vpcList={this.props.vpcList}
            onChange={this.handleVpcSelect}
            className="fieldWidth"
            invalid={
              this.state.transit_gateway_connections.length === 0 &&
              this.state.enable_transit_gateway
            }
            invalidText="At least one VPC must be connected"
          />
        </IcseFormGroup>
      </>
    );
  }
}

TransitGatewayForm.defaultProps = {
  data: {
    enable_transit_gateway: true,
    transit_gateway_connections: [],
    transit_gateway_resource_group: "",
    name: "",
  },
  readOnlyName: true,
  vpcList: [],
  resourceGroups: [],
};

TransitGatewayForm.propTypes = {
  data: PropTypes.shape({
    enable_transit_gateway: PropTypes.bool.isRequired,
    transit_gateway_connections: PropTypes.array.isRequired,
    transit_gateway_resource_group: PropTypes.string.isRequired,
    name: PropTypes.string,
  }).isRequired,
  readOnlyName: PropTypes.bool.isRequired,
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default TransitGatewayForm;
