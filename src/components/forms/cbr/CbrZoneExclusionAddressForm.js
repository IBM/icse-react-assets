import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import { cbrInvalid, cbrValueInvalid } from "../../../lib/cbr-utils";
import { contains } from "lazy-z";

const typeNameMap = {
  ipAddress: "IP Address",
  ipRange: "IP Range",
  subnet: "Subnet",
  vpc: "VPC",
  serviceRef: "Service Ref",
};

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
    if (name === "type")
      value = Object.keys(typeNameMap).find(
        (key) => typeNameMap[key] === value
      );
    this.setState({ [name]: value });
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
            groups={["IP Address", "IP Range", "Subnet", "VPC", "Service Ref"]}
            value={typeNameMap[this.state.type]}
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
            hideHelperText={true}
            placeholder={
              contains(["ipRange", "ipAddress"], this.state.type)
                ? "x.x.x.x"
                : `my-cbr-zone-${this.state.type}`
            }
            {...cbrValueInvalid(this.state.type, this.state.value)}
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
  isModal: false,
};

CbrZoneExclusionAddressForm.propTypes = {
  data: PropTypes.shape({
    account_id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    service_name: PropTypes.string.isRequired,
    service_type: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default CbrZoneExclusionAddressForm;
