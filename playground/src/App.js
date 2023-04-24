import React, { Component } from "react";
import {
  AtrackerForm,
  buildFormDefaultInputMethods,
  buildFormFunctions,
  IcseNameInput,
  IcseTextInput,
  IcseSelect,
  IcseFormGroup,
  IcseNumberSelect,
} from "icse-react-assets";
import "./App.css";
import { isIpv4CidrOrAddress, isNullOrEmptyString } from "lazy-z";

class RoutingTableRouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    if (
      !isNullOrEmptyString(this.state.action) &&
      this.state.action !== "deliver"
    ) {
      this.state.next_hop = "0.0.0.0";
    }
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
    let nextState = { ...this.state };
    let { name, value } = event.target;
    nextState[name] = value;
    if (name === "action" && value !== "deliver") {
      nextState.next_hop = "0.0.0.0";
    } else if (name === "action") {
      nextState.next_hop = null;
    }
    this.setState(nextState);
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            componentName="routing-table-route"
            id={this.props.data.name + "-route-name"}
            hideHelperText
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() => {
              this.props.invalidCallback(this.state, this.props);
            }}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <IcseNumberSelect
            formName="routing-table-route"
            value={this.state.zone || ""}
            min={1}
            max={3}
            name="zone"
            labelText="Route Zone"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id={this.props.data.name + "-route-destination"}
            componentName="routing-route-destination"
            name="destination"
            field="destination"
            value={this.state.destination}
            labelText="Destination IP or CIDR"
            invalidCallback={() =>
              isIpv4CidrOrAddress(this.state.destination) === false
            }
            invalidText="Destination must be a valid IP or IPV4 CIDR block"
            onChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            name="action"
            formName={this.props.data.name + "-routing-table-route-action"}
            groups={["delegate", "deliver", "delegate_vpc", "drop"]}
            labelText="Action"
            handleInputChange={this.handleInputChange}
            value={this.state.action}
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id={this.props.data.name + "-next-hop"}
            componentName="routing-next-hop"
            field="next_hop"
            value={this.state.next_hop}
            labelText="Next Hop"
            invalidCallback={() =>
              isNullOrEmptyString(this.state.next_hop) ||
              isIpv4CidrOrAddress(this.state.next_hop) === false
            }
            invalidText="Next hop must be a valid IP"
            onChange={this.handleInputChange}
            disabled={this.state.action !== "deliver"}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </>
    );
  }
}

const AtrackerFormStory = () => {
  return (
    <RoutingTableRouteForm
      invalidCallback={(stateData, componentProps) => {
        return true;
      }}
      invalidTextCallback={(stateData, componentProps) => {
        return "Invalid Text";
      }}
      data={{
        name: "route",
        zone: 1,
        destination: "8.8.8.8",
        action: "drop",
      }}
    />
  );
};

function App() {
  return <AtrackerFormStory />;
}

export default App;
