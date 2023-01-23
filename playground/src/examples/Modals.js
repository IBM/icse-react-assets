import Button from "@carbon/react/lib/components/Button/Button";
import { IcseModal, UnsavedChangesModal, DeleteModal } from "icse-react-assets";
import { useState } from "react";

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
