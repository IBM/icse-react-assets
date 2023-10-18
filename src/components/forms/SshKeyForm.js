import React, { Component } from "react";
import { TextInput } from "@carbon/react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";
import { kebabCase } from "lazy-z";

/**
 * ssh key form
 */
class SshKeyForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState({ use_data: !this.state.use_data });
  }

  /**
   * handle other input events
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* use data */}
          {!this.props.powerVs && !this.props.classic && (
            <IcseToggle
              labelText="Use Existing Instance"
              key={this.state.use_data}
              defaultToggled={this.state.use_data}
              toggleFieldName="use_data"
              onToggle={this.handleToggle}
              className="fieldWidthSmallest"
              id={this.state.name + "-use-existing-instance"}
            />
          )}
          {/* name */}
          <IcseNameInput
            id={
              this.state.name +
              (this.props.powerVs
                ? "-power-ssh-key"
                : this.props.classic
                ? "-classic-ssh-key"
                : "") +
              "-name"
            }
            componentName={this.props.data.name + "-ssh-key-name"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText
          />
          {/* resource group */}
          {!this.props.classic && (
            <IcseSelect
              name="resource_group"
              formName={`${kebabCase(this.props.data.name)}-ssh-rg-select`}
              groups={this.props.resourceGroups}
              value={this.state.resource_group}
              handleInputChange={this.handleInputChange}
              invalidText="Select a Resource Group."
              labelText="Resource Group"
            />
          )}
        </IcseFormGroup>
        {/* do not render public key input if not use_data */}
        {!this.state.use_data && (
          <IcseFormGroup noMarginBottom>
            <div className="fieldWidthBigger leftTextAlign">
              <TextInput.PasswordInput
                labelText="Public Key"
                name="public_key"
                id={this.props.data.name + "-ssh-public-key"}
                value={this.state.public_key}
                onChange={this.handleInputChange}
                invalid={
                  this.props.invalidKeyCallback(this.state, this.props).invalid
                }
                invalidText={
                  this.props.invalidKeyCallback(this.state, this.props)
                    .invalidText
                }
              />
            </div>
          </IcseFormGroup>
        )}
      </>
    );
  }
}

SshKeyForm.defaultProps = {
  data: {
    name: "",
    public_key: "",
    use_data: false,
    resource_group: "",
  },
  powerVs: false,
  resourceGroups: [],
  isModal: false,
  classic: false,
};

SshKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    public_key: PropTypes.string,
    use_data: PropTypes.bool,
  }).isRequired,
  powerVs: PropTypes.bool.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  classic: PropTypes.bool.isRequired,
};

export default SshKeyForm;
