import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { TableProps } from "./props";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const Table = <T,>({ rowData, colDefs }: TableProps<T>) => {
  return <AgGridReact rowData={rowData} columnDefs={colDefs} />;
};

export default Table;
