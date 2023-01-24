import {
  RenderForm,
  DynamicRender,
  IcseFormGroup,
  TitleGroup,
  IcseSubForm,
} from "icse-react-assets";
import { TextInput } from "@carbon/react";

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
