import React from "react";

import "./App.css";
import {
  IcseFormGroup,
  IcseNameInput,
  IcseSelect,
  buildFormDefaultInputMethods,
  buildFormFunctions,
  IcseMultiSelect,
  IcseHeading,
  IcseTextInput,
  IcseToggle,
} from "icse-react-assets";
import {
  capitalize,
  contains,
  getObjectFromArray,
  splat,
  splatContains,
  isNullOrEmptyString,
  isEmpty,
} from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";

class PowerVsVolume extends React.Component {
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
              key={JSON.stringify(this.state.attachments)}
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

PowerVsVolume.defaultProps = {
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

PowerVsVolume.propTypes = {
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

const App = () => {
  return (
    <div style={{ maxWidth: "66vw" }}>
      <PowerVsVolume
        data={{
          name: "frog",
          workspace: "example",
          pi_volume_type: "tier1",
          pi_volume_shareable: true,
          pi_replication_enabled: true,
          attachments: [],
        }}
        invalidCallback={() => {
          return false;
        }}
        invalidTextCallback={() => {
          return "uh oh";
        }}
        power={[
          {
            name: "example",
            resource_group: "example",
            zone: "dal10",
            ssh_keys: [
              {
                workspace: "example",
                name: "keyname",
                zone: "dal10",
              },
            ],
            network: [
              {
                workspace: "example",
                name: "dev-nw",
                pi_cidr: "1.2.3.4/5",
                pi_dns: ["127.0.0.1"],
                pi_network_type: "vlan",
                pi_network_jumbo: true,
                zone: "dal10",
              },
            ],
            cloud_connections: [
              {
                name: "dev-connection",
                workspace: "example",
                pi_cloud_connection_speed: 50,
                pi_cloud_connection_global_routing: false,
                pi_cloud_connection_metered: false,
                pi_cloud_connection_transit_enabled: true,
                transit_gateways: [],
                zone: "dal10",
              },
            ],
            images: [
              {
                workspace: "example",
                pi_image_id: "e4de6683-2a42-4993-b702-c8613f132d39",
                name: "SLES15-SP3-SAP",
                zone: "dal10",
              },
            ],
            attachments: [
              {
                connections: ["dev-connection"],
                workspace: "example",
                network: "dev-nw",
                zone: "dal10",
              },
            ],
          },
          {
            name: "2example",
            resource_group: "example",
            zone: "dal10",
            ssh_keys: [
              {
                workspace: "example",
                name: "2keyname",
                zone: "dal10",
              },
            ],
            network: [
              {
                workspace: "example",
                name: "2dev-nw",
                pi_cidr: "1.2.3.4/5",
                pi_dns: ["127.0.0.1"],
                pi_network_type: "vlan",
                pi_network_jumbo: true,
                zone: "dal10",
              },
            ],
            cloud_connections: [
              {
                name: "2dev-connection",
                workspace: "example",
                pi_cloud_connection_speed: 50,
                pi_cloud_connection_global_routing: false,
                pi_cloud_connection_metered: false,
                pi_cloud_connection_transit_enabled: true,
                transit_gateways: [],
                zone: "dal10",
              },
            ],
            images: [
              {
                workspace: "example",
                pi_image_id: "e4de6683-2a42-4993-b702-c8613f132d39",
                name: "SLES15-SP3-SAP",
                zone: "dal10",
              },
            ],
            attachments: [
              {
                connections: ["dev-connection"],
                workspace: "example",
                network: "dev-nw",
                zone: "dal10",
              },
            ],
          },
        ]}
        power_instances={[
          {
            zone: "dal12",
            workspace: "example",
            name: "test",
            image: "SLES15-SP3-SAP",
            ssh_key: "keyname",
            network: [
              {
                name: "dev-nw",
              },
            ],
            pi_memory: "4",
            pi_processors: "2",
            pi_proc_type: "shared",
            pi_sys_type: "s922",
            pi_pin_policy: "none",
            pi_health_status: "WARNING",
            pi_storage_type: "tier1",
          },
        ]}
      />
    </div>
  );
};
export default App;
