import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { IcseFormGroup } from "../Utils";
import { IcseNameInput, IcseTextInput, IcseToggle } from "../Inputs";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";
import { IcseSelect } from "../Dropdowns";
import {
  Tile,
  DatePicker,
  DatePickerInput,
  Tag,
  TextArea,
  NumberInput,
} from "@carbon/react";
import "./opaque-ingress-secret.css";

const labelColors = [
  "red",
  "magenta",
  "purple",
  "blue",
  "cyan",
  "teal",
  "green",
];

class OpaqueIngressSecretForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleLabels = this.handleLabels.bind(this);
    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
  }

  /**
   * handle text input change
   * @param {event} event
   */
  handleInputChange(event) {
    this.setState(this.eventTargetToNameAndValue(event));
  }

  /**
   * handle toggle
   * @param {event} event
   */
  handleToggle(name) {
    this.setState(this.toggleStateBoolean(name, this.state));
  }

  /**
   * handle labels
   * @param {event} event
   */
  handleLabels(event) {
    let labelList = event.target.value
      ? event.target.value
          .replace(/\s\s+/g, "") // replace extra spaces
          .replace(/,(?=,)/g, "") // prevent null tags from
          .replace(/[^\w,-]/g, "")
          .split(",")
      : [];
    this.setState({ labels: labelList });
  }

  render() {
    let composedId = `opaque-ingress-secrets-from-${this.props.data.name}`;
    let tileClassName = this.props.isModal ? "formInSubForm" : "subForm";
    return (
      <>
        <IcseFormGroup>
          <IcseNameInput
            id={composedId + "-name"}
            component="opaque_ingress_secrets"
            componentName={this.props.data.name}
            componentProps={this.props}
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="my-opaque-ingress-name"
            invalidCallback={() =>
              this.props.secretCallback(this.state, this.props)
            }
            invalidText={this.props.secretCallbackText(this.state, this.props)}
            className="fieldWidthSmaller"
            field="name"
            hideHelperText
          />
          <IcseTextInput
            id={composedId + "-namespace"}
            componentName={this.props.data.namespace}
            labelText="Namespace"
            placeholder="my-namespace"
            value={this.state.namespace}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.secretCallback(this.state, this.props)
            }
            invalidText={this.props.secretCallbackText(this.state, this.props)}
            className="fieldWidthSmaller"
            field="namespace"
          />
          <IcseToggle
            tooltip={{
              content:
                "The persistence field ensures that if a user inadvertently deletes the secret from the cluster, it will be recreated.",
              alignModal: "bottom",
              align: "bottom",
            }}
            labelText="Persistence"
            defaultToggled={this.state.persistence}
            id={composedId + "-persistence-toggle"}
            onToggle={() => this.handleToggle("persistence")}
            isModal={this.props.isModal}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="Opaque Secrets Ingress Form"
            name="secrets_manager"
            groups={this.props.secretsManagerList}
            value={this.state.secrets_manager}
            labelText="Secrets Manager"
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseTextInput
            id={composedId + "-secrets-group"}
            componentName={this.props.data.secrets_group}
            labelText="Secrets Group"
            placeholder="my-secrets-group"
            value={this.state.secrets_group}
            onChange={this.handleInputChange}
            invalidCallback={() =>
              this.props.secretsManagerGroupCallback(this.state, this.props)
            }
            invalidText={this.props.secretsManagerGroupCallbackText(
              this.state,
              this.props,
            )}
            className="fieldWidthSmaller"
            field="secrets_group"
          />
          <DatePicker
            datePickerType="single"
            dateFormat="Y-m-d"
            value={this.state.expiration_date}
          >
            <DatePickerInput
              placeholder="YYYY-MM-DD"
              labelText="Expiration Date"
              id={composedId + "-expiration-date"}
            />
          </DatePicker>
        </IcseFormGroup>
        <IcseFormGroup>
          <TextArea
            className="wide"
            id="labels"
            labelText="Labels"
            placeholder="hello,world"
            value={String(this.state.labels)}
            onChange={this.handleLabels}
            invalid={this.props.labelsInvalid(this.state, this.props)}
            invalidText={this.props.labelsInvalidText(this.state, this.props)}
            helperText="Enter a comma separated list of tags"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <Tile className={tileClassName + " widthOneHundredPercent"}>
            <IcseFormGroup>
              <strong>Arbitrary Secret</strong>
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseTextInput
                id={composedId + "-arb-secret-name"}
                componentName={this.props.data.arbitrary_secret_name}
                labelText="Name"
                placeholder="my-secret-name"
                value={this.state.arbitrary_secret_name}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.secretCallback(this.state, this.props)
                }
                invalidText={this.props.secretCallbackText(
                  this.state,
                  this.props,
                )}
                field="arbitrary_secret_name"
                className="fieldWidth"
              />
              <IcseTextInput
                id={composedId + "-arb-secret-description"}
                componentName={this.props.data.arbitrary_secret_description}
                labelText="Description"
                placeholder="my-secret-description"
                value={this.state.arbitrary_secret_description}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.descriptionInvalid(this.state, this.props)
                }
                invalidText={this.props.descriptionInvalidText(
                  this.state,
                  this.props,
                )}
                field="arbitrary_secret_description"
                className="fieldWidth"
              />
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseTextInput
                id={composedId + "-arb-secret-data"}
                componentName={this.props.data.arbitrary_secret_data}
                labelText="Data"
                placeholder="my-secret-data"
                value={this.state.arbitrary_secret_data}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.descriptionInvalid(this.state, this.props)
                }
                invalidText={this.props.descriptionInvalidText(
                  this.state,
                  this.props,
                )}
                field="arbitrary_secret_data"
                className="fieldWidth"
              />
            </IcseFormGroup>
            <div className="marginBottomSmall">
              {this.state.labels.map((label, i) => (
                <Tag
                  key={"label" + i}
                  size="md"
                  type={labelColors[i % labelColors.length]}
                >
                  {label}
                </Tag>
              ))}
            </div>
          </Tile>
        </IcseFormGroup>
        <IcseFormGroup>
          <Tile className={tileClassName + " widthOneHundredPercent"}>
            <IcseFormGroup>
              <strong>Username Password Secret</strong>
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseTextInput
                id={composedId + "-username-password-secret-name"}
                componentName={this.props.data.username_password_secret_name}
                labelText="Name"
                placeholder="my-secret-name"
                value={this.state.username_password_secret_name}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.secretCallback(this.state, this.props)
                }
                invalidText={this.props.secretCallbackText(
                  this.state,
                  this.props,
                )}
                field="username_password_secret_name"
                className="fieldWidth"
              />
              <IcseTextInput
                id={composedId + "-username-password-secret-description"}
                componentName={
                  this.props.data.username_password_secret_description
                }
                labelText="Description"
                placeholder="my-secret-description"
                value={this.state.username_password_secret_description}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.descriptionInvalid(this.state, this.props)
                }
                invalidText={this.props.descriptionInvalidText(
                  this.state,
                  this.props,
                )}
                field="username_password_secret_description"
                className="fieldWidth"
              />
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseTextInput
                id={composedId + "-username-password-secret-username"}
                componentName={
                  this.props.data.username_password_secret_username
                }
                labelText="Username"
                placeholder="my-secret-username"
                value={this.state.username_password_secret_username}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.descriptionInvalid(this.state, this.props)
                }
                invalidText={this.props.descriptionInvalidText(
                  this.state,
                  this.props,
                )}
                field="username_password_secret_username"
                className="fieldWidth"
              />
              <IcseTextInput
                id={composedId + "-username-password-secret-password"}
                componentName={
                  this.props.data.username_password_secret_password
                }
                labelText="Password"
                placeholder="my-secret-password"
                value={this.state.username_password_secret_password}
                onChange={this.handleInputChange}
                invalidCallback={() =>
                  this.props.descriptionInvalid(this.state, this.props)
                }
                invalidText={this.props.descriptionInvalidText(
                  this.state,
                  this.props,
                )}
                field="username_password_secret_password"
                className="fieldWidth"
              />
            </IcseFormGroup>
            <IcseFormGroup>
              <IcseToggle
                labelText="Auto Rotate"
                defaultToggled={this.state.auto_rotate}
                id={composedId + "-auto-rotate-toggle"}
                onToggle={() => this.handleToggle("auto_rotate")}
                isModal={this.props.isModal}
              />
            </IcseFormGroup>
            {this.state.auto_rotate ? (
              <>
                <IcseFormGroup>
                  <NumberInput
                    id={composedId + "-interval"}
                    label="Interval"
                    value={this.state.interval}
                    defaultValue={this.props.interval}
                    min={1}
                    onChange={this.handleInputChange}
                    name="interval"
                    hideSteppers={true}
                    invalidText="Enter a number greater than or equal to 1"
                    className="fieldWidth"
                  />
                  <IcseSelect
                    formName="Opaque Secrets Ingress Form"
                    name="unit"
                    groups={["day", "month"]}
                    value={this.state.unit}
                    labelText="Unit"
                    handleInputChange={this.handleInputChange}
                    className="fieldWidth"
                  />
                </IcseFormGroup>
              </>
            ) : (
              ""
            )}
            <div className="marginBottomSmall">
              {this.state.labels.map((label, i) => (
                <Tag
                  key={"label" + i}
                  size="md"
                  type={labelColors[i % labelColors.length]}
                >
                  {label}
                </Tag>
              ))}
            </div>
          </Tile>
        </IcseFormGroup>
      </>
    );
  }
}

