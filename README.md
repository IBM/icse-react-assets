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
<<<<<<< HEAD
=======

## Documentation

### EmptyResourceTile

The EmptyResourceTile component is the body of a resource page which has no resources yet. EmptyResourceTile takes two props:

- `name`: The string value for the name of the resource.
- `showIfEmpty`: A boolean or array value which shows the tile only if false or if the given array is empty (indicating no resources).

```js
import EmptyResourceTile from "icse-react-assets";

export const EmptyResourceTileExample = () => {
  return <EmptyResourceTile name="Resource Name" showIfEmpty={false} />;
};
```

### UnderConstruction

UnderConstruction is a component for the body of a page which is navigable but not implemented.

UnderConstruction takes no props.

```js
import { UnderConstruction } from "icse-react-assets";

export const UnderConstructionExample = () => {
  return <UnderConstruction />;
};
```

### StatefulTabPanel

StatefulTabPanel is a component that creates a tab panel with two tabs: Create and About. StatefulTabPanel takes several props:

- `name`: A string value for the heading text in the tab panel,
- `subHeading`: A boolean value for if the heading is a subheading (h5) or heading (h4), defaults to "heading" (h4)
- `className`: A string list of additional classNames to add to the component
- `tooltip`: An object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `hideFormTitleButton`: A boolean value that describes if the button in the form title should be hidden or not
- `onClick`: A function that describes what the "add" button should do when clicked
- `shouldDisableSave`: A function that describes if the "save" button should be disabled on the page (defaults to false)
- `about`: A react node that should be displayed in the "About" tab. Defaults to the `<UnderConstruction />` component
- `form`: A react node that should be displayed in the "Create" tab
- `hideAbout`: A boolean value for if the "About" tab should be hidden (defaults to false)
- `hasBuiltInHeading`: A boolean value for if the form has a heading built into it (defaults to false)

```js
import { StatefulTabPanel, AppIdKeyForm } from "icse-react-assets";

const ExampleAboutComponent = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <p>This is an example about document</p>
    </div>
  );
};

export const StatefulTabPanelExample = () => {
  return (
    <StatefulTabPanel
      name="Example Tab Panel"
      type="heading"
      about={<ExampleAboutComponent />}
      form={
        <AppIdKeyForm
          data={{ key_name: "test-key", keys: ["foo", "bar"] }}
          invalidCallback={() => {
            return false;
          }}
          invalidTextCallback={() => {
            return "invalid";
          }}
        />
      }
    />
  );
};
```

### ToggleForm

ToggleForm is a wrapper of a StatefulTabPanel and a collapsible form which allows its children to be collapsed underneath it. ToggleForm accepts several arguments:

- `name`: A string that defines the name of the toggle form
- `hideName` A boolean that defines if a heading of the name above the toggle form should be hidden (defaults to false)
- `onDelete`: A function that defines what occurs on clicking the delete button
- `onSave`: A function that defines what occurs on clicking the save button
- `onShowToggle`: A function that defines what happens when the forms are shown
- `index`: Index of the form (a number), defaults to 0
- `hide`: A boolean that determines if the form is hidden or not (defaults to true)
- `submissionFieldName`: A string value of the field to save, should be similar to the form name
- `propsMatchState`: A function that returns true if props match component's state
- `disableSave`: A function that returns true if save should be disabled
- `forceOpen`: A function that returns true if the form should be forced open (defaults to a function that returns false)
- `deleteDisabled`: A function that returns true if the delete button should be disabled (defaults to a function that returns false)
- `disableDeleteMessage`: A string message that should be shown when hovering over a disabled delete button
- `type`: Type of the form ("subForm" or "formInSubForm") defaults to "subForm"
- `nullRef`: A boolean that defines if there should be no form ref (defaults to false)
- `innerFormProps`: Props object to add to the innerForm,
- `noDeleteButton`: A boolean value for if there is no delete button (defaults to false)
- `noSaveButton`: A boolean value for if there is no save button (defaults to false)
- `useAddButton`: A boolean value for if the add button should be used instead of the edit button (defaults to false)
- `tabPanel`: An object with the following properties
  - `name`: String name of the tab panel that should be displayed in the heading
  - `hideFormTitleButton`: A boolean value that hides the button in the tab panel title if true

