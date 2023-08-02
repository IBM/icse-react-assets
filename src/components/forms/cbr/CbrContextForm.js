import React, { Component } from "react";
import PropTypes from "prop-types";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";

class CbrContextForm extends Component {
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
          id={this.props.data.name + "-cbr-context"}
          componentName={this.props.arrayParentName + "-cbr-context"}
          value={this.state.name}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidNameCallback(this.state, this.props)
          }
          invalidText={this.props.invalidNameTextCallback(
            this.state,
            this.props,
          )}
          hideHelperText={true}
          forceKebabCase
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-context-value"}
          componentName={this.props.arrayParentName + "-cbr-context"}
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
        />
      </IcseFormGroup>
    );
  }
}

CbrContextForm.defaultProps = {
  data: {
    name: "",
    value: "",
  },
  arrayParentName: "",
};

CbrContextForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string,
};

export default CbrContextForm;
