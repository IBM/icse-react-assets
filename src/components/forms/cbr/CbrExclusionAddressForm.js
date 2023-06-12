import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import {
  cbrInvalid,
  cbrTypeNameMap,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleExclusionAddressInputChange,
} from "../../../lib/forms/cbr-utils";
/**
 * Context-based restriction addresses / exclusions
 */
class CbrExclusionAddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(handleExclusionAddressInputChange(this.state, event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-cbr-address-exclusion"}
            componentName={this.props.data.name + "-cbr-zone"}
            className={"fieldWidthSmaller"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            hideHelperText={true}
            forceKebabCase
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-account-id"}
            componentName={this.props.data.name + "-cbr-zone"}
            field={"account_id"}
            labelText="Account ID" // need to override case on account id
            value={this.state.account_id}
            onChange={this.handleInputChange}
            hideHelperText={true}
            className="fieldWidthSmaller"
            {...cbrInvalid("account_id", this.state.account_id)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-location"}
            componentName={this.props.data.name + "cbr-zone-location"}
            className={"fieldWidthSmaller"}
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
            field="service_name"
            value={this.state.service_name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            {...cbrInvalid("service_name", this.state.service_name)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-service-instance"}
            componentName={this.props.data.name + "cbr-zone-service-instance"}
            className={"fieldWidthSmaller"}
            field="service_instance"
            value={this.state.service_instance}
            onChange={this.handleInputChange}
            hideHelperText={true}
            {...cbrInvalid("service_instance", this.state.service_instance)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-service-type"}
            componentName={this.props.data.name + "cbr-zone-service-type"}
            className={"fieldWidthSmaller"}
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
            groups={["IP Address", "IP Range", "Subnet", "VPC", "Service Ref"]}
            value={cbrTypeNameMap[this.state.type]}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Type"
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-value"}
            componentName={this.props.data.name + "cbr-zone-value"}
            className={"fieldWidthSmaller"}
            field="value"
            value={this.state.value}
            onChange={this.handleInputChange}
            hideHelperText={true}
            placeholder={cbrValuePlaceholder(this.state.type)}
            {...cbrValueInvalid(this.state.type, this.state.value)}
          />
        </IcseFormGroup>
      </>
    );
  }
}

CbrExclusionAddressForm.defaultProps = {
  data: {
    name: "",
    account_id: "",
    location: "",
    service_name: "",
    service_instance: "",
    service_type: "",
    type: "ipAddress",
    value: "",
  },
  isModal: false,
};

CbrExclusionAddressForm.propTypes = {
  data: PropTypes.shape({
    account_id: PropTypes.string.isRequired,
    location: PropTypes.string,
    name: PropTypes.string,
    service_name: PropTypes.string,
    service_instance: PropTypes.string,
    service_type: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default CbrExclusionAddressForm;
