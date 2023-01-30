import {
  FetchSelect,
  IcseSelect,
  IcseNumberSelect,
  EntitlementSelect,
} from "icse-react-assets";
import { useState } from "react";

function DropdownExamples() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <div style={{ marginLeft: "100px" }}>
        <IcseSelect
          formName="playground"
          name="icseSelect"
          disabled={false}
          disableInvalid={true}
          groups={["test", "hello", "1"]}
          handleInputChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          labelText="ICSE Select"
        />
        <FetchSelect
          labelText="Fetch"
          name="Fetch Select"
          apiEndpoint="/my/api/endpoint"
          handleInputChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          formName="playground"
        />
        <IcseNumberSelect
          formName="playground"
          max={20}
          labelText="ICSE Number Select"
          handleInputChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          tooltip={{
            content: "Test",
            link: "www.test.test",
            align: "top",
          }}
        />
        <EntitlementSelect
          component="icseEntitlementSelect"
          handleInputChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          name="Entitlement"
          formName="playground"
        />
      </div>
    </div>
  );
}

export default DropdownExamples;
