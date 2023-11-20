import React from "react";
import {
  TextInput,
  Select,
  SelectItem,
  Toggle,
  TextArea,
  FilterableMultiSelect,
} from "@carbon/react";
import PropTypes from "prop-types";
import {
  kebabCase,
  titleCase,
  snakeCase,
  contains,
  isNullOrEmptyString,
  isFunction,
} from "lazy-z";
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
    props.size === "small" || props.field.size === "small"
      ? " fieldWidthSmaller"
      : " fieldWidth";

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

/**
 *
 * @param {*} props
 * @returns {object} props object
 */
function dynamicTextInputProps(props) {
  let isDisabled = props.field.disabled(props.parentState, props.parentProps);
  let placeholder =
    (props.field.optional ? "(Optional) " : "") +
    `my-${props.parentProps.formName}-${props.name}`;
  let labelText = props.field.tooltip
    ? ""
    : props.field.labelText
      ? props.field.labelText
      : titleCase(props.name);
  return {
    name: props.name,
    id: dynamicFieldId(props),
    className: addClassName("leftTextAlign", props.field),
    labelText: labelText,
    placeholder: placeholder,
    value: props.field.onRender
      ? props.field.onRender(props.parentState, props.parentProps)
      : props.parentState[props.name] || "",
    onChange: props.handleInputChange,
    maxLength: props.field.maxLength,
    invalid: props.field.invalid(props.parentState, props.parentProps),
    invalidText: props.field.invalidText(props.parentState, props.parentProps),
    disabled: isDisabled,
    helperText: isDisabled
      ? props.field.disabledText(props.parentState, props.parentProps)
      : props.field.onRender
        ? props.field.onRender(props.parentState, props.parentProps)
        : props.field.helperText(props.parentState, props.parentProps),
    readOnly: props.field.readOnly || false,
  };
}