```js
import { AtrackerForm, ToggleForm } from "icse-react-assets";
import { deepEqual } from "lazy-z";
import React from "react";

function onSave(stateData, componentProps) {
  console.log(stateData, componentProps);
}

function propsMatchState(stateData, componentProps) {
  return deepEqual(stateData, componentProps?.data); // dummy example, will not work as stateData is not saved
}

function disableSave(stateData, componentProps) {
  return propsMatchState(stateData, componentProps); // dummy example: disable save if no changes - returns false in this example
}

export const ToggleFormExample = () => {
  return (
    <ToggleForm
      name={"icse-atracker"}
      hideName
      submissionFieldName="atracker"
      innerForm={AtrackerForm}
      innerFormProps={{
        prefix: "icse",
        data: {
          resource_group: "default",
          collector_bucket_name: "default_bucket",
          atracker_key: "default_key",
          add_route: false,
        },
        resourceGroups: ["default", "foo", "bar"],
        cosKeys: ["default_key", "foo", "bar"],
        cosBuckets: ["default_bucket", "foo", "bar"],
      }}
      onSave={onSave}
      propsMatchState={propsMatchState}
      disableSave={disableSave}
      noDeleteButton
      tabPanel={{
        name: "Activity Tracker",
      }}
    />
  );
};
```

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

#### FormModal

FormModal is a modal component that wraps a form and performs an action on submit. It expects a stateful child component (such as a form). FormModal accepts four arguments:

- `name`: A string of the name of the form modal,
- `onRequestClose`: A callback function which runs when the user requests modal close,
- `onRequestSubmit`: A callback function which runs when the user requests to submit,
- `show`: A boolean value which shows the modal when true and closes when false,
- `children`: Child nodes rendered within the modal.

```js
import { FormModal } from "icse-react-assets";

class ExampleStatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <UnderConstruction />;
  }
}

export const FormModalExample = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Show Form Modal Example
      </Button>
      <FormModal
        name={"This is an example form modal"}
        show={show}
        onRequestClose={() => {
          setShow(false);
        }}
        onRequestSubmit={() => {
          setShow(false);
        }}
      >
        <ExampleStatefulComponent />
      </FormModal>
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

IcseMultiSelect is a component that allows the developer to create a filterable dropdown multiselect. IcseMultiSelect accepts several arguments:

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

#### IcseHeading

IcseHeading is a component that houses a dynamic heading for a page and will align any buttons passed to it to the right side of the page. IcseHeading accepts several arguments:

- `name`: A string value which defines the text in the heading,
- `type`: The type of the heading, can be `heading` (h4), `subHeading` (h5), or `p`. Defaults to `heading`
- `tooltip`: An object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `buttons`: A react node that contains any buttons that should be displayed in the heading,
- `className`: A string of classNames that are extra styling to add to the heading,

```js
import { IcseSubForm, SaveAddButton } from "icse-react-assets";

export const IcseHeadingExample = () => {
  return (
    <IcseHeading
      name="Test Heading"
      type="subHeading"
      buttons={<SaveAddButton type="add" noDeleteButton />}
    />
  );
};
```

#### StatelessToggleForm

StatelessToggleForm is a collapsible form which allows its children to be collapsed underneath its heading. StatelessToggleForm accepts several arguments:

- `children`: A react node containing the children that should be rendered when the the form is not hidden. This is the form contained within.
- `hide`: A boolean value defining if the children are hidden or not (defaults to `true`),
- `iconType`: A string value defining the type of the icon, options are `add` and `edit`. Defaults to `edit`,
- `onIconClick`: A function that defines what happens when the icon is clicked,
- `subHeading`: A boolean defining if the heading is a subHeading or not (defaults to `false`),
- `name`: A string value for the name of the heading,
- `buttons`: A react node that contains the buttons to be shown in the heading,
- `toggleFormTitle`: A boolean value defining if this is a title of a toggleForm (defaults to `false`),
- `alwaysShowButtons`: A boolean value defining if the buttons should always be shown or only shown if the form is opened (defaults to `false`)

```js
import { StatelessToggleForm } from "icse-react-assets";

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

- `tooltip`: An optional object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string containing a custom hyperlink to be displayed with the content of the tooltip.
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

