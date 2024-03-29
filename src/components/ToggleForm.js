import { DeleteModal, UnsavedChangesModal } from "./Modals";
import React from "react";
import { addClassName } from "../lib";
import { DeleteButton, SaveAddButton } from "./Buttons";
import {
  DynamicRender,
  IcseHeading,
  RenderForm,
  StatelessToggleForm,
} from "./Utils";
import PropTypes from "prop-types";
import StatefulTabPanel from "./StatefulTabPanel";

class ToggleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: this.props.hide,
      showDeleteModal: false,
      showUnsavedChangeModal: false,
      disableSave: true,
      disableDelete: false,
      showChildren: true,
      showSubModal: false,
      propsMatchState: true,
      useDefaultUnsavedMessage: true,
      ruleOrderChange: false,
    };

    this.toggleChildren = this.toggleChildren.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleUnsavedChangeModal = this.toggleUnsavedChangeModal.bind(this);
    this.dismissChangesAndClose = this.dismissChangesAndClose.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.shouldDisableSave = this.shouldDisableSave.bind(this);
    this.shouldShow = this.shouldShow.bind(this);
    this.networkRuleOrderDidChange = this.networkRuleOrderDidChange.bind(this);
    this.toggleShowChildren = this.toggleShowChildren.bind(this);
    this.onToggleSubModal = this.onToggleSubModal.bind(this);
    this.childRef = React.createRef();
  }

  /**
   * toggle sub modal
   */
  onToggleSubModal() {
    this.setState({ showSubModal: !this.state.showSubModal });
  }

  componentDidMount() {
    if (this.props.devMode) {
      console.log(this.props);
    }
    if (this.state.hide === true && this.shouldShow() === true) {
      this.setState({ hide: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hide !== this.state.hide && this.props.onShowToggle) {
      this.props.onShowToggle(this.props.index);
    }
  }

  /**
   * toggle children rendered by form
   */
  toggleChildren() {
    if (this.childRef.current?.state) {
      let stateData = this.childRef.current.state;
      let componentProps = this.childRef.current.props;
      let propsDoNotMatch =
        this.props.propsMatchState(
          this.props.submissionFieldName,
          stateData,
          componentProps,
        ) === false;
      if (propsDoNotMatch || this.state.useDefaultUnsavedMessage === false) {
        this.toggleUnsavedChangeModal();
      } else {
        this.setState({ hide: !this.state.hide });
      }
    } else {
      this.setState({ hide: !this.state.hide });
    }
  }

  /**
   * toggle delete modal
   */
  toggleDeleteModal() {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  }

  /**
   * toggle unsaved changes modal
   */
  toggleUnsavedChangeModal() {
    this.setState({
      showUnsavedChangeModal: !this.state.showUnsavedChangeModal,
    });
  }

  /**
   * Dismiss changes and close
   */
  dismissChangesAndClose() {
    this.setState({
      showUnsavedChangeModal: false,
      hide: true,
    });
  }

  /**
   * on save
   */
  onSave() {
    this.props.onSave(this.childRef.current.state, this.childRef.current.props);
    this.setState({ useDefaultUnsavedMessage: true });
  }

  /**
   * on delete
   */
  onDelete() {
    this.props.onShowToggle(this.props.index);
    this.props.onDelete(
      this.childRef.current?.state,
      this.childRef.current?.props,
    );
    this.setState({ hide: true, showDeleteModal: false });
  }

  /**
   * should disable save
   * @param {*} stateData state data
   * @param {*} componentProps component props
   */
  shouldDisableSave(stateData, componentProps) {
    let enableSave =
      this.props.disableSave(
        this.props.submissionFieldName,
        stateData,
        componentProps,
      ) === false;
    let propsDoNotMatch =
      this.props.propsMatchState(
        this.props.submissionFieldName,
        stateData,
        componentProps,
      ) === false;
    if (
      enableSave === false &&
      this.state.useDefaultUnsavedMessage &&
      propsDoNotMatch === false
    ) {
      this.setState({ useDefaultUnsavedMessage: false });
    } else if (enableSave && propsDoNotMatch && this.state.disableSave) {
      this.setState({ disableSave: false, propsMatchState: false });
    } else if (!this.state.disableSave && (!enableSave || !propsDoNotMatch)) {
      this.setState({ disableSave: true, propsMatchState: !propsDoNotMatch });
    }
  }

  shouldShow() {
    return this.props.forceOpen(this.state, this.props);
  }

  networkRuleOrderDidChange(didNotChange) {
    let didChange = !didNotChange;
    if (this.state.ruleOrderChange !== didChange) {
      this.setState({ ruleOrderChange: didChange });
    }
  }

  toggleShowChildren() {
    this.setState({ showChildren: !this.state.showChildren });
  }

  render() {
    if (this.props.noDeleteButton !== true && !this.props.onDelete) {
      throw new Error(
        `ToggleForm expects onDelete Function to be passed when a delete button is rendered`,
      );
    }

    if (this.props.noSaveButton !== true && !this.props.onSave) {
      throw new Error(
        `ToggleForm expects onSave Function to be passed when a save button is rendered`,
      );
    }
    return (
      <>
        <StatefulTabPanel
          {...(this.props.tabPanel ? this.props.tabPanel : {})}
          toggleShowChildren={this.toggleShowChildren}
          form={
            <>
              {this.props.name && !this.props.hideName && (
                <IcseHeading name={this.props.name} hideButton />
              )}
              <div
                className={addClassName(
                  this.props.type === "formInSubForm"
                    ? "formInSubForm positionRelative marginBottomSmall"
                    : "subForm marginBottomSmall",
                )}
              >
                <StatelessToggleForm
                  hide={this.state.hide}
                  iconType={this.props.useAddButton ? "add" : "edit"}
                  onIconClick={this.toggleChildren}
                  toggleFormTitle
                  name={this.props.name}
                  hideIcon={this.props.hideChevon}
                  buttons={
                    <>
                      <DynamicRender
                        hide={this.props.addButtonAtFormTitle !== true}
                        show={
                          <SaveAddButton
                            name={this.props.name}
                            type="add"
                            onClick={this.onToggleSubModal}
                            noDeleteButton
                          />
                        }
                      />
                      {/* save / add button */}
                      <DynamicRender
                        hide={
                          this.props.noSaveButton ||
                          this.props.addButtonAtFormTitle
                        }
                        show={
                          <SaveAddButton
                            name={this.props.name}
                            onClick={this.onSave}
                            disabled={this.state.disableSave}
                            noDeleteButton={this.props.noDeleteButton}
                          />
                        }
                      />
                      {/* delete button */}
                      <DynamicRender
                        hide={this.props.noDeleteButton}
                        show={
                          <DeleteButton
                            onClick={this.toggleDeleteModal}
                            name={this.props.name}
                            disabled={this.props.deleteDisabled({
                              ...this.props,
                              ...this.props.innerFormProps,
                            })}
                            disableDeleteMessage={
                              this.props.deleteDisabledMessage
                            }
                          />
                        }
                      />
                    </>
                  }
                >
                  {/* unsaved changes */}
                  <UnsavedChangesModal
                    name={
                      // use tab panel name if passed
                      this.props.name
                    }
                    modalOpen={this.state.showUnsavedChangeModal}
                    onModalClose={this.toggleUnsavedChangeModal}
                    onModalSubmit={this.dismissChangesAndClose}
                    useDefaultUnsavedMessage={
                      this.state.useDefaultUnsavedMessage
                    }
                  />
                  {/* delete resource */}
                  <DeleteModal
                    name={this.props.name}
                    additionalText={this.props.additionalText}
                    modalOpen={this.state.showDeleteModal}
                    onModalClose={this.toggleDeleteModal}
                    onModalSubmit={this.onDelete}
                  />
                  {RenderForm(this.props.innerForm, {
                    ...this.props.innerFormProps,
                    ref: this.props.nullRef ? null : this.childRef,
                    index: this.props.index,
                    shouldDisableSave: this.shouldDisableSave,
                    showSubModal: this.state.showSubModal,
                    networkRuleOrderDidChange: this.networkRuleOrderDidChange,
                    onChildShowToggle: this.props.onChildShowToggle,
                    shownChildren: this.props.shownChildren,
                    handleModalToggle: this.onToggleSubModal,
                    showSubModal: this.state.showSubModal,
                    // this is an override to allow the
                    // parent form to be saved from a button inside the child form
                    saveFromChildForm: {
                      onSave: this.onSave,
                      disableSave: this.state.disableSave,
                    },
                  })}
                </StatelessToggleForm>
              </div>
            </>
          }
          about={this.props.about || false}
        />
        {this.state.showChildren && this.props.children
          ? this.props.children
          : ""}
      </>
    );
  }
}

export default ToggleForm;

ToggleForm.defaultProps = {
  hide: true,
  unsavedChanges: false,
  index: 0,
  type: "subForm",
  nullRef: false,
  noDeleteButton: false,
  noSaveButton: false,
  useAddButton: false,
  hideName: false,
  // functions that return booleans must have a default
  deleteDisabled: () => {
    return false;
  },
  forceOpen: () => {
    return false;
  },
  hideChevon: false,
};

ToggleForm.propTypes = {
  name: PropTypes.string,
  hideName: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onShowToggle: PropTypes.func,
  index: PropTypes.number.isRequired,
  hide: PropTypes.bool.isRequired,
  submissionFieldName: PropTypes.string.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  forceOpen: PropTypes.func, // can be null
  deleteDisabled: PropTypes.func, // can be null
  disableDeleteMessage: PropTypes.func, // can be null
  type: PropTypes.string.isRequired,
  nullRef: PropTypes.bool.isRequired,
  innerFormProps: PropTypes.object, // can be null
  noDeleteButton: PropTypes.bool.isRequired,
  noSaveButton: PropTypes.bool.isRequired,
  useAddButton: PropTypes.bool.isRequired,
  tabPanel: PropTypes.shape({
    hideFormTitleButton: PropTypes.bool, // can be null
  }).isRequired,
  hideChevon: PropTypes.bool.isRequired,
};
