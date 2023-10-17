import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import VsiLoadBalancerForm from "../forms/VsiLoadBalancerForm";
import PropTypes from "prop-types";
import { NoVpcTile } from "./NoVpcTile";
import { isEmpty } from "lazy-z";

export const VsiLoadBalancer = (props) => {
  return (
    <IcseFormTemplate
      name="VPC Load Balancers"
      addText="Create a Load Balancer"
      docs={props.docs}
      innerForm={VsiLoadBalancerForm}
      arrayData={props.load_balancers}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      hideFormTitleButton={isEmpty(props.vpcList)}
      innerFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        resourceGroups: props.resourceGroups,
        vpcList: props.vpcList,
        securityGroups: props.securityGroups,
        vsiDeployments: props.vsiDeployments,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "load_balancers",
        hide: true,
        hideName: true,
      }}
      overrideTile={props.vpcList.length === 0 ? NoVpcTile() : null}
    />
  );
};

VsiLoadBalancer.propTypes = {
  docs: PropTypes.func.isRequired,
  load_balancers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string.isRequired),
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vsiDeployments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  overrideTile: PropTypes.node,
};
