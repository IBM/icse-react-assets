import React from "react";

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
