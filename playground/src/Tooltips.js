import "./App.css";
import {
  //UnderConstruction,
  //EmptyResourceTile,
  //TitleGroup,
  //IcseFormGroup,
  //IcseSubForm,
  //IcseToolTip,
  ToolTipWrapper,
  //DynamicToolTipWrapper,
  //IcseModal
  // UnsavedChangesModal,
  // DeleteModal,
  //IcseMultiSelect,
  //SshKeyMultiSelect,
  //SecurityGroupMultiSelect,
  //SubnetMultiSelect,
  //VpcListMultiSelect,
} from "icse-react-assets";
import { TextArea } from "@carbon/react";
//import { useState } from "react";
//import Button from "@carbon/react/lib/components/Button/Button";

function App() {
  return (
    <div className="App">
      <ToolTipWrapper
        tooltip={{
          content: "this is test content.",
          link: "https://cloud.ibm.com",
        }}
        align="bottom-left"
        innerForm={TextArea}
        className="fitContent"
        id="test"
        labelText="Username"
      />
    </div>
  );
}

export default App;
