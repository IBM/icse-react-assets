import React from "react";
import { TextInput, Select, SelectItem } from "@carbon/react";
import PropTypes from "prop-types";
import { kebabCase, titleCase, contains, isNullOrEmptyString } from "lazy-z";
import { PopoverWrapper } from "icse-react-assets";

/**
 * add classname from component
 * @param {*} className
 * @param {*} props field
 * @returns {string} className string
 */
function addClassName(className, props) {
  let composedClassName = className;
  if (props?.className) {
    composedClassName += " " + props.className;
  }

  composedClassName +=
    props.size === "small" ? " fieldWidthSmaller" : " fieldWidth";

  return composedClassName;
}

/**
 * create field input id
 * @param {*} props dynamic component props
 * @returns {string} field id
 */
function dynamicFieldId(props) {
  return kebabCase(`${props.propsName} ${props.name} ${props.keyIndex}`);
}

const DynamicFormTextInput = (props) => {
  let isDisabled = props.field.disabled(props.parentState, props.parentProps);
  return (
    <TextInput
      name={props.name}
      id={dynamicFieldId(props)}
      className={addClassName("leftTextAlign", props.field)}
      invalid={props.field.invalid(props.parentState, props.parentProps)}
      invalidText={props.field.invalidText(
        props.parentState,
        props.parentProps
      )}
      labelText={
        props.field.labelText ? props.field.labelText : titleCase(props.name)
      }
      placeholder={
        (props.field.optional ? "(Optional) " : "") +
        `my-${props.parentProps.formName}-${props.name}`
      }
      value={props.parentState[props.name] || ""}
      onChange={props.handleInputChange}
      maxLength={props.field.maxLength}
      disabled={isDisabled}
      helperText={
        isDisabled
          ? props.field.disabledText(props.parentState, props.parentProps)
          : props.field.helperText(props.parentState, props.parentProps)
      }
    />
  );
};

DynamicFormTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  propsName: PropTypes.string.isRequired,
  keyIndex: PropTypes.number.isRequired,
  field: PropTypes.shape({
    invalid: PropTypes.func.isRequired,
    invalidText: PropTypes.func.isRequired,
    optional: PropTypes.bool,
    labelText: PropTypes.string,
    disabled: PropTypes.func.isRequired,
    disabledText: PropTypes.func.isRequired,
    className: PropTypes.string,
  }).isRequired,
  parentState: PropTypes.shape({}).isRequired,
  parentProps: PropTypes.shape({}).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const DynamicFormSelect = (props) => {
  let stateValue = props.parentState[props.name];
  let invalid = contains(props.field.groups, stateValue)
    ? props.field.invalid(props.parentState, props.parentProps)
    : true;
  let groups = (isNullOrEmptyString(stateValue) || !stateValue ? [""] : []).concat(
    props.field.groups
  );
  return (
    <PopoverWrapper
      hoverText={props.value || ""}
      className={props.tooltip ? "tooltip select" : " select"} // inherit classnames from tooltip
    >
      <Select
        id={dynamicFieldId(props)}
        name={props.name}
        labelText={
          props.tooltip ? null : titleCase(props.labelText || props.name)
        }
        value={stateValue || undefined}
        className={addClassName(
          `leftTextAlign${props.tooltip ? " tooltip" : ""}`,
          props.field
        )}
        disabled={props.field.disabled(props.parentState, props.parentProps)}
        invalid={invalid}
        invalidText={props.field.invalidText(
          props.parentState,
          props.parentProps
        )}
        readOnly={props.field.readOnly}
        onChange={props.handleInputChange}
      >
        {groups.map((value) => (
          <SelectItem
            key={`${dynamicFieldId(props).id}-${value}`}
            text={value}
            value={value}
          />
        ))}
      </Select>
    </PopoverWrapper>
  );
};


DynamicFormSelect.propTypes = {
    name: PropTypes.string.isRequired,
    propsName: PropTypes.string.isRequired,
    keyIndex: PropTypes.number.isRequired,
    field: PropTypes.shape({
      invalid: PropTypes.func.isRequired,
      invalidText: PropTypes.func.isRequired,
      optional: PropTypes.bool,
      labelText: PropTypes.string,
      disabled: PropTypes.func.isRequired,
      className: PropTypes.string,
      groups: PropTypes.arrayOf(PropTypes.string).isRequired,
      readOnly: PropTypes.bool
    }).isRequired,
    parentState: PropTypes.shape({}).isRequired,
    parentProps: PropTypes.shape({}).isRequired,
    handleInputChange: PropTypes.func.isRequired,
  };

export { DynamicFormTextInput, DynamicFormSelect };
