import React from "react";
import { contains, isWholeNumber } from "lazy-z";

import "./App.css";
import {
  CloudDatabaseForm,
  IcseFormGroup,
  IcseNameInput,
  IcseMultiSelect,
  IcseTextInput,
  IcseSelect,
  IcseToggle,
  IcseNumberSelect,
} from "icse-react-assets";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "icse-react-assets";

class PowerVsCloudConnectionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = { ...this.props.data };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
      this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
      buildFormDefaultInputMethods(this);
      buildFormFunctions(this);
  }

  handleInputChange(event) {
      this.setState(this.eventTargetToNameAndValue(event));
  }
  
  handleToggle(name) {
      this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
 * handle multiselect change
 * @param {string} name key to change in the instance
 * @param {*} value value
 */
  handleMultiSelectChange(name, value) {
      this.setState(this.setNameToValue(name, value));
  }

  render() {
      return (
          <>
              <IcseFormGroup>
                  <IcseNameInput
                      id={this.props.data.name + "-cloud-connect-name"}
                      componentName={this.props.data.name + "-cloud-connect-name"}
                      value={this.state.name || ""}
                      onChange={this.handleInputChange}
                      hideHelperText
                      invalid={this.props.invalidCallback(this.state, this.props)}
                      invalidText={this.props.invalidTextCallback(this.state, this.props)}
                  />
                  <IcseSelect
                      formName={this.props.data.name + "-cloud-connect-speed"}
                      groups={[50, 100, 200, 500, 1000, 2000, 5000, 10000]}
                      value={this.state.pi_cloud_connection_speed}
                      labelText="Connection Speed"
                      name="pi_cloud_connection_speed"
                      handleInputChange={this.handleInputChange}
                      className="fieldWidth"
                  />

              </IcseFormGroup>
              <IcseFormGroup>
                  <IcseToggle
                      id={this.props.data.name + "-cloud-connect-global-routing"}
                      defaultToggled={this.state.pi_cloud_connection_global_routing}
                      labelText="Enable Global Routing"
                      onToggle={() => this.handleToggle("pi_cloud_connection_global_routing")}
                      className="fieldWidth"
                  />
                  <IcseToggle
                      id={this.props.data.name + "-cloud-connect-metered"}
                      defaultToggled={this.state.pi_cloud_connection_metered}
                      labelText="Enable Metered Connection"
                      onToggle={() => this.handleToggle("pi_cloud_connection_metered")}
                      className="fieldWidth"
                  />
                  <IcseToggle
                      id={this.props.data.name + "-cloud-connect-transit-enabled"}
                      defaultToggled={this.state.pi_cloud_connection_transit_enabled}
                      labelText="Enable Transit Gateway"
                      onToggle={() => this.handleToggle("pi_cloud_connection_transit_enabled")}
                      className="fieldWidth"
                  />
              </IcseFormGroup>
              {this.state.pi_cloud_connection_transit_enabled && (
                  <IcseFormGroup>
                      <IcseMultiSelect
                          className="fieldWidthSmaller"
                          id={this.props.data.name + "-cloud-connect-transit-gw"}
                          titleText="Transit Gateways"
                          items={this.props.transitGatewayList}
                          onChange={(value) => {
                              this.handleMultiSelectChange("transit_gateways", value.selectedItems);
                          }}
                          initialSelectedItems={this.state.transit_gateways}
                          invalid={this.state.transit_gateways.length === 0}
                          invalidText="Select at least one transit gateway"
                      />
                  </IcseFormGroup>
              )}
          </>
      );
  }
}

const App = () => {
  function validName(str) {
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
      return contains(["foo", "bar"], stateData.name)
        ? `Name ${stateData.name} already in use.`
        : componentProps.invalidText;//`Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }
  return (
      <PowerVsCloudConnectionForm
          data={{
              name: "frog",
              pi_cloud_connection_speed: 50,
              pi_cloud_connection_global_routing: true,
              pi_cloud_connection_metered: true,
              pi_cloud_connection_transit_enabled: true,
              transit_gateways: ["transit_gateway_1", "transit_gateway_3"],
          }}
          transitGatewayList={["transit_gateway_1", "transit_gateway_2", "transit_gateway_3"]}
          invalidText={"Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i"}
          invalidCallback={invalidCallback}
          invalidTextCallback={invalidTextCallback}
      />
  );
};
export default App;
