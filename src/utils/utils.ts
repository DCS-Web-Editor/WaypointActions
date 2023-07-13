import { useEntryStore } from "../stores/entryState";
import type { ConstsOptions, ActionType } from "../types";
import { enrouteTask, performTask } from "./actions";
import { useTasks } from "./hooks";

const { tasks } = useTasks();
const entry = useEntryStore();

export function createOption(
  name: number,
  value: number | string | boolean,
  index?: number,
  auto?: boolean,
  enabled?: boolean,
) {
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

export function createCommand(
  name: ConstsOptions,
  value: object,
  index?: number,
  auto?: boolean,
  enabled?: boolean,
) {
  let actionNumber = tasks.value.length + 1;

  if (index != null && index < tasks.value.length) {
    actionNumber = index;
  }

  return {
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
}

export function createTask(
  value: object,
  id: string,
  index?: number,
  auto?: boolean,
  enabled?: boolean,
) {
  let actionNumber = tasks.value.length + 1;

  if (index != null && index < tasks.value.length) {
    actionNumber = index;
  }

  return {
    auto: auto ?? false,
    enabled: enabled ?? false,
    id,
    number: actionNumber,
    params: {
      action: {
        params: value,
      },
    },
  } as const;
}

export function defaultAction(actionType: ActionType) {
  if (actionType === "options") {
    return createOption(-1, "");
  } else if (actionType === "task") {
    if (entry.getWaypointNumber() === 0) {
      return createTask(performTask.noTask.params, "NoTask", undefined, true);
    } else {
      return createTask(performTask.noTask.params, "NoTask");
    }
  } else if (actionType === "enrouteTask") {
    if (entry.getWaypointNumber() === 0) {
      return createTask(enrouteTask.noTask.params, "NoEnrouteTask", undefined, true);
    } else {
      return createTask(enrouteTask.noTask.params, "NoEnrouteTask");
    }
  } else if (actionType === "commands") {
    return createCommand("noAction", {});
  } else {
    return createOption(-1, "");
  }
}

export function findById(data: any[], id: number): any {
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
}

export function findByIdKey(data: any[], id: number): any {
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
}
