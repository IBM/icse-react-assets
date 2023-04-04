import React, { Component } from "react";
import { NumberInput, TextArea } from "@carbon/react";
import { transpose } from "lazy-z";
import PropTypes from "prop-types";
import { checkNullorEmptyString } from "../../lib";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { FetchSelect, IcseSelect } from "../Dropdowns";
import { IcseNameInput, IcseToggle } from "../Inputs";
import {
  SecurityGroupMultiSelect,
  SshKeyMultiSelect,
  SubnetMultiSelect,
} from "../MultiSelects";
import { DynamicRender, IcseFormGroup } from "../Utils";

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
    if (name === "vpc")
      // Clear subnets and security groups when vpc changes
      transpose(
        { subnets: [], subnet: "", security_groups: [] },
        stateChangeParams
      );

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
    let classNameModalCheck = this.props.isModal
      ? "fieldWidthSmaller"
      : "fieldWidth";
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId}
            className={classNameModalCheck}
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
            className={classNameModalCheck}
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="vsi_form"
            name="vpc"
            className={classNameModalCheck}
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
          />
          {/* subnets */}
          {this.props.isTeleport ? (
            // render dropdown for teleport instance
            <IcseSelect
              formName="vsi_form"
              name="subnet"
              className={classNameModalCheck}
              labelText="Subnet"
              groups={this.getSubnetList()}
              value={this.state.subnet}
              handleInputChange={this.handleInputChange}
              invalid={
                checkNullorEmptyString(this.state.vpc) ||
                checkNullorEmptyString(this.state.subnet)
              }
              invalidText={
                checkNullorEmptyString(this.state.vpc)
                  ? `No VPC Selected.`
                  : `Select a Subnet.`
              }
            />
          ) : (
            <SubnetMultiSelect
              key={this.state.vpc + "-subnet"}
              id="vsi-subnets"
              className={classNameModalCheck}
              initialSelectedItems={this.state.subnets}
              vpc_name={this.state.vpc}
              subnets={this.getSubnetList()}
              onChange={(value) =>
                this.handleMultiSelectChange("subnets", value)
              }
            />
          )}
          <SecurityGroupMultiSelect
            key={this.state.vpc + "-sg"}
            id="vsi-security-groups"
            className={classNameModalCheck}
            initialSelectedItems={this.state.security_groups || []}
            vpc_name={this.state.vpc}
            onChange={(value) =>
              this.handleMultiSelectChange("security_groups", value)
            }
            securityGroups={this.getSecurityGroupList()}
            invalid={!(this.state.security_groups?.length > 0)}
            invalidText={
              !this.state.vpc || checkNullorEmptyString(this.state.vpc)
                ? `Select a VPC.`
                : `Select at least one security group.`
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <NumberInput
            label="Instances per Subnet"
            id={composedId + "-vsi-per-subnet"}
            allowEmpty={false}
            value={this.state.vsi_per_subnet}
            defaultValue={1}
            max={10}
            min={1}
            onChange={this.handleInputChange}
            name="vsi_per_subnet"
            hideSteppers={true}
            invalidText="Please input a number 1-10"
            className={`${classNameModalCheck} leftTextAlign`}
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Image"
            name="image"
            className={classNameModalCheck}
            apiEndpoint={this.props.apiEndpointImages}
            handleInputChange={this.handleInputChange}
            value={this.state.image}
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Profile"
            name="profile"
            className={classNameModalCheck}
            apiEndpoint={this.props.apiEndpointInstanceProfiles}
            handleInputChange={this.handleInputChange}
            value={this.state.profile}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <SshKeyMultiSelect
            id="sshkey"
            className={classNameModalCheck}
            sshKeys={this.props.sshKeys}
            initialSelectedItems={this.state.ssh_keys || []}
            onChange={(value) =>
              this.handleMultiSelectChange("ssh_keys", value)
            }
          />
          <IcseSelect
            formName="vsi_form"
            name="encryption_key"
            className={classNameModalCheck}
            labelText="Encryption Key"
            groups={this.props.encryptionKeys}
            value={this.state.encryption_key}
            handleInputChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state)}
            invalidText="Select a valid encryption key."
          />
          <IcseToggle
            id={composedId + "-fips-toggle"}
            className={classNameModalCheck}
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
                className={`${classNameModalCheck} fieldWidthBigger`}
                placeholder="Cloud init data"
                labelText="User Data"
                name="user_data"
                value={this.state.user_data || ""}
                onChange={this.handleInputChange}
                invalidText="Invalid error message."
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
    resource_group: "",
    vpc: "",
    subnet: "",
    subnets: [],
    ssh_keys: [],
    security_groups: [],
    vsi_per_subnet: 1,
    encryption_key: "",
    image: "",
    profile: "",
    enable_floating_ip: false,
  },
  isModal: false,
  isTeleport: false,
  encryptionKeys: [],
  resourceGroups: [],
  securityGroups: [],
  sshKeys: [],
  subnetList: [],
  vpcList: [],
  apiEndpointImages: "",
  apiEndpointInstanceProfiles: "",
};

VsiForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    vpc: PropTypes.string,
    subnet: PropTypes.string,
    subnets: PropTypes.array,
    security_groups: PropTypes.array,
    vsi_per_subnet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.string,
    profile: PropTypes.string,
    ssh_keys: PropTypes.array,
    encryption_key: PropTypes.string,
    enable_floating_ip: PropTypes.bool,
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  isTeleport: PropTypes.bool.isRequired,
  /* lists */
  encryptionKeys: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  securityGroups: PropTypes.array.isRequired,
  sshKeys: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  /* api endpoints */
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  /* callbacks */
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default VsiForm;
