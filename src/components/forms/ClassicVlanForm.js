import React, { Component } from "react";
import { IcseNameInput } from "../Inputs";
import { IcseFormGroup } from "../Utils";
import { IcseSelect } from "../Dropdowns";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { titleCase } from "lazy-z";
import PropTypes from "prop-types";

function vlanTypeTitleCase(str) {
  return titleCase(str.toLowerCase());
}

class ClassicVlanForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  /**
   * handle input change
   * @param {event} event event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value.toUpperCase() });
  }

  render() {
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={this.state.name + "-name"}
            value={this.state.name}
            onChange={this.handleInputChange}
            componentProps={this.props}
            hideHelperText
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            labelText={"VLAN Type"}
            name={"type"}
            formName={this.props.data.name + "-type"}
            groups={["PUBLIC", "PRIVATE"].map(vlanTypeTitleCase)}
            value={vlanTypeTitleCase(this.state.type)}
            handleInputChange={this.handleTypeChange}
            invalidText={"Select a VLAN type."}
            id={`${this.props.data.name}-type`}
          />
          <IcseSelect
            labelText={"Datacenter"}
            name={"datacenter"}
            formName={this.props.data.name + "-datacenter"}
            groups={this.props.datacenters}
            value={this.state.datacenter}
            handleInputChange={this.handleInputChange}
            invalidText={"Select a datacenter."}
            id={`${this.props.data.name}-datacenter`}
          />
        </IcseFormGroup>
      </>
    );
  }
}

ClassicVlanForm.defaultProps = {
  data: {
    name: "",
    type: "",
    datacenter: "",
  },
};

ClassicVlanForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    datacenter: PropTypes.string,
  }).isRequired,
  datacenters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ClassicVlanForm;
