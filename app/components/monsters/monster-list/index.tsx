import MonsterCard from "../monster-card";
import { useGetMonsters } from "../../../hooks/useGetMonsters";
import { useMemo } from "react";
const MonsterList = () => {
  const { data: monsters, isLoading, error } = useGetMonsters();
  console.log(monsters);
  const filteredMonsters = useMemo(() => {
    return monsters?.filter((monster) => monster.size !== "large") || [];
  }, [monsters]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: ...</div>;

  return (
    <div className='grid grid-cols-4 gap-4'>
      {filteredMonsters.map((monster) => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterList;
