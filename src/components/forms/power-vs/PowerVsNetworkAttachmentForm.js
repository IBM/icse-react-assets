import React from "react";
import { Network_3 } from "@carbon/icons-react";
import { getObjectFromArray } from "lazy-z";
import PropTypes from "prop-types";
import { IcseFormGroup, StatelessToggleForm } from "../../Utils";
import { SaveAddButton } from "../../Buttons";
import { IcseMultiSelect } from "../../MultiSelects";
import "./power-attachment.css";

class PowerVsNetworkAttachmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { attachments: [...this.props.data], hide: true };
    this.handleSave = this.handleSave.bind(this);
    this.handleMultiselectChange = this.handleMultiselectChange.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
    this.disableSave = this.disableSave(this);
  }

  handleSave() {
    this.props.onSave(this.state, this.props);
  }

  handleMultiselectChange(network, connections) {
    let attachments = [...this.state.attachments];
    let stateObj = getObjectFromArray(attachments, "network", network);
    stateObj.connections = connections;
    this.setState({ attachments });
  }

  toggleHide() {
    this.setState({ hide: !this.state.hide });
  }

  disableSave() {
    return this.props.disableAttachmentSave(this.state, this.props);
  }

  render() {
    return (
      <StatelessToggleForm
        id={this.props.workspace + "-network-attachments"}
        name="Network Attachments"
        hide={this.state.hide}
        onIconClick={this.toggleHide}
        className="formInSubForm secretChecklistMargin"
        toggleFormTitle
        noMarginBottom
        buttons={
          <SaveAddButton
            disabled={this.disableSave}
            onClick={this.handleSave}
          />
        }
      >
        <div className="formInSubForm secretChecklistMargin">
          {this.props.networks.map((nw) => (
            <IcseFormGroup className="marginBottomSmall" key={nw}>
              <div className="displayFlex fieldWidth network-div">
                <Network_3 className="network-icon" />
                <p>{nw}</p>
              </div>
              <IcseMultiSelect
                titleText="Cloud Connections"
                items={this.props.cloudConnections}
                id={"power-connections-" + nw}
                className="fieldWidth"
                initialSelectedItems={
                  getObjectFromArray(this.state.attachments, "network", nw)
                    .connections
                }
                onChange={(items) =>
                  this.handleMultiselectChange(nw, items.selectedItems)
                }
              />
            </IcseFormGroup>
          ))}
        </div>
      </StatelessToggleForm>
    );
  }
}

PowerVsNetworkAttachmentForm.propTypes = {
  networks: PropTypes.arrayOf(PropTypes.string).isRequired,
  cloudConnections: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      network: PropTypes.string,
      connections: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
  disableAttachmentSave: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  workspace: PropTypes.string.isRequired,
};

// no default props needed here as this form will not be rendered in a modal

export default PowerVsNetworkAttachmentForm;
