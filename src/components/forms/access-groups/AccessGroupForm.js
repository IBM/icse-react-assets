import React from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import PropTypes from "prop-types";

class AccessGroupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
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
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
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
            className="textInputWide"
            hideHelperText
            invalid={false}
          />
        </IcseFormGroup>
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
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default AccessGroupForm;
