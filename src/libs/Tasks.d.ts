export interface Tasks {
  id: string;
  params: {
    tasks: Array<{
      auto: boolean;
      enabled: boolean;
      id: string;
      number: number;
      params: any; // Too many possible types to list here
      key?: string;
    }>;
  };
}

export namespace SetOption {
  interface SubOptions {
    name: string;
    children: string[] | SubTasks[] | null;
  }

  export interface TaskDef {
    name: string;
    options: SubOptions[] | string[] | null;
  }
}
