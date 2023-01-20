import React from "react";
import PropTypes from "prop-types";
import { addClassName, toggleMarginBottom } from "../lib/index";
import "./styles/Utils.css";

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
export function RenderForm(form, formProps) {
  return React.createElement(form, {
    ...formProps,
  });
}

/**
 * Dynamically render inner contents
 * @param {*} props
 * @param {boolean=} props.hide hide element
 * @param {boolean=} props.show component to show when hide is false
 * @returns empty string when hidden, component when visible
 */
export function DynamicRender(props) {
  return props.hide === true ? "" : props.show;
}

/**
 * wrapper for title groups
 */
export const TitleGroup = (props) => {
  return (
    <div
      className={addClassName(
        `displayFlex alignItemsCenter widthOneHundredPercent ${toggleMarginBottom(
          props.hide
        )}`,
        props
      )}
    >
      {props.children}
    </div>
  );
};

TitleGroup.defaultProps = {
  hide: true,
};

TitleGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export const IcseFormGroup = (props) => {
  let formGroupClassName = "displayFlex marginBottom fitContent evenSpacing";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  return (
    <div className={addClassName(formGroupClassName, props)}>
      {props.children}
    </div>
  );
};

IcseFormGroup.defaultProps = {
  noMarginBottom: false,
};

IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const IcseSubForm = (props) => {
  return (
    <div
      className={addClassName(
        props.formInSubForm
          ? "formInSubForm positionRelative"
          : "subForm marginBottomSmall",
        props
      )}
      id={props.id}
    >
      {props.children}
    </div>
  );
};

IcseSubForm.defaultProps = {
  formInSubForm: false,
};

IcseSubForm.propTypes = {
  id: PropTypes.string.isRequired,
  formInSubForm: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
