const { isNullOrEmptyString, isWholeNumber } = require("lazy-z");

/**
 * Handle vpn-server input
 * @param {event} event
 */
function handleVpnServerInputChange(stateData, event) {
  let { name, value } = event.target;
  let newState = { ...stateData };
  //handle crn inputs
  let crnList = value
    ? value
        .replace(/\s\s+/g, "") // replace extra spaces
        .replace(/,(?=,)/g, "") // prevent null tags from
        .replace(/[^\w,-:]/g, "")
    : [];
  // client_dns_server_ips input: removing white space and checking for empty value
  let clientDnsServerIps = value ? value.replace(/\s*/g, "") : null;
  if (name === "method") {
    // Clear client_ca_crn when method changes
    newState.method = value.toLowerCase();
    newState.client_ca_crn = "";
  } else if (name === "vpc") {
    // Clear subnet and security groups when vpc changes
    newState.vpc = value;
    newState.subnets = [];
    newState.security_groups = [];
  } else if (name === "certificate_crn") {
    newState.certificate_crn = crnList;
  } else if (name === "client_ca_crn") {
    newState.client_ca_crn = crnList;
  } else if (name === "protocol") {
    newState.protocol = value.toLowerCase();
  } else if (name === "client_dns_server_ips") {
    newState.client_dns_server_ips = clientDnsServerIps;
  } else if (name === "additional_prefixes") {
    newState.additional_prefixes = value.replace(/\s*/g, "").split(",");
  } else {
    newState = { [name]: value };
  }
  return newState;
}

module.exports = { handleVpnServerInputChange };
