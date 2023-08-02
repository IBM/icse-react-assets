import React from "react";
import PropTypes from "prop-types";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} from "../../component-utils";
import { IcseFormGroup, IcseHeading } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect, IcseNumberSelect } from "../../Dropdowns";
import { handleInputCondition } from "../../../lib/forms/access-groups";
import {
  conditionOperators,
  conditionOperatorGroups,
} from "../../../lib/constants";

class AccessGroupDynamicPolicyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCondition = this.handleInputCondition.bind(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change for conditions
   * @param {*} event
   */
  handleInputCondition(event) {
    this.setState(handleInputCondition(this.state, event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id="name"
            componentName="dynamic_policies"
            forceKebabCase
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            invalid={this.props.invalidCallback(this.state, this.props)}
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
          />
          <IcseNumberSelect
            tooltip={{
              content:
                "How many hours authenticated users can work before refresh",
            }}
            formName={this.props.data.name + "-dynamic-policies"}
            max={24}
            value={this.state.expiration}
            name="expiration"
            labelText="Expiration Hours"
            isModal={this.props.isModal}
            handleInputChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id="identity_provider"
            tooltip={{
              content: "URI for identity provider",
              alignModal: "bottom-left",
            }}
            componentName="dynamic_policies"
            field="identity_provider"
            isModal={this.props.isModal}
            value={this.state.identity_provider}
            invalid={this.props.invalidIdentityProviderCallback(
              this.state,
              this.props,
            )}
            onChange={this.handleInputChange}
            className="textInputWide"
          />
        </IcseFormGroup>
        <IcseFormGroup className="marginBottomSmall">
          <IcseHeading name="Condition Configuration" type="subHeading" />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id="claim"
            tooltip={{
              content: "Key value to evaluate the condition against",
              alignModal: "bottom-left",
            }}
            componentName="dynamic_policies"
            field="claim"
            isModal={this.props.isModal}
            labelText="Condition Claim"
            value={this.state.conditions.claim}
            invalid={false}
            onChange={this.handleInputCondition}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName={this.props.data.name + "-dynamic-policies"}
            tooltip={{
              content: "The operation to perform on the claim.",
            }}
            value={conditionOperators[this.state.conditions.operator]}
            groups={conditionOperatorGroups}
            field="operator"
            isModal={this.props.isModal}
            name="operator"
            disableInvalid
            labelText="Condition Operator"
            handleInputChange={this.handleInputCondition}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id="value"
            tooltip={{ content: "Value to be compared against" }}
            componentName="value"
            field="value"
            isModal={this.props.isModal}
            value={this.state.conditions.value}
            labelText="Condition Value"
            invalid={false}
            onChange={this.handleInputCondition}
          />
        </IcseFormGroup>
      </>
    );
  }
}

AccessGroupDynamicPolicyForm.defaultProps = {
  data: {
    name: "",
    identity_provider: "",
    expiration: 1,
    conditions: {
      claim: "",
      operator: "",
      value: "",
    },
  },
  isModal: false,
};

AccessGroupDynamicPolicyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    identity_provider: PropTypes.string.isRequired,
    expiration: PropTypes.number.isRequired,
    conditions: PropTypes.shape({
      claim: PropTypes.string.isRequired,
      operator: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  invalidIdentityProviderCallback: PropTypes.func.isRequired,
};

export default AccessGroupDynamicPolicyForm;
