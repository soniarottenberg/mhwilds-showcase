import { ColDef } from "ag-grid-community";
import { useState } from "react";
import Table from "../../ui/table";

interface RowData {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const MonsterTable = () => {
  // TODO: display a table of monsters
  const [rowData, setRowData] = useState<RowData[]>([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<RowData>[]>([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  return (
    <div style={{ height: 500 }}>
      <Table rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default MonsterTable;