### Dropdowns

#### IcseSelect

IcseSelect is a component that allows the developer to create a customized Carbon React Select component. IcseSelect accepts several arguments:

- `value`: The current value that is saved by the Select (can be null),
- `formName`: String for the form which the IcseSelect belongs to,
- `className`: A string for inputting CSS styling classes (optional),
- `disabled`: A boolean value that will disable this component if true (defaults to `false`),
- `invalid`: A boolean value for checking if any input values are invalid (defaults to `false`),
- `invalidText`: A string value that displays if there is invalid input (defaults to `"Invalid Selection"`),
- `disableInvalid`: A boolean value that will disable invalid checking if true (defaults to `false`),
- `readOnly`: A boolean value that will set the component to "read-only" if true (defaults to `false`),
- `groups`: An array of objecs to select from (defaults to `[]`),
- `debug`: An boolean value for setting to debug mode (defaults to `false`),
- `handleInputChange`: A function which determines what happens when the selected input is changed,
- `labelText`: A string for the label text of the component,
- `tooltip`: An object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to,
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip,
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
- `name`: A string for the name of the component

```js
import { IcseSelect } from "icse-react-assets";

export const IcseSelectExample = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <IcseSelect
        formName="playground"
        name="icseSelect"
        disabled={false}
        disableInvalid={true}
        groups={["test", "hello", "1"]}
        handleInputChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        labelText="ICSE Select"
      />
    </div>
  );
};
```

#### FetchSelect

FetchSelect is a customized IcseSelect component which allows users to create a dropdown with the results of a fetch api call. FetchSelect accepts several arguments:

- `handleInputChange`: A function which determines what happens when the selected input is changed,
- `className`: A string for inputting CSS styling classes (optional),
- `value`: The current value that is saved by the FetchSelect,
- `groups`: An array of objects to select from,
- `url`: String value for the endpoint of the fetch call,
- `onReturnFunction`: Function which accepts one parameter (data) and is called before data is set to the state,
- `filter`: Function which accepts one parameter (array) and can be used to filter the groups (array) parameter,
- `name`: The name of the component,
- `formName`: String for the form which the FetchSelect belongs to

```js
import { FetchSelect } from "icse-react-assets";

export const FetchSelectExample = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <FetchSelect
        labelText="Fetch"
        name="Fetch Select"
        apiEndpoint="/my/api/endpoint"
        handleInputChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        formName="playground"
      />
    </div>
  );
};
```

#### IcseNumberSelect

IcseNumberSelect is a customized IcseSelect component for selecting number values. IcseNumberSelect accepts several arguments:

- `min`: A number value for the minimum selectable value (defaults to `1`),
- `max`: A number value for the maximum selectable value (defaults to `10`),
- `value`: The current value that is saved by the IcseNumberSelect,
- `groups`: An array of objects to select from,
- `className`: A string for inputting CSS styling classes (optional),
- `invalid`: A boolean value for checking if any input values are invalid (defaults to `false`),
- `invalidText`: A string value that displays if there is invalid input,
- `tooltip`: An object that contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to,
  - `link`: An optional string contaning a custom hyperlink to be displayed with the content of the tooltip,
  - `align`: An optional string for tooltip alignment. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `labelText`: A string for the label text of the component,
- `isModal`: A boolean value that specifies if the IcseNumberSelect is a component within a modal,
- `name`: (optional) The name of the component (will default to `"Icse Number Select"`),
- `formName`: String for the form which the IcseNumberSelect belongs to

```js
import { IcseNumberSelect } from "icse-react-assets";

export const IcseNumberSelectExample = () => {
  const [numValue, setNumValue] = useState(1);
  return (
    <div>
      <IcseNumberSelect
        formName="playground"
        max={20}
        labelText="ICSE Number Select"
        handleInputChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        tooltip={{
          content: "Test",
          link: "www.test.test",
          align: "top",
        }}
      />
    </div>
  );
};
```

#### EntitlementSelect

EntitlementSelect is a customized IcseSelect for selecting entitlements related to the IBM Cloud Pak for Data platform. The default selectable values of EntitlementSelect are `["cloud_pak", "null"]`. EntitlementSelect accepts several arguments:

