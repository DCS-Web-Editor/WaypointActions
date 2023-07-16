import type { PerformCommand, TPerformCommand, EnrouteTask, Task } from "./utils/consts";

export type TFormation = {
  name: 5;
  formationIndex: number;
  value: number;
  variantIndex: number;
};

export type TTargetTypes = {
  noTargetTypes: string[];
  targetTypes: string[];
  value: string;
};

export type TBaseOption = {
  value: boolean;
};

export interface TTask {
  auto: boolean;
  enabled: boolean;
  name?: string;
  key?: string;
  id: string;
  number: number;
  params: any;
}

export type TTasks = TTask[];

export interface TOptionParams<T extends TFormation | TTargetTypes | TBaseOption> extends TTask {
  params: {
    action: {
      id: "Option";
      params: T & { name: number };
    };
  };
}

export interface TPerformCommandParams<T extends object> extends TTask {
  params: {
    action: {
      id: TPerformCommand;
      params: T;
    };
  };
}

export interface TPerformTaskParams<T extends object> extends TTask {
  params: T;
}

export type TActionList = {
  option: string;
  value: string;
  attr?: string[];
};

export type TConstsOptions =
  | keyof typeof PerformCommand
  | keyof typeof EnrouteTask
  | keyof typeof Task;

export type TConstsList<T> = {
  label: string;
  value: T;
  options?: any[];
  params?: any;
  data?: number;
  [key: string]: unknown;
};

export type TUnitType = "plane" | "helicopter" | "vehicle" | "ship";
export type TActionType = "task" | "enrouteTask" | "commands" | "options";
