import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import SecurityGroupForm from "../forms/SecurityGroupForm";
import { NoVpcTile } from "./NoVpcTile";

export const SecurityGroups = (props) => {
  return (
    <IcseFormTemplate
      name="Security Groups"
      addText="Create a Security Group"
      docs={props.docs}
      innerForm={SecurityGroupForm}
      arrayData={props.security_groups}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      isSecurityGroup
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        invalidRuleText: props.invalidRuleText,
        invalidRuleTextCallback: props.invalidRuleTextCallback,
        onSubmitCallback: props.onSubmitCallback,
        onRuleSave: props.onRuleSave,
        onRuleDelete: props.onRuleDelete,
        disableModalSubmitCallback: () => {}, // investigate
        disableSaveCallback: props.disableSaveCallback,
        vpcList: props.vpcList,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "security_groups",
        hide: true,
        hideName: true,
      }}
      overrideTile={
        props.vpcList.length === 0
          ? NoVpcTile("Security Groups")
          : null
      }
    />
  );
};

SecurityGroups.propTypes = {
  security_groups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.array.isRequired,
  overrideTile: PropTypes.node,
};
