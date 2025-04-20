import MonsterCard from "../monster-card";
import { useGetMonsters } from "../../../hooks/useGetMonsters";
import { useMemo } from "react";
import { useMonsterStore } from "../../../store/monster-search-store";

const MonsterList = () => {
  const { data: monsters, isLoading, error } = useGetMonsters();
  const { searchTerm } = useMonsterStore();

  const filteredMonsters = useMemo(() => {
    return (
      monsters?.filter((monster) => {
        const matchesSearch =
          monster.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          monster.species.toLowerCase().includes(searchTerm.toLowerCase());
        return monster.size !== "large" && matchesSearch;
      }) || []
    );
  }, [monsters, searchTerm]);

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
