import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseNumberSelect, IcseSelect } from "../../Dropdowns";
import { IcseMultiSelect } from "../../MultiSelects";
import { IcseTextInput, IcseNameInput, IcseToggle } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import PropTypes from "prop-types";

class PowerVsCloudConnectionForm extends Component {
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
    if (this.props.isModal) {
      return "";
    } else {
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
              invalidText={this.props.invalidTextCallback(
                this.state,
                this.props,
              )}
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
            <IcseToggle
              id={this.props.data.name + "-cloud-connect-global-routing"}
              defaultToggled={this.state.pi_cloud_connection_global_routing}
              labelText="Enable Global Routing"
              onToggle={() =>
                this.handleToggle("pi_cloud_connection_global_routing")
              }
              className="fieldWidth"
            />
          </IcseFormGroup>
          <IcseFormGroup>
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
              onToggle={() =>
                this.handleToggle("pi_cloud_connection_transit_enabled")
              }
              className="fieldWidth"
            />
            {this.state.pi_cloud_connection_transit_enabled && (
              <IcseMultiSelect
                className="fieldWidthSmaller"
                id={this.props.data.name + "-cloud-connect-transit-gw"}
                titleText="Transit Gateways"
                items={this.props.transitGatewayList}
                onChange={(value) => {
                  this.handleMultiSelectChange(
                    "transit_gateways",
                    value.selectedItems,
                  );
                }}
                initialSelectedItems={this.state.transit_gateways}
                invalid={this.state.transit_gateways.length === 0}
                invalidText="Select at least one transit gateway"
              />
            )}
          </IcseFormGroup>
        </>
      );
    }
  }
}

PowerVsCloudConnectionForm.defaultProps = {
  data: {
    name: "",
    pi_cloud_connection_speed: null, //[50, 100, 200, 500, 1000, 2000, 5000, 10000],
    pi_cloud_connection_global_routing: false,
    pi_cloud_connection_metered: false,
    pi_cloud_connection_transit_enabled: false,
    transit_gateways: [],
  },
  isModal: false,
  transitGatewayList: [],
};

PowerVsCloudConnectionForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    pi_cloud_connection_speed: PropTypes.number,
    pi_cloud_connection_global_routing: PropTypes.bool.isRequired,
    pi_cloud_connection_metered: PropTypes.bool.isRequired,
    pi_cloud_connection_transit_enabled: PropTypes.bool.isRequired,
    transit_gateways: PropTypes.arrayOf(PropTypes.string),
  }),
  isModal: PropTypes.bool.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default PowerVsCloudConnectionForm;
