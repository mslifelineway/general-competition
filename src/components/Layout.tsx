import React, { FC } from "react";
import { ILayoutProps } from "../interfaces";
import { Header, Sidebar } from ".";

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="u-margin-top-large-1"></div>
      <section className="layout__container">
        <Sidebar />
        <div className="layout__right u-grow-1">{children}</div>
      </section>
    </>
  );
};
