import React from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import {
  contains,
  getObjectFromArray,
  isNullOrEmptyString,
  capitalize,
} from "lazy-z";

class PowerVsVolumeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleInstanceSelect = this.handleInstanceSelect.bind(this);
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
            className="fieldWidth"
          />
          <IcseSelect
            labelText="Workspace"
            name="workspace"
            formName={this.props.data.name + "-power-volume-workspace"}
            groups={splat(this.props.power, "name")}
            value={this.state.workspace}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Workspace."
            className="fieldWidth"
            id={`${this.props.data.name}-power-volume-workspace`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
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
            className="fieldWidth"
          />
          <IcseToggle
            id={this.props.data.name + "-power-volume-sharable"}
            labelText="Enable Volume Replication"
            toggleFieldName="pi_replication_enabled"
            defaultToggled={this.state.pi_replication_enabled}
            onToggle={this.handleToggle}
            isModal={this.props.isModal}
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            labelText="Storage Type"
            name="pi_volume_type"
            formName={this.props.data.name + "-power-instance-stortype"}
            groups={["Tier-1", "Tier-3"]}
            value={
              isNullOrEmptyString(this.state.pi_volume_type)
                ? ""
                : capitalize(
                    this.state.pi_volume_type.split(/(?=\d)/).join("-"),
                  )
            }
            handleInputChange={this.handleInputChange}
            invalidText="Select a Storage Type."
            className="fieldWidth"
            id={`${this.props.data.name}-power-instance-stortype`}
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
              className="fieldWidth"
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
};

export default PowerVsVolumeForm;
