import React from "react";
import { SaveAddButton } from "icse-react-assets";
import { Save } from "@carbon/icons-react";

export default {
  component: SaveAddButton,
  title: "Components/Buttons/SaveAddButton",
  args: {
    disabled: false,
    hoverText: "Example hover text",
    onClick: () => {},
    inline: false,
    type: "save",
  },
  argTypes: {
    disabled: {
      description: "A boolean value for if the SaveAddButton is disabled", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    inline: {
      description:
        "A boolean value for if the SaveAddButton is inline with other form fields", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    type: {
      description: "Type of the button. Can be either `save` or `add`.", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "save" } }, // default value
      control: "string", // what type of value we can set
    },
    hoverText: {
      description:
        "An optional string that is displayed when the cursor is hovering over the button", // description
      type: { required: false }, // required prop or not
      control: "string", // what type of value we can set
    },
    hoverTextAlign: {
      description: "Alignment of the hover text", // description
      type: { required: true }, // required prop or not
      control: "string", // what type of value we can set
      table: { defaultValue: { summary: "bottom" } }, // default value
    },
    onClick: {
      description: "A function that is called each time the button is clicked",
      type: { required: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SaveAddButton is a dynamic button that can be used as either a Save button or an Add button for any component.",
      },
    },
  },
};

const SaveAddButtonInputStory = ({ ...args }) => {
  return (
    <>
      <p>Save Button:</p>
      <div>
        <SaveAddButton
          hoverText="Disabled Save Button"
          onClick={() => console.log("Save action")}
          hoverTextAlign="right"
        />
      </div>
      <p>Disabled Save Button:</p>
      <div>
        <SaveAddButton
          hoverText="Disabled Save Button"
          onClick={() => console.log("Save action")}
          disabled
          hoverTextAlign="right"
        />
      </div>
      <p>Add Button:</p>
      <div>
        <SaveAddButton
          hoverText="Add Button"
          onClick={() => console.log("Save action")}
          hoverTextAlign="right"
          type="add"
        />
      </div>
      <p>Disabled Add Button:</p>
      <div>
        <SaveAddButton
          hoverText="Disabled Add Button"
          onClick={() => console.log("Save action")}
          disabled
          hoverTextAlign="right"
          type="add"
        />
      </div>
    </>
  );
};

export const Default = SaveAddButtonInputStory.bind({});
