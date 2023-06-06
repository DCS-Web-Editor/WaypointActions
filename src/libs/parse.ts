import type { OptionParams, Tasks } from "./Tasks";
import { OptionDefs } from "./task_defs";

interface ActionList {
  label: string;
  value: string;
}

// TODO: Parse non dropdown options
export const parseTask = (task: Tasks): ActionList[] => {
  const option: ActionList[] = [];
  for (const action of task.params.tasks) {
    const optionParams = action.params as OptionParams;
    const optionIndex = OptionDefs[optionParams.action.params.name];
    if (optionIndex.options !== null) {
      if (typeof optionParams.action.params.value === "number") {
        option.push({
          label: optionIndex.name,
          value: optionIndex.options[optionParams.action.params.value] as string
        });
      }
    }
  }
  return option;
};
