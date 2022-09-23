import { FC } from "react";
import { ITableCell, ITableCellAlignment } from "../../interfaces";

export const TableCell: FC<ITableCell> = ({ children, options = {} }) => {
  return (
    <td className="table-cell" {...options}>
      {children}
    </td>
  );
};
