import React, { Component } from "react";
import NetworkingRuleForm from "./NetworkingRuleForm";
import { containsKeys, allFieldsNull, transpose } from "lazy-z";
import PropTypes from "prop-types";
import { DynamicRender, IcseHeading, RenderForm } from "../Utils";
import { SaveAddButton } from "../Buttons";
import FormModal from "../FormModal";
import EmptyResourceTile from "../EmptyResourceTile";

class NetworkingRulesOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [...this.props.rules],
      collapse: {},
      allCollapsed: false,
      showModal: false,
    };

    this.swapArrayElements = this.swapArrayElements.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRuleProtocol = this.getRuleProtocol.bind(this);
    this.getSubRule = this.getSubRule.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rules.length !== this.state.rules.length) {
      this.setState({ rules: [...this.props.rules] }, () => {
        this.collapseAll();
      });
    }
  }

  getRuleProtocol(rule) {
    let protocol = "all";
    // for each possible protocol
    ["icmp", "tcp", "udp"].forEach((field) => {
      // set protocol to that field if not all fields are null
      if (allFieldsNull(rule[field]) === false) {
        protocol = field;
      }
    });
    return protocol;
  }

  /**
   * create sub rule
   * @param {*} rule rule object
   * @param {string} protocol all, tcp, icmp, or udp
   * @returns {Object} default rule object
   */
  getSubRule(rule) {
    let defaultRule = {
      port_max: null,
      port_min: null,
      source_port_max: null,
      source_port_min: null,
      type: null,
      code: null,
    };
    if (this.props.isSecurityGroup) {
      delete defaultRule.source_port_min;
      delete defaultRule.source_port_max;
    }
    if (this.getRuleProtocol(rule) !== "all") {
      transpose(rule[this.getRuleProtocol(rule)], defaultRule);
    }
    return defaultRule;
  }

  componentDidMount() {
    if (this.state.allCollapsed === false && this.props.expandAll === false)
      this.collapseAll();
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  /**
   * toggle collapse rule
   * @param {string} ruleName rule name
   */
  toggleCollapse(ruleName) {
    let collapse = this.state.collapse;
    collapse[ruleName] = !containsKeys(this.state.collapse, ruleName) // if rule dies not exist
      ? true // set to true
      : !this.state.collapse[ruleName]; // otherwise set to opposite
    this.setState({ collapse: collapse });
  }

  /**
   * collapse each rule
   */
  collapseAll() {
    let collapse = this.state.collapse;
    this.state.rules.forEach((rule) => {
      collapse[rule.name] = true;
    });
    this.setState({
      collapse: collapse,
      allCollapsed: true,
    });
  }

  /**
   * Helper function to move items up and down in the list so they can be rendered properly
   * @param {Array} arr
   * @param {number} indexA
   * @param {number} indexB
   */
  swapArrayElements(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

  /**
   * Move the card up
   * @param {number} index
   */
  handleUp(index) {
    let prevRulesState = [...this.state.rules];
    if (index !== 0) {
      this.swapArrayElements(prevRulesState, index, index - 1);
    }
    this.props.networkRuleOrderDidChange(prevRulesState);
    this.setState({ rules: prevRulesState });
  }

  /**
   * Move the card down
   * @param {number} index
   */
  handleDown(index) {
    let prevRulesState = [...this.state.rules];
    let maxLen = prevRulesState.length - 1;
    if (index !== maxLen) {
      this.swapArrayElements(prevRulesState, index, index + 1);
    }
    this.props.networkRuleOrderDidChange(prevRulesState);
    this.setState({ rules: prevRulesState });
  }

  /**
   * @param {Object} modalData data from the modal form passed back from instanceFormModal
   */
  handleSubmit(modalData) {
    this.props.onSubmitCallback(modalData, this.props);
    this.toggleModal();
  }

  render() {
    return (
      <>
        <IcseHeading
          name="Rules"
          className="marginBottomSmall"
          type="subHeading"
          buttons={
            <DynamicRender
              hide={this.props.hideCreate}
              show={
                <SaveAddButton
                  name={this.props.vpc_name}
                  type="add"
                  onClick={this.toggleModal}
                />
              }
            />
          }
        />
        <FormModal
          name="Create a Network Rule"
          show={this.state.showModal}
          onRequestSubmit={this.handleSubmit}
          onRequestClose={this.toggleModal}
        >
          {RenderForm(NetworkingRuleForm, {
            ...this.props,
            data: {
              name: "",
              action: "allow",
              direction: "inbound",
              source: "",
              destination: "",
              ruleProtocol: "all",
              rule: {
                port_max: null,
                port_min: null,
                source_port_max: null,
                source_port_min: null,
                type: null,
                code: null,
              },
            },
            isSecurityGroup: this.props.isSecurityGroup,
            invalidCallback: this.props.invalidRuleText,
            invalidTextCallback: this.props.invalidRuleTextCallback,
            parent_name: this.props.parent_name,
            disableSave: this.props.disableSaveCallback,
            shouldDisableSubmit: function () {
              // references to `this` in function are intentionally vague
              // in order to pass the correct functions and field values to the
              // child modal component
              // by passing `this` in a function that it scoped to the component
              // we allow the function to be successfully bound to the modal form
              // while still referencing the local value `enableSubmitField`
              // to use it's own values for state and props including enableModal
              // and disableModal, which are dynamically added to the component
              // at time of render
              if (this.props.disableSave(this.state, this.props) === false) {
                this.props.enableModal();
              } else {
                this.props.disableModal();
              }
            },
          })}
        </FormModal>
        <EmptyResourceTile
          name="Network Rules"
          showIfEmpty={this.state.rules}
        />
        {this.state.rules.map((rule, index) => (
          <div
            key={"rule-div-" + rule.name + "-wrapper"}
            className={
              "marginBottomSmall positionRelative " +
              (this.props.isSecurityGroup ? "formInSubForm" : "subForm")
            }
          >
            <NetworkingRuleForm
              hide={this.state.collapse[rule.name]}
              onToggle={() => this.toggleCollapse(rule.name)}
              disableUp={index === 0}
              handleUp={() => this.handleUp(index)}
              disableDown={index === this.state.rules.length - 1}
              handleDown={() => this.handleDown(index)}
              key={JSON.stringify(rule)}
              id={this.props.vpc_name + "-nw-rule-form-" + rule.name}
              invalidCallback={this.props.invalidRuleText}
              invalidTextCallback={this.props.invalidRuleTextCallback}
              data={{
                name: rule.name,
                action: rule.action || null,
                direction: rule.direction,
                source: rule.source,
                destination: rule.destination || null,
                ruleProtocol: this.getRuleProtocol(rule),
                rule: this.getSubRule(rule),
              }}
              disableSaveCallback={this.props.disableSaveCallback}
              isSecurityGroup={this.props.isSecurityGroup}
              onSave={this.props.onRuleSave}
              onDelete={this.props.onRuleDelete}
              parent_name={this.props.parent_name}
              innerFormProps={{ ...this.props }}
              dev={this.props.dev}
            />
          </div>
        ))}
      </>
    );
  }
}

NetworkingRulesOrderCard.defaultProps = {
  rules: [],
  hideCreate: false,
  isSecurityGroup: false,
  expandAll: false,
};

NetworkingRulesOrderCard.propTypes = {
  isSecurityGroup: PropTypes.bool.isRequired,
  rules: PropTypes.array.isRequired,
  hideCreate: PropTypes.bool.isRequired,
  expandAll: PropTypes.bool.isRequired,
  disableModalSubmitCallback: PropTypes.func.isRequired,
  disableSaveCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  vpc_name: PropTypes.string.isRequired,
  networkRuleOrderDidChange: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  parent_name: PropTypes.string.isRequired,
};

export default NetworkingRulesOrderCard;
