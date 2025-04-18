interface Weakness {
  element: string;
  status: string;
  effect: string;
  level: number;
  id: number;
}

export interface Monster {
  id: number;
  name: string;
  species: string;
  size: string;
  description: string;
  weaknesses: Weakness[]
}