import React from "react";

import "./App.css";
import {
  capitalize,
  contains,
  getObjectFromArray,
  isNullOrEmptyString,
  snakeCase,
  splat,
  splatContains,
  isIpv4CidrOrAddress,
  isInRange,
  kebabCase,
  titleCase,
  eachKey,
  isEmpty,
} from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";
import {
  IcseFormGroup,
  IcseHeading,
  PopoverWrapper,
  RenderForm,
} from "icse-react-assets";
import { IcseNameInput, IcseTextInput, IcseToggle } from "icse-react-assets";
import { IcseSelect } from "icse-react-assets";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
  DynamicToolTipWrapper,
} from "icse-react-assets";
import { ClassicGatewayForm } from "icse-react-assets";
import { TextInput, Select, SelectItem } from "@carbon/react";
import {
  DynamicFormTextInput,
  DynamicFormSelect,
  DynamicFormToggle,
  DynamicTextArea,
  DynamicMultiSelect,
} from "./Components2";


function addClassName(className, props) {
  let composedClassName = className;
  if (props?.className) {
    composedClassName += " " + props.className;
  }

  composedClassName +=
    props.size === "small" ? " fieldWidthSmaller" : " fieldWidth";

  return composedClassName;
}

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.data,
    };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleInputChange(event) {
    let nextState = { ...this.state };
    let { name, value } = event.target;
    nextState[name] = value;
    this.props.form.groups.forEach((group) => {
      eachKey(group, (field) => {
        // run only when field is name
        if (group[field].onInputChange && name === field) {
          group[field].onInputChange(nextState);
        }
      });
    });
    this.setState(nextState);
  }

  handleToggle(toggleName) {
    this.setState({ [toggleName]: !this.state[toggleName] });
  }

  render() {
    let propsName = this.props.data.name;
    console.log(JSON.stringify(this.state, null, 2));
    return (
      <div>
        {this.props.form.groups.map((group, index) => (
          <IcseFormGroup key={this.props.data.name + "-group-" + index}>
            {Object.keys(group).map((key, keyIndex) => {
              let field = group[key];
              return field.hideWhen && field.hideWhen(this.state) ? (
                ""
              ) : (
                <DynamicToolTipWrapper
                  tooltip={field.tooltip}
                  key={`${propsName} input ${key} ${keyIndex}`}
                  labelText={field.labelText ? field.labelText : titleCase(key)}
                >
                  {RenderForm(
                    field.type === "select"
                      ? DynamicFormSelect
                      : field.type === "toggle"
                      ? DynamicFormToggle
                      : field.type === "textArea"
                      ? DynamicTextArea
                      : field.type === "multiselect"
                      ? DynamicMultiSelect
                      : DynamicFormTextInput,
                    {
                      name: key,
                      labelText: field.labelText,
                      propsName: propsName,
                      keyIndex: keyIndex,
                      field: field,
                      parentState: this.state,
                      parentProps: this.props,
                      handleInputChange:
                        field.type === "toggle"
                          ? this.handleToggle
                          : this.handleInputChange,
                    }
                  )}
                </DynamicToolTipWrapper>
              );
            })}
          </IcseFormGroup>
        ))}
      </div>
    );
  }
}

