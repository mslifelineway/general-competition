import { v4 as uuidv4 } from "uuid";

export const getUniqueID = () => {
  return uuidv4();
};

/**
 * This function is used to create a colSpan value for the last cell in a row
 * It checks if the cellIndex is the last cell index of the row then it creates a colspan value for the cellIndex
 *
 * @param cellIndex
 * @param numberOfCellsInRow
 * @param numberOfColumns
 */
export const generateTableCellColSpan = (
  cellIndex: number,
  numberOfCellsInRow: number,
  numberOfColumns: number
) => {
  return cellIndex === numberOfCellsInRow - 1
    ? Math.abs(numberOfColumns - cellIndex) || 1
    : 1;
};
