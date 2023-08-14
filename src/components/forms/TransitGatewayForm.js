import React, { Component } from "react";
import { Tag, TextArea } from "@carbon/react";
import { IcseTextInput, IcseToggle } from "../Inputs";
import { IcseFormGroup, IcseHeading } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import { VpcListMultiSelect } from "../MultiSelects";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} from "../component-utils";
import PropTypes from "prop-types";
import { splat } from "lazy-z";
import { handleCRNs, handleVpcSelect } from "../../lib/forms";

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCRNs = this.handleCRNs.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Handle crn input
   * @param {event} event
   */
  handleCRNs(event) {
    this.setState(handleCRNs(event));
  }

  /**
   * Handle vpc selection
   * @param {Array} selectedItems
   */
  handleVpcSelect(selectedItems) {
    this.setState(handleVpcSelect(selectedItems, this.state.name));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseTextInput
            onChange={this.handleInputChange}
            componentName="Transit Gateway"
            field="name"
            value={this.state.name}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            id={this.props.data.name + "-tg-name"}
          />
          <IcseSelect
            formName="Transit Gateway"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            id={this.props.data.name + "-resource_group"}
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            labelText="Global Routing"
            toggleFieldName="global"
            id={this.props.data.name + "-tg-global"}
            onToggle={this.handleToggle}
            defaultToggled={this.state.global}
            tooltip={{
              align: "right",
              content:
                "Must be enabled in order to connect your IBM Cloud and on-premises networks in all IBM Cloud multizone regions.",
            }}
          />
        </IcseFormGroup>
        <IcseHeading name="Connections" type="subHeading" />
        <IcseFormGroup>
          <VpcListMultiSelect
            id={this.props.data.name + "-tg-vpc-multiselect"}
            titleText="Connected VPCs"
            initialSelectedItems={splat(this.state.connections, "vpc")}
            vpcList={this.props.vpcList}
            onChange={this.handleVpcSelect}
            invalid={this.state.connections.length === 0}
            invalidText="At least one VPC must be connected"
          />
        </IcseFormGroup>
        <IcseHeading name="Additional connections" type="section" />
        <IcseFormGroup>
          <TextArea
            className="textInputWide"
            id={this.props.data.name + "crns"}
            labelText="Add a new connection from any region in the account"
            value={this.state.crns === undefined ? "" : String(this.state.crns)}
            onChange={this.handleCRNs}
            invalid={this.props.invalidCrns(this.state, this.props)}
            invalidText={this.props.invalidCrnText(this.state, this.props)}
            helperText="Enter a comma separated list of CRNs"
            placeholder="(Optional) crn:v1:bluemix..."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <div className="marginBottomSmall textInputWide">
            {this.state.crns !== undefined &&
              this.state.crns.length > 0 &&
              this.state.crns.map((crn, i) => (
                <Tag key={"crn" + i} size="md" type={"green"}>
                  {crn}
                </Tag>
              ))}
          </div>
        </IcseFormGroup>
      </>
    );
  }
}

TransitGatewayForm.defaultProps = {
  data: {
    global: true,
    connections: [],
    resource_group: "",
    name: "",
    crns: [],
  },
  vpcList: [],
  resourceGroups: [],
};

TransitGatewayForm.propTypes = {
  data: PropTypes.shape({
    global: PropTypes.bool.isRequired,
    connections: PropTypes.array.isRequired,
    resource_group: PropTypes.string,
    name: PropTypes.string,
    crns: PropTypes.array,
  }),
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCrns: PropTypes.func.isRequired,
  invalidCrnText: PropTypes.func.isRequired,
};

export default TransitGatewayForm;
