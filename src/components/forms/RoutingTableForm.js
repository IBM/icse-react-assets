import React, { Component } from "react";
import { IcseSelect } from "../Dropdowns";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import RoutingTableRouteForm from "./RoutingTableRouteForm";
import IcseFormTemplate from "../IcseFormTemplate";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { transpose, isNullOrEmptyString } from "lazy-z";

class RoutingTableForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    if (this.props.isModal) this.state.routes = [];
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
      route: this.props.data,
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
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            formName={composedId + "-vpc"}
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText="Select a VPC."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "-direct-link-toggle"}
            labelText="Direct Link Ingress"
            defaultToggled={this.state.route_direct_link_ingress}
            name="route_direct_link_ingress"
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from Direct Link to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
              align: "bottom-left",
              alignModal: "bottom-left",
            }}
          />
          <IcseToggle
            id={composedId + "-route-internet-toggle"}
            labelText="Internet Ingress"
            defaultToggled={this.state.route_internet_ingress}
            name="route_internet_ingress"
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, this routing table will be used to route traffic that originates from the internet. For this to succeed, the VPC must not already have a routing table with this property set to true",
              align: "bottom-left",
              alignModal: "bottom-left",
            }}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "-tgw-ingress"}
            labelText="Transit Gateway Ingress"
            defaultToggled={this.state.route_transit_gateway_ingress}
            name="route_transit_gateway_ingress"
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from Transit Gateway to the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
              align: "bottom-left",
              alignModal: "bottom-left",
            }}
          />
          <IcseToggle
            id={composedId + "-zone-ingress"}
            labelText="VPC Zone Ingress"
            defaultToggled={this.state.route_vpc_zone_ingress}
            name="route_vpc_zone_ingress"
            onToggle={this.handleToggle}
            tooltip={{
              content:
                "If set to true, the routing table is used to route traffic that originates from subnets in other zones in the VPC. To succeed, the VPC must not already have a routing table with the property set to true",
              align: "bottom-left",
              alignModal: "bottom-left",
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

RoutingTableForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    vpc: null,
    routes: [],
    route_internet_ingress: false,
    route_transit_gateway_ingress: false,
    route_vpc_zone_ingress: false,
    route_direct_link_ingress: false,
  },
};

RoutingTableForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    vpc: PropTypes.string,
    routes: PropTypes.array.isRequired,
    route_internet_ingress: PropTypes.bool.isRequired,
    route_transit_gateway_ingress: PropTypes.bool.isRequired,
    route_vpc_zone_ingress: PropTypes.bool.isRequired,
    route_direct_link_ingress: PropTypes.bool.isRequired,
  }).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  routeProps: PropTypes.shape({
    disableSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  }).isRequired,
};

export default RoutingTableForm;
