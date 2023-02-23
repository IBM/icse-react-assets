import React from "react";
import { IcseTextInput } from "icse-react-assets";
import { useState } from "react";

export default {
  component: IcseTextInput, // component name
  title: "Components/Inputs/IcseTextInput", // in tabs under components > inputs > IcseTextInput > Default (bound story is default)
  args: {
    // add props in args to make them editable, or add controls in argTypes. These can supply example defaults
    componentName: "text-input",
    field: "example",
    id: "example-text-input",
    value: "",
    helperText: "Example Helper Text",
    labelText: "Example labelText",
    invalidText: "TextInput cannot be empty",
    onChange: () => {}, // place empty functions so these show up as props
    invalidCallback: () => {}, // place empty functions so these show up as props,
  },
  argTypes: {
    disabled: {
      description: "A boolean value for if the TextInput is disabled", // description
      type: { required: true }, // required prop or not
      table: { defaultValue: { summary: "false" } }, // default value
      control: "boolean", // what type of value we can set
    },
    componentName: {
      description: "A string name of the component",
      type: { required: true },
    },
    placeholder: {
      description:
        "An optional placeholder string to display describing the input",
      type: { required: false },
      table: { defaultValue: { summary: "my-{field}" } },
      control: "text",
    },
    field: {
      description: "A string value of the field the input is for",
      type: { required: true },
      table: { defaultValue: { summary: "false" } },
    },
    value: {
      description: "A string value of the data inside the text input",
      type: { required: true },
      control: "none",
    },
    onChange: {
      description:
        "A function that is called each time the text input is updated",
      type: { required: true },
    },
    helperText: {
      description: "A string value for helper text underneath the text input",
      type: { required: false },
    },
    tooltip: {
      description:
        "An optional object to add a tooltip to the text input. Refer to the tooltip component for its args.",
      type: { required: false },
    },
    className: {
      description: "A string of classNames that can be added to the text input",
      type: { required: false },
      control: "text",
    },
    readOnly: {
      description: "A boolean describing if the text input is read only",
      table: { defaultValue: { summary: "false" } },
      control: "boolean",
    },
    labelText: {
      description: "A string value labeling the text input",
      type: { required: true },
    },
    maxLength: {
      description:
        "A number describing the max length of input inside the text input",
      control: "number",
    },
    invalidCallback: {
      description:
        "A function that will check if the text input is invalid and return a single boolean",
      type: { required: true },
    },
    invalidText: {
      description: "A string describing an error if text is invalid",
      type: { required: true },
    },
    id: {
      description: "A string value representing the text input's id",
      type: { required: true },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "IcseTextInput is a text input component that allows the user to input text into a field and the developer to easily validate it.",
      },
    },
  },
};

const IcseTextInputStory = ({ ...args }) => {
  const [value, setValue] = useState("");
  const invalidCallback = function () {
    return value === "";
  };
  return (
    <IcseTextInput
      {...args}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      invalidCallback={invalidCallback}
    />
  );
};

export const Default = IcseTextInputStory.bind({});
