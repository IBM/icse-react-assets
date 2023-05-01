import React from "react";
import { DeleteModal, UnsavedChangesModal } from "../Modals";
import {
  DynamicRender,
  IcseFormGroup,
  IcseSubForm,
  StatelessToggleForm,
} from "../Utils";
import { buildNumberDropdownList } from "lazy-z";
import PropTypes from "prop-types";
import { DeleteButton, SaveAddButton } from "../Buttons";
import { IcseNameInput, IcseToggle } from "../Inputs";
import { IcseNumberSelect, IcseSelect } from "../Dropdowns";
import SubnetTileForm from "./SubnetTileForm";
import { subnetTierName } from "../../lib";
import { IcseMultiSelect } from "../MultiSelects";

class SubnetTierForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    if (!this.state.select_zones) {
      let zones = buildNumberDropdownList(this.state.zones, 1);
      this.state.select_zones = [];
      zones.forEach((zone) => this.state.select_zones.push(Number(zone)));
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleShowToggle = this.handleShowToggle.bind(this);
    this.shouldDisableSubmit = this.shouldDisableSubmit.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.onSubnetSave = this.onSubnetSave.bind(this);
    this.handleSelectZones = this.handleSelectZones.bind(this);
    this.parseZoneStrings = this.parseZoneStrings.bind(this);
  }

/**
 * get list of strings from zone
 * @returns {Array<string>} stringified zones
 */
  parseZoneStrings() {
    let stringZones = [];
    this.state.select_zones.forEach(zone => {
      stringZones.push(String(zone));
    })
    return stringZones;
  }

  /**
   * Handle select zones
   * @param {event} event
   */
  handleSelectZones(event) {
    let items = [];
    event.selectedItems.forEach((item) => {
      items.push(Number(item));
    });
    this.setState({ select_zones: items });
  }

  /**
   * Handle input change
   * @param {event} event
   */
  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * handle toggle
   */
  handleToggle(name) {
    this.setState({ [name]: !this.state[name] });
  }
  /**
   * toggle delete modal
   */
  toggleDeleteModal() {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }

  /**
   * handle hide/show form data
   */
  handleShowToggle() {
    if (
      this.props.propsMatchState(this.state, this.props) === false &&
      this.state.hide === false &&
      !this.state.showUnsavedChangesModal
    ) {
      this.setState({ showUnsavedChangesModal: true });
    } else {
      this.setState({ hide: !this.state.hide, showUnsavedChangesModal: false });
    }
  }

  onSave() {
    let noToggleState = { ...this.state };
    delete noToggleState.hide;
    delete noToggleState.showUnsavedChangesModal;
    this.props.onSave(noToggleState, this.props);
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
      <IcseSubForm formInSubForm id={composedId} className="marginBottomSmall">
        <DeleteModal
          name={tierName}
          modalOpen={this.state.showDeleteModal}
          onModalClose={this.toggleDeleteModal}
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
                    onClick={this.toggleDeleteModal}
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
                  initialSelectedItems={this.parseZoneStrings()}
                  onChange={this.handleSelectZones}
                />
              ) : (
                <IcseNumberSelect
                  max={3}
                  value={this.state.zones}
                  labelText="Subnet Tier Zones"
                  name="zones"
                  handleInputChange={this.handleChange}
                  className="fieldWidthSmaller"
                  invalid={this.state.zones === 0}
                  invalidText="At least one zone must be selected."
                  formName={formName}
                />
              )}
              <IcseSelect
                tooltip={{
                  content:
                    "Changing this field will overwrite existing Network ACL changes to subnets in this data.",
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
              />
            </IcseFormGroup>
            <IcseFormGroup className="marginBottomSmall">
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
                onToggle={() => this.handleToggle("addPublicGateway")}
                isModal={this.props.isModal}
                disabled={this.props.enabledPublicGateways.length === 0}
                className="fieldWidthSmaller"
              />
              <IcseToggle
                tooltip={{
                  content:
                    "Enable advanced subnet configuration such as custom CIDR blocks",
                }}
                id={composedId + "-advanced"}
                labelText="Advanced Configuration"
                defaultToggled={this.state.advanced}
                onToggle={() => this.handleToggle("advanced")}
                className="fieldWidthSmaller"
              />
            </IcseFormGroup>
            <SubnetTileForm
              tier={this.props.data.name}
              vpc_name={this.props.vpc_name}
              onSave={this.onSubnetSave}
              isModal={this.props.isModal}
              data={this.props.subnetListCallback(this.state, this.props)}
              key={JSON.stringify(this.state.select_zones) + this.state.zones}
              enabledPublicGateways={this.props.enabledPublicGateways}
              networkAcls={this.props.networkAcls}
              disableSaveCallback={this.props.disableSubnetSaveCallback}
              advanced={this.state.advanced}
              invalidCidr={this.props.invalidCidr}
              invalidCidrText={this.props.invalidCidrText}
              invalidCallback={this.props.invalidSubnetCallback}
              invalidTextCallback={this.props.invalidSubnetTextCallback}
              select_zones={this.state.select_zones}
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
};

SubnetTierForm.propTypes = {
  data: PropTypes.shape({
    hide: PropTypes.bool,
    name: PropTypes.string.isRequired,
    zones: PropTypes.number.isRequired,
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
};

export default SubnetTierForm;
