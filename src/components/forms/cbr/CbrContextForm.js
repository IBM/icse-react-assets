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

  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <IcseFormGroup>
        <IcseNameInput
          id={this.props.data.name + "-cbr-context"}
          componentName={this.props.arrayParentName + "-cbr-context"}
          value={this.state.name}
          onChange={this.handleInputChange}
          invalid={this.props.invalidCallback("name", this.state, this.props)}
          invalidText={this.props.invalidTextCallback(
            "name",
            this.state,
            this.props
          )}
          hideHelperText={true}
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-context-value"}
          componentName={this.props.arrayParentName + "-cbr-context"}
          labelText={"Value"}
          field="value"
          value={this.state.value}
          onChange={this.handleInputChange}
          invalid={this.props.invalidCallback("value", this.state, this.props)}
          invalidText={this.props.invalidTextCallback(
            "value",
            this.state,
            this.props
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
  isModal: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string,
};

export default CbrContextForm;
