import { StatefulTabPanel, AppIdKeyForm } from "icse-react-assets";

const ExampleAboutComponent = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <p>This is an example about document</p>
    </div>
  );
};

export const StatefulTabPanelExample = () => {
  return (
    <StatefulTabPanel
      name="Example Tab Panel"
      type="heading"
      about={<ExampleAboutComponent />}
      form={
        <AppIdKeyForm
          data={{ key_name: "test-key", keys: ["foo", "bar"] }}
          invalidCallback={() => {
            return false;
          }}
          invalidTextCallback={() => {
            return "invalid";
          }}
        />
      }
    />
  );
};