- `value`: The current value that is saved by the EntitlementSelect (can be null),
- `handleInputChange`: A function which determines what happens when the selected input is changed,
- `formName`: String for the form which the EntitlementSelect belongs to,
- `name`: The name of the component

```js
import { EntitlementSelect } from "icse-react-assets";

export const EntitlementSelectExample = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <EntitlementSelect
        component="icseEntitlementSelect"
        handleInputChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
        name="Entitlement"
        formName="playground"
      />
    </div>
  );
};
```

### Inputs

#### IcseToggle

IcseToggle is a toggle component that can be used to allow a user to toggle a true/false value. IcseToggle accepts several props:

- `useOnOff`: A boolean value to replace the toggle labels with "on/off" instead of true or false (defaults to false)
- `className`: A string list of classNames to apply to the toggle,
- `labelText`: A string value labeling the toggle,
- `id`: A string representing the toggle's id,
- `toggleFieldName`: A string value representing the name of a state value that would be toggled, if different than the labelText
- `defaultToggled`: A boolean value which is which way the toggle is toggled by default (defaults to false),
- `disabled`: A boolean value which describes if the toggle is disabled (defaults to false)
- `tooltip`: An optional object to add a tooltip to the toggle. It contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string containing a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `onToggle`: A function that will be called each time the component is toggled,
- `isModal`: A boolean that describes if the component is within a modal (defaults to false)

```js
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
```

#### IcseTextInput

IcseTextInput is a text input component that allows the user to input text into a field and the developer to easily validate it. IcseTextInput accepts several arguments:

- `disabled`: A boolean value for if the TextInput is disabled (defaults to false),
- `componentName`: A string name of the component,
- `placeholder`: An optional placeholder string to display describing the input,
- `field`: A string value of the field the input is for,
- `value`: A string value of the data inside the text input,
- `onChange`: A function that is called each time the text input is updated,
- `helperText`: A string value for helper text underneath the text input,
- `tooltip`: An optional object to add a tooltip to the text input. It contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string containing a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `className`: A string of classNames that can be added to the text input,
- `readOnly`: A boolean describing if the text input is read only,
- `labelText`: A string value labeling the text input,
- `maxLength`: A number describing the max length of input inside the text input,
- `invalidCallback`: A function that will check if the text input is invalid and return a single boolean,
- `invalidText`: A string describing an error if text is invalid,
- `id`: A string value representing the text input's id

```js
import { IcseTextInput } from "icse-react-assets";

export const IcseTextInputExample = () => {
  const [value, setValue] = useState("");
  return (
    <IcseTextInput
      componentName="text-input"
      field="example"
      id="example-text-input"
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
```

#### IcseNameInput

IcseNameInput is an extension of IcseTextInput that adds additional functionality to handle resource names as an input. IcseNameInput takes several arguments:

- `id`: A string representing the id of the input,
- `className`: A string of classnames that can add styling to the input,
- `value`: A string value of the data inside the name input,
- `onChange`: A function that is called each time the value of the name input is updated,
- `componentName`: A string name of the component,
- `tooltip`: An optional object to add a tooltip to the name input. It contains the following parameters:
  - `content`: A string containing brief, supplemental information for the component it is tied to.
  - `link`: An optional string containing a custom hyperlink to be displayed with the content of the tooltip.
  - `align`: An optional string for tooltip alignment _(`align="top"` default value if no align prop is included)_. For all possible alignment directions refer to carbon components.
  - `alignModal`: An optional string used to dynamically alternate direction for tooltip text when rendered in modals.
- `hideHelperText`: A boolean to hide the helper text on the input (defaults to false),
- `useData`: A boolean describing if only the name existing should be checked (defaults to false),
- `helperTextCallback`: A function which returns helper text for the name input,
- `invalidCallback`: A function that will check if the text input is invalid and return a single boolean,
- `invalidText`: A string describing an error if text is invalid,

```js
import { IcseNameInput } from "icse-react-assets";

export const IcseNameInputExample = () => {
  const [value, setValue] = useState("");
  return (
    <IcseNameInput
      componentName="name-input"
      id="example-name-input"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      helperTextCallback={() => {
        return `Composed Name: prefix-${value}`; // helper text does not have to be static
      }}
      invalidCallback={() => {
        return value === "";
      }}
      invalidText="NameInput cannot be empty"
      tooltip={{ content: "Optional tooltip example", align: "bottom-left" }}
    />
  );
};
```

