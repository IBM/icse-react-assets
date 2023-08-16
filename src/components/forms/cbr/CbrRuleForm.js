import { TextArea } from "@carbon/react";
import { titleCase, transpose } from "lazy-z";
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
import { handleRuleInputChange } from "../../../lib/forms";

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
    this.setState(handleRuleInputChange(this.state, event));
  }

  render() {
    // set up props for subforms
    let contextInnerFormProps = {};
    transpose(
      { ...this.props.contextProps, arrayParentName: this.props.data.name },
      contextInnerFormProps
    );

    let resourceAttributeInnerFormProps = {};
    transpose(
      {
        ...this.props.resourceAttributeProps,
        arrayParentName: this.props.data.name,
      },
      resourceAttributeInnerFormProps
    );

    let tagInnerFormProps = {};
    transpose(
      { ...this.props.tagProps, arrayParentName: this.props.data.name },
      tagInnerFormProps
    );

    return (
      <div id="cbr-rule-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-cbr-rule"}
            componentName={this.props.data.name + "-cbr-rule"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalidCallback={() =>
              this.props.invalidNameCallback(this.state, this.props)
            }
            invalidText={this.props.invalidNameTextCallback(
              this.state,
              this.props
            )}
            forceKebabCase
          />
          <IcseSelect
            id={this.props.data.name + "-cbr-rule-enforcement-mode"}
            name={"enforcement_mode"}
            className={"fieldWidthSmaller"}
            value={titleCase(this.state.enforcement_mode)}
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
            tooltip={{
              content:
                "APIs can be scoped for some service types that adopt CBR. This is mostly used for managed database services.",
              alignModal: "right",
              align: "right"   
            }}
            id={this.props.data.name + "-cbr-rule-api-type-id"}
            labelText="API Type ID" // needed to override title case capitalization
            field={"api_type_id"}
            value={this.state.api_type_id}
            onChange={this.handleInputChange}
            optional
            invalidCallback={() =>
              this.props.invalidCallback("api_type_id", this.state, this.props)
            }
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
            labelText="(Optional) Description"
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
              tooltip={{
                content: "Contexts define where your resource can be accessed.",
                link: "https://cloud.ibm.com/docs/account?topic=account-context-restrictions-whatis#restriction-context",
                align: "top-left",
              }}
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
                submissionFieldName: "contexts",
                disableSave: this.props.contextProps.disableSave,
                type: "subForm",
              }}
            />
            {/* resource attributes */}
            <IcseFormTemplate
              name="Resource Attributes"
              subHeading
              tooltip={{
                content:
                  "A cloud resource is specified by resource attributes.",
                link: "https://cloud.ibm.com/docs/account?topic=account-context-restrictions-whatis#restriction-rules",
              }}
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
                submissionFieldName: "resource_attributes",
                disableSave: this.props.resourceAttributeProps.disableSave,
                type: "subForm",
              }}
            />
            {/* tags */}
            <IcseFormTemplate
              name="Tags"
              subHeading
              tooltip={{
                content: "A cloud resource can also be specified using tags.",
                align: "top-left",
              }}
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
                submissionFieldName: "tags",
                disableSave: this.props.tagProps.disableSave,
                type: "subForm",
              }}
            />
          </>
        )}
      </div>
    );
  }
}

CbrRuleForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    description: "",
    enforcement_mode: "enabled",
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
  propsMatchState: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  contextProps: PropTypes.shape({
    // these should not be required in modal
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func,
  }).isRequired,
  resourceAttributeProps: PropTypes.shape({
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func,
  }).isRequired,
  tagProps: PropTypes.shape({
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    disableSave: PropTypes.func,
    invalidCallback: PropTypes.func,
    invalidTextCallback: PropTypes.func,
    invalidNameCallback: PropTypes.func,
    invalidNameTextCallback: PropTypes.func,
  }).isRequired,
};

export default CbrRuleForm;
