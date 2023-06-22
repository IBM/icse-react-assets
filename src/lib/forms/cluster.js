const { contains } = require("lazy-z");

/**
 * filter function for kube version select
 * @param {string} version
 * @param {string} kube_type
 * @returns {string} version
 */
function filterKubeVersion(version, kube_type) {
  if (
    (kube_type === "openshift" && contains(version, "openshift")) || // is openshift and contains openshift
    (kube_type !== "openshift" && !contains(version, "openshift")) || // is not openshift and does not contain openshift
    version === "default" // or is default
  ) {
    return version.replace(/\s\(Default\)/g, ""); // replace default with empty string
  }
}

module.exports = {
  filterKubeVersion,
};
