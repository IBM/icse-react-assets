import React from "react";
import PropTypes from "prop-types";
import {
  capitalize,
  contains,
  isNullOrEmptyString,
  snakeCase,
  splat,
} from "lazy-z";
import { IcseFormGroup } from "../../Utils";
import { IcseSelect } from "../../Dropdowns";

export const PowerVsAffinity = (props) => {
  let volumeTypeFieldName = props.isVolume
    ? "pi_volume_type"
    : "pi_storage_type";
  return (
    <IcseFormGroup>
      <IcseSelect
        labelText="Storage Option"
        name="storage_option"
        formName={props.data.name + "-power-instance-status"}
        groups={["Storage Type", "Storage Pool"].concat(
          !props.stateData.pi_health_status ||
            props.stateData.pi_health_status === "OK"
            ? ["Affinity", "Anti-Affinity"]
            : [],
        )}
        value={props.stateData.storage_option}
        handleInputChange={props.handleInputChange}
        invalidText="Select a Storage Option."
        className="fieldWidthSmaller"
        id={`${props.data.name}-power-storage-option`}
        disabled={props.affinityChangesDisabled(
          props.stateData,
          props.componentProps,
        )}
      />
      {props.stateData.storage_option === "Storage Type" && (
        <IcseSelect
          labelText="Storage Type"
          name={volumeTypeFieldName}
          formName={props.data.name + "-power-instance-stortype"}
          groups={["Tier-1", "Tier-3"]}
          value={
            isNullOrEmptyString(props.stateData[volumeTypeFieldName])
              ? ""
              : capitalize(
                  props.stateData[volumeTypeFieldName]
                    .split(/(?=\d)/)
                    .join("-"),
                )
          }
          handleInputChange={props.handleInputChange}
          invalidText="Select a Storage Type."
          className="fieldWidthSmaller"
          id={`${props.data.name}-power-instance-stortype`}
          disabled={props.affinityChangesDisabled(
            props.stateData,
            props.componentProps,
          )}
        />
      )}
      {props.stateData.storage_option === "Storage Pool" && (
        <IcseSelect
          key={props.stateData.zone}
          labelText="Storage Pool"
          name={props.isVolume ? "pi_volume_pool" : "pi_storage_pool"}
          formName={props.data.name + "-power-instance-storpool"}
          groups={props.storage_pool_map[props.stateData.zone]}
          value={
            isNullOrEmptyString(props.isVolume ? "pi_volume_pool" : "pi_storage_pool")
              ? ""
              : props.stateData[props.isVolume ? "pi_volume_pool" : "pi_storage_pool"]
          }
          handleInputChange={props.handleInputChange}
          invalidText="Select a Storage Pool."
          className="fieldWidthSmaller"
          id={`${props.data.name}-power-instance-storpool`}
          disabled={props.affinityChangesDisabled(
            props.stateData,
            props.componentProps,
          )}
        />
      )}
      {contains(
        ["Affinity", "Anti-Affinity"],
        props.stateData.storage_option,
      ) && (
        <>
          <IcseSelect
            labelText="Affinity Type"
            name="affinity_type"
            formName={props.data.name + "-power-instance-affinity-type"}
            groups={["Instance", "Volume"]}
            value={
              isNullOrEmptyString(props.stateData.affinity_type)
                ? ""
                : props.stateData.affinity_type
            }
            handleInputChange={props.handleInputChange}
            invalidText="Select Instance or Volume for boot volume affinity"
            className="fieldWidthSmaller"
            id={`${props.data.name}-power-affinity-type`}
            disabled={props.affinityChangesDisabled(
              props.stateData,
              props.componentProps,
            )}
          />
          {props.stateData.affinity_type && (
            <IcseSelect
              groups={
                props.stateData.affinity_type === "Instance"
                  ? splat(
                      props.power_instances.filter(props.instanceFilter),
                      "name",
                    )
                  : splat(
                      props.power_volumes.filter(props.volumeFilter),
                      "name",
                    )
              }
              formName={props.data.name + "-power-affinity-source"}
              labelText={`${
                props.stateData.storage_option === "Anti-Affinity"
                  ? "Anti-"
                  : ""
              }Affinity ${props.stateData.affinity_type}`}
              name={snakeCase(
                `pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`,
              )}
              handleInputChange={props.handleInputChange}
              invalidText={`Select an ${props.stateData.affinity_type.toLowerCase()} ${props.stateData.affinity_type.toLowerCase()}.`}
              id={`${props.data.name}-power-affinity-source`}
              value={
                isNullOrEmptyString(
                  props.stateData[
                    snakeCase(
                      `pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`,
                    )
                  ],
                )
                  ? ""
                  : props.stateData[
                      snakeCase(
                        `pi ${props.stateData.storage_option} ${props.stateData.affinity_type}`,
                      )
                    ]
              }
              className="fieldWidthSmaller"
              disabled={props.affinityChangesDisabled(
                props.stateData,
                props.componentProps,
              )}
            />
          )}
        </>
      )}
    </IcseFormGroup>
  );
};

PowerVsAffinity.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  stateData: PropTypes.shape({
    pi_health_status: PropTypes.string,
    storage_option: PropTypes.string,
    zone: PropTypes.string.isRequired,
    pi_storage_pool: PropTypes.string,
    storage_option: PropTypes.string,
    affinity_type: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  affinityChangesDisabled: PropTypes.func.isRequired,
  componentProps: PropTypes.shape({}).isRequired,
  storage_pool_map: PropTypes.shape({}).isRequired,
  power_instances: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  instanceFilter: PropTypes.func.isRequired,
  power_volumes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  volumeFilter: PropTypes.func.isRequired,
};
