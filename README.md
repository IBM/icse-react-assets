# icse-react-assets

## Getting Started

1. `git clone https://github.ibm.com/icse/icse-react-assets.git && cd icse-react-assets`
2. `npm run i-all`
3. Test a build with `npm update && npm run build`
4. Run `npm run dev` to run the playground environment to test any components

## Contribution Guidelines

1. Create a new branch for your component
2. Add the component within `./src/components`
3. Export the component in `index.js` as

```js
export { default as UnderConstruction } from "./components/UnderConstruction";
```

4. Run `npm update && npm run build` to build the library
5. Test your component in the playground. Navigate to `/playground/src/App.js` and render your component
6. Run `npm i-all` to npm install in both apps and make sure the library is updated within playground.
7. Run `npm run dev` to ensure your component renders & functions properly in the playground environment
8. Create a PR

## Documentation

### Modals

#### IcseModal

IcseModal is a component that allows the developer to create a fully customizable modal. IcseModal accepts several arguments:

- `primaryButtonText`: A string to override the text on the primary button of the modal,
- `secondaryButtonText`: A string to override the text on the secondary button of the modal,
- `primaryButtonDisabled`: A boolean value for if the primary button should be disabled,
- `danger`: A boolean value for if the primary button should be the type "danger" (red)
- `alert`: A boolean value for if the modal is displaying an alert,
- `heading`: A string value for the heading of the modal,
- `onRequestSubmit`: A function that defines what should occur when the modal is submitted,
- `onRequestClose`: A function that defines what should occur when the modal is closed,
- `id`: A string value of the modal's id,
- `open`: A boolean value of whether or not the modal is open
- `children`: Child nodes for displaying within the modal

```js
import { IcseModal } from "icse-react-assets";

export const IcseModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Test Modal</Button>
      <IcseModal
        name="Example ICSE Modal"
        open={open}
        onRequestSubmit={() => setOpen(false)} // set to close modal, add additional logic
        onRequestClose={() => setOpen(false)} // set to close modal, add additional logic
        primaryButtonText="Submit"
      >
        <div>ICSE Modal Content</div>
      </IcseModal>
    </div>
  );
};
```

#### UnsavedChangesModal

UnsavedChangesModal is a customized IcseModal that displays a message to the user if a form has unsaved changes or is missing required values. UnsavedChangesModal accepts several arguments:

- `name`: A string value for the name of the resource/form
- `modalOpen`: A boolean value for if the modal is open
- `onModalClose`:A function that defines what should occur when the modal is closed,
- `onModalSubmit`: A function that defines what should occur when the modal is submitted,
- `useDefaultUnsavedMessage`: A boolean value, if true (default), says a form is missing required values. Otherwise displays a message saying there are unsaved changes to a form

```js
import { UnsavedChangesModal } from "icse-react-assets";

export const UnsavedChangesModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Test Modal</Button>
      <UnsavedChangesModal
        name="Example Unsaved Changes Modal"
        modalOpen={open}
        onModalSubmit={() => setOpen(false)} // set to close modal, add additional logic
        onModalClose={() => setOpen(false)} // set to close modal, add additional logic
        useDefaultUnsavedMessage={false} // do not include to have "Missing Required Values"
      />
    </div>
  );
};
```

#### DeleteModal

DeleteModal is a customized IcseModal that displays a message to a user to confirm deletion of an object. DeleteModal accepts several arguments:

- `name`: A string value for the name of the resource/form
- `modalOpen`: A boolean value for if the modal is open
- `onModalClose`:A function that defines what should occur when the modal is closed,
- `onModalSubmit`: A function that defines what should occur when the modal is submitted

```js
import { DeleteModal } from "icse-react-assets";

export const DeleteModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Test Modal</Button>
      <DeleteModal
        name="Example Delete Modal"
        modalOpen={open}
        onModalSubmit={() => setOpen(false)} // set to close modal, add additional logic
        onModalClose={() => setOpen(false)} // set to close modal, add additional logic
      />
    </div>
  );
};
```

### MultiSelects

#### IcseMultiSelect

IcseMultiSelect is a component that allows the developer to filterable dropdown multiselect. IcseMultiSelect accepts several arguments:

- `id`: A string of the component's id,
- `className`: A string for inputting CSS styling classes (optional),
- `titleText`: A string value for the title of the multiselect,
- `invalid`: A boolean value for checking if any input values are invalid (defaults to `false`),
- `invalidText`: A string value that displays if there is invalid input (defaults to `"Invalid value"`),
- `initialSelectedItems`: An array of items that are initially selected,
- `onChange`: A function that defines what should occur when the selected items are changed,
- `items`: An array (string) of items to appear in the dropdown,
- `useTitleInItem`: A boolean value that will include the title in each item name if true (defaults to `false`),
- `label`: A string label value (optional),
- `disabled`: A boolean value that will disable this component if true (defaults to `false`)

