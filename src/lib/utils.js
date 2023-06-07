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
  };
  return handleInputChange;
}

module.exports = {
  handleNumberDropdownEvent,
};
