import React from "react";
import { WarningAlt } from "@carbon/icons-react";

/**
 * Under Construction Page
 */
const ErrorPage = () => {
  return (
    <div className="underConstruction flexDirectionColumn">
      <WarningAlt size="128" />
      <h4>Error 404: Page Not Found</h4>
    </div>
  );
};

export default ErrorPage;