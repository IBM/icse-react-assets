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
import "../styles/AppIdForm.css";
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
    let newAppIdState = { ...this.state };
    let { name, value } = event.target;
    if (name === "name") {
      newAppIdState.name = value;
    } else newAppIdState.resource_group = value;
    this.setState(newAppIdState);
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    let newAppIdState = { ...this.state };
    newAppIdState.use_data = !newAppIdState.use_data;
    this.setState(newAppIdState);
  }

  render() {
    let keyProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
    };
    transpose({ ...this.props.keyProps }, keyProps);
    return (
      <div id="appid-form">
        <IcseFormGroup>
          {/* use data toggle */}
          <IcseToggle
            labelText="Use Existing Instance"
            key={this.state.use_data}
            defaultToggled={this.state.use_data}
            toggleFieldName="use_data"
            onToggle={this.handleToggle}
            className="fieldWidthSmallest"
            id="app-id-existing-instance"
          />
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
            className="fieldWidth"
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
            className="fieldWidth"
          />
        </IcseFormGroup>
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
};

export default AppIdForm;
