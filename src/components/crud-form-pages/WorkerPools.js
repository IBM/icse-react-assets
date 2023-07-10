import React from "react";
import WorkerPoolForm from "../forms/WorkerPoolForm";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const WorkerPools = (props) => {
  return props.isModal ? (
    ""
  ) : (
    <IcseFormTemplate
      name="Worker Pools"
      subHeading
      addText="Create a Worker Pool"
      arrayData={props.worker_pools}
      innerForm={WorkerPoolForm}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      innerFormProps={{
        subnetList: props.subnetList,
        cluster: props.cluster,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        flavorApiEndpoint: props.flavorApiEndpoint,
        craig: props.craig,
        arrayParentName: props.cluster.name,
      }}
      hideAbout
      toggleFormProps={{
        hideName: true,
        submissionFieldName: "worker_pools",
        disableSave: props.disableSave,
        type: "formInSubForm",
      }}
    />
  );
};

WorkerPools.defaultProps = {
  isModal: false,
};

WorkerPools.propTypes = {
  isModal: PropTypes.bool.isRequired,
  worker_pools: PropTypes.arrayOf(PropTypes.shape({})),
  disableSave: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  propsMatchState: PropTypes.func,
  subnetList: PropTypes.array,
  cluster: PropTypes.shape({}).isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  arrayParentName: PropTypes.string,
  flavorApiEndpoint: PropTypes.string,
  craig: PropTypes.shape({}),
};
