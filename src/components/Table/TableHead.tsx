import { FC } from "react";
import { ITableHead } from "../../interfaces";

export const TableHead: FC<ITableHead> = ({ name }) => {
  return <th className="table-head">{name}</th>;
};
