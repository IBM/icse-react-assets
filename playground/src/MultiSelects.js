import "./App.css";
import {
  //UnderConstruction,
  //EmptyResourceTile,
  //TitleGroup,
  //IcseFormGroup,
  //IcseSubForm,
  //IcseToolTip,
  //ToolTipWrapper,
  //DynamicToolTipWrapper,
  //IcseModal
  // UnsavedChangesModal,
  // DeleteModal,
  IcseMultiSelect,
  SshKeyMultiSelect,
  SecurityGroupMultiSelect,
  SubnetMultiSelect,
  VpcListMultiSelect,
} from "icse-react-assets";

function App() {
  return (
    <div className="App">
      <div style={{ marginLeft: "100px" }}>
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
        <SshKeyMultiSelect
          id="test"
          sshKeys={["a", "b", "c"]}
          onChange={(selectedItems) => {
            console.log(selectedItems);
          }}
          initialSelectedItems={["a"]}
        />
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
        <VpcListMultiSelect
          id="test"
          onChange={(selectedItems) => {
            console.log(selectedItems);
          }}
          vpcList={["a", "b"]}
        />
      </div>
    </div>
  );
}

export default App;
