import React from "react";
import { Checkbox } from "@carbon/react";
import { contains, distinct, kebabCase, splat } from "lazy-z";
import { onCheckClick } from "../../lib/forms";
import PropTypes from "prop-types";

class SecretsManagerChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:
        this.props.selected &&
        this.props.selected.length !== this.props.secrets.length
          ? this.props.selected
          : ["Select All"].concat([...splat(this.props.secrets, "ref")]),
    };

    this.onCheckClick = this.onCheckClick.bind(this);
  }

  onCheckClick(ref) {
    this.setState(
      {
        selected: onCheckClick(this.state.selected, ref, this.props.secrets),
      },
      () => {
        this.props.onSelectChange(this.state.selected);
      }
    );
  }

  render() {
    return (
      <div className="subForm secretChecklistMargin">
        {distinct(
          ["Select All"].concat([...splat(this.props.secrets, "ref")])
        ).map((value) => (
          <Checkbox
            className="secretCheckBoxMargin"
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

SecretsManagerChecklist.defaultProps = {
  secrets: [],
};

SecretsManagerChecklist.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string),
  secrets: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onSelectChange: PropTypes.func.isRequired,
};

export default SecretsManagerChecklist;
