import type { TTask } from "../types";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as TTask[],
  }),
  actions: {
    setTasks(tasks: TTask[]) {
      const taskArr: TTask[] = [];
      for (const task of tasks) {
        if (task.number !== tasks.indexOf(task)) {
          task.number = tasks.indexOf(task);
        }
        taskArr.push(task);
      }
      this.tasks = taskArr;
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
