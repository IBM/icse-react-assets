import React, { Component, useEffect, useState } from "react";
import NetworkingRuleForm from "./NetworkingRuleForm";
import { containsKeys, contains, getObjectFromArray } from "lazy-z";
import PropTypes from "prop-types";
import { DynamicRender, IcseHeading, RenderForm } from "../Utils";
import { SaveAddButton, UpDownButtons } from "../Buttons";
import FormModal from "../FormModal";
import EmptyResourceTile from "../EmptyResourceTile";
import {
  getRuleProtocol,
  getSubRule,
  swapArrayElements,
  getOrderCardClassName,
} from "../../lib/forms/";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DataTable,
  TableToolbar,
  TableToolbarContent,
  TableContainer,
} from "@carbon/react";
import { Edit } from "@carbon/icons-react";
import "./network-order-card.css";
import {
  buildFormDefaultInputMethods,
  buildFormFunctions,
} from "../component-utils";

class NetworkingRulesOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: [...this.props.rules],
      collapse: {},
      allCollapsed: false,
      showModal: false,
      showEditModal: false,
      editing: this.props.rules[0].name,
    };
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRuleData = this.getRuleData.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.handleSave = this.handleSave.bind(this);
    buildFormDefaultInputMethods(this);
    buildFormFunctions(this);
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  toggleEditModal(name) {
    this.setState({
      showEditModal: !this.state.showEditModal,
      editing: name,
    });
  }

  /**
   * Move the card up
   * @param {number} index
   */
  handleUp(index) {
    let prevRulesState = [...this.state.rules];
    if (index !== 0) {
      swapArrayElements(prevRulesState, index, index - 1);
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
      swapArrayElements(prevRulesState, index, index + 1);
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

  handleSave(modalData) {
    let modalProps = {
      data: { ...this.getRuleData(this.state.editing) },
      parent_name: this.props.parent_name,
      vpc_name: this.props.vpc_name,
    };
    this.props.onRuleSave(modalData, modalProps);
    this.toggleEditModal(this.props.rules[0].name);
  }

  /**
   * get rule data object
   * @param {string} name
   * @returns {object} rule data
   */
  getRuleData(name) {
    let rule = { ...getObjectFromArray(this.props.rules, "name", name) }; // copy
    rule.ruleProtocol = getRuleProtocol(rule); // get protocol
    rule.rule = getSubRule(rule); // get sub rule from data
    delete rule.icmp;
    delete rule.tcp;
    delete rule.udp;
    return rule;
  }

  render() {
    console.log("rules in order card", this.props.rules);
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
        <OrderCardDataTable
          key={JSON.stringify(this.state.rules)}
          isSecurityGroup={this.props.isSecurityGroup}
          rules={this.state.rules}
          toggleEditModal={this.toggleEditModal}
          toggleCreateModal={this.toggleModal}
          vpc_name={this.props.vpc_name}
          handleUp={this.handleUp}
          handleDown={this.handleDown}
        />
        <FormModal
          name={`Edit ${this.state.editing}`}
          show={this.state.showEditModal}
          onRequestSubmit={this.handleSave}
          onRequestClose={() => this.toggleEditModal(this.props.rules[0].name)}
        >
          {RenderForm(NetworkingRuleForm, {
            ...this.props,
            data: { ...this.getRuleData(this.state.editing) },
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
  vpc_name: PropTypes.string,
  networkRuleOrderDidChange: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  parent_name: PropTypes.string.isRequired,
};

export default NetworkingRulesOrderCard;

class OrderCardDataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.props.rules,
      headers: [],
    };

    this.setupRowsAndHeaders = this.setupRowsAndHeaders.bind(this);
  }

  componentDidMount() {
    this.setupRowsAndHeaders();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.rules !== this.props.rules) {
      console.log("update - rerunning setup");
      this.setupRowsAndHeaders();
    }
  }

  setupRowsAndHeaders() {
    const { rules, isSecurityGroup } = { ...this.props };

    const headers = [
      {
        key: "name",
        header: "Name",
      },
      { key: "direction", header: "Direction" },
      { key: "source", header: "Source" },
      { key: "protocol", header: "Protocol" },
      { key: "port", header: "Port" },
    ];

    const rows = JSON.parse(JSON.stringify(rules));

    // set up required data for each row
    rows.forEach((row) => {
      row.protocol = getRuleProtocol(row);
      row.id = row.name;
      row.port =
        row.protocol === "all"
          ? "ALL"
          : row.protocol === "icmp"
          ? row.icmp.code
          : `${row[row.protocol].port_min}-${row[row.protocol].port_max}`;
    });

    // add in action and destination if not security group
    if (!isSecurityGroup) {
      headers.splice(1, 0, {
        // add extra fields if not security group
        key: "action",
        header: "Action",
      });
      headers.splice(4, 0, { key: "destination", header: "Destination" });
    }
    headers.push({ key: "order", header: "Order" });

    this.setState({ rows, headers });
  }

  render() {
    const { rows, headers } = { ...this.state };

    return (
      <DataTable
        headers={headers}
        rows={rows}
        key={JSON.stringify(this.props.rules)}
      >
        {({ rows, headers, getHeaderProps, getRowProps }) => (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableHeader
                      key={header.header + "-" + index}
                      {...getHeaderProps({ header })}
                    >
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name + "-" + index}
                    {...getRowProps({ row })}
                  >
                    {row.cells.map((cell) => (
                      <TableCell
                        key={cell.id}
                        onClick={
                          cell === row.cells[0] // check that it is the name column
                            ? () => this.props.toggleEditModal(cell.value)
                            : () => {}
                        }
                      >
                        {cell === row.cells[0] ? (
                          <div className="displayFlex cursor-pointer">
                            <Edit className="edit-margin-right" />
                            {cell.value}
                          </div>
                        ) : cell === row.cells[row.cells.length - 1] ? (
                          <UpDownButtons
                            key={row.cells[0].value + "-up-down"}
                            name={row.cells[0].value}
                            handleUp={() => this.props.handleUp(index)}
                            handleDown={() => this.props.handleDown(index)}
                            disableUp={row === rows[0]}
                            disableDown={row === rows[rows.length - 1]}
                          />
                        ) : (
                          <>
                            {contains(["tcp", "udp", "all", "icmp"], cell.value)
                              ? cell.value.toUpperCase()
                              : cell.value}
                          </>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    );
  }
}

OrderCardDataTable.propTypes = {
  isSecurityGroup: PropTypes.bool.isRequired,
  rules: PropTypes.array.isRequired,
};
