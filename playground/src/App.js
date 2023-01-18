import "./App.css";
<<<<<<< HEAD
=======
//import { UnderConstruction } from "icse-react-assets";
//import { EmptyResourceTile } from "icse-react-assets";
//import { TitleGroup } from "icse-react-assets";
//import { IcseFormGroup } from "icse-react-assets";
//import { IcseSubForm } from "icse-react-assets";
//import { IcseToolTip } from "icse-react-assets";
//import { ToolTipWrapper } from "icse-react-assets";
//import { IcseFormGroup } from "icse-react-assets";
//import { IcseSubForm } from "icse-react-assets";
//import { IcseModal } from "icse-react-assets";
//import { useState } from "react";
//import Button from "@carbon/react/lib/components/Button/Button";
//import { UnsavedChangesModal } from "icse-react-assets";
//import { DeleteModal } from "icse-react-assets";
import { DynamicToolTipWrapper } from "icse-react-assets";
import { TextArea } from "@carbon/react";
>>>>>>> 90da87c (fixed merge conflicts, fixed tooltip hyperlink)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* test resources here */}
=======
      <DynamicToolTipWrapper
        tooltip={{
          content: "test content",
          link: "https://cloud.ibm.com",
          align: "bottom",
        }}
        name="TestToolTip"
        innerForm={TextArea}
        className="fitContent"
        id="test"
        labelText="test LabelText"
      />
>>>>>>> 90da87c (fixed merge conflicts, fixed tooltip hyperlink)
    </div>
  );
}

export default App;
