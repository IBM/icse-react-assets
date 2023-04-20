import React from "react";
import { AtrackerForm } from "icse-react-assets";
import "./App.css";

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
    />
  );
};

function App() {
  return <AtrackerFormStory />;
}

export default App;
