import { FC, Fragment } from "react";
import { ITableCellAlignment, IUser } from "../../interfaces";
import { Table, TableRow, TableHead, TableCell } from "../";
import { getUniqueID } from "../../utils/helpers";

export const BookCategoryTable: FC = () => {
  const columns: string[] = ["Name", "Email", "Phone", "Address"];

  const rows: IUser[] = [
    {
      name: "Mukesh Kumar",
      email: "mukesh@gmail.com",
      token: "sometoken....",
      address: "Bihar",
    },
  ];

  return (
    <Table>
      <TableRow className="table-row--head">
        {columns.map((col: string) => (
          <Fragment key={getUniqueID()}>
            <TableHead align={ITableCellAlignment.CENTER}>{col}</TableHead>
          </Fragment>
        ))}
      </TableRow>
      {rows.map((row: IUser) => (
        <Fragment key={getUniqueID()}>
          <TableRow>
            {Object.keys(row).map((key: string) => (
              <Fragment key={getUniqueID()}>
                <TableCell>{row[key as keyof typeof row]}</TableCell>
              </Fragment>
            ))}
          </TableRow>
        </Fragment>
      ))}
    </Table>
  );
};
