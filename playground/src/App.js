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
} from "icse-react-assets";
import {
  capitalize,
  contains,
  getObjectFromArray,
  splat,
  splatContains,
} from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";

class PowerVsInstance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleIpAddressChange = this.handleIpAddressChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    if (name === "workspace") {
      let zone = getObjectFromArray(this.props.power, "name", value).zone;
      this.setState({
        workspace: value,
        zone: zone,
        image: "",
        ssh_key: "",
        network: [],
      });
    } else if (contains(["pi_proc_type", "pi_storage_type"], name)) {
      this.setState({
        [name]: value.toLowerCase().replace(/-/g, ""),
      });
    } else if (name === "pi_health_status") {
      this.setState({
        [name]: value.toUpperCase(),
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle network change
   * @param {*} event
   */
  handleMultiSelectChange(event) {
    let newItems = [];
    let oldItems = [...this.state.network];
    oldItems.forEach((item) => {
      if (contains(event.selectedItems, item.name)) {
        newItems.push(item);
      }
    });
    event.selectedItems.forEach((item) => {
      if (!splatContains(newItems, "name", item)) {
        newItems.push({
          name: item,
          ip_address: "",
        });
      }
    });

    this.setState({ network: newItems });
  }

  handleIpAddressChange(index, ip) {
    let nw = [...this.state.network];
    nw[index].ip_address = ip;
    this.setState({ network: nw });
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-power-vs-name"}
            componentName={this.props.data.name + "-power-vs-name"}
            placeholder="my-powe-vs-instance-name"
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            labelText="Workspace"
            name="workspaces"
            formName={this.props.data.name + "-power-instance-workspace"}
            groups={splat(this.props.power, "name")}
            value={this.state.workspace}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Workspace."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-workspace`}
          />
          <IcseMultiSelect
            titleText="Network Interfaces"
            className="fieldWidthSmaller"
            id={this.props.data.network + "-power-instance-network"}
            items={this.getPowerNetworkList()}
            initialSelectedItems={splat(this.state.network, "name")}
            onChange={this.handleMultiSelectChange}
            invalid={this.state.network.length === 0}
            invalidText="Select at lease one Network Interface"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            labelText="SSH Key"
            name="ssh_key"
            formName={this.props.data.name + "-power-instance-key"}
            groups={this.getPowerSshKeyList()}
            value={this.state.ssh_key}
            handleInputChange={this.handleInputChange}
            invalidText="Select an SSH Key."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-key`}
          />
          <IcseSelect
            labelText="Image"
            name="image"
            formName={this.props.data.name + "-power-instance-image"}
            groups={this.getPowerImageList()}
            value={this.state.image}
            handleInputChange={this.handleInputChange}
            invalidText="Select an Image."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-image`}
          />
          <IcseSelect
            labelText="System Type"
            name="pi_sys_type"
            formName={this.props.data.name + "-power-instance-systype"}
            groups={["e880", "e980", "s922", "s1022"]}
            value={this.state.pi_sys_type}
            handleInputChange={this.handleInputChange}
            invalidText="Select a System Type."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-systype`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            labelText="Health Status"
            name="pi_health_status"
            formName={this.props.data.name + "-power-instance-status"}
            groups={["Ok", "Warning"]}
            value={capitalize(this.state.pi_health_status.toLowerCase())}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Health Status."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-status`}
          />
          {/* when sap supported will need a switch here */}
          <IcseSelect
            labelText="Processor Type"
            name="pi_proc_type"
            formName={this.props.data.name + "-power-instance-proctype"}
            groups={["Shared", "Capped", "Dedicated"]}
            value={capitalize(this.state.pi_proc_type)}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Processor Type."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-proctype`}
          />
          <IcseSelect
            labelText="Storage Type"
            name="pi_storage_type"
            formName={this.props.data.name + "-power-instance-stortype"}
            groups={["Tier-1", "Tier-3"]}
            value={
              this.state.pi_storage_type === ""
                ? ""
                : capitalize(
                    this.state.pi_storage_type.split(/(?=\d)/).join("-"),
                  )
            }
            handleInputChange={this.handleInputChange}
            invalidText="Select a Storage Type."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-stortype`}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseTextInput
            labelText="Processors"
            onChange={this.handleInputChange}
            field="pi_processors"
            invalid={this.props.invalidPiProcessorsCallback(
              this.state,
              this.props,
            )}
            invalidText={this.props.invalidPiProcessorsTextCallback(
              this.state,
              this.props,
            )}
            value={this.state.pi_processors}
            className="fieldWidthSmaller"
            placeholder="0.25"
          />
          <IcseTextInput
            labelText="Memory"
            onChange={this.handleInputChange}
            field="pi_memory"
            invalid={this.props.invalidPiMemoryCallback(this.state, this.props)}
            invalidText={this.props.invalidPiMemoryTextCallback(
              this.state,
              this.props,
            )}
            value={this.state.pi_processors}
            className="fieldWidthSmaller"
            placeholder="1024"
          />
        </IcseFormGroup>
        <IcseHeading name="Interface IP Addresses" type="subHeading" />
        <div className="formInSubForm">
          {this.state.network.map((nw, index) => (
            <IcseFormGroup
              key={nw.name + "-group"}
              className="alignItemsCenter"
            >
              <Network_3 className="powerIpMargin" />
              <div className="powerIpMargin">
                <p>{nw.name}</p>
              </div>
              <IcseTextInput
                onChange={(event) => {
                  this.handleIpAddressChange(index, event.target.value);
                }}
                field="ip_address"
                invalidCallback={() =>
                  this.props.invalidIpCallback(nw.ip_address)
                }
                invalidTextCallback={() => {
                  return "Invalid IP Address";
                }}
                value={nw.ip_address}
              />
            </IcseFormGroup>
          ))}
        </div>
      </>
    );
  }
}

PowerVsInstance.defaultProps = {
  data: {
    name: "",
    workspace: "",
    image: "",
    network: [],
    zone: "",
    pi_health_status: "OK",
    pi_proc_type: "shared",
  },
};

PowerVsInstance.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidIpCallback: PropTypes.func.isRequired,
  invalidPiProcessorsCallback: PropTypes.func.isRequired,
  invalidPiProcessorsTextCallback: PropTypes.func.isRequired,
  invalidPiMemoryCallback: PropTypes.func.isRequired,
  invalidPiMemoryTextCallback: PropTypes.func.isRequired,
};

const App = () => {
  return (
    <div style={{ maxWidth: "66vw" }}>
      <PowerVsInstance
        data={{
          name: "frog",
          workspace: "example",
          image: "",
          ssh_key: "",
          network: [
            {
              name: "dev-nw",
              ip_address: "1.2.3.4",
            },
          ],
          pi_proc_type: "shared",
          pi_storage_type: "tier1",
          pi_health_status: "WARNING",
        }}
        invalidCallback={() => {
          return false;
        }}
        invalidTextCallback={() => {
          return "uh oh";
        }}
        invalidPiProcessorsCallback={() => {
          return false;
        }}
        invalidPiProcessorsTextCallback={() => {
          return "uh oh";
        }}
        invalidIpCallback={() => {
          return false;
        }}
        invalidPiMemoryCallback={() => {
          return false;
        }}
        invalidPiMemoryTextCallback={() => {
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
      />
    </div>
  );
};
export default App;
