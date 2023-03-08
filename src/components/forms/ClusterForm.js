import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { handleClusterInputChange } from "../../lib";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseHeading, IcseFormGroup, RenderForm } from "../Utils";
import {
  IcseSelect,
  IcseNumberSelect,
  EntitlementSelect,
  FetchSelect,
} from "../Dropdowns";
import { SubnetMultiSelect } from "../MultiSelects";
import PropTypes from "prop-types";

class ClusterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggleChange = this.handleToggleChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  // Handle cluster input change
  handleInputChange = (event) => {
    let { name, value } = event.target;
    let cluster = { ...this.state };
    this.setState(handleClusterInputChange(name, value, cluster));
  };

  /**
   * handle toggle change
   * @param {*} event event
   */
  handleToggleChange = () => {
    let cluster = { ...this.state };
    cluster.update_all_workers = !cluster.update_all_workers;
    this.setState(cluster);
  };

  /**
   * handle subnet multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({ [name]: event });
  }

  render() {
    let clusterComponent = this.props.isModal
      ? "new-cluster"
      : this.props.data.name;
    return (
      <>
        <IcseFormGroup>
          {/* cluster name */}
          <IcseNameInput
            id={this.state.name + "-name"}
            labelText="Cluster Name"
            componentName={clusterComponent}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
            className="fieldWidthSmaller"
          />

          {/* resource group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName="resource_group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidthSmaller"
          />

          {/* kube type */}
          <IcseSelect
            name="kube_type"
            formName="kube_type"
            labelText="Kube Type"
            groups={["OpenShift", "IBM Kubernetes Service"]}
            handleInputChange={this.handleInputChange}
            invalidText="Select a cluster type."
            value={
              this.state.kube_type === ""
                ? ""
                : this.state.kube_type === "openshift"
                ? "OpenShift"
                : "IBM Kubernetes Service"
            }
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* entitlement */}
          <EntitlementSelect
            name="entitlement"
            formName="entitlement"
            labelText="Entitlement"
            value={this.state.entitlement}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />

          {/* encryption key */}
          <IcseSelect
            name="kms_config"
            formName="kms_config"
            labelText="Encryption Key"
            groups={this.props.encryptionKeys}
            value={this.state.kms_config.crk_name}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />

          {/* cos */}
          {this.state.kube_type === "openshift" && (
            <IcseSelect
              name="cos_name"
              formName="cos_name"
              labelText="Cloud Object Storage Instance"
              groups={this.props.cosNames}
              value={this.state.cos_name}
              handleInputChange={this.handleInputChange}
              invalidText="Select an Object Storage instance"
              className="fieldWidthSmaller"
            />
          )}
        </IcseFormGroup>
        <IcseFormGroup>
          {/* vpc */}
          <IcseSelect
            id={clusterComponent + "-vpc-name"}
            name="vpc_name"
            formName="vpc_name"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc_name}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* subnets */}
          <SubnetMultiSelect
            id={clusterComponent}
            key={this.state.vpc_name}
            vpc_name={this.state.vpc_name}
            subnets={this.props.subnetList}
            initialSelectedItems={this.state.subnets}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            className="fieldWidthSmaller"
          />
          {/* Workers per Subnet */}
          <IcseNumberSelect
            max={10}
            name="workers_per_subnet"
            formName="workers_per_subnet"
            labelText="Workers per Subnet"
            value={this.state.workers_per_subnet}
            handleInputChange={this.handleInputChange}
            isModal={this.props.isModal}
            className="fieldWidthSmaller"
            invalid={
              this.state.kube_type === "openshift" &&
              this.state.subnets.length * this.state.workers_per_subnet < 2
            }
            invalidText="OpenShift clusters require at least 2 worker nodes across any number of subnets"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Machine Type */}
          <FetchSelect
            name="machine_type"
            formName="machine_type"
            labelText="Instance Profile"
            value={this.state.machine_type}
            apiEndpoint={this.props.flavorApiEndpoint}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* Kube Version */}
          <FetchSelect
            name="kube_version"
            formName="kube_version"
            labelText="Kube Version"
            value={this.state.kube_version}
            apiEndpoint={this.props.kubeVersionApiEndpoint}
            filter={(version) => {
              if (
                (this.state.kube_type === "openshift" &&
                  version.indexOf("openshift") !== -1) || // is openshift and contains openshift
                (this.state.kube_type !== "openshift" &&
                  version.indexOf("openshift") === -1) || // is not openshift and does not contain openshift
                version === "default" // or is default
              ) {
                return version.replace(/\s\(Default\)/g, ""); // replace default with empty string
              }
            }}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* Update All Workers */}
          <IcseToggle
            id={clusterComponent + "-update-all"}
            labelText="Update All Workers"
            toggleFieldName="update_all_workers"
            defaultToggled={this.state.update_all_workers}
            onToggle={this.handleToggleChange}
          />
        </IcseFormGroup>
        <>
          <IcseHeading
            name="Worker Pools"
            type="subHeading"
            className="marginBottomSmall"
            noLabelText
            noDeleteButton
          />
          {RenderForm(this.props.workerPoolForms, {
            cluster: this.props.data,
            subnetList: this.props.subnetList,
            invalidCallback: this.props.invalidWorkerPoolsCallback,
            invalidTextCallback: this.props.invalidWorkerPoolsTextCallback,
          })}
        </>
      </>
    );
  }
}

ClusterForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    kube_type: "openshift",
    entitlement: "null",
    kms_config: { crk_name: "" },
    cos_name: "",
    vpc_name: "",
    subnets: [],
    workers_per_subnet: 2,
    machine_type: "",
    kube_version: "default",
    update_all_workers: false,
    worker_pools: [],
  },
  resourceGroups: [],
  encryptionKeys: [],
  cosNames: [],
  vpcList: [],
  subnetList: [],
  isModal: false,
};

ClusterForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    kube_type: PropTypes.string.isRequired,
    entitlement: PropTypes.string, // can be null
    // crk name can now be null to allow for imported clusters to not have key
    kms_config: PropTypes.shape({ crk_name: PropTypes.string }).isRequired,
    cos_name: PropTypes.string.isRequired,
    subnets: PropTypes.array.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    vpc_name: PropTypes.string.isRequired,
    kube_version: PropTypes.string.isRequired,
    machine_type: PropTypes.string.isRequired,
    update_all_workers: PropTypes.bool.isRequired,
    worker_pools: PropTypes.array.isRequired,
  }),
  /* bools */
  isModal: PropTypes.bool.isRequired,
  /* lists */
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* api endpoints */
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  /* forms */
  workerPoolForms: PropTypes.func,
};

export default ClusterForm;
