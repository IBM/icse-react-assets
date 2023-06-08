/**
 * get icse form template params
 * @param {Object} props
 * @param {boolean} props.overrideTile
 * @param {array} props.arrayData
 * @param {boolan} props.subHeading
 * @returns {Object} params object
 */
function icseFormTemplateParams(props) {
  let arrayIsEmpty = props.arrayData.length === 0 && props.overrideTile;
  let tabPanelClassName = props.subHeading
    ? "subHeading marginBottomSmall"
    : "";

  return { arrayIsEmpty, tabPanelClassName };
}

module.exports = {
  icseFormTemplateParams,
};
