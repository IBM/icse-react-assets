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

const services = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr",
};
const serviceGroups = [
  "Hyper Protect Crypto Services",
  "Key Protect",
  "Object Storage",
  "Container Registry",
];

/**
 * Vpe Form
 */
class VpeForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleServiceDropdown = this.handleServiceDropdown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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
   * handle service dropdown
   * @param {event} event event
   */
  handleServiceDropdown(event) {
    this.setState({
      service: services[event.target.value],
    });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  /**
   * handle multiselects
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({ [name]: event });
  }

  render() {
    return (
      <>
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
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            name="service"
            formName="vpe"
            groups={serviceGroups}
            value={services[this.state.service]}
            labelText="Service Type"
            handleInputChange={this.handleServiceDropdown}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="resource_group"
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <SecurityGroupMultiSelect
            id="vpe-security-groups"
            initialSelectedItems={this.state.security_groups}
            vpc_name={this.state.vpc}
            onChange={(event) =>
              this.handleMultiSelect("security_groups", event)
            }
            securityGroups={this.props.securityGroups}
            className="fieldWidthSmaller"
            invalid={this.state.security_groups.length === 0}
          />
          <SubnetMultiSelect
            id="vpe-subnets"
            initialSelectedItems={this.state.subnets}
            vpc_name={this.state.vpc}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            subnets={this.getSubnetList()}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </>
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
  isModal: false,
};

VpeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    security_groups: PropTypes.arrayOf(PropTypes.string).isRequired,
    subnets: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default VpeForm;
