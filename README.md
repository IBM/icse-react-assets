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
- `invalid`: A boolean value for checking if any input values are invalid,
- `invalidText`: A string value that displays if there is invalid input,
- `initialSelectedItems`: An array of items that are initially selected,
- `onChange`: A function that defines what should occur when the selected items are changed,
- `items`: A (string) list of items to appear in the dropdown,
- `useTitleInItem`: A boolean value that will include the title in each item name if true,
- `label`: A string label value (optional),
- `disabled`: A boolean value that will disable this component if true

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
- `sshKeys`: A (string) list of SSH keys,
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
- `label`: A string label value (optional),
- `disabled`: A boolean value that will disable this component if true,
- `securityGroups`: An object which contains the security groups for the given VPC,
- `invalid`: A boolean value for checking if any security group input values are invalid

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
- `vpc_name`: A string for the VPC which the subnets belong to (optional),
- `subnets`: An object which contains the subnets for the given VPC,
- `disabled`: A boolean value that will disable this component if true,
- `name`: A string value for name of component
- `label`: A string label value (optional),
- `initialSelectedItems`: An array of items that are initially selected,
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

- `invalid`: A boolean value for checking if any VPC input values are invalid,
- `id`: A string of the component's id,
- `onChange`: A function that defines what should occur when the selected items are changed,
- `initialSelectedItems`: An array of items that are initially selected,
- `vpcList`: A (string) list of VPCs to select from

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
