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
import { splat } from "lazy-z";

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
    let connections = [];
    event.forEach((vpc) => {
      connections.push({ tgw: this.state.name, vpc: vpc });
    });
    this.setState({
      connections: connections,
    });
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
            labelText="Global"
            toggleFieldName="global"
            id={this.state.name + "-tg-global"}
            onToggle={this.handleToggle}
            defaultToggled={this.state.global}
          />
          <IcseTextInput
            onChange={this.handleInputChange}
            componentName="Transit Gateway"
            field="name"
            value={this.state.name}
            readOnly={this.props.readOnlyName}
            id={this.state.name + "-tg-name"}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="Transit Gateway"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            id={this.state.name + "-resource_group"}
            name="resource_group"
            labelText="Resource Group"
          />
          <VpcListMultiSelect
            id={this.state.name + "-tg-vpc-multiselect"}
            titleText="Connected VPCs"
            initialSelectedItems={splat(this.state.connections, "vpc")}
            vpcList={this.props.vpcList}
            onChange={this.handleVpcSelect}
            invalid={this.state.connections.length === 0}
            invalidText="At least one VPC must be connected"
          />
        </IcseFormGroup>
      </>
    );
  }
}

TransitGatewayForm.defaultProps = {
  data: {
    global: true,
    connections: [],
    resource_group: "",
    name: "",
  },
  readOnlyName: true,
  vpcList: [],
  resourceGroups: [],
};

TransitGatewayForm.propTypes = {
  data: PropTypes.shape({
    global: PropTypes.bool.isRequired,
    connections: PropTypes.array.isRequired,
    resource_group: PropTypes.string.isRequired,
    name: PropTypes.string,
  }).isRequired,
  readOnlyName: PropTypes.bool.isRequired,
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default TransitGatewayForm;
