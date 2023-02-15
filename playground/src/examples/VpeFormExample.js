import { VpeForm } from "icse-react-assets";

export const VpeFormExample = () => {
  return (
    <VpeForm
      data={{
        vpc: "workload",
        service: "kms",
        resource_group: "test",
        security_groups: ["1", "2", "3"],
        subnets: ["a", "b", "c"],
      }}
      resourceGroups={["test", "foo", "bar"]}
      subnetList={["a", "b", "c", "d", "e"]}
      securityGroups={["1", "2", "3", "4", "5"]}
    />
  );
};
