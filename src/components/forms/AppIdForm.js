import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import AppIdKeyForm from "./AppIdKeyForm";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import { transpose } from "lazy-z";

/**
 * AppIdForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
class AppIdForm extends Component {
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
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("use_data", this.state));
  }

  render() {
    let keyProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.keyProps }, keyProps);
    let composedClassName = this.props.isModal
      ? "fieldWidthSmaller"
      : "fieldWidth";
    return (
      <div id="appid-form">
        <IcseFormGroup>
          {/* name text input */}
          <IcseNameInput
            id={this.props.data.name + "-appid-name"}
            componentName={this.props.data.name + "-appid-name"}
            placeholder="my-appid-name"
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className={composedClassName}
          />
          {/* Select Resource Group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName={this.props.data.name + "-appid-rg"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className={composedClassName}
            id={`${this.props.data.name}-app-id-rg`}
          />
          {/* use data toggle */}
          <IcseToggle
            labelText="Use Existing Instance"
            key={this.state.use_data}
            defaultToggled={this.state.use_data}
            toggleFieldName="use_data"
            onToggle={this.handleToggle}
            className="fieldWidthSmallest"
            id={`${this.props.data.name}-app-id-existing-instance`}
          />
        </IcseFormGroup>
        {this.state.use_data === false && (
          <IcseFormGroup>
            <IcseSelect
              value={this.state.encryption_key}
              groups={this.props.encryptionKeys}
              formName={this.props.data.name + " AppID"}
              name="encryption_key"
              className="fieldWidth"
              labelText="(Optional) Encryption Key"
              handleInputChange={this.handleInputChange}
              disableInvalid
            />
          </IcseFormGroup>
        )}
        {this.props.isModal !== true && (
          <IcseFormTemplate
            name="AppID Keys"
            subHeading
            addText="Create an AppID Key"
            arrayData={this.props.data.keys}
            innerForm={AppIdKeyForm}
            disableSave={this.props.keyProps.disableSave}
            onDelete={this.props.keyProps.onDelete}
            onSave={this.props.keyProps.onSave}
            onSubmit={this.props.keyProps.onSubmit}
            propsMatchState={this.props.propsMatchState}
            innerFormProps={{ ...keyProps }}
            hideAbout
            toggleFormProps={{
              hideName: true,
              submissionFieldName: "appid_key",
              disableSave: this.props.keyProps.disableSave,
              type: "formInSubForm",
            }}
          />
        )}
      </div>
    );
  }
}

AppIdForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    use_data: false,
    keys: [],
  },
  isModal: false,
};

AppIdForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    use_data: PropTypes.bool,
    keys: PropTypes.array.isRequired,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppIdForm;
