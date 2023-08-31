import React from "react";

import "./App.css";
import { OpaqueIngressSecretForm } from "icse-react-assets";

const App = () => {
  function fakeCallback(state, props) {
    return "";
  }

  return (
    <OpaqueIngressSecretForm
      data={{ labels: ["hello", "world"], interval: 1 }}
      secretsManagerList={["sm1", "sm2", "sm3"]}
      secretsManagerGroupCallback={fakeCallback}
      secretsManagerGroupCallbackText={fakeCallback}
      secretCallback={fakeCallback}
      secretCallbackText={fakeCallback}
      descriptionInvalid={fakeCallback}
      descriptionInvalidText={fakeCallback}
      labelsInvalid={fakeCallback}
      labelsInvalidText={fakeCallback}
    />
  );
};
export default App;
