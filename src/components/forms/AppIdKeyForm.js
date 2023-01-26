import React from "react";
import PropTypes from "prop-types";
import { buildFormFunctions } from "../../lib";
import { IcseTextInput } from "../Inputs";
import "../styles/AppIdKeyForm.css";

class AppIdKeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;

    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState({ key_name: event.target.value });
  }

  render() {
    return (
      <>
        <IcseTextInput
          id={"app-id-key-name"}
          value={this.state.key_name}
          onChange={this.handleInputChange}
          field="appid_key"
          labelText="App ID Key"
          componentName="appid"
          className="fieldWidthSmaller"
          invalid={this.props.invalidCallback(this.props, this.state)}
          invalidText={this.props.invalidTextCallback(this.props, this.state)}
        />
      </>
    );
  }
}

AppIdKeyForm.defaultProps = {
  data: {
    key_name: "",
  },
};

AppIdKeyForm.propTypes = {
  data: PropTypes.shape({
    key_name: PropTypes.string.isRequired,
  }),
  icse: PropTypes.shape({
    store: PropTypes.shape({
      configDotJson: PropTypes.shape({
        appid: PropTypes.shape({
          keys: PropTypes.arrayOf(PropTypes.string).isRequired,
        }).isRequired,
      }).isRequired,
    }),
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default AppIdKeyForm;
