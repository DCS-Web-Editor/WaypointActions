import type { CheckboxParams, TaskList } from "../types/Tasks";
import { checkboxDefs } from "./task_defs";

export const getCheckbox = (task: CheckboxParams): TaskList => {
  const selectedOption = checkboxDefs[task.action.params.name];
  const option = selectedOption.label;
  const enabled = selectedOption.enabled;
  const value = enabled ? "Enabled" : "Disabled";
  return { option, value };
};
