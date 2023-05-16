import React from "react";
import PropTypes from "prop-types";
import { buildFormFunctions } from "../component-utils";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../../Utils";
import { TextArea } from "@carbon/react";

class DnsCustomResolverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState({ name: event.target.value });
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  render() {
    return (
      <div id="dns-custom-resolver-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-dns-custom-resolver"}
            componentName={this.props.data.name + "-dns-custom-resolver"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalidCallback={() =>
              this.props.invalidNameCallback(this.state, this.props)
            }
            invalidText={this.props.invalidNameTextCallback(
              this.state,
              this.props
            )}
          />
          <IcseToggle
            tooltip={{
              content:
                "To meet high availability status, configure custom resolvers with a minimum of two resolver locations",
              align: "bottom-left",
            }}
            labelText="High Availability"
            key={this.state.high_availability}
            defaultToggled={this.state.high_availability}
            onToggle={this.handleToggle}
            className="fieldWidth"
            toggleFieldName="high_availability"
            id={this.props.data.name + "-high-availability"}
          />
        </IcseFormGroup>
        <TextArea
          id={this.props.data.name + "-dns-resolver-description"}
          className="textInputWide"
          name="description"
          value={this.state.description}
          labelText={"Description"}
          onChange={this.handleInputChange}
          invalid={
            this.state.description.length < 0 ||
            this.state.description.length > 300
          }
          invalidText={
            "Invalid description, must be between 0 and 300 characters."
          }
          enableCounter={true}
        />
      </div>
    );
  }
}

DnsCustomResolverForm.defaultProps = {
  data: {
    name: "",
    description: "",
    high_availability: true,
    enabled: false,
    vpc: "",
    subnets: [],
  },
};

DnsCustomResolverForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    high_availability: PropTypes.bool,
    vpc: PropTypes.string,
    subnets: PropTypes.arrayOf(PropTypes.string),
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
};

export default DnsCustomResolverForm;
