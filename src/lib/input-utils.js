const { snakeCase, kebabCase, titleCase, isBoolean } = require("lazy-z");
const { addClassName } = require("./form-utils");
const { formatInputPlaceholder } = require("./text-utils");

/**
 * create params for icse toggle
 * @param {*} props
 * @param {string=} props.toggleFieldName
 * @param {string=} props.labelText
 * @param {boolean=} props.useOnOff
 * @param {string} props.id
 * @param {Object=} props.tooltip
 * @returns {Object} params object
 */
function toggleParams(props) {
  let toggleName = props.toggleFieldName || snakeCase(props.labelText);
  let labelA = props.useOnOff ? "Off" : "False",
    labelB = props.useOnOff ? "On" : "True",
    labelText = props.tooltip ? " " : props.labelText,
    id = kebabCase(toggleName) + "-icse-toggle-" + props.id,
    className =
      addClassName("leftTextAlign fitContent", props) +
      (props.tooltip ? " cds--form-item tooltip" : " cds--form-item");
  let onToggle = onToggleEvent(props, toggleName);
  return {
    toggleName,
    labelA,
    labelB,
    labelText,
    id,
    className,
    onToggle,
  };
}

/**
 * create on toggle function
 * @param {*} props component props
 * @param {string} toggleName toggle name
 * @returns {Function} on toggle function
 */
function onToggleEvent(props, toggleName) {
  /**
   * run on toggle event
   * @param {event} event
   */
  function onToggle(event) {
    props.onToggle(toggleName, event);
  }
  return onToggle;
}

/**
 * text input params
 * @param {*} props
 * @param {string} props.field
 * @param {string=} props.invalidText
 * @param {boolean=} props.invalid
 * @param {Function=} props.invalidCallback
 * @param {boolean=} props.optional
 * @param {string=} props.componentName
 * @param {string=} props.labelText
 * @param {Function} props.onChange
 * @returns {Object} params object
 */
function textInputParams(props) {
  let fieldName = titleCase(props.field);
  let invalidText = props.invalidText
      ? props.invalidText
      : `Invalid ${props.field} value.`,
    invalid = isBoolean(props.invalid)
      ? props.invalid
      : props.invalidCallback(),
    placeholder =
      (props.optional ? "(Optional) " : "") +
      (props.placeholder ||
        formatInputPlaceholder(props.componentName, fieldName)),
    labelText = props.labelText ? props.labelText : fieldName,
    onInputChange = props.onChange;

  if (props.forceKebabCase) {
    onInputChange = function (event) {
      event.target.value = kebabCase(event.target.value);
      return props.onChange(event);
    };
  }

  return {
    invalid,
    invalidText,
    placeholder,
    labelText,
    onInputChange,
  };
}

module.exports = {
  toggleParams,
  onToggleEvent,
  textInputParams,
};
