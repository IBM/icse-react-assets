import React from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput, IcseTextInput, IcseToggle } from "../Inputs";
import { IcseSelect } from "../Dropdowns";
import { IcseMultiSelect } from "../MultiSelects";
import { isEmpty } from "lazy-z";

class ClassicGatewayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDiskKeyNameChange = this.handleDiskKeyNameChange.bind(this);
  }

  handleDiskKeyNameChange(selectedItems) {
    this.setState({
      disk_key_names: selectedItems,
    });
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    if (event.target.name === "datacenter") {
      this.setState({
        datacenter: event.target.value,
        private_vlan: "",
        public_vlan: "",
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * Handler for toggle
   */
  handleToggle(toggle) {
    if (
      toggle === "private_network_only" &&
      this.state.private_network_only !== true
    ) {
      this.setState({
        private_network_only: true,
        public_vlan: "",
      });
    }
    this.setState(this.toggleStateBoolean(toggle, this.state));
  }

  render() {
    let composedId = this.props.data.name + "-classic-gateway-form-";
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props + "-name"}
            componentName={this.state.name}
            value={this.state.name}
            onChange={this.handleInputChange}
            helperTextCallback={() =>
              this.props.composedNameCallback(this.state, this.props)
            }
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            componentName="Domain"
            field="domain"
            labelText="domain"
            className="fieldWidthSmaller"
            value={this.props.data.name + "-domain"}
            readOnly
            id={this.props.data.name + "domain"}
            invalid={this.props.invalidDomainCallback(this.state, this.props)}
            invalidText={this.props.invalidDomainTextCallback(
              this.state,
              this.props,
            )}
          />
          <IcseToggle
            tooltip={{
              content: "Create two network gateway members. Defaults to one",
            }}
            id={composedId + "hadr"}
            labelText="High Availability"
            defaultToggled={this.state.hadr}
            toggleFieldName="hadr"
            onToggle={() => this.handleToggle("hadr")}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            id={composedId + "-datacenter"}
            formName={composedId + "-datacenter"}
            name="datacenter"
            groups={this.props.datacenterList}
            value={this.state.datacenter}
            labelText="Data Center"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-ssh-key"}
            formName={composedId + "-ssh-key"}
            name="ssh_key"
            groups={this.props.classicSshKeyList}
            value={this.state.ssh_key}
            labelText="SSH Key"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseMultiSelect
            key={this.state.datacenter}
            titleText="Disk Key Names"
            items={this.props.diskKeyNameList}
            id={this.props.data.name + "-disk-key-name"}
            initialSelectedItems={this.state.disk_key_names}
            onChange={(event) => {
              this.handleDiskKeyNameChange(event.selectedItems);
            }}
            invalid={isEmpty(this.state.disk_key_names || [])}
            invalidText="Select at least one disk key name"
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "private-network-only"}
            labelText="Private Network Only"
            defaultToggled={this.state.private_network_only}
            toggleFieldName="private_network_only"
            onToggle={() => this.handleToggle("private_network_only")}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-private-vlan"}
            formName={composedId + "-private-vlan"}
            name="private_vlan"
            groups={this.getPrivateVlanList()}
            value={this.state.private_vlan}
            labelText="Private VLAN"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          {this.state.private_network_only !== true && (
            <IcseSelect
              id={composedId + "-public-vlan"}
              formName={composedId + "-public-vlan"}
              name="public_vlan"
              groups={this.getPublicVlanList()}
              value={this.state.public_vlan}
              labelText="Public VLAN"
              handleInputChange={this.handleInputChange}
              className="fieldWidthSmaller"
            />
          )}
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            id={composedId + "-package-name"}
            formName={composedId + "-package-name"}
            name="package_key_name"
            groups={this.props.packageNameList}
            value={this.state.package_key_name}
            labelText="Package Name"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-os-key-name"}
            formName={composedId + "-os-key-name"}
            name="os_key_name"
            groups={this.props.osKeyNameList}
            value={this.state.os_key_name}
            labelText="OS Key Name"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-process-key-name"}
            formName={composedId + "-process-key-name"}
            name="process_key_name"
            groups={this.props.processKeyNameList}
            value={this.state.process_key_name}
            labelText="Process Key Name"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            id={composedId + "-network-speed"}
            formName={composedId + "-network-speed"}
            name="network_speed"
            groups={this.props.networkSpeedList}
            value={this.state.network_speed}
            labelText="Network Speed"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            id={composedId + "-public-bandwidth"}
            formName={composedId + "-public-bandwidth"}
            name="public_bandwidth"
            groups={this.props.publicBandWidthList}
            value={this.state.public_bandwidth}
            labelText="Public Bandwidth"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id="memory"
            componentName="classic_gateway"
            field="memory"
            value={this.state.memory}
            isModal={this.props.isModal}
            onChange={this.handleInputChange}
            className="fieldWidthSmaller"
            invalid={this.props.invalidMemoryCallback(this.state, this.props)}
            invalidText={this.props.invalidMemoryTextCallback(
              this.state,
              this.props,
            )}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseToggle
            id={composedId + "tcp-monitoring"}
            labelText="Enable TCP Monitoring"
            defaultToggled={this.state.tcp_monitoring}
            toggleFieldName="tcp_monitoring"
            onToggle={() => this.handleToggle("tcp_monitoring")}
            className="fieldWidthSmaller"
          />
          <IcseToggle
            id={composedId + "redundant-network"}
            labelText="Enable Redundant Network"
            defaultToggled={this.state.redundant_network}
            toggleFieldName="redundant_network"
            onToggle={() => this.handleToggle("redundant_network")}
            className="fieldWidthSmaller"
          />
          <IcseToggle
            id={composedId + "ipv6-enabled"}
            labelText="IPV6 Enabled"
            defaultToggled={this.state.ipv6_enabled}
            toggleFieldName="ipv6_enabled"
            onToggle={() => this.handleToggle("ipv6_enabled")}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </>
    );
  }
}

ClassicGatewayForm.defaultProps = {
  packageNameList: ["VIRTUAL_ROUTER_APPLIANCE_1_GPBS"],
  osKeyNameList: ["OS_JUNIPER_VSRX_19_4_UP_TO_1GBPS_STANDARD_SRIOV"],
  processKeyNameList: ["INTEL_XEON_4210_2_20"],
  diskKeyNameList: ["HARD_DRIVE_2_00_TB_SATA_2"],
  networkSpeedList: ["1000", "10000"],
  publicBandWidthList: ["500", "1000", "5000", "10000", "20000"],
};

ClassicGatewayForm.propTypes = {
  networkSpeedList: PropTypes.arrayOf(PropTypes.string).isRequired,
  publicBandWidthList: PropTypes.arrayOf(PropTypes.string).isRequired,
  composedNameCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  datacenterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  packageNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  osKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  processKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  classicSshKeyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  diskKeyNameList: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({}).isRequired,
  classic_vlans: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  invalidMemoryCallback: PropTypes.func.isRequired,
  invalidMemoryTextCallback: PropTypes.func.isRequired,
  invalidDomainCallback: PropTypes.func.isRequired,
  invalidDomainTextCallback: PropTypes.func.isRequired,
};

export default ClassicGatewayForm;
