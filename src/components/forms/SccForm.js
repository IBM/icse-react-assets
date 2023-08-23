import React, { Component } from "react";
import { Dropdown } from "@carbon/react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { invalidRegex } from "../../lib";
import { IcseTextInput, IcseToggle, IcseNameInput } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import PropTypes from "prop-types";

const sccRegions = [
  {
    id: "us",
    label: "us",
  },
  {
    id: "eu",
    label: "eu",
  },
  {
    id: "uk",
    label: "uk",
  },
];

/**
 * SccForm
 * @param {Object} props
 */
class SccForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.state.enable = true;
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleLocationChange(selectedItem) {
    this.setState({ location: selectedItem.selectedItem.label });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   * @param {bool} setDefaults set default values, default is false
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* group id */}
          <IcseTextInput
            id="scc_group_id"
            tooltip={{
              content: "The group ID for Security and Compliance Center.",
              align: "bottom-left",
            }}
            componentName="SCC"
            field="id"
            labelText="Group ID"
            value={this.state.id}
            onChange={this.handleInputChange}
            maxLength={255}
            invalid={
              invalidRegex("id", this.state.id, this.props.descriptionRegex)
                .invalid
            }
            invalidText={
              invalidRegex("id", this.state.id, this.props.descriptionRegex)
                .invalidText
            }
          />
          {/* collector-description text input */}
          <IcseTextInput
            id="scc_passphrase"
            tooltip={{
              content: "Security and Compliance Center group passphrase.",
              align: "bottom-left",
            }}
            labelText="Group Passphrase"
            field="passphrase"
            value={this.state.passphrase}
            onChange={this.handleInputChange}
            componentName="SCC"
            maxLength={1000}
            invalid={
              invalidRegex(
                "passphrase",
                this.state.passphrase,
                this.props.descriptionRegex,
              ).invalid
            }
            invalidText={
              invalidRegex(
                "passphrase",
                this.state.passphrase,
                this.props.descriptionRegex,
              ).invalidText
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-scc-name"}
            componentName="scc-cred"
            labelText="Credential Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText
          />
          {/* credential text input */}
          <IcseTextInput
            id="scc_credential_description"
            tooltip={{
              content:
                "A detailed description of the credential to be created.",
            }}
            componentName="SCC"
            field="credential_description"
            labelText="Credential Description"
            value={this.state.credential_description}
            onChange={this.handleInputChange}
            maxLength={255}
            invalid={
              invalidRegex(
                "credential_description",
                this.state.credential_description,
                this.props.descriptionRegex,
              ).invalid
            }
            invalidText={
              invalidRegex(
                "credential_description",
                this.state.credential_description,
                this.props.descriptionRegex,
              ).invalidText
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <Dropdown
            ariaLabel="Dropdown"
            label="Region"
            id="location"
            items={sccRegions}
            titleText="Region"
            initialSelectedItem={this.state.location}
            onChange={(selectedItem) => {
              this.handleLocationChange(selectedItem);
            }}
            className="leftTextAlign fieldWidth"
          />
          {/* is-public toggle input */}
          <IcseToggle
            tooltip={{
              content:
                "Determines whether the collector endpoint is accessible on a public network.",
            }}
            labelText="Is Public"
            defaultToggled={this.state.is_public}
            className="leftTextAlign"
            onToggle={this.handleToggle}
            id="scc-is-public"
          />
        </IcseFormGroup>
        <IcseFormGroup noMarginBottom>
          {/* scope-description text input */}
          <IcseTextInput
            id="scc_scope_description"
            tooltip={{ content: "A detailed description of the scope." }}
            componentName="SCC"
            field="scope_description"
            labelText="Scope Description"
            value={this.state.scope_description}
            onChange={this.handleInputChange}
            maxLength={255}
            invalid={
              invalidRegex(
                "scope_description",
                this.state.scope_description,
                this.props.descriptionRegex,
              ).invalid
            }
            invalidText={
              invalidRegex(
                "scope_description",
                this.state.scope_description,
                this.props.descriptionRegex,
              ).invalidText
            }
          />
          {/* collector-description text input */}
          <IcseTextInput
            id="scc_collector"
            tooltip={{
              content: "A detailed description of the collector.",
              align: "top-left",
            }}
            labelText="Collector Description"
            field="collector_description"
            value={this.state.collector_description}
            onChange={this.handleInputChange}
            componentName="SCC"
            maxLength={1000}
            invalid={
              invalidRegex(
                "collector_description",
                this.state.collector_description,
                this.props.descriptionRegex,
              ).invalid
            }
            invalidText={
              invalidRegex(
                "collector_description",
                this.state.collector_description,
                this.props.descriptionRegex,
              ).invalidText
            }
          />
        </IcseFormGroup>
      </>
    );
  }
}

SccForm.defaultProps = {
  data: {
    enable: false,
  },
  descriptionRegex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i,
};

SccForm.propTypes = {
  data: PropTypes.shape({
    enable: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location: PropTypes.string,
    scope_description: PropTypes.string,
    passphrase: PropTypes.string,
    credential_description: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  descriptionRegex: PropTypes.instanceOf(RegExp).isRequired,
};

export default SccForm;
