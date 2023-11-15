import React from "react";
import { CloudAlerting } from "@carbon/icons-react";
import { Tile } from "@carbon/react";
import "./no-secrets-manager-tile.css";

export const NoAclTile = () => {
  return (
    <Tile className="tileBackground displayFlex alignItemsCenter wrap marginTop">
      <CloudAlerting size="24" className="iconMargin" /> No ACLs have been
      created. Go to the
      <a className="no-vpc-link" href="/form/nacls">
        Network Access Control Lists Page
      </a>
      to create one.
    </Tile>
  );
};
