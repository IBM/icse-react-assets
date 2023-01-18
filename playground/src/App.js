import "./App.css";
//import { UnderConstruction } from "icse-react-assets";
//import { EmptyResourceTile } from "icse-react-assets";
import { TitleGroup } from "icse-react-assets";
//import { IcseFormGroup } from "icse-react-assets";
//import { IcseSubForm } from "icse-react-assets";
//import { IcseToolTip } from "icse-react-assets";
import { ToolTipWrapper } from "icse-react-assets";

//import { DynamicToolTipWrapper } from "icse-react-assets";

function App() {
  return (
    <div className="App">
      <ToolTipWrapper
        tooltip={{
          content: "test content",
          align: "top-left",
        }}
        innerForm={<TitleGroup>Test</TitleGroup>}
        className="fitContent"
        id="test"
        labelText="test LabelText"
      />
    </div>
  );
}

export default App;
