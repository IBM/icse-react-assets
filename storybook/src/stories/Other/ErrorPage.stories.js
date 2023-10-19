import React from "react";
import { ErrorPage } from "icse-react-assets";

export default {
  component: ErrorPage,
  title: "Components/Other/ErrorPage",
  parameters: {
    docs: {
      description: {
        component:
          "ErrorPage is a component for the body of an invalid path",
      },
    },
  },
};

const ErrorPageExampleStory = () => {
  return <ErrorPage />;
};

export const Default = ErrorPageExampleStory.bind({});
