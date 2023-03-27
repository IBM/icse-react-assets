/**
 * determine dropdown options for throughput and storage for event streams instance based on plan
 * @param {string} plan current plan selected
 */
function throughputAndStorageOptions(plan) {
  let throughput = [];
  let storage = [];
  if (plan === "enterprise") {
    throughput = ["150MB/s", "300MB/s", "450MB/s"];
    storage = ["2TB", "4TB", "6TB", "8TB", "10TB", "12TB"];
  } else {
    throughput = "";
    storage = "";
  }
  return { throughput: throughput, storage: storage };
}

module.exports = {
  throughputAndStorageOptions,
};
