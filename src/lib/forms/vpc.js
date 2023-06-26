const { contains, parseIntFromZone } = require("lazy-z");

function handlePgwToggle(zone, stateData) {
  let vpc = { ...stateData };
  let currentGw = [...stateData.publicGateways]; // new array
  let zoneNumber = parseIntFromZone(zone);
  // check if zone is already present
  if (contains(currentGw, zoneNumber)) {
    let index = currentGw.indexOf(zoneNumber);
    currentGw.splice(index, 1);
  } else {
    currentGw.push(zoneNumber);
  }
  vpc.publicGateways = currentGw;
  return vpc;
}

module.exports = {
  handlePgwToggle,
};
