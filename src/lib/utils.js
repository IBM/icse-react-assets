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
module.exports = {
  handleNumberDropdownEvent,
  titleGroupParams,
  formGroupParams,
};
