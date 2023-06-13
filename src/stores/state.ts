import type { Tasks } from "../types/Tasks";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as Tasks[],
  }),
  actions: {
    setTasks(tasks: Tasks[]) {
      this.tasks = tasks;
    },
    getTasks() {
      return this.tasks;
    }
  },
});