function validName(str) {
  // regex name validation that only allows alphanumerical characters and "-", string cannot end with "-"
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData, componentProps) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData, componentProps) {
  return `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

const subnetList = [
  {
    vpc: "management",
    zone: 1,
    cidr: "10.10.10.0/24",
    name: "vsi-zone-1",
    network_acl: "management",
    resource_group: "management-rg",
    public_gateway: false,
    has_prefix: true,
  },
  {
    vpc: "management",
    zone: 1,
    cidr: "10.20.10.0/24",
    name: "vpe-zone-1",
    resource_group: "management-rg",
    network_acl: "management",
    public_gateway: false,
    has_prefix: true,
  },

  {
    vpc: "workload",
    zone: 1,
    cidr: "10.40.10.0/24",
    name: "vsi-zone-1",
    network_acl: "workload",
    resource_group: "workload-rg",
    public_gateway: false,
    has_prefix: true,
  },
];

const App = () => {
  return (
    <DynamicForm
      data={{
        name: "dev",
        resource_group: "rg-1",
        endpoints: "public",
        kube_type: "openshift",
        cos: "cos-1",
        entitlement: "cloud_pak",
        vpc: "management",
        subnets: [],
      }}
      formName="appid"
      form={{
        groups: [
          {
            name: {
              tooltip: {
                content: "Private IP addresses or CIDR blocks to allowlist",
                align: "top-left",
              },
              type: "text",
              invalid: invalidCallback,
              invalidText: invalidTextCallback,
              helperText: function (stateData) {
                return `iac-appid-${stateData.name}`;
              },
              disabled: function () {
                return false;
              },
              disabledText: function () {
                return "";
              },
              size: "small",
            },
            resource_group: {
              type: "select",
              invalid: function (stateData) {
                return isNullOrEmptyString(stateData.resource_group);
              },
              invalidText: function () {
                return "Select a resource group";
              },
              disabled: function () {
                return false;
              },
              size: "small",
              groups: ["rg-1", "rg-2"],
            },
            kube_type: {
              type: "select",
              invalid: function (stateData) {
                return isNullOrEmptyString(stateData.kube_type);
              },
              invalidText: function () {
                return "Select a cluster type";
              },
              disabled: function () {
                return false;
              },
              onRender: function (stateData) {
                return stateData.kube_type === "iks"
                  ? "IBM Kubernetes Service"
                  : stateData.kube_type === "openshift"
                  ? "OpenShift"
                  : "";
              },
              onInputChange: function (stateData) {
                stateData.endpoints = stateData.endpoints.toLowerCase();
              },
              size: "small",
              groups: ["OpenShift", "IBM Kubernetes Service"],
            },
          },
          {
            cos: {
              type: "select",
              labelText: "Cloud Object Storage Instance",
              invalid: function (stateData) {
                return isNullOrEmptyString(stateData.encryption_key);
              },
              invalidText: function () {
                return "Select an object storage instance";
              },
              groups: ["cos-1", "cos-2"],
              disabled: function () {
                return false;
              },
              size: "small",
              hideWhen: function (stateData) {
                return stateData.kube_type !== "openshift";
              },
            },
            entitlement: {
              type: "select",
              invalid: function (stateData) {
                return isNullOrEmptyString(stateData.encryption_key);
              },
              invalidText: function () {
                return "Select an entitlement";
              },
              groups: ["null", "cloud_pak"],
              disabled: function () {
                return false;
              },
              size: "small",
              hideWhen: function (stateData) {
                return stateData.kube_type !== "openshift";
              },
            },
          },
          {
            vpc: {
              type: "select",
              size: "small",
              labelText: "VPC",
              invalid: function (stateData) {
                return isNullOrEmptyString(stateData.vpc);
              },
              invalidText: function () {
                return "Select a VPC";
              },
              disabled: function () {
                return false;
              },
              onInputChange: function (stateData) {
                stateData.subnets = [];
              },
              groups: ["management", "workload"],
            },
            subnets: {
              type: "multiselect",
              size: "small",
              forceUpdateKey: function (stateData) {
                return stateData.vpc;
              },
              invalid: function (stateData) {
                return isEmpty(stateData.subnets);
              },
              invalidText: function () {
                return "Select a VPC";
              },
              disabled: function () {
                return false;
              },
              groups: function (stateData, componentProps) {
                let foundSubnets = [];
                subnetList.forEach((subnet) => {
                  if (subnet.vpc === stateData.vpc) {
                    foundSubnets.push(subnet.name);
                  }
                });
                return foundSubnets;
              },
            },
          },
        ],
      }}
    />
  );
};

export default App;
