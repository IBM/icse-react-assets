import React from "react";
import { TextInput, Tile } from "@carbon/react";
import { isNullOrEmptyString, isIpv4CidrOrAddress, contains } from "lazy-z";
import PropTypes from "prop-types";
import { SaveAddButton } from "../Buttons";
import { IcseSelect } from "../Dropdowns";
import { IcseToggle, IcseNameInput } from "../Inputs";
import { DynamicRender, IcseFormGroup, IcseHeading } from "../Utils";

/**
 * create a tile for each subnet
 * @param {Object} props
 * @returns {SubnetTile} react component
 */
class SubnetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.data };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    this.props.componentDidUpdateCallback(this.state, this.props);
  }

  handleSave() {
    this.props.onSave(this.state, this.props);
  }

  handleToggle() {
    this.setState({ public_gateway: !this.state.public_gateway });
  }

  render() {
    function cidrIsValid(cidr) {
      return isIpv4CidrOrAddress(cidr) === false || !contains(cidr, "/");
    }
    return (
      <Tile
        key={this.props.vpc_name + "-subnets-" + this.props.data.name}
        className="marginRightSubnetTile fieldWidth subForm"
      >
        <IcseHeading
          name={this.props.data.name}
          type="subHeading"
          className="marginBottomSmall"
          buttons={
            <DynamicRender
              hide={this.props.isModal}
              show={
                <SaveAddButton
                  name={this.props.data.name}
                  disabled={this.props.disableSaveCallback(
                    this.state,
                    this.props
                  )}
                  onClick={this.handleSave}
                  noDeleteButton
                />
              }
            />
          }
        />
        {this.props.advanced && (
          <IcseFormGroup className="marginBottomSmall">
            <IcseNameInput
              className="fieldWidthSmaller"
              id={this.props.data.name + "-subnet-name"}
              componentName={this.props.data.name}
              value={this.state.name}
              onChange={this.handleChange}
              disabled={this.props.readOnly}
              invalid={
                this.props.readOnly
                  ? false
                  : this.props.invalidCallback(this.state, this.props)
              }
              invalidText={
                this.props.readOnly
                  ? ""
                  : this.props.invalidTextCallback(this.state, this.props)
              }
              hideHelperText
            />
          </IcseFormGroup>
        )}

        <IcseFormGroup className="marginBottomSmall">
          {/* TextInput is used here as cidr is read only */}
          <TextInput
            id={this.props.data.name + "-cidr"}
            name="cidr"
            invalidText={
              this.props.invalidCidrText
                ? this.props.invalidCidrText(this.state, this.props)
                : "Invalid subnet CIDR."
            }
            labelText="Subnet CIDR"
            value={this.state.cidr}
            className="fieldWidthSmaller"
            readOnly={this.props.advanced === false || this.props.readOnly}
            onChange={this.handleChange}
            invalid={
              this.props.invalidCidr
                ? this.props.invalidCidr(this.state, this.props) ||
                  cidrIsValid(this.state.cidr)
                : cidrIsValid(this.state.cidr)
            }
          />
        </IcseFormGroup>
        <IcseFormGroup className="marginBottomSmall">
          <IcseSelect
            name="acl_name"
            formName={`${this.props.data.name}-subnet-acl`}
            labelText="Network ACL"
            groups={this.props.networkAcls}
            value={this.state.network_acl}
            handleInputChange={this.handleChange}
            className="fieldWidthSmaller"
            disabled={this.props.isModal || this.props.readOnly}
            invalid={isNullOrEmptyString(this.state.network_acl)}
            invalidText="Select a Network ACL."
          />
        </IcseFormGroup>
        <IcseFormGroup noMarginBottom>
          <IcseToggle
            tooltip={{
              content:
                "A Public Gateway must be enabled in this zone to use. To enable public gateways, see the VPC page.",
            }}
            id={"new-subnet-public-gateway-" + this.props.data.name}
            labelText="Use Public Gateway"
            toggleFieldName="public_gateway"
            defaultToggled={this.state.public_gateway}
            onToggle={this.handleToggle}
            disabled={
              this.props.isModal ||
              this.props.readOnly ||
              this.props.shouldDisableGatewayToggle(this.state, this.props)
            }
          />
        </IcseFormGroup>
      </Tile>
    );
  }
}

SubnetForm.defaultProps = {
  isModal: false,
  advanced: false,
  readOnly: false,
};

SubnetForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  onSave: PropTypes.func,
  vpc_name: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cidr: PropTypes.string.isRequired,
    public_gateway: PropTypes.bool,
    network_acl: PropTypes.string.isRequired,
  }).isRequired,
  disableSaveCallback: PropTypes.func,
  shouldDisableGatewayToggle: PropTypes.func,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  componentDidUpdateCallback: PropTypes.func, // not required for undefined subnets
  onSave: PropTypes.func,
  advanced: PropTypes.bool.isRequired,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  readOnly: PropTypes.bool.isRequired,
};

export default SubnetForm;
