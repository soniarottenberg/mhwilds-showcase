"use client";
import MonsterList from "../components/monsters/monster-list";
import MonsterSearch from "../components/monsters/monster-search";
import { useMonsterStore } from "../store/monster-store";

const MonstersPage = () => {
  const { searchTerm } = useMonsterStore();

  return (
    <div>
      <h1 className='font-semibold'>Monster Hunter Wilds Monsters</h1>
      {/* TODO: display either card or a table */}
      <MonsterSearch />
      <MonsterList />
    </div>
  );
};

export default MonstersPage;
