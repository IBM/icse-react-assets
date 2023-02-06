import { TeleportClaimToRoleForm } from "icse-react-assets";

function validRoles(roles) {
  return roles.length === 0 || roles[0].length >= 6;
}

function invalidRolesCallback(stateData) {
  return !validRoles(stateData.roles);
}

export const TeleportClaimToRoleFormExample = () => {
  return (
    <TeleportClaimToRoleForm
      data={{
        email: "icse@ibm.com",
        roles: ["writer"],
      }}
      invalidRolesCallback={invalidRolesCallback}
    />
  );
};
