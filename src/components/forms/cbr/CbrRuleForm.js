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
 * Context-based restriction rules
 */
class CbrRuleForm extends Component {
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
    let contextInnerFormProps = {
      invalidCallback: this.props.invalidContextCallback,
      invalidTextCallback: this.props.invalidContextTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.contextProps }, contextInnerFormProps);

    let resourceAttributeInnerFormProps = {
      invalidCallback: this.props.invalidResourceAttributeCallback,
      invalidTextCallback: this.props.invalidResourceAttributeTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose(
      { ...this.props.resourceAttributeProps },
      resourceAttributeInnerFormProps
    );

    let tagInnerFormProps = {
      invalidCallback: this.props.invalidTagCallback,
      invalidTextCallback: this.props.invalidTagTextCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.tagProps }, tagInnerFormProps);

    return (
      <div id="cbr-rule-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-cbr-rule"}
            componentName={this.props.data.name + "-cbr-rule"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalid={this.props.invalidCallback("name", this.state, this.props)}
            invalidText={this.props.invalidTextCallback(
              "name",
              this.state,
              this.props
            )}
          />
          <IcseSelect
            id={this.props.data.name + "-cbr-rule-enforcement-mode"}
            name={"enforcement_mode"}
            className={"fieldWidthSmaller"}
            value={this.state.enforcement_mode}
            labelText="Enforcement Mode"
            groups={["Enabled", "Disabled", "Report"]}
            invalid={this.props.invalidCallback(
              "enforcement_mode",
              this.state,
              this.props
            )}
            invalidText={this.props.invalidTextCallback(
              "enforcement_mode",
              this.state,
              this.props
            )}
            formName="cbr-rule"
            handleInputChange={this.handleInputChange}
          />
          <IcseTextInput
            id={this.props.data.name + "-cbr-rule-api-type-id"}
            componentName={this.props.data.name + "-cbr-rule"}
            field={"api_type_id"}
            value={this.state.api_type_id}
            labelText={"API Type ID"}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(
              "api_type_id",
              this.state,
              this.props
            )}
            invalidText={this.props.invalidTextCallback(
              "api_type_id",
              this.state,
              this.props
            )}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <TextArea
            id={this.props.data.name + "-cbr-rule-description"}
            className="textInputWide"
            name="description"
            value={this.state.description}
            labelText={"Description"}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(
              "description",
              this.state,
              this.props
            )}
            invalidText={this.props.invalidTextCallback(
              "description",
              this.state,
              this.props
            )}
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
              innerFormProps={{ ...contextInnerFormProps }}
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
              innerFormProps={{ ...resourceAttributeInnerFormProps }}
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

CbrRuleForm.defaultProps = {
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

CbrRuleForm.propTypes = {
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
  contextProps: PropTypes.shape({
    isModal: PropTypes.bool,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }).isRequired,
  invalidContextCallback: PropTypes.func.isRequired,
  invalidContextTextCallback: PropTypes.func.isRequired,
  resourceAttributeProps: PropTypes.shape({
    isModal: PropTypes.bool,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }).isRequired,
  invalidResourceAttributeCallback: PropTypes.func.isRequired,
  invalidResourceAttributeTextCallback: PropTypes.func.isRequired,
  tagProps: PropTypes.shape({
    isModal: PropTypes.bool,
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }).isRequired,
  invalidTagCallback: PropTypes.func.isRequired,
  invalidTagTextCallback: PropTypes.func.isRequired,
};

export default CbrRuleForm;
