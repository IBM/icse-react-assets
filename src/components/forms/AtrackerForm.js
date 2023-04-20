import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseSelect } from "../Dropdowns";
import { IcseTextInput, IcseToggle } from "../Inputs";
import { LocationsMultiSelect } from "../MultiSelects";
import { IcseFormGroup } from "../Utils";
import PopoverWrapper from "../PopoverWrapper";

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
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
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

  handleMultiSelect(event) {
    this.setState({ locations: event });
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
          <IcseToggle
            tooltip={{
              content: "Enable or Disable your Activity Tracker instance.",
              align: "bottom-right",
            }}
            labelText="Enabled"
            defaultToggled={this.state.enabled}
            toggleFieldName="enabled"
            onToggle={this.handleToggle}
            id="atracker-enable-disable"
          />
        </IcseFormGroup>
        {this.state.enabled && (
          <div>
            <IcseFormGroup>
              <IcseTextInput
                componentName="Activity Tracker"
                field="Name"
                labelText="Name"
                className="fieldWidth"
                value={this.props.prefix + "-atracker"}
                readOnly
                id="atracker-name"
                invalid={false}
                placeholder={this.props.prefix + "-atracker"}
              />
              <LocationsMultiSelect
                id={this.props.data.name + "-activity-tracker-location"}
                region={this.props.region}
                onChange={this.handleMultiSelect}
                invalid={this.state.locations.length === 0}
                invalidText="Select at least one location."
                initialSelectedItems={this.props.data.locations}
              />
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseSelect
                tooltip={{
                  content:
                    "The bucket name under the Cloud Object Storage instance where Activity Tracker logs will be stored",
                }}
                groups={this.props.cosBuckets}
                formName={this.props.data.name + "-activity-tracker-bucket"}
                field="bucket"
                name="bucket"
                value={this.state.bucket}
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
                id="atracker-add-route"
              />
            </IcseFormGroup>
            <IcseFormGroup noMarginBottom>
              <IcseSelect
                tooltip={{
                  content:
                    "The IAM API key that has writer access to the Cloud Object Storage instance",
                }}
                formName={this.props.data.name + "-activity-tracker-cos-key"}
                name="cos_key"
                groups={this.props.cosKeys}
                value={this.state.cos_key}
                labelText="Privileged IAM Object Storage Key"
                handleInputChange={this.handleInputChange}
                className="fieldWidth"
                invalidText="Select an Object Storage key."
              />
            </IcseFormGroup>
          </div>
        )}
      </div>
    );
  }
}

export default AtrackerForm;

AtrackerForm.defaultProps = {
  isModal: false,
  data: {
    enabled: true,
    bucket: "",
    cos_key: "",
    resource_group: "",
    add_route: false,
    locations: [],
  },
};

AtrackerForm.propTypes = {
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    bucket: PropTypes.string,
    cos_key: PropTypes.string,
    resource_group: PropTypes.string,
    add_route: PropTypes.bool,
    locations: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  region: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
};
