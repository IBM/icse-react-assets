import { Button } from "@carbon/react";
import { saveChangeButtonClass } from "../lib/index";
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
  return (
    <PopoverWrapper
      hoverText={
        props.type === "add" && props.hoverText === "Save Changes"
          ? "Add Resource"
          : props.hoverText
      }
      className={
        (props.disabled ? "inlineBlock cursorNotAllowed" : "") +
        (props.inline
          ? " alignItemsCenter marginTopLarge inLineFormButton"
          : "")
      }
      align={props.hoverTextAlign}
    >
      <Button
        kind={
          props.type === "add" || props.type === "custom"
            ? "tertiary"
            : "primary"
        }
        onClick={props.onClick}
        className={
          saveChangeButtonClass(props) +
          (props.disabled === true
            ? " pointerEventsNone "
            : " " + props.className)
        }
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
  let hoverText = props.hoverText
    ? props.hoverText
    : props.open
    ? "Close"
    : props.type === "add"
    ? "Configure Resource"
    : "Open";
  let icon = props.open ? (
    <ChevronDown />
  ) : props.type === "add" ? ( // keep add button for optional components
    <Add />
  ) : (
    <ChevronRight />
  );
  return (
    <PopoverWrapper hoverText={hoverText}>
      <i role="button" onClick={props.onClick} className="chevron">
        {icon}
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
  return (
    <div className="delete-area">
      <PopoverWrapper
        hoverText={
          props.disabled && props.disableDeleteMessage
            ? props.disableDeleteMessage
            : "Delete Resource"
        }
        align={props.hoverTextAlign}
        className={props.disabled ? "inlineBlock cursorNotAllowed" : ""}
      >
        <Button
          className={
            "cds--btn--danger--tertiary forceTertiaryButtonStyles" +
            (props.disabled ? " pointerEventsNone" : "")
          }
          kind="ghost"
          size="sm"
          onClick={props.onClick}
          disabled={props.disabled === true}
        >
          <TrashCan className={props.disabled ? "" : "redFill"} />
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
