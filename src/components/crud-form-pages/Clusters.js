import React from "react";
import ClusterForm from "../forms/ClusterForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const Clusters = (props) => {
  return (
    <IcseFormTemplate
      name="Clusters"
      addText="Create a Cluster"
      innerForm={ClusterForm}
      arrayData={props.clusters}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      docs={props.docs}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidPoolCallback: props.invalidPoolCallback,
        invalidPoolTextCallback: props.invalidPoolTextCallback,
        resourceGroups: props.resourceGroups,
        vpcList: props.vpcList,
        encryptionKeys: props.encryptionKeys,
        subnetList: props.subnetList,
        kubeVersionApiEndpoint: props.kubeVersionApiEndpoint,
        flavorApiEndpoint: props.flavorApiEndpoint,
        helperTextCallback: props.helperTextCallback,
        propsMatchState: props.propsMatchState,
        cosNames: props.cosNames,
        secretsManagerList: props.secretsManagerList,
        secretsManagerGroupCallback: props.secretsManagerGroupCallback,
        secretsManagerGroupCallbackText: props.secretsManagerGroupCallbackText,
        secretCallback: props.secretCallback,
        secretCallbackText: props.secretCallbackText,
        descriptionInvalid: props.descriptionInvalid,
        descriptionInvalidText: props.descriptionInvalidText,
        labelsInvalid: props.labelsInvalid,
        labelsInvalidText: props.labelsInvalidText,
        workerPoolProps: {
          onSave: props.onPoolSave,
          onDelete: props.onPoolDelete,
          onSubmit: props.onPoolSubmit,
          disableSave: props.disablePoolSave,
        },
        opaqueIngressSecretProps: {
          onSave: props.onOpaqueSecretsSave,
          onDelete: props.onOpaqueSecretsDelete,
          onSubmit: props.onOpaqueSecretsSubmit,
          disableSave: props.disableOpaqueSecretsSave,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "clusters",
        hideName: true,
      }}
    />
  );
};

Clusters.propTypes = {
  clusters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.arrayOf(PropTypes.string),
  cosNames: PropTypes.arrayOf(PropTypes.string),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  subnetList: PropTypes.arrayOf(PropTypes.object).isRequired,
  kubeVersionApiEndpoint: PropTypes.string.isRequired,
  flavorApiEndpoint: PropTypes.string.isRequired,
  onPoolSave: PropTypes.func.isRequired,
  onPoolDelete: PropTypes.func.isRequired,
  onPoolSubmit: PropTypes.func.isRequired,
  disablePoolSave: PropTypes.func.isRequired,
  invalidPoolCallback: PropTypes.func,
  invalidPoolTextCallback: PropTypes.func,
  helperTextCallback: PropTypes.func,
  onOpaqueSecretsSave: PropTypes.func.isRequired,
  onOpaqueSecretsDelete: PropTypes.func.isRequired,
  onOpaqueSecretsSubmid: PropTypes.func.isRequired,
  disableOpaqueSecretsSave: PropTypes.func.isRequired,
  secretsManagerGroupCallback: PropTypes.func,
  secretsManagerGroupCallbackText: PropTypes.func,
  secretCallback: PropTypes.func,
  secretCallbackText: PropTypes.func,
  descriptionInvalid: PropTypes.func,
  descriptionInvalidText: PropTypes.func,
  labelsInvalid: PropTypes.func,
  labelsInvalidText: PropTypes.func,
  secretsManagerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  docs: PropTypes.func,
};
