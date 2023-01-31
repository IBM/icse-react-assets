import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseSelect, ResourceGroupSelect } from "../Dropdowns";
import PropTypes from "prop-types";

/**
 * Key Management
 */
class KeyManagementForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSystemDropdown = this.handleSystemDropdown.bind(this);
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
   * handle dropdown for key management system
   * @param {event} event event
   */
  handleSystemDropdown(event) {
    let selection = event.target.value; // selected value in dropdown
    selection === "HPCS"
      ? this.setState({ use_hs_crypto: true, use_data: true })
      : this.setState({ use_hs_crypto: false, use_data: false });
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
      <>
        <IcseFormGroup>
          <IcseSelect
            component="km-system-dropdown"
            name="system"
            groups={["Key Protect", "HPCS"]}
            value={this.state.use_hs_crypto ? "HPCS" : "Key Protect"}
            labelText="Key Management System"
            handleInputChange={this.handleSystemDropdown}
            className="fieldWidth"
          />
          <IcseToggle
            tooltip={{ content: "Get Key Management from Data Source" }}
            labelText="Use Existing Instance"
            key={this.state.use_data}
            defaultToggled={this.state.use_data}
            onToggle={() => this.handleToggle("use_data")}
            disabled={this.state.use_hs_crypto === true}
            className="fieldWidth"
            id="kms-existing"
          />
        </IcseFormGroup>
        <IcseFormGroup noMarginBottom>
          <IcseNameInput
            id={this.state.name + "-name"}
            value={this.state.name}
            componentProps={this.props}
            component="key_management"
            onChange={this.handleInputChange}
            className="fieldWidth"
            noMarginRight
          />
          <ResourceGroupSelect
            slz={this.props.slz}
            component="Key Management"
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
          />
        </IcseFormGroup>
      </>
    );
  }
}

KeyManagementForm.propTypes = {
  data: PropTypes.shape({
    use_hs_crypto: PropTypes.bool.isRequired,
    use_data: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
  }).isRequired,
};

export default KeyManagementForm;
