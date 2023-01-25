import { FetchSelect, IcseSelect, IcseNumberSelect, EntitlementDropdown } from "icse-react-assets";

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
          kube_type="1.3.5"
          url="www.hi.com"
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
        />
        <EntitlementDropdown
          component="icseEntitlementDropdown"
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default DropdownExamples;
