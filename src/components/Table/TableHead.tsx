import { FC } from "react";
import { ITableHead } from "../../interfaces";

export const TableHead: FC<ITableHead> = ({ children }) => {
  return <th className="table-head">{children}</th>;
};
