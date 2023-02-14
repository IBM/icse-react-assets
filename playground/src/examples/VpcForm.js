import { VpcForm } from "icse-react-assets";
import { contains } from "lazy-z";

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

function invalidFieldCallback(field, stateData, componentProps) {
  let invalidCheck = false;
  if (!validName(stateData[field])) invalidCheck = true;
  else if (field === "name") {
    invalidCheck = contains(
      ["foo", "bar"],
      stateData.name || componentProps.data.name === stateData.name
    );
  } else invalidCheck = vpcFieldCheck(field, stateData, componentProps).invalid;

  return invalidCheck;
}

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

export const VpcFormExample = () => {
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
        use_manual_address_prefixes: false,
        use_public_gateways: {
          "zone-1": false,
          "zone-2": false,
          "zone-3": false,
        },
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      cosBuckets={["atracker-bucket", "management-bucket", "workload-bucket"]}
      invalidCallback={invalidFieldCallback}
      invalidTextCallback={invalidFieldTextCallback}
    />
  );
};
