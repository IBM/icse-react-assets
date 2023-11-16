<DynamicForm
  data={{
    name: "dev",
    resource_group: "",
    use_data: false,
    keys: [
      {
        appid: "dev",
        name: "frog",
      },
      {
        appid: "dev",
        name: "toad",
      },
    ],
  }}
  formName="appid"
  form={{
    groups: [
      {
        name: {
          type: "text",
          invalid: invalidCallback,
          invalidText: invalidTextCallback,
          helperText: function (stateData) {
            return `iac-appid-${stateData.name}`;
          },
          disabled: function () {
            return false;
          },
          disabledText: function () {
            return "";
          },
          size: "small",
        },
        resource_group: {
          type: "select",
          invalid: function (stateData) {
            return isNullOrEmptyString(stateData.resource_group);
          },
          invalidText: function () {
            return "Select a resource group";
          },
          disabled: function () {
            return false;
          },
          size: "small",
          groups: ["rg-1", "rg-2"],
        },
        use_data: {
          type: "toggle",
          size: "small",
          labelText: "Use Existing Instance",
          disabled: function () {
            return false;
          },
        },
      },
      {
        encryption_key: {
          type: "select",
          invalid: function (stateData) {
            return isNullOrEmptyString(stateData.encryption_key);
          },
          invalidText: function () {
            return "Select an encryption key";
          },
          groups: ["key1", "key2"],
          disabled: function () {
            return false;
          },
          size: "small",
          hideWhen: function (stateData) {
            return stateData.use_data === true;
          },
        },
      },
    ],
  }}
/>;
