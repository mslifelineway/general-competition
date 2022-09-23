import { FC } from "react";
import { ITableRow } from "../../interfaces";

export const TableRow: FC<ITableRow> = ({ children, className }) => {
  return (
    <tr className={`table-row${className ? ` ${className}` : ""}`}>
      {children}
    </tr>
  );
};
