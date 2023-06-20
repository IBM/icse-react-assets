import React, { Component } from "react";
import { NumberInput, TextArea } from "@carbon/react";
import { isNullOrEmptyString, transpose } from "lazy-z";
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
import IcseFormTemplate from "../IcseFormTemplate";
import VsiVolumeForm from "./VsiVolumeForm";

class VsiForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
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
      this.props.isTeleport
        ? transpose({ subnet: "", security_groups: [] }, stateChangeParams)
        : transpose({ subnets: [], security_groups: [] }, stateChangeParams);
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
    let volumeProps = {
      invalidCallback: this.props.invalidVsiVolumeCallback,
      invalidTextCallback: this.props.invalidVsiVolumeTextCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name,
    };
    transpose({ ...this.props.vsiVolumeProps }, volumeProps);
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId}
            className="fieldWidthSmaller"
            componentName={"vsi"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText
          />
          <IcseSelect
            formName="vsi_form"
            name="resource_group"
            className="fieldWidthSmaller"
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
            className="fieldWidthSmaller"
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
              className="fieldWidthSmaller"
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
              className="fieldWidthSmaller"
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
            className="fieldWidthSmaller"
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
            className="fieldWidthSmaller leftTextAlign"
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Image"
            name="image_name"
            className="fieldWidthSmaller"
            apiEndpoint={this.props.apiEndpointImages}
            handleInputChange={this.handleInputChange}
            value={this.state.image_name}
          />
          <FetchSelect
            formName="vsi_form"
            labelText="Profile"
            name="profile"
            className="fieldWidthSmaller"
            apiEndpoint={this.props.apiEndpointInstanceProfiles}
            handleInputChange={this.handleInputChange}
            value={this.state.profile}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <SshKeyMultiSelect
            id="sshkey"
            className="fieldWidthSmaller"
            sshKeys={this.props.sshKeys}
            initialSelectedItems={this.state.ssh_keys || []}
            onChange={(value) =>
              this.handleMultiSelectChange("ssh_keys", value)
            }
          />
          <IcseSelect
            formName="vsi_form"
            name="encryption_key"
            className="fieldWidthSmaller"
            labelText="Encryption Key"
            groups={this.props.encryptionKeys}
            value={this.state.encryption_key}
            handleInputChange={this.handleInputChange}
            invalid={isNullOrEmptyString(this.state.encryption_key)}
            invalidText="Select a valid encryption key."
          />
          <IcseToggle
            id={composedId + "-fips-toggle"}
            className="fieldWidthSmaller"
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
                className={
                  this.props.isModal ? "textInputWide" : "fieldWidthBigger"
                }
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
        {/* show vsi volumes if not modal */}
        {this.props.isModal !== true && (
          <>
            <IcseFormTemplate
              name="Block Storage"
              subHeading
              addText="Create a Block Storage Volume"
              arrayData={this.props.data.volumes}
              innerForm={VsiVolumeForm}
              disableSave={this.props.vsiVolumeProps.disableSave}
              onDelete={this.props.vsiVolumeProps.onDelete}
              onSave={this.props.vsiVolumeProps.onSave}
              onSubmit={this.props.vsiVolumeProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...volumeProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "volumes",
                disableSave: this.props.vsiVolumeProps.disableSave,
                type: "formInSubForm",
              }}
            />
          </>
        )}
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
    image_name: "",
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
    image_name: PropTypes.string,
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
  /* forms */
  vsiVolumeProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    encryptionKeys: PropTypes.array.isRequired,
  }).isRequired,
};

export default VsiForm;
