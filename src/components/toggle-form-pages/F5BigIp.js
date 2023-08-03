import React from "react";
import PropTypes from "prop-types";
import {
  F5VsiForm,
  F5VsiTemplateForm,
  ToggleForm,
  StatefulTabPanel,
} from "../../";
import { CloudAlerting } from "@carbon/icons-react";
import { Tile } from "@carbon/react";

function none() {}

const NoEdgeNetworkTile = () => {
  return (
    <Tile className="tileBackground displayFlex alignItemsCenter wrap marginTop">
      <span>
        <CloudAlerting size="24" className="iconMargin" /> No Edge Network. Go
        back to the{" "}
        <a className="no-secrets-link" href="/">
          Home page
        </a>{" "}
        to enable Edge Networking.{" "}
        <em>
          Dynamic Scalable Subnets must be disabled to create an Edge VPC
          network.
        </em>
      </span>
    </Tile>
  );
};

const F5Form = (props) => {
  return (
    <div>
      <ToggleForm
        name="F5 Big IP Template Configuration"
        submissionFieldName="f5_vsi_template"
        noDeleteButton
        hideName
        onSave={props.onTemplateSave}
        disableSave={props.disableSave}
        type="formInSubForm"
        innerForm={F5VsiTemplateForm}
        tabPanel={{ hideAbout: true }}
        craig={props.craig}
        innerFormProps={props.templateInnerFormProps}
        propsMatchState={props.propsMatchState}
      />
      <ToggleForm
        name="F5 VSI Deployment Configuration"
        submissionFieldName="f5_vsi"
        noDeleteButton
        hideName
        tabPanel={{ hideAbout: true }}
        onSave={props.onVsiSave}
        disableSave={props.disableSave}
        type="formInSubForm"
        innerForm={F5VsiForm}
        innerFormProps={props.deploymentInnerFormProps}
        craig={props.craig}
        propsMatchState={props.propsMatchState}
      />
    </div>
  );
};

F5Form.propTypes = {
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  templateInnerFormProps: PropTypes.shape({}).isRequired,
  deploymentInnerFormProps: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({}),
  onTemplateSave: PropTypes.func.isRequired,
  onVsiSave: PropTypes.func.isRequired,
};

export const F5BigIp = (props) => {
  return props.noEdgePattern ? (
    <StatefulTabPanel
      name="F5 Big IP"
      hideFormTitleButton
      form={<NoEdgeNetworkTile />}
      about={props.docs}
    />
  ) : (
    <ToggleForm
      craig={props.craig}
      name="Configure F5 Big IP"
      noSaveButton
      submissionFieldName="f5_vsi"
      about={props.docs}
      innerForm={F5Form}
      hideName
      noDeleteButton
      tabPanel={{
        name: "F5 Big IP",
      }}
      propsMatchState={props.propsMatchState}
      disableSave={props.disableSave}
      hide
      nullRef
      innerFormProps={{
        onVsiSave: props.onVsiSave,
        onTemplateSave: props.onTemplateSave,
        craig: props.craig,
        disableSave: props.disableSave,
        propsMatchState: props.propsMatchState,
        templateInnerFormProps: {
          invalidCallback: props.invalidTemplateCallback,
          invalidTextCallback: none,
          disableSave: props.disableSave,
          propsMatchState: props.propsMatchState,
          data: props.templateData,
        },
        deploymentInnerFormProps: {
          craig: props.craig,
          vsis: props.vsis,
          sshKeys: props.sshKeys,
          edge_pattern: props.edge_pattern,
          f5_on_management: props.f5_on_management,
          apiEndpointInstanceProfiles: props.instanceProfilesApiEndpoint,
          resourceGroups: props.resourceGroups,
          encryptionKeys: props.encryptionKeys,
          f5Images: props.f5Images,
          initVsiCallback: props.initVsiCallback,
          saveVsiCallback: props.saveVsiCallback,
          disableSaveCallback: props.propsMatchState,
          hideSaveCallback: none,
          propsMatchState: props.propsMatchState,
          data: props.deploymentData,
        },
      }}
    />
  );
};

F5BigIp.propTypes = {
  docs: PropTypes.object.isRequired,
  craig: PropTypes.shape({}).isRequired,
  propsMatchState: PropTypes.func.isRequired,
  disableSave: PropTypes.func.isRequired,
  invalidTemplateCallback: PropTypes.func.isRequired,
  vsis: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  sshKeys: PropTypes.array.isRequired,
  edge_pattern: PropTypes.string,
  f5_on_management: PropTypes.bool.isRequired,
  instanceProfilesApiEndpoint: PropTypes.string.isRequired,
  resourceGroups: PropTypes.arrayOf(PropTypes.string).isRequired,
  encryptionKeys: PropTypes.array.isRequired,
  f5Images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initVsiCallback: PropTypes.func.isRequired,
  saveVsiCallback: PropTypes.func.isRequired,
  templateData: PropTypes.shape({}).isRequired,
  deploymentData: PropTypes.shape({}),
  onTemplateSave: PropTypes.func.isRequired,
  onVsiSave: PropTypes.func.isRequired,
};
