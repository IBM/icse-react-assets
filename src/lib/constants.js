// Access Groups

const conditionOperators = {
  EQUALS: "Equals",
  EQUALS_IGNORE_CASE: "Equals (Ignore Case)",
  IN: "In",
  NOT_EQUALS_IGNORE_CASE: "Not Equals (Ignore Case)",
  NOT_EQUALS: "Not Equals",
  CONTAINS: "Contains",
};

const conditionOperatorGroups = [
  "Equals",
  "Equals (Ignore Case)",
  "In",
  "Not Equals (Ignore Case)",
  "Not Equals",
  "Contains",
];

module.exports = {
  conditionOperatorGroups,
  conditionOperators,
};
