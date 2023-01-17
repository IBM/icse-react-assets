import "./App.css";
import { UnderConstruction } from "icse-react-assets";
import { EmptyResourceTile } from "icse-react-assets";
import { TitleGroup } from "icse-react-assets";
import { IcseFormGroup } from "icse-react-assets";
import { IcseSubForm } from "icse-react-assets";

function App() {
  return (
    <div className="App">
      <IcseSubForm id="1">
        <IcseFormGroup>
          <TitleGroup>Hey</TitleGroup>
          <TitleGroup>Hello</TitleGroup>
        </IcseFormGroup>
        <IcseSubForm formInSubForm id="2">
          <IcseFormGroup>
            <TitleGroup>Hi</TitleGroup>
          </IcseFormGroup>
        </IcseSubForm>
      </IcseSubForm>
    </div>
  );
}

export default App;
