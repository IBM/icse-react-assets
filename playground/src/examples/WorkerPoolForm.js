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
      subnetList={["a", "b", "c", "d", "e"]}
      cluster={{
        machine_type: "bx2.16x64",
<<<<<<< HEAD
<<<<<<< HEAD
        subnet_names: ["zone1", "zone2"],
        subnets: {
          test: ["a", "b", " c"],
        },
=======
        subnets: ["a", "b", " c"],
>>>>>>> aa8795c (remove subnet_names, just keep subnets)
=======
        subnets: ["a", "b", "c"],
<<<<<<< HEAD
        subnetList: ["a", "b", "c", "d", "e"],
>>>>>>> 3d2558a (added subnetList)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
        vpc_name: "test",
        workers_per_subnet: 2,
        entitlement: "null",
      }}
      data={{
        entitlement: "null",
        name: "testWorkerPool",
<<<<<<< HEAD
        subnet_names: ["zone1", "zone2"],
        subnets: {
          test: ["a", "b", " c"],
        },
=======
        subnets: ["a", "b", "c"],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> aa8795c (remove subnet_names, just keep subnets)
=======
        subnetList: ["a", "b", "c", "d", "e"],
>>>>>>> 3d2558a (added subnetList)
=======
>>>>>>> 78a9078 (move subnetList out of objects and alter subnetMultiSelect)
        vpc_name: "test",
        flavor: "bx2.16x64",
        workers_per_subnet: 2,
      }}
    />
  );
};
