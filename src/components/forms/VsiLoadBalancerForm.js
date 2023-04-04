import React from "react";
import {
  buildFormFunctions,
  buildFormDefaultInputMethods,
  IcseFormGroup,
  IcseHeading,
  IcseNameInput,
  IcseSelect,
  SecurityGroupMultiSelect,
  IcseTextInput,
  IcseMultiSelect,
} from "../../index";
import PropTypes from "prop-types";
import {
  isNullOrEmptyString,
  contains,
  titleCase,
  snakeCase,
  splat,
  distinct,
  isInRange,
  getObjectFromArray,
} from "lazy-z";
import { NumberInput, Tile } from "@carbon/react";
import "./vsi-load-balancer.css";

class VsiLoadBalancerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };

    buildFormFunctions(this);
    buildFormDefaultInputMethods(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiSelectChange = this.handleMultiSelectChange.bind(this);
    this.allVsi = this.allVsi.bind(this);
  }

  /**
   * handle input change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleInputChange(event) {
    let { name, value } = event.target;
    let nextState = { ...this.state };
    nextState[name] = contains(["name", "vpc", "resource_group"], name)
      ? value
      : contains(
          [
            "health_delay",
            "health_retries",
            "health_timeout",
            "port",
            "listener_port",
            "connection_limit",
          ],
          name
        )
      ? Number(value)
      : snakeCase(value);
    if (name === "vpc") {
      nextState.subnets = [];
      nextState.security_groups = [];
      nextState.target_vsi = [];
    } else if (name === "connection_limit" && nextState[name] === 0) {
      // reset when 0
      nextState[name] = "";
    }
    this.setState(nextState);
  }

  /**
   * handle multiselect change
   * @param {string} name key to change in the instance
   * @param {*} value value
   */
  handleMultiSelectChange(name, value) {
    let nextState = { ...this.state };
    if (name === "target_vsi") {
      nextState.subnets = [];
      this.props.vsiDeployments.forEach((deployment) => {
        nextState.subnets = distinct(
          nextState.subnets.concat(deployment.subnets)
        );
      });
    }
    nextState[name] = value;
    this.setState(nextState);
  }

  /**
   * get all vsi
   * @returns {Array<object>} list of vsi
   */
  allVsi() {
    let allVsi = [];
    this.state.target_vsi.forEach((deployment) => {
      let vsi = getObjectFromArray(
        this.props.vsiDeployments,
        "name",
        deployment
      );
      let nextRow = [];
      // for each subnet vsi
      for (let subnet = 0; subnet < vsi.subnets.length; subnet++) {
        // for each vsi per subnet
        for (let count = 0; count < vsi.vsi_per_subnet; count++) {
          nextRow.push({
            name: deployment + "-" + (count + 1),
            subnet: vsi.subnets[subnet],
          });
          if (nextRow.length === 3) {
            allVsi.push(nextRow);
            nextRow = [];
          }
        }
      }
      if (nextRow.length > 0) {
        allVsi.push(nextRow);
      }
    });
    return allVsi;
  }

  render() {
    let componentName = this.props.data.name + "-lb";
    return (
      <>
        <IcseHeading type="subHeading" name="Load Balancer" />
        <IcseFormGroup>
          <IcseNameInput
            id={componentName + "-name"}
            tooltip={{
              content:
                "Name for the load balancer service. This name will be prepended to the components provisioned as part of the load balancer.",
              align: "right",
            }}
            componentName={componentName}
            value={this.state.name}
            onChange={this.handleInputChange}
            invalid={this.props.invalidCallback(this.state)}
            invalidText={this.props.invalidTextCallback(this.state)}
            className="fieldWidthSmaller"
            hideHelperText
          />
          <IcseSelect
            formName={componentName + "-rg"}
            name="resource_group"
            labelText="Resource Group"
            groups={this.props.resourceGroups}
            value={this.state.resource_group}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            formName={componentName + "-type"}
            name="type"
            labelText="Load Balancer Type"
            groups={["Public", "Private"]}
            value={titleCase(this.state.type || "")}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseFormGroup>
          <IcseSelect
            formName="vsi_form"
            name="vpc"
            labelText="VPC"
            groups={this.props.vpcList}
            value={this.state.vpc}
            handleInputChange={this.handleInputChange}
            invalid={isNullOrEmptyString(this.state.vpc)}
            invalidText="Select a VPC."
            className="fieldWidthSmaller"
          />
          <SecurityGroupMultiSelect
            key={this.state.vpc + "-sg"}
            id={componentName + "-sg"}
            initialSelectedItems={this.state.security_groups || []}
            vpc_name={this.state.vpc}
            onChange={(value) =>
              this.handleMultiSelectChange("security_groups", value)
            }
            securityGroups={this.getSecurityGroupList()}
            invalid={!(this.state.security_groups?.length > 0)}
            invalidText={
              !this.state.vpc || isNullOrEmptyString(this.state.vpc)
                ? `Select a VPC.`
                : `Select at least one security group.`
            }
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseHeading type="subHeading" name="Load Balancer VSI" />
        <IcseFormGroup>
          <IcseMultiSelect
            key={this.state.vpc + "-vsi"}
            className="fieldWidthSmaller"
            id={componentName + "-vsi"}
            titleText="Deployment VSI"
            items={splat(
              this.props.vsiDeployments.filter((deployment) => {
                if (deployment.vpc === this.state.vpc) {
                  return deployment;
                }
              }),
              "name"
            )}
            onChange={(value) => {
              this.handleMultiSelectChange("target_vsi", value.selectedItems);
            }}
            initialSelectedItems={this.state.target_vsi}
            invalid={this.state.target_vsi.length === 0}
            invalidText="Select at least one VSI deployment"
          />
          {/* app port */}
          <NumberInput
            placeholder="80"
            label="Application Port"
            id={componentName + "-port"}
            allowEmpty={true}
            value={this.state.port}
            step={1}
            onChange={this.handleInputChange}
            name="port"
            hideSteppers={true}
            min={1}
            max={65535}
            invalid={false}
            invalidText="Must be a whole number between 1 and 65535"
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        {this.allVsi().map((row, index) => (
          <IcseFormGroup key={"row-" + index}>
            {row.map((vsi, vsiIndex) => (
              <Tile
                key={`${index}-${vsiIndex}`}
                className="fieldWidthSmaller subnetTileFormMargin"
              >
                <p className="tileTitle">Name:</p>
                <p className="tileContent">{vsi.name}</p>
                <p className="tileTitle">Subnet:</p>
                <p className="tileContent">{vsi.subnet}</p>
              </Tile>
            ))}
          </IcseFormGroup>
        ))}
        <IcseHeading type="subHeading" name="Load Balancer Pool" />
        <IcseFormGroup>
          <IcseSelect
            formName={componentName}
            name="algorithm"
            labelText="Load Balancing Algorithm"
            groups={[
              "Round Robin",
              "Weighted Round Robin",
              "Least Connections",
            ]}
            value={titleCase(this.state.algorithm || "")}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            formName={componentName}
            name="protocol"
            labelText="Pool Protocol"
            groups={["HTTPS", "HTTP", "TCP", "UDP"]}
            value={(this.state.protocol || "").toUpperCase()}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
            tooltip={{
              content: "Protocol of the application running on VSI instances",
            }}
          />
          <IcseSelect
            formName={componentName}
            name="health_type"
            labelText="Pool Health Protocol"
            groups={["HTTPS", "HTTP", "TCP"]}
            value={(this.state.health_type || "").toUpperCase()}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
            tooltip={{
              content:
                "Protocol used to check the health of member VSI instances",
            }}
          />
        </IcseFormGroup>
        <IcseFormGroup>
          {/* health timeout */}
          <NumberInput
            placeholder="5"
            label="Health Timeout (in Seconds)"
            id={componentName + "-timeout"}
            allowEmpty={true}
            value={this.state.health_timeout}
            step={1}
            onChange={this.handleInputChange}
            name="health_timeout"
            hideSteppers={true}
            min={5}
            max={3000}
            invalid={false}
            invalidText="Must be a whole number between 5 and 300"
            className="fieldWidthSmaller"
          />
          {/* health delay */}
          <NumberInput
            placeholder="5"
            label="Health Delay (in Seconds)"
            id={componentName + "-delay"}
            allowEmpty={true}
            value={this.state.health_delay}
            step={1}
            onChange={this.handleInputChange}
            name="health_delay"
            hideSteppers={true}
            min={5}
            max={3000}
            invalid={this.state.health_delay <= this.state.health_timeout}
            invalidText={
              this.state.health_delay <= this.state.health_timeout
                ? "Must be greater than Health Timeout value"
                : "Must be a whole number between 5 and 300"
            }
            className="fieldWidthSmaller"
          />
          {/* health retries */}
          <NumberInput
            placeholder="5"
            label="Health Retries"
            id={componentName + "-retries"}
            allowEmpty={true}
            value={this.state.health_retries}
            step={1}
            onChange={this.handleInputChange}
            name="health_retries"
            hideSteppers={true}
            min={5}
            max={3000}
            invalid={false}
            invalidText="Must be a whole number between 5 and 300"
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>

        <IcseHeading type="subHeading" name="Load Balancer Listener" />
        <IcseFormGroup>
          {/* listener port */}
          <NumberInput
            placeholder="443"
            label="Listener Port"
            id={componentName + "-listener-port"}
            allowEmpty={true}
            value={this.state.listener_port}
            step={1}
            onChange={this.handleInputChange}
            name="listener_port"
            hideSteppers={true}
            min={1}
            max={65535}
            invalid={false}
            invalidText="Must be a whole number between 1 and 65535"
            className="fieldWidthSmaller"
          />
          <IcseSelect
            formName={componentName}
            name="listener_protocol"
            labelText="Listener Protocol"
            groups={["HTTPS", "HTTP", "TCP", "UDP"]}
            value={(this.state.listener_protocol || "").toUpperCase()}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
            tooltip={{
              content: "Protocol of the listener for the looad balancer",
            }}
          />
          {/* connection limit */}
          <NumberInput
            label="Connection Limit"
            id={componentName + "-connection-limit"}
            allowEmpty={true}
            value={this.state.connection_limit || ""}
            step={1}
            onChange={this.handleInputChange}
            name="connection_limit"
            hideSteppers={true}
            min={1}
            max={15000}
            invalid={
              isNullOrEmptyString(this.state.connection_limit)
                ? false
                : isInRange(this.state.connection_limit, 1, 15000) === false
            }
            invalidText="Must be a whole number between 1 and 15000"
            className="fieldWidthSmaller"
          />
        </IcseFormGroup>
        <IcseHeading type="subHeading" name="(Optional) Pool Customization" />
        <IcseFormGroup>
          <IcseSelect
            formName={componentName}
            name="proxy_protocol"
            labelText="Proxy Protocol"
            groups={["Disabled", "V1", "V2"]}
            value={(this.state.proxy_protocol || "disabled").toUpperCase()}
            handleInputChange={this.handleInputChange}
            className="fieldWidthSmaller"
          />
          <IcseSelect
            formName={componentName}
            name="session_persistence_type"
            labelText="Session Persistence Type"
            groups={["Source IP", "App Cookie", "HTTP Cookie"]}
            value={titleCase(this.state.session_persistence_type || "")}
            handleInputChange={this.handleInputChange}
            disableInvalid
            className="fieldWidthSmaller"
          />
          {this.state.session_persistence_type === "app_cookie" && (
            <IcseTextInput
              id={componentName + "session_persistence_app_cookie_name"}
              componentName={componentName + "-cookie-name"}
              field="session_persistence_app_cookie_name"
              isModal={this.props.isModal}
              labelText="Session Cookie Name"
              value={this.state.session_persistence_app_cookie_name || ""}
              invalid={
                isNullOrEmptyString(
                  this.state.session_persistence_app_cookie_name
                )
                  ? false
                  : this.props.invalidCallback(this.state, this.props)
              }
              onChange={this.handleInputChange}
              className="fieldWidthSmaller"
            />
          )}
        </IcseFormGroup>
      </>
    );
  }
}

VsiLoadBalancerForm.defaultProps = {
  data: {
    name: "test-lb",
    resource_group: "a",
    vpc: "management",
    type: "public",
    security_groups: ["management-vpe"],
    algorithm: "round_robin",
    protocol: "https",
    proxy_protocol: "v1",
    health_type: "tcp",
    health_delay: 31,
    health_timeout: 30,
    health_retries: 5,
    session_persistence_app_cookie_name: "",
    target_vsi: ["management-server"],
    port: 8080,
    listener_port: 443,
    listener_protocol: "https",
    connection_limit: null,
  },
  isModal: false,
};

VsiLoadBalancerForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    resource_group: PropTypes.string,
    vpc: PropTypes.string,
    security_groups: PropTypes.arrayOf(PropTypes.string),
  }),
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  vpcList: PropTypes.arrayOf(PropTypes.string.isRequired),
  isModal: PropTypes.bool.isRequired,
  securityGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  vsiDeployments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default VsiLoadBalancerForm;
