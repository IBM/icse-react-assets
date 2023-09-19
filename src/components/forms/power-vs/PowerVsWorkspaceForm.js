import React from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseFormGroup } from "../../Utils";
import { IcseNameInput } from "../../Inputs";
import { IcseSelect } from "../../Dropdowns";
import {
  IcseMultiSelect,
  PowerVsCloudConnectionPage,
  PowerVsNetworkPage,
} from "../..";
import { SshKeys, PowerVsNetworkAttachment } from "../../crud-form-pages";
import {
  contains,
  deepEqual,
  isEmpty,
  isNullOrEmptyString,
  splat,
} from "lazy-z";
import "./power-attachment.css";

class PowerVsWorkspaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.forceUpdateOnPropsChange = this.forceUpdateOnPropsChange.bind(this);
  }

  handleInputChange(event) {
    if (event.target.name === "zone") {
      this.setState({
        zone: event.target.value,
        imageNames: [],
      });
    } else this.setState(this.eventTargetToNameAndValue(event));
  }

  handleMultiSelectChange(items) {
    this.setState({ imageNames: items });
  }

  forceUpdateOnPropsChange(prevProps) {
    // force component to update when images change
    if (!deepEqual(prevProps.data.imageNames, this.props.data.imageNames)) {
      this.setState({ ...this.props.data });
    }
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          {/* name */}
          <IcseNameInput
            id={this.state.name + "-name"}
            labelText="Workspace Name"
            componentName={this.state.name + "-power-vs-workspace"}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.invalidCallback(this.state, this.props)
            }
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
            helperTextCallback={() =>
              this.props.helperTextCallback(this.state, this.props)
            }
            className="fieldWidth"
          />

          {/* resource group */}
          <IcseSelect
            labelText="Resource Group"
            name="resource_group"
            formName={this.state.name + "-power-vs-workspace-resource-group"}
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Resource Group."
            className="fieldWidth"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* availability zone group */}
          <IcseSelect
            labelText="Availability Zone"
            name="zone"
            formName={this.state.name + "-power-vs-workspace-zone"}
            groups={this.props.zones}
            value={this.state.zone}
            handleInputChange={this.handleInputChange}
            invalidText="Select a Zone."
            className="fieldWidth"
          />
          {/* import images */}
          <IcseMultiSelect
            key={this.state.zone}
            titleText="Import Images"
            className="fieldWidth"
            items={
              isNullOrEmptyString(this.state.zone) ? [] : this.getImageList()
            }
            id={this.props.data.name + "-images"}
            initialSelectedItems={this.state.imageNames}
            onChange={(event) =>
              this.handleMultiSelectChange(event.selectedItems)
            }
            invalid={isEmpty(this.state.imageNames || [])}
            invalidText="Select at least one Image"
          />
        </IcseFormGroup>
        {this.props.isModal ? (
          ""
        ) : (
          <SshKeys
            isModal={this.props.isModal}
            ssh_keys={this.props.data.ssh_keys}
            disableSave={this.props.disableSave}
            onDelete={this.props.onSshKeyDelete}
            onSave={this.props.onSshKeySave}
            onSubmit={this.props.onSshKeySubmit}
            propsMatchState={this.props.propsMatchState}
            forceOpen={this.props.forceOpen}
            resourceGroups={this.props.resourceGroups}
            invalidCallback={this.props.invalidSshKeyCallback}
            invalidTextCallback={this.props.invalidSshKeyCallbackText}
            craig={this.props.craig}
            deleteDisabled={this.props.sshKeyDeleteDisabled}
            invalidKeyCallback={this.props.invalidKeyCallback}
            powerVs
            arrayParentName={this.props.data.name}
          />
        )}
        <PowerVsNetworkPage
          isModal={this.props.isModal}
          networks={this.props.data.network}
          disableSave={this.props.disableSave}
          propsMatchState={this.props.propsMatchState}
          onNetworkDelete={this.props.onNetworkDelete}
          onNetworkSave={this.props.onNetworkSave}
          onNetworkSubmit={this.props.onNetworkSubmit}
          craig={this.props.craig}
          invalidNetworkNameCallback={this.props.invalidNetworkNameCallback}
          invalidNetworkNameCallbackText={
            this.props.invalidNetworkNameCallbackText
          }
          invalidCidrCallback={this.props.invalidCidrCallback}
          invalidCidrCallbackText={this.props.invalidCidrCallbackText}
          invalidDnsCallback={this.props.invalidDnsCallback}
          invalidDnsCallbackText={this.props.invalidDnsCallbackText}
          workspace={this.props.data.name}
        />
        {!contains(this.props.edgeRouterEnabledZones, this.state.zone) && (
          <PowerVsCloudConnectionPage
            cloud_connections={this.props.data.cloud_connections}
            isModal={this.props.isModal}
            disableSave={this.props.disableSave}
            propsMatchState={this.props.propsMatchState}
            onConnectionDelete={this.props.onConnectionDelete}
            onConnectionSave={this.props.onConnectionSave}
            onConnectionSubmit={this.props.onConnectionSubmit}
            invalidConnectionNameCallback={
              this.props.invalidConnectionNameCallback
            }
            invalidConnectionNameTextCallback={
              this.props.invalidConnectionNameTextCallback
            }
            transitGatewayList={this.props.transitGatewayList}
            workspace={this.props.data.name}
            craig={this.props.craig}
          />
        )}
        {this.props.isModal ||
        this.props.data.network.length === 0 ||
        this.props.data.cloud_connections.length === 0 ||
        contains(this.props.edgeRouterEnabledZones, this.state.zone) ? (
          ""
        ) : (
          <PowerVsNetworkAttachment
            attachments={this.props.data.attachments}
            disableSave={this.props.disableSave}
            propsMatchState={this.props.propsMatchState}
            onAttachmentSave={this.props.onAttachmentSave}
            cloud_connections={splat(this.props.data.cloud_connections, "name")}
            workspace={this.props.data.name}
            craig={this.props.craig}
          />
        )}
      </>
    );
  }
}

