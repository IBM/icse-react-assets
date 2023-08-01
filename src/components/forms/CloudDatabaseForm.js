import React, { Component } from "react";
import { NumberInput } from "@carbon/react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseNameInput, IcseTextInput, IcseToggle } from "../Inputs";
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
            className="fieldWidth"
          />
          {/* Select Resource Group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName={this.props.data.name + "-db-rg"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidth"
            id={`${this.props.data.name}-db-rg`}
          />
          {/* use data toggle */}
          <IcseToggle
            labelText="Use Existing Instance"
            key={this.state.use_data}
            defaultToggled={this.state.use_data}
            toggleFieldName="use_data"
            onToggle={this.handleToggle}
            className="fieldWidthSmallest"
            id={`${this.props.data.name}-db-existing-instance`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* Select Plan */}
          <IcseSelect
            labelText="Plan"
            name="plan"
            formName={this.props.data.name + "-db-plan"}
            groups={this.state.service === "databases-for-mongodb" ? ["standard", "enterprise"] : ["standard"]}
            value={this.state.plan}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Plan."
            className="fieldWidth"
            id={`${this.props.data.name}-db-plan`}
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
        className="fieldWidth"
        id={`${this.props.data.name}-db-service`}
        />
        {/* Select Group ID */}
        <IcseSelect
        labelText="Group ID"
        name="group_id"
        formName={this.props.data.name + "-db-groupId"}
        groups={["member", "analytcs", "bi_connector", "search"]}
        value={this.state.group_id}
        handleInputChange={this.handleInputChange}
        invalidText="Select a Group ID."
        className="fieldWidth"
        id={`${this.props.data.name}-db-groupId`}
        />
        </IcseFormGroup>
        <IcseFormGroup>
        {/* memory number input */}
        <NumberInput
            label="Memory"
            id={this.props.data.name + "-db-memory"}
            value={this.state.memory}
            defaultValue={1}
            max={112}
            min={1}
            onChange={this.handleInputChange}
            name="memory"
            hideSteppers={true}
            invalidText="RAM must be a minimum of 1GB and a maximum 112GB per member"
            className="fieldWidthSmaller leftTextAlign"
          />
        {/* disk number input */}
        <NumberInput
            label="Disk"
            id={this.props.data.name + "-db-disk"}
            value={this.state.disk}
            defaultValue={1}
            max={4096}
            min={5}
            onChange={this.handleInputChange}
            name="disk"
            hideSteppers={true}
            invalidText="Disk must be a minimum of 5GB and a maximum 4096GB per member"
            className="fieldWidthSmaller leftTextAlign"
          />
        {/* cpu text input */}
        <IcseTextInput
          id={this.props.data.name + "-db-cpu"}
          componentName={this.props.data.name + "-db-cpu"}
          placeholder=""
          field="cpu"
          labelText="CPU"
          value={this.state.cpu}
          onChange={this.handleInputChange}
          invalid={this.props.invalidCpuCallback(this.state, this.props)}
          invalidText={this.props.invalidCpuTextCallback(this.state, this.props)}
          className="fieldWidthSmaller"
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
    memory: 1024,
    disk: 1024,
    cpu: 0,
  }
};

CloudDatabaseForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
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
  invalidCpuCallback: PropTypes.func,
  invalidCpuTextCallback: PropTypes.func,
};

export default CloudDatabaseForm;
