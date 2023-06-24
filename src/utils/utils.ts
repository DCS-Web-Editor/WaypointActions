import type { Action, EnumOptions } from "../types";
import { useTasks } from "./hooks";

const { tasks } = useTasks();

export function createOption(
  index: number,
  name: number,
  value: number | string | boolean,
  auto?: boolean,
  enabled?: boolean,
): Action<typeof value> {
  let actionNumber = tasks.value.length + 1;

  if (index != null && index < tasks.value.length) {
    actionNumber = index;
  }

  const option = {
    auto: auto ?? false,
    enabled: enabled ?? false,
    id: "WrappedAction",
    number: actionNumber,
    params: {
      action: {
        id: "Option",
        params: {
          name,
          value,
        },
      },
    },
  } as const;
  return option;
}

export function createTask(
  name: EnumOptions,
  value: object,
  index?: number,
  auto?: boolean,
  enabled?: boolean,
): Action<object> {
  let actionNumber = tasks.value.length + 1;

  if (index != null && index < tasks.value.length) {
    actionNumber = index;
  }

  const option = {
    auto: auto ?? false,
    enabled: enabled ?? false,
    id: "WrappedAction",
    number: actionNumber,
    params: {
      action: {
        id: name,
        params: value,
      },
    },
  } as const;
  return option;
}
