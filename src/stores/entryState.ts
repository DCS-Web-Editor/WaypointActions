import { defineStore } from "pinia";
import type { TUnitType, TActionType } from "../types";

export const useEntryStore = defineStore({
  id: "entry",
  state: () => ({
    unit: "plane" as TUnitType,
    taskCatagory: "default",
    actionType: "options" as TActionType,
    waypointNumber: 0,
  }),
  actions: {
    setUnit(unit: TUnitType) {
      this.unit = unit;
    },
    getUnit(): TUnitType {
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
    },
    setActionType(actionType: TActionType) {
      this.actionType = actionType;
    },
    getActionType() {
      return this.actionType;
    },
  },
});
