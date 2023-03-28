import React, { Component } from "react";
import { buildFormFunctions } from "../component-utils";
import { IcseNameInput } from "../Inputs";
import { EntitlementSelect, FetchSelect, IcseNumberSelect } from "../Dropdowns";
import { SubnetMultiSelect } from "../MultiSelects";
import { IcseFormGroup } from "../Utils";
import PropTypes from "prop-types";

class WorkerPoolForm extends Component {
  constructor(props) {
    super(props);
    (this.state = this.props.isModal
      ? {
          name: "",
          flavor: this.props.cluster.flavor,
          subnets: this.props.cluster.subnets || [],
          vpc: this.props.cluster.vpc,
          workers_per_subnet: this.props.cluster.workers_per_subnet,
          entitlement: this.props.cluster.entitlement,
        }
      : { ...this.props.data }),
      (this.handleInputChange = this.handleInputChange.bind(this));
    this.handleSubnetChange = this.handleSubnetChange.bind(this);
    buildFormFunctions(this);
  }

  // Handle pool input change
  handleInputChange(event) {
    let { name, value } = event.target;
    let pool = { ...this.state };
    if (name === "workers_per_subnet") {
      pool[name] = Number(value);
    } else {
      pool[name] = value === "null" ? null : value;
    }
    this.setState(pool);
  }

  // Handle subnet multiselect change
  handleSubnetChange(event) {
    let pool = { ...this.state };
    pool.subnets = event;
    this.setState(pool);
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* name */}
          <IcseNameInput
            id={this.state.name + "-name"}
            componentName="Worker Pools"
            onChange={this.handleInputChange}
            componentProps={this.props}
            value={this.state.name}
            className="fieldWidthSmaller"
            placeholder="my-worker-pool-name"
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          {/* entitlement */}
          <EntitlementSelect
            name="entitlement"
            value={this.state.entitlement}
            handleInputChange={this.handleInputChange}
            component={this.props.data.name}
            formName="Worker Pools"
          />
          {/* flavor */}
          <FetchSelect
            name="flavor"
            formName={this.props.data.name + "flavor"}
            labelText="Instance Profile"
            value={this.state.flavor}
            apiEndpoint={this.props.flavorApiEndpoint}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* subnets */}
          <SubnetMultiSelect
            id={this.props.data.name}
            disabled={this.props.cluster.vpc === null}
            vpc_name={this.state.vpc}
            initialSelectedItems={this.state.subnets}
            subnets={this.getSubnetList()}
            onChange={this.handleSubnetChange}
            component={this.props.data.name}
            className="fieldWidthSmaller cds--form-item"
          />
          {/* Workers per Subnet */}
          <IcseNumberSelect
            name="workers_per_subnet"
            formName={this.props.data.name + "Worker Pools"}
            labelText="Workers Per Subnet"
            value={this.state.workers_per_subnet}
            max={10}
            min={0}
            handleInputChange={this.handleInputChange}
            component={this.props.data.name}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </>
    );
  }
}

WorkerPoolForm.defaultProps = {
  data: {
    entitlement: "",
    flavor: "",
    name: "",
    subnets: [],
    vpc: "",
    workers_per_subnet: 2,
  },
  isModal: false,
};

WorkerPoolForm.propTypes = {
  subnetList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired,
  cluster: PropTypes.shape({
    entitlement: PropTypes.string, // can be null
    flavor: PropTypes.string.isRequired,
    vpc: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired,
  }), // can be null
  data: PropTypes.shape({
    entitlement: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    subnets: PropTypes.array.isRequired,
  }).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default WorkerPoolForm;
