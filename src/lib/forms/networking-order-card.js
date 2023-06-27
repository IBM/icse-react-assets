const { allFieldsNull, transpose } = require("lazy-z");

/**
 * get which rule protocol is being used
 * @param {string} rule
 * @returns {string} protocol
 */
function getRuleProtocol(rule) {
  let protocol = "all";
  // for each possible protocol
  ["icmp", "tcp", "udp"].forEach((field) => {
    // set protocol to that field if not all fields are null
    if (allFieldsNull(rule[field]) === false) {
      protocol = field;
    }
  });
  return protocol;
}

/**
 * create sub rule
 * @param {*} rule rule object
 * @param {string} protocol all, tcp, icmp, or udp
 * @param {boolean} isSecurityGroup
 * @returns {Object} default rule object
 */
function getSubRule(rule, isSecurityGroup) {
  let defaultRule = {
    port_max: null,
    port_min: null,
    source_port_max: null,
    source_port_min: null,
    type: null,
    code: null,
  };
  if (getRuleProtocol(rule) !== "all") {
    transpose(rule[getRuleProtocol(rule)], defaultRule);
  }
  if (isSecurityGroup) {
    delete defaultRule.source_port_min;
    delete defaultRule.source_port_max;
  }
  return defaultRule;
}

/**
 * Helper function to move items up and down in the list so they can be rendered properly
 * @param {Array} arr
 * @param {number} indexA
 * @param {number} indexB
 */
function swapArrayElements(arr, indexA, indexB) {
  let temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

function getOrderCardClassName(props) {
  return (
    "marginBottomSmall positionRelative " +
    (props.isSecurityGroup ? "formInSubForm" : "subForm")
  );
}

function setupRowsAndHeaders(componentProps) {
  const { rules, isSecurityGroup } = { ...componentProps };

  const headers = [
    {
      key: "name",
      header: "Name",
    },
    { key: "direction", header: "Direction" },
    { key: "source", header: "Source" },
    { key: "protocol", header: "Protocol" },
    { key: "port", header: "Port" },
  ];

  const rows = JSON.parse(JSON.stringify(rules));

  // set up required data for each row
  rows.forEach((row) => {
    row.protocol = getRuleProtocol(row);
    row.id = row.name;
    row.port =
      row.protocol === "all"
        ? "ALL"
        : row.protocol === "icmp"
        ? row.icmp.code
        : `${row[row.protocol].port_min}-${row[row.protocol].port_max}`;
  });

  // add in action and destination if not security group
  if (!isSecurityGroup) {
    headers.splice(1, 0, {
      // add extra fields if not security group
      key: "action",
      header: "Action",
    });
    headers.splice(4, 0, { key: "destination", header: "Destination" });
  }

  return { rows: rows, headers: headers };
}

module.exports = {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
  setupRowsAndHeaders,
};
