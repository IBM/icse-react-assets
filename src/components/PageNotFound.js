import React from "react";
import { Help } from "@carbon/icons-react";

/**
 * Error Page not found Page
 */
const PageNotFound = () => {
  return (
    <div className="underConstruction flexDirectionColumn">
      <Help size="128" />
      <h1> Error 404</h1>
      <br />
      <h4>Unfortunately, we couldn’t find the page you were looking for, but here are some helpful places to start from:</h4>
      <br />
      <div className="kerning">
        {" "}
        <a href="http://localhost:3000/projects" target="_blank">
          Projects
        </a>{" "}
        <br />
        {" "}
        <a href="http://localhost:3000/docs/about" target="_blank">
          About
        </a>{" "}
        <br />
        {" "}
        <a href="http://localhost:3000/docs/tutorial" target="_blank">
          Tutorial
        </a>{" "}
      </div>
    </div>
  );
};

export default PageNotFound;