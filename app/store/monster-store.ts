import { create } from "zustand";

interface MonsterState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useMonsterStore = create<MonsterState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
