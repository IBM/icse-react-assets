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
import { invalidCRNs } from "../../lib";

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCRNs = this.handleCRNs.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }

  /**
   * Handle vpc selection
   * @param {event} event
   */
  handleVpcSelect(event) {
    let connections = [];
    event.forEach((vpc) => {
      connections.push({ tgw: this.state.name, vpc: vpc });
    });
    this.setState({
      connections: connections,
    });
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
    let crnList = event.target.value
      ? event.target.value
          .replace(/\s\s+/g, "") // replace extra spaces
          .replace(/,(?=,)/g, "") // prevent null tags from
          .replace(/[^\w,-:]/g, "")
          .split(",")
      : [];
    this.setState({ crns: crnList });
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
            id={this.state.name + "-tg-name"}
          />
          <IcseSelect
            formName="Transit Gateway"
            value={this.state.resource_group}
            groups={this.props.resourceGroups}
            handleInputChange={this.handleInputChange}
            id={this.state.name + "-resource_group"}
            name="resource_group"
            labelText="Resource Group"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            labelText="Global Routing"
            toggleFieldName="global"
            id={this.state.name + "-tg-global"}
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
            id={this.state.name + "-tg-vpc-multiselect"}
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
            id="crns"
            labelText="Add a new connection from any region in the account"
            value={String(this.state.crns)}
            onChange={this.handleCRNs}
            invalid={invalidCRNs(this.state.crns).invalid}
            invalidText={invalidCRNs(this.state.crns).invalidText}
            helperText="Enter a comma separated list of CRNs"
            placeholder="crn:v1:bluemix..."
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <div className="marginBottomSmall textInputWide">
            {this.state.crns.map((crn, i) => (
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
    resource_group: PropTypes.string.isRequired,
    name: PropTypes.string,
    crns: PropTypes.array.isRequired,
  }).isRequired,
  vpcList: PropTypes.array.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
};

export default TransitGatewayForm;
