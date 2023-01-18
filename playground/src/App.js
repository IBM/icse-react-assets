import "./App.css";
//import { UnderConstruction } from "icse-react-assets";
//import { EmptyResourceTile } from "icse-react-assets";
import { TitleGroup } from "icse-react-assets";
//import { IcseFormGroup } from "icse-react-assets";
//import { IcseSubForm } from "icse-react-assets";
//import { IcseToolTip } from "icse-react-assets";
import { DynamicToolTipWrapper } from "icse-react-assets";
import { TextArea } from "@carbon/react";

//import { DynamicToolTipWrapper } from "icse-react-assets";

function App() {
  return (
    <div className="App">
      <DynamicToolTipWrapper
        tooltip={{
          content: "test content",
          link: "www.cloud.ibm.com",
          align: "bottom",
        }}
        name="TestToolTip"
        innerForm={TextArea}
        className="fitContent"
        id="test"
        labelText="test LabelText"
      />
    </div>
  );
}

export default App;
