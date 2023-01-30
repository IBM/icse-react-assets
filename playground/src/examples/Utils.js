import {
  RenderForm,
  DynamicRender,
  IcseFormGroup,
  TitleGroup,
  IcseSubForm,
  SaveAddButton,
  IcseHeading,
  StatelessToggleForm,
} from "icse-react-assets";
import { TextInput } from "@carbon/react";
import { useState } from "react";

const TestForm = (props) => {
  return <h1>hello {props.name}</h1>;
};

export const RenderFormExample = () => {
  return <div>{RenderForm(TestForm, { name: "world" })}</div>;
};

export const DynamicRenderExample = () => {
  return (
    <DynamicRender
      hide={false}
      show={<div>If you see this, element is not hidden</div>}
    />
  );
};

export const TitleGroupExample = () => {
  return (
    <TitleGroup>
      <div>Example Title Here</div>
    </TitleGroup>
  );
};

export const IcseFormGroupExample = () => {
  return (
    <IcseFormGroup>
      <TextInput labelText="Example 1" id="example-1"></TextInput>
      <TextInput labelText="Example 2" id="example-2"></TextInput>
    </IcseFormGroup>
  );
};

export const IcseSubFormExample = () => {
  return (
    <IcseSubForm id="top-level-subform">
      <IcseSubForm formInSubForm id="form-in-subform">
        <TitleGroup>Hi</TitleGroup>
      </IcseSubForm>
    </IcseSubForm>
  );
};

export const IcseHeadingExample = () => {
  return (
    <IcseHeading
      name="Test Heading"
      type="subHeading"
      buttons={<SaveAddButton type="add" noDeleteButton />}
    />
  );
};

export const StatelessToggleFormExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <StatelessToggleForm
      name="Example Stateless Toggle Form"
      onIconClick={() => setOpen(!open)} // toggle open or closed
      hide={!open} // hidden if not open
      buttons={<SaveAddButton type="save" noDeleteButton />}
    >
      <TextInput id="example" labelText="Example Form" />
    </StatelessToggleForm>
  );
};
