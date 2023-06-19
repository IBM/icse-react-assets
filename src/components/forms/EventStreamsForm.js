import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseNameInput } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import { IcseFormGroup } from "../Utils";
import { ToolTipWrapper } from "../Tooltips";
import { isIpStringInvalid } from "../../lib/iam-utils";
import { TextArea } from "@carbon/react";
import { titleCase } from "lazy-z";
import PropTypes from "prop-types";
import {
  handleAllowedIps,
  handlePlanChange,
} from "../../lib/forms/event-streams";

/**
 * EventStreamsForm
 */
class EventStreamsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);
    this.handlePlanChange = this.handlePlanChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Handle input change for allowed ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    this.setState(handleAllowedIps(event, this.state));
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Handle input change for a select
   * @param {event} event
   */
  handlePlanChange(event) {
    this.setState(handlePlanChange(event, this.state));
  }

  render() {
    let composedId = `event-streams-form-${this.props.data.name}`;
    let classNameModalCheck = this.props.isModal
      ? "fieldWidthSmaller"
      : "fieldWidth";
    return (
      <>
        <IcseFormGroup>
          {/* name */}
          <IcseNameInput
            id={composedId}
            componentName={this.props.data.name + "-event-streams"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className={classNameModalCheck}
          />
          {/* plan */}
          <IcseSelect
            formName={this.props.data.name + "-event-streams"}
            value={titleCase(this.state.plan)}
            groups={["Lite", "Standard", "Enterprise"]}
            handleInputChange={this.handlePlanChange}
            className={classNameModalCheck}
            name="plan"
            labelText="Plan"
          />
          {/* resource group */}
          <IcseSelect
            formName={this.props.data.name + "-event-streams"}
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            className={classNameModalCheck}
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        {this.state.plan === "enterprise" && (
          <>
            <IcseFormGroup>
              {/* throughput */}
              <IcseSelect
                formName={this.props.data.name + "-event-streams"}
                value={this.state.throughput}
                groups={["150MB/s", "300MB/s", "450MB/s"]}
                handleInputChange={this.handleInputChange}
                className={classNameModalCheck}
                name="throughput"
                labelText="Throughput"
              />
              {/* storage size */}
              <IcseSelect
                formName={this.props.data.name + "-event-streams"}
                value={this.state.storage_size}
                groups={["2TB", "4TB", "6TB", "8TB", "10TB", "12TB"]}
                handleInputChange={this.handleInputChange}
                className={classNameModalCheck}
                name="storage_size"
                labelText="Storage Size"
              />
            </IcseFormGroup>
            <IcseFormGroup>
              {/* text area for allowed private ips */}
              <ToolTipWrapper
                tooltip={{
                  content: "Private IP addresses or CIDR blocks to allowlist",
                  align: "top-left",
                }}
                className="textInputMedium"
                innerForm={TextArea}
                id={this.props.data.name + "-event-streams-private-ips"}
                labelText="Allowed Private IPs"
                onChange={this.handleAllowedIps}
                placeholder={
                  this.state.private_ip_allowlist || "X.X.X.X, X.X.X.X/X, ..."
                }
                invalid={isIpStringInvalid(this.state.private_ip_allowlist)}
                invalidText="Please enter a comma separated list of IP addresses or CIDR blocks"
              />
            </IcseFormGroup>
          </>
        )}
      </>
    );
  }
}

EventStreamsForm.defaultProps = {
  data: {
    name: "",
    plan: "lite",
    resource_group: "",
    throughput: "",
    storage_size: "",
    private_ip_allowlist: "",
  },
};

EventStreamsForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    throughput: PropTypes.string,
    storage_size: PropTypes.string,
    private_ip_allowlist: PropTypes.string,
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default EventStreamsForm;
