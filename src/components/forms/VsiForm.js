import React, { Component } from "react";
import { TextArea, NumberInput } from "@carbon/react";
import { IcseFormGroup, DynamicRender } from "../Utils";
import { IcseToggle, IcseNameInput } from "../Inputs";
import { FetchSelect, IcseSelect } from "../Dropdowns";
import { SshKeyMultiSelect, SubnetMultiSelect } from "../MultiSelects";
import { checkNullorEmptyString } from "../../lib";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { transpose } from "lazy-z";
import PropTypes from "prop-types";
import "../styles/Utils.css";

class VsiForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  handleInputChange(event) {
    let { name, value } = event.target;

    let stateChangeParams = {
      [name]: name === "vsi_per_subnet" && value !== "" ? Number(value) : value,
    };
    if (name === "vpc_name")
      transpose({ subnet_names: [], subnet_name: "" }, stateChangeParams);

    this.setState(stateChangeParams);
  }

  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }

  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  render() {
    let composedId = `vsi-deployment-form-${this.props.data.name}`;
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId}
            componentName={"vsi"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state)}
            invalidText={this.props.invalidTextCallback(this.state)}
            hideHelperText
          />
          <IcseSelect
            formName="vsi_form"
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroupList}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="vsi_form"
            name="vpc_name"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc_name}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.vpc_name)}
            invalidText="Select a VPC."
          />
          {/* subnets */}
          {this.props.isTeleport ? (
            // render dropdown for teleport instance
            <IcseSelect
              formName="vsi_form"
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
            />
          ) : (
            <SubnetMultiSelect
              id="subnet"
              initialSelectedItems={this.state.subnet_names}
              vpc_name={this.state.vpc_name}
              subnets={this.props.subnetList}
              onChange={(value) =>
                this.handleMultiSelectChange("subnet_names", value)
              }
            />
          )}
          <NumberInput
            label="Instances per Subnet"
            id={composedId + "-vsi-per-subnet"}
            allowEmpty={false}
            value={this.state.vsi_per_subnet}
            max={10}
            min={1}
            onChange={this.handleInputChange}
            name="vsi_per_subnet"
            hideSteppers={true}
            invalidText="Please input a number 1-10"
            className="fieldWidthSmaller leftTextAlign"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <SshKeyMultiSelect
            id="sshkey"
            sshKeys={this.props.sshKeyList}
            onChange={(value) =>
              this.handleMultiSelectChange("ssh_keys", value)
            }
            initialSelectedItems={this.state.ssh_keys}
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Image"
            name="image_name"
            apiEndpoint={this.props.apiEndpointImages}
            handleInputChange={this.handleInputChange}
            value={this.state.image_name}
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Flavor"
            name="machine_type"
            apiEndpoint={this.props.apiEndpointFlavors}
            handleInputChange={this.handleInputChange}
            value={this.state.machine_type}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="vsi_form"
            name="boot_volume_encryption_key_name"
            labelText="Encryption Key"
            groups={this.props.encryptionKeyList}
            value={this.state.boot_volume_encryption_key_name}
            handleInputChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state)}
            invalidText="Select a valid encryption key."
          />
          <IcseToggle
            id={composedId + "-fips-toggle"}
            labelText="Enable Floating IP"
            defaultToggled={this.state.enable_floating_ip}
            onToggle={this.handleToggle}
          />
        </IcseFormGroup>
        {/* cloud init data, show if not f5 or teleport */}
        <DynamicRender
          hide={this.props.isTeleport}
          show={
            <IcseFormGroup>
              <TextArea
                id={composedId + "-vsi-user-data"}
                placeholder="Cloud init data"
                labelText="User Data"
                name="user_data"
                value={this.state.user_data || ""}
                onChange={this.handleInputChange}
                invalidText="Invalid error message."
                className="fieldWidthBigger"
              />
            </IcseFormGroup>
          }
        />
      </>
    );
  }
}

VsiForm.defaultProps = {
  data: {
    name: "",
    ssh_keys: [],
    subnet_name: "",
    subnet_names: [],
    enable_floating_ip: false,
    vpc_name: "",
    image_name: "",
    machine_type: "",
    resource_group: "",
    boot_volume_encryption_key_name: "",
    vsi_per_subnet: "1",
  },
  isModal: false,
  isTeleport: false,
  resourceGroupList: [],
  vpcList: [],
  subnetList: [],
  sshKeyList: [],
  encryptionKeyList: [],
  apiEndpointImages: "",
  apiEndpointFlavors: "",
};

VsiForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ssh_keys: PropTypes.array,
    subnet_name: PropTypes.string,
    subnet_names: PropTypes.array,
    enable_floating_ip: PropTypes.bool,
    vpc_name: PropTypes.string,
    image_name: PropTypes.string,
    machine_type: PropTypes.string,
    resource_group: PropTypes.string,
    boot_volume_encryption_key_name: PropTypes.string,
    vsi_per_subnet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  isTeleport: PropTypes.bool.isRequired,
  /* lists */
  resourceGroupList: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  sshKeyList: PropTypes.array.isRequired,
  encryptionKeyList: PropTypes.array.isRequired,
  /* api endpoints */
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointFlavors: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default VsiForm;
