import { IcseToggle } from "icse-react-assets";
import { IcseTextInput } from "icse-react-assets";
import { useState } from "react";

export const IcseToggleExample = () => {
  return (
    <IcseToggle
      labelText="Example Toggle"
      id={"example-toggle"}
      onToggle={(toggleName, value) => console.log(toggleName, value)}
    />
  );
};

export const IcseTextInputExample = () => {
  const [value, setValue] = useState("");
  return (
    <IcseTextInput
      componentName="text-input"
      field="example"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      helperText="Example Helper Text"
      labelText="Example TextInput"
      invalidCallback={() => {
        return value === "";
      }}
      invalidText="TextInput cannot be empty"
    />
  );
};
