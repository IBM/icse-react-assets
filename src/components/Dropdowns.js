import { Select, SelectItem } from "@carbon/react";
import {
  isEmpty,
  isNullOrEmptyString,
  kebabCase,
  buildNumberDropdownList
} from "lazy-z";
import PopoverWrapper from "./PopoverWrapper";
import PropTypes from "prop-types";
import { addClassName, prependEmptyStringToArrayOnNullOrEmptyString } from "../lib";
import { DynamicToolTipWrapper } from "./Tooltips";
import React from "react";

export const IcseSelect = props => {
  let invalid = // automatically set to invalid is is null or empty string and invalid not disabled
    props.disableInvalid !== true && isNullOrEmptyString(props.value)
      ? true
      : props.invalid;
  let groups =
    props.groups.length === 0
      ? [] // if no groups, empty array
      : prependEmptyStringToArrayOnNullOrEmptyString(
          // otherwise try and prepend empty string if null
          props.value,
          props.groups
        );
  // please leave debug here //
  if (props.debug) {
    console.log("PROPS: ", props);
    console.log("GROUPS: ", groups);
  }
  return (
    <DynamicToolTipWrapper
      innerForm={() => {
        return (
          <PopoverWrapper
            hoverText={props.defaultValue || props.value || ""}
            // inherit classnames from tooltip
            className={
              props.tooltip ? "cds--form-item tooltip" : "cds--form-item"
            }
          >
            <Select
              id={props.component + kebabCase(props.name)}
              name={props.name}
              labelText={props.tooltip ? null : props.labelText}
              value={props.value || undefined}
              className={addClassName("fieldWidth leftTextAlign", props)}
              disabled={props.disabled}
              invalid={invalid}
              invalidText={props.invalidText}
              readOnly={props.readOnly}
              onChange={props.handleInputChange}
            >
              {groups.map(value => (
                <SelectItem
                  key={`${props.component}-${value}`}
                  text={value}
                  value={value}
                />
              ))}
            </Select>
          </PopoverWrapper>
        );
      }}
      {...props}
    />
  );
};

IcseSelect.defaultProps = {
  value: "",
  disabled: false,
  defaultValue: undefined, // prevent null values erroring select when value is passed
  disableInvalid: false,
  invalid: false,
  invalidText: "Invalid Selection",
  readOnly: false,
  groups: [],
  debug: false
};

IcseSelect.propTypes = {
  value: PropTypes.any, // must accept null
  component: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  defaultValue: PropTypes.any,
  disableInvalid: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  invalidText: PropTypes.string.isRequired,
  readOnly: PropTypes.bool.isRequired,
  groups: PropTypes.array.isRequired,
  debug: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    alignModal: PropTypes.string
  })
};

export class FetchSelect extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: ["iks 1.3","iks 2.5", "default"]
    };
  }
  componentDidMount() {
    this._isMounted = true;
    if (isEmpty(this.state.data))
      fetch("/api/cluster/data")
        .then(res => res.json())
        .then(data => {
          if (this._isMounted) this.setState({ data: data });
        })
        .catch(err => {
          console.error(err);
        });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <IcseSelect
        labelText="Kube Version"
        handleInputChange={this.props.handleInputChange}
        name="kube_version"
        className={this.props.className}
        component="cluster"
        url = {this.props.url}
        groups={this.state.data.filter(version => {
          if (
            (this.props.kube_type === "openshift" &&
              version.indexOf("openshift") !== -1) || // is openshift and contains openshift
            (this.props.kube_type !== "openshift" &&
              version.indexOf("openshift") === -1) || // is not openshift and does not contain openshift
            version === "default" // or is default
          ) {
            return version;
          }
        })}
        filter = {array => {
            groups = this.props.filter(array);
        }}
        onReturnFunction={data => {
            this.props.onReturnFunction(data);
            }}
        value={this.props.value}
      />
    );
  }
}

FetchSelect.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  className: PropTypes.string, // can be null or undefined
  value: PropTypes.string, // can be null or undefined
  kube_type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onReturnFunction: PropTypes.func,
  filter: PropTypes.func
};



export const IcseNumberSelect = props => {
  return (
    <IcseSelect
      component={props.component}
      groups={buildNumberDropdownList(props.max, props.min)}
      value={props.value.toString()}
      name={props.name}
      className={props.className}
      handleInputChange={event => {
        // set name target value and parse int
        let sendEvent = {
          target: {
            name: event.target.name,
            value: parseInt(event.target.value)
          }
        };
        props.handleInputChange(sendEvent);
      }}
      invalid={props.invalid}
      invalidText={props.invalidText}
      tooltip={props.tooltip}
      labelText={props.labelText}
      isModal={props.isModal}
    />
  );
};

IcseNumberSelect.defaultProps = {
  min: 1,
  invalid: false,
  isModal: false
};

IcseNumberSelect.propTypes = {
  component: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // can be null
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  invalidText: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string
  }),
  labelText: PropTypes.string.isRequired,
  isModal: PropTypes.bool.isRequired
};

export const EntitlementDropdown = props => {
  return (
    <IcseSelect
      name="entitlement"
      labelText="Entitlement"
      groups={["null", "cloud_pak"]}
      value={props.value || "null"}
      handleInputChange={props.handleInputChange}
      className="fieldWidthSmaller"
      component={props.component}
    />
  );
};

EntitlementDropdown.propTypes = {
  value: PropTypes.string, // can be null
  component: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};









