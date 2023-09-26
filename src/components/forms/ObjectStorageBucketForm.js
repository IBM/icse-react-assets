import React, { Component } from "react";
import { capitalize, isEmpty } from "lazy-z";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import { IcseFormGroup } from "../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";

class ObjectStorageBucketForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStorageClassChange = this.handleStorageClassChange.bind(this);
  }

  /**
   * Handler for toggle
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("force_delete", this.state));
  }

  /**
   * handle storage class change and convert to lowercase for value
   * @param {event} event event
   */
  handleStorageClassChange(event) {
    this.setState({ storage_class: event.target.value.toLowerCase() });
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    // composed id for bucket
    let composedId = `bucket-form-${
      this.props.data.name ? this.props.data.name : "new-bucket"
    }`;
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId + "-name"}
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
          <IcseSelect
            id={composedId + "-class"}
            formName={this.props.data.name + "-object-storage-bucket-class"}
            name="storage_class"
            groups={["Standard", "Vault", "Cold", "Smart"]}
            value={capitalize(this.state.storage_class)}
            labelText="Bucket Class"
            handleInputChange={this.handleStorageClassChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-key"}
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
            invalidText={
              isEmpty(this.props.encryptionKeys)
                ? "Select a KMS Instance."
                : "Select an Encryption Key."
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            tooltip={{
              content:
                "Toggling this on will force delete contents of the bucket after the bucket is deleted",
            }}
            id={composedId + "force-delete"}
            labelText="Force Delete Contents"
            defaultToggled={this.state.force_delete}
            toggleFieldName="force_delete"
            onToggle={this.handleToggle}
          />
        </IcseFormGroup>
      </>
    );
  }
}

ObjectStorageBucketForm.defaultProps = {
  data: {
    force_delete: false,
    name: "",
    storage_class: "Standard",
    kms_key: "",
    endpoint: "public",
  },
  encryptionKeys: [],
};

ObjectStorageBucketForm.propTypes = {
  data: PropTypes.shape({
    force_delete: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    storage_class: PropTypes.string.isRequired,
    kms_key: PropTypes.string,
    endpoint: PropTypes.string.isRequired,
  }).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  encryptionKeyFilter: PropTypes.func,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
};

export default ObjectStorageBucketForm;
