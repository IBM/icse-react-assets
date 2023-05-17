import React from "react";
import PropTypes from "prop-types";
import { buildFormFunctions } from "../../component-utils";
import { IcseNameInput, IcseTextInput } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import { TextArea } from "@carbon/react";
import { VpcListMultiSelect } from "../../MultiSelects";

class DnsZoneForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  /**
   * handle vpc multiselect
   * @param {event} event
   */
  handleMultiSelect(name, event) {
    this.setState({ [name]: event });
  }

  render() {
    return (
      <div id="dns-zone-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-dns-zone-name"}
            componentName="dns-zone"
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText={true}
            invalidCallback={() =>
              this.props.invalidNameCallback(this.state, this.props)
            }
            invalidText={this.props.invalidNameTextCallback(
              this.state,
              this.props
            )}
          />
          <VpcListMultiSelect
            id={this.props.data.name + "-vpc-multiselect"}
            titleText="Permitted Networks"
            initialSelectedItems={this.state.vpcs}
            vpcList={this.props.vpcList}
            onChange={(event) => this.handleMultiSelect("vpcs", event)}
          />
          <IcseTextInput
            id={this.props.data.label + "-dns-zone-label"}
            labelText="Label"
            field="label"
            value={this.state.label}
            onChange={this.handleInputChange}
            componentName="dns-zone"
            invalidCallback={() =>
              this.props.invalidLabelCallback(this.state, this.props)
            }
            invalidText={this.props.invalidLabelTextCallback(
              this.state,
              this.props
            )}
          />
        </IcseFormGroup>
        <TextArea
          id={this.props.data.name + "-dns-zone-description"}
          className="textInputWide"
          name="description"
          value={this.state.description}
          labelText="Description"
          onChange={this.handleInputChange}
          enableCounter={true}
          invalid={this.props.invalidDescriptionCallback(
            this.state,
            this.props
          )}
          invalidText={this.props.invalidDescriptionTextCallback(
            this.state,
            this.props
          )}
        />
      </div>
    );
  }
}

DnsZoneForm.defaultProps = {
  data: {
    name: "",
    description: "",
    label: "",
    vpcs: [],
  },
  vpcList: [],
  isModal: false,
};

DnsZoneForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    label: PropTypes.string,
    vpcs: PropTypes.array,
  }),
  invalidLabelCallback: PropTypes.func.isRequired,
  invalidLabelTextCallback: PropTypes.func.isRequired,
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.array.isRequired,
  isModal: PropTypes.bool,
};

export default DnsZoneForm;
