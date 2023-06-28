/**
 * initialize worker pool state
 * @param {*} props
 * @returns {Object} state initialization object
 */

function workerPoolInit(props) {
  return props.isModal
    ? {
        name: "",
        flavor: props.cluster.flavor,
        subnets: props.cluster.subnets || [],
        vpc: props.cluster.vpc,
        workers_per_subnet: props.cluster.workers_per_subnet,
        entitlement: props.cluster.entitlement,
      }
    : { ...props.data };
}

/**
 * handle worker pool input change
 * @param {*} event
 * @param {*} stateData
 * @returns {Object} state data changed
 */
function workerPoolInputChange(event, stateData) {
  let { name, value } = event.target;
  let pool = { ...stateData };
  if (name === "workers_per_subnet") {
    pool[name] = Number(value);
  } else {
    pool[name] = value === "null" ? null : value;
  }
  return pool;
}

/**
 * handle worker pool subnet change
 * @param {*} subnets
 * @param {*} stateData
 * @returns {Object} state data object
 */
function workerPoolSubnetChange(subnets, stateData) {
  let pool = { ...stateData };
  pool.subnets = subnets;
  return pool;
}

module.exports = {
  workerPoolInit,
  workerPoolInputChange,
  workerPoolSubnetChange,
};
