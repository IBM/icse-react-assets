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
const { handleDnsResolverInputChange, dnsFormInputChange } = require("./dns");
const {
  getValidAdminPassword,
  isNullOrEmptyString,
  isValidTmosAdminPassword,
  isValidUrl,
} = require("./f5");
const {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
} = require("./networking-order-card");
const { handleCRNs, handleVpcSelect } = require("./transit-gateway");

module.exports = {
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
  handleVpnServerInputChange,
  vpnServerRangeInvalid,
};
