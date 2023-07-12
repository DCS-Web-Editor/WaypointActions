import type { ActionType } from "../types";

const getActionId = (actionType: ActionType) => {
  switch (actionType) {
    case "options":
      return "Option";
    case "commands":
      return "NoAction";
    case "enrouteTask":
      return "NoEnrouteTask";
    case "task":
    default:
      return "NoTask";
  }
};

const getActionParams = (actionType: ActionType) => {
  switch (actionType) {
    case "options":
      return {
        name: -1,
        value: "",
      };
    default:
      return {};
  }
};

export const defaultAction = (actionType: ActionType) => {
  return {
    auto: false,
    enabled: false,
    id: "WrappedAction",
    number: 1,
    params: {
      action: {
        id: getActionId(actionType),
        params: getActionParams(actionType),
      },
    },
  };
};
