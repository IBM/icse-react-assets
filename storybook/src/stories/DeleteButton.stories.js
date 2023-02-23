import React from "react";
import { DeleteButton } from "icse-react-assets";

export default {
  component: DeleteButton,
  title: "Components/Buttons/DeleteButton",
  args: {
    disabled: false,
    disableDeleteMessage: "Example disabled message",
    onClick: () => {},
  },
  argTypes: {
    disabled: {
      description: "A boolean value for if the DeleteButton is disabled", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    disableDeleteMessage: {
      description:
        "An optional string that is displayed when the cursor is hovering over the button when the delete button is disabled", // description
      type: { required: false }, // required prop or not
      control: "text", // what type of value we can set
    },
    hoverTextAlign: {
      description: "Alignment of the hover text", // description
      type: { required: true }, // required prop or not
      control: "text", // what type of value we can set
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
          "DeleteButton is a dynamic button that can be used as either a Save button or an Add button for any component.",
      },
    },
  },
};

const DeleteButtonInputStory = ({ ...args }) => {
  return (
    <>
      <p>Delete Button:</p>
      <div>
        <DeleteButton
          onClick={() => {
            console.log("Delete action");
          }}
        />
      </div>
      <p>Disabled Delete Button:</p>
      <div>
        <DeleteButton
          disabled={true}
          onClick={() => {
            console.log("Delete action");
          }}
        />
      </div>
      <p>Disabled Delete Button With Custom Message:</p>
      <div>
        <DeleteButton
          disabled={true}
          onClick={() => {
            console.log("Delete action");
          }}
          disableDeleteMessage="My custom delete message"
          hoverTextAlign="right"
        />
      </div>
    </>
  );
};

export const Default = DeleteButtonInputStory.bind({});
