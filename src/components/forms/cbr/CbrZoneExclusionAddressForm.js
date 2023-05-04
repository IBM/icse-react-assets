import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import { cbrInvalid } from "../../../lib/cbr-utils";

/**
 * Context-based restriction addresses / exclusions
 */
class CbrZoneExclusionAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-cbr-tag"}
            componentName={this.props.data.name + "-cbr-tag"}
            className={"fieldWidthSmaller"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={false}
            hideHelperText={true}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-account-id"}
            componentName={this.props.data.name + "-cbr-zone"}
            field={"account_id"}
            value={this.state.account_id}
            labelText={"Account ID"}
            onChange={this.handleInputChange}
            hideHelperText={true}
            className="fieldWidthSmaller"
            {...cbrInvalid("account_id", this.state.account_id)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-location"}
            componentName={this.props.data.name + "cbr-zone-location"}
            className={"fieldWidthSmaller"}
            labelText={"Location"}
            field="location"
            value={this.state.location}
            onChange={this.handleInputChange}
            hideHelperText={true}
            {...cbrInvalid("location", this.state.location)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-service-name"}
            componentName={this.props.data.name + "cbr-zone-service-name"}
            className={"fieldWidthSmaller"}
            labelText={"Service Name"}
            field="service_name"
            value={this.state.service_name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            {...cbrInvalid("service_name", this.state.service_name)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-service-type"}
            componentName={this.props.data.name + "cbr-zone-service-type"}
            className={"fieldWidthSmaller"}
            labelText={"Service Type"}
            field="service_type"
            value={this.state.service_type}
            onChange={this.handleInputChange}
            hideHelperText={true}
            {...cbrInvalid("service_type", this.state.service_type)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            labelText="Type"
            name="type"
            formName={this.props.data.name + "cbr-zone-type"}
            groups={["ipAddress", "ipRange", "subnet", "vpc", "serviceRef"]}
            value={this.state.type}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Type"
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-value"}
            componentName={this.props.data.name + "cbr-zone-value"}
            className={"fieldWidthSmaller"}
            labelText={"Value"}
            field="value"
            value={this.state.value}
            onChange={this.handleInputChange}
            invalid={false}
            hideHelperText={true}
          />
        </IcseFormGroup>
      </>
    );
  }
}

CbrZoneExclusionAddressForm.defaultProps = {
  data: {
    name: "",
    account_id: "",
    location: "",
    service_name: "",
    service_type: "",
    type: "ipAddress",
    value: "",
  },
};

CbrZoneExclusionAddressForm.propTypes = {
  data: PropTypes.shape({
    account_id: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
    service_name: PropTypes.string,
    service_type: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
  }),
  isModal: PropTypes.bool,
};

export default CbrZoneExclusionAddressForm;
