import React from "react";
import { checkNullorEmptyString, setNameToValue } from "../../lib";
import { IcseSelect } from "../Dropdowns";
import { IcseHeading, IcseFormGroup } from "../Utils";
import { IcseToggle, IcseTextInput, IcseNameInput } from "../Inputs";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { kebabCase, parseIntFromZone, titleCase } from "lazy-z";
import PropTypes from "prop-types";
import { handlePgwToggle } from "../../lib/forms/vpc";

const nameFields = [
  "default_network_acl_name",
  "default_routing_table_name",
  "default_security_group_name",
];

class VpcNetworkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handlePgwToggle = this.handlePgwToggle.bind(this);

    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    if (name === "bucket" && value === "Disabled") {
      value = "$disabled";
    }

    this.setState(this.setNameToValue(name, value));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle change of public gateway by zone
   * @param {string} zone zone-1, zone-2, or zone-3
   */
  handlePgwToggle(zone) {
    this.setState(handlePgwToggle(zone, this.state));
  }

  render() {
    let composedId = `${this.props.data.name}-vpc-form`;
    return (
      <>
        <IcseFormGroup>
          {/* vpc name */}
          <IcseNameInput
            tooltip={{
              content:
                "This name will be prepended to all components within this VPC.",
              alignModal: "bottom-left",
              align: "bottom-left",
            }}
            id={composedId + "-prefix"}
            field="name"
            placeholder="my-vpc-name"
            hideHelperText
            value={this.state.name}
            forceKebabCase
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback("name", this.state, this.props)}
            invalidText={this.props.invalidTextCallback(
              "name",
              this.state,
              this.props
            )}
            className="fieldWidthSmaller"
          />
          {/* resource group */}
          <IcseSelect
            name="resource_group"
            formName="resource_group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.resource_group)}
            invalidText="Select a Resource Group."
            className="fieldWidthSmaller"
          />
          <IcseSelect
            labelText="Flow Logs Bucket Name"
            name="bucket"
            formName={this.props.data.name + "-vpc"}
            groups={this.props.cosBuckets.concat("Disabled")}
            value={
              (this.state.bucket === "$disabled"
                ? "Disabled"
                : this.state.bucket) || ""
            }
            handleInputChange={this.handleInputChange}
            invalid={checkNullorEmptyString(this.state.bucket)}
            invalidText="Select a Bucket."
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {nameFields.map((field) => {
            return (
              <IcseTextInput
                id={composedId + "-" + field}
                key={this.props.data.name + "-" + kebabCase(field)}
                field={field}
                labelText={titleCase(field)}
                value={this.state[field]}
                onChange={this.handleInputChange}
                invalid={this.props.invalidCallback(
                  field,
                  this.state,
                  this.props
                )}
                invalidText={this.props.invalidTextCallback(
                  field,
                  this.state,
                  this.props
                )}
                className="fieldWidthSmaller"
                optional
                forceKebabCase
              />
            );
          })}
        </IcseFormGroup>
        {/* vpc public gateways */}
        <IcseHeading
          name="Public Gateways"
          type="subHeading"
          noLabelText
          tooltip={{
            content:
              "Public Gateways allow for all resources in a zone to communicate with the public internet. Public Gateways are not needed for subnets where a VPN gateway is created.",
          }}
        />
        <IcseFormGroup>
          {/* for each zone build a toggle */}
          {["zone-1", "zone-2", "zone-3"].map((zone) => (
            <IcseToggle
              key={this.props.data.name + "-gateway-toggle-" + zone}
              id={this.props.data.name + "-pgw-" + zone}
              labelText={"Create in Zone " + parseIntFromZone(zone)}
              defaultToggled={
                this.state.publicGateways.indexOf(parseIntFromZone(zone)) !== -1
              }
              onToggle={() => this.handlePgwToggle(zone)}
              className="fieldWidthSmaller leftTextAlign"
            />
          ))}
        </IcseFormGroup>
        <IcseHeading name="Classic Access" type="subHeading" />
        {/* vpc classic access and use manual address prefixes */}
        <IcseFormGroup noMarginBottom>
          <IcseToggle
            id={this.props.data.name + "-classic-access"}
            labelText="Classic Infrastructure Access"
            toggleFieldName="classic_access"
            defaultToggled={this.state.classic_access}
            onToggle={this.handleToggle}
            disabled={this.props.disableManualPrefixToggle}
            className="fieldWidthSmaller leftTextAlign"
          />
        </IcseFormGroup>
      </>
    );
  }
}

VpcNetworkForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    bucket: "",
    default_network_acl_name: "",
    default_routing_table_name: "",
    default_security_group_name: "",
    classic_access: false,
    manual_address_prefix_management: false,
    publicGateways: [],
  },
  isModal: false,
  disableManualPrefixToggle: false,
};

VpcNetworkForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    bucket: PropTypes.string,
    default_network_acl_name: PropTypes.string,
    default_security_group_name: PropTypes.string,
    default_routing_table_name: PropTypes.string,
    classic_access: PropTypes.bool.isRequired,
    manual_address_prefix_management: PropTypes.bool.isRequired,
    publicGateways: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  disableManualPrefixToggle: PropTypes.bool.isRequired,
};

export default VpcNetworkForm;
