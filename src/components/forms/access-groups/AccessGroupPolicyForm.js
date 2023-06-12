import React from "react";
import { kebabCase } from "lazy-z";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
} from "../../component-utils";
import { IcseFormGroup, IcseHeading } from "../../Utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import PropTypes from "prop-types";
import { handleInputResource } from "../../../lib/forms/acess-groups";

class AccessGroupPolicyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputResource = this.handleInputResource.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputResource(event) {
    this.setState(handleInputResource(this.state, event));
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={`${this.props.data.name}-name`}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            invalid={this.props.invalidCallback(this.state, this.props)}
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
            forceKebabCase
          />
        </IcseFormGroup>
        <IcseFormGroup className="marginBottomSmall">
          <IcseHeading name="Resource Configuration" type="subHeading" />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={`${this.props.data.name}-resource`}
            tooltip={{
              content: "The resource of the policy definition",
              alignModal: "bottom-left",
            }}
            isModal={this.props.isModal}
            field="resource"
            value={this.state.resources.resource}
            invalid={false}
            onChange={this.handleInputResource}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            name="resource_group"
            formName={`${kebabCase(this.props.data.name)}-agp-rg-select`}
            groups={this.props.resourceGroups}
            value={this.state.resources.resource_group}
            handleInputChange={this.handleInputResource}
            labelText="Resource Group"
            tooltip={{
              content: "Name of the resource group the policy will apply to",
              alignModal: "bottom-left",
            }}
            disableInvalid // resource group is not required
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={`${this.props.data.name}-resource_instance_id`}
            isModal={this.props.isModal}
            field="resource_instance_id"
            value={this.state.resources.resource_instance_id}
            tooltip={{
              content: "ID of a service instance to give permissions",
            }}
            invalid={false}
            labelText="Resource Instance ID" // needed to override Id in titleCase
            onChange={this.handleInputResource}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={`${this.props.data.name}-service`}
            tooltip={{
              content:
                'Name of the service type for the policy ex. "cloud-object-storage". You can run the `ibmcloud catalog service-marketplace` command to retrieve the service types. For account management services, you can find supported values in the following link.',
              link: "https://cloud.ibm.com/docs/account?topic=account-account-services#api-acct-mgmt",
              alignModal: "bottom-left",
              align: "top-left",
            }}
            labelText="Service Type" // override field, display text different
            field="service"
            value={this.state.resources.service}
            isModal={this.props.isModal}
            onChange={this.handleInputResource}
            invalid={false}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            id={`${this.props.data.name}-resource-type`}
            field="resource_type"
            tooltip={{
              content:
                'Name of the resource type for the policy ex. "resource-group"',
              alignModal: "bottom-left",
            }}
            invalid={false}
            value={this.state.resources.resource_type}
            isModal={this.props.isModal}
            onChange={this.handleInputResource}
          />
        </IcseFormGroup>
      </>
    );
  }
}

AccessGroupPolicyForm.defaultProps = {
  data: {
    name: "",
    resources: {
      resource_group: "",
      resource_type: "",
      resource: "",
      service: "",
      resource_instance_id: "",
    },
  },
  resourceGroups: [],
  isModal: false,
};

AccessGroupPolicyForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resources: PropTypes.shape({
      resource_group: PropTypes.string, // can be null
      resource_type: PropTypes.string,
      resource: PropTypes.string,
      service: PropTypes.string,
      resource_instance_id: PropTypes.string,
    }).isRequired,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
};

export default AccessGroupPolicyForm;
