import type { TUnitType, TActionType } from "../types";
import { getFormation } from "./actions/formation";
import { findByIdKey } from "./utils";
import { enrouteTask, performTask } from "./actions";

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
  auto?: boolean,
  enabled?: boolean,
) {
  return {
    auto: auto ?? false,
    enabled: enabled ?? true,
    id: "WrappedAction",
    number,
    params,
  };
}

export function createTask(
  number: number,
  params: object,
  id: string,
  key?: string,
  auto?: boolean,
  enabled?: boolean,
) {
  return {
    auto: auto ?? false,
    enabled: enabled ?? true,
    id,
    key,
    number,
    params,
  };
}

export function defaultAction(actionType: TActionType) {
  if (actionType === "options") {
    return createWrappedAction(1, {
      action: {
        id: "Option",
        params: {
          name: -1,
          value: "",
        },
      },
    });
  } else if (actionType === "task") {
    return createTask(1, performTask.NoTask.params, "NoTask");
  } else if (actionType === "enrouteTask") {
    return createTask(1, enrouteTask.NoEnrouteTask.params, "NoEnrouteTask");
  } else if (actionType === "commands") {
    return createWrappedAction(1, {
      action: {
        id: "NoAction",
        params: {},
      },
    });
  } else {
    return createWrappedAction(1, {
      action: {
        id: "Option",
        params: {
          name: -1,
          value: "",
        },
      },
    });
  }
}
