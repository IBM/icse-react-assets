import React, { Component } from "react";
import NetworkingRulesOrderCard from "./NetworkingRulesOrderCard";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { checkNullorEmptyString } from "../../lib";
import PropTypes from "prop-types";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";

/** NetworkAclForm
 * @param {Object} props
 */
class NetworkAclForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.networkRuleOrderDidChange = this.networkRuleOrderDidChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change for a text field
   * @param {event} event
   */
  handleTextInput(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the toggle to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  /**
   * Check if the order of network rules updated - then update state to allow save
   * @param {Array} rules list of rule objects
   */
  networkRuleOrderDidChange(rules) {
    this.props.networkRuleOrderDidChange(this.state, this.props);
    this.setState({ rules: rules }); // update rules state when an update occurs
  }

  render() {
    return (
      <div>
        <IcseFormGroup>
          <IcseNameInput
            id={this.state.name + "-name"}
            componentName={this.props.data.name}
            value={this.state.name}
            onChange={this.handleTextInput}
            placeholder="my-network-acl-name"
            component="network_acls"
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName="resource_group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleTextInput}
            invalid={checkNullorEmptyString(this.state.resource_group)}
            invalidText="Select a Resource Group."
          />
        </IcseFormGroup>
        {/* Networking Rules & update/delete should not be shown within the ACL create modal */}
        {!this.props.isModal && (
          // ability to move rules up and down
          <NetworkingRulesOrderCard
            {...this.props}
            rules={this.state.rules}
            vpc_name={this.props.vpc_name}
            parent_name={this.props.data.name}
            networkRuleOrderDidChange={this.networkRuleOrderDidChange}
            isAclForm
            invalidCallback={this.props.invalidCallback}
            invalidTextCallback={this.props.invalidTextCallback}
            onSubmitCallback={this.props.onSubmitCallback}
            onRuleSave={this.props.onRuleSave}
            onRuleDelete={this.props.onRuleDelete}
            disableModalSubmitCallback={this.props.disableModalSubmitCallback}
            disableSaveCallback={this.props.disableSaveCallback}
            dev={this.props.dev}
          />
        )}
      </div>
    );
  }
}

NetworkAclForm.defaultProps = {
  data: {
    name: "",
    rules: [],
  },
  isModal: false,
};

NetworkAclForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rules: PropTypes.array,
    resource_group: PropTypes.string,
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  networkRuleOrderDidChange: PropTypes.func, // can be undefined
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  disableModalSubmitCallback: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
};

export default NetworkAclForm;
