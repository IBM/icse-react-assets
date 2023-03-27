import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseNameInput } from "../Inputs";
import { EndpointSelect, IcseSelect } from "../Dropdowns";
import { IcseFormGroup } from "../Utils";
import { ToolTipWrapper } from "../Tooltips";
import { isIpStringInvalid } from "../../lib/iam-utils";
import { throughputAndStorageOptions } from "../../lib/es-utils";
import { TextArea } from "@carbon/react";
import { titleCase } from "lazy-z";
import PropTypes from "prop-types";

/**
 * EventStreamsForm
 */
class EventStreamsForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
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
    // removing white space and checking for empty value
    let value = event.target.value.replace(/\s*/g, "");
    if (value === "") value = null;
    this.setState({ private_ip_allowlist: value });
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
    let item = event.target.value;
    this.setState({ plan: item.toLowerCase() });
  }

  render() {
    let composedId = `event-streams-form-${this.props.data.name}`;
    return (
      <>
        <IcseFormGroup>
          {/* name */}
          <IcseNameInput
            id={composedId}
            componentName={"event_streams"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          {/* plan */}
          <IcseSelect
            formName="Event Streams"
            value={titleCase(this.state.plan)}
            groups={this.props.plans}
            handleInputChange={this.handlePlanChange}
            className="fieldWidth"
            name="plan"
            labelText="Plan"
          />
          {/* resource group */}
          <IcseSelect
            formName="Event Streams"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        {this.state.plan === "enterprise" && (
          <>
            <IcseFormGroup>
              {/* endpoints */}
              <EndpointSelect
                formName="Event Streams"
                handleInputChange={this.handleInputChange}
                value={this.state.endpoint}
                className="fieldWidth"
              />
              {/* throughput */}
              <IcseSelect
                formName="Event Streams"
                value={
                  this.state.plan !== "enterprise"
                    ? throughputAndStorageOptions(this.state.plan).throughput[0]
                    : this.state.throughput
                }
                groups={
                  this.props.throughputs === null
                    ? throughputAndStorageOptions(this.state.plan).throughput
                    : this.props.throughputs
                }
                handleInputChange={this.handleInputChange}
                className="fieldWidth"
                name="throughput"
                labelText="Throughput"
              />
              {/* storage size */}
              <IcseSelect
                formName="Event Streams"
                value={
                  this.state.plan !== "enterprise"
                    ? throughputAndStorageOptions(this.state.plan).storage[0]
                    : this.state.storage_size
                }
                groups={
                  this.props.storageSizes === null
                    ? throughputAndStorageOptions(this.state.plan).storage
                    : this.props.storageSizes
                }
                handleInputChange={this.handleInputChange}
                className="fieldWidth"
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
                id="event-streams-private-ips"
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
    endpoint: "",
    throughput: "",
    storage_size: "",
    private_ip_allowlist: "",
  },
  plans: ["Lite", "Standard", "Enterprise"],
  throughputs: null,
  storageSizes: null,
};

EventStreamsForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    plan: PropTypes.string,
    resource_group: PropTypes.string,
    endpoint: PropTypes.string,
    throughput: PropTypes.string,
    storage_size: PropTypes.string,
    private_ip_allowlist: PropTypes.string,
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  plans: PropTypes.arrayOf(PropTypes.string),
  throughputs: PropTypes.arrayOf(PropTypes.string),
  storageSizes: PropTypes.arrayOf(PropTypes.string),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default EventStreamsForm;