### Buttons

#### SaveAddButton

SaveAddButton is a function that allows for dynamic passing of components and props, allowing users to quickly create either an add button or a button that allows the user to create and save a new resource. SaveAddButton accepts 5 arguments:

- hoverText: A string that is displayed when the cursor is hovering over the button.
- type: String, either save or add. Determines the appearance and functionality of the button. Defaults to add.
- onClick: A function that is called when the button is clicked
- className: className for the object to determin any specific styling in css
- disabled: determines if save button is disabled. defaults to false.

```js
<SaveAddButton
  hoverText="SaveAddButton Hover Text"
  type="add"
  className="icseButtonClass"
  onClick={(event) => {
    console.log(event);
  }}
  disabled={false}
/>
```

#### EditCloseIcon

EditCloseIcon is a function that allows for dynamic passing of components and props, allowing users to quickly create an edit or close button with a popover window. EditCloseIcon accepts 4 arguments:

- hoverText: A string that is displayed when the cursor is hovering over the button.
- type: String, either edit or add. Determines the appearance and functionality of the button.
- onClick: A function that is called when the button is clicked
- disabled: determines if save button is disabled.
- open: toggle is open, defaults to false.

```js
<EditCloseIcon
  hoverText="SaveAddButton Hover Text"
  type="edit"
  disabled={false}
  open={false}
/>
```

#### DeleteButton

DeleteButton is a function that allows for dynamic passing of components and props, allowing users to quikly create a delete button. DeleteButton accepts 4 arguments:

- disabled: Boolean determines if delete button is disabled. Defaults to false.
- onClick: A function that is called when the button is clicked.
- name: String determines the className.

```js
<DeleteButton
  name="icseButtonClass"
  onClick={(event) => {
    console.log(event);
  }}
  disabled={false}
/>
```

#### UpDownButtons

UpDownButtons is a function that allows for dynamic passing of components and props, allowing users to quickly create buttons that allow for the opening or closing of a card, with arrows that point down or up respectivly. UpDownButtons accepts 5 arguments:

- disableUp: Boolean determines if the up button is disabled. Defaults to false.
- disableDown: Boolean determines if the down button is disabled. Defaults to false.
- name: String determines the className of the button.
- handleUp: Function to handle when the up button is pressed.
- handleDown: Function to handle when the down button is pressed.

```js
<UpDownButtons
  name="icseButtonClass"
  handleUp={(event) => {
    console.log(event);
  }}
  handleDown={(event) => {
    console.log(event);
  }}
  disableUp={false}
  disableDown={false}
/>
```

### Forms

#### AppIdKeyForm

AppIdKeyForm is a form with one text input that provides functionality for adding a new App ID key to the existing list of keys. AppIdKeyForm accepts several arguments:

- `data`: An object containing (at the minimum) the key name (`key_name` defaults to `""`) to display as the value in the IcseTextInput
- `invalidCallback`: A function to determine if the value supplied is invalid and returns a single boolean
- `invalidTextCallback`: A function to determine the invalid text displayed to the user and returns the string to display

```js
import { AppIdKeyForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData, componentProps) {
  return (
    !validName(stateData.key_name) ||
    contains(componentProps.data.keys, stateData.key_name)
  );
}

function invalidTextCallback(stateData, componentProps) {
  return contains(componentProps.data.keys, stateData.key_name)
    ? `Key name ${stateData.key_name} already in use.`
    : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const AppIdKeyFormExample = () => {
  return (
    <AppIdKeyForm
      data={{ key_name: "test-key", keys: ["foo", "bar"] }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
```

#### EncryptionKeyForm

EncryptionKeyForm is a form that provides functionality for adding a new Encryption key to the existing list of keys. EncryptionKeyForm accepts several arguments:

- `data`: An object containing the following:

  - `name`: A string specifying the name of the Encryption key
  - `interval_month`: An integer specifying the rotation interval in months
  - `root_key`: A boolean for setting the Encryption key as a Root key
  - `force_delete`: A boolean for allowing the forced deletion of a KMS key
  - The `data` object defaults to the following:
    ```js
    data: {
      name: "",
      interval_month: 12,
      root_key: false,
      force_delete: false,
      }
    ```

