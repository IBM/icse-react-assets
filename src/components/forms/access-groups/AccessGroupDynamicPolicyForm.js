import React from "react";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} from "../../../component-utils";
import { conditionOperators } from "../../../../lib";
import { eachKey } from "lazy-z";
import PropTypes from "prop-types";
import {
  IcseFormGroup,
  IcseHeading,
  IcseNameInput,
  IcseNumberSelect,
  IcseSelect,
  IcseTextInput,
} from "../../../../dist/index.cjs";

class AccessGroupDynamicPolicyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputCondition = this.handleInputCondition.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputCondition(event) {
    let { name, value } = event.target;
    let conditions = { ...this.state.conditions };
    if (name === "operator") {
      conditions[name] = snakeCase(value.replace(/[()]/g, "")).toUpperCase(); // remove all parentheses
    } else {
      conditions[name] = value;
    }
    this.setState({ conditions });
  }

  render() {
    let conditionOperatorGroups = [];
    eachKey(conditionOperators, (key) => {
      conditionOperatorGroups.push(conditionOperators[key]);
    });
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id="name"
            component="dynamic_policies"
            field="name"
            labelText="Name"
            value={this.state.name}
            componentProps={this.props}
            onChange={this.handleInputChange}
          />
          <IcseNumberSelect
            tooltip={{
              content:
                "How many hours authenticated users can work before refresh",
            }}
            component="expiration"
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
            componentName="identity_provider"
            field="identity_provider"
            isModal={this.props.isModal}
            labelText="Identity Provider"
            value={this.state.identity_provider}
            invalid={"sixOrMore"}
            componentProps={this.props}
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
            componentName="claim"
            field="claim"
            isModal={this.props.isModal}
            labelText="Condition Claim"
            value={this.state.conditions.claim}
            componentProps={this.props}
            invalid={false}
            onChange={this.handleInputCondition}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            component="operator"
            tooltip={{
              content: "The operation to perform on the claim.",
            }}
            value={conditionOperators[this.state.conditions.operator]}
            groups={conditionOperatorGroups}
            field="operator"
            isModal={this.props.isModal}
            name="operator"
            disableInvalid
            labelText="Conditon Operator"
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
            componentProps={this.props}
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
};

export default AccessGroupDynamicPolicyForm;
