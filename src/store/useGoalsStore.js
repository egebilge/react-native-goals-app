import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageTypes } from "../types/StorageTypes";

const useGoalsStore = create((set) => ({
  goal: "",
  setGoal: (goal) => set({ goal }),
  goals: [],
  setGoals: (goals) => set({ goals }),
  addGoal: () =>
    set((state) => {
      const newGoals = [...state.goals, state.goal];
      AsyncStorage.setItem(StorageTypes.GOALS, JSON.stringify(newGoals)).catch(
        console.error,
      );
      return { goals: newGoals, goal: "" };
    }),
  removeGoal: (index) =>
    set((state) => {
      const newGoals = state.goals.filter((_, i) => i !== index);
      AsyncStorage.setItem(StorageTypes.GOALS, JSON.stringify(newGoals)).catch(
        console.error,
      );
      return { goals: newGoals };
    }),
  loadGoals: () => {
    AsyncStorage.getItem(StorageTypes.GOALS)
      .then((value) => {
        if (value !== null) {
          set({ goals: JSON.parse(value) });
        }
      })
      .catch(console.error);
  },
}));

export { useGoalsStore };
