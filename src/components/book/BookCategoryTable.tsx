import { FC, Fragment } from "react";
import { ITableCellAlignment, IUser } from "../../interfaces";
import { Table, TableRow, TableHead, TableCell } from "../";
import { generateTableCellColSpan, getUniqueID } from "../../utils/helpers";

export const BookCategoryTable: FC = () => {
  const columns: string[] = ["Name", "Email", "Phone", "Address", "Action"];

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
            {Object.keys(row).map((key: string, index: number) => (
              <Fragment key={getUniqueID()}>
                <TableCell
                  options={{
                    colSpan: generateTableCellColSpan(
                      index,
                      Object.keys(row).length,
                      columns.length
                    ),
                  }}
                >
                  {row[key as keyof typeof row]}
                </TableCell>
              </Fragment>
            ))}
          </TableRow>
        </Fragment>
      ))}
    </Table>
  );
};
