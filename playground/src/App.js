import React from "react";

import "./App.css";
import {
  IcseFormGroup,
  IcseHeading,
  IcseMultiSelect,
  SaveAddButton,
  buildFormDefaultInputMethods,
  buildFormFunctions,
  StatelessToggleForm,
} from "icse-react-assets";
import { getObjectFromArray } from "lazy-z";
import { Network_3 } from "@carbon/icons-react";
import PropTypes from "prop-types";

class PowerVsNetworkAttachmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { attachments: [...this.props.data], hide: true };
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleMultiselectChange = this.handleMultiselectChange.bind(this);
    this.toggleHide = this.toggleHide.bind(this);
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

  render() {
    return (
      <StatelessToggleForm
        id={this.props.parentName + "-network-attachments"}
        name="Network Attachments"
        hide={this.state.hide}
        onIconClick={this.toggleHide}
        className="formInSubForm secretChecklistMargin"
        toggleFormTitle
        noMarginBottom
        buttons={
          <SaveAddButton
            disabled={this.props.propsMatchState(
              this.state.attachments,
              this.props.data,
            )}
            onClick={this.handleSave}
          />
        }
      >
        <div className="formInSubForm secretChecklistMargin">
          {this.props.networks.map((nw) => (
            <IcseFormGroup className="marginBottomSmall" key={nw}>
              <div
                className="displayFlex fieldWidth"
                style={{ marginTop: "1.75rem" }}
              >
                <Network_3
                  style={{ marginRight: "1rem", marginTop: ".30rem" }}
                />
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
                onChange={(items) => this.handleMultiselectChange(nw, items)}
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
  propsMatchState: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  workspace: PropTypes.string.isRequired,
};

const App = () => {
  return (
    <div className="subForm">
      <PowerVsNetworkAttachmentForm
        networks={["example-1", "example-2", "example-3"]}
        cloudConnections={["connection-1", "connection-2", "connection-3"]}
        data={[
          {
            network: "example-1",
            connections: ["connection-1"],
          },
          {
            network: "example-2",
            connections: ["connection-1", "connection-3"],
          },
          {
            network: "example-3",
            connections: ["connection-1", "connection-2", "connection-3"],
          },
        ]}
        propsMatchState={(stateData, componentProps) => {
          return true;
        }}
        onSave={() => {
          alert("ding");
        }}
        workspace="example"
      />
    </div>
  );
};
export default App;
