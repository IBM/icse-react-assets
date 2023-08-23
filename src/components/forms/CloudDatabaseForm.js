import React, { Component } from "react";
import { NumberInput } from "@carbon/react";
import { titleCase } from "lazy-z";
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
            value={this.state.name || ""}
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
              "databases-for-postgresql",
              "databases-for-etcd",
              "databases-for-redis",
              "databases-for-mongodb",
              "databases-for-mysql",
            ].map(titleCase)}
            value={titleCase(this.state.service)}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Cloud Database."
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Select Resource Group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName={this.props.data.name + "-db-rg-select"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidthSmaller"
          />
          {this.state.use_data !== true && (
            <>
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
              />
            </>
          )}
        </IcseFormGroup>
        {this.state.use_data !== true && (
          <IcseFormGroup>
            {/* memory number input */}
            <NumberInput
              label="Memory (GB)"
              id={this.props.data.name + "-db-memory"}
              value={this.state.memory || ""}
              allowEmpty
              placeholder={this.props.memoryMin}
              min={this.props.memoryMin}
              max={this.props.memoryMax}
              onChange={this.handleInputChange}
              name="memory"
              hideSteppers
              invalid={isRangeInvalid(
                this.state.memory,
                this.props.memoryMin,
                this.props.memoryMax,
              )}
              invalidText={`RAM must be a minimum of ${this.props.memoryMin}GB and a maximum ${this.props.memoryMax}GB per member`}
              className="fieldWidthSmaller leftTextAlign"
            />
            {/* disk number input */}
            <NumberInput
              label="Disk (GB)"
              id={this.props.data.name + "-db-disk"}
              value={this.state.disk || ""}
              allowEmpty
              placeholder={this.props.diskMin}
              min={this.props.diskMin}
              max={this.props.diskMax}
              onChange={this.handleInputChange}
              name="disk"
              hideSteppers
              invalid={isRangeInvalid(
                this.state.disk,
                this.props.diskMin,
                this.props.diskMax,
              )}
              invalidText={`Disk must be a minimum of ${this.props.diskMin}GB and a maximum ${this.props.diskMax}GB per member`}
              className="fieldWidthSmaller leftTextAlign"
            />
            {/* cpu text input */}
            <NumberInput
              label="CPU"
              id={this.props.data.name + "-db-cpu"}
              value={this.state.cpu || ""}
              allowEmpty
              placeholder={this.props.cpuMin}
              min={this.props.cpuMin}
              max={this.props.cpuMax}
              onChange={this.handleInputChange}
              name="cpu"
              hideSteppers
              invalid={this.props.invalidCpuCallback(this.state, this.props)}
              invalidText={this.props.invalidCpuTextCallback(
                this.state,
                this.props,
              )}
              className="fieldWidthSmaller leftTextAlign"
            />
          </IcseFormGroup>
        )}
        {this.state.use_data !== true && (
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
        )}
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
    memory: null,
    disk: null,
    cpu: null,
  },
  memoryMin: 1,
  memoryMax: 112,
  diskMin: 5,
  diskMax: 4096,
  cpuMin: 0,
  cpuMax: 28,
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
  memoryMin: PropTypes.number,
  memoryMax: PropTypes.number,
  diskMin: PropTypes.number,
  diskMax: PropTypes.number,
  cpuMin: PropTypes.number,
  cpuMax: PropTypes.number,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
};

export default CloudDatabaseForm;
