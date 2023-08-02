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

export type TTask<T = any> = {
  auto: boolean;
  enabled: boolean;
  name?: string;
  key?: string;
  id: string;
  number: number;
  params: T;
};

export type TOptionParams<T extends TFormation | TTargetTypes | TBaseOption> = {
  action: {
    id: "Option";
    params: T & { name: number };
  };
};

export type TPerformCommandParams<T extends object> = {
  action: {
    id: TPerformCommand;
    params: T;
  };
};

export type TActionList = {
  option: string;
  value: string;
  actionType: TActionType;
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
export type TGroupTypes =
  | "nothing"
  | "unknown"
  | "static"
  | "point"
  | "runway"
  | "plane"
  | "helicopter"
  | "vehicle"
  | "ship";
export type TActionType = "task" | "enrouteTask" | "commands" | "options";
export type TUpperLevelTasks =
  | "AFAC"
  | "Antiship Strike"
  | "CAS"
  | "Default"
  | "Escort"
  | "Ground Attack"
  | "Nothing"
  | "Reconnaissance"
  | "SEAD"
  | "Transport"
  | "AWACS"
  | "Airborne"
  | "CAP"
  | "Fighter Sweep"
  | "GAI"
  | "Intercept"
  | "Pinpoint Strike"
  | "Refueling"
  | "Runway Attack";
