import React from "react";
import { ToggleButton } from "./ToggleButton";

export const Header = () => {
  return (
    <section className="header">
      <div className="header__content">
        <ToggleButton />
        <div className="header__right">
          <ul className="header__menus">
            <li className="header__menus-item">
              <a href="/publications">Publications</a>
            </li>
            <li className="header__menus-item">
              <a href="/chapters">Chapters</a>
            </li>
            <li className="header__menus-item">|</li>
            <li className="header__menus-item">
              <a href="/signin">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
