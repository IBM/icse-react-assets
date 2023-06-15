import React from "react";
import { Checkbox } from "@carbon/react";
import { contains, distinct, kebabCase, splat } from "lazy-z";
import { onCheckClick } from "../../lib/forms";

class SecretsManagerChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ["Select All"].concat([...splat(this.props.secrets, "ref")]),
    };

    this.onCheckClick = this.onCheckClick.bind(this);
  }

  onCheckClick(ref) {
    this.setState({
      selected: onCheckClick(this.state.selected, ref, this.props.secrets),
    });
  }

  render() {
    return (
      <div>
        {distinct(
          ["Select All"].concat([...splat(this.props.secrets, "ref")])
        ).map((value) => (
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

export default SecretsManagerChecklist;
