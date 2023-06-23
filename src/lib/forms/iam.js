const restrictMenuItems = ["Unset", "Yes", "No"];
const mfaMenuItems = [
  "NONE",
  "TOTP",
  "TOTP4ALL",
  "Email-Based MFA",
  "TOTP MFA",
  "U2F MFA",
];
const iamItems = {
  null: {
    display: null,
    value: null,
  },
  NONE: {
    display: "NONE",
    value: "NONE",
  },
  TOTP: {
    display: "TOTP",
    value: "TOTP",
  },
  TOTP4ALL: {
    display: "TOTP4ALL",
    value: "TOTP4ALL",
  },
  LEVEL1: {
    display: "Email-Based MFA",
    value: "LEVEL1",
  },
  LEVEL2: {
    display: "TOTP MFA",
    value: "LEVEL2",
  },
  LEVEL3: {
    display: "U2F MFA",
    value: "LEVEL3",
  },
  NOT_SET: {
    display: "Unset",
    value: "NOT_SET",
  },
  RESTRICTED: {
    display: "Yes",
    value: "RESTRICTED",
  },
  NOT_RESTRICTED: {
    display: "No",
    value: "NOT_RESTRICTED",
  },
  "Email-Based MFA": {
    display: "Email-Based MFA",
    value: "LEVEL1",
  },
  "TOTP MFA": {
    display: "TOTP MFA",
    value: "LEVEL2",
  },
  "U2F MFA": {
    display: "U2F MFA",
    value: "LEVEL3",
  },
  Unset: {
    display: "Unset",
    value: "NOT_SET",
  },
  Yes: {
    display: "Yes",
    value: "RESTRICTED",
  },
  No: {
    display: "No",
    value: "NOT_RESTRICTED",
  },
};

/**
 * handle input change of number-only fields
 * @param {event} event
 */
function handleNumberInputChange(event) {
  let value = parseInt(event.target.value) || null;
  if (value || event.target.value === "") {
    return { [event.target.name]: value };
  } else {
    return null;
  }
}

/**
 * Handle input change for allowed ips text field
 * @param {event} event
 */
function handleAllowedIps(event) {
  let value = event.target.value.replace(/\s*/g, ""); // remove white space and check for empty value
  if (value === "") {
    value = null;
  }
  return { allowed_ip_addresses: value };
}

/**
 * Handle input change for a select
 * @param {event} event
 */
function handleSelectChange(event) {
  let { name, value } = event.target;
  return { [name]: iamItems[value].value };
}

module.exports = {
  restrictMenuItems,
  mfaMenuItems,
  iamItems,
  handleNumberInputChange,
  handleAllowedIps,
  handleSelectChange,
};
