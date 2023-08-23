import type { SelectOption } from "naive-ui";
import type { TGroupTypes, TUnitType, TUpperLevelTasks } from "../types";
import { availableWeapons } from "./actions";

export const findById = (data: any[], id: number): any => {
  for (const item of data) {
    if (Array.isArray(item)) {
      for (const arr of item) {
        const foundItem = findById(arr.value, id);
        if (foundItem != null) {
          return { item: foundItem, parent: arr };
        }
      }
    } else if (item.value === id) {
      return item;
    }
  }
  return null;
};

export const findByIdKey = (data: any[], id: number): any => {
  for (const item of data) {
    if (item.children) {
      const foundItem = findByIdKey(item.children, id);
      if (foundItem != null) {
        return { item: foundItem, parent: item };
      }
    } else if (item.value === id) {
      return item;
    }
  }
  return null;
};

export const getTacanFreq = (A2A: boolean, mode: "X" | "Y", channel: number) => {
  let freq = 0;

  if (!A2A && mode === "X") {
    if (channel < 64) {
      freq = 962 + channel - 1;
    } else {
      freq = 1151 + channel - 64;
    }
  } else {
    if (channel < 64) {
      freq = 1088 + channel - 1;
    } else {
      freq = 1025 + channel - 64;
    }
  }

  return freq * 1000000;
};

export const getWeaponOptions = (
  unitType: TUnitType<true>,
  targetUnit: TGroupTypes,
  task: TUpperLevelTasks,
): SelectOption[] => {
  const base = availableWeapons[unitType];
  if (base[task as keyof typeof base]) {
    return base[task as keyof typeof base];
  } else {
    const baseTarget = base[targetUnit as keyof typeof base];
    if (baseTarget[task as keyof typeof baseTarget]) {
      return baseTarget[task as keyof typeof baseTarget];
    } else return baseTarget;
  }
};