```js
import { IcseMultiSelect } from "icse-react-assets";

export const IcseMultiSelectExample = () => {
  return (
    <div>
      <IcseMultiSelect
        id="test-icse"
        titleText="test"
        initialSelectedItems={["1"]}
        onChange={(event) => {
          console.log(event);
        }}
        items={["1", "2", "3", "4"]}
        label="hi"
      />
    </div>
  );
};
```

#### SshKeyMultiSelect

SshKeyMultiSelect is a customized IcseMultiSelect which can be used to select from a list of SSH keys. SshKeyMultiSelect accepts several arguments:

- `id`: A string of the component's id,
- `onChange`: A function that defines what should occur when the selected items are changed,
- `sshKeys`: A array (string) of SSH keys,
- `initialSelectedItems`: An array of SSH keys that are initially selected

```js
import { SshKeyMultiSelect } from "icse-react-assets";

export const SshKeyMultiSelectExample = () => {
  return (
    <div>
      <SshKeyMultiSelect
        id="test"
        sshKeys={["a", "b", "c"]}
        onChange={(selectedItems) => {
          console.log(selectedItems);
        }}
        initialSelectedItems={["a"]}
      />
    </div>
  );
};
```

#### SecurityGroupMultiSelect

SecurityGroupMultiSelect is a customized IcseMultiSelect which can be used to select from a list of security groups. SecurityGroupMultiSelect accepts several arguments:

- `id`: A string of the component's id,
- `className`: A string for inputting CSS styling classes (optional),
- `initialSelectedItems`: An array of items that are initially selected,
- `vpc_name`: A string for the VPC which the security groups belong to (optional),
- `onChange`: A function that defines what should occur when the selected items are changed,
- `label`: (optional) A string label value (defaults to `"Select Security Groups"`),
- `disabled`: A boolean value that will disable this component if true (defaults to `false`),
- `securityGroups`: An object which contains the security groups for the given VPC,
- `invalid`: A boolean value for checking if any security group input values are invalid (defaults to `false`)

```js
import { SecurityGroupMultiSelect } from "icse-react-assets";

export const SecurityGroupMultiSelectExample = () => {
  return (
    <div>
      <SecurityGroupMultiSelect
        id="test"
        initialSelectedItems={[]}
        vpc_name="test"
        onChange={(selectedItems) => {
          console.log(selectedItems);
        }}
        securityGroups={{
          test: ["one", "two"],
        }}
      />
    </div>
  );
};
```

#### SubnetMultiSelect

SubnetMultiSelect is a customized IcseMultiSelect which can be used to select from a list of subnets. SubnetMultiSelect accepts several arguments:

- `id`: A string of the component's id,
- `className`: A string for inputting CSS styling classes (optional),
- `vpc_name`: (optional) A string for the VPC which the subnets belong to (defaults to `""`),
- `subnets`: An object which contains the subnets for the given VPC,
- `disabled`: A boolean value that will disable this component if true (defaults to `false`),
- `name`: A string value for name of component (defaults to `"subnet_names"`)
- `label`: (optional) A string label value (defaults to `"Subnets"`),
- `initialSelectedItems`: An array of items that are initially selected (defaults to `[]`),
- `onChange`: A function that defines what should occur when the selected items are changed

```js
import { SubnetMultiSelect } from "icse-react-assets";

export const SubnetMultiSelectExample = () => {
  return (
    <div>
      <SubnetMultiSelect
        id="test"
        subnets={{
          test: ["a", "b", " c"],
        }}
        vpc_name="test"
        onChange={(selectedItems) => {
          console.log(selectedItems);
        }}
      />
    </div>
  );
};
```

#### VpcListMultiSelect

VpcListMultiSelect is a customized IcseMultiSelect which can be used to select from a list of VPCs. VpcListMultiSelect accepts several arguments:

- `invalid`: A boolean value for checking if any VPC input values are invalid (defaults to `false`),
- `id`: A string of the component's id,
- `onChange`: A function that defines what should occur when the selected items are changed,
- `initialSelectedItems`: An array of items that are initially selected (defaults to `[]`),
- `vpcList`: An array (string) of VPCs to select from,
- `titleText`: A string for the title of the multiselect (defaults to `"VPCS"`)

```js
import { VpcListMultiSelect } from "icse-react-assets";

export const VpcListMultiSelectExample = () => {
  return (
    <div>
      <VpcListMultiSelect
        id="test"
        onChange={(selectedItems) => {
          console.log(selectedItems);
        }}
        vpcList={["a", "b"]}
      />
    </div>
  );
};
```

