const { handlePgwToggle } = require("./vpc");
const { atrackerInputChange } = require("./atracker");
const { databaseInputChange } = require("./database");
const { handleRgToggle } = require("./resource-groups");
const { handleVpnServerInputChange } = require("./vpn-server");
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
const { handleVpnGatewayChange } = require("./vpn-gateways");
const {
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
} = require("./vpe");
const {
  workerPoolInit,
  workerPoolInputChange,
  workerPoolSubnetChange,
} = require("./worker-pools");

module.exports = {
  workerPoolSubnetChange,
  workerPoolInputChange,
  workerPoolInit,
  services,
  serviceGroups,
  vpeVpcDropdown,
  vpeServiceDropdown,
  vsiHandleInputChange,
  vpnRouteInputChange,
  handleSubnetTierToggle,
  parseZoneStrings,
  handleSelectZones,
  handleVpnGatewayChange,
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
  databaseInputChange,
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
  handlePgwToggle,
};
