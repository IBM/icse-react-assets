import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseSelect } from "../../Dropdowns";
import { IcseTextInput, IcseNameInput, IcseToggle } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import PropTypes from "prop-types";

class PowerVsNetworkForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  handleInputChange(event) {
    if (event.target.name === "pi_dns") {
      this.setState({
        pi_dns: [event.target.value],
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-power-nw-name"}
            componentName={this.props.data.name + "-power-nw-name"}
            placeholder="my-network-name"
            value={this.state.name || ""}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidNetworkNameCallback(
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidNetworkNameCallbackText(
              this.state,
              this.props,
            )}
            className="fieldWidth"
          />
          <IcseSelect
            formName={this.props.data.name + "-power-nw"}
            groups={["vlan", "pub-vlan"]}
            value={this.state.pi_network_type}
            labelText="Network Type"
            name="pi_network_type"
            handleInputChange={this.handleInputChange}
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={this.props.data.name + "-power-nw-cidr"}
            componentName={this.props.data.name + "-power-nw-cidr"}
            name="client_ip_pool"
            field="pi_cidr"
            value={this.state.pi_cidr}
            placeholder="x.x.x.x/x"
            labelText="Network CIDR Block"
            invalidCallback={this.props.invalidCidrCallback(
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidCidrCallbackText(
              this.state,
              this.props,
            )}
            onChange={this.handleInputChange}
            className="fieldWidth"
          />
          <IcseTextInput
            id={this.props.data.name + "-power-nw-dns"}
            componentName={this.props.data.name + "-power-nw-dns"}
            field="pi_dns"
            value={this.state.pi_dns[0]}
            placeholder="127.0.0.1"
            labelText="DNS Server IP"
            invalidCallback={this.props.invalidDnsCallback(
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidDnsCallbackText(
              this.state,
              this.props,
            )}
            onChange={this.handleInputChange}
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={this.props.data.name + "-power-nw-jumbo"}
            defaultToggled={this.state.pi_network_jumbo}
            labelText="MTU Jumbo"
            onToggle={() => this.handleToggle("pi_network_jumbo")}
            className="fieldWidth"
          />
        </IcseFormGroup>
      </>
    );
  }
}

PowerVsNetworkForm.defaultProps = {
  data: {
    name: "",
    pi_network_type: "vlan",
    pi_cidr: "",
    pi_dns: [""],
    pi_network_jumbo: false,
  },
  isModal: false,
};

PowerVsNetworkForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    pi_network_type: PropTypes.string.isRequired,
    pi_cidr: PropTypes.string.isRequired,
    pi_dns: PropTypes.arrayOf(PropTypes.string).isRequired,
    pi_network_jumbo: PropTypes.bool.isRequired,
  }),
  isModal: PropTypes.bool.isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
};

export default PowerVsNetworkForm;
