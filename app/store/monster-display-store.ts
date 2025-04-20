import { create } from "zustand";

interface MonsterDisplayState {
  display: "card" | "table";
  setDisplay: (display: "card" | "table") => void;
}

export const useMonsterDisplayStore = create<MonsterDisplayState>((set) => ({
  display: "card",
  setDisplay: (display) => set({ display }),
}));
