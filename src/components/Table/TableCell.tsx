import { FC } from "react";
import { ITableCell, IUser } from "../../interfaces";

export const TableCell: FC<ITableCell> = ({ data = {} }) => {
  const row: IUser = data;

  if (!Object.keys(row).length) return <td className="table-cell"></td>;

  return (
    <tr className="table-row">
      {Object.keys(row).map((key: string, index: number) => (
        <td className="table-cell" key={`${key}_${index}`}>
          {row[key]}
        </td>
      ))}
    </tr>
  );
};
