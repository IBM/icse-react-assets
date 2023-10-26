import React from "react";
import {
  capitalize,
  contains,
  getObjectFromArray,
  isNullOrEmptyString,
  snakeCase,
  splat,
  splatContains,
} from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";
import { IcseFormGroup, IcseHeading } from "../../Utils";
import { IcseNameInput, IcseTextInput, IcseToggle } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseMultiSelect } from "../../MultiSelects";
import "./power-attachment.css";
import { PowerVsAffinity } from "./PowerVsAffinity";
import { RegexButWithWords } from "regex-but-with-words";

/**
 * use a profile to calculate sap hana size
 * @param {string} profile
 * @returns {number} memory size
 */
function calculateSapHanaMemory(profile) {
  let memory = parseInt(
    profile.replace(
      new RegexButWithWords()
        .negatedSet("x")
        .anyNumber()
        .literal("x")
        .done("g"),
      "",
    ),
  );
  if (memory < 256) {
    // all volume sizes must be at least 256 regardless of memory
    return String(256);
  } else return String(memory);
}

class PowerVsInstanceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    if (!this.state.storage_option) {
      this.state.storage_option = "Storage Type";
      this.state.affinity_type = null;
      this.state.pi_storage_pool_affinity = true;
    }
    if (!this.state.sap) {
      this.state.sap = false;
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleIpAddressChange = this.handleIpAddressChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.instanceFilter = this.instanceFilter.bind(this);
    this.volumeFilter = this.volumeFilter.bind(this);
    this.handleSapToggle = this.handleSapToggle.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  handleToggle() {
    this.setState(
      this.toggleStateBoolean("pi_storage_pool_affinity", this.state),
    );
  }

  handleSapToggle() {
    if (!this.state.sap) {
      this.setState({
        sap: true,
        sap_profile: "",
      });
    } else {
      this.setState({
        sap: false,
        sap_profile: null,
      });
    }
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
        pi_affinity_volume: null,
        pi_anti_affinity_instance: null,
        pi_anti_affinity_volume: null,
        pi_anti_affinity_instance: null,
      });
    } else if (contains(["pi_proc_type", "pi_storage_type"], name)) {
      this.setState({
        [name]: value.toLowerCase().replace(/-/g, ""),
      });
    } else if (name === "pi_health_status") {
      this.setState(
        {
          [name]: value.toUpperCase(),
        },
        () => {
          // if status is set to warning, disable affinity
          if (
            this.state.pi_health_status === "WARNING" &&
            !contains(
              ["Storage Type", "Storage Pool"],
              this.state.storage_option,
            )
          ) {
            this.setState({
              storage_option: null,
              affinity_type: null,
              pi_affinity_policy: null,
              pi_affinity_volume: null,
              pi_anti_affinity_instance: null,
              pi_anti_affinity_volume: null,
              pi_anti_affinity_instance: null,
            });
          }
        },
      );
    } else if (name === "storage_option") {
      let nextState = { ...this.state };
      if (value !== "Storage Type") {
        nextState.pi_storage_type = null;
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
    } else if (name === "sap_profile") {
      this.setState({
        [name]: value,
        pi_memory: calculateSapHanaMemory(value),
        pi_processors: value.replace(/^[^-]+-/g, "").replace(/x\d+$/g, ""),
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
    let item = { ...nw[index] };
    item.ip_address = ip;
    nw[index] = item;
    this.setState({ network: nw });
  }

  instanceFilter(instance) {
    if (
      instance.name !== this.props.data.name &&
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
      volume.workspace === this.state.workspace
    )
      return volume;
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseToggle
            tooltip={{
              align: "bottom-left",
              alignModal: "bottom-right",
              content:
                "Select from a supported SAP profile. Enabling SAP will automatically provision needed Power VS Volumes",
            }}
            labelText="SAP Instance"
            id={this.props.data.name + "-sap"}
            toggleFieldName="sap"
            defaultToggled={this.state.sap} // remove
            className="fieldWidthSmaller"
            onToggle={this.handleSapToggle}
          />
          {this.state.sap ? (
            <IcseSelect
              className="fieldWidthSmaller"
              labelText="SAP Instance Profile"
              formName={this.props.data.name + "-sap-profile"}
              invalid={this.state.sap && !this.state.sap_profile}
              invalidText="Select an Instance Profile"
              value={this.state.sap_profile}
              handleInputChange={this.handleInputChange}
              name="sap_profile"
              groups={this.props.sapProfiles}
              tooltip={{
                content: "This is a list of supported SAP instance profiles",
                link: "https://cloud.ibm.com/docs/sap?topic=sap-hana-iaas-offerings-profiles-power-vs",
                align: "bottom-right",
              }}
            />
          ) : (
            ""
          )}
        </IcseFormGroup>
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
            name="workspace"
            formName={this.props.data.name + "-power-instance-workspace"}
            groups={splat(this.props.power, "name")}
            value={this.state.workspace}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Workspace."
            className="fieldWidthSmaller"
            id={`${this.props.data.name}-power-instance-workspace`}
          />
          <IcseMultiSelect
            key={this.state.workspace}
            titleText="Network Interfaces"
            className="fieldWidthSmaller"
            id={this.props.data.network + "-power-instance-network"}
            items={
              isNullOrEmptyString(this.state.workspace)
                ? []
                : this.getPowerNetworkList()
            }
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
            groups={
              isNullOrEmptyString(this.state.workspace)
                ? []
                : this.getPowerSshKeyList()
            }
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
            groups={
              isNullOrEmptyString(this.state.workspace)
                ? []
                : this.getPowerImageList()
            }
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
          <IcseTextInput
            id={"power-instance" + this.state.name + "processors"}
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
            id={"power-instance" + this.state.name + "memory"}
            labelText="Memory (GB)"
            onChange={this.handleInputChange}
            field="pi_memory"
            invalid={
              this.state.sap
                ? false
                : this.props.invalidPiMemoryCallback(this.state, this.props)
            }
            invalidText={this.props.invalidPiMemoryTextCallback(
              this.state,
              this.props,
            )}
            value={this.state.pi_memory}
            className="fieldWidthSmaller"
            placeholder="1024"
            disabled={this.state.sap}
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
            disabled={this.props.storageChangesDisabledCallback(
              this.state,
              this.props,
            )}
          />
          <IcseToggle
            tooltip={{
              align: "bottom-left",
              alignModal: "right",
              content:
                "To attach data volumes from different storage pools, set to false. When this is set to false it cannot be set to true without re-creation of instance.",
            }}
            id={this.props.data.name + "pi_storage_pool_affinity"}
            labelText="Enable Storage Pool Affinity"
            toggleFieldName="pi_storage_pool_affinity"
            defaultToggled={this.state.pi_storage_pool_affinity}
            onToggle={this.handleToggle}
            className="fieldWidthSmaller"
            disabled={this.props.storageChangesDisabledCallback(
              this.state,
              this.props,
            )}
          />
        </IcseFormGroup>
        <IcseHeading name="Boot Volume" type="subHeading" />
        <PowerVsAffinity
          data={this.props.data}
          stateData={this.state}
          componentProps={this.props}
          handleInputChange={this.handleInputChange}
          affinityChangesDisabled={this.props.storageChangesDisabledCallback}
          storage_pool_map={this.props.storage_pool_map}
          power_instances={this.props.power_instances}
          power_volumes={this.props.power_volumes}
          instanceFilter={this.instanceFilter}
          volumeFilter={this.volumeFilter}
        />
        <IcseHeading name="Interface IP Addresses" type="subHeading" />
        <div className="formInSubForm">
          {this.state.network.length === 0
            ? "No Network Interfaces Selected"
            : this.state.network.map((nw, index) => (
                <IcseFormGroup
                  key={nw.name + "-group"}
                  className="alignItemsCenter marginBottomSmall"
                >
                  <Network_3 className="powerIpMargin" />
                  <div className="powerIpMargin fieldWidth">
                    <p>{nw.name}</p>
                  </div>
                  <IcseTextInput
                    id={"power-instance" + this.state.name + "ip"}
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

PowerVsInstanceForm.defaultProps = {
  data: {
    name: "",
    workspace: "",
    image: "",
    network: [],
    zone: "",
    pi_health_status: "OK",
    pi_proc_type: "shared",
    pi_storage_type: "",
    storage_option: "Storage Type",
    pi_storage_pool_affinity: false,
  },
  sapProfiles: [
    "ush1-4x128",
    "ush1-4x256",
    "ush1-4x384",
    "ush1-4x512",
    "ush1-4x768",
    "bh1-16x1600",
    "bh1-20x2000",
    "bh1-22x2200",
    "bh1-25x2500",
    "bh1-30x3000",
    "bh1-35x3500",
    "bh1-40x4000",
    "bh1-50x5000",
    "bh1-60x6000",
    "bh1-70x7000",
    "bh1-80x8000",
    "bh1-100x10000",
    "bh1-120x12000",
    "bh1-140x14000",
    "ch1-60x3000",
    "ch1-70x3500",
    "ch1-80x4000",
    "ch1-100x5000",
    "ch1-120x6000",
    "ch1-140x7000",
    "mh1-8x1440",
    "mh1-10x1800",
    "mh1-12x2160",
    "mh1-16x2880",
    "mh1-20x3600",
    "mh1-22x3960",
    "mh1-25x4500",
    "mh1-30x5400",
    "mh1-35x6300",
    "mh1-40x7200",
    "mh1-50x9000",
    "mh1-60x10800",
    "mh1-70x12600",
    "mh1-80x14400",
    "umh-4x960",
    "umh-6x1440",
    "umh-8x1920",
    "umh-10x2400",
    "umh-12x2880",
    "umh-16x3840",
    "umh-20x4800",
    "umh-22x5280",
    "umh-25x6000",
    "umh-30x7200",
    "umh-35x8400",
    "umh-40x9600",
    "umh-50x12000",
    "umh-60x14400",
  ],
};

PowerVsInstanceForm.propTypes = {
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  power: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidIpCallback: PropTypes.func.isRequired,
  invalidPiProcessorsCallback: PropTypes.func.isRequired,
  invalidPiProcessorsTextCallback: PropTypes.func.isRequired,
  invalidPiMemoryCallback: PropTypes.func.isRequired,
  invalidPiMemoryTextCallback: PropTypes.func.isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // changes should be disabled when another instance or volume uses this
  // instance for affinity
  storageChangesDisabledCallback: PropTypes.func.isRequired,
  sapProfiles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PowerVsInstanceForm;
