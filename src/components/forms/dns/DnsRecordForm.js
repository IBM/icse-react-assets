import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import PropTypes from "prop-types";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import { NumberInput } from "@carbon/react";
import { isRangeInvalid } from "../../../lib/iam-utils";

/**
 * DnsRecordForm
 * @param {Object} props
 */
class DnsRecordForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    let dnsComponent = this.props.isModal
      ? "new-dns-record"
      : this.props.data.name;
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.state.name + "-name"}
            labelText="DNS Record Name"
            componentName={dnsComponent}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
            className="fieldWidthSmaller"
          />
          <IcseSelect
            name="dns_zone"
            formName={dnsComponent + "-dns-zone"}
            labelText="DNS Zone"
            groups={this.props.dnsZones}
            value={this.state.dns_zone}
            handleInputChange={this.handleInputChange}
            invalidText="Select a DNS Zone."
            className="fieldWidthSmaller"
          />
          <IcseSelect
            name="type"
            formName={dnsComponent + "-type"}
            labelText="DNS Record Type"
            groups={["A", "AAA", "CNAME", "PTR", "TXT", "MX", "SRV"]}
            value={this.state.type}
            handleInputChange={this.handleInputChange}
            invalidText="Select a DNS Record Type."
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            componentName="DNS Record"
            field="rdata"
            labelText="Resource Data"
            value={this.state.rdata}
            id={this.state.name + "-rdata"}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <NumberInput
            label="Time To Live"
            id={dnsComponent + "-ttl"}
            allowEmpty={true}
            value={Math.round(this.state.ttl)}
            onChange={this.handleInputChange}
            name="ttl"
            hideSteppers={true}
            min={300}
            max={2147483647}
            invalid={isRangeInvalid(this.state.ttl, 300, 2147483647)}
            invalidText="Must be a whole number (representing seconds) within range 300 to 2147483647"
            className="fieldWidthSmaller"
          />
          {this.state.type === "MX" && (
            <>
              <NumberInput
                label="Preference"
                id={dnsComponent + "-preference"}
                allowEmpty={false}
                value={Math.round(this.state.preference)}
                onChange={this.handleInputChange}
                name="preference"
                hideSteppers={true}
                min={0}
                max={65535}
                step={1}
                invalid={isRangeInvalid(this.state.preference, 0, 65535)}
                invalidText="Must be a whole number within range."
                className="fieldWidthSmaller"
              />
            </>
          )}
        </IcseFormGroup>
        {this.state.type === "SRV" && (
          <>
            <IcseFormGroup>
              <NumberInput
                label="DNS Record Port"
                id={dnsComponent + "-port"}
                allowEmpty={false}
                value={Math.round(this.state.port)}
                onChange={this.handleInputChange}
                name="port"
                hideSteppers={true}
                min={1}
                max={65535}
                step={1}
                invalid={isRangeInvalid(this.state.port, 1, 65535)}
                invalidText="Must be a whole number between 1 and 65535"
                className="fieldWidthSmaller"
              />
              <IcseSelect
                formName={dnsComponent + "-protocol"}
                name="dns_record_protocol"
                groups={["TCP", "UDP"]}
                value={this.state.protocol}
                labelText="DNS Record Protocol"
                handleInputChange={this.handleInputChange}
                className="fieldWidthSmaller"
              />
              <NumberInput
                label="DNS Record Priority"
                id={dnsComponent + "-priority"}
                allowEmpty={false}
                value={Math.round(this.state.priority)}
                onChange={this.handleInputChange}
                name="priority"
                hideSteppers={true}
                min={0}
                max={65535}
                step={1}
                invalid={isRangeInvalid(this.state.priority, 0, 65535)}
                invalidText="Must be a whole number between 0 and 65535"
                className="fieldWidthSmaller"
              />
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseTextInput
                id={dnsComponent + "-service"}
                componentName={"DNS Record"}
                field="service"
                value={this.state.service}
                onChange={this.handleInputChange}
                labelText={"DNS Record Service"}
                invalid={this.state.service.charAt(0) !== "_"}
                invalidText="Service must start with a '_'."
                className={"fieldWidthSmaller"}
              />
              <NumberInput
                label="DNS Record Weight"
                id={dnsComponent + "-weight"}
                allowEmpty={false}
                value={Math.round(this.state.weight)}
                onChange={this.handleInputChange}
                name="service"
                hideSteppers={true}
                min={0}
                max={65535}
                step={1}
                invalid={isRangeInvalid(this.state.weight, 0, 65535)}
                invalidText="Must be a whole number between 0 and 65535"
                className="fieldWidthSmaller"
              />
            </IcseFormGroup>
          </>
        )}
      </>
    );
  }
}

DnsRecordForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    dns_zone: "",
    type: "",
    rdata: "",
    ttl: 300,
    port: 80,
    protocol: "",
    priority: 0,
    service: "",
    weight: 0,
    preference: 0,
  },
  invalidCallback: () => {
    return false;
  },
  invalidTextCallback: () => {
    return "Invalid";
  },
  helperTextCallback: () => {
    return "";
  },
  dnsZones: [],
};

DnsRecordForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    dns_zone: PropTypes.string,
    type: PropTypes.string,
    rdata: PropTypes.string,
    ttl: PropTypes.number,
    port: PropTypes.number,
    protocol: PropTypes.string,
    priority: PropTypes.number,
    service: PropTypes.string,
    weight: PropTypes.number,
    preference: PropTypes.number,
  }).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  dnsZones: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default DnsRecordForm;
