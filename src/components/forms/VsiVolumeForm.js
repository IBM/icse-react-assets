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
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
            hideHelperText
          />
          {/* Profile */}
          <IcseSelect
            component={this.state.name}
            formName={this.props.data.name + "-vsi-volume-profile"}
            name="profile"
            groups={["3iops-tier", "5iops-tier", "10iops-tier"]}
            value={this.state.profile}
            labelText="Profile"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {/* Encryption Key */}
          <IcseSelect
            component={this.state.name}
            formName={this.props.data.name + "-object-storage-bucket-key"}
            name="encryption_key"
            groups={
              this.props.encryptionKeyFilter
                ? this.props.encryptionKeyFilter(this.state, this.props)
                : this.props.encryptionKeys
            }
            value={this.state.encryption_key}
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
            className="fieldWidthSmaller leftTextAlign"
          />
        </IcseFormGroup>
      </>
    );
  }
}

VsiVolumeForm.defaultProps = {
  data: {
    name: "",
    profile: "general-purpose",
    encryption_key: "",
    capacity: "",
  },
  encryptionKeys: [],
};

VsiVolumeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile: PropTypes.string,
    encryption_key: PropTypes.string,
    capacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  encryptionKeyFilter: PropTypes.func,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default VsiVolumeForm;
