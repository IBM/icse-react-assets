/**
 * handle change for vpn gateway
 * @param {*} event
 * @returns {object} state object
 */
function handleVpnGatewayChange(event) {
  let { name, value } = event.target;
  if (name === "vpc") {
    return {
      vpc: value,
      subnet: "",
    };
  } else
    return {
      [name]: value,
    };
}

module.exports = {
  handleVpnGatewayChange,
};
