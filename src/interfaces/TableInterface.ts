import { IUser } from "./AuthInterface";

export interface ITable {}

export interface ITableCell {
  data?: IUser;
}

export interface ITableHead {
  name: string;
}
