import React, { useState } from "react";
import ReactDOM from "react-dom";

function ErrorDisplay({ message, onClose }) {
  return (
    <div
      className="cc-error-display"
      onClick={onClose}
      aria-live="polite"
      style={{ background: "#ff0000", color: "#fff" }}
    >
      <h5 style={{ fontWeight: "500", width: "100%" }}>{message}</h5>

      <span className="cc-error-display-close">&#10005;</span>
    </div>
  );
}

export function logError(error, errorInfo) {
  console.log("logError:", error.message, errorInfo.componentStack);
  const errorMessage = `Error: ${error.message} ${errorInfo.componentStack}`;

  ReactDOM.render(
    <ErrorDisplay
      message={errorMessage}
      onClose={() => {
        document.getElementById("error-container").style.display = "none";
      }}
    />,
    document.getElementById("error-container")
  );
}
