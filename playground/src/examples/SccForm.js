import { SccForm } from "icse-react-assets";

export const SccFormExample = () => {
  return (
    <SccForm
      data={{
        enable_scc: true,
        collector_description: "test collector description",
        is_public: true,
        scope_description: "test scope description",
        scope_name: "test-scope-name",
        collector_passphrase: "test-passphrase",
        location_id: "us",
      }}
    />
  );
};
