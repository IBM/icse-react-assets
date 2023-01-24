import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "@carbon/react";
import { kebabCase, snakeCase } from "lazy-z";
import { DynamicToolTipWrapper } from "./Tooltips";
import { addClassName } from "../lib";
import "./styles/Inputs.css";
import "./styles/Tooltips.css";

export const IcseToggle = (props) => {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
  return (
    <DynamicToolTipWrapper
      innerForm={() => {
        return (
          <Toggle
            labelA={props.useOnOff ? "Off" : "False"}
            labelB={props.useOnOff ? "On" : "True"}
            labelText={props.tooltip ? "" : props.labelText}
            id={kebabCase(toggleName) + "-slz-toggle-" + props.id}
            className={
              addClassName("leftTextAlign fieldWidth", props) +
              (props.tooltip ? " cds--form-item tooltip" : " cds--form-item") // inherit tooltip spacing
            }
            onToggle={(event) => {
              props.onToggle(toggleName, event);
            }}
            defaultToggled={props.defaultToggled}
            disabled={props.disabled}
          />
        );
      }}
      {...props}
    />
  );
};

IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false,
};

IcseToggle.propTypes = {
  useOnOff: PropTypes.bool.isRequired,
  className: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleFieldName: PropTypes.string, // if field is name other than label text snake case
  defaultToggled: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
  }),
  onToggle: PropTypes.func.isRequired,
  isModal: PropTypes.bool.isRequired,
};