- `invalidCallback`: A function to determine if the value supplied is invalid and returns a single boolean
- `invalidTextCallback`: A function to determine the invalid text displayed to the user and returns the string to display

```js
import { EncryptionKeyForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
  return contains(["foo", "bar"], stateData.name)
    ? `Key name ${stateData.name} already in use.`
    : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const EncryptionKeyFormExample = () => {
  return (
    <EncryptionKeyForm
      data={{
        name: "test-encryption-key",
        interval_month: 12,
        root_key: false,
        force_delete: false,
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
```

#### KeyManagementForm

KeyManagementForm is a form that provides functionality for adding a key management service used to create, import, rotate, and manage encryption keys. KeyManagementForm accepts several arguments:

- `data`: An object containing the following:

  - `use_hs_crypto`: A boolean specifying which key management solution to use (Key Protect or HPCS)
  - `use_data`: A boolean specifying if an existing key management instance should be used (defaults to `true` if HPCS solution is selected)
  - `name`: A string specifying the name of the Key Management service,
  - `resource_group`: A string value of the resource group selected
  - The `data` object defaults to the following:
    ```js
     data: {
       use_hs_crypto: false,
       use_data: false,
       name: "test-key-protect",
       resource_group: "service-rg",
       }
    ```

- `resourceGroups`: An array of resource groups to select from a dropdown
- `invalidCallback`: A function to determine if the value supplied is invalid and returns a single boolean
- `invalidTextCallback`: A function to determine the invalid text displayed to the user and returns the string to display

```js
import { KeyManagementForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
  return contains(["foo", "bar"], stateData.name)
    ? `Key name ${stateData.name} already in use.`
    : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const KeyManagementFormExample = () => {
  return (
    <KeyManagementForm
      data={{
        use_hs_crypto: false,
        use_data: false,
        name: "test-key-protect",
        resource_group: "service-rg",
      }}
      resourceGroups={["service-rg", "management-rg", "workload-rg"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
```

#### AtrackerForm

AtrackerForm is a form component that provides functionality for editing an Activity Tracker instance. AtrackerForm accepts several arguments:

- `data`: {
  `collector_bucket_name`: A string value of the cos bucket name,
  `atracker_key`: A string value of the cos key name,
  `resource_group`: A string value of the resource group,
  `add_route`: A boolean value that determines if a route is to be added (defaults to false)
  }
- prefix: A string value for the prefix (16 characters max)
- cosKeys: An array of cos keys to select from
- cosBuckets: An array of cos buckets to select from
- isModal: A boolean of whether or not the form is a modal or not

```js
import { AtrackerForm } from "icse-react-assets";

export const AtrackerFormExample = () => {
  return (
    <AtrackerForm
      data={{
        resource_group: "default",
        cos_bucket: "default_bucket",
        cos_key: "default_key",
        add_route: false,
      }}
      resourceGroups={["default", "foo", "bar"]}
      cosBuckets={["default_bucket", "foo"]}
      cosKeys={["default_key", "bar"]}
      prefix="icse"
    />
  );
};
```

#### SccForm

SccForm is a form component that provides functionality for enabling/editing an Security Compliance Center instance. SccForm accepts several arguments:

- `data`: An object containing the following:
  - `enable_scc`: A boolean of whether or not an SCC instance is created (required)
  - `collector_description`: A string description of the SCC collector
  - `is_public`: A boolean determining if the collector endpoint is accessible on a public network
  - `location_id`: A string determining the location (`us`, `eu`, or `uk`)
  - `scope_description`: A string description of the scope
  - `scope_name`: A string for your scope name
  - `collector_passphrase`: A string passphrase for the collector
- `scopeNameRegex`: A regular expression to determine invalid status for `scope_name` (required)
- `descriptionRegex`: A regular expression to determine invalid status for descriptions (required)

