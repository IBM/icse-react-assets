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
            invalid={this.props.invalidSccScopeName(this.state).invalid}
            invalidText={
              this.props.invalidSccScopeName(this.state).invalidText ||
              "Invalid scope name. Must match regular expression: /[A-z][a-z0-9-]*[a-z0-9]/"
            }
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
            invalid={this.props.invalidSccScopeDescription(this.state).invalid}
            invalidText={
              this.props.invalidSccScopeDescription(this.state).invalidText ||
              'Invalid scope description. Must match regular expression: /[A-z][a-z0-9._,"-\\s]*/'
            }
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
            invalid={
              this.props.invalidSccCollectorDescription(this.state).invalid
            }
            invalidText={
              this.props.invalidSccCollectorDescription(this.state)
                .invalidText ||
              'Invalid collector description. Must match regular expression: /[A-z][a-z0-9._,"-\\s]*/'
            }
          />
        </IcseFormGroup>
      </>
    );
  }
}

SccForm.propTypes = {
  data: PropTypes.shape({
    enable_scc: PropTypes.bool.isRequired,
    collector_description: PropTypes.string,
    is_public: PropTypes.bool.isRequired,
    location_id: PropTypes.string,
    scope_description: PropTypes.string,
    scope_name: PropTypes.string,
    collector_passphrase: PropTypes.string,
    location_id: PropTypes.string,
  }),
  invalidSccScopeName: PropTypes.func.isRequired,
  invalidSccScopeDescription: PropTypes.func.isRequired,
  invalidSccCollectorDescription: PropTypes.func.isRequired,
};

export default SccForm;
