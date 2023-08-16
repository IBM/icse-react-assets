import React from "react";
import { DeleteModal, UnsavedChangesModal, IcseModal } from "../Modals";
import {
  DynamicRender,
  IcseFormGroup,
  IcseSubForm,
  StatelessToggleForm,
} from "../Utils";
import PropTypes from "prop-types";
import { DeleteButton, SaveAddButton } from "../Buttons";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseNumberSelect, IcseSelect } from "../Dropdowns";
import SubnetTileForm from "./SubnetTileForm";
import { subnetTierName } from "../../lib";
import { IcseMultiSelect } from "../MultiSelects";
import {
  handleSelectZones,
  handleSubnetTierToggle,
  parseZoneStrings,
} from "../../lib/forms";
import { buildFormDefaultInputMethods } from "../component-utils";
import { handleSubnetShowToggle } from "../../lib/forms/subnets";

class SubnetTierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    if (!this.props.data.select_zones) {
      this.state.select_zones = [];
    }
    this.state.advancedSave = false;
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.handleSubnetTierToggle = this.handleSubnetTierToggle.bind(this);
    this.shouldDisableSubmit = this.shouldDisableSubmit.bind(this);
    this.handleSelectZones = this.handleSelectZones.bind(this);
    this.onSubnetSave = this.onSubnetSave.bind(this);
    buildFormDefaultInputMethods(this);
  }
  /**
   * handle select zones
   * @param {Object} event
   */
  handleSelectZones(event) {
    this.setState(handleSelectZones(event, this.state));
  }

  /**
   * toggle
   * @param {string} name
   */
  handleSubnetTierToggle(name) {
    this.setState(handleSubnetTierToggle(name, this.state));
  }

  /**
   * show for modals toggle
   */
  handleShowToggle() {
    this.setState(handleSubnetShowToggle(this.state, this.props));
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  onSave() {
    if (
      this.state.advanced &&
      !this.state.advancedSave &&
      !this.props.data.advanced
    ) {
      this.setState({ advancedSave: true });
    } else {
      let noToggleState = { ...this.state };
      delete noToggleState.hide;
      delete noToggleState.showUnsavedChangesModal;
      delete noToggleState.advancedSave;
      this.setState(
        {
          advancedSave: false,
        },
        () => {
          this.props.onSave(noToggleState, this.props);
        }
      );
    }
  }

  onSubnetSave(stateData, componentProps) {
    this.props.onSubnetSave(stateData, componentProps);
  }

  onDelete() {
    this.props.onDelete(this.state, this.props);
  }

  shouldDisableSubmit() {
    if (this.props.isModal) {
      if (this.props.shouldDisableSubmit(this.state, this.props) === false)
        this.props.enableModal();
      else this.props.disableModal();
    }
  }

  componentDidUpdate() {
    this.shouldDisableSubmit();
  }

  componentDidMount() {
    this.shouldDisableSubmit();
  }

  render() {
    let composedId = `${this.props.vpc_name}-tier-${
      this.props.data.name === "" ? "new-subnet-tier" : this.props.data.name
    }`;
    let formName = this.props.data.name + "-subnet-tier";
    let tierName = subnetTierName(this.props.data.name);
    return (
      <IcseSubForm
        formInSubForm={this.props.isModal === false}
        id={composedId}
        className="marginBottomSmall"
      >
        <DeleteModal
          name={tierName}
          modalOpen={this.state.showDeleteModal}
          onModalClose={() => this.handleSubnetTierToggle("showDeleteModal")}
          onModalSubmit={this.onDelete}
          useDefaultUnsavedMessage={false}
        />
        <UnsavedChangesModal
          name={this.props.data.name + " Subnet Tier"}
          modalOpen={this.state.showUnsavedChangesModal}
          onModalSubmit={this.handleShowToggle}
          onModalClose={() => {
            this.setState({ showUnsavedChangesModal: false });
          }}
        />
        <IcseModal
          id={this.props.data.name + "-avanced-save"}
          name="Enable Advanced Configuration"
          heading="Enable Advanced Configuration"
          open={this.state.advancedSave}
          onRequestClose={() => {
            this.setState({ advancedSave: false });
          }}
          onRequestSubmit={this.onSave}
          primaryButtonText="Save as Advanced"
          danger
        >
          <span>
            You are about to set {this.props.data.name} subnet tier to use
            advanced configuration. This will allow the use of custom CIDR
            blocks and individual subnet names.{" "}
            <strong>This cannot be undone.</strong>
          </span>
        </IcseModal>
        <StatelessToggleForm
          hideTitle={this.props.isModal === true}
          hide={this.state.hide}
          name={tierName}
          onIconClick={this.handleShowToggle}
          toggleFormTitle
          buttons={
            <>
              <SaveAddButton
                name={this.props.data.name}
                onClick={this.onSave}
                noDeleteButton={this.props.noDeleteButton}
                disabled={this.props.shouldDisableSave(this.state, this.props)}
              />
              <DynamicRender
                hide={this.props.noDeleteButton}
                show={
                  <DeleteButton
                    name={tierName}
                    onClick={() =>
                      this.handleSubnetTierToggle("showDeleteModal")
                    }
                  />
                }
              />
            </>
          }
        >
          <>
            <IcseFormGroup>
              <IcseNameInput
                id={
                  this.props.isModal
                    ? "new-tier-name"
                    : this.props.data.name + "-tier-name"
                }
                value={this.state.name}
                componentName={formName}
                onChange={this.handleChange}
                className="fieldWidthSmaller"
                readOnly={this.props.readOnly}
                invalid={this.props.invalidCallback(this.state, this.props)}
                invalidText={this.props.invalidTextCallback(
                  this.state,
                  this.props
                )}
                hideHelperText
              />
              {this.state.advanced ? (
                <IcseMultiSelect
                  id={this.props.data.name + "-subnet-zones"}
                  className="fieldWidthSmaller"
                  titleText="Zones"
                  invalid={this.state.select_zones.length === 0}
                  invalidText="Select at least one zone"
                  items={["1", "2", "3"]}
                  initialSelectedItems={parseZoneStrings(
                    this.state,
                    this.props
                  )}
                  onChange={this.handleSelectZones}
                />
              ) : (
                <IcseNumberSelect
                  max={3}
                  value={this.state.zones ? this.state.zones : 1}
                  labelText="Subnet Tier Zones"
                  name="zones"
                  handleInputChange={this.handleChange}
                  className="fieldWidthSmaller"
                  invalid={this.state.zones === 0}
                  invalidText="At least one zone must be selected."
                  formName={formName}
                />
              )}
              <IcseToggle
                tooltip={{
                  content: this.props.dynamicSubnets
                    ? "Advanced configuration cannot be set when using dynamically scaled subnets"
                    : "Enable advanced subnet configuration such as custom CIDR blocks",
                  alignModal: "bottom",
                  align: "left"
                }}
                id={composedId + "-advanced"}
                labelText="Advanced Configuration"
                defaultToggled={this.state.advanced}
                onToggle={() => this.handleSubnetTierToggle("advanced")}
                className="fieldWidthSmaller"
                disabled={this.props.dynamicSubnets || this.props.data.advanced}
              />
            </IcseFormGroup>

            <IcseFormGroup className="marginBottomSmall">
              <IcseSelect
                tooltip={{
                  content:
                    "Changing this field will overwrite existing Network ACL changes to subnets in this data.",
                    alignModal: "right",
                    align: "right"
                }}
                className="fieldWidthSmaller"
                field="networkAcl"
                name="networkAcl"
                value={this.state.networkAcl || ""}
                vpcName={this.props.vpc_name}
                labelText="Network ACL"
                groups={this.props.networkAcls}
                handleInputChange={this.handleChange}
                isModal={this.props.isModal}
                formName={formName}
                disabled={this.state.advanced}
              />
              <IcseToggle
                tooltip={{
                  content:
                    this.props.enabledPublicGateways.length === 0
                      ? "This VPC has no public gateways enabled. To add public gateways, return to the VPC page."
                      : "Changing this field will overwrite existing Public Gateway changes to subnets in this data.",
                }}
                id={composedId + "-public-gateway"}
                labelText="Use Public Gateways"
                defaultToggled={this.state.addPublicGateway}
                onToggle={() => this.handleSubnetTierToggle("addPublicGateway")}
                isModal={this.props.isModal}
                disabled={
                  this.state.advanced ||
                  this.props.data.advanced ||
                  this.props.enabledPublicGateways.length === 0
                }
                className="fieldWidthSmaller"
              />
            </IcseFormGroup>
            <SubnetTileForm
              tier={this.props.data.name}
              vpc_name={this.props.vpc_name}
              onSave={this.onSubnetSave}
              isModal={this.props.isModal}
              data={this.props.subnetListCallback(this.state, this.props)}
              key={
                JSON.stringify(this.state.select_zones) +
                this.state.zones +
                JSON.stringify(this.state)
              }
              enabledPublicGateways={this.props.enabledPublicGateways}
              networkAcls={this.props.networkAcls}
              disableSaveCallback={this.props.disableSubnetSaveCallback}
              invalidCidr={this.props.invalidCidr}
              invalidCidrText={this.props.invalidCidrText}
              invalidCallback={this.props.invalidSubnetCallback}
              invalidTextCallback={this.props.invalidSubnetTextCallback}
              select_zones={this.state.select_zones}
              advanced={this.state.advanced}
            />
          </>
        </StatelessToggleForm>
      </IcseSubForm>
    );
  }
}

