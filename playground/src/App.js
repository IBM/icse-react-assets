import React from "react";
import { contains } from "lazy-z";
import { VpcForm, NetworkAclForm } from "icse-react-assets";
import "./App.css";

const VpcFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  /** check if input is null or empty string
   * @param {string} input
   * @returns {boolean} true if str null or ""
   */
  function checkNullorEmptyString(input) {
    if (input === null || input === "") return true;
    else return false;
  }

  /**
   * check to see if a component has a duplicate name
   * @param {string} value name value. ex: management-rg
   * @param {Array} existingValues custom array of existing values
   * @returns {Object} boolean invalid and text invalidText
   */
  function hasDuplicateName(value, existingValues) {
    let returnData = {
      invalid: false,
      invalidText: `Invalid Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]/`,
    };
    if (contains(existingValues, value)) {
      returnData = {
        invalid: true,
        invalidText: `Name ${value} already in use.`,
      };
    }
    return returnData;
  }

  /**
   * check vpc name fields valid
   * @param {string} field name to check
   * @param {Object} stateData component state
   * @param {Object} componentProps component props
   * @returns {Object} invalid boolean invalidText string
   */
  function vpcFieldCheck(field, stateData, componentProps) {
    let secondaryInvalidNames = {
      invalid: false,
      invalidText: `Invalid Name. Must match the regular expression: /[A-z][a-z0-9-]*[a-z0-9]/`,
    };
    if (!checkNullorEmptyString(stateData[field])) {
      if (field === "default_network_acl_name") {
        secondaryInvalidNames = hasDuplicateName(stateData[field], [
          "network_acl_test",
          "network_acl_test_2",
        ]);
      } else if (field === "default_routing_table_name") {
        secondaryInvalidNames = hasDuplicateName(stateData[field], [
          "routing_table_test",
          "routing_table_test_2",
        ]);
      } else {
        secondaryInvalidNames = hasDuplicateName(stateData[field], [
          "security_group_test",
          "security_group_test_2",
        ]);
      }
    }
    return secondaryInvalidNames;
  }

  /**
   * check to see if a vpc has an invalid field
   * @param {string} field name of the field
   * @param {*} stateData state data
   * @param {*} componentProps props of component
   * @returns {boolean} true if invalid
   */
  function invalidFieldCallback(field, stateData, componentProps) {
    let invalidCheck = false;
    if (!validName(stateData[field])) invalidCheck = true;
    else if (field === "name") {
      invalidCheck = contains(
        ["foo", "bar"],
        stateData.name || componentProps.data.name === stateData.name
      );
    } else
      invalidCheck = vpcFieldCheck(field, stateData, componentProps).invalid;

    return invalidCheck;
  }

  /**
   * render text for invalid vpc field
   * @param {string} field name of the field
   * @param {*} stateData state data
   * @param {*} componentProps props of component
   * @returns {string} text to display when invalid
   */
  function invalidFieldTextCallback(field, stateData, componentProps) {
    let invalidText = ``;
    if (field === "name") {
      contains(["foo", "bar"], stateData.name) ||
      (!checkNullorEmptyString(stateData.name) &&
        componentProps.data.name === stateData.name)
        ? (invalidText = `VPC name ${stateData.name} already in use.`)
        : (invalidText = `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`);
    } else
      invalidText = vpcFieldCheck(field, stateData, componentProps).invalidText;
    return invalidText;
  }

  return (
    <VpcForm
      data={{
        name: "",
        resource_group: "",
        flow_logs_bucket_name: "",
        default_network_acl_name: "",
        default_routing_table_name: "",
        default_security_group_name: "",
        classic_access: false,
        manual_address_prefix_management: false,
        publicGateways: [],
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      cosBuckets={["atracker-bucket", "management-bucket", "workload-bucket"]}
      invalidCallback={invalidFieldCallback}
      invalidTextCallback={invalidFieldTextCallback}
      disableManualPrefixToggle={true}
    />
  );
};

const NetworkAclFormStory = () => {
  function validName(str) {
    const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
    if (str) return str.match(regex) !== null;
    else return false;
  }

  function invalidCallback(stateData, componentProps) {
    return !validName(stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    if (stateData.name === "") return "Name cannot be empty";
    else
      return "Name must follow the regex pattern: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i";
  }
  function helperTextCallback(stateData, componentProps) {
    return `Composed Name: <prefix>-${stateData.name}`;
  }
  function onSubmitCallback(newRulesOrder) {
    // add logic here to create new rule
  }

  function onRuleSave(stateData, componentProp) {
    // add logic here to save rule
  }

  function onRuleDelete(stateData, componentProp) {
    // add logic here to delete rule
  }
  function shouldDisableSave(stateData, componentProps) {
    return true;
  }

  function disableModalSubmit(stateData, componentProps) {
    return true;
  }

  function networkRuleOrderDidChange(stateData, componentProps) {
    // add logic here to save reordered network rules
  }

  return (
    <NetworkAclForm
      data={{
        name: "example-acl",
        rules: [],
        resource_group: "",
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      helperTextCallback={helperTextCallback}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      disableSaveCallback={shouldDisableSave}
      disableModalSubmitCallback={disableModalSubmit}
      onSubmitCallback={onSubmitCallback}
      onRuleSave={onRuleSave}
      onRuleDelete={onRuleDelete}
      networkRuleOrderDidChange={networkRuleOrderDidChange}
    />
  );
};
function App() {
  return (
    <div className="App">
      <VpcFormStory />
      <hr />
      <NetworkAclFormStory />
    </div>
  );
}

export default App;
