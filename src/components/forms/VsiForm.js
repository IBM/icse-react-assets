import React, { Component } from "react";
import { TextArea, NumberInput } from "@carbon/react";
import { IcseFormGroup, DynamicRender } from "../Utils";
import { IcseToggle, IcseNameInput } from "../Inputs";
<<<<<<< HEAD
<<<<<<< HEAD
import { FetchSelect, IcseSelect } from "../Dropdowns";
=======
import { IcseSelect } from "../Dropdowns";
>>>>>>> a8d076e (merge)
=======
import { FetchSelect, IcseSelect } from "../Dropdowns";
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
<<<<<<< HEAD
<<<<<<< HEAD
      [name]: name === "vsi_per_subnet" && value !== "" ? Number(value) : value,
=======
      [name]: name === "vsi_per_subnet" ? Number(value) : value,
>>>>>>> a8d076e (merge)
=======
      [name]: name === "vsi_per_subnet" && value !== "" ? Number(value) : value,
>>>>>>> 0537c69 (fix: vsi_per_subnet)
    };
    if (name === "vpc_name")
      transpose({ subnet_names: [], subnet_name: "" }, stateChangeParams);

    this.setState(stateChangeParams);
  }

  handleMultiSelectChange(name, value) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log(name, value);
>>>>>>> a8d076e (merge)
=======
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
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
<<<<<<< HEAD
<<<<<<< HEAD
              initialSelectedItems={this.state.subnet_names}
              vpc_name={this.state.vpc_name}
              subnets={this.props.subnetList}
=======
              subnets={this.props.subnetList}
              vpc_name={this.state.vpc_name}
>>>>>>> a8d076e (merge)
=======
              initialSelectedItems={this.state.subnet_names}
              vpc_name={this.state.vpc_name}
              subnets={this.props.subnetList}
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
<<<<<<< HEAD
<<<<<<< HEAD
            defaultValue={1}
=======
>>>>>>> a8d076e (merge)
=======
            defaultValue={1}
>>>>>>> 1799f4e (simplify example)
            max={10}
            min={1}
            onChange={this.handleInputChange}
            name="vsi_per_subnet"
            hideSteppers={true}
            invalidText="Please input a number 1-10"
<<<<<<< HEAD
            className="fieldWidth leftTextAlign"
=======
            className="fieldWidthSmaller leftTextAlign"
>>>>>>> a8d076e (merge)
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
          <IcseSelect
=======
          <FetchSelect
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
<<<<<<< HEAD
<<<<<<< HEAD
            invalid={this.invalidCallback}
            invalidText={this.invalidTextCallback}
>>>>>>> a8d076e (merge)
=======
            invalid={this.props.invalidCallback(this.state)}
            invalidText="Select a valid flavor."
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
=======
            value={this.state.machine_type}
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
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
<<<<<<< HEAD
<<<<<<< HEAD
            invalid={this.props.invalidCallback(this.state)}
            invalidText="Select a valid encryption key."
=======
            invalid={this.invalidCallback}
            invalidText={this.invalidTextCallback}
>>>>>>> a8d076e (merge)
=======
            invalid={this.props.invalidCallback(this.state)}
            invalidText="Select a valid encryption key."
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
          />
          <IcseToggle
            id={composedId + "-fips-toggle"}
            labelText="Enable Floating IP"
            defaultToggled={this.state.enable_floating_ip}
            onToggle={this.handleToggle}
          />
        </IcseFormGroup>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> a8d076e (merge)
