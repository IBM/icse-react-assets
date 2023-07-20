import EventStreamsForm from "../forms/EventStreamsForm";
import React from "react";
import IcseFormTemplate from "../IcseFormTemplate";
import PropTypes from "prop-types";

export const EventStreams = (props) => {
  return (
    <IcseFormTemplate
      name="Event Streams"
      addText="Create an Event Streams Service"
      docs={props.docs}
      innerForm={EventStreamsForm}
      arrayData={props.event_streams}
      disableSave={props.disableSave}
      onDelete={props.onDelete}
      onSave={props.onSave}
      onSubmit={props.onSubmit}
      propsMatchState={props.propsMatchState}
      forceOpen={props.forceOpen}
      innerFormProps={{
        craig: props.craig,
        resourceGroups: props.resourceGroups,
        invalidCallback: props.invalidCallback,
        invalidTextCallback: props.invalidTextCallback,
        propsMatchState: props.propsMatchState,
        disableSave: props.disableSave,
      }}
      toggleFormProps={{
        craig: props.craig,
        disableSave: props.disableSave,
        submissionFieldName: "event_streams",
        hide: true,
        hideName: true,
      }}
    />
  );
};

EventStreams.propTypes = {
  event_streams: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  disableSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  resourceGroups: PropTypes.array.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  craig: PropTypes.shape({}),
  docs: PropTypes.func.isRequired,
};
