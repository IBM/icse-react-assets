import React from "react";
import { PageNotFound } from "icse-react-assets";

export default {
  component: PageNotFound,
  title: "Components/Other/PageNotFound",
  parameters: {
    docs: {
      description: {
        component:
          "PageNotFound is a component for the body of an invalid path",
      },
    },
  },
};

const PageNotFoundExampleStory = () => {
  return <PageNotFound />;
};

export const Default = PageNotFoundExampleStory.bind({});
