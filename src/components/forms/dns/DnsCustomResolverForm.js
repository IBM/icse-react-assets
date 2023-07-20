import React from "react";
import PropTypes from "prop-types";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../../component-utils";
import { IcseNameInput, IcseToggle } from "../../Inputs";
import { IcseFormGroup } from "../../Utils";
import { TextArea } from "@carbon/react";
import { IcseSelect } from "../../Dropdowns";
import { SubnetMultiSelect } from "../../MultiSelects";
import { handleDnsResolverInputChange } from "../../../lib/forms";

class DnsCustomResolverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelect = this.handleMultiSelect.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in state
   * @param {*} value value to update
   */
  handleInputChange(event) {
    this.setState(handleDnsResolverInputChange(this.state, event));
  }

  /**
   * Toggle on and off param in state at name
   * @param {string} name name of the object key to change
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle subnet multiselect
   * @param {value} value
   */
  handleMultiSelect(name, value) {
    this.setState(this.setNameToValue(name, value));
  }

  render() {
    return (
      <div id="dns-custom-resolver-form">
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-dns-custom-resolver"}
            componentName={this.props.data.name + "-dns-custom-resolver"}
            value={this.state.name}
            onChange={this.handleInputChange}
            hideHelperText
            invalidCallback={() =>
              this.props.invalidNameCallback(this.state, this.props)
            }
            invalidText={this.props.invalidNameTextCallback(
              this.state,
              this.props,
            )}
          />
          <IcseToggle
            tooltip={{
              content:
                "To meet high availability status, configure custom resolvers with a minimum of two resolver locations",
              align: "bottom-left",
            }}
            labelText="High Availability"
            defaultToggled={this.state.high_availability}
            onToggle={this.handleToggle}
            className="fieldWidth"
            toggleFieldName="high_availability"
            id={this.props.data.name + "-high-availability"}
          />
          <IcseToggle
            labelText="Enabled"
            key={this.state.enabled}
            defaultToggled={this.state.enabled}
            onToggle={this.handleToggle}
            className="fieldWidth"
            toggleFieldName="enabled"
            id={this.props.data.name + "-enabled"}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName={`${this.props.data.name}-dns-custom-resolver-vpc`}
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText="Select a VPC."
            className="fieldWidth"
          />
          <SubnetMultiSelect
            key={this.state.vpc}
            id={this.props.data.name + "-dns-resolver-subnets"}
            initialSelectedItems={[...this.state.subnets]}
            vpc_name={this.state.vpc}
            onChange={(event) => this.handleMultiSelect("subnets", event)}
            subnets={[...this.getSubnetList()]}
            className="fieldWidth"
          />
        </IcseFormGroup>
        <TextArea
          id={this.props.data.name + "-dns-resolver-description"}
          className="textInputWide"
          name="description"
          value={this.state.description}
          labelText={"Description"}
          onChange={this.handleInputChange}
          enableCounter
          invalid={this.props.invalidDescriptionCallback(
            this.state,
            this.props,
          )}
          invalidText={this.props.invalidDescriptionTextCallback(
            this.state,
            this.props,
          )}
        />
      </div>
    );
  }
}

DnsCustomResolverForm.defaultProps = {
  data: {
    name: "",
    description: "",
    high_availability: true,
    enabled: false,
    vpc: "",
    subnets: [],
  },
  isModal: false,
};

DnsCustomResolverForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    enabled: PropTypes.bool,
    high_availability: PropTypes.bool,
    vpc: PropTypes.string,
    subnets: PropTypes.arrayOf(PropTypes.string),
  }),
  invalidNameCallback: PropTypes.func.isRequired,
  invalidNameTextCallback: PropTypes.func.isRequired,
  invalidDescriptionCallback: PropTypes.func.isRequired,
  invalidDescriptionTextCallback: PropTypes.func.isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string).isRequired,
  subnetList: PropTypes.array.isRequired,
  isModal: PropTypes.bool.isRequired,
};

export default DnsCustomResolverForm;
