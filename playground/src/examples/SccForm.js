import { SccForm } from "icse-react-assets";

function invalidSccScopeName(stateData) {
  const regex = /^[A-z]([a-z0-9-]*[a-z0-9])?$/i;
  return {
    invalid: stateData.scope_name.match(regex) === null,
    invalidText:
      "Invalid scope name. Must match regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i",
  };
}

function invalidSccScopeDescription(stateData) {
  const regex = /^[A-z][a-zA-Z0-9-\._,\s]*$/i;
  return {
    invalid: stateData.scope_description.match(regex) === null,
    invalidText:
      "Invalid scope description. Must match regular expression: /^[A-z][a-zA-Z0-9-._,s]*$/i",
  };
}

function invalidSccCollectorDescription(stateData) {
  const regex = /^[A-z][a-zA-Z0-9-\._,\s]*$/i;
  return {
    invalid: stateData.collector_description.match(regex) === null,
    invalidText:
      "Invalid collector description. Must match regular expression: /^[A-z][a-zA-Z0-9-._,s]*$/i",
  };
}

export const SccFormExample = () => {
  return (
    <SccForm
      data={{
        enable_scc: true,
        collector_description: "test collector description",
        is_public: true,
        location_id: "test location id",
        scope_description: "test scope description",
        scope_name: "test scope name",
        collector_passphrase: "test passphrase",
        location_id: "test location id",
      }}
      invalidSccScopeName={invalidSccScopeName}
      invalidSccScopeDescription={invalidSccScopeDescription}
      invalidSccCollectorDescription={invalidSccCollectorDescription}
    />
  );
};
