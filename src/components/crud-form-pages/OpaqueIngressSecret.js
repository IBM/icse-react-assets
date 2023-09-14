import React from "react";
import OpaqueIngressSecretForm from "../forms/OpaqueIngressSecretForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import { CloudAlerting } from "@carbon/icons-react";
import { Tile } from "@carbon/react";

export const NoSecretsManagerTile = () => {
  return (
    <Tile className="tileBackground displayFlex alignItemsCenter wrap marginTop">
      <CloudAlerting size="24" className="iconMargin" /> No Secrets Manager
      instances have been created. Create one from the{" "}
      <a className="no-secrets-link" href="/form/secretsManager">
        Secrets Manager Page
      </a>{" "}
      to enable Opaque Ingress Secrets.
    </Tile>
  );
};

export const OpaqueIngressSecret = (props) => {
  return props.isModal ? (
    ""
  ) : (
    <IcseFormTemplate
      name="Opaque Ingress Secrets"
      subHeading
      addText="Create a Opaque Ingress Secret"
      arrayData={props.opaque_secrets}
      innerForm={OpaqueIngressSecretForm}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      hideFormTitleButton={props.noSecretsManager}
      overrideTile={props.noSecretsManager ? <NoSecretsManagerTile /> : null}
      innerFormProps={{
        noSecretsManager: props.noSecretsManager,
        secretsManagerList: props.secretsManagerList,
        secretsManagerGroupCallback: props.secretsManagerGroupCallback,
        secretsManagerGroupCallbackText: props.secretsManagerGroupCallbackText,
        secretCallback: props.secretCallback,
        secretCallbackText: props.secretCallbackText,
        arbSecretCallback: props.arbSecretCallback,
        arbSecretCallbackText: props.arbSecretCallbackText,
        userPassSecretCallback: props.userPassSecretCallback,
        userPassSecretCallbackText: props.userPassSecretCallbackText,
        descriptionInvalid: props.descriptionInvalid,
        descriptionInvalidText: props.descriptionInvalidText,
        labelsInvalid: props.labelsInvalid,
        labelsInvalidText: props.labelsInvalidText,
        craig: props.craig,
        cluster: props.cluster,
        arrayParentName: props.cluster.name,
      }}
      hideAbout
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "opaque_secrets",
        disableSave: props.disableSave,
        type: "formInSubForm",
      }}
    />
  );
};

OpaqueIngressSecret.defaultProps = {
  isModal: false,
};

OpaqueIngressSecret.propTypes = {
  noSecretsManager: PropTypes.bool,
  isModal: PropTypes.bool.isRequired,
  opaque_secrets: PropTypes.arrayOf(PropTypes.shape({})),
  disableSave: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  propsMatchState: PropTypes.func,
  secretsManagerList: PropTypes.array,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  arbSecretCallback: PropTypes.func,
  arbSecretCallbackText: PropTypes.func,
  userPassSecretCallback: PropTypes.func,
  userPassSecretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.func,
  craig: PropTypes.shape({}),
  arrayParentName: PropTypes.string,
  cluster: PropTypes.shape({}).isRequired,
};