const DynamicFormTextInput = (props) => {
  return <TextInput {...dynamicTextInputProps(props)} />;
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

function dynamicFormSelectData(props) {
  // quick ref for state value
  let stateValue = props.field.onRender
    ? props.field.onRender(props.parentState)
    : props.parentState[props.name];
  // should always be invalid when no selection is made
  let invalid = contains(props.field.groups, stateValue)
    ? props.field.invalid(props.parentState, props.parentProps)
    : true;
  let groups = // if no value, prepend `""` so that it is selected on render
    (isNullOrEmptyString(stateValue) || !stateValue ? [""] : []).concat(
      // filter groups if function, otherwise get array
      isFunction(props.field.groups)
        ? props.field.groups(props.parentState, props.parentProps)
        : props.field.groups,
    );
  // hide text when tooltip so that multiple name labels are not rendered
  let labelText = props.field.tooltip
    ? null
    : titleCase(props.field.labelText || props.name);
  return {
    stateValue,
    invalid,
    groups,
    labelText,
  };
}

const DynamicFormSelect = (props) => {
  let { stateValue, invalid, groups, labelText } = dynamicFormSelectData(props);
  return (
    <PopoverWrapper
      hoverText={props.value || ""}
      className={props.tooltip ? "tooltip select" : " select"} // inherit classnames from tooltip
    >
      <Select
        id={dynamicFieldId(props)}
        name={props.name}
        labelText={labelText}
        value={stateValue || undefined}
        className={addClassName(
          `leftTextAlign${props.tooltip ? " tooltip" : ""}`,
          props.field,
        )}
        disabled={props.field.disabled(props.parentState, props.parentProps)}
        invalid={invalid}
        invalidText={props.field.invalidText(
          props.parentState,
          props.parentProps,
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
    readOnly: PropTypes.bool,
  }).isRequired,
  parentState: PropTypes.shape({}).isRequired,
  parentProps: PropTypes.shape({}).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const DynamicFormToggle = (props) => {
  let labelA = props.useOnOff ? "Off" : "False",
    labelB = props.useOnOff ? "On" : "True",
    labelText = props.tooltip ? " " : props.labelText,
    id = kebabCase(props.name) + "-toggle-" + props.propsName,
    className =
      addClassName("leftTextAlign fitContent", props) +
      (props.tooltip ? " cds--form-item tooltip" : " cds--form-item");
  return (
    <Toggle
      labelA={labelA}
      labelB={labelB}
      labelText={labelText}
      id={id}
      className={className}
      onToggle={() => props.handleInputChange(props.name)}
      defaultToggled={props.value || false}
      disabled={props.field.disabled(props.parentState, props.parentProps)}
    />
  );
};

DynamicFormToggle.defaultProps = {
  useOnOff: false,
};

DynamicFormToggle.propTypes = {
  useOnOff: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string,
  }),
  className: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  propsName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  parentState: PropTypes.shape({}).isRequired,
  parentProps: PropTypes.shape({}).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const DynamicTextArea = (props) => {
  return (
    <TextArea
      className="textInputMedium"
      id={dynamicFieldId(props)}
      labelText={props.field.tooltip ? null : props.field.labelText}
      onChange={(event) => {
        event.target.name = props.name;
        props.handleInputChange(event);
      }}
      invalid={props.field.invalid(props.parentState, props.parentProps)}
      invalidText={props.field.invalidText(
        props.parentState,
        props.parentProps,
      )}
      placeholder={
        props.parentState[props.name] ||
        props.field.placeholder(props.parentState, props.parentProps)
      }
    />
  );
};

DynamicTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  propsName: PropTypes.string.isRequired,
  keyIndex: PropTypes.number.isRequired,
  field: PropTypes.shape({
    labelText: PropTypes.string, // not required for toolip wrapper
    invalid: PropTypes.func.isRequired,
    invalidText: PropTypes.func.isRequired,
    placeholder: PropTypes.func.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  parentState: PropTypes.shape({}).isRequired,
  parentProps: PropTypes.shape({}).isRequired,
};

const DynamicMultiSelect = (props) => {
  // quick ref for state value
  let stateValue = props.field.onRender
    ? props.field.onRender(props.parentState)
    : props.parentState[props.name];
  // should always be invalid when no selection is made
  let invalid =
    stateValue.length > 0
      ? props.field.invalid(props.parentState, props.parentProps)
      : true;
  let groups = // if no value, prepend `""` so that it is selected on render
    (isNullOrEmptyString(stateValue) || !stateValue ? [""] : []).concat(
      // filter groups if function, otherwise get array
      isFunction(props.field.groups)
        ? props.field.groups(props.parentState, props.parentProps)
        : props.field.groups,
    );
  // hide text when tooltip so that multiple name labels are not rendered
  let labelText = props.field.tooltip
    ? null
    : titleCase(props.field.labelText || props.name);
  return (
    <FilterableMultiSelect
      key={
        props.field.forceUpdateKey
          ? props.field.forceUpdateKey(props.parentState)
          : undefined
      }
      id={dynamicFieldId(props)}
      className={addClassName("leftTextAlign", props.field)}
      titleText={titleCase(props.name)}
      itemToString={(item) => (item ? item : "")}
      invalid={invalid}
      invalidText={props.field.invalidText(
        props.parentState,
        props.parentProps,
      )}
      initialSelectedItems={stateValue}
      onChange={(selectEvent) => {
        let event = {
          target: {
            name: props.name,
            value: selectEvent.selectedItems,
          },
        };
        props.handleInputChange(event);
      }}
      items={groups}
      useTitleInItem={props.useTitleInItem || false}
      label={labelText}
      disabled={props.field.disabled(props.parentState, props.parentProps)}
    />
  );
};

DynamicMultiSelect.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  parentState: PropTypes.shape({}).isRequired,
  parentProps: PropTypes.shape({}).isRequired,
  field: PropTypes.shape({
    onRender: PropTypes.func,
    invalid: PropTypes.func.isRequired,
    groups: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.func,
    ]).isRequired,
    tooltip: PropTypes.shape({}),
    labelText: PropTypes.string,
    forceUpdateKey: PropTypes.func,
    disabled: PropTypes.func.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export {
  DynamicFormTextInput,
  DynamicFormSelect,
  DynamicFormToggle,
  DynamicTextArea,
  DynamicMultiSelect,
};
