import React from "react";
import {
  IcseFormTemplate,
  FormModal,
  IcseHeading,
  SaveAddButton,
  NetworkAclForm,
  RenderForm,
} from "../../components";
import PropTypes from "prop-types";

function none() {}

class NetworkAclPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToggleForm: false,
      sourceAcl: null,
      destinationVpc: null,
      addClusterRuleAcl: null,
    };
    this.onModalSubmit = this.onModalSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  onModalSubmit(data) {
    this.props.onAclSubmit(data, {
      vpc_name: this.props.data.name,
    });
    this.props.handleModalToggle();
  }

  handleSelect(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    let { disableSave, propsMatchState } = this.props;
    return (
      <>
        <FormModal
          name="Add a Network ACL"
          show={this.props.showSubModal}
          onRequestSubmit={this.onModalSubmit}
          onRequestClose={this.props.handleModalToggle}
        >
          <NetworkAclForm
            invalidTextCallback={this.props.invalidTextCallback}
            invalidCallback={this.props.invalidCallback}
            craig={this.props.craig}
            resourceGroups={this.props.resourceGroups}
            vpc_name={this.props.data.name}
            shouldDisableSubmit={function () {
              // set modal form enable submit
              if (disableSave("acls", this.state, this.props) === false) {
                this.props.enableModal();
              } else {
                this.props.disableModal();
              }
            }}
            isModal
            /* below functions only needed when not modal but are required */
            disableSaveCallback={none}
            helperTextCallback={none}
            onRuleSave={none}
            onRuleDelete={none}
            disableModalSubmitCallback={none}
            onSubmitCallback={none}
          />
        </FormModal>
        <IcseHeading
          name="Network Access Control Lists"
          className="marginBottomSmall"
          type="subHeading"
          buttons={
            <SaveAddButton
              onClick={() => this.props.handleModalToggle()}
              type="add"
              noDeleteButton
            />
          }
        />

        <IcseFormTemplate
          arrayData={this.props.data.acls}
          onSubmit={none} // no modal
          onDelete={this.props.onDelete}
          onSave={this.props.onSave}
          innerForm={NetworkAclForm}
          isMiddleForm
          innerFormProps={{
            invalidTextCallback: this.props.invalidTextCallback,
            invalidCallback: this.props.invalidCallback,
            invalidRuleTextCallback: this.props.invalidRuleTextCallback,
            invalidRuleText: this.props.invalidRuleText,
            disableSaveCallback: function (stateData, componentProps) {
              return (
                disableSave("acl_rules", stateData, componentProps) ||
                propsMatchState("acl_rules", stateData, componentProps)
              );
            },
            helperTextCallback: this.props.helperTextCallback,
            onRuleSave: this.props.onRuleSave,
            onRuleDelete: this.props.onRuleDelete,
            onSubmitCallback: this.props.onSubmitCallback,
            resourceGroups: this.props.resourceGroups,
            vpc_name: this.props.data.name,
            craig: this.props.craig,
            disableModalSubmitCallback: none,
          }}
          disableSave={this.props.disableSave}
          propsMatchState={this.props.propsMatchState}
          toggleFormProps={{
            submissionFieldName: "acls",
            hideName: true,
            type: "formInSubForm",
            disableSave: this.props.disableSave,
            propsMatchState: this.props.propsMatchState,
            vpc_name: this.props.data.name,
          }}
          hideAbout
        />
        {this.props.child
          ? RenderForm(this.props.child, {
              data: this.props.data,
              craig: this.props.craig,
            })
          : ""}
      </>
    );
  }
}

NetworkAclPage.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    acls: PropTypes.array,
  }),
  onAclSubmit: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleModalToggle: PropTypes.func,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export const NetworkAcls = (props) => {
  return (
    <IcseFormTemplate
      name="Network Access Control Lists"
      innerForm={NetworkAclPage}
      arrayData={props.vpcs}
      docs={props.docs}
      onSubmit={none}
      onDelete={none}
      onSave={none}
      disableSave={none}
      propsMatchState={none}
      forceOpen={props.forceOpen}
      hideFormTitleButton
      innerFormProps={{
        craig: props.craig,
        onAclSubmit: props.onAclSubmit,
        resourceGroups: props.resourceGroups,
        child: props.child,
        invalidTextCallback: props.invalidTextCallback,
        invalidCallback: props.invalidCallback,
        invalidRuleTextCallback: props.invalidRuleTextCallback,
        invalidRuleText: props.invalidRuleText,
        disableSave: props.disableSave,
        propsMatchState: props.propsMatchState,
        helperTextCallback: props.helperTextCallback,
        onRuleSave: props.onRuleSave,
        onRuleDelete: props.onRuleDelete,
        onSubmitCallback: props.onSubmitCallback,
        onSave: props.onSave,
        onDelete: props.onDelete,
      }}
      toggleFormProps={{
        craig: props.craig,
        noDeleteButton: true,
        noSaveButton: true,
        hideName: true,
        submissionFieldName: "network_acls",
        disableSave: none,
        propsMatchState: none,
        nullRef: true,
      }}
    />
  );
};

NetworkAcls.propTypes = {
  vpcs: PropTypes.array.isRequired,
  docs: PropTypes.func.isRequired,
  forceOpen: PropTypes.func.isRequired,
  craig: PropTypes.shape({}).isRequired,
  onAclSubmit: PropTypes.func.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  invalidTextCallback: PropTypes.func.isRequired,
  invalidCallback: PropTypes.func.isRequired,
  invalidRuleTextCallback: PropTypes.func.isRequired,
  invalidRuleText: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  propsMatchState: PropTypes.func.isRequired,
  helperTextCallback: PropTypes.func.isRequired,
  onRuleSave: PropTypes.func.isRequired,
  onRuleDelete: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
