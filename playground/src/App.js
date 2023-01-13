import "./App.css";
import { UnderConstruction } from "icse-react-assets";
import { EmptyResourceTile } from "icse-react-assets";

function App() {
  return (
    <div className="App">
      <EmptyResourceTile
        showIfEmpty={false}
        name="name"
        instructions="test instructions"
      />
      <EmptyResourceTile showIfEmpty={[]} />
    </div>
  );
}

export default App;
