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
          formName="playground"
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
          labelText = "Fetch"
          name = "Fetch Select"
          apiEndpoint="/my/api/endpoint"
          groups={["1", "2", "3"]}
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
          formName = "playground"
        />
        <IcseNumberSelect
          formName="playground"
          max={20}
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
          name="Entitlement"
          formName="playground"
        />
      </div>
    </div>
  );
}

export default DropdownExamples;
