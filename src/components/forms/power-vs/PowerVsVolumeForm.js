import React from "react";
import PropTypes from "prop-types";
import { NumberInput } from "@carbon/react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import {
  contains,
  getObjectFromArray,
  isNullOrEmptyString,
  splat,
  isEmpty,
} from "lazy-z";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput, IcseToggle } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import { IcseMultiSelect } from "../../MultiSelects";
import { isRangeInvalid } from "../../../lib/iam-utils";
import { PowerVsAffinity } from "./PowerVsAffinity";

class PowerVsVolumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    if (!this.state.storage_option) {
      this.state.storage_option = "Storage Type";
      this.state.affinity_type = null;
    }
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInstanceSelect = this.handleInstanceSelect.bind(this);
    this.instanceFilter = this.instanceFilter.bind(this);
    this.volumeFilter = this.volumeFilter.bind(this);
  }

  handleInputChange(event) {
    let { name, value } = event.target;
    if (name === "workspace") {
      let zone = getObjectFromArray(this.props.power, "name", value).zone;
      this.setState({
        workspace: value,
        zone: zone,
        attachments: [],
      });
    } else if (contains(["pi_volume_type"], name)) {
      this.setState({
        [name]: value.toLowerCase().replace(/-/g, ""),
        attachments: [],
      });
    } else if (name === "storage_option") {
      let nextState = { ...this.state };
      if (value !== "Storage Type") {
        nextState.pi_volume_type = null;
      }
      if (value !== "Storage Pool") {
        nextState.pi_storage_pool = null;
      }
      if (value !== "Affinity") {
        nextState.pi_affinity_policy = null;
        nextState.pi_affinity_volume = null;
        nextState.pi_affinity_instance = null;
      }
      if (value !== "Anti-Affinity") {
        nextState.pi_anti_affinity_volume = null;
        nextState.pi_anti_affinity_instance = null;
      }
      if (contains(["Affinity", "Anti-Affinity"], value)) {
        nextState.pi_affinity_policy = value.toLowerCase();
      } else {
        nextState.pi_affinity_policy = null;
      }
      nextState[name] = value;
      this.setState(nextState);
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    if (name === "pi_volume_shareable") {
      this.setState({
        pi_volume_shareable: !this.state.pi_volume_shareable,
        attachments: [],
      });
    }
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  handleInstanceSelect(instances) {
    this.setState({ attachments: instances });
  }

  instanceFilter(instance) {
    if (
      (!instance.pi_affinity_policy ||
        isNullOrEmptyString(instance.pi_affinity_policy)) &&
      (!instance.pi_anti_affinity_policy ||
        isNullOrEmptyString(instance.pi_anti_affinity_policy)) &&
      instance.zone === this.state.zone &&
      instance.workspace === this.state.workspace
    ) {
      return instance;
    }
  }

  volumeFilter(volume) {
    if (
      (!volume.pi_affinity_policy ||
        isNullOrEmptyString(volume.pi_affinity_policy)) &&
      (!volume.pi_anti_affinity_policy ||
        isNullOrEmptyString(volume.pi_anti_affinity_policy)) &&
      volume.zone === this.state.zone &&
      volume.workspace === this.state.workspace &&
      volume.name !== this.props.data.name
    )
      return volume;
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-power-volume-name"}
            componentName={this.props.data.name + "-power-volume-name"}
            placeholder="my-power-volume-instance-name"
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            labelText="Workspace"
            name="workspace"
            formName={this.props.data.name + "-power-volume-workspace"}
            groups={splat(this.props.power, "name")}
            value={this.state.workspace}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Workspace."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-volume-workspace`}
          />

          <NumberInput
            id={this.props.data.name + "power-volume-capacity"}
            name="pi_volume_size"
            label="Capacity (GB)"
            value={
              this.state.pi_volume_size
                ? parseInt(
                    isNullOrEmptyString(this.state.pi_volume_size)
                      ? 0
                      : this.state.pi_volume_size,
                  )
                : ""
            }
            onChange={this.handleInputChange}
            allowEmpty={true}
            step={1}
            hideSteppers={true}
            placeholder="1"
            min={1}
            max={2000}
            invalid={isRangeInvalid(this.state.pi_volume_size, 1, 2000)}
            invalidText="Must be a whole number between 1 and 2000"
            className="fieldWidthSmaller leftTextAlign"
          />
        </IcseFormGroup>
        <PowerVsAffinity
          data={this.props.data}
          stateData={this.state}
          componentProps={this.props}
          handleInputChange={this.handleInputChange}
          affinityChangesDisabled={this.props.affinityChangesDisabled}
          storage_pool_map={this.props.storage_pool_map}
          power_instances={this.props.power_instances}
          power_volumes={this.props.power_volumes}
          instanceFilter={this.instanceFilter}
          volumeFilter={this.volumeFilter}
          isVolume
        />
        <IcseFormGroup>
          <IcseToggle
            id={this.props.data.name + "-power-volume-replication"}
            labelText="Enable Volume Replication"
            toggleFieldName="pi_replication_enabled"
            defaultToggled={this.state.pi_replication_enabled}
            onToggle={this.handleToggle}
            isModal={this.props.isModal}
            className="fieldWidthSmaller"
          />
          <IcseToggle
            tooltip={{
              content: "Enable sharing between multiple instances",
              align: "bottom-left",
              alignModal: "right",
            }}
            id={this.props.data.name + "-power-volume-sharable"}
            labelText="Enable Volume Sharing"
            toggleFieldName="pi_volume_shareable"
            defaultToggled={this.state.pi_volume_shareable}
            onToggle={this.handleToggle}
            isModal={this.props.isModal}
            className="fieldWidthSmaller"
          />
          {this.state.pi_volume_shareable ? (
            <IcseMultiSelect
              key={JSON.stringify(this.state.attachments)} // force rerender on type change
              titleText="Attached Instances"
              items={this.getPowerInstances()}
              id={this.props.data.name + "-power-volume"}
              initialSelectedItems={this.state.attachments}
              onChange={(event) =>
                this.handleInstanceSelect(event.selectedItems)
              }
              className="fieldWidthSmaller"
            />
          ) : (
            <IcseSelect
              labelText="Attached Instance"
              name="attachments"
              formName={this.props.data.name + "-power-volume-instance"}
              groups={this.getPowerInstances()}
              value={
                isEmpty(this.state.attachments) ? "" : this.state.attachments[0]
              }
              handleInputChange={(event) =>
                this.handleInstanceSelect([event.target.value])
              }
              disableInvalid
              className="fieldWidthSmaller"
              id={`${this.props.data.name}-power-volume-instance`}
            />
          )}
        </IcseFormGroup>
      </>
    );
  }
}

PowerVsVolumeForm.defaultProps = {
  data: {
    name: "",
    workspace: "",
    pi_volume_shareable: false,
    pi_replication_enabled: false,
    pi_volume_type: "",
    attachments: [],
  },
  isModal: false,
};

PowerVsVolumeForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    workspace: PropTypes.string,
    pi_volume_shareable: PropTypes.bool,
    pi_replication_enabled: PropTypes.bool,
    pi_volume_type: PropTypes.string,
  }),
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // changes should be disabled when another instance or volume uses this
  // instance for affinity
  affinityChangesDisabled: PropTypes.func.isRequired,
};

export default PowerVsVolumeForm;
