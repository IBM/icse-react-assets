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
 * @param {Object} props
 * @param {string} props.content
 * @param {string=} props.link optional link
 * @param {string=} props.align alignment
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
      align={props.tooltip.align || "top"}
      modalAlign={props.tooltip.alignModal || "bottom"}
    />
  );
};

BuildToolTip.defaultProps = {
  content: "",
  link: false,
  align: "top",
  modalAlign: "bottom",
};

BuildToolTip.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  align: PropTypes.string,
  modalAlign: PropTypes.string,
};

/**
 *
 * @param {*} props
 * @param {*} props.innerForm react child form
 * @param {string} props.tooltip.content tooltip content
 * @param {string=} props.tooltip.link optional tooltip link
 * @returns
 */
export const ToolTipWrapper = (props) => {
  let allProps = { ...props };
  delete allProps.innerForm;
  delete allProps.tooltip;
  // remove label text from components where it is not valid param
  if (props.noLabelText) {
    delete allProps.labelText;
    delete allProps.noLabelText;
  } else allProps.labelText = " ";
  allProps.className = addClassName("tooltip", { ...props });

  let name = props.labelText || (props.field ? titleCase(props.field) : null);
  return (
    <div className="cds--form-item">
      {name ? (
        <>
          <div className="labelRow cds--label">
            <label htmlFor={props.id}>{name}</label>
            {BuildToolTip(props)}
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
          {BuildToolTip(props)}
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
  tooltip: PropTypes.shape({
    content: PropTypes.string.isRequired,
    link: PropTypes.string,
    innerForm: PropTypes.func.isRequired,
  }),
};

/**
 *
 * @param {*} props
 * @param {*} props.innerForm react child form
 * @param {string=} props.tooltipClassName optional tooltip classname
 * @param {string} props.tooltipContent tooltip content
 * @param {string=} props.tooltipLink optional tooltip link
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
  tooltipContent: "",
  tooltipLink: false,
};

DynamicToolTipWrapper.propTypes = {
  tooltipClassName: PropTypes.string,
  tooltipContent: PropTypes.string.isRequired,
  tooltipLink: PropTypes.string,
  innerForm: PropTypes.func.isRequired,
};
