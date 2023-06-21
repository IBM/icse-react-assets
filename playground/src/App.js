import React from "react";
import { NetworkingRulesOrderCard } from "icse-react-assets";
import { contains } from "lazy-z";

import "./App.css";

const NetworkingRulesOrderCardSgStory = () => {
  function invalidCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name);
  }

  function invalidTextCallback(stateData, componentProps) {
    return contains(["foo", "bar"], stateData.name)
      ? `Rule name ${stateData.name} already in use.`
      : `Invalid Name. Must match the regular expression: /^[A-z]([a-z0-9-]*[a-z0-9])?$/i`;
  }

  function shouldDisableSave(stateData, componentProps) {
    return true;
  }

  function disableModalSubmit(stateData, componentProps) {
    return true;
  }

  function networkRuleOrderDidChange(newRulesOrder) {
    // add logic here to save reordered network rules
  }

  function onSubmitCallback(newRulesOrder) {
    // add logic here to create new rule
  }

  function onRuleSave(stateData, componentProp) {
    // add logic here to save rule
  }

  function onRuleDelete(stateData, componentProp) {
    // add logic here to delete rule
  }

  return (
    <NetworkingRulesOrderCard
      vpc_name="example-vpc"
      parent_name="example-security-group"
      invalidRuleText={invalidCallback}
      invalidRuleTextCallback={invalidTextCallback}
      networkRuleOrderDidChange={networkRuleOrderDidChange}
      rules={[
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-ibm-inbound",
          source: "161.26.0.0/16",
          icmp: {
            type: 22,
            code: 22,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "10.0.0.0/8",
          direction: "inbound",
          name: "allow-all-network-inbound",
          source: "10.0.0.0/8",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: 23,
            port_max: 25,
            source_port_min: 24444,
            source_port_max: 24445,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
        {
          action: "allow",
          destination: "0.0.0.0/0",
          direction: "outbound",
          name: "allow-all-outbound",
          source: "0.0.0.0/0",
          icmp: {
            type: null,
            code: null,
          },
          tcp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
          udp: {
            port_min: null,
            port_max: null,
            source_port_min: null,
            source_port_max: null,
          },
        },
      ]}
      disableSaveCallback={shouldDisableSave}
      disableModalSubmitCallback={disableModalSubmit}
      onSubmitCallback={onSubmitCallback}
      onRuleSave={onRuleSave}
      onRuleDelete={onRuleDelete}
    />
  );
};

function App() {
  return <NetworkingRulesOrderCardSgStory />;
}

export default App;
