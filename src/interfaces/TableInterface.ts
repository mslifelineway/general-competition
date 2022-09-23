import React from "react";

export enum ITableCellAlignment {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}
export interface ITableOptions {
  cellSpacing?: number;
}
export interface ITable {
  children?: React.ReactNode;
  tableOptions?: ITableOptions;
  className?: string;
}

export interface ITableRow {
  children?: React.ReactNode;
  className?: string;
}

export interface ITableHead {
  children?: React.ReactNode;
  className?: string;
  align?: ITableCellAlignment;
}
export interface ITableCell {
  children?: React.ReactNode;
  className?: string;
  align?: ITableCellAlignment;
}