```js
import { SccForm } from "icse-react-assets";

export const SccFormExample = () => {
  return (
    <SccForm
      data={{
        enable_scc: true,
        collector_description: "test collector description",
        is_public: true,
        scope_description: "test scope description",
        scope_name: "test-scope-name",
        collector_passphrase: "test-passphrase",
        location_id: "us",
      }}
      scopeNameRegex={/^[A-z]([a-z0-9-]*[a-z0-9])?$/i}
      descriptionRegex={/^[A-z][a-zA-Z0-9-\._,\s]*$/i}
    />
  );
};
```

#### SecretsManagerForm

SecretsManagerForm is a form component that provides functionality for editing an Secrets Manager instance. SecretsManagerForm accepts several arguments:

- `data`: {
  `name`: A string value for the name of the secrets manager instance,
  `resource_group`: A string value of the resource group,
  `kms_key_name`: A string value of the KMS Key
  }
- `resourceGroups`: An array (string) of resource groups
- `encryptionKeys`: An array (string) of KMS keys
- `invalidCallback`: A function to determine if the value supplied is invalid and returns a single boolean
- `invalidTextCallback`: A function to determine the invalid text displayed to the user and returns the string to display

```js
import { SecretsManagerForm } from "icse-react-assets";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name);
}

function invalidTextCallback(stateData) {
  return !validName(stateData.name)
    ? `Name ${stateData.name} is invalid.`
    : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

export const SecretsManagerExample = () => {
  return (
    <SecretsManagerForm
      data={{
        name: "Example",
        resource_group: "default",
        kms_key_name: "key1",
      }}
      resourceGroups={["default_group", "foo", "bar"]}
      encryptionKeys={["default_key", "foo"]}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
    />
  );
};
```
#### TeleportClaimToRoleForm

TeleportClaimToRoleForm is a form component that provides functionality for editing a Teleport Claim to Role instance. TeleportClaimToRoleForm accepts several arguments:

- `data`: {
  `email`: A string value for the email of the Teleport Claim to Role instance
  `roles`: An array of roles for the Teleport Claim to Role instance
  }
- `invalidRolesCallback`: A function to determine if the roles supplied is invalid and returns a boolean

```js
import { TeleportClaimToRoleForm } from "icse-react-assets";

function validRoles(roles) {
  return roles.length === 0 || roles[0].length >= 6;
}

function invalidRolesCallback(stateData) {
  return !validRoles(stateData.roles);
}

export const TeleportClaimToRoleFormExample = () => {
  return (
    <TeleportClaimToRoleForm
      data={{
        email: "icse@ibm.com",
        roles: ["writer"],
      }}
      invalidRolesCallback={invalidRolesCallback}
    />
  );
};
```

#### ObjectStorageKeyForm

`ObjectStorageKeyForm` allows users to create and manage Object Storage resource keys. `ObjectStorageKeyForm` accepts the following arguments as props:

- `data`: Intialize data object
  - `name`: String value, resource key name
  - `role`: String value, role the resource key can perform with the object storage instance
  - `enable_hmac`: Boolean, enable hash-based message authentication code for resource key
- `invalidCallback`: A function with two props `stateData` and `componentProps` that returns a boolean value to determine if the resource key has a valid name
- `invalidTextCallback`: A function with two props `stateData` and `componentProps` that returns a string value to display when the name of a resource key is invalid
- `composedNameCallback`: A function that accepts two props `stateData` and `componentProps` that returns a string value to create composed helper text for the resource key name
- `forceEnableHmac`: A boolean value to force the resource key to have `HMAC` enabled

```js
import { ObjectStorageKeyForm } from "icse-react-assets";
import { contains } from "lazy-z";

function validName(str) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  if (str) return str.match(regex) !== null;
  else return false;
}

function invalidCallback(stateData) {
  return !validName(stateData.name) || contains(["foo", "bar"], stateData.name);
}

function invalidTextCallback(stateData) {
  return contains(["foo", "bar"], stateData.name)
    ? `Key name ${stateData.name} already in use.`
    : `Invalid Key Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
}

function composedNameCallback(stateData) {
  return `${stateData.name}-<random suffix>`;
}

export const ObjectStorageKeyFormExample = () => {
  return (
    <ObjectStorageKeyForm
      data={{
        name: "test-encryption-key",
        interval_month: 12,
        root_key: false,
        force_delete: false,
      }}
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      composedNameCallback={composedNameCallback}
    />
  );
};

```
>>>>>>> b9aa481 (feat: object storage key form)
