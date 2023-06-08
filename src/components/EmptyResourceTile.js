import React from "react";
import { CloudAlerting, Add } from "@carbon/icons-react";
import { Tile } from "@carbon/react";
import PropTypes from "prop-types";
import { emptyResourceTileParams } from "../lib/empty-resource-tile";

/**
 * Empty Resource Tile
 * @param {*} props
 * @param {string} props.name resource name
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @returns tile if shown, empty string otherwise
 */

const EmptyResourceTile = (props) => {
  let { show, className } = emptyResourceTileParams(props);
  return show ? (
    <Tile className={className}>
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
  showIfEmpty: false,
  noMarginTop: false,
};

EmptyResourceTile.propTypes = {
  name: PropTypes.string.isRequired,
  showIfEmpty: PropTypes.oneOfType([PropTypes.array, PropTypes.bool])
    .isRequired,
  instructions: PropTypes.string,
  noMarginTop: PropTypes.bool,
};

export default EmptyResourceTile;
