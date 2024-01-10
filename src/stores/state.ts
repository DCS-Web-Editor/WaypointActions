import type { TTask, TStateConditions, TCondition, TStopCondition } from "../types";
import { defineStore } from "pinia";
import { ControlledToUncontrolledTask, createControlledTask } from "../utils/setAction";
import { toRaw } from "vue";

export const useTasksStore = defineStore({
  id: "tasks",
  state: () => ({
    tasks: [] as TTask[],
    condition: [] as Array<TStateConditions<TCondition>>,
    stopCondition: [] as Array<TStateConditions<TStopCondition>>,
  }),
  actions: {
    setControlledTask(task: TTask) {
      const condition = this.getCondition(task.number);
      const stopCondition = this.getStopCondition(task.number);
      if (condition) {
        return createControlledTask(task, condition.condition);
      } else if (stopCondition) {
        return createControlledTask(task, undefined, stopCondition.condition);
      } else return task;
    },
    getControlledTask(task: TTask) {
      if (task.params.condition || task.params.stopCondition) {
        this.condition.push({
          number: task.number,
          condition:
            Object.keys(task.params.condition).length === 0 ? undefined : task.params.condition,
        });
        this.stopCondition.push({
          number: task.number,
          condition:
            Object.keys(task.params.stopCondition).length === 0
              ? undefined
              : task.params.stopCondition,
        });
        return ControlledToUncontrolledTask(toRaw(task));
      } else return task;
    },
    getCondition(number: number) {
      return this.condition.find((condition) => condition.number === number) ?? undefined;
    },
    getStopCondition(number: number) {
      return this.stopCondition.find((condition) => condition.number === number) ?? undefined;
    },
    setCondition(number: number, condition: Partial<TCondition>) {
      const index = this.condition.findIndex((condition) => condition.number === number);
      if (index === -1) {
        this.condition.push({
          number,
          condition,
        });
      } else {
        this.condition[index].condition = condition;
      }
    },
    setStopCondition(number: number, condition: Partial<TStopCondition>) {
      const index = this.stopCondition.findIndex((condition) => condition.number === number);
      if (index === -1) {
        this.stopCondition.push({
          number,
          condition,
        });
      } else {
        this.stopCondition[index].condition = condition;
      }
    },
    setTasks(tasks: TTask[]) {
      this.tasks = tasks.map((task) => {
        return this.setControlledTask(task);
      });
    },
    getTasks(): TTask[] {
      return this.tasks.map((task) => {
        return this.getControlledTask(task);
      });
    },
    getOneTask(index: number): TTask {
      return this.getControlledTask(this.tasks[index]);
    },
    setOneTask(task: TTask, index: number) {
      this.tasks[index] = this.setControlledTask(task);
    },
    moveTask(oldIndex: number, newIndex: number) {
      this.tasks.splice(newIndex, 0, this.tasks.splice(oldIndex, 1)[0]);
    },
    removeOneTask(index: number) {
      this.tasks.splice(index, 1);
      if (this.condition[index]) this.condition.splice(index, 1);
      if (this.stopCondition[index]) this.stopCondition.splice(index, 1);
    },
    insertOneTask(task: TTask, index: number) {
      this.tasks.splice(index, 0, this.setControlledTask(task));
      if (this.condition[index])
        this.condition.splice(index, 0, {
          number: index,
          condition: this.condition[index].condition,
        });
      if (this.stopCondition[index])
        this.stopCondition.splice(index, 0, {
          number: index,
          condition: this.stopCondition[index].condition,
        });
    },
  },
});
