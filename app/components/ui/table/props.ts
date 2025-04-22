import { ColDef, ColGroupDef } from "ag-grid-community";

export interface TableProps<T> {
  rowData: T[];
  colDefs: (ColDef<T, any> | ColGroupDef<T>)[];
}
