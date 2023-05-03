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
import CbrContextForm from "./CbrContextForm";
import CbrResourceAttributeForm from "./CbrResourceAttributeForm";
import CbrTagForm from "./CbrTagForm";

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
      invalidCallback: this.props.invalidExclusionCallback,
      invalidTextCallback: this.props.invalidContextTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.contextProps }, exclusionInnerFormProps);

    let addressInnerFormProps = {
      invalidCallback: this.props.invalidAddressCallback,
      invalidTextCallback: this.props.invalidResourceAttributeTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.resourceAttributeProps }, addressInnerFormProps);

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
          <IcseSelect
            id={this.props.data.name + "-cbr-zone-enforcement-mode"}
            name={"enforcement_mode"}
            className={"fieldWidthSmaller"}
            value={this.state.enforcement_mode}
            labelText="Enforcement Mode"
            groups={["Enabled", "Disabled", "Report"]}
            disableInvalid={true}
            formName="cbr-zone"
            handleInputChange={this.handleInputChange}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-zone-api-type-id"}
            componentName={this.props.data.name + "-cbr-zone"}
            field={"api_type_id"}
            value={this.state.api_type_id}
            labelText={"API Type ID"}
            onChange={this.handleInputChange}
            invalid={false}
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
            {/* contexts */}
            <IcseFormTemplate
              name="Contexts"
              subHeading
              addText="Create a Context"
              arrayData={this.props.data.contexts}
              innerForm={CbrContextForm}
              disableSave={this.props.contextProps.disableSave}
              onDelete={this.props.contextProps.onDelete}
              onSave={this.props.contextProps.onSave}
              onSubmit={this.props.contextProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...exclusionInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cos_keys",
                disableSave: this.props.contextProps.disableSave,
                type: "formInSubForm",
              }}
            />
            {/* resource attributes */}
            <IcseFormTemplate
              name="Resource Attributes"
              subHeading
              addText="Create a Resource Attribute"
              arrayData={this.props.data.resource_attributes}
              innerForm={CbrResourceAttributeForm}
              disableSave={this.props.resourceAttributeProps.disableSave}
              onDelete={this.props.resourceAttributeProps.onDelete}
              onSave={this.props.resourceAttributeProps.onSave}
              onSubmit={this.props.resourceAttributeProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...addressInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cos_keys",
                disableSave: this.props.resourceAttributeProps.disableSave,
                type: "formInSubForm",
              }}
            />
            {/* tags */}
            <IcseFormTemplate
              name="Tags"
              subHeading
              addText="Create a Tag"
              arrayData={this.props.data.tags}
              innerForm={CbrTagForm}
              disableSave={this.props.tagProps.disableSave}
              onDelete={this.props.tagProps.onDelete}
              onSave={this.props.tagProps.onSave}
              onSubmit={this.props.tagProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...tagInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cos_keys",
                disableSave: this.props.tagProps.disableSave,
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
