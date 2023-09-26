import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { IcseSelect } from "../Dropdowns";
import { IcseFormGroup } from "../Utils";
import { IcseToggle, IcseNameInput } from "../Inputs";
import IcseFormTemplate from "../IcseFormTemplate";
import ObjectStorageBucketForm from "./ObjectStorageBucketForm";
import ObjectStorageKeyForm from "./ObjectStorageKeyForm";
import { transpose, kebabCase, titleCase } from "lazy-z";

/**
 * Object storage
 */
class ObjectStorageInstancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCosPlanChange = this.handleCosPlanChange.bind(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

    /**
   * handle cos plan change and convert to kebab when saving to state
   * @param {event} event event
   */
  handleCosPlanChange(event) {
    this.setState({ plan: kebabCase(event.target.value) });
  }

  render() {
    let composedId = `object-storage-form-${this.props.data.name}-`;
    let bucketInnerFormProps = {
      invalidCallback: this.props.invalidBucketCallback,
      invalidTextCallback: this.props.invalidBucketTextCallback,
      composedNameCallback: this.props.composedNameCallback,
      arrayParentName: this.props.data.name,
      parent_name: this.props.data.name,
    };
    transpose({ ...this.props.bucketProps }, bucketInnerFormProps);
    let keyInnerFormProps = {
      invalidCallback: this.props.invalidKeyCallback,
      invalidTextCallback: this.props.invalidKeyTextCallback,
      composedNameCallback: this.props.composedNameCallback,
      arrayParentName: this.props.data.name,
    };
    transpose({ ...this.props.keyProps }, keyInnerFormProps);
    return (
      <>
        <IcseFormGroup>
          <IcseToggle
            tooltip={{
              content:
                "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance.",
              alignModal: "bottom",
            }}
            id={composedId + "use-data"}
            toggleFieldName="use_data"
            labelText="Use Existing Instance"
            defaultToggled={this.state.use_data}
            onToggle={this.handleInputChange}
            isModal={this.props.isModal}
          />
          <IcseToggle
            tooltip={{
              content:
                "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments.",
              alignModal: "bottom",
            }}
            id={composedId + "use-random-suffix"}
            labelText="Append Random Suffix to Names"
            toggleFieldName="use_random_suffix"
            defaultToggled={this.state.use_random_suffix}
            onToggle={this.handleInputChange}
            isModal={this.props.isModal}
          />
          <IcseSelect
            formName={this.props.data.name + "-object-storage-kms"}
            name="kms"
            labelText="Key Management Instance"
            groups={this.props.kmsList}
            value={this.state.kms}
            handleInputChange={this.handleInputChange}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-object-storage-name"}
            componentName={this.props.data.name}
            value={this.state.name}
            onChange={this.handleInputChange}
            helperTextCallback={() =>
              this.props.composedNameCallback(this.state, this.props)
            }
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            formName={this.props.data.name + "-object-storage-rg"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
          />
          <IcseSelect
            formName={this.props.data.name + "-object-storage-plan"}
            name="plan"
            labelText="Plan"
            groups={this.props.cosPlans}
            value={titleCase(this.state.plan)}
            handleInputChange={this.handleCosPlanChange}
          />
        </IcseFormGroup>        
        {/* show keys and buckets if not modal */}
        {this.props.isModal !== true && (
          <>
            <IcseFormTemplate
              name="Service Credentials"
              subHeading
              tooltip={{
                content:
                  "A service credential allows for a service instance to connect to Object Storage.",
                link: "https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-service-credentials",
              }}
              addText="Create a Service Credential"
              arrayData={this.props.data.keys}
              innerForm={ObjectStorageKeyForm}
              disableSave={this.props.keyProps.disableSave}
              onDelete={this.props.keyProps.onDelete}
              onSave={this.props.keyProps.onSave}
              onSubmit={this.props.keyProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...keyInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "cos_keys",
                disableSave: this.props.keyProps.disableSave,
                type: "formInSubForm",
              }}
            />
            <IcseFormTemplate
              name="Buckets"
              subHeading
              addText="Create a Bucket"
              arrayData={this.props.data.buckets}
              innerForm={ObjectStorageBucketForm}
              disableSave={this.props.bucketProps.disableSave}
              onDelete={this.props.bucketProps.onDelete}
              onSave={this.props.bucketProps.onSave}
              onSubmit={this.props.bucketProps.onSubmit}
              propsMatchState={this.props.propsMatchState}
              innerFormProps={{ ...bucketInnerFormProps }}
              hideAbout
              toggleFormProps={{
                hideName: true,
                submissionFieldName: "buckets",
                disableSave: this.props.bucketProps.disableSave,
                type: "formInSubForm",
              }}
            />
          </>
        )}
      </>
    );
  }
}

ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    plan: "standard",
    use_random_suffix: true,
  },
  resourceGroups: [],
  cosPlans: ["standard"]
};

ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes.bool,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosPlans: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    use_data: PropTypes.bool.isRequired,
    resource_group: PropTypes.string,
    use_random_suffix: PropTypes.bool.isRequired,
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
};

export default ObjectStorageInstancesForm;
