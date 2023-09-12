import React from "react";
import PropTypes from "prop-types";
import IcseFormTemplate from "../IcseFormTemplate";
import { buildFormDefaultInputMethods } from "../component-utils";
import { PowerVsNetworkAttachmentForm } from "../forms/power-vs";

class PowerVsNetworkAttachment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
    this.handleToggle = this.handleToggle.bind(this);
    buildFormDefaultInputMethods(this);
  }

  handleToggle() {
    this.setState({ hide: !this.state.hide });
  }

  render() {
    return (
      <IcseFormTemplate
        name="Network Connections"
        subHeading
        hideFormTitleButton
        arrayData={this.props.attachments}
        innerForm={PowerVsNetworkAttachmentForm}
        disableSave={this.props.disableSave}
        propsMatchState={this.props.propsMatchState}
        onSubmit={() => {}}
        onDelete={() => {}}
        onSave={this.props.onAttachmentSave}
        toggleFormFieldName="network"
        innerFormProps={{
          cloud_connections: this.props.cloud_connections,
          arrayParentName: this.props.workspace,
          craig: this.props.craig,
        }}
        hideAbout
        toggleFormProps={{
          hideName: true,
          submissionFieldName: "attachments",
          disableSave: this.props.disableSave,
          type: "formInSubForm",
          noDeleteButton: true,
        }}
      />
    );
  }
}

PowerVsNetworkAttachment.propTypes = {
  attachments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  onAttachmentSave: PropTypes.func.isRequired,
  cloud_connections: PropTypes.arrayOf(PropTypes.string).isRequired,
  workspace: PropTypes.string.isRequired,
  craig: PropTypes.shape({}).isRequired,
};

export default PowerVsNetworkAttachment;
