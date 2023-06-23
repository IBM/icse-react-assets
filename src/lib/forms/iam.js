/**
 * handle input change of number-only fields
 * @param {event} event
 */
function handleNumberInputChange(event) {
  let value = parseInt(event.target.value) || null;
  if (value || event.target.value === "") {
    return { [event.target.name]: value };
  } else {
    return null;
  }
}

module.exports = {
  handleNumberInputChange,
};
