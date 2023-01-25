import { FetchSelect, IcseSelect, IcseNumberSelect } from "icse-react-assets";

function DropdownExamples() {
  return (
    <div className="App">
      <div style={{ marginLeft: "100px" }}>
        <IcseSelect 
          component="example"
          name = "icseSelect"
          disabled = {false}
          disableInvalid = {true}
          groups = {["hi", "hello", "1"]}
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
        
        
        ></IcseSelect>
        <FetchSelect
          kube_type="1.3.5"
          url="www.hi.com"
          handleInputChange={(event) => {
            console.log(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default DropdownExamples;
