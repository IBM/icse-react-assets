const { atrackerInputChange } = require("./atracker");
const { handleRgToggle } = require("./resource-groups");
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
};
