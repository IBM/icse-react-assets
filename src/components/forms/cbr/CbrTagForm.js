import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";

/**
 * Context-based restriction tags
 */
class CbrTagForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {*} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    return (
      <IcseFormGroup>
        <IcseNameInput
          id={this.props.data.name + "-cbr-tag"}
          componentName={this.props.data.name + "-cbr-tag"}
          className={"fieldWidthSmaller"}
          value={this.state.name}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidNameCallback(this.state, this.props)
          }
          invalidText={this.props.invalidNameTextCallback(
            this.state,
            this.props,
          )}
          hideHelperText
          forceKebabCase
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-tag-operator"}
          componentName={this.props.data.name + "-cbr-tag"}
          className={"fieldWidthSmaller"}
          field="operator"
          value={this.state.operator}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidCallback("operator", this.state, this.props)
          }
          invalidText={this.props.invalidTextCallback(
            "operator",
            this.state,
            this.props,
          )}
          hideHelperText
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-tag-value"}
          componentName={this.props.data.name + "-cbr-tag"}
          className={"fieldWidthSmaller"}
          field="value"
          value={this.state.value}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidCallback("value", this.state, this.props)
          }
          invalidText={this.props.invalidTextCallback(
            "value",
            this.state,
            this.props,
          )}
          hideHelperText
        />
      </IcseFormGroup>
    );
  }
}

CbrTagForm.defaultProps = {
  data: {
    name: "",
    operator: "",
    value: "",
  },
  arrayParentName: "",
};

CbrTagForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    operator: PropTypes.string,
    value: PropTypes.string.isRequired,
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string,
};

export default CbrTagForm;
