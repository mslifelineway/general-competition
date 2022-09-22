import React from "react";
import { IUser } from "./";

export interface ITableOptions {
  cellSpacing?: number;
}
export interface ITable {
  children?: React.ReactNode;
  tableOptions?: ITableOptions;
}

export interface ITableRow {
  children?: React.ReactNode;
}

export interface ITableHead {
  children?: React.ReactNode;
}

export interface ITableCell {
  children?: React.ReactNode;
}
