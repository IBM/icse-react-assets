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

/**
 * get params for edit close icon
 * @param {*} props
 * @param {String} props.hoverText
 * @param {boolean} props.open
 * @param {string} props.type
 * @returns {Object} params object
 */
function editCloseParams(props) {
  let hoverText = props.hoverText
    ? props.hoverText
    : props.open
    ? "Close"
    : props.type === "add"
    ? "Configure Resource"
    : "Open";
  return { hoverText };
}

/**
 * get params for delete button
 * @param {*} props
 * @param {boolean} props.disabled
 * @param {string} props.disabledDeleteMessage
 * @returns {Object} params object
 */
function deleteButtonParams(props) {
  let hoverText =
    props.disabled && props.disableDeleteMessage
      ? props.disableDeleteMessage
      : "Delete Resource";
  let popoverClassName = props.disabled ? "inlineBlock cursorNotAllowed" : "";
  let buttonClassName =
    "cds--btn--danger--tertiary forceTertiaryButtonStyles" +
    (props.disabled ? " pointerEventsNone" : "");
  let iconClassName = props.disabled ? "" : "redFill";
  return { hoverText, popoverClassName, buttonClassName, iconClassName };
}

module.exports = {
  saveChangeButtonClass,
  saveAddParams,
  editCloseParams,
  deleteButtonParams,
};
