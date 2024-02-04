import { GameQuery } from "./interfaces";
import { create } from "zustand";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store, sortOrder } })),
}));

export default useGameQueryStore;
