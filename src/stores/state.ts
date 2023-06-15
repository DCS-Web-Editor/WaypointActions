import type { Tasks } from "@types";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: {
      tasks: [] as Tasks["tasks"],
    },
  }),
  actions: {
    setTasks(tasks: Tasks) {
      this.tasks = tasks;
    },
    getTasks(): Tasks {
      return this.tasks;
    },
  },
});
