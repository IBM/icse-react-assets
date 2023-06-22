import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseNameInput } from "../Inputs";
import { IcseFormGroup, StatelessToggleForm } from "../Utils";
import PropTypes from "prop-types";
import { IcseSelect } from "../Dropdowns";
import { SecretsManagerChecklist } from "../..";
import { getObjectFromArray, splat } from "lazy-z";
import "./secrets-manager.css";

/**
 * SecretsManagerForm
 * @param {Object} props
 */
class SecretsManagerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
      importToggle: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleImportSecrets = this.toggleImportSecrets.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
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

  toggleImportSecrets() {
    this.setState(this.toggleStateBoolean("importToggle", this.state));
  }

  onSelectChange(items) {
    let nextSecrets = [];
    items.forEach((item) => {
      if (item !== "Select All") {
        nextSecrets.push(
          getObjectFromArray(this.props.data.secrets, "ref", item)
        );
      }
    });
    this.setState({
      secrets: nextSecrets,
    });
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* name text input */}
          <IcseNameInput
            id={this.state.name + "-name"}
            value={this.state.name}
            onChange={this.handleInputChange}
            componentProps={this.props}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          {/* Select Resource Group */}
          <IcseSelect
            formName="Secrets Manager"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        <div className="fieldWidth">
          {/* Select Key Management Service Key */}
          <IcseSelect
            value={this.state.encryption_key}
            groups={this.props.encryptionKeys}
            formName="Secrets Manager"
            name="encryption_key"
            className="fieldWidth"
            labelText="Encryption Key"
            handleInputChange={this.handleInputChange}
          />
        </div>
        <br />
        <StatelessToggleForm
          name="Import Existing Secrets"
          hide={this.state.importToggle}
          onIconClick={this.toggleImportSecrets}
          className="subForm secretsChecklistPadding"
          toggleFormTitle
          noMarginBottom
        >
          <SecretsManagerChecklist
            secrets={this.props.secrets}
            selected={[...splat(this.props.data.secrets, "ref")]}
            onSelectChange={this.onSelectChange}
          />
        </StatelessToggleForm>
      </>
    );
  }
}

SecretsManagerForm.defaultProps = {
  data: {
    name: "",
    resource_group: null,
    encryption_key: null,
  },
};

SecretsManagerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    encryption_key: PropTypes.string,
  }).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SecretsManagerForm;