=======
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
        {/* cloud init data, show if not f5 or teleport */}
        <DynamicRender
          hide={this.props.isTeleport}
          show={
            <IcseFormGroup>
              <TextArea
                id={composedId + "-vsi-user-data"}
<<<<<<< HEAD
<<<<<<< HEAD
=======
                invalidText="Invalid error message."
>>>>>>> a8d076e (merge)
=======
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
                placeholder="Cloud init data"
                labelText="User Data"
                name="user_data"
                value={this.state.user_data || ""}
                onChange={this.handleInputChange}
<<<<<<< HEAD
<<<<<<< HEAD
                invalidText="Invalid error message."
=======
>>>>>>> a8d076e (merge)
=======
                invalidText="Invalid error message."
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
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
<<<<<<< HEAD
<<<<<<< HEAD
    resource_group: "",
    boot_volume_encryption_key_name: "",
    vsi_per_subnet: 1,
<<<<<<< HEAD
=======
>>>>>>> a8d076e (merge)
=======
    resource_group: "",
    boot_volume_encryption_key_name: "",
<<<<<<< HEAD
    vsi_per_subnet: 0,
>>>>>>> 32b7a0b (fix: vsi form props and update readme)
=======
    vsi_per_subnet: "1",
>>>>>>> 0537c69 (fix: vsi_per_subnet)
=======
>>>>>>> 1799f4e (simplify example)
  },
  isModal: false,
  isTeleport: false,
  resourceGroupList: [],
  vpcList: [],
  subnetList: [],
  sshKeyList: [],
  encryptionKeyList: [],
<<<<<<< HEAD
<<<<<<< HEAD
  apiEndpointImages: "",
  apiEndpointFlavors: "",
=======
  imageList: [],
  flavorList: [],
>>>>>>> a8d076e (merge)
=======
  apiEndpointImages: "",
  apiEndpointFlavors: "",
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
};

VsiForm.propTypes = {
  data: PropTypes.shape({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    name: PropTypes.string,
=======
    name: PropTypes.string.isRequired,
>>>>>>> 32b7a0b (fix: vsi form props and update readme)
=======
    name: PropTypes.string,
>>>>>>> 1799f4e (simplify example)
    ssh_keys: PropTypes.array,
    subnet_name: PropTypes.string,
    subnet_names: PropTypes.array,
    enable_floating_ip: PropTypes.bool,
    vpc_name: PropTypes.string,
    image_name: PropTypes.string,
    machine_type: PropTypes.string,
    resource_group: PropTypes.string,
    boot_volume_encryption_key_name: PropTypes.string,
<<<<<<< HEAD
<<<<<<< HEAD
    vsi_per_subnet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
=======
    vsi_per_subnet: PropTypes.number,
>>>>>>> 32b7a0b (fix: vsi form props and update readme)
=======
    vsi_per_subnet: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
>>>>>>> 0537c69 (fix: vsi_per_subnet)
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  isTeleport: PropTypes.bool.isRequired,
  /* lists */
=======
    name: PropTypes.string.isRequired,
  }).isRequired,
  /* bools */
  isModal: PropTypes.bool.isRequired,
  isTeleport: PropTypes.bool.isRequired,
<<<<<<< HEAD
>>>>>>> a8d076e (merge)
=======
  /* lists */
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
  resourceGroupList: PropTypes.array.isRequired,
  vpcList: PropTypes.array.isRequired,
  subnetList: PropTypes.array.isRequired,
  sshKeyList: PropTypes.array.isRequired,
  encryptionKeyList: PropTypes.array.isRequired,
<<<<<<< HEAD
<<<<<<< HEAD
  /* api endpoints */
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointFlavors: PropTypes.string.isRequired,
  /* callbacks */
=======
  imageList: PropTypes.array.isRequired,
  flavorList: PropTypes.array.isRequired,
<<<<<<< HEAD
>>>>>>> a8d076e (merge)
=======
=======
  /* api endpoints */
  apiEndpointImages: PropTypes.string.isRequired,
  apiEndpointFlavors: PropTypes.string.isRequired,
>>>>>>> 4f1bde6 (add fetch selects for flavor and image, update readme and example)
  /* callbacks */
>>>>>>> 71b28a3 (cleanup invalid text and remove log)
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default VsiForm;
