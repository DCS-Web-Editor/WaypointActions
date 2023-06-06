interface SubOptions {
  name: string;
  children: string[] | SubTasks[] | null;
}

export interface Tasks {
  id: string;
  params: {
    tasks: Array<{
      auto: boolean;
      enabled: boolean;
      id: string;
      number: number;
      params: OptionParams | any;
    }>;
  };
}
export interface OptionParams {
  action: {
    id: "Option";
    params: {
      name: number;
      value: number | string | boolean;
      noTargetTypes?: string[];
      targetTypes?: string[];
      formationIndex?: number;
      varientIndex?: number;
    };
  };
}

export interface TaskDef {
  name: string;
  options: SubOptions[] | string[] | null;
}
