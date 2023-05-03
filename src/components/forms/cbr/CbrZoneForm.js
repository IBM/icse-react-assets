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
      invalidTextCallback: this.props.invalidContextTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.exclusionProps }, exclusionInnerFormProps);

    let addressInnerFormProps = {
      invalidCallback: this.props.invalidAddressCallback,
      invalidTextCallback: this.props.invalidResourceAttributeTextCallback,
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
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-account-id"}
            componentName={this.props.data.name + "-cbr-zone"}
            field={"account_id"}
            value={this.state.account_id}
            labelText={"Account ID"}
            onChange={this.handleInputChange}
            invalid={false}
            invalidText={"nyi"}
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
            invalidText={"Invalid description"}
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
    enforcement_mode: "",
    api_type_id: "",
    contexts: [],
    resource_attributes: [],
    tags: [],
  },
};

CbrZoneForm.propTypes = {
  isModal: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    enforcement_mode: PropTypes.string.isRequired,
    api_type_id: PropTypes.string.isRequired,
    contexts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
    ),
    resource_attributes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
    ),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        operator: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired
    ),
  }),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
};

export default CbrZoneForm;
