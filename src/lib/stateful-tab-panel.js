const { isFunction } = require("lazy-z");

/**
 * get stateful tab panel params
 * @param {Object} props
 * @param {boolean} props.subHeading
 * @param {boolean} props.hideFormTitleButton
 * @param {function} props.onClick
 * @param {boolean} props.hasBuiltInHeading
 * @param {string} props.name
 * @param {Object} state
 * @returns
 */
function statefulTabPanelParams(props, state) {
  let headingType = props.subHeading ? "subHeading" : "heading";
  let dynamicRenderHide =
    props.hideFormTitleButton ||
    state.tabIndex !== 0 ||
    !isFunction(props.onClick) ||
    props.hasBuiltInHeading;
  let headingHide = props.name && !props.hasBuiltInHeading;
  let buttonIsDisabled = props.shouldDisableSave
    ? props.shouldDisableSave()
    : false;

  return { headingType, dynamicRenderHide, headingHide, buttonIsDisabled };
}

module.exports = {
  statefulTabPanelParams,
};
