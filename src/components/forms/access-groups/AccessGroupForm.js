import React from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import IcseFormTemplate from "../../IcseFormTemplate";
import AccessGroupPolicyForm from "./AccessGroupPolicyForm";
import AccessGroupDynamicPolicyForm from "./AccessGroupDynamicPolicyForm";
import { transpose } from "lazy-z";
import PropTypes from "prop-types";

class AccessGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    let dynamicPolicyProps = {
      invalidCallback: this.props.invalidDynamicPolicyCallback,
      invalidTextCallback: this.props.invalidDynamicPolicyTextCallback,
      arrayParentName: this.props.data.name,
      helperTextCallback: this.props.dynamicPolicyHelperTextCallback,
    };
    transpose({ ...this.props.dynamicPolicyProps }, dynamicPolicyProps);
    let policyProps = {
      invalidCallback: this.props.invalidPolicyCallback,
      invalidTextCallback: this.props.invalidPolicyTextCallback,
      arrayParentName: this.props.data.name,
      helperTextCallback: this.props.policyHelperTextCallback,
    };
    transpose({ ...this.props.policyProps }, policyProps);
    return (
      <>
        <IcseFormGroup>
          {/* vpc name */}
          <IcseNameInput
            id="name"
            componentName="access_groups"
            value={this.state.name}
            onChange={this.handleInputChange}
            className="fieldWidth"
            hideHelperText
            invalid={this.props.invalidCallback("name", this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id="description"
            componentName="description"
            tooltip={{
              content: "Description of the access group",
            }}
            field="description"
            labelText="Description"
            value={this.state.description}
            onChange={this.handleInputChange}
            isModal={this.props.isModal}
            className="textInputWide"
            hideHelperText
            invalid={false}
          />
        </IcseFormGroup>
        {this.props.isModal === false && (
          <>
            <IcseFormTemplate
              name="Policies"
              subHeading
              addText="Create a Policy"
              arrayData={this.props.data.policies}
              innerForm={AccessGroupPolicyForm}
              disableSave={this.props.policyProps.disableSave}
              onDelete={this.props.policyProps.onDelete}
              onSave={this.props.policyProps.onSave}
              onSubmit={this.props.policyProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...policyProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "policies",
                disableSave: () => {
                  return false;
                },
                type: "formInSubForm",
              }}
            />
            <IcseFormTemplate
              name="Dynamic Policies"
              subHeading
              addText="Create a Dynamic Policy"
              arrayData={this.props.data.dynamic_policies}
              innerForm={AccessGroupDynamicPolicyForm}
              disableSave={this.props.dynamicPolicyProps.disableSave}
              onDelete={this.props.dynamicPolicyProps.onDelete}
              onSave={this.props.dynamicPolicyProps.onSave}
              onSubmit={this.props.dynamicPolicyProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...dynamicPolicyProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "dynamic_policies",
                disableSave: () => {
                  return false;
                },
                type: "formInSubForm",
              }}
            />
          </>
        )}
      </>
    );
  }
}

AccessGroupForm.defaultProps = {
  data: {
    name: "",
    description: "",
  },
  isModal: false,
};

AccessGroupForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default AccessGroupForm;
