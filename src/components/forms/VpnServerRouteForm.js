import React from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { IcseNameInput, IcseTextInput } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import { isIpv4CidrOrAddress, titleCase, contains } from "lazy-z";

class VpnServerRouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value.toLowerCase() });
  }

  render() {
    let className = this.props.isModal ? "fieldWidthSmaller" : "fieldWidth";
    return (
      <IcseFormGroup>
        <IcseNameInput
          id={`${this.props.data.name}-name`}
          componentName="vpn-server-name"
          value={this.state.name}
          onChange={this.handleInputChange}
          hideHelperText
          className={className}
          invalidCallback={() =>
            this.props.invalidCallback(this.state, this.props)
          }
          invalidText={this.props.invalidTextCallback(this.state, this.props)}
        />
        <IcseTextInput
          id={`${this.props.data.name}-route-destination`}
          componentName="vpn-server-route-destination"
          name="destination"
          field="destination"
          value={this.state.destination}
          placeholder="x.x.x.x"
          labelText="Destination CIDR"
          invalidCallback={() =>
            isIpv4CidrOrAddress(this.state.destination) === false ||
            !contains(this.state.destination, "/")
          }
          invalidText="Destination must be a valid IPV4 CIDR Block"
          onChange={this.handleInputChange}
          className={className}
        />
        <IcseSelect
          formName="vpn-server-action"
          name="action"
          labelText="Action"
          groups={["Translate", "Deliver", "Drop"]}
          value={titleCase(this.state.action)}
          handleInputChange={this.handleInputChange}
          className={className}
        />
      </IcseFormGroup>
    );
  }
}

export default VpnServerRouteForm;

VpnServerRouteForm.defaultProps = {
  data: { name: "", destination: "", action: "translate" },
  isModal: false,
};

VpnServerRouteForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
  }),
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};
