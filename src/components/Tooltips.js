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
import PropTypes from "prop-types";
import "./styles/Tooltips.css";

/**
 * render a tooltip around an input field
 * @returns slz tooltip component
 */
export const IcseToolTip = (props) => {
  let link = (
    <Link onClick={() => window.open(props.link, "_blank")}>this link</Link>
  );
  return (
    <>
      <Toggletip align={props.align}>
        <ToggletipButton>
          <Information className="tooltipMarginLeft" />
        </ToggletipButton>
        <ToggletipContent>
          <p>
            {props.content}
            {props.link && <> Visit {link} for more information. </>}
          </p>
        </ToggletipContent>
      </Toggletip>
    </>
  );
};

IcseToolTip.defaultProps = {
  content: "",
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
      link={props.tooltip?.link}
      align={props.isModal ? props.alignModal : props.align}
    />
  );
};

BuildToolTip.defaultProps = {
  tooltip: {
    content: "",
  },
  isModal: false,
  align: "top",
  alignModal: "bottom",
};

BuildToolTip.propTypes = {
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  isModal: PropTypes.bool.isRequired,
  align: PropTypes.string.isRequired,
  alignModal: PropTypes.string.isRequired,
};

export const ToolTipWrapper = (props) => {
  let allProps = { ...props };
  let tooltip = BuildToolTip(props);
  delete allProps.innerForm;
  delete allProps.tooltip;
  // remove label text from components where it is not valid param
  delete allProps.noLabelText;
  if (props.noLabelText) delete allProps.labelText;
  else allProps.labelText = " ";
  allProps.className = addClassName("tooltip", { ...props });
  return (
    <div className="cds--form-item">
      {props.noLabelText ? (
        // No label- this is usually a title
        <div className="labelRow">
          {RenderForm(props.innerForm, allProps)}
          {tooltip}
        </div>
      ) : (
        <>
          <div className="cds--label labelRow">
            <label htmlFor={props.id}>
              {props.labelText || titleCase(props.field)}
            </label>
            {tooltip}
          </div>
          {props.children
            ? React.cloneElement(props.children, {
                // adjust props
                labelText: " ", // set labelText to empty
                className: props.children.props.className + " tooltip", // add tooltip class back
              })
            : RenderForm(props.innerForm, allProps)}
        </>
      )}
    </div>
  );
};

ToolTipWrapper.defaultProps = {
  tooltip: {
    content: "",
  },
  noLabelText: false,
};

ToolTipWrapper.propTypes = {
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  field: PropTypes.string,
  noLabelText: PropTypes.bool.isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.object,
};

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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  innerForm: PropTypes.object,
};
