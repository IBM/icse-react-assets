import React, { Component } from "react";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import PropTypes from "prop-types";
import { IcseSelect, IcseFormGroup, IcseToggle, IcseNameInput } from "../";

/**
 * Object storage
 */
class ObjectStorageInstancesForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleInputChange(name, value) {
    let inst = { ...this.state };
    inst[name] = value;
    this.setState({ ...inst });
  }

  render() {
    let composedId = `object-storage-form-${this.props.data.name}-`;
    return (
      <>
        <IcseFormGroup>
          <IcseToggle
            tooltip={{
              content:
                "Service credentials and buckets will be created for your environment even when using an existing Object Storage instance.",
            }}
            id={composedId + "use-data"}
            toggleFieldName="use_data"
            labelText="Use Existing Instance"
            defaultToggled={this.state.use_data}
            onToggle={this.handleInputChange}
            isModal={this.props.isModal}
          />
          <IcseToggle
            tooltip={{
              content:
                "Object storage bucket names must be unique across an account. Append a random suffix to maintain unique names across deployments.",
            }}
            id={composedId + "random-suffix"}
            labelText="Append Random Suffix to Names"
            toggleFieldName="random_suffix"
            defaultToggled={this.state.random_suffix}
            onToggle={this.handleInputChange}
            isModal={this.props.isModal}
          />
          <IcseSelect
            formName={this.props.data.name + "-object-storage-kms"}
            name="kms"
            labelText="Key Management Instance"
            groups={this.props.kmsList}
            value={this.state.kms}
            handleInputChange={(event) =>
              this.handleInputChange("kms", event.target.value)
            }
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseNameInput
            id={this.props.data.name + "-object-storage-name"}
            componentName={this.props.data.name}
            value={this.state.name}
            onChange={(event) =>
              this.handleInputChange("name", event.target.value)
            }
            helperTextCallback={() =>
              this.props.composedNameCallback(this.state, this.props)
            }
            invalid={this.props.invalidCallback(this.state, this.props)}
            invalidText={this.props.invalidTextCallback(this.state, this.props)}
          />
          <IcseSelect
            formName={this.props.data.name + "-object-storage-rg"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={(event) =>
              this.handleInputChange("resource_group", event.target.value)
            }
          />
        </IcseFormGroup>
        {/* show keys and buckets if not modal */}
        {this.props.isModal !== true && (
          <>
            {this.props?.subForms.map((form, index) => {
              return <div key={index}>{form}</div>;
            })}
          </>
        )}
      </>
    );
  }
}

ObjectStorageInstancesForm.defaultProps = {
  data: {
    name: "",
    use_data: false,
    resource_group: "",
    random_suffix: true,
  },
  resourceGroups: [],
};

ObjectStorageInstancesForm.propTypes = {
  isModal: PropTypes.bool,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    use_data: PropTypes.bool.isRequired,
    resource_group: PropTypes.string,
    random_suffix: PropTypes.bool.isRequired,
  }),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
  subForms: PropTypes.arrayOf(PropTypes.node),
};

export default ObjectStorageInstancesForm;
