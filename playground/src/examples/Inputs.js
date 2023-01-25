import { IcseToggle } from "icse-react-assets";

export const IcseToggleExample = () => {
  return (
    <IcseToggle
      labelText="Example Toggle"
      id={"example-toggle"}
      onToggle={(toggleName, value) => console.log(toggleName, value)}
    />
  );
};
