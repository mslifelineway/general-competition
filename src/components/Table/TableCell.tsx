import { FC } from "react";
import { ITableCell, ITableCellAlignment } from "../../interfaces";

export const TableCell: FC<ITableCell> = ({
  children,
  align = ITableCellAlignment.CENTER,
}) => {
  return (
    <td className="table-cell" align={align}>
      {children}
    </td>
  );
};
