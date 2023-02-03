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
      scope_name_regex={/^[A-z]([a-z0-9-]*[a-z0-9])?$/i}
      scope_desc_regex={/^[A-z][a-zA-Z0-9-\._,\s]*$/i}
      collector_desc_regex={/^[A-z][a-zA-Z0-9-\._,\s]*$/i}
    />
  );
};
