const { contains, splat } = require("lazy-z");

/**
 * on checklist click
 * @param {Array<string>} items items selected
 * @param {string} ref reference to check
 * @param {Array<object>} secrets list of secrets objects
 * @returns {Array<string>} list of selected items
 */
function onCheckClick(items, ref, secrets) {
  let selected = [];
  if (ref === "Select All" && contains(items, ref)) {
    selected = [];
  } else if (ref === "Select All") {
    selected = ["Select All"].concat([...splat(secrets, "ref")]);
  } else if (contains(items, ref)) {
    selected = [...items];
    selected.splice(selected.indexOf(ref), 1);
  } else {
    selected = [...items].concat([ref]);
  }
  return selected;
}

module.exports = {
  onCheckClick,
};
