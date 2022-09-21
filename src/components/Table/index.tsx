import React from "react";
import { IUser } from "../../interfaces";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";

const columns = ["Name", "Email", "Phone", "Address"];
const rows: IUser[] = [
  {
    name: "Mukesh Kumar",
    email: "mukesh@gmail.com",
    token: "sometoken....",
  },
];

export const Table = () => {
  return (
    <table className="table">
      <thead>
        {columns.map((data: string, index) => (
          <React.Fragment key={`${data}_${index}`}>
            <TableHead name={data} />
          </React.Fragment>
        ))}
      </thead>
      <tbody>
        {rows.map((data: IUser, index) => (
          <React.Fragment key={`${data}_${index}`}>
            <TableCell data={data} />
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
