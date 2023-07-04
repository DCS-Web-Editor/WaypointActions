import type { PerformCommand, EnrouteTask, Task } from "./utils/enums";
export interface ITask<T = any> {
  auto: boolean;
  enabled: boolean;
  name?: string;
  id: string;
  number: number;
  params: T;
}

export type ITasks<T = any> = Array<ITask<T>>;

type Option<T extends string | boolean | number> = ITask<{
  action: {
    id: "Option";
    params: {
      name: number;
      value: T;
    };
  };
}>;

/**
 *@description Covers performCommand, performEnrouteITask, and performITask
 */

export type EnumOptions =
  | keyof typeof PerformCommand
  | keyof typeof EnrouteTask
  | keyof typeof Task;

type UniversalAction<T extends object> = ITask<{
  action: {
    id: EnumOptions;
    params: T;
  };
}>;

export type Action<T> = T extends object
  ? UniversalAction<T>
  : T extends string | number | boolean
  ? Option<string | number | boolean>
  : never;

export interface ActionList {
  option: string;
  value: string;
  attr?: string[];
}

export interface EnumList<T> {
  label: string;
  value: T;
  options?: any[];
  params?: any;
  data?: number;
  [key: string]: unknown;
}

export type UnitType = "plane" | "helicopter" | "vehicle" | "ship";
export type ActionType = "task" | "enrouteTask" | "commands" | "options";
