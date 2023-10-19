import React from "react";
import { Help } from "@carbon/icons-react";

/**
 * Error Page not found Page
 */
const PageNotFound = () => {
  return (
    <div className="underConstruction flexDirectionColumn">
      <Help size="128" />
      <h1> ERROR 404</h1>
      <br />
      <h4>Unfortunately, we couldn’t find the page you were looking for, but here are some helpful places to start from:</h4>
      <br />
      <div className="kerning">
        {"Projects"}
        <a href="localhost:3000/projects" target="_blank">
        </a>{"Projects"}
        <br />
        {"About"}
        <a href="localhost:3000/docs/about" target="_blank">
        </a>{"About"}
        <br />
        {"Tutorial"}
        <a href="localhost:3000/docs/tutorial" target="_blank">
        </a>{"Tutorial"}
      </div>
    </div>
  );
};

export default PageNotFound;