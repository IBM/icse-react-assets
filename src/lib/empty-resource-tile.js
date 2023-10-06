/**
 * get params for empty resource tile
 * @param {Object} props
 * @param {(boolean|*[])} props.showIfEmpty if array is empty or boolean is false, show the empty resource tile
 * @param {boolean} props.noMarginTop
 */
function emptyResourceTileParams(props) {
  let show = !props.showIfEmpty || props.showIfEmpty.length === 0;
  let className =
    "tileBackground displayFlex alignItemsCenter wrap" +
    (props.noMarginTop ? "" : " marginTop");

  return { show, className };
}

module.exports = {
  emptyResourceTileParams,
};
