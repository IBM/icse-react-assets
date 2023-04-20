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
import { invalidRegex } from "../../lib";

class TransitGatewayForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleToggle = this.handleToggle.bind(this);
    this.handleVpcSelect = this.handleVpcSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCRNs = this.handleCRNs.bind(this);
    this.invalidCRNs = this.invalidCRNs.bind(this);
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
    invalidRegex;
    let crnList = event.target.value
      ? event.target.value
          .replace(/\s\s+/g, "") // replace extra spaces
          .replace(/,(?=,)/g, "") // prevent null tags from
          .replace(/[^\w,-:]/g, "")
          .split(",")
      : [];
    this.setState({ crns: crnList });
  }

  /**
   * Invalid crns
   * @param {Array} crns
   */
  // https://cloud.ibm.com/docs/account?topic=account-crn
  invalidCRNs(crns) {
    if (crns.length === 0) return false;
    for (let crn of crns) {
      if (crn.match(this.props.crnRegex) === null) {
        return true;
      }
    }
    return false;
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
            readOnly={true}
            invalid={false}
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
          <IcseTextInput
            onChange={this.handleInputChange}
            componentName="Transit Gateway"
            field="region"
            value={this.props.region}
            readOnly={true}
            invalid={false}
            id={this.state.name + "-tg-region"}
          />
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
            className="wide"
            id="crns"
            labelText="Add a new connection from any region in the account"
            value={String(this.state.crns)}
            onChange={this.handleCRNs}
            invalid={this.invalidCRNs(this.state.crns)}
            invalidText={`Invalid CRN. Must match regular expression ${this.props.crnRegex}`}
            helperText="Enter a comma separated list of CRNs"
            placeholder="crn:v1:bluemix..."
          />
          <div className="marginBottomSmall wide">
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
  region: "",
  crnRegex: /^(crn:v1:bluemix:(public|dedicated|local):)[A-z-:/0-9]+$/i,
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
  region: PropTypes.string.isRequired,
  crnRegex: PropTypes.instanceOf(RegExp).isRequired,
};

export default TransitGatewayForm;
