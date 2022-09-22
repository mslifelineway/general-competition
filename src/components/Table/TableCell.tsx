import { FC } from "react";
import { ITableCell } from "../../interfaces";

export const TableCell: FC<ITableCell> = ({ children }) => {
  return <td className="table-cell">{children}</td>;
};
