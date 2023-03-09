import React from "react";

const Alert = ({ showAlert }) => {
  return (
    <div className={`alert-container ${showAlert ? "show" : ""}`}>
      <p>
        The letter has already been entered. Please enter a different letter!
      </p>
    </div>
  );
};

export default Alert;
