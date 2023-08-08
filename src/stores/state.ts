import type { TTask, TStateConditions, TCondition, TStopCondition } from "../types";
import { defineStore } from "pinia";
import { ControlledToUncontrolledTask, createControlledTask } from "../utils/setAction";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as TTask[],
    condition: [] as Array<TStateConditions<TCondition>>,
    stopCondition: [] as Array<TStateConditions<TStopCondition>>,
  }),
  actions: {
    setCondition(task: TTask) {
      const condition = this.condition.find((condition) => condition.number === task.number);
      const stopCondition = this.stopCondition.find(
        (condition) => condition.number === task.number,
      );
      if (task.number === condition?.number) {
        return createControlledTask(task, condition.condition);
      } else if (task.number === stopCondition?.number) {
        return createControlledTask(task, undefined, stopCondition.condition);
      }
      return task;
    },
    getCondition(task: TTask) {
      if (task.params.condition || task.params.stopCondition) {
        this.condition.push({
          number: task.number,
          condition: task.params.condition,
        });
        this.stopCondition.push({
          number: task.number,
          condition: task.params.stopCondition,
        });
        return ControlledToUncontrolledTask(task);
      } else return task;
    },
    setTasks(tasks: TTask[]) {
      this.tasks = tasks.map((task) => {
        return this.setCondition(task);
      });
    },
    getTasks(): TTask[] {
      return this.tasks.map((task) => {
        return this.getCondition(task);
      });
    },
    getOneTask(index: number): TTask {
      return this.getCondition(this.tasks[index]);
    },
    setOneTask(task: TTask, index: number) {
      this.tasks[index] = this.setCondition(task);
    },
  },
});
