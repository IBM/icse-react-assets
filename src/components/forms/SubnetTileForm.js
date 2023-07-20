import React from "react";
import { contains, deepEqual, parseIntFromZone } from "lazy-z";
import PropTypes from "prop-types";
import { IcseHeading, IcseSubForm } from "../Utils";
import SubnetForm from "./SubnetForm";

class SubnetTileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subnetData: {},
    };
    if (!this.props.isModal) {
      this.props.data.forEach((subnet) => {
        if (subnet.name) this.state.subnetData[subnet.name] = true;
      });
    }
    this.shouldDisableGatewayToggle =
      this.shouldDisableGatewayToggle.bind(this);
    this.childSubnetHasChanged = this.childSubnetHasChanged.bind(this);
  }

  /**
   * check if child subnet has changed
   * @param {Object} stateData
   * @param {string} stateData.name
   * @param {Object} componentProps
   * @param {Object} componentProps.data
   */
  childSubnetHasChanged(stateData, componentProps) {
    let name = stateData.name;
    if (
      this.state.subnetData[name] &&
      !deepEqual(stateData, componentProps.data)
    ) {
      let subnetData = { ...this.state.subnetData };
      subnetData[name] = false;
      this.setState({ subnetData: subnetData });
    }
  }

  /**
   * check if gateway should be disabled
   * @param {Object} stateData
   * @param {string} stateData.name
   */
  shouldDisableGatewayToggle(stateData) {
    let zone = parseIntFromZone(stateData.name);
    if (contains(this.props.enabledPublicGateways, zone)) {
      return false;
    } else return true;
  }

  render() {
    let subnetMap = [...this.props.data];
    return (
      <IcseSubForm
        id={`subnet-tile-${this.props.tier}-${this.props.vpc_name}`}
        formInSubForm={this.props.isModal === false}
        className="popoverLeft tileFormMargin"
      >
        <IcseHeading
          name="Subnets"
          type="subHeading"
          className="marginBottomSmall"
        />
        <div className="displayFlex">
          {subnetMap.map((subnet, index) => {
            if (
              !subnet ||
              (this.props.advanced &&
                !contains(this.props.select_zones, index + 1))
            ) {
              return (
                <SubnetForm
                  key={`${"no-subnet-zone-" + (index + 1)}-tile-${
                    this.props.tier
                  }-${this.props.vpc_name}-${JSON.stringify(subnet)}`}
                  vpc_name={this.props.vpc_name}
                  data={{
                    name: "No Subnet in Zone " + (index + 1),
                    cidr: "",
                    network_acl: "",
                  }}
                  onSave={this.props.onSave}
                  advanced={true}
                  readOnly={true}
                  networkAcls={[]}
                  disableSaveCallback={this.props.disableSaveCallback}
                  componentDidUpdateCallback={this.childSubnetHasChanged}
                />
              );
            } else
              return (
                <SubnetForm
                  key={`${subnet.name}-tile-${this.props.tier}-${
                    this.props.vpc_name
                  }-${JSON.stringify(subnet)}`}
                  vpc_name={this.props.vpc_name}
                  data={subnet}
                  onSave={this.props.onSave}
                  isModal={this.props.isModal || this.props.readOnly}
                  componentDidUpdateCallback={this.childSubnetHasChanged}
                  networkAcls={this.props.networkAcls}
                  disableSaveCallback={this.props.disableSaveCallback}
                  shouldDisableGatewayToggle={this.shouldDisableGatewayToggle}
                  advanced={this.props.advanced}
                  invalidCidr={this.props.invalidCidr}
                  invalidCidrText={this.props.invalidCidrText}
                  invalidCallback={this.props.invalidCallback}
                  invalidTextCallback={this.props.invalidTextCallback}
                />
              );
          })}
        </div>
      </IcseSubForm>
    );
  }
}

export default SubnetTileForm;

SubnetTileForm.defaultProps = {
  isModal: false,
  readOnly: false,
  advanced: false,
};

SubnetTileForm.propTypes = {
  isModal: PropTypes.bool.isRequired,
  disableSaveCallback: PropTypes.func,
  vpc_name: PropTypes.string,
  tier: PropTypes.string.isRequired,
  networkAcls: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSave: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cidr: PropTypes.string.isRequired,
      public_gateway: PropTypes.bool,
      network_acl: PropTypes.string,
    }),
  ),
  readOnly: PropTypes.bool.isRequired,
  enabledPublicGateways: PropTypes.arrayOf(PropTypes.number).isRequired,
  advanced: PropTypes.bool.isRequired,
  invalidCidr: PropTypes.func,
  invalidCidrText: PropTypes.func,
  invalidCallback: PropTypes.func,
  invalidTextCallback: PropTypes.func,
  select_zones: PropTypes.array,
};
