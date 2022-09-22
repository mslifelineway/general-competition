import { FC} from "react";
import { ITableRow } from "../../interfaces";

export const TableRow: FC<ITableRow> = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};
