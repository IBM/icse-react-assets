import {
  FetchSelect,
  IcseSelect,
  IcseNumberSelect,
  EntitlementSelect,
} from "icse-react-assets";

function DropdownExamples() {
  return (
    <div className="App">
      <div style={{ marginLeft: "100px" }}>
        <IcseSelect
          component="example"
          name="icseSelect"
          disabled={false}
          disableInvalid={true}
          groups={["hi", "hello", "1"]}
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
          labelText="ICSE Select"
        />
        <FetchSelect
          url="www.myendpointhereIBM.com"
          groups={["1", "2", "3"]}
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <IcseNumberSelect
          component="numberSelect"
          max={20}
          name="icseNumberSelect"
          labelText="ICSE Number Select"
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
          value={1}
          tooltip={{
            content: "Test",
            link: "www.test.test",
          }}
        />
        <EntitlementSelect
          component="icseEntitlementSelect"
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default DropdownExamples;
