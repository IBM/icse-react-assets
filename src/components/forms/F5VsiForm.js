import React, { Component } from "react";
import { Tile } from "@carbon/react";
import { buildNumberDropdownList } from "lazy-z";
import PropTypes from "prop-types";
import { SaveAddButton } from "../Buttons";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { FetchSelect, IcseSelect } from "../Dropdowns";
import { IcseNameInput } from "../Inputs";
import { SshKeyMultiSelect } from "../MultiSelects";
import { DynamicRender, IcseFormGroup, IcseHeading } from "../Utils";
import { f5VsiInputChange, f5Vsis } from "../../lib/forms/f5-vsi";

class F5VsiForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.handleVsiSave = this.handleVsiSave.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  handleInputChange(event) {
    this.setState(f5VsiInputChange(this.state, event));
  }

  handleMultiSelectChange(name, value) {
    this.setState(this.setNameToValue(name, value));
  }

  handleVsiSave(stateData) {
    this.props.saveVsiCallback(stateData);
  }

  render() {
    let vsis = f5Vsis(this.state, this.props);

    return (
      <>
        <IcseFormGroup>
          <IcseSelect
            formName="f5_vsi_form"
            name="zones"
            labelText="F5 Instance Zones"
            groups={buildNumberDropdownList(4)} // 0-3 Zones
            value={this.state.zones.toString()}
            handleInputChange={this.handleInputChange}
          />
          <IcseSelect
            formName="f5_vsi_form"
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
          />
          <SshKeyMultiSelect
            id="sshkey"
            sshKeys={this.props.sshKeys}
            initialSelectedItems={this.state.ssh_keys || []}
            onChange={(value) =>
              this.handleMultiSelectChange("ssh_keys", value)
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="f5_vsi_form"
            name="image"
            labelText="F5 Image"
            groups={this.props.f5Images}
            value={this.state.image}
            handleInputChange={this.handleInputChange}
          />
          <FetchSelect
            formName="f5_vsi_form"
            labelText="Profile"
            name="profile"
            apiEndpoint={this.props.apiEndpointInstanceProfiles}
            handleInputChange={this.handleInputChange}
            value={this.state.profile}
          />
        </IcseFormGroup>
        {/* Dynamically render tile per f5 vsi */}
        {vsis.length > 0 && (
          <div>
            <IcseHeading
              name="F5 Big IP Virtual Servers"
              type="subHeading"
              className="marginBottomSmall"
            />
            <div className="displayFlex evenSpacing">
              {vsis.map((instance, index) => {
                return (
                  <F5VsiTile
                    key={"f5-vsi-tile" + JSON.stringify(instance) + index}
                    data={instance}
                    hide={this.props.hideSaveCallback(instance)}
                    onSave={this.handleVsiSave}
                    totalZones={this.state.zones}
                    index={index}
                    resourceGroups={this.props.resourceGroups}
                    encryptionKeys={this.props.encryptionKeys}
                    propsMatchState={this.props.propsMatchState}
                  />
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

class F5VsiTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  render() {
    return (
      <Tile className="fieldWidth subForm">
        <IcseHeading
          name={this.state.name}
          type="subHeading"
          className="marginBottomSmall"
          buttons={
            <DynamicRender
              hide={this.props.hide}
              show={
                <SaveAddButton
                  name={this.props.name}
                  onClick={() => this.props.onSave(this.state)}
                  noDeleteButton
                  disabled={this.props.propsMatchState(
                    "f5_vsi",
                    this.state,
                    this.props,
                  )}
                />
              }
            />
          }
        />
        <IcseFormGroup className="marginBottomSmall">
          <IcseNameInput
            id={this.state.name}
            value={this.state.name}
            onChange={this.handleInputChange}
            useData
            readOnly
            invalidCallback={() => {}} // empty stuff for required prop
            invalidText=""
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup className="marginBottomSmall">
          <IcseSelect
            formName="f5_vsi_form"
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup className="marginBottomSmall">
          <IcseSelect
            formName="f5_vsi_form"
            name="encryption_key"
            labelText="Encryption Key"
            groups={this.props.encryptionKeys}
            value={this.state.encryption_key}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
      </Tile>
    );
  }
}

F5VsiTile.defaultProps = {
  data: {
    name: "",
    resource_group: "",
    encryption_key: "",
  },
  hide: false,
};

F5VsiTile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string.isRequired,
    encryption_key: PropTypes.string.isRequired,
  }),
  hide: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  totalZones: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  hideSaveCallback: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
};

F5VsiForm.defaultProps = {
  data: {
    zones: 0,
    resource_group: "",
    ssh_keys: [],
    image: "",
    profile: "",
  },
  vsis: [],
  edge_pattern: "vpn-and-waf",
  f5_on_management: true,
};

F5VsiForm.propTypes = {
  data: PropTypes.shape({
    zones: PropTypes.number.isRequired,
    resource_group: PropTypes.string,
    ssh_keys: PropTypes.array,
    image: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
  }).isRequired,
  vsis: PropTypes.array.isRequired,
  edge_pattern: PropTypes.string.isRequired,
  f5_on_management: PropTypes.bool.isRequired, // use management
  /* api endpoints */
  apiEndpointInstanceProfiles: PropTypes.string.isRequired,
  /* lists */
  resourceGroups: PropTypes.array.isRequired,
  sshKeys: PropTypes.array.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  f5Images: PropTypes.array.isRequired,
  /* callbacks */
  initVsiCallback: PropTypes.func.isRequired,
  saveVsiCallback: PropTypes.func.isRequired,
  hideSaveCallback: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
};

export default F5VsiForm;
