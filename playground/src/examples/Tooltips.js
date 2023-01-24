import "../App.css";
import {
  TitleGroup,
  IcseToolTip,
  ToolTipWrapper,
  DynamicToolTipWrapper,
} from "icse-react-assets";
import { TextInput, TextArea } from "@carbon/react";
import React from "react";

export const IcseToolTipExample = (props) => {
  return (
    <div>
      <TitleGroup>
        Hello World
        <IcseToolTip
          content="The world says hello!"
          link="https://savetheearth.org/"
          align="bottom"
        />
      </TitleGroup>
    </div>
  );
};

export const ToolTipWrapperExample = (props) => {
  return (
    <div>
      <ToolTipWrapper
        tooltip={{
          content:
            "Password must be at least 15 characters, contain one numeric, one uppercase, and one lowercase character.",
          align: "bottom-left",
        }}
        id="password"
        labelText="Password"
        innerForm={TextInput.PasswordInput}
      />
    </div>
  );
};

export const ToolTipWrapperWithChildrenExample = (props) => {
  return (
    <div>
      <ToolTipWrapper
        tooltip={{
          content: "Write your message for the day here.",
          align: "bottom-left",
        }}
        id="messageOfTheDay"
        labelText="Message of the Day"
      >
        <TextArea
          id="messageOfTheDay"
          labelText="Message of the Day"
          helperText="Enter your desired message here."
        />
      </ToolTipWrapper>
    </div>
  );
};

const ExampleComponent = (props) => {
  return <h2>Hello World</h2>;
};

export const DynamicToolTipWrapperExample = (props) => {
  return (
    <div>
      <DynamicToolTipWrapper
        tooltip={{
          content: "The world says hello!",
          link: "https://savetheearth.org/",
        }}
        id="helloWorld"
        innerForm={ExampleComponent}
        noLabelText
      />
    </div>
  );
};

export const DynamicToolTipWrapperWithChildrenExample = (props) => {
  return (
    <div>
      <DynamicToolTipWrapper
        tooltip={{
          content: "Write your message for the day here.",
          align: "bottom-left",
        }}
        id="messageOfTheDay"
        labelText="Message of the Day"
      >
        <TextArea
          id="messageOfTheDay"
          labelText="Message of the Day"
          helperText="Enter your desired message here."
        />
      </DynamicToolTipWrapper>
    </div>
  );
};

export const DynamicToolTipWrapperWithoutToolTipExample = (props) => {
  return (
    <div>
      <DynamicToolTipWrapper
        id="messageOfTheDay"
        labelText="Message of the Day"
      >
        <TextArea
          id="messageOfTheDay"
          labelText="Message of the Day"
          helperText="Enter your desired message here."
        />
      </DynamicToolTipWrapper>
    </div>
  );
};
