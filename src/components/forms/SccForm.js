import React, { Component } from "react";
import { Dropdown } from "@carbon/react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { eventTargetToNameAndValue, toggleStateBoolean } from "../../lib";
import { IcseTextInput, IcseToggle } from "../Inputs";
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
    this.invalidSccScopeName = this.invalidSccScopeName.bind(this);
    this.invalidSccScopeDescription =
      this.invalidSccScopeDescription.bind(this);
    this.invalidSccCollectorDescription =
      this.invalidSccCollectorDescription.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.state.enable_scc = true;
  }

  /**
   * Handle input change for scope_name field
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleLocationChange(selectedItem) {
    this.setState({ location_id: selectedItem.selectedItem.label });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   * @param {bool} setDefaults set default values, default is false
   */
  handleToggle(name) {
    this.setState(toggleStateBoolean(name, this.state));
  }

  /**
   * Determines invalid status of scope_name
   * @returns {Object} object containing invalid boolean and string invalidText
   */
  invalidSccScopeName() {
    return {
      invalid:
        this.state.scope_name.match(this.props.scope_name_regex) === null,
      invalidText: `Invalid scope name. Must match regular expression: ${this.props.scope_name_regex}`,
    };
  }

  /**
   * Determines invalid status of scope_description
   * @returns {Object} object containing invalid boolean and string invalidText
   */
  invalidSccScopeDescription() {
    return {
      invalid:
        this.state.scope_description.match(this.props.scope_desc_regex) ===
        null,
      invalidText: `Invalid scope name. Must match regular expression: ${this.props.scope_desc_regex}`,
    };
  }

  /**
   * Determines invalid status of collector_description
   * @returns {Object} object containing invalid boolean and string invalidText
   */
  invalidSccCollectorDescription() {
    return {
      invalid:
        this.state.collector_description.match(
          this.props.collector_desc_regex
        ) === null,
      invalidText: `Invalid scope name. Must match regular expression: ${this.props.collector_desc_regex}`,
    };
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <Dropdown
            ariaLabel="Dropdown"
            id="location_id"
            items={sccRegions}
            label="SCC Region Options"
            titleText="Region"
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
        <IcseFormGroup>
          {/* scope-name text input */}
          <IcseTextInput
            id="scc_scope_name"
            tooltip={{
              content:
                "A unique name for your scope. A scope narrows the focus of the scan.",
              align: "top-left",
            }}
            componentName="SCC"
            field="scope_name"
            labelText="Scope Name"
            value={this.state.scope_name}
            onChange={this.handleInputChange}
            maxLength={50}
            invalid={this.invalidSccScopeName().invalid}
            invalidText={this.invalidSccScopeName().invalidText}
          />
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
            invalid={this.invalidSccScopeDescription().invalid}
            invalidText={this.invalidSccScopeDescription().invalidText}
          />
        </IcseFormGroup>
        <IcseFormGroup noMarginBottom>
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
            invalid={this.invalidSccCollectorDescription().invalid}
            invalidText={this.invalidSccCollectorDescription().invalidText}
          />
        </IcseFormGroup>
      </>
    );
  }
}

SccForm.defaultProps = {
  data: {
    enable_scc: false,
  },
  scope_name_regex: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i,
  scope_desc_regex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i,
  collector_desc_regex: /^[A-z][a-zA-Z0-9-\._,\s]*$/i,
};

SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string,
    scope_name_regex: PropTypes.instanceOf(RegExp),
    scope_desc_regex: PropTypes.instanceOf(RegExp),
    collector_desc_regex: PropTypes.instanceOf(RegExp),
  }),
};

export default SccForm;
