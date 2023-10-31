import { Modal } from "@carbon/react";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { DynamicRender } from "./Utils";

/**
 * Form Modal
 * @param {Object} props
 * @param {string} props.name the name of the modal
 * @param {Function} props.onRequestClose close modal function
 * @param {Function} props.onRequestSubmit submit function
 * @param {boolean} props.show show modal if true
 */
class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: this.props.beginDisabled,
    };
    this.modalForm = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableModal = this.disableModal.bind(this);
    this.enableModal = this.enableModal.bind(this);
  }

  /**
   * submit child data
   */
  handleSubmit() {
    let childData = this.modalForm.current.state;
    this.props.onRequestSubmit(childData);
  }

  /**
   * disable modal
   */
  disableModal() {
    if (!this.state.isDisabled) this.setState({ isDisabled: true });
  }

  /**
   * enable modal
   */
  enableModal() {
    if (this.state.isDisabled) this.setState({ isDisabled: false });
  }

  render() {
    return (
      <DynamicRender
        hide={this.props.show === false}
        show={
          <Modal
            modalHeading={this.props.name}
            open={this.props.show}
            onRequestSubmit={this.handleSubmit}
            onRequestClose={this.props.onRequestClose}
            primaryButtonText="Submit"
            secondaryButtonText="Cancel"
            primaryButtonDisabled={this.state.isDisabled}
          >
            {this.props.show &&
              React.Children.map(this.props.children, (child) =>
                // clone react child
                React.cloneElement(child, {
                  // add modal specific methods
                  disableModal: this.disableModal,
                  enableModal: this.enableModal,
                  isModal: true,
                  ref: this.modalForm,
                }),
              )}
          </Modal>
        }
      />
    );
  }
}

FormModal.defaultProps = {
  show: false,
  beginDisabled: false,
};

FormModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  name: PropTypes.string, // undefined for loaded modal not rendered
  children: PropTypes.node.isRequired,
  beginDisabled: PropTypes.bool.isRequired,
};

export default FormModal;
