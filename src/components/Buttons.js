import { Button } from "@carbon/react";
import {
  saveAddParams,
  editCloseParams,
  deleteButtonParams,
} from "../lib/index";
import PopoverWrapper from "./PopoverWrapper";
import PropTypes from "prop-types";
import {
  Save,
  Add,
  TrashCan,
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronRight,
} from "@carbon/icons-react";
import React from "react";
import { RenderForm } from "./Utils";

/**
 * generate save icon
 * @param {object} props
 * @param {boolean} props.saveIsDisabled true if disabled
 * @returns Save Icon
 */
export const SaveIcon = (props) => {
  return <Save className={props.disabled ? "" : "tertiaryButtonColors"} />;
};

/**
 * save add button
 * @param {*} props
 * @returns Save add button
 */
export const SaveAddButton = (props) => {
  let {
    hoverText,
    wrapperClassDisabled,
    wrapperClassInline,
    buttonKind,
    buttonClass,
  } = saveAddParams(props);
  return (
    <PopoverWrapper
      hoverText={hoverText}
      className={wrapperClassDisabled + wrapperClassInline}
      align={props.hoverTextAlign}
    >
      <Button
        aria-label={props.name + "-" + props.type}
        kind={buttonKind}
        onClick={props.onClick}
        className={buttonClass}
        disabled={props.disabled || false}
        size="sm"
      >
        {props.type === "custom" ? (
          RenderForm(props.customIcon)
        ) : props.type === "add" ? (
          <Add />
        ) : (
          <SaveIcon saveIsDisabled={props.disabled} />
        )}
      </Button>
    </PopoverWrapper>
  );
};

SaveAddButton.defaultProps = {
  type: "save",
  hoverText: "Save Changes",
  inline: false,
  disabled: false,
  hoverTextAlign: "bottom",
};

SaveAddButton.propTypes = {
  hoverText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  inline: PropTypes.bool.isRequired,
  hoverTextAlign: PropTypes.string.isRequired,
  customIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

/**
 * Edit close icon with popover
 * @param {*} props
 * @returns edit close icon
 */
export const EditCloseIcon = (props) => {
  let { hoverText } = editCloseParams(props);

  return (
    <PopoverWrapper hoverText={hoverText}>
      <i
        role="button"
        aria-label={props.name + "-open-close"}
        onClick={props.onClick}
        className="chevron"
      >
        {props.open ? (
          <ChevronDown />
        ) : props.type === "add" ? ( // keep add button for optional components
          <Add />
        ) : (
          <ChevronRight />
        )}
      </i>
    </PopoverWrapper>
  );
};

EditCloseIcon.propTypes = {
  hoverText: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

EditCloseIcon.defaultProps = {
  type: "edit",
  open: false,
  disabled: false,
};

/**
 * Delete button
 * @param {*} props
 */
export const DeleteButton = (props) => {
  let { hoverText, popoverClassName, buttonClassName, iconClassName } =
    deleteButtonParams(props);
  return (
    <div className="delete-area">
      <PopoverWrapper
        hoverText={hoverText}
        align={props.hoverTextAlign}
        className={popoverClassName}
      >
        <Button
          aria-label={props.name + "-delete"}
          className={buttonClassName}
          kind="ghost"
          size="sm"
          onClick={props.onClick}
          disabled={props.disabled === true}
        >
          <TrashCan className={iconClassName} />
        </Button>
      </PopoverWrapper>
    </div>
  );
};

DeleteButton.defaultProps = {
  disabled: false,
  hoverTextAlign: "bottom",
};

DeleteButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  hoverTextAlign: PropTypes.string.isRequired,
  disableDeleteMessage: PropTypes.string,
};

/**
 * Up/Down button
 * @param {*} props
 */
export const UpDownButtons = (props) => {
  return (
    <>
      <Button
        aria-label={"rule-up-" + props.name}
        key={"rule-up-" + props.name}
        disabled={props.disableUp}
        kind="ghost"
        size="sm"
        id={props.name + "-up"}
        onClick={props.handleUp}
        className="focus forceTertiaryButtonStyles marginRightSmall"
      >
        <ArrowUp key={"up-" + props.name} />
      </Button>
      <Button
        aria-label={"rule-down-" + props.name}
        kind="ghost"
        disabled={props.disableDown}
        key={"rule-down-" + props.name}
        size="sm"
        id={props.name + "-down"}
        onClick={props.handleDown}
        className="focus forceTertiaryButtonStyles"
      >
        <ArrowDown key={"down-" + props.name} />
      </Button>
    </>
  );
};

UpDownButtons.defaultProps = {
  disableUp: false,
  disableDown: false,
};

UpDownButtons.propTypes = {
  disableUp: PropTypes.bool.isRequired,
  disableDown: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handleUp: PropTypes.func.isRequired,
  handleDown: PropTypes.func.isRequired,
};
