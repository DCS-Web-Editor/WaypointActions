import { defineStore } from "pinia";
import type { UnitType } from "../types";

export const useEntryStore = defineStore({
  id: "entry",
  state: () => ({
    unit: "plane" as UnitType,
  }),
  actions: {
    setUnit(unit: UnitType) {
      this.unit = unit;
    },
    getUnit(): UnitType {
      return this.unit;
    },
  },
});
