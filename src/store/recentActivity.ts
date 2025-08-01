// src/store/useActivityStore.ts
import { create } from "zustand";

interface ActivityStore {
  history: string[];
  addActivity: (path: string) => void;
  clearHistory: () => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  history: [],
  addActivity: (path) =>
    set((state) => ({
      history:
        state.history[state.history.length - 1] === path
          ? state.history
          : [...state.history.slice(-3), path],
    })),
  clearHistory: () => set({ history: [] }),
}));
