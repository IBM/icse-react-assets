import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseToggle, IcseTextInput } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";
import { kebabCase, titleCase } from "lazy-z";

class SysdigForm extends Component {
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
    if (name === "plan") value = kebabCase(value);
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
      <>
        <IcseFormGroup>
          <IcseTextInput
            field="Name"
            labelText="Name"
            value={this.props.prefix + "-sysdig"}
            readOnly
            id="sysdig-name"
            invalid={false}
            placeholder={this.props.prefix + "-sysdig"}
            className="fieldWidth"
          />
          <IcseToggle
            labelText="Enabled"
            defaultToggled={this.state.enabled}
            name="enabled"
            toggleFieldName="enabled"
            onToggle={this.handleToggle}
            id="sysdig-enabled"
            className="fieldWidthSmaller"
          />
          <IcseSelect
            tooltip={{
              content: "Each tier level allows for more time-series per month.",
              link: "https://cloud.ibm.com/docs/monitoring?topic=monitoring-pricing_plans#graduated_secure",
            }}
            groups={["Tier 1", "Tier 2", "Tier 3", "Tier 4"]}
            formName={this.props.data.name + "-sysdig-plan"}
            name="plan"
            value={titleCase(this.state.plan)}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            labelText="Plan"
            invalidText="Select a plan."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            name="resource_group"
            formName={`${this.props.data.name}-sysdig-rg-select`}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            labelText="Resource Group"
            className="fieldWidth"
          />
          <IcseToggle
            labelText="Platform Logs"
            defaultToggled={this.state.platform_logs}
            name="platform_logs"
            toggleFieldName="platform_logs"
            onToggle={this.handleToggle}
            id="sysdig-platform-logs"
            className="fieldWidth"
          />
        </IcseFormGroup>
      </>
    );
  }
}

SysdigForm.defaultProps = {
  data: {
    enabled: false,
    plan: "tier-1",
    resource_group: "",
    platform_logs: false,
  },
  isModal: false,
};

SysdigForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    enabled: PropTypes.bool,
    plan: PropTypes.string,
    resource_group: PropTypes.string,
    platform_logs: PropTypes.bool,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  prefix: PropTypes.string.isRequired,
};

export default SysdigForm;
