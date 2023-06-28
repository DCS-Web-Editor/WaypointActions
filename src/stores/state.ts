import type { ITask, ITasks } from "../types";
import { defineStore } from "pinia";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as ITasks,
  }),
  actions: {
    setTasks(tasks: ITasks) {
      const taskArr: ITasks = [];
      for (const task of tasks) {
        if (task.number !== tasks.indexOf(task)) {
          task.number = tasks.indexOf(task);
        }
        taskArr.push(task);
      }
      this.tasks = taskArr;
    },
    getTasks(): ITasks {
      return this.tasks;
    },
    getOneTask(index: number): ITask {
      return this.tasks[index];
    },
    setOneTask(task: ITask, index: number) {
      this.tasks[index] = task;
    },
  },
});
