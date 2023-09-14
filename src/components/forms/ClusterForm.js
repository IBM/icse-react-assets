import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { handleClusterInputChange, filterKubeVersion } from "../../lib";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import {
  IcseSelect,
  IcseNumberSelect,
  EntitlementSelect,
  FetchSelect,
} from "../Dropdowns";
import { SubnetMultiSelect } from "../MultiSelects";
import PropTypes from "prop-types";
import { WorkerPools } from "../crud-form-pages";
import { OpaqueIngressSecret } from "../crud-form-pages/OpaqueIngressSecret";

class ClusterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    if (this.props.isModal) this.state.worker_pools = [];
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.filterVersion = this.filterVersion.bind(this);
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
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle subnet multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({ [name]: event });
  }

  /**
   * filter function for kube version select
   * @param {string} version
   * @returns {string} version
   */
  filterVersion(version) {
    return filterKubeVersion(version, this.state.kube_type);
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
            formName={clusterComponent + "resource_group"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidthSmaller"
          />

          {/* kube type */}
          <IcseSelect
            name="kube_type"
            formName={clusterComponent + "kube_type"}
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
          {/* Machine Type */}
          <FetchSelect
            name="flavor"
            formName={clusterComponent + "flavor"}
            labelText="Instance Profile"
            value={this.state.flavor}
            apiEndpoint={this.props.flavorApiEndpoint}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* cos and entitlement */}
          {this.state.kube_type === "openshift" && (
            <>
              <IcseSelect
                name="cos"
                formName={clusterComponent + "cos"}
                labelText="Cloud Object Storage Instance"
                groups={this.props.cosNames}
                value={this.state.cos}
                handleInputChange={this.handleInputChange}
                invalidText="Select an Object Storage instance"
                className="fieldWidthSmaller"
              />
              <EntitlementSelect
                name="entitlement"
                formName={clusterComponent + "entitlement"}
                labelText="Entitlement"
                value={this.state.entitlement}
                handleInputChange={this.handleInputChange}
                className="fieldWidthSmaller"
              />
            </>
          )}
        </IcseFormGroup>
        <IcseFormGroup>
          {/* vpc */}
          <IcseSelect
            id={clusterComponent + "-vpc-name"}
            name="vpc"
            formName={clusterComponent + "vpc"}
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* subnets */}
          <SubnetMultiSelect
            id={clusterComponent}
            key={this.state.vpc}
            vpc_name={this.state.vpc}
            subnets={[...this.getSubnetList()]}
            initialSelectedItems={[...this.state.subnets]}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            className="fieldWidthSmaller"
          />
          {/* Workers per Subnet */}
          <IcseNumberSelect
            max={10}
            name="workers_per_subnet"
            formName={clusterComponent + "workers_per_subnet"}
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
          {/* Kube Version */}
          <FetchSelect
            name="kube_version"
            formName={clusterComponent + "kube_version"}
            labelText="Kube Version"
            value={this.state.kube_version || ""}
            apiEndpoint={this.props.kubeVersionApiEndpoint}
            filter={this.filterVersion}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* Update All Workers */}
          <IcseToggle
            id={clusterComponent + "-update-all"}
            labelText="Update All Workers"
            toggleFieldName="update_all_workers"
            defaultToggled={this.state.update_all_workers}
            onToggle={this.handleToggle}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* encryption key */}
          <IcseSelect
            name="encryption_key"
            formName={clusterComponent + "encryption_key"}
            labelText="Encryption Key"
            groups={this.props.encryptionKeys}
            value={this.state.encryption_key}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* service endpoint */}
          <IcseToggle
            id={clusterComponent + "-service-endpoint"}
            tooltip={{
              content: "Use private service endpoint for Encryption Key",
            }}
            labelText="Private Endpoint"
            toggleFieldName="private_endpoint"
            defaultToggled={this.state.private_endpoint}
            onToggle={this.handleToggle}
          />
        </IcseFormGroup>
        <WorkerPools
          worker_pools={this.props.data.worker_pools}
          disableSave={this.props.workerPoolProps.disableSave}
          onDelete={this.props.workerPoolProps.onDelete}
          onSave={this.props.workerPoolProps.onSave}
          onSubmit={this.props.workerPoolProps.onSubmit}
          propsMatchState={this.props.propsMatchState}
          cluster={this.props.data}
          invalidCallback={this.props.invalidPoolCallback}
          invalidTextCallback={this.props.invalidPoolTextCallback}
          subnetList={this.props.subnetList}
          craig={this.props.craig}
          flavorApiEndpoint={this.props.flavorApiEndpoint}
          isModal={this.props.isModal}
        />
        <OpaqueIngressSecret
          cluster={this.props.data}
          noSecretsManager={this.props.noSecretsManager}
          opaque_secrets={this.props.data.opaque_secrets}
          disableSave={this.props.opaqueIngressSecretProps.disableSave}
          onDelete={this.props.opaqueIngressSecretProps.onDelete}
          onSave={this.props.opaqueIngressSecretProps.onSave}
          onSubmit={this.props.opaqueIngressSecretProps.onSubmit}
          propsMatchState={this.props.propsMatchState}
          secretsManagerList={this.props.secretsManagerList}
          secretsManagerGroupCallback={this.props.secretsManagerGroupCallback}
          secretsManagerGroupCallbackText={
            this.props.secretsManagerGroupCallbackText
          }
          secretCallback={this.props.secretCallback}
          secretCallbackText={this.props.secretCallbackText}
          arbSecretCallback={this.props.arbSecretCallback}
          arbSecretCallbackText={this.props.arbSecretCallbackText}
          userPassSecretCallback={this.props.userPassSecretCallback}
          userPassSecretCallbackText={this.props.userPassSecretCallbackText}
          descriptionInvalid={this.props.descriptionInvalid}
          descriptionInvalidText={this.props.descriptionInvalidText}
          labelsInvalid={this.props.labelsInvalid}
          labelsInvalidText={this.props.labelsInvalidText}
          craig={this.props.craig}
          isModal={this.props.isModal}
        />
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
    encryption_key: null,
    cos: "",
    vpc: "",
    subnets: [],
    workers_per_subnet: 2,
    flavor: "",
    kube_version: "",
    update_all_workers: false,
    worker_pools: [],
    opaque_secrets: [],
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
    encryption_key: PropTypes.string,
    cos: PropTypes.string.isRequired,
    subnets: PropTypes.array.isRequired,
    workers_per_subnet: PropTypes.number.isRequired,
    vpc: PropTypes.string,
    kube_version: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    update_all_workers: PropTypes.bool.isRequired,
    worker_pools: PropTypes.array.isRequired,
    opaque_secrets: PropTypes.array.isRequired,
  }),
  /* bools */
  isModal: PropTypes.bool.isRequired,
  noSecretsManager: PropTypes.bool,
  /* lists */
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  secretsManagerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  /* api endpoints */
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  invalidPoolCallback: PropTypes.func,
  invalidPoolTextCallback: PropTypes.func,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  arbSecretCallback: PropTypes.func,
  arbSecretCallbackText: PropTypes.func,
  userPassSecretCallback: PropTypes.func,
  userPassSecretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.func,
  /* forms */
  workerPoolProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
  }).isRequired,
  opaqueIngressSecretProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
  }).isRequired,
};

export default ClusterForm;
