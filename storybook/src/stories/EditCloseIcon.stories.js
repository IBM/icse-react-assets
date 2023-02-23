import React from "react";
import { EditCloseIcon } from "icse-react-assets";

export default {
  component: EditCloseIcon,
  title: "Components/Buttons/EditCloseIcon",
  args: {
    disabled: false,
    hoverText: "EditCloseICon",
    open: false,
    onClick: () => {},
    type: "edit",
  },
  argTypes: {
    disabled: {
      description: "A boolean value for if the EditCloseIcon is disabled", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    open: {
      description:
        "A boolean value for if the EditCloseIcon is opened. Defaults to false", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    hoverText: {
      description:
        "An optional string that is displayed when the cursor is hovering over the button", // description
      type: { required: false }, // required prop or not
      control: "text", // what type of value we can set
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
          "EditCloseIcon is a dynamic toggle to handle the toggling of an open form between `edit` and `close`.",
      },
    },
  },
};

const EditCloseIconInputStory = ({ ...args }) => {
  return (
    <>
      <p>Edit Icon Closed:</p>
      <div>
        <EditCloseIcon
          hoverText="Edit Icon"
          onClick={() => console.log("Edit toggle")}
          hoverTextAlign="right"
        />
      </div>
      <p>Edit Icon Open:</p>
      <div>
        <EditCloseIcon
          hoverText="Edit Icon Open"
          onClick={() => console.log("Edit toggle")}
          hoverTextAlign="right"
          open={true}
        />
      </div>
      <p>Add Icon Closed:</p>
      <div>
        <EditCloseIcon
          hoverText="Add Icon"
          onClick={() => console.log("Edit toggle")}
          disabled
          type="add"
          hoverTextAlign="right"
        />
      </div>
      <p>Add Icon Open:</p>
      <div>
        <EditCloseIcon
          hoverText="Add Icon Open"
          onClick={() => console.log("Edit toggle")}
          disabled
          type="add"
          hoverTextAlign="right"
          open={true}
        />
      </div>
    </>
  );
};

export const Default = EditCloseIconInputStory.bind({});
