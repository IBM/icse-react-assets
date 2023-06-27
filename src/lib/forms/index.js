const { handlePgwToggle } = require("./vpc");
const { atrackerInputChange } = require("./atracker");
const { handleRgToggle } = require("./resource-groups");
const {
  handleVpnServerInputChange,
  vpnServerRangeInvalid,
} = require("./vpn-server");
const {
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  cbrTypeNameMap,
  handleExclusionAddressInputChange,
} = require("./cbr-utils");
const { filterKubeVersion } = require("./cluster");
const { handleDnsResolverInputChange, dnsFormInputChange } = require("./dns");
const {
  getValidAdminPassword,
  isNullOrEmptyString,
  isValidTmosAdminPassword,
  isValidUrl,
} = require("./f5");
const { f5VsiInputChange, f5Vsis } = require("./f5-vsi");
const {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
} = require("./networking-order-card");
const { routingTableRouteInputChange } = require("./routing-table");
const { handleCRNs, handleVpcSelect } = require("./transit-gateway");
const { onCheckClick } = require("./secrets-manager");
const {
  parseZoneStrings,
  handleSelectZones,
  handleSubnetTierToggle,
} = require("./subnets");
const { vpnRouteInputChange } = require("./vpn");
const { vsiHandleInputChange } = require("./vsi");
const {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
} = require("./vpe");

module.exports = {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
  vsiHandleInputChange,
  vpnRouteInputChange,
  handleSubnetTierToggle,
  parseZoneStrings,
  handleSelectZones,
  f5Vsis,
  f5VsiInputChange,
  routingTableRouteInputChange,
  cbrInvalid,
  cbrValueInvalid,
  cbrValuePlaceholder,
  handleRuleInputChange,
  cbrTypeNameMap,
  handleExclusionAddressInputChange,
  getValidAdminPassword,
  isNullOrEmptyString,
  isValidTmosAdminPassword,
  isValidUrl,
  handleDnsResolverInputChange,
  dnsFormInputChange,
  atrackerInputChange,
  handleRgToggle,
  handleCRNs,
  handleVpcSelect,
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
  filterKubeVersion,
  onCheckClick,
  handleVpnServerInputChange,
  vpnServerRangeInvalid,
  handlePgwToggle,
};
