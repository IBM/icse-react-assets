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
  IcseToggle,
  IcseFormTemplate,
  RoutingTableRouteForm,
} from "icse-react-assets";
import "./App.css";
import { isIpv4CidrOrAddress, isNullOrEmptyString, transpose } from "lazy-z";

class RoutingTableForm extends Component {
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
    this.handleToggle = this.handleToggle.bind(this);
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
    this.setState(nextState);
  }

  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }
  render() {
    let composedId = this.props.data.name + "-route-form";
    let innerFormProps = {
      arrayParentName: this.props.data.name,
      cluster: this.props.data,
      invalidTextCallback: this.props.invalidRouteTextCallback,
      invalidCallback: this.props.invalidRouteCallback,
    };
    transpose({ ...this.props.routeProps }, innerFormProps);
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
          />
          <IcseSelect
            formName="vsi_form"
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={isNullOrEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "-direct-link-toggle"}
            labelText="Direct Link Ingress"
            defaultToggled={this.state.route_direct_link_ingress}
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from Direct Link to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
            }}
          />
          <IcseToggle
            id={composedId + "-route-internet-toggle"}
            labelText="Internet Ingress"
            defaultToggled={this.state.route_internet_ingress}
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, this routing table will be used to route traffic that originates from the internet. For this to succeed, the VPC must not already have a routing table with this property set to true",
            }}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "-tgw-ingress"}
            labelText="Transit Gateway Ingress"
            defaultToggled={this.state.route_transit_gateway_ingress}
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from Transit Gateway to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
            }}
          />
          <IcseToggle
            id={composedId + "-zone-ingress"}
            labelText="VPC Zone Ingress"
            defaultToggled={this.state.route_vpc_zone_ingress}
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from subnets in other zones in the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
            }}
          />
        </IcseFormGroup>
        {this.props.isModal === false && (
          <IcseFormTemplate
            name="Routes"
            subHeading
            addText="Create a Route"
            arrayData={this.props.data.routes}
            innerForm={RoutingTableRouteForm}
            disableSave={this.props.routeProps.disableSave}
            onDelete={this.props.routeProps.onDelete}
            onSave={this.props.routeProps.onSave}
            onSubmit={this.props.routeProps.onSubmit}
            propsMatchState={this.props.propsMatchState}
            innerFormProps={{ ...innerFormProps }}
            hideAbout
            toggleFormProps={{
              hideName: true,
              submissionFieldName: "routes",
              disableSave: this.props.routeProps.disableSave,
              type: "formInSubForm",
            }}
          />
        )}
      </>
    );
  }
}

const AtrackerFormStory = () => {
  return (
    <RoutingTableForm
      invalidCallback={(stateData, componentProps) => {
        return true;
      }}
      invalidTextCallback={(stateData, componentProps) => {
        return "Invalid Text";
      }}
      invalidRouteCallback={(stateData, componentProps) => {
        return true;
      }}
      invalidRouteTextCallback={(stateData, componentProps) => {
        return "Invalid Text";
      }}
      data={{
        name: "table",
        vpc: "management",
        routes: [
          {
            name: "route",
            zone: 1,
            destination: "8.8.8.8",
            action: "drop",
          },
        ],
      }}
      propsMatchState={() => {
        return false;
      }}
      isModal={false}
      vpcList={["management", "workload"]}
      routeProps={{
        disableSave: function () {
          return false;
        },
        onDelete: function () {
          return false;
        },
        onSave: function () {
          return false;
        },
        onSubmit: function () {
          return false;
        },
        propsMatchState: function () {
          return false;
        },
      }}
    />
  );
};

function App() {
  return <AtrackerFormStory />;
}

export default App;
