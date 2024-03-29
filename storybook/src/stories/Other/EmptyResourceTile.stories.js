import React from "react";
import { EmptyResourceTile } from "icse-react-assets";

export default {
  component: EmptyResourceTile,
  title: "Components/Other/EmptyResourceTile",
  args: {
    name: "Example Component",
    showIfEmpty: [],
  },
  argTypes: {
    name: {
      description: "A string value for the resource", // description
      type: { required: true }, // required prop or not
      control: "text",
    },
    showIfEmpty: {
      description:
        "A boolean or array value which shows the tile only if false or if the given array is empty (indicating no resources)", // description
      type: { required: true }, // required prop or not
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    noMarginTop: {
      description:
        "Boolean describing if there is not a margin on top of the tile",
      type: { required: false },
      control: "boolean",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "EmptyResourceTile is a component that creates a vertically aligned, full-width title.",
      },
    },
  },
};

const EmptyResourceTileStory = ({ ...args }) => {
  return <EmptyResourceTile {...args} />;
};

export const Default = EmptyResourceTileStory.bind({});
