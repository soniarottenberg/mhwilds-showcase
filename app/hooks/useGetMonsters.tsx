import { useQuery } from "@tanstack/react-query";
import { Monster } from "../components/monsters/monster-card/props";

async function getMonsters(): Promise<Monster[]> {
  const res = await fetch("https://wilds.mhdb.io/en/monsters");
  if (!res.ok) {
    throw new Error("Failed to fetch monsters");
  }
  return res.json();
}

export function useGetMonsters() {
  return useQuery({
    queryKey: ["monsters"],
    queryFn: getMonsters,
  });
}
