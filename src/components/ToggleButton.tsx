import React, { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { IDrawerContext } from "../interfaces";

export const ToggleButton = () => {
  const drawerCtx: IDrawerContext | null = useContext(DrawerContext);
  const { isOpen, setIsOpen } = drawerCtx || {};
  
  return (
    <div className="toggle-button">
      <input
        type="checkbox"
        id="toggle-button"
        className="toggle-button__checkbox"
        onClick={() => setIsOpen && setIsOpen(!isOpen)}
      />
      <label htmlFor="toggle-button" className="toggle-button__button">
        <span className="toggle-button__icon">&nbsp;</span>
      </label>
    </div>
  );
};
