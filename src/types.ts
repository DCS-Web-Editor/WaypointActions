interface Task<T> {
  auto: boolean;
  enabled: boolean;
  id: string;
  number: number;
  params: T;
}

export type Tasks = Array<Task<any>>;

type Option<T extends string | boolean | number> = Task<{
  action: {
    id: "Option";
    params: {
      name: number;
      value: T;
    };
  };
}>;

/**
 *@description Covers performCommand, performEnrouteTask, and performTask
 */
type UniversalAction<T extends object> = Task<{
  action: {
    id: string;
    params: T;
  };
}>;

export type Action<T> = T extends UniversalAction<any>
  ? UniversalAction<object>
  : T extends Option<any>
  ? Option<string | number | boolean>
  : never;

export interface ActionList {
  option: string;
  value: string;
}

export interface EnumList<T> {
  label: string;
  value: T;
  options?: any[];
  [key: string]: unknown;
}