SubnetTierForm.defaultProps = {
  isModal: false,
  hide: true,
  readOnly: false,
  noDeleteButton: false,
  data: {
    hide: false,
    name: "",
    zones: 3,
    networkAcl: null,
    addPublicGateway: false,
  },
  dynamicSubnets: false,
};

SubnetTierForm.propTypes = {
  data: PropTypes.shape({
    hide: PropTypes.bool,
    name: PropTypes.string.isRequired,
    zones: PropTypes.any,
    networkAcl: PropTypes.string,
    addPublicGateway: PropTypes.bool,
  }),
  // save and delete functions can be null when form rendered as modal
  onSave: PropTypes.func,
  onSubnetSave: PropTypes.func,
  onDelete: PropTypes.func,
  disableSubnetSaveCallback: PropTypes.func, // can be null when modal
  shouldDisableSave: PropTypes.func,
  shouldDisableSubmit: PropTypes.func, // can be null when not modal
  noDeleteButton: PropTypes.bool, // can be null when modal
  isModal: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool.isRequired,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  enabledPublicGateways: PropTypes.arrayOf(PropTypes.number).isRequired,
  hide: PropTypes.bool.isRequired,
  vpc_name: PropTypes.string,
  subnetListCallback: PropTypes.func.isRequired,
  enableModal: PropTypes.func,
  disableModal: PropTypes.func,
  propsMatchState: PropTypes.func,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidSubnetCallback: PropTypes.func,
  invalidSubnetTextCallback: PropTypes.func,
  dynamicSubnets: PropTypes.bool.isRequired,
};

export default SubnetTierForm;
