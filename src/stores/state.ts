import type { TTask } from "../types";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as TTask[],
  }),
  actions: {
    setTasks(tasks: TTask[]) {
      this.tasks = tasks;
    },
    getTasks(): TTask[] {
      return this.tasks;
    },
    getOneTask(index: number): TTask {
      return this.tasks[index];
    },
    setOneTask(task: TTask, index: number) {
      this.tasks[index] = task;
    },
  },
});
