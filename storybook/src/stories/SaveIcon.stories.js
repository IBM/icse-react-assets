import React from "react";
import { SaveIcon } from "icse-react-assets";

export default {
  component: SaveIcon,
  title: "Components/Buttons/SaveIcon",
  args: {
    disabled: false,
  },
  argTypes: {
    disabled: {
      description: "A boolean value for if the Save ICon is disabled", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SaveIcon is a component that handles dynamic color changing when a component is disabled.",
      },
    },
  },
};

const SaveIconInputStory = () => {
  return (
    <>
      <p>Save Icon</p>
      <SaveIcon />
      <p>Disabled Save Icon</p>
      <SaveIcon disabled />
    </>
  );
};

export const Default = SaveIconInputStory.bind({});