### Utils

#### RenderForm

RenderForm is a function that allows for dynamic passing of components and props, allowing users to quickly create dynamic rendering schemes. Render form accepts two arguments:

- `form` a react node,
- `formProps` an object of arbitrary props to pass to the form

```js
import { RenderForm } from "icse-react-assets";

const TestForm = (props) => {
  return <h1>hello {props.name}</h1>;
};

const RenderFormExample = (props) => {
  return <div>{RenderForm(TestForm, { name: "world" })}</div>;
};

export default RenderFormExample;
```

#### DynamicRender

DynamicRender is a function that allows for components to be dynamically rendered. DynamicRender accepts two arguments:

- `hide`: A boolean value for if the component should be hidden,
- `show`: The component to show when hide is false

```js
import { DynamicRender } from "icse-react-assets";

export const DynamicRenderExample = () => {
  return (
    <DynamicRender
      hide={false}
      show={<div>If you see this, element is not hidden</div>}
    />
  );
};
```

#### TitleGroup

TitleGroup is a component that creates a vertically aligned, full-width title. TitleGroup accepts two arguments:

- `hide`: A boolean value for if the title group should have a margin bottom added
- `children` Child nodes to be displayed within the title group

```js
import { TitleGroup } from "icse-react-assets";

export const TitleGroupExample = () => {
  return (
    <TitleGroup>
      <div>Example Title Here</div>
    </TitleGroup>
  );
};
```

#### IcseFormGroup

IcseFormGroup is a component that creates a row of evenly spaced child components. IcseFormGroup accepts three arguments:

- `noMarginBottom`: A boolean value for if the form group should have a margin applied on the bottom (defaults to false),
- `className`: String of space separated class names to add to the group,
- `children`: Child nodes to be displayed within the row

```js
import { IcseFormGroup } from "icse-react-assets";

export const IcseFormGroupExample = () => {
  return (
    <IcseFormGroup>
      <TextInput labelText="Example 1" id="example-1"></TextInput>
      <TextInput labelText="Example 2" id="example-2"></TextInput>
    </IcseFormGroup>
  );
};
```

#### IcseSubForm

IcseSubForm is a component that houses a form and applies a background and padding to surround the form elements. IcseFormGroup accepts four arguments:

- `id`: A string that represents a unique id for the subForm,
- `formInSubForm`: A boolean that represents if this subform is within another subform, which changes the background to white (defaults to false),
- `className`: A string of classnames to be applied to the subForm,
- `children`: Child nodes to be displayed within the subForm

```js
import { IcseSubForm } from "icse-react-assets";

export const IcseSubFormExample = () => {
  return (
    <IcseSubForm id="top-level-subform">
      <IcseSubForm formInSubForm id="form-in-subform">
        <div>Hi</div>
      </IcseSubForm>
    </IcseSubForm>
  );
};
```

### Tooltips

#### IcseToolTip

`IcseToolTip` is a component that allows the developer to render a tooltip around another component or input field. IcseToolTip accepts several arguments:

- `content`: A string containing brief, supplemental information for the component it is tied to.
- `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip.
- `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.

```js
import { TitleGroup, IcseToolTip } from "icse-react-assets";

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
```

#### ToolTipWrapper

`ToolTipWrapper` is a dynamic wrapper that allows users to dynamically wrap any components with a tooltip. ToolTipWrapper accepts several arguments:

- `tooltip`: An object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `isModal`: A boolean value that specifies if a tooltip is being wrapped around a component within a modal.
- `id`: A string specifying a custom id for the input.
- `labelText`: A string that defines the name of the wrapped component.
- `noLabelText`: A boolean value, if true, hides label text for headers with tooltips _(is false by default)_.
- `children`: Child components to be wrapped within the tooltip.
- `innerForm`: React node for which the tooltip is rendered. `innerForm` will not be rendered if `children` are passed to the component.

```js
import { ToolTipWrapper } from "icse-react-assets";
import { TextInput, TextArea } from "@carbon/react";

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
```

#### DynamicToolTipWrapper

DynamicToolTipWrapper is a variation of ToolTipWrapper, that makes the tooltip object optional, but still allows you to pass props through to custom components and forms. DynamicToolTipWrapper accepts several arguments:

- `tooltip`:An optional object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
- `children`: Child components to be passed or wrapped within the tooltip.
- `innerForm`: React node for which the tooltip is rendered. `innerForm` will not be rendered if `children` are passed to the component.

```js
import { DynamicToolTipWrapper } from "icse-react-assets";
import { TextArea } from "@carbon/react";

class ExampleComponent extends React.Component {
  render() {
    return <h2>Hello World</h2>;
  }
}

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
```
