import React, { Component } from "react";
import { NumberInput } from "@carbon/react";
import { isRangeInvalid } from "../../lib/iam-utils";
import { IcseNameInput } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import { IcseFormGroup } from "../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";

class VsiVolumeForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIopsChange = this.handleIopsChange.bind(this);
  }

  /**
   * handle vsi volume iops change and convert to lowercase for value
   * @param {event} event event
   */
  handleIopsChange(event) {
    let iopsStateValue = event.target.value.split(" (");
    this.setState({ iops: iopsStateValue.toLowerCase() });
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* Name */}
          <IcseNameInput
            id={this.props.data.name + "-vsi-volume-name"}
            componentName={this.state.name}
            value={this.state.name}
            onChange={this.handleInputChange}
            helperTextCallback={() =>
              this.props.composedNameCallback(this.state, this.props)
            }
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          {/* Profile */}
          <IcseSelect
            component={this.state.name}
            formName={this.props.data.name + "-vsi-volume-profile"}
            name="profile"
            groups={["general-purpose", "5iops-tier", "10iops-tier", "custom"]}
            value={this.state.profile}
            labelText="Profile"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* Encryption Key */}
          <IcseSelect
            component={this.state.name}
            formName={this.props.data.name + "-object-storage-bucket-key"}
            name="kms_key"
            groups={
              this.props.encryptionKeyFilter
                ? this.props.encryptionKeyFilter(this.state, this.props)
                : this.props.encryptionKeys
            }
            value={this.state.kms_key}
            labelText="Encryption Key"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Capacity */}
          <NumberInput
            id={this.props.data.name + "vsi-volume-capacity"}
            name="capacity"
            label="Capacity (GB)"
            value={this.state.capacity || ""}
            onChange={this.handleInputChange}
            allowEmpty={true}
            step={1}
            hideSteppers={true}
            placeholder="100"
            min={10}
            max={16000}
            helperText="Enter a number between 10 and 16000 GB."
            invalid={isRangeInvalid(this.state.capacity, 10, 16000)}
            invalidText="Must be a whole number between 10 and 16000"
            className="fieldWidth leftTextAlign"
          />
          {/* Iops */}
          {this.state.profile === "custom" && (
            <NumberInput
              id={this.props.data.name + "vsi-volume-iops"}
              name="iops"
              label="IOPS"
              value={this.state.capacity || ""}
              onChange={this.handleInputChange}
              allowEmpty={true}
              step={1}
              hideSteppers={true}
              placeholder="100"
              min={100}
              max={48000}
              invalid={this.props.invalidIopsCallback(this.state, this.props)}
              invalidText={this.props.invalidIopsTextCallback(
                this.state,
                this.props
              )}
              className="fieldWidthSmaller"
            />
          )}
        </IcseFormGroup>
      </>
    );
  }
}

VsiVolumeForm.defaultProps = {
  data: {
    name: "",
    profile: "general-purpose",
    kms_key: "",
    capacity: 100,
    iops: 100,
  },
  encryptionKeys: [],
};

VsiVolumeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    kms_key: PropTypes.string,
    capacity: PropTypes.number,
    iops: PropTypes.number.isRequired, // can only be null if profile is not custom
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  encryptionKeyFilter: PropTypes.func,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidIopsCallback: PropTypes.func.isRequired,
  invalidIopsTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
};

export default VsiVolumeForm;
