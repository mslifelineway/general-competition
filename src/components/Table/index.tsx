import React, { FC } from "react";
import { ITable } from "../../interfaces";

export const Table: FC<ITable> = ({ children, tableOptions }) => {
  const { cellSpacing = 0 } = tableOptions || {};
  return (
    <table className="table" cellSpacing={cellSpacing}>
      {children}
    </table>
  );
};
