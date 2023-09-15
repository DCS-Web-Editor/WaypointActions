import FixedWingJSON from "./data/fixedWing.json";
import RotaryWingJSON from "./data/rotaryWing.json";
import commandsJSON from "./data/commands.json";
import enrouteJSON from "./data/enroute.json";
import autoJSON from "./data/auto.json";
import taskJSON from "./data/task.json";
import weaponsJSON from "./data/weapons.json";
import optionsJSON from "./data/options.json";
import targetTypesJSON from "./data/targetTypes.json";
import availableActionsJSON from "./data/availableActions.json";
import { type TreeSelectOption } from "naive-ui";
import type { TActionType, TConstsList, TUnitType, TUpperLevelTasks } from "../types";
import type { TEnrouteTask, TOptionName, TPerformCommand, TPerformTask } from "./consts";

type TAutoActions<T = any> = Record<
  string,
  Record<
    TUpperLevelTasks,
    Array<{
      actionType: TActionType;
      data: T;
    }>
  >
>;

const commands = commandsJSON as Record<string, TConstsList<TPerformCommand>>;
const enrouteTask = enrouteJSON as Record<string, TConstsList<TEnrouteTask>>;
const performTask = taskJSON as Record<string, TConstsList<TPerformTask>>;
const options = optionsJSON as Record<number, TConstsList<TOptionName>>;
const autoActions = autoJSON as TAutoActions;
const targetTypes = targetTypesJSON as Record<
  "air" | "airDefense" | "airplanes" | "all" | "ground" | "missles" | "naval",
  TreeSelectOption
>;
const availableWeapons = weaponsJSON; // TODO: Add types
const availableActions = availableActionsJSON as Record<
  TUnitType,
  Record<
    TActionType,
    Record<TUpperLevelTasks, Array<TPerformTask | TEnrouteTask | TPerformCommand | TOptionName>>
  >
>;

export const getFormation = (unitType: Exclude<TUnitType, "ship" | "vehicle">) => {
  if (unitType === "helicopter") {
    return RotaryWingJSON as TreeSelectOption[];
  }
  return FixedWingJSON as TreeSelectOption[];
};

const targetTypesByTask = {
  all: {
    SEAD: targetTypes.airDefense,
    "Antiship Strike": targetTypes.naval,
    CAS: targetTypes.ground,
    AFAC: targetTypes.ground,
    CAP: { ...targetTypes.air, ...targetTypes.missles },
    Escort: targetTypes.air,
    "Fighter Sweep": targetTypes.airplanes,
    All: targetTypes.all,
  },
  helicopter: {
    Escort: targetTypes.ground,
  },
};

export const getTargetTypes = (unitType: TUnitType, task: TUpperLevelTasks) => {
  if (Object.keys(targetTypesByTask.all).includes(task)) {
    return targetTypesByTask.all[task as keyof typeof targetTypesByTask.all];
  } else if (unitType === "helicopter" && task === "Escort") {
    return targetTypesByTask.helicopter[task as keyof typeof targetTypesByTask.helicopter];
  } else return {};
};

export const getAvailableActions = (
  unitType: TUnitType,
  actionType: TActionType,
  task: TUpperLevelTasks,
) => {
  const actions = availableActions[unitType][actionType][task];

  return actions.map((action) => {
    if (actionType === "task") {
      return performTask[action];
    } else if (actionType === "enrouteTask") {
      return enrouteTask[action];
    } else if (actionType === "commands") {
      return commands[action];
    }
    return options[action as TOptionName];
  });
};

export { commands, enrouteTask, performTask, options, autoActions, availableWeapons, targetTypes };
