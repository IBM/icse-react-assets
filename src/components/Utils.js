import React from "react";
import PropTypes from "prop-types";
import { DynamicToolTipWrapper } from "./Tooltips";
import { EditCloseIcon } from "./Buttons";
import { kebabCase } from "lazy-z";
import {
  titleGroupParams,
  formGroupParams,
  icseSubFormParams,
  icseHeadingParams,
  statelessToggleFormParams,
} from "../lib/utils";

/**
 * Render a form
 * @param {*} form form element
 * @param {*} formProps props
 * @returns Form element
 */
export function RenderForm(form, formProps) {
  return React.createElement(form, {
    ...formProps,
  });
}

/**
 * Dynamically render inner contents
 * @param {*} props
 * @param {boolean=} props.hide hide element
 * @param {boolean=} props.show component to show when hide is false
 * @returns empty string when hidden, component when visible
 */
export function DynamicRender(props) {
  return props.hide === true ? "" : props.show;
}

/**
 * wrapper for title groups
 */
export const TitleGroup = (props) => {
  let className = titleGroupParams(props);
  return <div className={className}>{props.children}</div>;
};

TitleGroup.defaultProps = {
  hide: true,
};

TitleGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export const IcseFormGroup = (props) => {
  let formGroupClassName = formGroupParams(props);

  return <div className={formGroupClassName}>{props.children}</div>;
};

IcseFormGroup.defaultProps = {
  noMarginBottom: false,
};

IcseFormGroup.propTypes = {
  noMarginBottom: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const IcseSubForm = (props) => {
  let className = icseSubFormParams(props);
  return (
    <div className={className} id={props.id}>
      {props.children}
    </div>
  );
};

IcseSubForm.defaultProps = {
  formInSubForm: false,
};

IcseSubForm.propTypes = {
  id: PropTypes.string.isRequired,
  formInSubForm: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const IcseHeading = (props) => {
  let className = icseHeadingParams(props);
  return (
    <div className={className}>
      <DynamicToolTipWrapper
        tooltip={props.tooltip}
        noLabelText={true}
        id={props.name}
        innerForm={() => {
          return props.type === "subHeading" ? (
            <h5>{props.name}</h5>
          ) : props.type === "p" ? (
            <p>{props.name}</p>
          ) : props.type === "section" ? (
            <h6>{props.name}</h6>
          ) : (
            <h4>{props.name}</h4>
          );
        }}
      />
      <div className="displayFlex">{props.buttons}</div>
    </div>
  );
};

IcseHeading.defaultProps = {
  type: "heading",
};

IcseHeading.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    align: PropTypes.string,
    alignModal: PropTypes.string,
  }),
  buttons: PropTypes.node,
  className: PropTypes.string,
  toggleFormTitle: PropTypes.bool,
};

/**
 * All of the toggle form functionality without injecting anything on render
 */
export const StatelessToggleForm = (props) => {
  let { type, dynamicRenderHide } = statelessToggleFormParams(props);
  return props.hideTitle ? (
    props.children
  ) : (
    <>
      <TitleGroup hide={props.hide} props={props} className={props.className}>
        {props.hideIcon !== true && (
          <EditCloseIcon
            name={kebabCase(props.name)}
            onClick={props.onIconClick}
            type={props.iconType}
            open={props.hide === false}
          />
        )}
        <IcseHeading
          type={type}
          name={props.name}
          buttons={
            <DynamicRender
              hide={dynamicRenderHide}
              show={props.buttons || ""}
            />
          }
        />
      </TitleGroup>
      <DynamicRender hide={props.hide} show={props.children} />
    </>
  );
};

StatelessToggleForm.defaultProps = {
  hide: true,
  iconType: "edit",
  name: "Stateless Toggle Form",
  hideTitle: false,
  alwaysShowButtons: false,
  hideTitle: false,
  toggleFormTitle: false,
};

StatelessToggleForm.propTypes = {
  children: PropTypes.node.isRequired,
  hide: PropTypes.bool.isRequired,
  iconType: PropTypes.string.isRequired,
  onIconClick: PropTypes.func,
  subHeading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  buttons: PropTypes.node,
  toggleFormTitle: PropTypes.bool.isRequired,
  alwaysShowButtons: PropTypes.bool.isRequired,
  hideTitle: PropTypes.bool.isRequired,
};
