# icse-react-assets

## Getting Started

1. `git clone https://github.ibm.com/icse/icse-react-assets.git && cd icse-react-assets`
2. `npm run i-all`
3. Test a build with `npm update && npm run build`
4. Run `npm run dev` to run the playground environment to test any components

## Contributing Guidelines

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

- primaryButtonText: A string to override the text on the primary button of the modal,
- secondaryButtonText: A string to override the text on the secondary button of the modal,
- primaryButtonDisabled: A boolean value for if the primary button should be disabled,
- danger: A boolean value for if the primary button should be the type "danger" (red)
- alert: A boolean value for if the modal is displaying an alert,
- heading: A string value for the heading of the modal,
- onRequestSubmit: A function that defines what should occur when the modal is submitted,
- onRequestClose: A function that defines what should occur when the modal is closed,
- id: A string value of the modal's id,
- open: A boolean value of whether or not the modal is open
- children: Child nodes for displaying within the modal

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

- name: A string value for the name of the resource/form
- modalOpen: A boolean value for if the modal is open
- onModalClose:A function that defines what should occur when the modal is closed,
- onModalSubmit: A function that defines what should occur when the modal is submitted,
- useDefaultUnsavedMessage: A boolean value, if true (default), says a form is missing required values. Otherwise displays a message saying there are unsaved changes to a form

```js
import { IcseModal } from "icse-react-assets";

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

- name: A string value for the name of the resource/form
- modalOpen: A boolean value for if the modal is open
- onModalClose:A function that defines what should occur when the modal is closed,
- onModalSubmit: A function that defines what should occur when the modal is submitted

```js
import { IcseModal } from "icse-react-assets";

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