OpaqueIngressSecretForm.defaultProps = {
  data: {
    name: "",
    namespace: "",
    interval: 1,
    auto_rotate: false,
    labels: [],
  },
  isModal: false,
};

OpaqueIngressSecretForm.propTypes = {
  data: PropTypes.shape({
    cluster: PropTypes.string,
    name: PropTypes.string.isRequired,
    namespace: PropTypes.string,
    persistence: PropTypes.bool,
    secrets_manager: PropTypes.string,
    secrets_group: PropTypes.string,
    expiration_date: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    arbitrary_secret_name: PropTypes.string,
    arbitrary_secret_description: PropTypes.string,
    arbitrary_secret_data: PropTypes.string,
    username_password_secret_name: PropTypes.string,
    username_password_secret_description: PropTypes.string,
    username_password_secret_username: PropTypes.string,
    username_password_secret_password: PropTypes.string,
    interval: PropTypes.number.isRequired,
    auto_rotate: PropTypes.bool.isRequired,
    unit: PropTypes.string,
  }),
  secretsManagerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  secretsManagerGroupCallback: PropTypes.func.isRequired,
  secretsManagerGroupCallbackText: PropTypes.func.isRequired,
  secretCallback: PropTypes.func.isRequired,
  secretCallbackText: PropTypes.func.isRequired,
  descriptionInvalid: PropTypes.func.isRequired,
  descriptionInvalidText: PropTypes.func.isRequired,
  labelsInvalid: PropTypes.func.isRequired,
  labelsInvalidText: PropTypes.func.isRequired,
};

export default OpaqueIngressSecretForm;
