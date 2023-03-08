import React from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { AccessGroupPolicyForm } from "./AccessGroupPolicyForm";
import { AccessGroupDynamicPolicyForm } from "./AccessGroupDynamicPolicyForm";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput } from "../../Inputs";
import PropTypes from "prop-types";

class AccessGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
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
    return (
      <>
        <IcseFormGroup>
          {/* vpc name */}
          <IcseNameInput
            id="name"
            component="access_groups"
            componentName="access_groups"
            value={this.state.name}
            onChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseNameInput
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
            invalid={false}
            className="textInputWide"
          />
        </IcseFormGroup>
        {!this.props.isModal && (
          <>
            {/* <AccessGroupPolicies
              slz={this.props.slz}
              arrayParentName={this.props.data.name}
            />
            <AccessGroupDynamicPolicies
              slz={this.props.slz}
              arrayParentName={this.props.data.name}
            /> */}
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
};

export default AccessGroupForm;
