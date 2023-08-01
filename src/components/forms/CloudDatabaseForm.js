import React, { Component } from "react";
import { NumberInput } from "@carbon/react";
import { isNullOrEmptyString, isWholeNumber } from "lazy-z";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import {
  rangeInvalid,
} from "../../lib";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import PropTypes from "prop-types";

/**
 * CloudDatabaseForm
 * @param {Object} props
 * @param {configDotJson} props.configDotJson config dot json
 * @param {slz} props.slz slz state store
 */
class CloudDatabaseForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off use_data param in state
   */
  handleToggle() {
    this.setState(this.toggleStateBoolean("use_data", this.state));
  }

  render() {
    return (
      <div id="db-form">
        <IcseFormGroup>
          {/* use data toggle */}
          <IcseToggle
            labelText="Use Existing Instance"
            key={this.state.use_data}
            defaultToggled={this.state.use_data}
            toggleFieldName="use_data"
            onToggle={this.handleToggle}
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-db-existing-instance`}
          />
          {/* name text input */}
          <IcseNameInput
            id={this.props.data.name + "-db-name"}
            componentName={this.props.data.name + "-db-name"}
            placeholder="my-db-name"
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          {/* Select Service */}
          <IcseSelect
            labelText="Cloud Database"
            name="service"
            formName={this.props.data.name + "-db-service"}
            groups={["databases-for-postgresql", "databases-for-etcd", "databases-for-redis", "databases-for-mongodb", "databases-for-mysql"]}
            value={this.state.service}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Cloud Database."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-db-service`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Select Resource Group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName={this.props.data.name + "-db-rg"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-db-rg`}
          />
          {/* Select Plan */}
          <IcseSelect
            labelText="Plan"
            name="plan"
            formName={this.props.data.name + "-db-plan"}
            groups={this.state.service === "databases-for-mongodb" ? ["Standard", "Enterprise"] : ["Standard"]}
            value={this.state.plan}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Plan."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-db-plan`}
          />
          {/* Select Group ID */}
          <IcseSelect
            labelText="Group ID"
            name="group_id"
            formName={this.props.data.name + "-db-groupId"}
            tooltip={{
              content:
                "The ID of the scaling group. Scaling group ID allowed values: member, analytics, bi_connector or search. Read more about analytics and bi_connector down below.",
              align: "bottom-left",
              link: "https://cloud.ibm.com/docs/databases-for-mongodb?topic=databases-for-mongodb-mongodbee-analytics&interface=api",
            }}
            groups={["member", "analytcs", "bi_connector", "search"]}
            value={this.state.group_id}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Group ID."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-db-groupId`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* memory number input */}
          <NumberInput
            label="Memory (GB)"
            id={this.props.data.name + "-db-memory"}
            value={this.state.memory}
            allowEmpty={true}
            defaultValue={1}
            max={112}
            min={1}
            onChange={this.handleInputChange}
            name="memory"
            hideSteppers={true}
            invalid={rangeInvalid(this.state.memory, 1, 112)}
            invalidText="RAM must be a minimum of 1GB and a maximum 112GB per member"
            className="fieldWidthSmaller leftTextAlign"
          />
          {/* disk number input */}
          <NumberInput
            label="Disk (GB)"
            id={this.props.data.name + "-db-disk"}
            value={this.state.disk}
            allowEmpty={true}
            defaultValue={1}
            max={4096}
            min={5}
            onChange={this.handleInputChange}
            name="disk"
            hideSteppers={true}
            invalid={rangeInvalid(this.state.disk, 5, 4096)}
            invalidText="Disk must be a minimum of 5GB and a maximum 4096GB per member"
            className="fieldWidthSmaller leftTextAlign"
          />
          {/* cpu text input */}
          <NumberInput
            label="CPU"
            id={this.props.data.name + "-db-cpu"}
            value={this.state.cpu}
            allowEmpty={true}
            defaultValue={1}
            max={28}
            min={0}
            onChange={this.handleInputChange}
            name="cpu"
            hideSteppers={true}
            invalid={!isNullOrEmptyString(this.state.cpu) &&
                    (!isWholeNumber(Number(this.state.cpu)) || 
                      (Number(this.state.cpu) !== 0 && Number(this.state.cpu) < 3) ||
                      Number(this.state.cpu) > 28) }
            invalidText="Using dedicated cores requires a minimum of 3 cores and a maximum of 28 cores per member. For shared CPU, select 0 cores."
            className="fieldWidthSmaller leftTextAlign"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Select Encryption Key */}
          <IcseSelect
            value={this.state.encryption_key}
            groups={this.props.encryptionKeys}
            formName={this.props.data.name + " CloudDatabase"}
            name="encryption_key"
            labelText="(Optional) Encryption Key"
            handleInputChange={this.handleInputChange}
            disableInvalid
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </div>
    );
  }
}

CloudDatabaseForm.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    use_data: false,
    plan: "standard",
    encryption_key: "",
    service: "",
    group_id: "",
    memory: "",
    disk: "",
    cpu: "",
  }
};

CloudDatabaseForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    use_data: PropTypes.bool,
    plan: PropTypes.string,
    service: PropTypes.string.isRequired,
    group_id: PropTypes.string,
    memory: PropTypes.number,
    disk: PropTypes.number,
    cpu: PropTypes.number,
    encryption_key: PropTypes.string,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
};

export default CloudDatabaseForm;
