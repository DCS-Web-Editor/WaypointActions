import type {
  TUnitType,
  TActionType,
  TUpperLevelTasks,
  TTask,
  TPerformTaskParams,
  TOptionParams,
  TPerformCommandParams,
} from "../types";
import { findByIdKey } from "./utils";
import { enrouteTask, performTask, autoActions, getFormation } from "./actions";

export const formOptions = (unitType: TUnitType) => {
  if (unitType === "helicopter") {
    return getFormation(unitType);
  } else if (unitType === "plane") {
    return getFormation(unitType);
  } else {
    return [];
  }
};

export function setFormation(unitType: TUnitType, value?: number) {
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

export function createWrappedAction(
  number: number,
  params: any,
  id: string,
  auto?: boolean,
  enabled?: boolean,
): TOptionParams<typeof params> | TPerformTaskParams<typeof params> {
  return {
    auto: auto ?? false,
    enabled: enabled ?? true,
    id: "WrappedAction",
    number,
    params: {
      action: {
        id,
        params,
      },
    },
  };
}

export function createTask(
  number: number,
  params: object,
  id: string,
  key?: string,
  auto?: boolean,
  enabled?: boolean,
): TPerformTaskParams<typeof params> {
  return {
    auto: auto ?? false,
    enabled: enabled ?? true,
    id,
    key,
    number,
    params,
  };
}

export function defaultAction(
  actionType: TActionType,
): TPerformTaskParams<any> | TOptionParams<any> | TPerformCommandParams<any> {
  if (actionType === "options") {
    return createWrappedAction(
      1,
      {
        name: -1,
        value: "",
      },
      "Option",
    );
  } else if (actionType === "task") {
    return createTask(1, performTask.NoTask.params, "NoTask");
  } else if (actionType === "enrouteTask") {
    return createTask(1, enrouteTask.NoEnrouteTask.params, "NoEnrouteTask");
  } else if (actionType === "commands") {
    return createWrappedAction(1, {}, "NoAction");
  } else {
    return createWrappedAction(
      1,
      {
        name: -1,
        value: "",
      },
      "Option",
    );
  }
}

function getAutoActions(
  params: {
    actionType: TActionType;
    data: any;
  },
  number: number,
  task: TUpperLevelTasks,
): TPerformTaskParams<any> | TOptionParams<any> | TPerformCommandParams<any> {
  switch (params.actionType) {
    case "enrouteTask":
      if (["AWACS", "Refuleing", "CAS", "CAP", "Fighter Sweep", "SEAD", "Anti-ship"].includes(task))
        return createTask(number, params.data.params, "EngageTargets", params.data.value, true);
      else return createTask(number, params.data.params, params.data.value, undefined, true);
    case "commands":
      return createWrappedAction(number, params.data.params, params.data.value, true);
    case "options":
      return createWrappedAction(number, params.data, "Option", true);
    case "task":
      return createTask(number, {}, "NoTask", undefined, true);
  }
}

export function createAutoActions(unitType: TUnitType, task: TUpperLevelTasks) {
  const actions: TTask[] = [];
  let number = 1;
  autoActions.all[task].forEach((action) => {
    actions.push(getAutoActions(action, number, task));
    number++;
  });
  autoActions[unitType][task].forEach((action) => {
    actions.push(getAutoActions(action, number, task));
    number++;
  });
  return actions;
}
