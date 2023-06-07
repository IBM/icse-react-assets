/**
 * create classname for sub form chevron save button
 * @param {*} componentProps
 * @returns {string} classNames for button
 */
function saveChangeButtonClass(componentProps) {
  let className = "forceTertiaryButtonStyles";
  if (componentProps.noDeleteButton !== true) className += " marginRightSmall";
  if (componentProps.disabled !== true) className += " tertiaryButtonColors";
  return className;
}

/**
 * get params for save add button this is tested here to reduce
 * number of needed unit tests for individual components
 * @param {*} props
 * @param {string} props.type
 * @param {string} props.hoverText
 * @param {boolean=} props.disabled
 * @param {boolean=} props.inline
 * @param {string=} props.className
 * @returns {Object} params object
 */
function saveAddParams(props) {
  let hoverText =
    props.type === "add" && props.hoverText === "Save Changes"
      ? "Add Resource"
      : props.hoverText;
  let wrapperClassDisabled = props.disabled
    ? "inlineBlock cursorNotAllowed"
    : "";
  let wrapperClassInline = props.inline
    ? " alignItemsCenter marginTopLarge inLineFormButton"
    : "";
  let buttonKind =
    props.type === "add" || props.type === "custom" ? "tertiary" : "primary";
  let buttonClass =
    saveChangeButtonClass(props) +
    (props.disabled === true
      ? " pointerEventsNone "
      : " " + (props.className || ""));
  return {
    hoverText,
    wrapperClassDisabled,
    wrapperClassInline,
    buttonKind,
    buttonClass,
  };
}

module.exports = { saveChangeButtonClass, saveAddParams };
