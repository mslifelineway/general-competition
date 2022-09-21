import React, { FC } from "react";
import { ILayoutProps } from "../interfaces";
import { Header, Sidebar } from ".";
// import { Topbar } from "./Topbar";

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <section className="layout__container">
        <Sidebar />
        <div className="layout__right u-grow-1">
          {/* <Topbar /> */}
          <section className="main-content">{children}</section>
        </div>
      </section>
    </div>
  );
};
