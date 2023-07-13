import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import ObjectStorageInstancesForm from "../forms/ObjectStorageForm";

export const ObjectStorage = (props) => {
  return (
    <IcseFormTemplate
      name="Object Storage"
      addText="Create an Object Storage Service"
      docs={props.docs}
      innerForm={ObjectStorageInstancesForm}
      arrayData={props.object_storage}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        kmsList: props.kmsList,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidKeyCallback: props.invalidKeyCallback,
        invalidKeyTextCallback: props.invalidKeyTextCallback,
        invalidBucketCallback: props.invalidBucketCallback,
        invalidBucketTextCallback: props.invalidBucketTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
        composedNameCallback: props.composedNameCallback,
        keyProps: {
          craig: props.craig,
          onSave: props.onKeySave,
          onDelete: props.onKeyDelete,
          onSubmit: props.onKeySubmit,
          disableSave: props.disableSave,
        },
        bucketProps: {
          craig: props.craig,
          onSave: props.onBucketSave,
          onDelete: props.onBucketDelete,
          onSubmit: props.onBucketSubmit,
          disableSave: props.disableSave,
          encryptionKeys: props.encryptionKeys,
          encryptionKeyFilter: props.encryptionKeyFilter,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "object_storage",
        hide: true,
        hideName: true,
      }}
    ></IcseFormTemplate>
  );
};

ObjectStorage.propTypes = {
  object_storage: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidKeyCallback: PropTypes.func.isRequired,
  invalidKeyTextCallback: PropTypes.func.isRequired,
  invalidBucketCallback: PropTypes.func.isRequired,
  invalidBucketTextCallback: PropTypes.func.isRequired,
  onKeySave: PropTypes.func.isRequired,
  onKeyDelete: PropTypes.func.isRequired,
  onKeySubmit: PropTypes.func.isRequired,
  onBucketSave: PropTypes.func.isRequired,
  onBucketDelete: PropTypes.func.isRequired,
  onBucketSubmit: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
  encryptionKeyFilter: PropTypes.func.isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  composedNameCallback: PropTypes.func.isRequired,
  kmsList: PropTypes.array.isRequired,
};
