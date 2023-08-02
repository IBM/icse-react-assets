import React, { Component } from "react";
import { NumberInput } from "@carbon/react";
import { isNullOrEmptyString, isWholeNumber, titleCase } from "lazy-z";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { isRangeInvalid } from "../../lib/iam-utils";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import { databaseInputChange } from "../../lib/forms";
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
    this.setState(databaseInputChange(this.state, event));
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
            groups={[
              "Databases for Postgresql",
              "Databases for Etcd",
              "Databases for Redis",
              "Databases for Mongodb",
              "Databases for Mysql",
            ]}
            value={titleCase(this.state.service)}
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
            groups={
              this.state.service === "databases-for-mongodb"
                ? ["Standard", "Enterprise"]
                : ["Standard"]
            }
            disabled={
              this.state.service === "databases-for-mongodb" ? false : true
            }
            value={titleCase(this.state.plan)}
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
                "The ID of the scaling group. Read more about analytics and bi_connector for MongoDB down below.",
              align: "bottom-left",
              link: "https://cloud.ibm.com/docs/databases-for-mongodb?topic=databases-for-mongodb-mongodbee-analytics&interface=api",
            }}
            groups={
              this.state.service === "databases-for-mongodb"
                ? ["member", "analytcs", "bi_connector"]
                : ["member"]
            }
            disabled={
              this.state.service === "databases-for-mongodb" ? false : true
            }
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
            allowEmpty
            defaultValue={1}
            placeholder={1}
            min={this.state.memoryMin || 1}
            max={this.state.memoryMax || 112}
            onChange={this.handleInputChange}
            name="memory"
            hideSteppers
            invalid={isRangeInvalid(
              this.state.memory,
              Number(this.state.memoryMin),
              Number(this.state.memoryMax),
            )}
            invalidText={`RAM must be a minimum of ${Number(
              this.state.memoryMin,
            )}GB and a maximum ${Number(this.state.memoryMax)}GB per member`}
            className="fieldWidthSmaller leftTextAlign"
          />
          {/* disk number input */}
          <NumberInput
            label="Disk (GB)"
            id={this.props.data.name + "-db-disk"}
            value={this.state.disk}
            allowEmpty
            defaultValue={1}
            placeholder={1}
            min={this.state.diskMin || 5}
            max={this.state.diskMax || 4096}
            onChange={this.handleInputChange}
            name="disk"
            hideSteppers
            invalid={isRangeInvalid(
              this.state.disk,
              Number(this.state.diskMin),
              Number(this.state.diskMax),
            )}
            invalidText={`Disk must be a minimum of ${this.state.diskMin}GB and a maximum ${this.state.diskMax}GB per member`}
            className="fieldWidthSmaller leftTextAlign"
          />
          {/* cpu text input */}
          <NumberInput
            label="CPU"
            id={this.props.data.name + "-db-cpu"}
            value={this.state.cpu}
            allowEmpty
            defaultValue={0}
            placeholder={0}
            min={this.state.cpuMin || 0}
            max={this.state.cpuMin || 28}
            onChange={this.handleInputChange}
            name="cpu"
            hideSteppers
            invalid={
              !isNullOrEmptyString(this.state.cpu) &&
              (!isWholeNumber(Number(this.state.cpu)) ||
                (Number(this.state.cpu) !== 0 &&
                  Number(this.state.cpu) < Number(this.state.cpuMin)) ||
                Number(this.state.cpu) > Number(this.state.cpuMax))
            }
            invalidText={`Using dedicated cores requires a minimum of ${this.state.cpuMin} cores and a maximum of ${this.state.cpuMax} cores per member. For shared CPU, select 0 cores.`}
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
    group_id: "member",
    memory: "",
    disk: "",
    cpu: "",
    memoryMin: "",
    memoryMax: "",
    diskMin: "",
    diskMax: "",
    cpuMin: "",
    cpuMax: "",
  },
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
    memoryMin: PropTypes.number,
    memoryMax: PropTypes.number,
    diskMin: PropTypes.number,
    diskMax: PropTypes.number,
    cpuMin: PropTypes.number,
    cpuMax: PropTypes.number,
    encryption_key: PropTypes.string,
  }).isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
};

export default CloudDatabaseForm;
