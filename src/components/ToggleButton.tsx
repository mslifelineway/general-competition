import React from "react";

export const ToggleButton = () => {
  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="toggle-button"
        className="toggle-button__checkbox"
      />
      <label htmlFor="toggle-button" className="toggle-button__button">
        <span className="toggle-button__icon">&nbsp;</span>
      </label>
    </div>
  );
};
