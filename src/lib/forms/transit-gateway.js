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
 */
function handleVpcSelect(selectedItems, tgw) {
  let connections = [];

  selectedItems.forEach((vpc) => {
    connections.push({ tgw: tgw, vpc: vpc });
  });

  return { connections: connections };
}

module.exports = {
  handleCRNs,
  handleVpcSelect,
};
