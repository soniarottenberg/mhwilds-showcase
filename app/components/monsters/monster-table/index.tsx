import { ColDef } from "ag-grid-community";
import { useState } from "react";
import Table from "../../ui/table";
import { useGetMonsters } from "../../../hooks/useGetMonsters";

interface RowData {
  name: string;
  species: string;
  weaknesses: any;
  resistances: any;
}

const MonsterTable = () => {
  // TODO: display a table of monsters
  const { data: monsters, isLoading, error } = useGetMonsters();

  const [rowData, setRowData] = useState<RowData[]>(monsters);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef<RowData>[]>([
    { field: "name" },
    { field: "species" },
    { field: "weaknesses" },
    { field: "resistances" },
  ]);

  // TODO: display a loading and error component
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: ...</div>;

  return (
    <div style={{ height: 500 }}>
      <Table rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default MonsterTable;
