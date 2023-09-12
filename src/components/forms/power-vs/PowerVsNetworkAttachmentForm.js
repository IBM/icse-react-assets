import React from "react";
import PropTypes from "prop-types";
import { IcseMultiSelect } from "../../MultiSelects";
import { buildFormFunctions } from "../../component-utils";
import { IcseFormGroup } from "../../Utils";

class PowerVsNetworkAttachmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
  }

  handleMultiSelectChange(event) {
    this.setState({ connections: event.selectedItems });
  }

  render() {
    return (
      <IcseFormGroup>
        <IcseMultiSelect
          titleText="Connections"
          className="fieldWidth"
          id={this.props.data.network + "-power-connections"}
          items={this.props.cloud_connections}
          initialSelectedItems={this.state.connections}
          onChange={this.handleMultiSelectChange}
        />
      </IcseFormGroup>
    );
  }
}

PowerVsNetworkAttachmentForm.propTypes = {
  data: PropTypes.shape({
    connections: PropTypes.arrayOf(PropTypes.string).isRequired,
    network: PropTypes.string.isRequired,
  }), // not required as not abailable on load
  cloud_connections: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default PowerVsNetworkAttachmentForm;
