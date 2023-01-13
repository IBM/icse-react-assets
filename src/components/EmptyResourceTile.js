import React from "react";
import { CloudAlerting, Add } from "@carbon/icons-react";
import PropTypes from "prop-types";
import "./EmptyResourceTile.css";
import { Tile } from "@carbon/react";

const EmptyResourceTile = (props) => {
  return props.showIfEmpty === false || props.showIfEmpty.length === 0 ? (
    <Tile className="marginBottomXs tileBackground">
      <CloudAlerting size="24" className="iconMargin" />
      No {props.name}.{" "}
      {props.instructions || (
        <>
          Click
          <Add size="24" className="inlineIconMargin" />
          button to add one.
        </>
      )}
    </Tile>
  ) : (
    ""
  );
};

EmptyResourceTile.defaultProps = {
  name: "items in this list",
};

EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
    .isRequired,
};

export default EmptyResourceTile;
