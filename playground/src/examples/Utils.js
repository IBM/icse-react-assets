import { RenderForm, DynamicRender } from "icse-react-assets";

const TestForm = (props) => {
  return <h1>hello {props.name}</h1>;
};

export const RenderFormExample = () => {
  return <div>{RenderForm(TestForm, { name: "world" })}</div>;
};

export const DynamicRenderExample = (props) => {
  return (
    <DynamicRender
      hide={props.show === false}
      show={<div>If you see this, show is true</div>}
    ></DynamicRender>
  );
};
