import type { Tasks } from "../types";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as Tasks,
  }),
  actions: {
    setTasks(tasks: Tasks) {
      const taskArr: Tasks = [];
      for (const task of tasks) {
        if (task.number !== tasks.indexOf(task)) {
          task.number = tasks.indexOf(task);
        }
        taskArr.push(task);
      }
      this.tasks = taskArr;
    },
    getTasks(): Tasks {
      return this.tasks;
    },
  },
});
