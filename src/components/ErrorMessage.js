import React from "react";
import "./ErrorMessage.css";
import { SHAPES_FETCH_FAILURE } from "../actions/types";

const ErrorMessage = ({ error }) => {
  switch (error) {
    case SHAPES_FETCH_FAILURE:
      return (
        <div className="ErrorMessage">
          We couldn't fetch shapes. Please try again later.
        </div>
      );
    default:
      return <div className="ErrorMessage">Something went wrong.</div>;
  }
};

export default ErrorMessage;
