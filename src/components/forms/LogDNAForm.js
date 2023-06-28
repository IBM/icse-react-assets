import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseToggle, IcseTextInput } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";
import { kebabCase, titleCase, contains } from "lazy-z";

class LogDNAForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    if (contains(["plan", "endpoints"], name)) value = kebabCase(value);
    this.setState(this.setNameToValue(name, value));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  render() {
    return (
      <div id="logdna-form">
        <IcseFormGroup>
          {/* name text input */}
          <IcseTextInput
            field="Name"
            labelText="Name"
            value={this.props.prefix + "-logdna"}
            readOnly
            id="logdna-name"
            invalid={false}
            placeholder={this.props.prefix + "-logdna"}
            className="fieldWidthSmaller"
          />
          <IcseToggle
            labelText="Enabled"
            defaultToggled={this.state.enabled}
            name="enabled"
            toggleFieldName="enabled"
            onToggle={this.handleToggle}
            id="logdna-enabled"
            className="fieldWidthSmaller"
          />
          <IcseSelect
            groups={["Lite", "7 Day", "14 Day", "30 Day"]}
            formName={this.props.data.name + "-logdna-plan"}
            name="plan"
            value={titleCase(this.state.plan)
              .replace(/3 0/, "30")
              .replace(/1 4/, "14")}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
            labelText="Plan"
            invalidText="Select a plan."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            name="resource_group"
            formName={`${this.props.data.name}-logdna-rg-select`}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            labelText="Resource Group"
            className="fieldWidthSmaller"
          />
          <IcseSelect
            groups={this.props.cosBuckets}
            formName={this.props.data.name + "-logdna-bucket"}
            name="bucket"
            value={this.state.bucket}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
            labelText="Log Bucket"
            invalidText="Select a bucket."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            tooltip={{
              content: "Create an archive with the LogDNA Provider",
              align: "bottom-left",
            }}
            labelText="Archive"
            defaultToggled={this.state.archive}
            name="archive"
            toggleFieldName="archive"
            onToggle={this.handleToggle}
            id="logdna-archive"
            className="fieldWidthSmaller"
          />
          <IcseToggle
            labelText="Platform Logs"
            defaultToggled={this.state.platform_logs}
            name="platform_logs"
            toggleFieldName="platform_logs"
            onToggle={this.handleToggle}
            id="logdna-platform-logs"
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </div>
    );
  }
}

LogDNAForm.defaultProps = {
  data: {
    enabled: false,
    plan: "7-day",
    resource_group: "",
    bucket: "",
    archive: false,
    platform_logs: false,
  },
  isModal: false,
};

LogDNAForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    plan: PropTypes.string,
    resource_group: PropTypes.string,
    bucket: PropTypes.string,
    archive: PropTypes.bool,
    platform_logs: PropTypes.bool,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string.isRequired,
};

export default LogDNAForm;
