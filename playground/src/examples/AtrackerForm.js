import { AtrackerForm } from "icse-react-assets";

export const AtrackerFormExample = () => {
  return (
    <AtrackerForm
      data={{
        resource_group: "default",
        cos_bucket: "default_bucket",
        cos_key: "default_key",
        add_route: false,
      }}
      resourceGroups={["default", "foo", "bar"]}
      cosBuckets={["default_bucket", "foo"]}
      cosKeys={["default_key", "bar"]}
      prefix="icse"
    />
  );
};
