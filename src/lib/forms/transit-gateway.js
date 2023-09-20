/**
 * Handle crn input
 * @param {event} event
 */
function handleCRNs(event) {
  let crns = event.target.value
    ? event.target.value
        .replace(/\s\s+/g, "") // replace extra spaces
        .replace(/,(?=,)/g, "") // prevent null tags from
        .replace(/[^\w,-:]/g, "")
        .split(",")
    : [];
  return { crns: crns };
}

/**
 * Handle vpc selection
 * @param {Array} selectedItems list of selected vpcs
 * @param {String} tgw transit gateway name
 * @param {Array<object>} oldConnections previous state connections
 */
function handleVpcSelect(selectedItems, tgw, oldConnections) {
  let connections = [];

  selectedItems.forEach((vpc) => {
    connections.push({ tgw: tgw, vpc: vpc });
  });

  (oldConnections || []).forEach((connection) => {
    if (connection.power) {
      connections.push(connection);
    }
  });

  return { connections: connections };
}

module.exports = {
  handleCRNs,
  handleVpcSelect,
};
