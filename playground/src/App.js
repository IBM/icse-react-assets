import React from "react";
import { contains, isWholeNumber } from "lazy-z";

import "./App.css";
import {
  CloudDatabaseForm,
  IcseFormGroup,
  IcseNameInput,
  IcseTextInput,
  IcseSelect,
  IcseToggle,
} from "icse-react-assets";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "icse-react-assets";

class PowerVsNetworkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
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
            placeholder="my-network0name"
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
          />
          <IcseSelect
            formName={this.props.data.name + "-power-nw"}
            groups={["vlan", "pub-vlan"]}
            value={this.state.pi_network_type}
            labelText="Network Type"
            name="pi_network_type"
            handleInputChange={this.handleInputChange}
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
            invalidCallback={() =>
              this.props.invalidCidrCallback(this.state, this.props)
            }
            invalidText={this.props.invalidCidrCallbackText(
              this.state,
              this.props,
            )}
            onChange={this.handleInputChange}
          />
          <IcseTextInput
            id={this.props.data.name + "-power-nw-dns"}
            componentName={this.props.data.name + "-power-nw-dns"}
            field="pi_dns"
            value={this.state.pi_dns}
            placeholder="x.x.x.x"
            labelText="DNS Server IP"
            invalidCallback={() =>
              this.props.invalidDnsCallback(this.state, this.props)
            }
            invalidText={this.props.invalidDnsCallbackText(
              this.state,
              this.props,
            )}
            onChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={this.props.data.name + "-power-nw-jumbo"}
            defaultToggled={this.state.pi_network_jumbo}
            labelText="MTU Jumbo"
            onToggle={() => this.handleToggle("pi_network_jumbo")}
          />
        </IcseFormGroup>
      </>
    );
  }
}

const App = () => {
  function validName(str) {
    // regex name validation that only allows alphanumerical characters and "-", string cannot end with "-"
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return (
      !validName(stateData.name) || contains(["foo", "bar"], stateData.name)
    );
  }

  function invalidTextCallback(stateData, componentProps) {
    return `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function invalidCpuCallback(stateData, componentProps) {
    return (
      !isWholeNumber(Number(stateData.cpu)) ||
      (Number(stateData.cpu) !== 0 && Number(stateData.cpu) < 3) ||
      Number(stateData.cpu) > 28
    );
  }

  function invalidCpuTextCallback(stateData, componentProps) {
    return `Using dedicated cores requires a minimum of 3 cores and a maximum of 28 cores per member. For shared CPU, select 0 cores.`;
  }

  return (
    <>
      <PowerVsNetworkForm
        data={{
          name: "frog",
          pi_cidr: "1.2.3.4/5",
          pi_network_type: "vlan",
          pi_dns: "1.2.3.4",
        }}
        invalidNetworkNameCallback={() => {
          return false;
        }}
        invalidNetworkNameCallbackText={() => {
          return "enter a valid name";
        }}
        invalidCidrCallbackText={() => {
          return "enter a valid CIDR";
        }}
        invalidCidrCallback={() => {
          return false;
        }}
        invalidDnsCallback={() => {
          return false;
        }}
        invalidDnsCallbackText={() => {
          return "enter a valid IP";
        }}
      />
    </>
  );
};
export default App;
