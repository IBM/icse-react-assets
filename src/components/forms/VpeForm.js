import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import { SecurityGroupMultiSelect, SubnetMultiSelect } from "../MultiSelects";
import PropTypes from "prop-types";
import {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
} from "../../lib/forms";

/**
 * Vpe Form
 */
class VpeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleVpcDropdown = this.handleVpcDropdown.bind(this);
    this.handleServiceDropdown = this.handleServiceDropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle vpc dropdown
   * @param {event} event event
   */
  handleVpcDropdown(event) {
    this.setState(vpeVpcDropdown(event));
  }

  /**
   * handle service dropdown
   * @param {event} event event
   */
  handleServiceDropdown(event) {
    this.setState(vpeServiceDropdown(event));
  }

  /**
   * handle multiselects
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState(this.setNameToValue(name, event));
  }

  render() {
    return (
      <div>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-name"}
            component="vpe"
            componentName={this.props.data.name}
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="my-vpe-name"
            hideHelperText
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            name="vpc"
            formName={this.props.data.name + "-vpe" + this.state.vpc}
            groups={this.props.vpcList}
            value={this.state.vpc}
            labelText="VPC Name"
            handleInputChange={this.handleVpcDropdown}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            name="service"
            formName={this.props.data.name + "vpce-service"}
            groups={serviceGroups}
            value={services[this.state.service]}
            labelText="Service Type"
            handleInputChange={this.handleServiceDropdown}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup
          noMarginBottom={this.state.service !== "secrets-manager"}
        >
          <IcseSelect
            formName={this.props.data.name + "resource_group"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <SecurityGroupMultiSelect
            key={this.state.vpc + "-sg"}
            id={this.props.data.name + "-vpe-security-groups"}
            initialSelectedItems={[...this.state.security_groups]}
            vpc_name={this.state.vpc}
            onChange={(event) =>
              this.handleMultiSelect("security_groups", event)
            }
            securityGroups={[...this.getSecurityGroupList()]}
            className="fieldWidthSmaller"
            invalid={this.state.security_groups.length === 0}
          />
          <SubnetMultiSelect
            key={this.state.vpc + "-subnets"}
            id={this.props.data.name + "-vpe-subnets"}
            initialSelectedItems={[...this.state.subnets]}
            vpc_name={this.state.vpc}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            subnets={[...this.getSubnetList()]}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        {this.state.service === "secrets-manager" && (
          <IcseFormGroup noMarginBottom>
            <IcseSelect
              formName={this.props.data.name + "instance"}
              name="instance"
              labelText="Secrets Manager Instance"
              handleInputChange={this.handleInputChange}
              className="fieldWidthSmaller"
              groups={this.props.secretsManagerInstances}
              value={this.state.instance}
            />
          </IcseFormGroup>
        )}
      </div>
    );
  }
}

VpeForm.defaultProps = {
  data: {
    name: "",
    vpc: "",
    service: "kms",
    resource_group: "",
    security_groups: [],
    subnets: [],
  },
  resourceGroups: [],
  subnetList: [],
  securityGroups: [],
  secretsManagerInstances: [],
  isModal: false,
};

VpeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    service: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    security_groups: PropTypes.arrayOf(PropTypes.string).isRequired,
    subnets: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  secretsManagerInstances: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.object).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default VpeForm;
