import { IamAccountSettingsForm } from "icse-react-assets";

function invalidCallback(field, stateData) {
  return (
    field === "max_sessions_per_identity" &&
    (stateData.max_sessions_per_identity < 1 ||
      stateData.max_sessions_per_identity > 10)
  );
}

function invalidTextCallback(field) {
  return field === "max_sessions_per_identity"
    ? "Value must be in range [1-10]"
    : "Invalid";
}

export const IamAccountSettingsFormExample = () => {
  return (
    <IamAccountSettingsForm
      invalidCallback={invalidCallback}
      invalidTextCallback={invalidTextCallback}
      data={{
        include_history: true,
        if_match: 2,
        mfa: "NONE",
        restrict_create_service_id: "Yes",
        restrict_create_platform_apikey: "Yes",
        max_sessions_per_identity: 1,
        session_expiration_in_seconds: 1000,
        session_invalidation_in_seconds: 1000,
        allowed_ip_addresses: "",
      }}
    />
  );
};
