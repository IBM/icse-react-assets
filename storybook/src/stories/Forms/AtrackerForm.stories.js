import { AtrackerForm } from "icse-react-assets";

export default {
  component: AtrackerForm,
  title: "Components/Forms/AtrackerForm",
  argTypes: {
    data: {
      summary: "An optional object",
      type: { required: false },
      control: "none",
    },
    ["data.enabled"]: {
      description:
        "A boolean value determining if the Activity Tracker instance is enabled or disabled",
      control: "none",
      type: { require: true },
    },
    ["data.bucket"]: {
      description: "A string value of the cos bucket name",
      control: "none",
      type: { required: true },
    },
    ["data.cos_key"]: {
      description: "A string value of the cos key name",
      control: "none",
      type: { required: true },
    },
    ["data.resource_group"]: {
      description: "A string value of the resource group name",
      control: "none",
      type: { required: false },
    },
    ["data.add_route"]: {
      description: "A boolean value that determines if a route is to be added",
      control: "none",
      type: { required: true },
      table: { defaultValue: { summary: false } },
    },
    ["data.locations"]: {
      description:
        "Logs from these locations (array of strings) will be sent to the targets specified",
      control: "none",
      type: { required: true },
      table: { defaultValue: { summary: `[]` } },
    },
    region: {
      description: "A string representing the region",
      control: "none",
      type: { required: true },
    },
    resourceGroups: {
      description:
        "An array of strings containing the names of resource groups to select",
      type: { required: true },
      control: "none",
    },
    cosKeys: {
      description:
        "An array of strings containing the names of cos keys to select",
      type: { required: true },
      control: "none",
    },
    cosBuckets: {
      description:
        "An array of strings containing the names of cos buckets to select",
      type: { required: true },
      control: "none",
    },
    isModal: {
      description:
        "A boolean that determines if the form is within a modal or not",
      type: { required: true },
      control: "none",
      table: { defaultValue: { summary: false } },
    },
    prefix: {
      description: "A string value for the prefix (16 characters max)",
      type: { required: true },
      control: "none",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "AtrackerForm is a form component that provides functionality for editing an Activity Tracker instance.",
      },
    },
  },
};

const AtrackerFormStory = () => {
  return (
    <AtrackerForm
      data={{
        enabled: true,
        resource_group: "default",
        bucket: "default_bucket",
        cos_key: "default_key",
        add_route: false,
        locations: [],
      }}
      resourceGroups={["default", "foo", "bar"]}
      cosBuckets={["default_bucket", "foo"]}
      cosKeys={["default_key", "bar"]}
      prefix="icse"
      region="us-south"
      logdnaEnabled
    />
  );
};

const AtrackerFormModalStory = () => {
  return (
    <AtrackerForm
      data={{
        enabled: true,
        resource_group: "default",
        bucket: "default_bucket",
        cos_key: "default_key",
        add_route: false,
        locations: [],
      }}
      resourceGroups={["default", "foo", "bar"]}
      cosBuckets={["default_bucket", "foo"]}
      cosKeys={["default_key", "bar"]}
      prefix="icse"
      region="us-south"
      isModal
    />
  );
};

export const Default = AtrackerFormStory.bind({});
export const Modal = AtrackerFormModalStory.bind({});
