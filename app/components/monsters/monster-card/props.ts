interface WeaknessProps {
  element: string;
  status: string;
  effect: string;
  level: number;
  id: number;
}

export interface MonsterProps {
  id: number;
  name: string;
  species: string;
  size: string;
  description: string;
  weaknesses: WeaknessProps[];
}
