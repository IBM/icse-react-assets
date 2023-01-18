import { RenderForm } from "./Utils";
import { addClassName } from "../form-utils";
import { titleCase } from "lazy-z";
import React from "react";
import {
  Toggletip,
  ToggletipButton,
  ToggletipContent,
  Link,
} from "@carbon/react";
import { Information } from "@carbon/icons-react";
import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/Tooltips.css";

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
export const IcseToolTip = (props) => {
  return (
    <>
      <Toggletip align={props.align}>
        <ToggletipButton>
          <Information className="tooltipMarginLeft" />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            {props.content}
            {props.link && (
              <>
                {" "}
                Visit{" "}
                <Link onClick={() => window.open(props.link, "_blank")}>
                  this link
                </Link>{" "}
                for more information.
              </>
            )}
          </p>
        </ToggletipContent>
      </Toggletip>
    </>
  );
};

IcseToolTip.defaultProps = {
  content: "",
  link: false,
  align: "top",
};

IcseToolTip.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  align: PropTypes.string.isRequired,
};

const BuildToolTip = (props) => {
  return (
    <IcseToolTip
      content={props.tooltip.content}
      link={props.tooltip.link || false}
      align={props.isModal ? props.alignModal : props.align}
      alignModal={props.tooltip.alignModal}
    />
  );
};

BuildToolTip.defaultProps = {
  tooltip: {
    content: "",
    link: false,
  },
  align: "top",
  alignModal: "bottom",
};

BuildToolTip.propTypes = {
  tooltip: PropTypes.object,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
  align: PropTypes.string,
  alignModal: PropTypes.string,
};

/**
 *
 * @returns
 */
export const ToolTipWrapper = (props) => {
  let allProps = { ...props };
  let setToolTip = { function: () => BuildToolTip(props) };
  delete allProps.innerForm;
  delete allProps.tooltip;
  // remove label text from components where it is not valid param
  if (props.noLabelText) {
    delete allProps.labelText;
    delete allProps.noLabelText;
  } else allProps.labelText = " ";
  allProps.className = addClassName("tooltip", { ...props });

  let name = props.labelText || titleCase(props.field);
  return (
    <div className="cds--form-item">
      {name ? (
        <>
          <div className="labelRow cds--label">
            <label htmlFor={props.id}>{name}</label>
            {setToolTip.function()}
          </div>
          {props.children
            ? React.cloneElement(props.children, {
                // adjust props
                labelText: " ", // set labelText to empty
                className: props.children.props.className + " tooltip", // add tooltip class back
              })
            : RenderForm(props.innerForm, allProps)}
        </>
      ) : (
        // No label- this is usually a title
        <div className="labelRow">
          {RenderForm(props.innerForm, allProps)}
          {setToolTip.function()}
        </div>
      )}
    </div>
  );
};

ToolTipWrapper.defaultProps = {
  tooltip: {
    content: "",
    link: false,
  },
};

ToolTipWrapper.propTypes = {
  tooltip: PropTypes.object,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  field: PropTypes.string,
  noLabelText: PropTypes.bool,
  children: PropTypes.node,
  innerForm: PropTypes.object,
};

/**
 *
 * @returns
 */
export const DynamicToolTipWrapper = (props) => {
  return props.tooltip ? (
    <ToolTipWrapper {...props} />
  ) : props.children ? (
    props.children
  ) : (
    RenderForm(props.innerForm, {})
  );
};

DynamicToolTipWrapper.defaultProps = {
  tooltip: {
    content: "",
    link: false,
  },
};

DynamicToolTipWrapper.propTypes = {
  tooltip: PropTypes.object,
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
  children: PropTypes.node,
  innerForm: PropTypes.object,
};
