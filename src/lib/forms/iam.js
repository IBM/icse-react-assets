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

module.exports = {
  handleNumberInputChange,
  handleAllowedIps,
};
