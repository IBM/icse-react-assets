import { kebabCase, titleCase, transpose } from "lazy-z";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { IcseSelect } from "../../Dropdowns";
import IcseFormTemplate from "../../IcseFormTemplate";
import { IcseNameInput } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import DnsZoneForm from "./DnsZoneForm";
import DnsCustomResolverForm from "./DnsCustomResolverForm";
import DnsRecordForm from "./DnsRecordForm";

/**
 * Context-based restriction rules
 */
class DnsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  handleInputChange(event) {
    console.log("change");
    let { name, value } = event.target;
    if (name === "plan") {
      this.setState({ [name]: value.toLowerCase() });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    // set up props for subforms
    let zoneInnerFormProps = {};
    transpose(
      { ...this.props.zoneProps, arrayParentName: this.props.data.name },
      zoneInnerFormProps
    );

    let recordInnerFormProps = {};
    transpose(
      {
        ...this.props.recordProps,
        arrayParentName: this.props.data.name,
      },
      recordInnerFormProps
    );

    let resolverInnerFormProps = {};
    transpose(
      { ...this.props.resolverProps, arrayParentName: this.props.data.name },
      resolverInnerFormProps
    );

    return (
      <div id="dns-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-dns"}
            componentName={this.props.data.name + "-dns"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalidCallback={() =>
              this.props.invalidNameCallback(this.state, this.props)
            }
            invalidText={this.props.invalidNameTextCallback(
              this.state,
              this.props
            )}
          />
          <IcseSelect
            id={this.props.data.name + "-dns-plan"}
            name={"plan"}
            className={"fieldWidthSmaller"}
            value={titleCase(this.state.plan)}
            labelText="Plan"
            groups={["Free", "Standard"]}
            formName="dns-form"
            handleInputChange={this.handleInputChange}
          />
          {/* resource group */}
          <IcseSelect
            name="resource_group"
            formName={`${kebabCase(this.props.data.name)}-dns-rg-select`}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            labelText="Resource Group"
          />
        </IcseFormGroup>
        {/* show subforms if not modal*/}
        {this.props.isModal !== true && (
          <>
            {/* zones */}
            <IcseFormTemplate
              name="Zones"
              subHeading
              addText="Create a DNS Zone"
              arrayData={this.props.data.zones}
              innerForm={DnsZoneForm}
              disableSave={this.props.zoneProps.disableSave}
              onDelete={this.props.zoneProps.onDelete}
              onSave={this.props.zoneProps.onSave}
              onSubmit={this.props.zoneProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...zoneInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "zones",
                disableSave: this.props.zoneProps.disableSave,
                type: "subForm",
              }}
            />
            {/* records */}
            <IcseFormTemplate
              name="Records"
              subHeading
              addText="Create a DNS Record"
              arrayData={this.props.data.records}
              innerForm={DnsRecordForm}
              disableSave={this.props.recordProps.disableSave}
              onDelete={this.props.recordProps.onDelete}
              onSave={this.props.recordProps.onSave}
              onSubmit={this.props.recordProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...recordInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "records",
                disableSave: this.props.recordProps.disableSave,
                type: "subForm",
              }}
            />
            {/* custom resolvers */}
            <IcseFormTemplate
              name="Custom Resolvers"
              subHeading
              addText="Create a Custom Resolver"
              arrayData={this.props.data.custom_resolvers}
              innerForm={DnsCustomResolverForm}
              disableSave={this.props.resolverProps.disableSave}
              onDelete={this.props.resolverProps.onDelete}
              onSave={this.props.resolverProps.onSave}
              onSubmit={this.props.resolverProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...resolverInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "custom_resolvers",
                disableSave: this.props.resolverProps.disableSave,
                type: "subForm",
              }}
            />
          </>
        )}
      </div>
    );
  }
}

DnsForm.defaultProps = {
  isModal: false,
  data: {
    name: "",
    plan: "free",
    resource_group: "service-rg",
    zones: [],
    records: [],
    custom_resolvers: [],
  },
};

DnsForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    zones: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        label: PropTypes.string,
        vpcs: PropTypes.array,
      })
    ),
    records: PropTypes.arrayOf(PropTypes.shape({})),
    custom_resolvers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        enabled: PropTypes.bool,
        high_availability: PropTypes.bool,
        vpc: PropTypes.string,
        subnets: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }),
  zoneProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    invalidLabelCallback: PropTypes.func.isRequired,
    invalidLabelTextCallback: PropTypes.func.isRequired,
    invalidDescriptionCallback: PropTypes.func.isRequired,
    invalidDescriptionTextCallback: PropTypes.func.isRequired,
    invalidNameCallback: PropTypes.func.isRequired,
    invalidNameTextCallback: PropTypes.func.isRequired,
  }),
  resolverProps: PropTypes.shape({
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disableSave: PropTypes.func.isRequired,
    subnetList: PropTypes.array.isRequired,
    vpcList: PropTypes.array.isRequired,
    invalidCallback: PropTypes.func.isRequired,
    invalidTextCallback: PropTypes.func.isRequired,
    invalidDescriptionCallback: PropTypes.func.isRequired,
    invalidDescriptionTextCallback: PropTypes.func.isRequired,
    invalidNameCallback: PropTypes.func.isRequired,
    invalidNameTextCallback: PropTypes.func.isRequired,
  }),
};

export default DnsForm;
