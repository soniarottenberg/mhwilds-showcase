import { useMemo } from "react";
import { Monster } from "./props";

const MonsterCard = ({ monster }: { monster: Monster }) => {
  const weaknesses = useMemo(() => {
    return monster?.weaknesses.map((weakness) => {
      return {
        element: weakness.element,
        status: weakness.status,
        effect: weakness.effect,
        level: weakness.level,
        id: weakness.id,
      };
    });
  }, [monster]);

  return (
    <div className='border-2 border-gray-300 rounded-md p-4'>
      <h2 className='font-semibold'>{monster?.name}</h2>
      {weaknesses.map((weakness) => (
        <div key={weakness.id} className='flex'>
          <p>{weakness.element ?? weakness.status ?? weakness.effect}</p>
          <p>{weakness.level}</p>
        </div>
      ))}
    </div>
  );
};

export default MonsterCard;
