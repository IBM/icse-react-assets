import React, { Component } from "react";
import { buildFormFunctions } from "../component-utils";
import { IcseNameInput } from "../Inputs";
import { EntitlementSelect, IcseSelect } from "../Dropdowns";
import { SubnetMultiSelect } from "../MultiSelects";
import { IcseFormGroup } from "../Utils";
import PropTypes from "prop-types";

class WorkerPoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pool: this.props.isModal
        ? {
            name: "",
            flavor: this.props.cluster.machine_type,
            subnet_names: this.props.cluster.subnet_names,
            vpc_name: this.props.cluster.vpc_name,
            workers_per_subnet: this.props.cluster.workers_per_subnet,
            entitlement: this.props.cluster.entitlement,
          }
        : this.props.data,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubnetChange = this.handleSubnetChange.bind(this);
    buildFormFunctions(this);
  }

  // Handle pool input change
  handleInputChange(event) {
    let { name, value } = event.target;
    let pool = { ...this.state.pool };
    if (name === "workers_per_subnet") {
      pool[name] = Number(value);
    } else {
      pool[name] = value === "null" ? null : value;
    }
    this.setState({ pool });
  }

  // Handle subnet multiselect change
  handleSubnetChange(event) {
    let pool = { ...this.state.pool };
    pool.subnet_names = event.selectedItems;
    this.setState({ pool });
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* name */}
          <IcseNameInput
            id={this.state.name + "-name"}
            componentName="Worker Pools"
            component={"worker-pools"}
            onChange={this.handleInputChange}
            componentProps={this.props}
            value={this.state.pool.name}
            className="fieldWidthSmaller"
            placeholder="my-worker-pool-name"
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          {/* entitlement */}
          <EntitlementSelect
            name="entitlement"
            value={this.state.pool.entitlement}
            handleInputChange={this.handleInputChange}
            component={this.props.data.name}
            formName="Worker Pools"
          />
          {/* flavor */}
          <IcseSelect
            formName="Worker Pools"
            name="flavor"
            labelText="Flavor Select"
            value={this.state.pool.flavor}
            groups={["bx2.16x64", "bx2.2x8"]}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* subnets */}
          <SubnetMultiSelect
            id={this.props.data.name}
            slz={this.props.slz}
            disabled={this.state.pool.vpc_name === null}
            vpc_name={this.state.pool.vpc_name}
            initialSelectedItems={this.state.pool.subnet_names}
            onChange={this.handleSubnetChange}
            component={this.props.data.name}
            className="fieldWidthSmaller cds--form-item"
          />
          {/* Workers per Subnet */}
          <IcseSelect
            name="workers_per_subnet"
            formName="Worker Pools"
            labelText="Workers Per Subnet"
            value={this.state.pool.workers_per_subnet}
            groups={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
    flavor: "bx2.16x64",
    name: "",
    subnet_names: [],
    vpc_name: "",
    workers_per_subnet: 2,
  },
  isModal: false,
};

WorkerPoolForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  cluster: PropTypes.shape({
    cos_name: PropTypes.string.isRequired,
    entitlement: PropTypes.string, // can be null
    kube_type: PropTypes.string.isRequired,
    kube_version: PropTypes.string.isRequired,
    machine_type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    kms_config: PropTypes.shape({ crk_name: PropTypes.string.isRequired })
      .isRequired,
    subnet_names: PropTypes.array.isRequired,
    update_all_workers: PropTypes.bool.isRequired,
    vpc_name: PropTypes.string.isRequired,
    worker_pools: PropTypes.array.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
  }), // can be null
  data: PropTypes.shape({
    entitlement: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subnet_names: PropTypes.array.isRequired,
    vpc_name: PropTypes.string.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
  }).isRequired,
};

export default WorkerPoolForm;
