const { isNullOrEmptyString, kebabCase } = require("lazy-z");
const { prependEmptyStringWhenNull } = require("./form-utils");

/**
 * generate parameters for icse select
 * @param {*} props
 * @returns {Object} parameters
 */
function icseSelectParams(props) {
  let invalid = // automatically set to invalid if value is null or empty string and invalid not disabled
    props.disableInvalid !== true && isNullOrEmptyString(props.value)
      ? true
      : props.invalid;
  let groups =
    props.groups.length === 0
      ? [] // if no groups, empty array
      : prependEmptyStringWhenNull(
          // otherwise try and prepend empty string if null or empty string is allowed
          props.disableInvalid ? "" : props.value,
          props.groups
        );
  let popoverClassName = props.tooltip ? "tooltip select" : " select";
  let wrapperId = kebabCase(props.name) + "-dropdown-tooltip";
  let selectId = kebabCase(props.formName + " " + props.name);
  let labelText = props.tooltip ? null : props.labelText;
  return {
    invalid,
    groups,
    popoverClassName,
    wrapperId,
    selectId,
    labelText,
  };
}

module.exports = {
  icseSelectParams,
};
