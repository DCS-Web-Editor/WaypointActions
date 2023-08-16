import { defineStore } from "pinia";
import type { TUnitType, TActionType, TUpperLevelTasks, Files } from "../types";
import { type SelectOption } from "naive-ui";

export const useEntryStore = defineStore({
  id: "entry",
  state: () => ({
    unit: "plane" as TUnitType,
    taskCatagory: "Default" as TUpperLevelTasks,
    actionType: "options" as TActionType,
    waypointNumber: 0,
    maxDictId: 6,
    files: [
      {
        id: "",
        data: null,
        name: "",
        status: "finished",
      } satisfies Files,
    ],
    groupIds: [] as SelectOption[],
    points: 0,
    currentWaypoint: 0,
  }),
  actions: {
    setUnit(unit: TUnitType) {
      this.unit = unit;
    },
    getUnit(): TUnitType {
      return this.unit;
    },
    setTaskCatagory(taskCatagory: TUpperLevelTasks) {
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
    setMaxDictId(maxDictId: number) {
      this.maxDictId = maxDictId;
    },
    getMaxDictId() {
      return this.maxDictId;
    },
    setFiles(files: Files[]) {
      this.files = files;
    },
    getFiles() {
      return this.files;
    },
    setOneFile(file: Files) {
      this.files.push(file);
    },
    getOneFile(id: string) {
      return this.files.find((file) => file.id === id);
    },
    deleteOneFile(id: string) {
      this.files = this.files.filter((file) => file.id !== id);
    },
    setGroupIds(groupIds: SelectOption[]) {
      this.groupIds = groupIds;
    },
    getGroupIds() {
      return this.groupIds;
    },
    setPoints(points: number) {
      this.points = points;
    },
    getPoints() {
      return this.points;
    },
  },
});
