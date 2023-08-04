import PropTypes from "prop-types";
import React from "react";
import { AtrackerForm, ToggleForm } from "../../";

export const Atracker = (props) => {
  return (
    <ToggleForm
      name={props.resourceName}
      about={props.docs}
      propsMatchState={props.propsMatchState}
      disableSave={props.disableSave}
      innerForm={AtrackerForm}
      hideName
      noDeleteButton
      tabPanel={{
        name: "Activity Tracker",
      }}
      hide
      submissionFieldName="atracker"
      onSave={props.onSave}
      innerFormProps={{
        craig: props.craig,
        region: props.region,
        data: props.data,
        resourceGroups: props.resourceGroups,
        cosKeys: props.cosKeys,
        cosBuckets: props.cosBuckets,
        prefix: props.prefix,
      }}
    />
  );
};

Atracker.propTypes = {
  docs: PropTypes.object.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  region: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
  resourceName: PropTypes.string.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  cosBuckets: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func.isRequired,
  prefix: PropTypes.string.isRequired,
};
