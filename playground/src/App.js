import React from "react";
import { DnsRecordForm } from "icse-react-assets";
import { contains, kebabCase, splat } from "lazy-z";

import "./App.css";
import { Checkbox } from "@carbon/react";
import { SecretsManagerChecklist } from "icse-react-assets";

const exampleData = [
  {
    cos: "atracker-cos",
    key: "cos-bind-key",
    ref: "ibm_resource_key.atracker_cos_object_storage_key_cos_bind_key",
  },
  {
    appid: "default",
    key: "test",
    ref: "ibm_resource_key.default_key_test",
  },
  {
    ref: "ibm_resource_key.logdna_key",
    key: "logdna-key",
  },
  {
    ref: "ibm_resource_key.sysdig_key",
    key: "sysdig-key",
  },
];

class Secrets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ["Select All"].concat([...splat(this.props.secrets, "ref")]),
    };

    this.onCheckClick = this.onCheckClick.bind(this);
  }

  onCheckClick(ref) {
    let selected = [];
    if (ref === "Select All" && contains(this.state.selected, ref)) {
      selected = [];
    } else if (ref === "Select All") {
      selected = ["Select All"].concat([...splat(this.props.secrets, "ref")]);
    } else if (contains(this.state.selected, ref)) {
      selected = [...this.state.selected];
      selected.splice(selected.indexOf(ref), 1);
    } else {
      selected = [...this.state.selected].concat([ref]);
    }
    this.setState({ selected });
  }

  render() {
    return (
      <div>
        {this.state.selected.map((value) => (
          <Checkbox
            id={value}
            key={kebabCase(value)}
            labelText={value}
            checked={contains(this.state.selected, value)}
            onChange={() => this.onCheckClick(value)}
          />
        ))}
      </div>
    );
  }
}

function App() {
  return <SecretsManagerChecklist secrets={exampleData} />;
}

export default App;
