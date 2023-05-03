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

  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
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
          invalid={this.props.invalidCallback("name", this.state, this.props)}
          invalidText={this.props.invalidTextCallback(
            "name",
            this.state,
            this.props
          )}
          hideHelperText={true}
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-tag-operator"}
          componentName={this.props.data.name + "-cbr-tag"}
          className={"fieldWidthSmaller"}
          labelText={"Operator"}
          field="operator"
          value={this.state.operator}
          onChange={this.handleInputChange}
          invalid={this.props.invalidCallback(
            "operator",
            this.state,
            this.props
          )}
          invalidText={this.props.invalidTextCallback(
            "operator",
            this.state,
            this.props
          )}
          hideHelperText={true}
        />
        <IcseTextInput
          id={this.props.data.name + "-cbr-tag-value"}
          componentName={this.props.data.name + "-cbr-tag"}
          className={"fieldWidthSmaller"}
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
          hideHelperText={true}
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
};

CbrTagForm.propTypes = {
  isModal: PropTypes.bool,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  invalidTagCallback: PropTypes.func.isRequired,
  invalidTagTextCallback: PropTypes.func.isRequired,
};

export default CbrTagForm;
