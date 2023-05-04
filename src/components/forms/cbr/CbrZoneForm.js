import { TextArea } from "@carbon/react";
import { transpose } from "lazy-z";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { IcseSelect } from "../../Dropdowns";
import IcseFormTemplate from "../../IcseFormTemplate";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import CbrZoneExclusionAddressForm from "./CbrZoneExclusionAddressForm.js";
import { cbrInvalid } from "../../../lib/cbr-utils";

/**
 * Context-based restriction zones
 */
class CbrZoneForm extends Component {
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
    // set up props for subforms
    let exclusionInnerFormProps = {
      type: "exclusion",
      invalidCallback: this.props.invalidExclusionCallback,
      invalidTextCallback: this.props.invalidExclusionTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.exclusionProps }, exclusionInnerFormProps);

    let addressInnerFormProps = {
      invalidCallback: this.props.invalidAddressCallback,
      invalidTextCallback: this.props.invalidAddressTextCallback,
      arrayParentName: this.props.data.name,
      type: "address",
    };
    transpose({ ...this.props.addressProps }, addressInnerFormProps);

    return (
      <div id="cbr-zone-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-cbr-zone"}
            componentName={this.props.data.name + "-cbr-zone"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-account-id"}
            componentName={this.props.data.name + "-cbr-zone"}
            field={"account_id"}
            value={this.state.account_id}
            labelText={"Account ID"}
            onChange={this.handleInputChange}
            {...cbrInvalid("account_id", this.state.account_id)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <TextArea
            id={this.props.data.name + "-cbr-zone-description"}
            className="textInputWide"
            name="description"
            value={this.state.description}
            labelText={"Description"}
            onChange={this.handleInputChange}
            invalid={
              this.state.description.length < 0 ||
              this.state.description.length > 300
            }
            invalidText={
              "Invalid description, must be between 0 and 300 characters."
            }
            enableCounter={true}
          />
        </IcseFormGroup>
        {/* show subforms if not modal*/}
        {this.props.isModal !== true && (
          <>
            {/* Addresses */}
            <IcseFormTemplate
              name="Addresses"
              subHeading
              addText="Create an Address"
              arrayData={this.props.data.addresses}
              innerForm={CbrZoneExclusionAddressForm}
              disableSave={this.props.addressProps.disableSave}
              onDelete={this.props.addressProps.onDelete}
              onSave={this.props.addressProps.onSave}
              onSubmit={this.props.addressProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...addressInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cbr_zones",
                disableSave: this.props.addressProps.disableSave,
                type: "formInSubForm",
              }}
            />
            {/* exclusions */}
            <IcseFormTemplate
              name="Exclusions"
              subHeading
              addText="Create an Exclusion"
              arrayData={this.props.data.exclusions}
              innerForm={CbrZoneExclusionAddressForm}
              disableSave={this.props.exclusionProps.disableSave}
              onDelete={this.props.exclusionProps.onDelete}
              onSave={this.props.exclusionProps.onSave}
              onSubmit={this.props.exclusionProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...exclusionInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cbr_zones",
                disableSave: this.props.exclusionProps.disableSave,
                type: "formInSubForm",
              }}
            />
          </>
        )}
      </div>
    );
  }
}

CbrZoneForm.defaultProps = {
  data: {
    name: "",
    description: "",
    account_id: "",
    addresses: [],
    exclusions: [],
  },
};

CbrZoneForm.propTypes = {
  account_id: PropTypes.string,
  name: PropTypes.string,

  addressProps: PropTypes.shape({
    disableSave: PropTypes.any,
    onDelete: PropTypes.any,
    onSave: PropTypes.any,
    onSubmit: PropTypes.any,
  }),
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    account_id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addresses: PropTypes.arrayOf(
      PropTypes.shape({
        account_id: PropTypes.string,
        location: PropTypes.string,
        name: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        service_name: PropTypes.string,
        service_type: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string.isRequired,
      }).isRequired
    ),
    exclusions: PropTypes.arrayOf(
      PropTypes.shape({
        account_id: PropTypes.string,
        location: PropTypes.string,
        name: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        service_name: PropTypes.string,
        service_type: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
  exclusionProps: PropTypes.shape({
    disableSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    onSubmit: PropTypes.func,
  }),
  invalidAddressCallback: PropTypes.any,
  invalidCallback: PropTypes.func.isRequired,
  invalidContextTextCallback: PropTypes.any,
  invalidExclusionCallback: PropTypes.any,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool,
  propsMatchState: PropTypes.any,
};

export default CbrZoneForm;
