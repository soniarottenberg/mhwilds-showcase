"use client";
import MonsterList from "../components/monsters/monster-list";
import MonsterSearch from "../components/monsters/monster-search";
import MonsterDisplaySwitch from "../components/monsters/monster-display-switch";
import { useMonsterDisplayStore } from "../store/monster-display-store";
import MonsterTable from "../components/monsters/monster-table";

const MonstersPage = () => {
  const { display } = useMonsterDisplayStore();
  return (
    <div className='flex flex-col gap-2'>
      <h1 className='font-semibold'>Monster Hunter Wilds Monsters</h1>
      <MonsterDisplaySwitch />
      <MonsterSearch />
      {display === "card" ? <MonsterList /> : <MonsterTable />}
    </div>
  );
};

export default MonstersPage;
