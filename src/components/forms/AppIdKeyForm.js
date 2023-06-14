import React from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseTextInput } from "../Inputs";

class AppIdKeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
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
        <IcseTextInput
          id={this.props.data.name + "-app-id-key-name"}
          value={this.state.name}
          onChange={this.handleInputChange}
          field="name"
          componentName="appid"
          className="fieldWidthSmaller"
          invalid={this.props.invalidCallback(this.state, this.props)}
          invalidText={this.props.invalidTextCallback(this.state, this.props)}
        />
      </>
    );
  }
}

AppIdKeyForm.defaultProps = {
  data: {
    name: "",
  },
};

AppIdKeyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  shouldDisableSubmit: PropTypes.func,
};

export default AppIdKeyForm;
