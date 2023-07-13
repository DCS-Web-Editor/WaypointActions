import { defineStore } from "pinia";
import type { UnitType } from "../types";

export const useEntryStore = defineStore({
  id: "entry",
  state: () => ({
    unit: "plane" as UnitType,
    taskCatagory: "default",
    waypointNumber: 0,
  }),
  actions: {
    setUnit(unit: UnitType) {
      this.unit = unit;
    },
    getUnit(): UnitType {
      return this.unit;
    },
    setTaskCatagory(taskCatagory: string) {
      this.taskCatagory = taskCatagory;
    },
    getTaskCatagory() {
      return this.taskCatagory;
    },
    setWaypointNumber(waypointNumber: number) {
      this.waypointNumber = waypointNumber;
    },
    getWaypointNumber() {
      return this.waypointNumber;
    }
  },
});
