const services = {
  hpcs: "Hyper Protect Crypto Services",
  kms: "Key Protect",
  cos: "Object Storage",
  icr: "Container Registry",
  "Hyper Protect Crypto Services": "hpcs",
  "Key Protect": "kms",
  "Object Storage": "cos",
  "Container Registry": "icr",
  "secrets-manager": "Secrets Manager",
  "Secrets Manager": "secrets-manager",
};
const serviceGroups = [
  "Hyper Protect Crypto Services",
  "Key Protect",
  "Object Storage",
  "Container Registry",
  "Secrets Manager",
];

function vpeVpcDropdown(event, stateData) {
  let state = { ...stateData };
  state.vpc = event.target.value;
  state.security_groups = [];
  state.subnets = [];
  return state;
}

function vpeServiceDropdown(event, stateData) {
  let state = { ...stateData };
  state.service = services[event.target.value];
  return state;
}
module.exports = {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
};
