import React, { Component } from "react";
import { NumberInput, TextArea } from "@carbon/react";
import PropTypes from "prop-types";
import { isIpStringInvalid, isRangeInvalid } from "../../lib/iam-utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseSelect } from "../Dropdowns";
import { IcseTextInput, IcseToggle } from "../Inputs";
import { ToolTipWrapper } from "../Tooltips";
import { IcseFormGroup } from "../Utils";
import {
  restrictMenuItems,
  mfaMenuItems,
  iamItems,
  handleNumberInputChange,
  handleAllowedIps,
  handleSelectChange,
} from "../../lib/forms/iam";

/**
 * IAM Account Settings form
 */

class IamAccountSettingsForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.state.enable = true;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNumberInputChange = this.handleNumberInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAllowedIps = this.handleAllowedIps.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
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
   * handle input change of number-only fields
   * @param {event} event
   */
  handleNumberInputChange(event) {
    let value = handleNumberInputChange(event);
    if (value !== null) {
      this.setState(value);
    }
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * Handle input change for allowed ips text field
   * @param {event} event
   */
  handleAllowedIps(event) {
    this.setState(handleAllowedIps(event));
  }

  /**
   * Handle input change for a select
   * @param {event} event
   */
  handleSelectChange(event) {
    this.setState(handleSelectChange(event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* if match number input */}
          <IcseTextInput
            componentName={"IAM Account Settings"}
            className="fieldWidthSmaller"
            tooltip={{
              content:
                'Version of the account settings to update, if no value is supplied then the default value "*" is used to indicate to update any version available. This might result in stale updates.',
              align: "top-left",
            }}
            id="iam-if-match"
            placeholder="1"
            labelText="Version"
            value={this.state.if_match}
            onChange={this.handleNumberInputChange}
            field="if_match"
            invalid={this.props.invalidCallback(
              "if_match",
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidTextCallback(
              "if_match",
              this.state,
              this.props,
            )}
          />
          {/* mfa dropdown*/}
          <IcseSelect
            value={iamItems[this.state.mfa].display}
            formName="IAM Account Settings"
            className="textInputMedium"
            groups={mfaMenuItems}
            handleInputChange={this.handleSelectChange}
            labelText="Multi-Factor Authentication"
            name="mfa"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* include history toggle */}
          <IcseToggle
            tooltip={{
              content:
                "Defines if the entity history is included in the response.",
              align: "top-left",
            }}
            labelText="Include History"
            defaultToggled={this.state.include_history}
            onToggle={() => this.handleToggle("include_history")}
            className="fieldWidthSmaller"
            id="iam-include-history"
          />
          {/* service id dropdown */}
          <IcseSelect
            formName="IAM Account Settings"
            name="restrict_create_service_id"
            groups={restrictMenuItems}
            value={iamItems[this.state.restrict_create_service_id].display}
            labelText="Restrict Creation of Service IDs"
            handleInputChange={this.handleSelectChange}
          />
          {/* platform api key dropdown*/}
          <IcseSelect
            formName="IAM Account Settings"
            name="restrict_create_platform_apikey"
            groups={restrictMenuItems}
            value={iamItems[this.state.restrict_create_platform_apikey].display}
            labelText="Restrict Creation of API Keys"
            handleInputChange={this.handleSelectChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* max sessions */}
          <IcseTextInput
            tooltip={{
              content: "The number of sessions allowed per user at a time",
              align: "bottom-left",
              alignModal: "bottom-left",
            }}
            componentName={"IAM Account Settings"}
            placeholder="1"
            field="max_sessions_per_identity"
            value={this.state.max_sessions_per_identity || ""}
            className="fieldWidthSmaller"
            onChange={this.handleNumberInputChange}
            labelText="Max Sessions Per Identity"
            invalid={this.props.invalidCallback(
              "max_sessions_per_identity",
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidTextCallback(
              "max_sessions_per_identity",
              this.state,
              this.props,
            )}
            id="iam-max-sessions-per-id"
          />
          {/* session expiration */}
          <NumberInput
            placeholder="900"
            label="Session Expiration (sec)"
            id="iam-session-expiration-seconds"
            allowEmpty={true}
            value={this.state.session_expiration_in_seconds || ""}
            step={1}
            onChange={this.handleInputChange}
            name="session_expiration_in_seconds"
            hideSteppers={true}
            min={900}
            max={86400}
            invalid={isRangeInvalid(
              this.state.session_expiration_in_seconds,
              900,
              86400,
            )}
            invalidText="Must be a whole number between 900 and 86400"
            className="fieldWidth leftTextAlign"
          />
          {/* session invalidation */}
          <NumberInput
            placeholder="900"
            label="Session Invalidation (sec)"
            id="iam-session-invalidation-seconds"
            allowEmpty={true}
            value={this.state.session_invalidation_in_seconds || ""}
            step={1}
            onChange={this.handleInputChange}
            name="session_invalidation_in_seconds"
            hideSteppers={true}
            invalid={isRangeInvalid(
              this.state.session_invalidation_in_seconds,
              900,
              7200,
            )}
            invalidText="Must be a whole number between 900 and 7200"
            className="fieldWidth leftTextAlign"
            min={900}
            max={7200}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* text area for allowed ips */}
          <ToolTipWrapper
            tooltip={{
              content:
                "IP addresses and subnets from which IAM tokens can be created for the account",
              align: "top-left",
            }}
            className="textInputMedium"
            innerForm={TextArea}
            id="iam-allowed-ip"
            labelText="Allowed IPs"
            onChange={this.handleAllowedIps}
            placeholder={
              this.state.allowed_ip_addresses || "X.X.X.X, X.X.X.X/X, ..."
            }
            invalid={isIpStringInvalid(this.state.allowed_ip_addresses)}
            invalidText="Please enter a comma separated list of IP addresses or CIDR blocks"
          />
        </IcseFormGroup>
      </>
    );
  }
}

IamAccountSettingsForm.defaultProps = {
  data: {
    if_match: "",
    mfa: mfaMenuItems[0],
    include_history: false,
    restrict_create_service_id: iamItems[restrictMenuItems[0]].value,
    restrict_create_platform_apikey: iamItems[restrictMenuItems[0]].value,
    max_sessions_per_identity: "",
    session_expiration_in_seconds: "",
    session_invalidation_in_seconds: "",
    allowed_ip_addresses: "",
  },
  invalidCallback: () => {
    return false;
  },
  invalidTextCallback: () => {
    return "Invalid";
  },
};

IamAccountSettingsForm.propTypes = {
  data: PropTypes.shape({
    if_match: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mfa: PropTypes.string,
    include_history: PropTypes.bool,
    restrict_create_service_id: PropTypes.oneOf(
      restrictMenuItems.map((item) => {
        return iamItems[item].value;
      }),
    ),
    restrict_create_platform_apikey: PropTypes.oneOf(
      restrictMenuItems.map((item) => {
        return iamItems[item].value;
      }),
    ),
    max_sessions_per_identity: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    session_expiration_in_seconds: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    session_invalidation_in_seconds: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    allowed_ip_addresses: PropTypes.string,
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default IamAccountSettingsForm;
