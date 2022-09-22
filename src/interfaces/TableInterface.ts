import { IUser } from "./";

export interface ITable {}

export interface ITableHead {
  name: string;
}

export interface ITableCell {
  data: IUser;
}

// export interface ITableHeadProps {
//   TYPE: IUser;
// }
// export interface ITableCellProps {
//   TYPE: IUser;
// }
