import type {
  TUnitType,
  TActionType,
  TUpperLevelTasks,
  TTask,
  TOptionParams,
  TPerformCommandParams,
  TControlledTask,
  TCondition,
  TStopCondition,
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

export const setFormation = (unitType: TUnitType, value?: number) => {
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
};

export const createWrappedAction = (
  number: number,
  params: any,
  id: string,
  auto?: boolean,
  enabled?: boolean,
): TTask<TOptionParams<typeof params>> | TTask<typeof params> => {
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
};

export const createTask = (
  number: number,
  params: object,
  id: string,
  key?: string,
  auto?: boolean,
  enabled?: boolean,
): TTask<typeof params> => {
  return {
    auto: auto ?? false,
    enabled: enabled ?? true,
    id,
    key,
    number,
    params,
  };
};

export const createControlledTask = (
  task: TTask,
  condition?: Partial<TCondition>,
  stopCondition?: Partial<TStopCondition>,
): TTask => {
  if (task.key) {
    return {
      ...task,
      id: "ControlledTask",
      params: {
        condition: condition && Object.keys(condition).length === 0 ? undefined : condition,
        task: {
          id: task.id,
          key: task.key,
          params: task.params,
        },
        stopCondition:
          stopCondition && Object.keys(stopCondition).length === 0 ? undefined : stopCondition,
      },
    };
  } else
    return {
      ...task,
      id: "ControlledTask",
      params: {
        task: {
          id: task.id,
          params: task.params,
        },
      },
    };
};

export const ControlledToUncontrolledTask = (task: TTask<TControlledTask>): TTask => {
  return {
    ...task,
    id: task.params.task.id,
    key: task.params.task.key,
    params: task.params.task.params,
  };
};

export const defaultAction = (
  actionType: TActionType,
): TTask<any> | TTask<TOptionParams<any>> | TTask<TPerformCommandParams<any>> => {
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
};

const getAutoActions = (
  params: {
    actionType: TActionType;
    data: any;
  },
  number: number,
  task: TUpperLevelTasks,
): TTask<any> | TTask<TOptionParams<any>> | TTask<TPerformCommandParams<any>> => {
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
};

export const createAutoActions = (unitType: TUnitType, task: TUpperLevelTasks) => {
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
};
