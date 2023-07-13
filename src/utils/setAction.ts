import type { UnitType, ConstsOptions, ActionType } from "../types";
import { getFormation } from "./actions/formation";
import { findByIdKey } from "./utils";
import { useEntryStore } from "../stores/entryState";
import { enrouteTask, performTask } from "./actions";
import { useTasks } from "./hooks";

export const formOptions = (unitType: UnitType) => {
  if (unitType === "helicopter") {
    return getFormation(unitType);
  } else if (unitType === "plane") {
    return getFormation(unitType);
  } else {
    return [];
  }
};

export function setFormation(unitType: UnitType, value?: number) {
  const options = formOptions(unitType);
  if (value) {
    const parent = findByIdKey(options, value);
    return {
      formationIndex: parent.parent.value as number,
      name: 5,
      value,
      variantIndex: parent.parent.children.indexOf(parent.item),
    };
  } else {
    const parent = findByIdKey(options, options[0]?.children?.[0]?.value as number);
    return {
      formationIndex: parent.parent.value as number,
      name: 5,
      value: parent.item.value,
      variantIndex: parent.parent.children.indexOf(parent.item),
    };
  }
}

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
