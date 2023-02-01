import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { IcseTextInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";

/**
 * Atracker
 * @param {Object} props
 * @param {Object} props.data
 * @param {string} props.data.resource_group
 * @param {string} props.data.cos_bucket
 * @param {string} props.data.cos_key
 * @param {boolean} props.data.add_route
 * @param {Array} props.resourceGroups list of resource groups
 * @param {Array} props.cosBuckets list of cos buckets
 * @param {Array} props.cosKeys list of cos Keys
 * @param {string} props.prefix
 */
class AtrackerForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  render() {
    return (
      <div id="atracker-form">
        <IcseFormGroup>
          <IcseTextInput
            componentName="Activity Tracker"
            field="Name"
            labelText="Name"
            className="fieldWidth"
            value={this.props.prefix + "-atracker"}
            onChange={this.handleInputChange}
            readOnly
            id="atracker-name"
            invalid={false}
          />
          <IcseSelect
            formName="Activity Tracker"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            tooltip={{
              content:
                "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored",
            }}
            groups={this.props.cosBuckets}
            formName="Activity Tracker"
            field="collector_bucket_name"
            name="collector_bucket_name"
            value={this.state.collector_bucket_name}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            labelText="Object Storage Log Bucket"
            invalidText="Select an Object Storage bucket."
          />
          <IcseToggle
            tooltip={{
              content:
                "Must be enabled in order to forward all logs to the Cloud Object Storage bucket",
            }}
            labelText="Create Activity Tracker Route"
            defaultToggled={this.state.add_route}
            toggleFieldName="add_route"
            onToggle={this.handleToggle}
            id="app-id-add-route"
          />
        </IcseFormGroup>
        <IcseFormGroup noMarginBottom>
          <IcseSelect
            tooltip={{
              content:
                "The IAM API key that has writer access to the Cloud Object Storage instance",
            }}
            formName="Activity Tracker"
            name="atracker_key"
            groups={this.props.cosKeys}
            value={this.state.atracker_key}
            labelText="Privileged IAM Object Storage Key"
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            invalidText="Select an Object Storage key."
          />
        </IcseFormGroup>
      </div>
    );
  }
}

export default AtrackerForm;

AtrackerForm.defaultProps = {
  isModal: false,
  data: PropTypes.shape({
    cos_bucket: "",
    cos_key: "",
    resource_group: "",
    add_route: false,
  }).isRequired,
};

AtrackerForm.propTypes = {
  data: PropTypes.shape({
    cos_bucket: PropTypes.string.isRequired,
    cos_key: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    add_route: PropTypes.bool.isRequired,
  }).isRequired,
  prefix: PropTypes.string.isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
};
