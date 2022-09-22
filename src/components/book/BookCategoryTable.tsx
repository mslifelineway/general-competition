import { FC, Fragment } from "react";
import { IUser } from "../../interfaces";
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
      <TableRow>
        {columns.map((col: string) => (
          <Fragment key={getUniqueID()}>
            <TableHead>{col}</TableHead>
          </Fragment>
        ))}
      </TableRow>
      {rows.map((row: IUser) => (
        <Fragment key={getUniqueID()}>
          <TableRow>
            {columns.map((col: string) => (
              <Fragment key={getUniqueID()}>
                <TableCell>{col}</TableCell>
              </Fragment>
            ))}
          </TableRow>
        </Fragment>
      ))}
    </Table>
  );
};
