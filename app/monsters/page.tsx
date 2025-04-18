"use client";
import MonsterList from "../components/monsters/monster-list";

const MonstersPage = () => {
  return (
    <div>
      <h1 className='font-semibold'>Monster Hunter Wilds Monsters</h1>
      <div>
        <MonsterList />
      </div>
    </div>
  );
};

export default MonstersPage;
