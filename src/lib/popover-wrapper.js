/**
 * get popoverwraper params
 * @param {Object} props
 * @param {boolean} props.noPopover
 * @param {string} props.hoverText
 * @param {string} props.align
 * @param {string} props.contentClassName
 * @returns {Object} params object
 */
function popoverWrapperParams(props) {
  let noPopover = props.noPopover === true || props.hoverText === "";
  let autoAlign = props.align ? false : true;
  let contentClassName =
    "popover-box" +
    (props.contentClassName ? ` ${props.contentClassName}` : "");

  return { noPopover, autoAlign, contentClassName };
}

module.exports = {
  popoverWrapperParams,
};
