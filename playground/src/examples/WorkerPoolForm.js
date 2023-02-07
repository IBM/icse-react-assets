import { WorkerPoolForm } from "icse-react-assets";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.pool.name);
}

function invalidTextCallback(stateData) {
  return !validName(stateData.pool.name)
    ? `Name ${stateData.pool.name} is invalid.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const WorkerPoolFormExample = () => {
  return (
    <WorkerPoolForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      cluster={{
        cos_name: "cos name",
        kube_type: "kube_type",
        kube_version: "1.3.5",
        machine_type: "machine_type",
        name: "test",
        subnet_names: ["zone-1", "zone-2"],
        update_all_workers: true,
        kms_config: {
          crk_name: "test_crk_name",
        },
        vpc_name: "test",
        worker_pools: ["test1", "test2", "test3"],
        workers_per_subnet: 2,
      }}
      data={{
        entitlement: "null",
        name: "testWorkerPool",
        subnet_names: ["zone1", "zone2"],
        subnets: ["management"],
        flavor: "bx2.16x64",
        workers_per_subnet: 2,
      }}
    />
  );
};
