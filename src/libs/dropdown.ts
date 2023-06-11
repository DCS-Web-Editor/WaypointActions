import type { DropdownParams, TaskList } from "../types/Tasks";
import { dropdownDefs } from "./task_defs";

interface Option {
  label: string;
  value: number;
}

export const getDropdown = (task: DropdownParams): TaskList => {
  const selectedOption = dropdownDefs[task.action.params.name];
  const options = selectedOption.option as Option[];
  const option = selectedOption.label as string;
  const value = options[task.action.params.value - 1].label;
  return { option, value };
};
