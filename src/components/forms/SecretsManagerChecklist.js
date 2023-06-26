import React from "react";
import { Checkbox } from "@carbon/react";
import { contains, distinct, kebabCase, splat } from "lazy-z";
import { onCheckClick } from "../../lib/forms";
import { StatelessToggleForm } from "../Utils";
import PropTypes from "prop-types";

class SecretsManagerChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      selected:
        this.props.selected &&
        this.props.selected.length !== this.props.secrets.length
          ? this.props.selected
          : ["Select All"].concat([...splat(this.props.secrets, "ref")]),
    };

    this.onCheckClick = this.onCheckClick.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
  }

  onCheckClick(ref) {
    let selected = onCheckClick(this.state.selected, ref, this.props.secrets);
    this.setState(
      {
        selected: selected,
      },
      () => {
        this.props.onSelectChange(selected);
      }
    );
  }

  toggleHide() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    return (
      <StatelessToggleForm
        name="Import Existing Secrets"
        hide={this.state.hide}
        onIconClick={this.toggleHide}
        className="formInSubForm secretsChecklistPadding"
        toggleFormTitle
        noMarginBottom
      >
        <div className="formInSubForm secretChecklistMargin">
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
      </StatelessToggleForm>
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
