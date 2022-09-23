import { FC } from "react";
import { ITableCellAlignment, ITableHead } from "../../interfaces";

export const TableHead: FC<ITableHead> = ({
  children,
  align = ITableCellAlignment.CENTER,
}) => {
  return (
    <th className="table-head" align={align}>
      {children}
    </th>
  );
};
