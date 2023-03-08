import React from "react";
import PropTypes from "prop-types";
import { FilterableMultiSelect, MultiSelect } from "@carbon/react";
import { addClassName } from "../lib";
import "./styles/MultiSelects.css";
import "./styles/Modals.css";
import { isNullOrEmptyString, prettyJSON } from "lazy-z";

/**
 * Icse multiselect template
 */
export const IcseMultiSelect = (props) => {
  return (
    <FilterableMultiSelect
      id={props.id}
      className={addClassName("fieldWidth leftTextAlign cds--select", props)}
      titleText={props.titleText}
      itemToString={(item) => (item ? item : "")}
      invalid={props.invalid}
      invalidText={props.invalidText}
      initialSelectedItems={props.initialSelectedItems}
      onChange={props.onChange}
      items={props.items}
      useTitleInItem={props.useTitleInItem}
      label={props.label}
      disabled={props.disabled}
    />
  );
};

IcseMultiSelect.defaultProps = {
  disabled: false,
  useTitleInItem: false,
  invalid: false,
  invalidText: "Invalid value",
};

IcseMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  useTitleInItem: PropTypes.bool.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};

/**
 * ssh key multiselect
 */
export const SshKeyMultiSelect = (props) => {
  return (
    <IcseMultiSelect
      id={props.id + "-ssh-key-multiselect"}
      useTitleInItem
      label="SSH Keys"
      titleText="SSH Keys"
      invalidText="At least one SSH Key is required"
      invalid={props.initialSelectedItems.length === 0}
      items={props.sshKeys}
      initialSelectedItems={props.initialSelectedItems || []}
      onChange={(event) => {
        props.onChange(event.selectedItems);
      }}
      className="fieldWidthSmaller cds--form-item"
    />
  );
};

SshKeyMultiSelect.defaultProps = {
  initialSelectedItems: [],
};

SshKeyMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  sshKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialSelectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

/**
 * sg multiselect
 */
export const SecurityGroupMultiSelect = (props) => {
  if (props.vpc_name && !props.securityGroups) {
    // checking props.securityGroups[props.vpc_name] will result in an
    // undefined error that happens as part of MultiSelect
    throw new Error(
      "SecurityGroupMultiselect requires a securityGroups object. Got " +
        prettyJSON(props.securityGroups)
    );
  }
  return (
    <MultiSelect
      id={props.id + "-security-group-multiselect"}
      label={props.label}
      titleText="Security Groups"
      className="fieldWidthSmaller cds--form-item"
      initialSelectedItems={props.initialSelectedItems}
      vpc_name={props.vpc_name}
      invalid={props.invalid}
      invalidText="Invalid Selection"
      onChange={(event) => {
        props.onChange(event.selectedItems);
      }}
      disabled={props.disabled}
      items={props.vpc_name === "" ? [] : props.securityGroups[props.vpc_name]}
      itemToString={(item) => (item ? item : "")}
    />
  );
};

SecurityGroupMultiSelect.defaultProps = {
  disabled: false,
  label: "Select Security Groups",
  invalid: false,
};

SecurityGroupMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  initialSelectedItems: PropTypes.array.isRequired,
  vpc_name: PropTypes.string, // not required, null value should be valid
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  securityGroups: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
};

/**
 * vpc subnet multiselect
 */
export const SubnetMultiSelect = (props) => {
  return (
    <IcseMultiSelect
      id={props.id + "-subnet-multiselect"}
      className={props.className}
      titleText="Subnets"
      name={props.name}
      label={props.label}
      items={
        isNullOrEmptyString(props.vpc_name) ? [] : props.subnets[props.vpc_name]
      }
      initialSelectedItems={props.initialSelectedItems}
      invalidText={
        isNullOrEmptyString(props.vpc_name)
          ? "Select a VPC."
          : "Select at least one subnet."
      }
      invalid={props.initialSelectedItems.length === 0}
      disabled={props.disabled}
      onChange={(event) => props.onChange(event.selectedItems)}
    />
  );
};

SubnetMultiSelect.defaultProps = {
  name: "subnet_names",
  label: "Subnets",
  disabled: false,
  vpc_name: "",
  initialSelectedItems: [],
};

SubnetMultiSelect.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  vpc_name: PropTypes.string, // not required, `null` needs to be passed here
  subnets: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

/**
 * VPC List MultiSelect
 */
export const VpcListMultiSelect = (props) => {
  // throw error here so that passing no vpc list prop will error here
  // instead of being passed to `FilterableMultiselect`
  if (!props.vpcList) {
    throw new Error(
      "VpcListMultiSelect requires a list of VPCs using the prop `vpcList`. Got " +
        prettyJSON(props.vpcList)
    );
  }
  return (
    <IcseMultiSelect
      invalidText="At least one VPC must be selected."
      invalid={props.invalid}
      id={props.id + "-vpc-select"}
      titleText={props.titleText}
      onChange={(event) => props.onChange(event.selectedItems)}
      initialSelectedItems={props.initialSelectedItems}
      className={props.className}
      items={props.vpcList}
    />
  );
};

VpcListMultiSelect.defaultProps = {
  invalid: false,
  titleText: "VPCs",
  initialSelectedItems: [],
};

VpcListMultiSelect.propTypes = {
  invalid: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialSelectedItems: PropTypes.array.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
