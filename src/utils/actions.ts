import FixedWingJSON from "./data/fixedWing.json";
import RotaryWingJSON from "./data/rotaryWing.json";
import commandsJSON from "./data/commands.json";
import enrouteJSON from "./data/enroute.json";
import autoJSON from "./data/auto.json";
import taskJSON from "./data/task.json";
import weaponsJSON from "./data/weapons.json";
import optionsJSON from "./data/options.json";
import { type TreeSelectOption, type SelectOption } from "naive-ui";
import type { TActionType, TConstsList, TGroupTypes, TUnitType, TUpperLevelTasks } from "../types";
import type { TEnrouteTask, TOptionName, TPerformCommand, TPerformTask } from "./consts";

type TAutoActions = Record<
  string,
  Record<
    TUpperLevelTasks,
    Array<{
      actionType: TActionType;
      data: any;
    }>
  >
>;

export const getFormation = (unitType: Exclude<TUnitType, "ship" | "vehicle">) => {
  if (unitType === "helicopter") {
    return RotaryWingJSON as TreeSelectOption[];
  }
  return FixedWingJSON as TreeSelectOption[];
};

const commands = commandsJSON as Record<string, TConstsList<TPerformCommand>>;
const enrouteTask = enrouteJSON as Record<string, TConstsList<TEnrouteTask>>;
const performTask = taskJSON as Record<string, TConstsList<TPerformTask>>;
const options = optionsJSON as Record<number, TConstsList<TOptionName>>;
const autoActions = autoJSON as TAutoActions;
const availableWeapons = weaponsJSON as Record<
  TGroupTypes,
  Record<TUpperLevelTasks, SelectOption[]>
>;

export { commands, enrouteTask, autoActions, performTask, availableWeapons, options };
