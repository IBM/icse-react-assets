import React from "react";
import {
  FormModal,
  IcseHeading,
  SaveAddButton,
  SubnetTierForm,
  EmptyResourceTile,
  IcseFormTemplate,
} from "../../";
import PropTypes from "prop-types";
import { titleCase, splat } from "lazy-z";

function none() {}

class SubnetsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onModalSubmit = this.onModalSubmit.bind(this);
  }

  onModalSubmit(data) {
    this.props.onSubnetSubmit.create(data, {
      vpc_name: this.props.data.name,
    });
    this.props.handleModalToggle();
  }

  render() {
    let tiers = [...this.props.subnetTiers[this.props.data.name]];
    return (
      <>
        <FormModal
          name="Add a Subnet Tier"
          show={this.props.showSubModal}
          onRequestSubmit={this.onModalSubmit}
          onRequestClose={this.props.handleModalToggle}
        >
          <SubnetTierForm
            dynamicSubnets={this.props.dynamicSubnets}
            networkAcls={splat(this.props.data.acls, "name")}
            enabledPublicGateways={this.props.data.publicGateways}
            vpc_name={this.props.data.name}
            subnetListCallback={this.props.subnetListCallback}
            craig={this.props.craig}
            disableSubnetSaveCallback={none}
            propsMatchState={none}
            shouldDisableSave={none}
            shouldDisableSubmit={(stateData, componentProps) => {
              return this.props.disableSave(
                "subnetTier",
                stateData,
                componentProps
              );
            }}
            invalidTextCallback={this.props.invalidSubnetTierText}
            invalidCallback={this.props.invalidSubnetTierName}
            invalidCidr={this.props.invalidCidr(this.props.craig)}
            invalidCidrText={this.props.invalidCidrText(this.props.craig)}
            invalidSubnetCallback={this.props.invalidName(
              "subnet",
              this.props.craig
            )}
            invalidSubnetTextCallback={this.props.invalidNameText(
              "subnet",
              this.props.craig
            )}
          />
        </FormModal>
        <IcseHeading
          name="Subnet Tiers"
          className={tiers.length === 0 ? "" : "marginBottomSmall"}
          type="subHeading"
          buttons={
            <SaveAddButton
              onClick={() => this.props.handleModalToggle()}
              type="add"
              noDeleteButton
            />
          }
        />
        {tiers.length === 0 && (
          <EmptyResourceTile
            name={
              "Subnet Tiers for " + titleCase(this.props.data.name) + " VPC"
            }
            noMarginTop
          />
        )}
        {this.props.subnetTiers[this.props.data.name].map((tier, index) => (
          <SubnetTierForm
            key={JSON.stringify(tier)}
            data={this.props.getSubnetTierStateData(tier, this.props.data)}
            index={index}
            onSave={this.props.onSubnetTierSave}
            onDelete={this.props.onSubnetTierDelete}
            networkAcls={splat(this.props.data.acls, "name")}
            enabledPublicGateways={this.props.data.publicGateways}
            vpc_name={this.props.data.name}
            subnetListCallback={this.props.getTierSubnets(tier, {
              ...this.props.data,
            })}
            craig={this.props.craig}
            dynamicSubnets={this.props.dynamicSubnets}
            disableSubnetSaveCallback={(stateData, componentProps) => {
              return (
                this.props.propsMatchState(
                  "subnet",
                  stateData,
                  componentProps
                ) ||
                this.props.disableSave(
                  "subnet",
                  stateData,
                  componentProps,
                  this.props.craig
                )
              );
            }}
            shouldDisableSave={(stateData, componentProps) => {
              return (
                this.props.propsMatchState(
                  "subnetTier",
                  stateData,
                  componentProps
                ) ||
                this.props.disableSave("subnetTier", stateData, componentProps)
              );
            }}
            propsMatchState={(stateData, componentProps) => {
              return this.props.propsMatchState(
                "subnetTier",
                stateData,
                componentProps
              );
            }}
            shouldDisableSubmit={none}
            invalidTextCallback={this.props.invalidSubnetTierText}
            invalidCallback={this.props.invalidSubnetTierName}
            invalidCidr={this.props.invalidCidr(this.props.craig)}
            invalidCidrText={this.props.invalidCidrText(this.props.craig)}
            invalidSubnetCallback={this.props.invalidName(
              "subnet",
              this.props.craig
            )}
            invalidSubnetTextCallback={this.props.invalidNameText(
              "subnet",
              this.props.craig
            )}
            onSubnetSave={this.props.onSubnetSave}
          />
        ))}
      </>
    );
  }
}

