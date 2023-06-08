import React from "react";
import PropTypes from "prop-types";
import { Toggle, TextInput } from "@carbon/react";
import { DynamicToolTipWrapper } from "./Tooltips";
import { addClassName } from "../lib";
import { textInputParams, toggleParams } from "../lib/input-utils";

export const IcseToggle = (props) => {
  let { labelA, labelB, labelText, id, className, onToggle } =
    toggleParams(props);
  return (
    <DynamicToolTipWrapper {...props}>
      <Toggle
        labelA={labelA}
        labelB={labelB}
        labelText={labelText}
        id={id}
        className={className}
        onToggle={onToggle}
        defaultToggled={props.defaultToggled}
        disabled={props.disabled}
      />
    </DynamicToolTipWrapper>
  );
};

IcseToggle.defaultProps = {
  useOnOff: false,
  defaultToggled: false,
  isModal: false,
  disabled: false,
  className: "fieldWidth",
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

/**
 * Icse Text Input
 * @param {*} props props
 * @param {string} props.componentName name of the component being edited
 * @param {string} props.placeholder placeholder text for field
 * @param {string} props.field field (ex. name)
 * @param {string=} props.value actual value
 * @param {Function} props.onChange onchange function
 * @param {string} props.helperText helper text
 * @param {string} props.className classnames to add
 * @param {boolean=} props.readOnly read only
 * @param {string=} props.labelText override label text
 * @returns <IcseTextInput/> component
 */
export const IcseTextInput = (props) => {
  let { invalid, invalidText, placeholder, labelText, onInputChange } =
    textInputParams(props);

  return (
    <DynamicToolTipWrapper {...props}>
      <TextInput
        id={props.id}
        className={addClassName("leftTextAlign", props)}
        labelText={labelText}
        placeholder={placeholder}
        name={props.field}
        value={props.value || ""}
        invalid={invalid}
        onChange={onInputChange}
        helperText={props.helperText}
        invalidText={invalidText}
        maxLength={props.maxLength}
        disabled={props.disabled}
        readOnly={props.readOnly}
      />
    </DynamicToolTipWrapper>
  );
};

IcseTextInput.defaultProps = {
  maxLength: null,
  disabled: false,
  readOnly: false,
  hideHelperText: false,
  optional: false,
  className: "fieldWidth",
  forceKebabCase: false,
};

IcseTextInput.propTypes = {
  disabled: PropTypes.bool.isRequired,
  optional: PropTypes.bool,
  componentName: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
  }),
  className: PropTypes.string,
  readOnly: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
  maxLength: PropTypes.number,
  invalidCallback: PropTypes.func,
  id: PropTypes.string.isRequired,
  invalidText: PropTypes.string,
  forceKebabCase: PropTypes.bool.isRequired,
};

/**
 * Icse Name Field
 * @param {*} props
 * @param {string} props.id
 * @param {string=} props.className
 * @param {string} props.value
 * @param {Function} props.onChange
 * @param {string} props.component
 * @param {boolean=} props.hideHelperText
 * @param {func} props.helperTextCallback
 * @param {string} props.invalidText
 * @param {func} props.invalidCallback
 * @returns <IcseNameInput />
 */
export const IcseNameInput = (props) => {
  let helperText = "";
  // if helper text is not hidden
  if (!props.hideHelperText && !props.useData) {
    if (!props.helperTextCallback) {
      throw new Error(
        "IcseNameInput expects either a function `helperTextCallback` that returns a string or `hideHelperText` as a prop, got neither."
      );
    }
    helperText = props.helperTextCallback();
  }
  return (
    <IcseTextInput
      {...props}
      className={addClassName("leftTextAlign", props)}
      field="name"
      labelText={props.labelText}
      helperText={helperText}
    />
  );
};

IcseNameInput.defaultProps = {
  useData: false,
  hideHelperText: false,
  invalidText: "",
  className: "fieldWidth",
  labelText: "Name",
  forceKebabCase: false
};

IcseNameInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  componentName: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
  }),
  hideHelperText: PropTypes.bool.isRequired,
  useData: PropTypes.bool.isRequired,
  helperTextCallback: PropTypes.func,
  invalidText: PropTypes.string.isRequired,
  invalidCallback: PropTypes.func,
  labelText: PropTypes.string.isRequired,
  forceKebabCase: PropTypes.bool.isRequired,
};
