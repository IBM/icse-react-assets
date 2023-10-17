import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";
import RoutingTableForm from "../forms/RoutingTableForm";
import { NoVpcTile } from "./NoVpcTile";
import { isEmpty } from "lazy-z";

export const RoutingTables = (props) => {
  return (
    <IcseFormTemplate
      name="Routing Tables"
      addText="Create a Routing Table"
      innerForm={RoutingTableForm}
      arrayData={props.routing_tables}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      docs={props.docs}
      hideFormTitleButton={isEmpty(props.vpcList)}
      innerFormProps={{
        propsMatchState: props.propsMatchState,
        craig: props.craig,
        disableSave: props.disableSave,
        vpcList: props.vpcList,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        invalidRouteCallback: props.invalidRouteCallback,
        invalidRouteTextCallback: props.invalidRouteTextCallback,
        routeProps: {
          disableSave: props.disableSave,
          onSave: props.onRouteSave,
          onDelete: props.onRouteDelete,
          onSubmit: props.onRouteSubmit,
          craig: props.craig,
        },
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "routing_tables",
        hideName: true,
      }}
      overrideTile={props.vpcList.length === 0 ? NoVpcTile() : null}
    />
  );
};

RoutingTables.propTypes = {
  routing_tables: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func,
  propsMatchState: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
  forceOpen: PropTypes.func,
  craig: PropTypes.shape({}),
  vpcList: PropTypes.arrayOf(PropTypes.string),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRouteTextCallback: PropTypes.func.isRequired,
  invalidRouteCallback: PropTypes.func.isRequired,
  onRouteSave: PropTypes.func.isRequired,
  onRouteDelete: PropTypes.func.isRequired,
  onRouteSubmit: PropTypes.func.isRequired,
  overrideTile: PropTypes.node,
};