SubnetsPage.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    acls: PropTypes.array.isRequired,
  }),
  onSubnetSubmit: PropTypes.func.isRequired,
  subnetTiers: PropTypes.shape({}).isRequired,
  showSubModal: PropTypes.bool,
  handleModalToggle: PropTypes.func,
  dynamicSubnets: PropTypes.bool,
  subnetListCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidSubnetTierText: PropTypes.func.isRequired,
  invalidSubnetTierName: PropTypes.func.isRequired,
  invalidCidr: PropTypes.func.isRequired,
  invalidCidrText: PropTypes.func.isRequired,
  invalidName: PropTypes.func.isRequired,
  invalidNameText: PropTypes.func.isRequired,
  getSubnetTierStateData: PropTypes.func.isRequired,
  getTierSubnets: PropTypes.func.isRequired,
  onSubnetSave: PropTypes.func.isRequired,
  onSubnetTierSave: PropTypes.func.isRequired,
  onSubnetTierDelete: PropTypes.func.isRequired,
};

export const Subnets = (props) => {
  return (
    <IcseFormTemplate
      name="VPC Subnets"
      innerForm={SubnetsPage}
      arrayData={props.vpcs}
      docs={props.docs}
      onSubmit={none}
      onDelete={none}
      onSave={none}
      disableSave={none}
      propsMatchState={none}
      forceOpen={props.forceOpen}
      hideFormTitleButton
      innerFormProps={{
        craig: props.craig,
        onSubnetSubmit: props.onSubnetSubmit,
        subnetTiers: props.subnetTiers,
        dynamicSubnets: props.dynamicSubnets,
        subnetListCallback: props.subnetListCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        invalidSubnetTierText: props.invalidSubnetTierText,
        invalidSubnetTierName: props.invalidSubnetTierName,
        invalidCidr: props.invalidCidr,
        invalidCidrText: props.invalidCidrText,
        invalidName: props.invalidName,
        invalidNameText: props.invalidNameText,
        getSubnetTierStateData: props.getSubnetTierStateData,
        getTierSubnets: props.getTierSubnets,
        onSubnetSave: props.onSubnetSave,
        onSubnetTierSave: props.onSubnetTierSave,
        onSubnetTierDelete: props.onSubnetTierDelete,
      }}
      toggleFormProps={{
        craig: props.craig,
        noDeleteButton: true,
        noSaveButton: true,
        hideName: true,
        submissionFieldName: "subnets",
        disableSave: none,
        propsMatchState: none,
        nullRef: true,
      }}
    />
  );
};

Subnets.propTypes = {
  vpcs: PropTypes.array.isRequired,
  docs: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  onSubnetSubmit: PropTypes.func.isRequired,
  subnetTiers: PropTypes.shape({}).isRequired,
  dynamicSubnets: PropTypes.bool,
  subnetListCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidSubnetTierText: PropTypes.func.isRequired,
  invalidSubnetTierName: PropTypes.func.isRequired,
  invalidCidr: PropTypes.func.isRequired,
  invalidCidrText: PropTypes.func.isRequired,
  invalidName: PropTypes.func.isRequired,
  invalidNameText: PropTypes.func.isRequired,
  getSubnetTierStateData: PropTypes.func.isRequired,
  getTierSubnets: PropTypes.func.isRequired,
  onSubnetSave: PropTypes.func.isRequired,
  onSubnetTierSave: PropTypes.func.isRequired,
  onSubnetTierDelete: PropTypes.func.isRequired,
};
