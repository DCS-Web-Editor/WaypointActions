import type { TUnitType } from "../types";
import { FixedWing, RotaryWing } from "./actions/formation";
export { commands } from "./actions/commands";
export { enrouteTask } from "./actions/enroute";
export { performTask } from "./actions/task";
export { options } from "./actions/options";
export { autoActions } from "./actions/auto";

export const getFormation = (unitType: Exclude<TUnitType, "ship" | "vehicle">) => {
  if (unitType === "helicopter") {
    return RotaryWing;
  }
  return FixedWing;
};
