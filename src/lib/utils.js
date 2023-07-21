const { addClassName, toggleMarginBottom } = require("./form-utils");

/**
 * handle number dropdown event function
 * @param {*} props
 * @param {Function} props.handleInputChange
 * @returns {Function} handle input change
 */
function handleNumberDropdownEvent(props) {
  /**
   * handle input change
   * @param {*} event
   */
  function handleInputChange(event) {
    // set name target value and parse int
    let sendEvent = {
      target: {
        name: event.target.name,
        value: parseInt(event.target.value),
      },
    };
    props.handleInputChange(sendEvent);
  }
  return handleInputChange;
}

/**
 * get title group params
 * @param {Object} props
 * @param {boolean} props.hide
 * @param {string} props.className
 * @returns {Object} params object
 */
function titleGroupParams(props) {
  return addClassName(
    `displayFlex alignItemsCenter widthOneHundredPercent ${toggleMarginBottom(
      props.hide
    )}`,
    props
  );
}

/**
 *
 * @param {Object} props
 * @param {boolean} props.noMarginBottom
 * @param {string} props.className
 * @returns {Object} params object
 */
function formGroupParams(props) {
  let formGroupClassName =
    "displayFlex marginBottom evenSpacing wrap alignItemsTop";
  // remove margin bottom from formGroup for VPC
  if (props.noMarginBottom) {
    formGroupClassName = formGroupClassName.replace(/\smarginBottom/g, "");
  }
  formGroupClassName = addClassName(formGroupClassName, props);

  return formGroupClassName;
}

/**
 * get icse sub form params
 * @param {Object} props
 * @param {boolean} props.formInSubForm
 * @returns {Object} params object
 */
function icseSubFormParams(props) {
  return addClassName(
    props.formInSubForm
      ? "formInSubForm positionRelative"
      : "subForm marginBottomSmall",
    props
  );
}

/**
 * get icse heading params
 * @param {Object} props
 * @param {boolean} props.toggleFormTitle
 * @param {string} props.name
 * @param {string} props.className
 */
function icseHeadingParams(props) {
  let titleFormDivClass = props.toggleFormTitle
    ? ""
    : props.name === ""
    ? ""
    : " icseFormTitleMinHeight";

  return (
    addClassName(
      "displayFlex spaceBetween widthOneHundredPercent alignItemsCenter",
      props
    ) + titleFormDivClass
  );
}

/**
 * get stateless toggle form params
 * @param {Object} props
 * @param {boolean} props.toggleFormTitle
 * @param {boolean} props.subHeading
 * @param {boolean} props.hide
 * @param {boolean} props.alwaysShowButtons
 * @returns {Object} params object
 */
function statelessToggleFormParams(props) {
  let type = props.toggleFormTitle
    ? "p"
    : props.subHeading
    ? "subHeading"
    : "heading";
  let dynamicRenderHide =
    props.hide === true && props.alwaysShowButtons !== true;

  return { type, dynamicRenderHide };
}
module.exports = {
  handleNumberDropdownEvent,
  titleGroupParams,
  formGroupParams,
  icseSubFormParams,
  icseHeadingParams,
  statelessToggleFormParams,
};
