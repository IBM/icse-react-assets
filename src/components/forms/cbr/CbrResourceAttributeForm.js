import React, { Component } from "react";
import PropTypes from "prop-types";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";

class CbrResourceAttributeForm extends Component {
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
    return (
      <IcseFormGroup>
        <IcseNameInput
          id={this.props.data.name + "-cbr-ra"}
          componentName={this.props.data.name + "-cbr-ra"}
          value={this.state.name}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidNameCallback(this.state, this.props)
          }
          invalidText={this.props.invalidNameTextCallback(
            this.state,
            this.props
          )}
          hideHelperText={true}
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-ra-value"}
          componentName={this.props.data.name + "-cbr-ra"}
          labelText={"Value"}
          field="value"
          value={this.state.value}
          onChange={this.handleInputChange}
          invalidCallback={() =>
            this.props.invalidCallback("value", this.state, this.props)
          }
          invalidText={this.props.invalidTextCallback(
            "value",
            this.state,
            this.props
          )}
          hideHelperText={true}
        />
      </IcseFormGroup>
    );
  }
}

CbrResourceAttributeForm.defaultProps = {
  data: {
    name: "",
    value: "",
  },
  arrayParentName: "",
};

CbrResourceAttributeForm.propTypes = {
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

export default CbrResourceAttributeForm;
