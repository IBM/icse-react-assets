import React, { useState } from "react";
import { Button } from "@carbon/react";
import { FormModal, UnderConstruction } from "icse-react-assets";

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
        Show Instance Form Modal Example
      </Button>
      <FormModal
        name={"This is an example instance form modal"}
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