PowerVsWorkspaceForm.propTypes = {
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  zones: PropTypes.arrayOf(PropTypes.string).isRequired,
  isModal: PropTypes.bool.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onNetworkDelete: PropTypes.func.isRequired,
  onNetworkSave: PropTypes.func.isRequired,
  onNetworkSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  invalidNetworkNameCallback: PropTypes.func.isRequired,
  invalidNetworkNameCallbackText: PropTypes.func.isRequired,
  invalidCidrCallback: PropTypes.func.isRequired,
  invalidCidrCallbackText: PropTypes.func.isRequired,
  invalidDnsCallback: PropTypes.func.isRequired,
  invalidDnsCallbackText: PropTypes.func.isRequired,
  onConnectionDelete: PropTypes.func.isRequired,
  onConnectionSave: PropTypes.func.isRequired,
  onConnectionSubmit: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  invalidConnectionNameCallback: PropTypes.func.isRequired,
  invalidConnectionNameTextCallback: PropTypes.func.isRequired,
  transitGatewayList: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    resource_group: PropTypes.string,
    zone: PropTypes.string,
    imageNames: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSshKeyDelete: PropTypes.func.isRequired,
  onSshKeySave: PropTypes.func.isRequired,
  onSshKeySubmit: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  invalidSshKeyCallback: PropTypes.func.isRequired,
  invalidSshKeyCallbackText: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  sshKeyDeleteDisabled: PropTypes.func.isRequired,
  imageMap: PropTypes.shape({}).isRequired,
  edgeRouterEnabledZones: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PowerVsWorkspaceForm.defaultProps = {
  edgeRouterEnabledZones: ["dal10"],
  isModal: false,
  data: {
    name: "",
    resource_group: "",
    zone: "",
    ssh_keys: [],
    network: [],
    cloud_connections: [],
    images: [],
    attachments: [],
  },
  imageMap: {},
  sshKeyDeleteDisabled: () => {
    return false;
  },
};

export default PowerVsWorkspaceForm;
